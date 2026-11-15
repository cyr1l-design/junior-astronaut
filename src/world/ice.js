import * as THREE from 'three';
import { mergeVertices, toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LAYOUT, SKY, LINEAE } from './layout.js';
import { heightAt, makeIceMaterial, ICE_TEX } from './terrain.js';
import { seededRandom, valueNoise } from './noise.js';
import { colliders } from './colliders.js';

// The natural ice shapes of the scene: the cave, the chaos blocks, loose ice
// chunks and the far ice blades. All share the ground's ice material, so the
// whole landscape reads as one sculpted piece. Positions come from layout.js
// and from fixed random seeds, so they are the same on every load.

// How steep faces look on each kind of object (see makeIceMaterial). The big
// mountain uses the default; smaller things get the same frost-and-blue-ice
// pattern shrunk to their size, a little more frost, and much less rust, so
// they match the mountain instead of turning blotchy.
const SMALL_ICE = { faceScale: 2.4, frost: 0.1, rust: 0.3, patch: 0.6 };
const CAVE_ICE = { faceScale: 2.2, frost: 0.12, rust: 0.12, patch: 0.7 };
// The ground without its small hummocks: used to decide WHERE loose ice may
// lie (level enough, not in the canyon), so those rules give the same answer
// they did before the hummocks were added. Things still SIT on the real ground.
const flatH = (x, z) => heightAt(x, z, false);
const BOULDER_ICE = { faceScale: 5, frost: 0.12, rust: 0.2, patch: 0.25 };

// The cave's inner glow follows the daylight (set by src/game/daylight.js):
// where the Sun is, and how much daylight there is (1 = day, 0 = dark).
export const CAVE_LIGHT = { uSunDir: { value: SKY.sunDir.clone() }, uDay: { value: 1 } };

export function createIce() {
  const g = new THREE.Group();
  g.name = 'ice';
  g.add(createCave());
  g.add(createChaosBlocks());
  g.add(createIceChunks());
  g.add(createIceBlades());
  g.add(createIceArch());
  g.add(createBrokenIce());
  g.add(createSaltCrust());
  return g;
}

// ------------------------------------------------------------- salt crust

// Brown stone-like salt, as a real material: the Rock056 texture wrapped
// onto the shape from three sides, with its bumps, pushed toward Europa's
// red-brown. (Europa's red-brown streaks are thought to be salts darkened by
// Jupiter's radiation; references/europa.md.)
function makeSaltStoneMaterial() {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.88, metalness: 0 });
  mat.onBeforeCompile = (shader) => {
    shader.uniforms.tSaltC = ICE_TEX.tSaltC;
    shader.uniforms.tSaltN = ICE_TEX.tSaltN;
    shader.uniforms.uTexOn = ICE_TEX.uTexOn;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vSWPos;\nvarying vec3 vSWN;')
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 swp = vec4(transformed, 1.0); vec3 swn = objectNormal;
        #ifdef USE_INSTANCING
          swp = instanceMatrix * swp; swn = mat3(instanceMatrix) * swn;
        #endif
        vSWPos = (modelMatrix * swp).xyz; vSWN = normalize(mat3(modelMatrix) * swn);`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vSWPos; varying vec3 vSWN;
        uniform sampler2D tSaltC, tSaltN; uniform float uTexOn;
        vec3 sTri(sampler2D t, vec3 p, vec3 w){ return texture(t, p.zy).rgb*w.x + texture(t, p.xz).rgb*w.y + texture(t, p.xy).rgb*w.z; }`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 sN = normalize(vSWN);
        vec3 sW = pow(abs(sN), vec3(4.0)); sW /= (sW.x + sW.y + sW.z);
        vec3 sP = vSWPos / 2.4;
        vec3 sC = sTri(tSaltC, sP, sW);
        float sAvg = dot(textureLod(tSaltC, vec2(0.5), 10.0).rgb, vec3(0.3, 0.59, 0.11)) + 1e-3;
        vec3 sRel = sC / sAvg; sRel = mix(vec3(dot(sRel, vec3(0.3, 0.59, 0.11))), sRel, 0.55); // calm the texture's yellow-green
        vec3 stone = pow(sRel, vec3(1.5)) * vec3(0.88, 0.5, 0.36) * 0.5;
        diffuseColor.rgb *= mix(vec3(0.45, 0.2, 0.12), stone, uTexOn);`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        vec3 sT = (sTri(tSaltN, sP, sW) * 2.0 - 1.0) * uTexOn;
        vec3 sBend = sW.x*vec3(0.0, sT.y, sT.x) + sW.y*vec3(sT.x, 0.0, sT.y) + sW.z*vec3(sT.x, sT.y, 0.0);
        normal = normalize(normal + (viewMatrix * vec4(sBend * 0.8, 0.0)).xyz);`
      );
  };
  return mat;
}

// Low, lumpy crusts of salt along the two big red lines, sitting in their
// groove, so the salt has real height instead of being painted on. Low
// enough to step over. Kept off the levelled base pad.
function createSaltCrust() {
  let geo = new THREE.IcosahedronGeometry(1, 3);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
    const n = 0.75 + 0.35 * valueNoise(vx * 2.1 + 3, vz * 2.1 + vy * 1.7) + 0.15 * valueNoise(vx * 5.3 + 9, vz * 5.3 - vy * 4.1);
    p.setXYZ(i, vx * n, vy * n, vz * n);
  }
  geo.computeVertexNormals();

  const rand = seededRandom(512);
  const bp = LAYOUT.basePad;
  const cv = LAYOUT.cave;
  const spots = [];
  for (const l of LINEAE) {
    const size = l.width / 7;
    for (let x = -230; x < 230; x += (0.6 + rand() * 0.9) * size) {
      const zc = l.slope * x + l.offset + l.wobbleAmp * Math.sin(x * l.wobbleFreq);
      const z = zc + (rand() - 0.5) * 0.7 * size;
      if (Math.hypot(x, z) > 235 || Math.hypot(x - bp.x, z - bp.z) < bp.outer) continue;
      if (Math.hypot(x - cv.x, z - cv.z) < cv.radius + 4) continue;
      const gh = heightAt(x, z);
      if (gh < -2.5 || gh > 14) continue;
      const steep = Math.abs(flatH(x + 1.5, z) - flatH(x - 1.5, z)) + Math.abs(flatH(x, z + 1.5) - flatH(x, z - 1.5));
      if (rand() < 0.15 || steep > 0.9) continue; // small breaks in the crust; none on slopes, where they looked stuck on
      const w = (0.9 + rand() * 1.5) * size;
      spots.push({ x, z, gh, w, h: (0.22 + rand() * rand() * 0.55) * size, d: w * (0.6 + rand() * 0.5), ry: -Math.atan(l.slope) + (rand() - 0.5) * 0.8 });
    }
  }
  const mesh = new THREE.InstancedMesh(geo, makeSaltStoneMaterial(), spots.length);
  mesh.name = 'saltCrust';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  spots.forEach((s, i) => {
    q.setFromEuler(e.set((rand() - 0.5) * 0.15, s.ry, (rand() - 0.5) * 0.15));
    m.compose(new THREE.Vector3(s.x, s.gh - s.h * 0.45, s.z), q, new THREE.Vector3(s.w, s.h, s.d));
    mesh.setMatrixAt(i, m);
  });
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

// ------------------------------------------------------------ broken ice

// Tilted slabs and shards from a list: { x, z, w, h, d, rx, ry, rz, kind,
// sink }. Turned by heading (ry) last, so rx leans the slab over sideways.
// "sink" is how much of its height is buried.
function slabField(list, name, mat) {
  const group = new THREE.Group();
  group.name = name;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  for (const kind of [0, 1]) {
    const items = list.filter((b) => b.kind === kind);
    if (!items.length) continue;
    const mesh = new THREE.InstancedMesh(slabGeometry(kind), mat, items.length);
    items.forEach((b, i) => {
      q.setFromEuler(e.set(b.rx, b.ry, b.rz, 'YXZ'));
      m.compose(new THREE.Vector3(b.x, heightAt(b.x, b.z) + b.h * (0.5 - (b.sink ?? 0.2)), b.z), q, new THREE.Vector3(b.w, b.h, b.d));
      mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

// More of Europa's broken crust, matched to Cyril's reference pictures for
// how full the scene is: slabs along both rims of the canyon and on the far
// crest, a chaos field to the east, plates pushed up along the red cracks,
// an apron of blocks around the cave, and a few angular blocks framing the
// first view. Fixed seed: the same on every load.
function createBrokenIce() {
  const rand = seededRandom(303);
  const between = (a, b) => a + rand() * (b - a);
  const mat = makeIceMaterial({}, SMALL_ICE); // broken ice: slabs and plates
  const c = LAYOUT.canyon;
  const canyonX = (z) => c.centerX + 14 * Math.sin(z / 130);
  const bp = LAYOUT.basePad;
  const cv = LAYOUT.cave;
  const clearOfBase = (x, z, margin) => Math.hypot(x - bp.x, z - bp.z) > bp.inner + margin;
  const list = [];
  const add = (b, collide) => {
    list.push(b);
    if (collide) colliders.push({ x: b.x, z: b.z, r: Math.max(b.w, b.d) * 0.62 });
  };

  // Near rim of the canyon: a broken line of leaning slabs, with gaps so the
  // edge can still be reached.
  for (let z = -150; z < 170; z += between(5, 10)) {
    if (rand() < 0.35) continue;
    const x = canyonX(z) - c.halfWidth - c.rimBack + between(-3, 3);
    const slab = { x, z, w: between(3, 9), h: between(3, 8.5), d: between(1.5, 4), rx: between(-0.5, 0.5), ry: rand() * 6.28, rz: between(-0.4, 0.4), kind: rand() < 0.4 ? 1 : 0 };
    // None in the gap that shows the canyon.
    if (Math.abs(z - c.notchZ) > 13) add(slab, true);
  }
  // The far crest: big slabs crowding its top, like a ridge of broken teeth.
  for (let z = -220; z < 260; z += between(4, 8)) {
    const x = canyonX(z) + c.halfWidth + 24 + between(-12, 12);
    const h = between(10, 32);
    add({ x, z, w: between(6, 16), h, d: between(3, 8), rx: between(-0.6, 0.6), ry: rand() * 6.28, rz: between(-0.4, 0.4), kind: rand() < 0.45 ? 1 : 0, sink: 0.3 }, false);
  }
  // Chaos field east and south-east, beyond the crest.
  for (let i = 0; i < 40; i++) {
    const x = between(170, 300);
    const z = between(-20, 240);
    add({ x, z, w: between(5, 22), h: between(8, 36), d: between(3, 10), rx: between(-0.45, 0.45), ry: rand() * 6.28, rz: between(-0.45, 0.45), kind: rand() < 0.35 ? 1 : 0 }, false);
  }

  // (Leaning slabs used to stand along both sides of each red salt line.
  // Cyril: the ice around the line looked sharp and unreal, so they are
  // gone; the line now runs through smooth ground with its low salt crust.)

  // (There used to be an apron of fallen blocks around the cave dome here.
  // Cyril: the rocks above the cave "look like they shouldn't even be
  // there", so they are gone.)

  // Angular blocks framing the first view (left and right, centre kept open).
  // They draw from their own random sequence, so changes to the terrain or
  // to the slabs above never alter their shape and lean.
  const fr = seededRandom(808);
  const frBetween = (a, b) => a + fr() * (b - a);
  for (const [x, z, s] of [[-15, 47, 4.5], [-22, 33, 3.2], [53, 46, 5], [61, 30, 3.6], [-9, 60, 2.6], [47, 60, 2.8]]) {
    add({ x, z, w: s, h: s * 1.3, d: s * 0.7, rx: frBetween(-0.45, 0.45), ry: fr() * 6.28, rz: frBetween(-0.4, 0.4), kind: fr() < 0.5 ? 1 : 0, sink: 0.25 }, true);
  }

  const group = new THREE.Group();
  group.name = 'brokenIce';
  group.add(slabField(list, 'brokenSlabs', mat));
  group.add(createPlates(mat));
  return group;
}

// A broken plate of crust: an uneven outline, a few tens of centimetres
// thick, with rounded edges. Lies flat at scale 1, one metre across.
function plateGeometry(seed) {
  const rand = seededRandom(seed);
  const shape = new THREE.Shape();
  const n = 6 + Math.floor(rand() * 3);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + (rand() - 0.5) * 0.5;
    const r = 0.62 + rand() * 0.38;
    if (i === 0) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.09, bevelSegments: 3, steps: 1 });
  geo.rotateX(-Math.PI / 2); // lie flat; its thickness now runs up
  geo.computeBoundingBox();
  geo.translate(0, -geo.boundingBox.min.y, 0); // bottom at 0
  geo.computeVertexNormals();
  return geo;
}

// Broken plates scattered over the open plain, some lying nearly flat, some
// with one edge pushed up, so the ground in front of the player has real
// height instead of being a painted sheet.
function createPlates(mat) {
  const bp = LAYOUT.basePad;
  const cv = LAYOUT.cave;
  const sp = LAYOUT.spawn;
  const items = [];
  // Every try draws ALL its random numbers first, whether or not its plate
  // is kept. So try number 37 always proposes the same plate in the same
  // place: reshaping the terrain can add or drop single plates, but can no
  // longer shuffle every plate after it to somewhere new.
  const drawer = (seed) => {
    const rand = seededRandom(seed);
    return () => ({ a: rand(), b: rand(), c: rand(), w: rand(), tiltPick: rand(), tilt: rand(), thick: rand(), dir: rand(), spin: rand(), kind: rand(), depth: rand() });
  };
  // Not along the red salt lines (Cyril: the ice around the salty line
  // "is very acute": tilted plates and sharp slabs crowded it).
  const nearLinea = (x, z) => LINEAE.some((l) => Math.abs(z - (l.slope * x + l.offset + l.wobbleAmp * Math.sin(x * l.wobbleFreq))) < l.width * 1.9);
  const tooSteep = (x, z, limit) => Math.abs(flatH(x + 2, z) - flatH(x - 2, z)) + Math.abs(flatH(x, z + 2) - flatH(x, z - 2)) > limit;
  const keep = (x, z, r, wMin, wMax, tiltHi, thickK) => {
    const w = wMin + r.w * (wMax - wMin);
    const tilt = r.tiltPick < tiltHi.chance ? tiltHi.min + r.tilt * (tiltHi.max - tiltHi.min) : r.tilt * 0.12;
    const thick = (thickK.min + r.thick * (thickK.max - thickK.min)) * (0.6 + w * thickK.grow);
    items.push({ x, z, w, tilt, thick, dir: r.dir * 6.28, spin: r.spin * 6.28, kind: Math.floor(r.kind * 4), depth: 0.6 + r.depth * 0.35 });
    // The raised edge stands this high; tall ones block the way.
    const raise = Math.sin(tilt) * w * 0.5 + thick * 0.32;
    if (raise > 0.75) colliders.push({ x, z, r: w * 0.7 });
  };

  // Denser near where the player starts, thinning out across the plain.
  const drawNear = drawer(919);
  let kept = 0;
  for (let tries = 0; kept < 170 && tries < 4000; tries++) {
    const r = drawNear();
    const ang = r.a * Math.PI * 2;
    const dist = 8 + Math.pow(r.b, 1.6) * 190;
    const x = sp.x + Math.cos(ang) * dist;
    const z = sp.z + Math.sin(ang) * dist - 20;
    if (Math.hypot(x - bp.x, z - bp.z) < bp.inner + 4) continue;
    if (Math.hypot(x - sp.x, z - sp.z) < 13) continue; // nothing looming right in front of the first view
    if (Math.hypot(x - cv.x, z - cv.z) < cv.radius + 9) continue;
    if (nearLinea(x, z)) continue;
    const gh = flatH(x, z);
    if (gh < -2.5 || gh > 5) continue;
    if (tooSteep(x, z, 1.4)) continue;
    keep(x, z, r, 1.6, 6.5, { chance: 0.45, min: 0.18, max: 0.5 }, { min: 0.7, max: 1.6, grow: 0.12 });
    kept++;
  }
  // The open plain to the north and north-east: bigger plates, some in
  // loose groups, so the far ground isn't one bare sheet.
  const drawNorth = drawer(920);
  const north = [];
  for (let tries = 0; north.length < 190 && tries < 5000; tries++) {
    const r = drawNorth();
    const grouped = r.a < 0.5 && north.length > 0;
    const anchor = grouped ? north[Math.floor(r.b * north.length)] : null;
    const x = grouped ? anchor.x + (r.c - 0.5) * 28 : -40 + r.b * 190;
    const z = grouped ? anchor.z + (r.depth - 0.5) * 28 : -300 + r.c * 245;
    if (Math.hypot(x - bp.x, z - bp.z) < bp.inner + 6) continue;
    if (Math.hypot(x - cv.x, z - cv.z) < cv.radius + 9) continue;
    if (nearLinea(x, z)) continue;
    const gh = flatH(x, z);
    if (gh < -2.5 || gh > 12) continue;
    if (tooSteep(x, z, 1.8)) continue;
    north.push({ x, z });
    keep(x, z, r, 2.5, 9, { chance: 0.5, min: 0.15, max: 0.45 }, { min: 0.8, max: 1.7, grow: 0.1 });
  }

  const group = new THREE.Group();
  group.name = 'plates';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  for (let kind = 0; kind < 4; kind++) {
    const list = items.filter((p) => p.kind === kind);
    if (!list.length) continue;
    const mesh = new THREE.InstancedMesh(plateGeometry(41 + kind * 13), mat, list.length);
    list.forEach((p, i) => {
      // Tip the plate up toward "dir"; bury its low edge a little.
      q.setFromEuler(e.set(Math.cos(p.dir) * p.tilt, p.spin, Math.sin(p.dir) * p.tilt, 'YXZ'));
      const y = heightAt(p.x, p.z) - p.thick * 0.12 - Math.sin(p.tilt) * p.w * 0.25;
      m.compose(new THREE.Vector3(p.x, y, p.z), q, new THREE.Vector3(p.w, p.thick, p.w * p.depth));
      mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
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
  const shellMat = makeIceMaterial({}, CAVE_ICE); // outside only; the inside is the glowing wall below
  const baseCompile = shellMat.onBeforeCompile;
  shellMat.onBeforeCompile = (shader) => {
    baseCompile(shader);
    Object.assign(shader.uniforms, mouthUniforms);
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + MOUTH_GLSL)
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (inCaveMouth(vWPos, 0.0)) discard;');
  };
  // The cave's own shape: a low dome. The glowing inside wall keeps it.
  const domeGeo = bumpy(new THREE.SphereGeometry(radius, 96, 56, 0, Math.PI * 2, 0, Math.PI / 2), 0.2, 1);
  // The OUTSIDE is that dome pulled up into a craggy peak (Cyril: the plain
  // dome "looks like a tube, something artificially created"). The top is
  // drawn up to a summit that leans back into the mountain, with spurs
  // running down from it, crags on its flanks and a wider, uneven foot.
  // Nothing moves right around the mouth, so the outside still meets the
  // inside wall there, under the arch.
  const peakOver = (dome) => {
    const geo = dome.clone();
    const p = geo.attributes.position;
    const ss = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
    const ridgy = (a, b) => { const n = 1 - Math.abs(2 * valueNoise(a, b) - 1); return n * n; };
    const PEAK = 17; // metres added on top of the 12 m dome
    for (let i = 0; i < p.count; i++) {
      let vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
      const dy = Math.min(1, Math.max(0, vy / radius));
      const hl = Math.hypot(vx, vz) || 1e-6;
      const hx = vx / hl, hz = vz / hl;
      const facing = hx * mouthDir.x + hz * mouthDir.z;
      const ang = Math.atan2(hz, hx);
      // 0 around the mouth, 1 everywhere else; the very top also moves.
      const w = Math.max(ss(0.84, 0.45, facing), ss(10.4, 12, vy * 0.75));
      if (w <= 0) continue;
      const spur = 0.62 + 0.55 * ridgy(ang * 1.9 + 4.2, 1.7) + 0.2 * valueNoise(ang * 5.1, 9.3);
      const crag = ridgy(vx * 0.16 + 2, vz * 0.16 + vy * 0.14) - 0.42;
      const chip = valueNoise(vx * 0.45 + 7, vz * 0.45 - vy * 0.4) - 0.5;
      // Up to the summit, more the higher the point already is.
      vy += (w * PEAK * spur * Math.pow(dy, 1.5)) / 0.75;
      // The summit leans back, away from the mouth.
      const lean = w * 6.5 * dy * dy;
      vx -= mouthDir.x * lean;
      vz -= mouthDir.z * lean;
      // Crags and chips, and a wider, uneven foot.
      const out = w * (3.4 * crag + 1.1 * chip + 4.2 * (1 - dy) * (1 - dy) * (0.35 + valueNoise(ang * 2.3 + 1, 5.5)));
      vx += hx * out;
      vz += hz * out;
      vy += (w * 1.6 * crag) / 0.75;
      p.setXYZ(i, vx, vy, vz);
    }
    geo.computeVertexNormals();
    return geo;
  };
  const shell = new THREE.Mesh(peakOver(domeGeo), shellMat);
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
  const innerR = radius * 0.985; // the glowing wall: the shell itself, a hand-width inside it
  const innerMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      ...mouthUniforms,
      uSunDir: CAVE_LIGHT.uSunDir,
      uDay: CAVE_LIGHT.uDay,
      uShell: { value: new THREE.Vector2(radius, radius * 0.75) },
      uTexOn: ICE_TEX.uTexOn,
      tIceC: ICE_TEX.tIceC,
      tFrostC: ICE_TEX.tFrostC,
      tCrackC: ICE_TEX.tCrackC,
    },
    vertexShader: /* glsl */ `
      varying vec3 vWPos; varying vec3 vN;
      void main(){ vec4 wp = modelMatrix * vec4(position, 1.0); vWPos = wp.xyz;
        vN = normalize(mat3(modelMatrix) * normal);
        gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: /* glsl */ `
      varying vec3 vWPos; varying vec3 vN;
      uniform vec3 uSunDir; uniform vec2 uShell; uniform float uDay;
      uniform sampler2D tIceC, tFrostC, tCrackC; uniform float uTexOn;
      ${MOUTH_GLSL}
      float lum(vec3 c){ return dot(c, vec3(0.3, 0.59, 0.11)); }
      // A photo texture's light-and-dark pattern (1 = average), projected
      // from three sides and blended, so it wraps the dome without seams or
      // stretching.
      float tri(sampler2D t, vec3 p, vec3 n){
        vec3 w = pow(abs(n), vec3(4.0)); w /= (w.x + w.y + w.z);
        float v = lum(texture(t, p.zy).rgb)*w.x + lum(texture(t, p.xz).rgb)*w.y + lum(texture(t, p.xy).rgb)*w.z;
        return mix(1.0, (v + 0.02) / (lum(textureLod(t, vec2(0.5), 10.0).rgb) + 0.02), uTexOn);
      }
      void main(){
        if (inCaveMouth(vWPos, 0.0)) discard;
        vec3 rel = vWPos - uCaveCenter;
        vec3 V = normalize(cameraPosition - vWPos);
        vec3 N = normalize(-vN);
        // Glacier-cave ice: light comes through the thin roof, so it is
        // brighter overhead and deep blue low down, with the grain, bubbles
        // and cracks of real ice, and faint layers of old ice.
        float up = smoothstep(-0.5, 10.0, rel.y);
        float grain = tri(tIceC, rel / 7.0, vN);
        float frost = tri(tFrostC, rel / 3.5, vN);
        float cracks = tri(tCrackC, rel / 6.0, vN);
        float swirl = 0.5 + 0.5 * sin(rel.x * 0.35 + 2.0 * sin(rel.z * 0.27 + rel.y * 0.2)) * sin(rel.z * 0.31 + 1.7 * sin(rel.x * 0.23));
        vec3 deep = vec3(0.02, 0.13, 0.38);
        vec3 mid  = vec3(0.07, 0.48, 0.86);
        vec3 lite = vec3(0.52, 0.90, 1.00);
        vec3 col = mix(deep, mid, clamp(0.25 + 0.55*up + 0.25*(swirl - 0.5), 0.0, 1.0));
        col *= mix(1.0, grain, 0.55);
        col = mix(col, lite, clamp((cracks - 1.0) * 0.9 + (frost - 1.0) * 0.5, 0.0, 1.0) * (0.35 + 0.4*up));
        col *= 0.92 + 0.1 * sin(rel.y * 2.3 + 1.4 * sin(rel.x * 0.4 + rel.z * 0.3));
        // Kept between 0 and 1: looking at the wall dead-on, rounding can make
        // dot(N, V) a hair more than 1, and a power of a negative number is
        // not a number at all. That one broken pixel is what the glow effect
        // smeared into black squares inside the cave.
        float fres = pow(clamp(1.0 - dot(N, V), 0.0, 1.0), 2.5);
        col += vec3(0.25, 0.75, 1.0) * fres * 0.35;
        float sc = clamp(grain * 0.5, 0.0, 1.0);
        // The glow is daylight coming through the ice: dimmer when it's dark.
        col *= 0.32 + 0.68 * uDay;
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
          if (uDay > 0.3 && d.y > 0.02 && t > 0.0 && inCaveMouth(hit, -0.8)) col = col*0.6 + vec3(1.25, 0.95, 0.62) * (0.55 + 0.45*sc);
        }
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  // The same shape as the shell, a hand-width smaller, so the glowing wall
  // and the outside meet cleanly at the mouth (two different domes left a
  // gap you could see into from the opening).
  const inner = new THREE.Mesh(domeGeo, innerMat);
  inner.scale.set(0.985, 0.75 * 0.985, 0.985);

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
  // An arch of broken ice blocks: few sides, pushed in and out in big
  // uneven lumps, with hard edges (it was a round tube, and looked like one).
  let lipGeo = new THREE.TubeGeometry(new THREE.CatmullRomCurve3(lipPts), 54, 2.0, 6, false);
  {
    const p = lipGeo.attributes.position;
    const nrm = lipGeo.attributes.normal;
    for (let i = 0; i < p.count; i++) {
      const px = p.getX(i), py = p.getY(i), pz = p.getZ(i);
      const big = valueNoise(px * 0.21 + 3, pz * 0.21 + py * 0.19) - 0.45;
      const small = valueNoise(px * 0.62 + 8, pz * 0.62 - py * 0.55) - 0.5;
      const n = 2.4 * big + 0.9 * small;
      p.setXYZ(i, px + nrm.getX(i) * n, py + nrm.getY(i) * n, pz + nrm.getZ(i) * n);
    }
    lipGeo.deleteAttribute('normal');
    lipGeo.deleteAttribute('uv');
    lipGeo = toCreasedNormals(mergeVertices(lipGeo), 0.45);
  }
  const lip = new THREE.Mesh(lipGeo, makeIceMaterial({}, CAVE_ICE));
  lip.castShadow = true;
  lip.receiveShadow = true;

  // Crystals: clusters of six-sided ice prisms glowing cyan. Kept away from
  // the walking line through the mouth.
  // A six-sided column with a pointed, faceted tip (the way ice crystals
  // grow), slightly wider at its foot.
  const crystalGeo = new THREE.LatheGeometry([
    new THREE.Vector2(0.0, -0.05), new THREE.Vector2(0.5, -0.05), new THREE.Vector2(0.47, 0.74), new THREE.Vector2(0.0, 1.0),
  ], 6);
  // Glassy: a deep blue body, glowing at the tip and along the edges that face
  // away from you (as light does inside clear ice), never a flat pale fill.
  const glassyIce = (body, glow, glowIntensity, tipPower, flat = true) => {
    // Not glossier than this: near the cave lamp a mirror-smooth surface's
    // highlight gets extremely bright. (The black blocks once blamed on
    // this came from the cave wall's shader instead; see fres above.)
    const mat = new THREE.MeshStandardMaterial({ color: body, emissive: glow, emissiveIntensity: glowIntensity, roughness: 0.24, metalness: 0.05, flatShading: flat });
    mat.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', '#include <common>\nvarying float vTip;')
        .replace('#include <begin_vertex>', `#include <begin_vertex>\nvTip = ${tipPower > 0 ? 'position.y' : '-position.y'};`);
      shader.fragmentShader = shader.fragmentShader
        .replace('#include <common>', '#include <common>\nvarying float vTip;')
        .replace(
          '#include <emissivemap_fragment>',
          `#include <emissivemap_fragment>
          float tipK = clamp(vTip, 0.0, 1.0);
          totalEmissiveRadiance *= 0.25 + 1.3 * pow(tipK, ${Math.abs(tipPower).toFixed(1)});
          float rimK = pow(clamp(1.0 - abs(dot(normalize(normal), normalize(vViewPosition))), 0.0, 1.0), 3.0); // clamped: see the cave wall's fres
          totalEmissiveRadiance += vec3(0.35, 0.85, 1.0) * rimK * 0.9;
          diffuseColor.rgb *= mix(vec3(0.55, 0.75, 1.0), vec3(1.0), tipK);`
        );
    };
    return mat;
  };
  const crystalMat = glassyIce(0x2aa6dc, 0x109ae0, 0.9, 2.5);
  const rand = seededRandom(11);
  const clusters = [];
  while (clusters.length < 13) {
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
  const perCluster = 9;
  const crystals = new THREE.InstancedMesh(crystalGeo, crystalMat, clusters.length * perCluster);
  crystals.name = 'caveCrystals';
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const qSpin = new THREE.Quaternion();
  const e = new THREE.Euler();
  const UP = new THREE.Vector3(0, 1, 0);
  let ci = 0;
  for (const [cx, cz] of clusters) {
    // One big crystal in the middle; the rest fan outward around it.
    const scale = 0.7 + rand() * 0.6;
    for (let k = 0; k < perCluster; k++) {
      const big = k === 0;
      const ang = rand() * Math.PI * 2;
      const off = big ? 0 : 0.35 + rand() * 0.9;
      const ox = Math.cos(ang) * off;
      const oz = Math.sin(ang) * off;
      const hgt = (big ? 3.4 + rand() * 2.4 : 0.7 + rand() * 2.3 * (1.2 - off * 0.5)) * scale;
      const wid = (big ? 0.85 + rand() * 0.4 : 0.22 + rand() * 0.35) * scale;
      const lean = big ? rand() * 0.12 : 0.15 + off * 0.35 + rand() * 0.15;
      q.setFromUnitVectors(UP, new THREE.Vector3(Math.cos(ang) * lean, 1, Math.sin(ang) * lean).normalize());
      q.multiply(qSpin.setFromAxisAngle(UP, rand() * 6.28));
      m.compose(new THREE.Vector3(cx + ox, heightAt(x + cx + ox, z + cz + oz) - 0.2, cz + oz), q, new THREE.Vector3(wid, hgt, wid));
      crystals.setMatrixAt(ci++, m);
    }
    colliders.push({ x: x + cx, z: z + cz, r: 1.3 * scale });
  }

  // (Thin icicles used to hang from the ceiling and along the arch. From
  // most angles they read as spikes floating in the air, and Cyril asked
  // for them to go.)

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
  let geo = new THREE.BoxGeometry(1, 1, 1, 9, 16, 5);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const p = geo.attributes.position;
  const ss = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  // Broken corners and edges: flat cuts at random angles, so the slab looks
  // snapped off a larger sheet rather than moulded.
  const rand = seededRandom(131 + kind * 17);
  const cuts = [];
  for (let i = 0; i < 14; i++) {
    const n = new THREE.Vector3(rand() * 2 - 1, (rand() * 2 - 1) * 0.6, rand() * 2 - 1).normalize();
    const reach = 0.5 * (Math.abs(n.x) + Math.abs(n.y) + Math.abs(n.z)); // how far the box extends that way
    cuts.push({ n, d: reach * (0.74 + rand() * 0.2) });
  }
  for (let i = 0; i < p.count; i++) {
    let vx = p.getX(i), vy = p.getY(i), vz = p.getZ(i);
    for (const c of cuts) {
      const over = vx * c.n.x + vy * c.n.y + vz * c.n.z - c.d;
      if (over > 0) { vx -= c.n.x * over; vy -= c.n.y * over; vz -= c.n.z * over; }
    }
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
  return toCreasedNormals(geo, 0.6);
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
  const mat = makeIceMaterial({}, SMALL_ICE);
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
// A chunky rock of ice: a lumpy ball with flat faces cut into it at random
// angles, the way a block breaks. The cuts leave crisp edges between flat
// facets (smooth blobs looked like pillows); small chips roughen what is
// left. "cuts" = how many flat faces, "detail" = how finely it is modelled.
function chiselledRock(detail, seed, cuts) {
  let geo = new THREE.IcosahedronGeometry(1, detail);
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = mergeVertices(geo);
  const rand = seededRandom(seed);
  const planes = [];
  for (let i = 0; i < cuts; i++) {
    const u = rand() * 1.7 - 0.7; // few cuts from below: the rock sits on that side
    const a = rand() * Math.PI * 2;
    const s = Math.sqrt(Math.max(0, 1 - Math.min(1, u * u)));
    planes.push({ x: s * Math.cos(a), y: Math.max(-1, Math.min(1, u)), z: s * Math.sin(a), d: 0.58 + rand() * 0.3 });
  }
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const n = 0.82 + 0.42 * valueNoise(x * 1.5 + seed, z * 1.5 + y * 1.3);
    x *= n; y *= n; z *= n;
    for (const pl of planes) {
      const over = x * pl.x + y * pl.y + z * pl.z - pl.d;
      if (over > 0) { x -= pl.x * over; y -= pl.y * over; z -= pl.z * over; }
    }
    const chip = 1 + 0.07 * (valueNoise(x * 5.5 + seed * 3, z * 5.5 - y * 4.7) - 0.5);
    p.setXYZ(i, x * chip, Math.max(y * chip * 0.85, -0.3), z * chip);
  }
  // Keep an edge sharp wherever two faces meet at more than ~30 degrees.
  return toCreasedNormals(geo, 0.52);
}

function createIceChunks() {
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
  // Only on fairly level ground: scattered up a mountainside they read as
  // specks stuck to it.
  const tryFlat = (cx, cz, size) => {
    const steep = Math.abs(flatH(cx + 1.5, cz) - flatH(cx - 1.5, cz)) + Math.abs(flatH(cx, cz + 1.5) - flatH(cx, cz - 1.5));
    if (steep < 1.0) tryAdd(cx, cz, size);
  };
  // Around the near chaos field.
  for (let i = 0; i < 150; i++) tryAdd(40 + rand() * 38, -180 + rand() * 140, 0.25 + rand() * rand() * 1.1);
  // Along the foot of the cave mountain (on the level ground only).
  for (let i = 0; i < 90; i++) tryFlat(-36 - rand() * 26, -150 + rand() * 270, 0.25 + rand() * rand() * 1.3);
  // Along the canyon's near rim.
  for (let i = 0; i < 70; i++) tryFlat(56 + rand() * 20, -60 + rand() * 220, 0.2 + rand() * rand() * 1.0);
  // A scatter on the plain.
  for (let i = 0; i < 110; i++) {
    const a = rand() * Math.PI * 2;
    const r = 36 + rand() * 120;
    tryAdd(Math.cos(a) * r, Math.sin(a) * r, 0.15 + rand() * rand() * 0.6);
  }
  // Small debris everywhere you walk: chips and fist-to-knee-sized lumps,
  // loose and in little clusters. Things of every size, from pebble to
  // mountain, are what let the eye judge scale and depth. (Its own random
  // sequence, so the boulders placed below stay where they were.)
  {
    const r2 = seededRandom(4242);
    for (let i = 0; i < 520; i++) {
      const a = r2() * Math.PI * 2;
      const r = 6 + Math.pow(r2(), 0.7) * 150;
      tryFlat(16 + Math.cos(a) * r, 24 + Math.sin(a) * r, 0.07 + r2() * r2() * 0.4);
    }
    for (let c = 0; c < 46; c++) {
      const a = r2() * Math.PI * 2;
      const r = 20 + r2() * 120;
      const gx = 16 + Math.cos(a) * r;
      const gz = 24 + Math.sin(a) * r;
      const n = 6 + Math.floor(r2() * 9);
      for (let i = 0; i < n; i++) {
        const d = r2() * r2() * 5;
        const b = r2() * Math.PI * 2;
        tryFlat(gx + Math.cos(b) * d, gz + Math.sin(b) * d, i === 0 ? 0.5 + r2() * 0.5 : 0.08 + r2() * 0.35);
      }
    }
  }
  // Big boulders: framing the first view, and a few landmarks further out.
  const big = [
    [11, 50, 1.9], [8.5, 47.5, 1.0], [28.5, 47, 1.6], [31, 49.5, 0.9], [-6, 46, 2.4], [-9.5, 43, 1.2],
    [44, 44, 2.2], [47.5, 41, 1.1], [3, 70, 2.0], [36, 68, 2.6], [-28, 40, 2.8], [-31, 36.5, 1.3],
    [58, 10, 2.3], [61, -18, 1.8], [-24, -52, 2.6], [8, -62, 2.1], [40, -70, 2.9],
    // Beside the cave, on both sides of its mouth (the ground there was bare).
    [-36, 5, 2.5], [-40, 8, 1.3], [-31, -12, 1.0], [-29, 3, 0.7], [-45, 7, 0.9],
    [-30, -44, 2.0], [-33, -48, 1.1], [-27, -40, 0.7], [-36, -52, 1.5],
  ];
  // Groups of big rounded boulders out on the north plain.
  for (const [gx, gz] of [[-10, -120], [55, -150], [100, -95], [10, -210], [80, -240], [-30, -175]]) {
    const n = 4 + Math.floor(rand() * 4);
    for (let i = 0; i < n; i++) {
      const bx = gx + (rand() - 0.5) * 22;
      const bz = gz + (rand() - 0.5) * 22;
      big.push([bx, bz, 1.4 + rand() * rand() * 3.4]);
    }
  }
  for (const [bx, bz, size] of big) {
    spots.push({ cx: bx, cz: bz, h: heightAt(bx, bz), size });
    if (size > 1.4) colliders.push({ x: bx, z: bz, r: size * 1.25 });
  }
  // Several different rock shapes, so no two neighbours match: finely
  // modelled ones for the big boulders, simpler ones for small debris.
  const group = new THREE.Group();
  group.name = 'iceChunks';
  const mat = makeIceMaterial({}, BOULDER_ICE);
  const shapes = [
    { big: true, geo: chiselledRock(9, 3, 13) },
    { big: true, geo: chiselledRock(9, 19, 16) },
    { big: true, geo: chiselledRock(9, 42, 11) },
    { big: false, geo: chiselledRock(3, 7, 7) },
    { big: false, geo: chiselledRock(3, 28, 9) },
    { big: false, geo: chiselledRock(3, 61, 6) },
  ];
  const lists = shapes.map(() => []);
  spots.forEach((s, i) => {
    const big = s.size > 1.15;
    const choices = shapes.map((sh, k) => k).filter((k) => shapes[k].big === big);
    lists[choices[i % choices.length]].push(s);
  });
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  shapes.forEach((sh, k) => {
    if (!lists[k].length) return;
    const mesh = new THREE.InstancedMesh(sh.geo, mat, lists[k].length);
    lists[k].forEach((s, i) => {
      q.setFromEuler(new THREE.Euler((rand() - 0.5) * 0.4, rand() * 6.28, (rand() - 0.5) * 0.4));
      m.compose(new THREE.Vector3(s.cx, s.h + s.size * 0.1, s.cz), q, new THREE.Vector3(s.size * (0.9 + rand() * 0.6), s.size * (0.65 + rand() * 0.45), s.size * (0.9 + rand() * 0.6)));
      mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  });
  return group;
}

// ------------------------------------------------------------------ ice arch

// A big natural arch in the south-east corner (layout.js, iceArch). Built the
// way the cave's mouth is: a tube along a curve, with few sides, pushed in
// and out in big uneven lumps and given hard edges, so it reads as broken
// ice and not as a pipe. Thick at the feet, thinner over the top, the top
// off-centre, and blocks that have fallen from it lying round its feet.
const ARCH_ICE = { faceScale: 3.2, frost: 0.24, rust: 0.15, patch: 0.5 };
function createIceArch() {
  const A = LAYOUT.iceArch;
  const group = new THREE.Group();
  group.name = 'iceArch';
  const a = THREE.MathUtils.degToRad(A.spanDeg);
  const ex = Math.cos(a), ez = Math.sin(a); // along the span, from the mountain foot to the crags
  const nx = -ez, nz = ex; // across it (the way you look through)
  const half = A.span / 2;
  const ground = (s) => heightAt(A.x + ex * s, A.z + ez * s);
  const base = Math.min(ground(-half), ground(half));
  // [along the span, height, sideways], as shares of half the span / the height.
  const shape = [
    [-1.03, -0.22, 0.0], [-0.96, 0.2, 0.03], [-0.74, 0.6, 0.08], [-0.3, 0.9, 0.05],
    [0.24, 1.0, -0.05], [0.68, 0.78, -0.08], [0.95, 0.36, -0.03], [1.04, -0.22, 0.0],
  ];
  const curve = new THREE.CatmullRomCurve3(shape.map(([s, y, w]) => new THREE.Vector3(
    A.x + ex * s * half + nx * w * half, base + y * A.height, A.z + ez * s * half + nz * w * half,
  )));
  const along = 64, round = 6;
  let geo = new THREE.TubeGeometry(curve, along, 1, round, false);
  const p = geo.attributes.position;
  const c = new THREE.Vector3();
  for (let i = 0; i <= along; i++) {
    const t = i / along;
    curve.getPointAt(t, c);
    // Thick feet, a thinner top; the foot on the mountain's side is the heavier.
    const thick = 3.3 + (t < 0.5 ? 4.2 : 3.3) * Math.pow(Math.abs(2 * t - 1), 1.5);
    for (let j = 0; j <= round; j++) {
      const k = i * (round + 1) + j;
      let ox = p.getX(k) - c.x, oy = p.getY(k) - c.y, oz = p.getZ(k) - c.z; // one unit out from the centre line
      const px = c.x + ox * thick, py = c.y + oy * thick, pz = c.z + oz * thick;
      const big = valueNoise(px * 0.13 + 5, pz * 0.13 + py * 0.11) - 0.45;
      const small = valueNoise(px * 0.4 + 9, pz * 0.4 - py * 0.36) - 0.5;
      let r = thick * (1 + 0.85 * big + 0.3 * small);
      // A broken crest: here and there the top stands up in a fin, like the
      // crags next to it.
      const fin = valueNoise(px * 0.22 + 31, pz * 0.22 + 17) - 0.56;
      if (oy > 0.35 && fin > 0) r += thick * 2.6 * fin * (oy - 0.35);
      // A little slimmer the way you look through it: a slab, not a sausage.
      const across = ox * nx + oz * nz;
      ox -= nx * across * 0.22;
      oz -= nz * across * 0.22;
      p.setXYZ(k, c.x + ox * r, c.y + oy * r, c.z + oz * r);
    }
  }
  geo.deleteAttribute('normal');
  geo.deleteAttribute('uv');
  geo = toCreasedNormals(mergeVertices(geo), 0.45);
  const arch = new THREE.Mesh(geo, makeIceMaterial({}, ARCH_ICE));
  arch.castShadow = true;
  arch.receiveShadow = true;
  group.add(arch);
  for (const s of [-0.97, 0.98]) colliders.push({ x: A.x + ex * s * half, z: A.z + ez * s * half, r: 7.5 });

  // Blocks fallen from it. [along the span, across it, size]; fixed by hand
  // so they frame the feet and leave the way under the arch open.
  const fallen = [
    [-1.32, -0.3, 3.4], [-0.72, -0.42, 2.2], [-1.18, 0.34, 2.6], [-0.5, 0.36, 1.5],
    [0.62, -0.4, 2.4], [1.3, -0.26, 3.0], [0.74, 0.4, 1.8], [0.1, -0.5, 1.3], [-0.12, 0.46, 1.1],
  ];
  const rand = seededRandom(505);
  const rockMat = makeIceMaterial({}, BOULDER_ICE);
  const rocks = [chiselledRock(7, 88, 12), chiselledRock(7, 131, 15)];
  const q = new THREE.Quaternion();
  const m = new THREE.Matrix4();
  rocks.forEach((rockGeo, kind) => {
    const mine = fallen.filter((f, i) => i % 2 === kind);
    const mesh = new THREE.InstancedMesh(rockGeo, rockMat, mine.length);
    mine.forEach(([s, w, size], i) => {
      const x = A.x + ex * s * half + nx * w * half, z = A.z + ez * s * half + nz * w * half;
      q.setFromEuler(new THREE.Euler((rand() - 0.5) * 0.5, rand() * 6.28, (rand() - 0.5) * 0.5));
      m.compose(new THREE.Vector3(x, heightAt(x, z) + size * 0.12, z), q, new THREE.Vector3(size * (1 + rand() * 0.5), size * (0.7 + rand() * 0.4), size * (1 + rand() * 0.5)));
      mesh.setMatrixAt(i, m);
      if (size > 1.4) colliders.push({ x, z, r: size * 1.25 });
    });
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  });
  return group;
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
  const mesh = new THREE.InstancedMesh(geo, makeIceMaterial({}, { faceScale: 2, rust: 0.3 }), count);
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
