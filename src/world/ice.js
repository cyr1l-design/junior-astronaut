import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LAYOUT, SKY } from './layout.js';
import { heightAt, makeIceMaterial } from './terrain.js';
import { seededRandom, valueNoise } from './noise.js';
import { colliders } from './colliders.js';

// The natural ice shapes of the scene: the cave, the chaos blocks, loose ice
// chunks and the far ice blades. All share the ground's ice material, so the
// whole landscape reads as one sculpted piece. Positions come from layout.js
// and from fixed random seeds, so they are the same on every load.

export function createIce() {
  const g = new THREE.Group();
  g.name = 'ice';
  g.add(createCave());
  g.add(createChaosBlocks());
  g.add(createIceChunks());
  g.add(createIceBlades());
  return g;
}

// ---------------------------------------------------------------- the cave

// GLSL: is this world position inside the cave's mouth opening? The mouth is
// an arch: 9 m high in the middle, lower toward its sides.
const MOUTH_GLSL = /* glsl */ `
uniform vec3 uCaveCenter; uniform vec3 uMouthDir;
bool inCaveMouth(vec3 wp, float grow){
  vec3 rel = wp - uCaveCenter;
  float facing = dot(normalize(rel.xz), normalize(uMouthDir.xz));
  return facing > 0.86 - grow*0.03 && wp.y < 9.0 + grow - (1.0 - facing) * 30.0;
}`;

// The ice cave: a hollow ice mound at the foot of the west ridge. Outside it's
// ridge ice; inside, sunlight filtering through the ice turns everything blue
// (as in glacier caves on Earth). Shelter from radiation, but cold.
function createCave() {
  const { x, z, radius, mouthAngleDeg } = LAYOUT.cave;
  const group = new THREE.Group();
  group.name = 'cave';
  const a0 = THREE.MathUtils.degToRad(mouthAngleDeg);
  const mouthDir = new THREE.Vector3(Math.cos(a0), 0, -Math.sin(a0));
  const mouthUniforms = { uCaveCenter: { value: new THREE.Vector3(x, 0, z) }, uMouthDir: { value: mouthDir } };

  const bumpy = (geo, amp, seed, freq = 0.25) => {
    const p = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const n = valueNoise(v.x * freq + seed, v.z * freq + v.y * freq * 0.8) + 0.5 * valueNoise(v.x * freq * 2.3 + seed, v.z * freq * 2.3 - v.y * freq);
      v.multiplyScalar(1 + (n - 0.75) * amp);
      p.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();
    return geo;
  };

  // Outer shell, with the mouth cut out of it.
  const shellMat = makeIceMaterial({ side: THREE.DoubleSide });
  const baseCompile = shellMat.onBeforeCompile;
  shellMat.onBeforeCompile = (shader) => {
    baseCompile(shader);
    Object.assign(shader.uniforms, mouthUniforms);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + MOUTH_GLSL)
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (inCaveMouth(vWPos, 0.0)) discard;');
  };
  const shell = new THREE.Mesh(bumpy(new THREE.SphereGeometry(radius, 72, 40, 0, Math.PI * 2, 0, Math.PI / 2), 0.2, 1), shellMat);
  shell.scale.set(1, 0.75, 1);
  shell.castShadow = true;
  shell.receiveShadow = true;
  // The shadow pass needs the same cut, so real sunlight falls in through the
  // mouth and across the cave floor.
  const depthMat = new THREE.MeshDepthMaterial({ depthPacking: THREE.RGBADepthPacking });
  depthMat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, mouthUniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <project_vertex>', '#include <project_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\n' + MOUTH_GLSL)
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (inCaveMouth(vWPos, 0.0)) discard;');
  };
  shell.customDepthMaterial = depthMat;

  // Inner wall: glowing blue, scalloped like real melt-sculpted ice, with a
  // warm patch where the low Sun shines in through the mouth.
  const innerR = radius - 2.2;
  const innerMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      ...mouthUniforms,
      uSunDir: { value: SKY.sunDir.clone() },
      uShell: { value: new THREE.Vector2(radius, radius * 0.75) },
    },
    vertexShader: /* glsl */ `
      varying vec3 vWPos; varying vec3 vN;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWPos = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */ `
      varying vec3 vWPos; varying vec3 vN;
      uniform vec3 uSunDir; uniform vec2 uShell;
      ${MOUTH_GLSL}
      vec2 h2(vec2 p){ p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3))); return fract(sin(p)*43758.5453); }
      float scallop(vec2 x){ vec2 n=floor(x), f=fract(x); float md=8.;
        for(int j=-1;j<=1;j++) for(int i=-1;i<=1;i++){ vec2 g=vec2(float(i),float(j)); vec2 r=g+h2(n+g)-f; md=min(md, dot(r,r)); }
        return sqrt(md); }
      void main(){
        if (inCaveMouth(vWPos, 1.2)) discard;
        vec3 rel = vWPos - uCaveCenter;
        vec3 V = normalize(cameraPosition - vWPos);
        vec3 N = normalize(-vN);
        float az = atan(rel.z, rel.x);
        vec2 uv = vec2(az * 13.0, rel.y) * 0.42;
        float sc = scallop(uv) ;
        float sc2 = scallop(uv * 2.7 + 5.0);
        float up = smoothstep(0.0, 11.0, rel.y);
        vec3 deep = vec3(0.02, 0.10, 0.30);
        vec3 mid  = vec3(0.05, 0.42, 0.80);
        vec3 lite = vec3(0.45, 0.92, 1.00);
        vec3 col = mix(deep, mid, smoothstep(0.1, 0.75, sc) * (0.55 + 0.45*up));
        col = mix(col, lite, smoothstep(0.55, 1.0, sc) * (0.25 + 0.5*up) * (0.6 + 0.4*sc2));
        // Layers of old ice, faintly.
        col *= 0.88 + 0.16 * sin(rel.y * 1.9 + sc * 2.0);
        float fres = pow(1.0 - max(dot(N, V), 0.0), 2.5);
        col += vec3(0.25, 0.75, 1.0) * fres * 0.45;
        // Does the Sun reach this spot through the mouth? Follow the ray back
        // toward the Sun to where it leaves the cave, and test that point.
        vec3 d = normalize(uSunDir);
        vec3 s = vec3(1.0/uShell.x, 1.0/uShell.y, 1.0/uShell.x);
        vec3 o = rel * s; vec3 dd = d * s;
        float A = dot(dd,dd), B = 2.0*dot(o,dd), C = dot(o,o) - 1.0;
        float disc = B*B - 4.0*A*C;
        if (disc > 0.0) {
          float t = (-B + sqrt(disc)) / (2.0*A);
          vec3 hit = uCaveCenter + rel + d*t;
          if (t > 0.0 && inCaveMouth(hit, -0.8)) col = col*0.6 + vec3(1.25, 0.95, 0.62) * (0.55 + 0.45*sc);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const inner = new THREE.Mesh(bumpy(new THREE.SphereGeometry(innerR, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2), 0.12, 4), innerMat);
  inner.scale.set(1, 0.72, 1);

  // A thick sculpted lip around the mouth, so the opening has depth.
  const sideAngle = Math.acos(0.86);
  const rhoAt = (y) => radius * Math.sqrt(Math.max(0, 1 - Math.pow(y / (radius * 0.75), 2)));
  const lipPts = [];
  const at = (theta, y, push = 0) => {
    const rho = rhoAt(y) + push;
    return new THREE.Vector3(Math.cos(a0 + theta) * rho, y, -Math.sin(a0 + theta) * rho);
  };
  for (let y = -1; y < 4.8; y += 1.2) lipPts.push(at(-sideAngle - 0.03, Math.max(y, 0) + (y < 0 ? y : 0), 0.4));
  for (let i = 0; i <= 16; i++) {
    const th = -sideAngle + (i / 16) * 2 * sideAngle;
    lipPts.push(at(th, 9 - (1 - Math.cos(th)) * 30 + 0.5, 0.4));
  }
  for (let y = 3.6; y >= -1.2; y -= 1.2) lipPts.push(at(sideAngle + 0.03, Math.max(y, 0) + (y < 0 ? y : 0), 0.4));
  const lipGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lipPts), 90, 1.7, 9, false);
  {
    const p = lipGeo.attributes.position;
    const nrm = lipGeo.attributes.normal;
    for (let i = 0; i < p.count; i++) {
      const px = p.getX(i), py = p.getY(i), pz = p.getZ(i);
      const n = valueNoise(px * 0.5 + 3, pz * 0.5 + py * 0.45) - 0.5;
      p.setXYZ(i, px + nrm.getX(i) * n * 1.5, py + nrm.getY(i) * n * 1.5, pz + nrm.getZ(i) * n * 1.5);
    }
    lipGeo.computeVertexNormals();
  }
  const lip = new THREE.Mesh(lipGeo, makeIceMaterial());
  lip.castShadow = true;
  lip.receiveShadow = true;

  // Crystals: clusters of six-sided ice prisms glowing cyan. Kept away from
  // the walking line through the mouth.
  const crystalGeo = new THREE.LatheGeometry([new THREE.Vector2(0.0, 0), new THREE.Vector2(0.5, 0.02), new THREE.Vector2(0.42, 0.7), new THREE.Vector2(0, 1)], 6);
  const crystalMat = new THREE.MeshStandardMaterial({ color: 0x8fe9ff, emissive: 0x35c8ff, emissiveIntensity: 1.5, roughness: 0.15, metalness: 0, flatShading: true });
  crystalMat.onBeforeCompile = (shader) => {
    // Brighter toward the tip, as if lit from inside.
    shader.vertexShader = shader.vertexShader.replace('#include <common>', '#include <common>\nvarying float vTip;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvTip = position.y;');
    shader.fragmentShader = shader.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vTip;').replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance *= 0.35 + 1.5 * vTip * vTip;');
  };
  const rand = seededRandom(11);
  const clusters = [];
  while (clusters.length < 8) {
    const ang = rand() * Math.PI * 2;
    const d = 6.5 + rand() * 4.5;
    const cx = Math.cos(ang) * d;
    const cz = Math.sin(ang) * d;
    // Skip the corridor from the mouth to the centre.
    const along = cx * mouthDir.x + cz * mouthDir.z;
    const across = Math.abs(-cx * mouthDir.z + cz * mouthDir.x);
    if (along > -2 && across < 5) continue;
    clusters.push([cx, cz]);
  }
  const perCluster = 6;
  const crystals = new THREE.InstancedMesh(crystalGeo, crystalMat, clusters.length * perCluster);
  crystals.name = 'caveCrystals';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  let ci = 0;
  for (const [cx, cz] of clusters) {
    for (let k = 0; k < perCluster; k++) {
      const big = k === 0;
      const ox = big ? 0 : (rand() - 0.5) * 2.2;
      const oz = big ? 0 : (rand() - 0.5) * 2.2;
      const hgt = big ? 3.2 + rand() * 2.6 : 0.9 + rand() * 2.0;
      const wid = big ? 0.9 + rand() * 0.5 : 0.35 + rand() * 0.45;
      e.set((rand() - 0.5) * (big ? 0.25 : 0.9), rand() * 3, (rand() - 0.5) * (big ? 0.25 : 0.9));
      q.setFromEuler(e);
      m.compose(new THREE.Vector3(cx + ox, heightAt(x + cx + ox, z + cz + oz) - 0.15, cz + oz), q, new THREE.Vector3(wid, hgt, wid));
      crystals.setMatrixAt(ci++, m);
    }
    colliders.push({ x: x + cx, z: z + cz, r: 1.2 });
  }

  const light = new THREE.PointLight(0x4fc8ff, 46, 26, 1.5);
  light.position.set(-1, 4.5, 0);
  group.add(shell, inner, lip, crystals, light);
  group.position.set(x, 0, z);
  group.userData.mouthDir = mouthDir;
  return group;
}

// ------------------------------------------------------------ chaos blocks

// A tilted raft of ice: a slab with a broken, slanted top and fluted faces
// (kind 0), or a shard that narrows to an edge (kind 1).
function slabGeometry(kind) {
  const geo = new THREE.BoxGeometry(1, 1, 1, 6, 10, 3);
  const p = geo.attributes.position;
  const ss = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  for (let i = 0; i < p.count; i++) {
    let vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
    const t = vy + 0.5;
    const n = valueNoise(vx * 3 + vy * 2 + kind * 7.3, vz * 3 - vy) - 0.5;
    const n2 = valueNoise(vx * 7 + 11, vy * 5 + vz * 6 + kind) - 0.5;
    const taper = kind === 0 ? 1 - 0.28 * t * t : 1 - 0.5 * t;
    const thin = kind === 0 ? 1 - 0.3 * t : 1 - 0.82 * t * t;
    const flute = Math.abs(vz) > 0.49 ? 0.05 * Math.sin(vx * 19 + n * 4) : 0;
    vy += (vx * (kind === 0 ? 0.3 : 0.55) + n * 0.12) * ss(0.55, 1, t);
    vx = vx * taper * (1 + n * 0.2) + n2 * 0.04;
    vz = (vz + Math.sign(vz) * flute) * thin * (1 + n * 0.22) - t * 0.22;
    p.setXYZ(i, vx, vy, vz);
  }
  geo.computeVertexNormals();
  return geo;
}

function createChaosBlocks() {
  // Chaos terrain: tilted rafts of ice frozen in place (real Europa landform).
  // The random sequence below fixes every block's place and size; don't
  // reorder the rand() calls or the landmarks move.
  const rand = seededRandom(21);
  const count = 70;
  const blocks = [];
  for (let placed = 0; placed < count; placed++) {
    // Two fields: between the base and the canyon (north-east), and beyond it.
    const far = placed > 40;
    const bx = far ? 150 + rand() * 160 : 46 + rand() * 24;
    const bz = far ? -260 + rand() * 260 : -170 + rand() * 120;
    const w = 4 + rand() * (far ? 22 : 12);
    const h = 6 + rand() * (far ? 40 : 22);
    const d = 3 + rand() * 8;
    const euler = new THREE.Euler((rand() - 0.5) * 0.9, rand() * Math.PI, (rand() - 0.5) * 0.9);
    blocks.push({ bx, bz, w, h, d, euler, kind: placed % 3 === 1 ? 1 : 0 });
    if (!far) colliders.push({ x: bx, z: bz, r: Math.max(w, d) * 0.55 });
  }
  const group = new THREE.Group();
  group.name = 'chaosBlocks';
  const mat = makeIceMaterial();
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  for (const kind of [0, 1]) {
    const list = blocks.filter((b) => b.kind === kind);
    const mesh = new THREE.InstancedMesh(slabGeometry(kind), mat, list.length);
    list.forEach((b, i) => {
      q.setFromEuler(b.euler);
      m.compose(new THREE.Vector3(b.bx, heightAt(b.bx, b.bz) + b.h * 0.3, b.bz), q, new THREE.Vector3(b.w, b.h, b.d));
      mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

// ---------------------------------------------------------- loose ice chunks

// Rounded lumps of ice lying around: at the feet of the chaos blocks, along
// the ridge and the canyon rim, a few on the plain, and some big ones near
// where the player starts. The ice material frosts their tops white and
// leaves their sides bare blue. Small ones can be stepped over; big ones
// block the way.
function createIceChunks() {
  let geo = new THREE.IcosahedronGeometry(1, 2);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo); // shared corners, so the lumps are smooth, not faceted
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
    const n = 0.7 + 0.45 * valueNoise(vx * 1.6 + 5, vz * 1.6 + vy * 1.3) + 0.18 * valueNoise(vx * 4.1 + 2, vz * 4.1 - vy * 3.3);
    p.setXYZ(i, vx * n, Math.max(vy * n * 0.8, -0.3), vz * n);
  }
  geo.computeVertexNormals();
  const rand = seededRandom(77);
  const spots = [];
  const tryAdd = (cx, cz, size) => {
    if (Math.hypot(cx - 12, cz - 4) < 34) return; // keep the base pad clear
    const cv = LAYOUT.cave;
    if (Math.hypot(cx - cv.x, cz - cv.z) < cv.radius + 4) return;
    const h = heightAt(cx, cz);
    if (h < -2.5) return; // not floating in the canyon wall
    spots.push({ cx, cz, h, size });
  };
  // Around the near chaos field.
  for (let i = 0; i < 150; i++) tryAdd(40 + rand() * 38, -180 + rand() * 140, 0.25 + rand() * rand() * 1.1);
  // Along the foot of the cave ridge.
  for (let i = 0; i < 90; i++) tryAdd(-36 - rand() * 26, -150 + rand() * 270, 0.25 + rand() * rand() * 1.3);
  // Along the canyon's near rim.
  for (let i = 0; i < 70; i++) tryAdd(56 + rand() * 20, -60 + rand() * 220, 0.2 + rand() * rand() * 1.0);
  // A scatter on the plain.
  for (let i = 0; i < 110; i++) {
    const a = rand() * Math.PI * 2;
    const r = 36 + rand() * 120;
    tryAdd(Math.cos(a) * r, Math.sin(a) * r, 0.15 + rand() * rand() * 0.6);
  }
  // Big boulders: framing the first view, and a few landmarks further out.
  const big = [
    [11, 50, 1.9], [8.5, 47.5, 1.0], [28.5, 47, 1.6], [31, 49.5, 0.9], [-6, 46, 2.4], [-9.5, 43, 1.2],
    [44, 44, 2.2], [47.5, 41, 1.1], [3, 70, 2.0], [36, 68, 2.6], [-28, 40, 2.8], [-31, 36.5, 1.3],
    [58, 10, 2.3], [61, -18, 1.8], [-24, -52, 2.6], [8, -62, 2.1], [40, -70, 2.9],
  ];
  for (const [bx, bz, size] of big) {
    spots.push({ cx: bx, cz: bz, h: heightAt(bx, bz), size });
    if (size > 1.4) colliders.push({ x: bx, z: bz, r: size * 0.95 });
  }
  const mesh = new THREE.InstancedMesh(geo, makeIceMaterial(), spots.length);
  mesh.name = 'iceChunks';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  spots.forEach((s, i) => {
    q.setFromEuler(new THREE.Euler((rand() - 0.5) * 0.4, rand() * 6.28, (rand() - 0.5) * 0.4));
    m.compose(new THREE.Vector3(s.cx, s.h + s.size * 0.1, s.cz), q, new THREE.Vector3(s.size * (0.9 + rand() * 0.6), s.size * (0.65 + rand() * 0.45), s.size * (0.9 + rand() * 0.6)));
    mesh.setMatrixAt(i, m);
  });
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// --------------------------------------------------------------- ice blades

function createIceBlades() {
  // Tall ice blades (penitentes) far to the north. PREDICTED, not confirmed:
  // the game labels them "scientists think these may exist".
  const rand = seededRandom(5);
  const count = 420;
  // A thin, slightly curved blade instead of a round cone.
  const geo = new THREE.ConeGeometry(1, 1, 4, 5);
  geo.translate(0, 0.5, 0);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const t = p.getY(i);
    p.setXYZ(i, p.getX(i) + 0.35 * t * t, t, p.getZ(i) * 0.4);
  }
  geo.computeVertexNormals();
  const mesh = new THREE.InstancedMesh(geo, makeIceMaterial(), count);
  mesh.name = 'iceBlades';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  for (let i = 0; i < count; i++) {
    const a = -Math.PI / 2 + (rand() - 0.5) * 1.6;
    const r = 650 + rand() * 500;
    const bx = Math.cos(a) * r;
    const bz = Math.sin(a) * r;
    const h = 15 + rand() * 30;
    q.setFromEuler(new THREE.Euler((rand() - 0.5) * 0.2, rand() * 3, (rand() - 0.5) * 0.2));
    m.compose(new THREE.Vector3(bx, heightAt(bx, bz) - 1, bz), q, new THREE.Vector3(2 + rand() * 3, h, 2 + rand() * 3));
    mesh.setMatrixAt(i, m);
  }
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}
