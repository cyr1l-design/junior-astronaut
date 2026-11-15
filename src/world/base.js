import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { LAYOUT, SKY } from './layout.js';
import { heightAt, makeIceMaterial } from './terrain.js';
import { colliders } from './colliders.js';
import { createIce } from './ice.js';

// The outpost: everything people built. Clean stylised shapes, warm white
// hulls, orange trim, gold insulation foil, glowing lights. Positions, names
// and sizes come from layout.js (see design/FIRST-SCENE-BRIEF.md).
// No logos, flags or insignia anywhere.

export { colliders };

// Handles the game uses to show the cryobot working (src/game/game.js): the
// probe (lowered down the hole when the dig starts), the hole's light, and
// how brightly the shaft glows.
export const cryobotFx = { probe: null, glow: null, uPower: { value: 1 } };

const UP = new THREE.Vector3(0, 1, 0);

const M = {
  hull: new THREE.MeshStandardMaterial({ color: 0xe9e5dc, roughness: 0.55, metalness: 0.1 }), // a touch off white, so its panel seams survive full sunlight
  panel: new THREE.MeshStandardMaterial({ color: 0xc4ccd8, roughness: 0.5, metalness: 0.25 }),
  trim: new THREE.MeshStandardMaterial({ color: 0xff8427, roughness: 0.5, metalness: 0.1 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x2a2f38, roughness: 0.65, metalness: 0.4 }),
  foil: new THREE.MeshStandardMaterial({ color: 0xe0a53a, roughness: 0.38, metalness: 0.85 }),
  copper: new THREE.MeshStandardMaterial({ color: 0xc8672a, roughness: 0.5, metalness: 0.6 }),
  amber: new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffa53a, emissiveIntensity: 3.2 }),
  warm: new THREE.MeshStandardMaterial({ color: 0x331a00, emissive: 0xffc070, emissiveIntensity: 2.6 }),
  cyan: new THREE.MeshStandardMaterial({ color: 0x001820, emissive: 0x4fdcff, emissiveIntensity: 3.0 }),
  hot: new THREE.MeshStandardMaterial({ color: 0x401000, emissive: 0xff6a1a, emissiveIntensity: 2.4 }),
};

// --------------------------------------------------------- metal textures
// CC0 photo-style metal textures from ambientCG (credited in
// design/FIRST-SCENE-BRIEF.md), in public/textures/metal/. Most parts here
// are plain boxes and cylinders with no sensible texture layout, so each
// texture is wrapped on from three sides and sized in metres ("scale" = how
// many metres one copy of the texture covers), measured on the object
// itself so it stays put if the object moves.
const metalLoader = new THREE.TextureLoader();
const metalCache = new Map();
function metalTex(name, map, isColour) {
  const key = `${name}/${map}`;
  if (!metalCache.has(key)) {
    const t = metalLoader.load(`${import.meta.env.BASE_URL}textures/metal/${name}/${map}.jpg`);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    if (isColour) t.colorSpace = THREE.SRGBColorSpace;
    metalCache.set(key, t);
  }
  return metalCache.get(key);
}
// colour: 'pattern' keeps the part's own colour and takes only the texture's
// light and dark (so white stays white); 'replace' uses the texture's colour.
function withMetal(mat, name, { scale = 1, colour = 'pattern', colourMix = 0.5, bump = 0.7, roughMix = 0.6 } = {}) {
  const uniforms = {
    tMC: { value: metalTex(name, 'color', true) },
    tMN: { value: metalTex(name, 'normal', false) },
    tMR: { value: metalTex(name, 'roughness', false) },
  };
  const before = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader, renderer) => {
    if (before) before(shader, renderer);
    Object.assign(shader.uniforms, uniforms);
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vMP;\nvarying vec3 vMN;\nvarying vec3 vMX;\nvarying vec3 vMY;\nvarying vec3 vMZ;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvMP = position;\nvMN = normal;\nvMX = normalMatrix * vec3(1.0, 0.0, 0.0);\nvMY = normalMatrix * vec3(0.0, 1.0, 0.0);\nvMZ = normalMatrix * vec3(0.0, 0.0, 1.0);');
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        varying vec3 vMP; varying vec3 vMN; varying vec3 vMX; varying vec3 vMY; varying vec3 vMZ;
        uniform sampler2D tMC, tMN, tMR;
        vec3 mTri(sampler2D t, vec3 p, vec3 w){ return texture(t, p.zy).rgb*w.x + texture(t, p.xz).rgb*w.y + texture(t, p.xy).rgb*w.z; }`
      )
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 mW = pow(abs(normalize(vMN)), vec3(4.0)); mW /= (mW.x + mW.y + mW.z);
        vec3 mP = vMP / ${scale.toFixed(3)};
        vec3 mC = mTri(tMC, mP, mW);
        ${colour === 'replace'
          ? `diffuseColor.rgb = mix(diffuseColor.rgb, mC, ${colourMix.toFixed(3)});`
          : `float mL = dot(mC, vec3(0.3, 0.59, 0.11)); float mA = dot(textureLod(tMC, vec2(0.5), 10.0).rgb, vec3(0.3, 0.59, 0.11));
        diffuseColor.rgb *= mix(1.0, (mL + 0.02) / (mA + 0.02), ${colourMix.toFixed(3)});`}`
      )
      .replace(
        '#include <roughnessmap_fragment>',
        `#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, mTri(tMR, mP, mW).g, ${roughMix.toFixed(3)});`
      )
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
        vec3 mT = mTri(tMN, mP, mW) * 2.0 - 1.0;
        vec3 mBend = mW.x*vec3(0.0, mT.y, mT.x) + mW.y*vec3(mT.x, 0.0, mT.y) + mW.z*vec3(mT.x, mT.y, 0.0);
        normal = normalize(normal + (vMX * mBend.x + vMY * mBend.y + vMZ * mBend.z) * ${bump.toFixed(3)});`
      );
  };
  mat.customProgramCacheKey = () => `metal:${name}:${scale}:${colour}:${colourMix}:${bump}:${roughMix}:` + (before ? before.toString() : '');
  return mat;
}

// White hull: panel seams in relief and patchy shine; stays white.
withMetal(M.hull, 'hull-panels', { scale: 2.2, colourMix: 0.35, bump: 0.9, roughMix: 0.6 });
// Light grey frames and shields: brushed steel.
withMetal(M.panel, 'brushed-steel', { scale: 1.2, colourMix: 0.5, bump: 0.6, roughMix: 0.6 });
// Dark frames, legs and struts: powder-coated steel.
withMetal(M.dark, 'dark-coated', { scale: 1.0, colourMix: 0.5, bump: 0.6, roughMix: 0.7 });
// Gold insulation foil (real spacecraft are wrapped in it): crinkled.
withMetal(M.foil, 'gold-foil', { scale: 0.8, colour: 'replace', colourMix: 0.85, bump: 1.0, roughMix: 0.8 });
// Stairs and landing: non-slip floor plate.
M.tread = withMetal(new THREE.MeshStandardMaterial({ color: 0x8c949e, roughness: 0.5, metalness: 0.6 }), 'floor-plate', { scale: 0.7, colourMix: 0.6, bump: 1.0, roughMix: 0.6 });
// Small painted parts (crates, cabinets, drums): clean off-white paint with
// only a faint brushed grain. The hull's plate pattern is sized for big
// walls and looked busy on anything small.
M.shell = withMetal(new THREE.MeshStandardMaterial({ color: 0xe9e5dc, roughness: 0.5, metalness: 0.08 }), 'brushed-steel', { scale: 1.6, colourMix: 0.16, bump: 0.3, roughMix: 0.4 });
// Warning band: plain yellow-and-graphite diagonal stripes (no symbols).
M.hazard = new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.2 });

// Hull plating drawn in code: panel seams, rivets, a few darker and lighter
// plates and small markings. No logos or insignia.
function hullPlating(repeatX, repeatY) {
  const tex = canvasTexture(1024, 512, (ctx, w, h) => {
    ctx.fillStyle = '#f1ede4';
    ctx.fillRect(0, 0, w, h);
    let seed = 9;
    const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const cols = 8, rows = 4, pw = w / cols, ph = h / rows;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * pw + (r % 2 ? pw / 2 : 0), y = r * ph;
        const t = rnd();
        ctx.fillStyle = t < 0.25 ? 'rgba(120,135,160,0.16)' : t > 0.8 ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0)';
        ctx.fillRect(x, y, pw, ph);
        ctx.fillRect(x - w, y, pw, ph);
        ctx.strokeStyle = 'rgba(70,80,100,0.55)';
        ctx.lineWidth = 3;
        ctx.strokeRect(x + 1.5, y + 1.5, pw - 3, ph - 3);
        ctx.strokeRect(x - w + 1.5, y + 1.5, pw - 3, ph - 3);
        ctx.fillStyle = 'rgba(60,70,90,0.6)';
        for (const [rx, ry] of [[10, 10], [pw - 10, 10], [10, ph - 10], [pw - 10, ph - 10], [pw / 2, 10], [pw / 2, ph - 10]]) {
          ctx.beginPath(); ctx.arc(x + rx, y + ry, 2.6, 0, 7); ctx.fill();
          ctx.beginPath(); ctx.arc(x - w + rx, y + ry, 2.6, 0, 7); ctx.fill();
        }
        if (rnd() < 0.22) { ctx.fillStyle = 'rgba(255,132,39,0.85)'; ctx.fillRect(x + pw * 0.2, y + ph * 0.62, pw * 0.3, ph * 0.1); }
        if (rnd() < 0.18) { ctx.fillStyle = 'rgba(50,58,72,0.8)'; ctx.fillRect(x + pw * 0.6, y + ph * 0.3, pw * 0.22, ph * 0.3); }
        if (rnd() < 0.15) { ctx.fillStyle = 'rgba(50,58,72,0.7)'; for (let k = 0; k < 4; k++) ctx.fillRect(x + pw * 0.2, y + ph * (0.25 + k * 0.07), pw * 0.4, 3); }
      }
    }
  });
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeatX, repeatY);
  // The drawn markings stay; the metal texture adds real relief and shine.
  return withMetal(new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, metalness: 0.1 }), 'hull-panels', { scale: 2.2, colourMix: 0.2, bump: 0.55, roughMix: 0.5 });
}

// ------------------------------------------------------------ small helpers

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  return m;
}
function cyl(rTop, rBottom, h, seg, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, h, seg), mat);
  m.position.set(x, y, z);
  return m;
}
function ball(r, mat, x = 0, y = 0, z = 0, seg = 16) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.ceil(seg * 0.6)), mat);
  m.position.set(x, y, z);
  return m;
}
// A rod between two points.
function strut(a, b, r, mat, seg = 6) {
  const d = new THREE.Vector3().subVectors(b, a);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, d.length(), seg), mat);
  m.position.addVectors(a, b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(UP, d.normalize());
  return m;
}
const v3 = (x, y, z) => new THREE.Vector3(x, y, z);
// A ring lying flat (a pipe loop, a rim, a rail).
function torus(r, tube, mat, x = 0, y = 0, z = 0, radial = 8, tubular = 28) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(r, tube, radial, tubular), mat);
  m.rotation.x = Math.PI / 2;
  m.position.set(x, y, z);
  return m;
}
// A shape turned on a lathe, from a list of [radius, height] points going
// out along the bottom and back in along the top.
function lathe(points, seg, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.LatheGeometry(points.map(([r, h]) => new THREE.Vector2(r, h)), seg), mat);
  m.position.set(x, y, z);
  return m;
}

// Merge all the little parts of an object into one mesh per material, so the
// whole outpost costs the graphics card only a handful of draw calls.
function bake(group, name) {
  group.updateMatrixWorld(true);
  const byMat = new Map();
  const keep = [];
  group.traverse((o) => {
    if (o.isMesh) {
      const g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      g.applyMatrix4(o.matrixWorld);
      for (const key of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(key)) g.deleteAttribute(key);
      if (!byMat.has(o.material)) byMat.set(o.material, []);
      byMat.get(o.material).push(g);
    } else if (o.isLight) keep.push(o);
  });
  const out = new THREE.Group();
  out.name = name;
  for (const [mat, geos] of byMat) {
    const mesh = new THREE.Mesh(mergeGeometries(geos), mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    out.add(mesh);
  }
  for (const l of keep) {
    const p = l.getWorldPosition(new THREE.Vector3());
    out.add(l);
    l.position.copy(p);
  }
  return out;
}

function onGround(obj, x, z, lift = 0) {
  obj.position.set(x, heightAt(x, z) + lift, z);
  return obj;
}

function canvasTexture(w, h, draw) {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext('2d'), w, h);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

export function createBase(scene) {
  M.hazard.map = canvasTexture(256, 64, (ctx, w, h) => {
    ctx.fillStyle = '#f0b030';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#24272e';
    for (let i = -2; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 32, h); ctx.lineTo(i * 32 + 16, h); ctx.lineTo(i * 32 + 16 + h, 0); ctx.lineTo(i * 32 + h, 0);
      ctx.fill();
    }
  });
  M.hazard.map.wrapS = THREE.RepeatWrapping;
  M.hazard.map.repeat.set(5, 1);
  const g = new THREE.Group();
  g.name = 'base';
  g.add(createHabitat());
  g.add(createSolarArray());
  g.add(createReactor());
  g.add(createCryobot());
  g.add(createSpool());
  g.add(createCables());
  g.add(createCrates());
  g.add(createIce());
  scene.add(g);
  return g;
}

// ----------------------------------------------------------------- habitat

function createHabitat() {
  const { x, z, radius } = LAYOUT.habitat;
  const g = new THREE.Group();
  const legH = 2.2;
  const apothem = radius * Math.cos(Math.PI / 8); // centre of a wall, from the middle
  const turn = Math.PI / 8; // so walls (not corners) face the door direction
  const doorA = THREE.MathUtils.degToRad(LAYOUT.habitat.doorAngleDeg);
  const plating = hullPlating(2, 1);
  const platingLow = hullPlating(2, 0.5);

  // Body: an eight-sided pressurised module. Insulated underside, belly, main
  // ring, sloped shoulders, roof deck.
  const octo = (rTop, rBottom, h, mat, y) => {
    const m = cyl(rTop, rBottom, h, 8, mat, 0, y, 0);
    m.rotation.y = turn;
    g.add(m);
  };
  octo(radius * 0.8, radius * 0.6, 0.5, M.foil, legH - 0.3);
  octo(radius, radius * 0.8, 0.9, M.panel, legH + 0.45);
  octo(radius, radius, 3.1, plating, legH + 2.45);
  octo(radius * 0.74, radius, 1.3, platingLow, legH + 4.65);
  octo(radius * 0.7, radius * 0.74, 0.25, M.panel, legH + 5.42);
  octo(radius + 0.05, radius + 0.05, 0.42, M.trim, legH + 1.25);
  octo(radius + 0.04, radius + 0.04, 0.1, M.dark, legH + 0.92);
  octo(radius + 0.04, radius + 0.04, 0.12, M.dark, legH + 4.0);
  octo(radius * 0.745 + 0.03, radius * 0.745 + 0.03, 0.1, M.trim, legH + 5.28);

  // A structural rib at each of the eight corners, carried on up the
  // shoulder: the frame the hull panels hang on.
  for (let k = 0; k < 8; k++) {
    const a = Math.PI / 8 + (k * Math.PI) / 4;
    const c = Math.cos(a), s = Math.sin(a);
    const rib = box(0.4, 3.14, 0.4, M.panel, c * (radius - 0.04), legH + 2.45, s * (radius - 0.04));
    rib.rotation.y = -a;
    g.add(rib);
    g.add(strut(v3(c * radius, legH + 4.0, s * radius), v3(c * radius * 0.74, legH + 5.3, s * radius * 0.74), 0.14, M.panel, 6));
    g.add(ball(0.2, M.dark, c * radius, legH + 4.02, s * radius, 8));
  }

  // Under the floor: a service core and tanks wrapped in gold foil.
  g.add(cyl(2.6, 2.2, 1.3, 16, M.dark, 0, legH - 0.6, 0));
  g.add(cyl(2.25, 2.25, 0.12, 16, M.trim, 0, legH - 1.2, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    g.add(ball(1.0, M.foil, Math.cos(a) * 3.6, legH - 0.45, Math.sin(a) * 3.6));
    g.add(torus(1.0, 0.05, M.dark, Math.cos(a) * 3.6, legH - 0.45, Math.sin(a) * 3.6, 6, 20));
  }

  // Four landing legs: a foil-wrapped upper sleeve, a slimmer lower strut
  // sliding out of it, two braces back to the belly, and a wide foot pad.
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 8 + (i * Math.PI) / 2;
    const dir = (r, y, da = 0) => v3(Math.cos(a + da) * r, y, Math.sin(a + da) * r);
    const top = dir(radius - 0.3, legH + 0.9);
    const foot = dir(radius + 2.3, 0.34);
    const knee = top.clone().lerp(foot, 0.56);
    g.add(strut(top, foot, 0.15, M.dark, 8));
    g.add(strut(top, knee, 0.27, M.foil, 10));
    const cuff = ball(0.31, M.dark, 0, 0, 0, 10);
    cuff.position.copy(knee);
    g.add(cuff);
    g.add(strut(dir(radius - 2.2, legH + 0.1, 0.3), knee, 0.1, M.panel));
    g.add(strut(dir(radius - 2.2, legH + 0.1, -0.3), knee, 0.1, M.panel));
    const ankle = ball(0.27, M.panel, 0, 0, 0, 10);
    ankle.position.copy(foot);
    g.add(ankle);
    g.add(cyl(0.95, 1.12, 0.2, 16, M.dark, foot.x, 0.1, foot.z));
    g.add(cyl(0.8, 0.8, 0.05, 16, M.trim, foot.x, 0.215, foot.z));
  }

  // Windows: warm light, with a hint of the room inside. Each sits in a
  // recess with a hood above, a sill below and a frame at the sides.
  const windowTex = canvasTexture(256, 128, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#fff0c4');
    grad.addColorStop(0.55, '#ffc46a');
    grad.addColorStop(1, '#e8782a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(120,50,10,0.55)';
    ctx.fillRect(18, 78, 70, 50); // a desk
    ctx.fillRect(150, 60, 34, 68); // a locker
    ctx.fillRect(196, 92, 44, 36);
    ctx.fillStyle = 'rgba(255,255,230,0.8)';
    ctx.fillRect(30, 58, 26, 16); // a screen
    ctx.fillStyle = '#3a2412';
    ctx.fillRect(w / 2 - 3, 0, 6, h); // window bar
  });
  const windowMat = new THREE.MeshStandardMaterial({ color: 0x1a0d00, emissive: 0xffffff, emissiveMap: windowTex, emissiveIntensity: 2.0, roughness: 0.2 });
  const face = (a) => {
    const s = new THREE.Group();
    s.rotation.y = -a; // local +x points out of the wall
    g.add(s);
    return s;
  };
  for (const a of [-Math.PI / 4, (3 * Math.PI) / 4, (-3 * Math.PI) / 4, 0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    const s = face(a);
    const small = a === 0 || a === Math.PI / 2;
    const w = small ? 1.3 : 2.6;
    const wy = legH + 2.75;
    s.add(box(0.1, 1.5, w + 0.5, M.dark, apothem + 0.02, wy, 0));
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.15), windowMat);
    pane.rotation.y = Math.PI / 2;
    pane.position.set(apothem + 0.08, wy, 0);
    s.add(pane);
    s.add(box(0.34, 0.16, w + 0.74, M.panel, apothem + 0.14, wy + 0.72, 0)); // hood
    s.add(box(0.4, 0.12, w + 0.74, M.panel, apothem + 0.17, wy - 0.72, 0)); // sill
    for (const side of [-1, 1]) s.add(box(0.28, 1.36, 0.17, M.panel, apothem + 0.11, wy, side * (w / 2 + 0.2)));
    // A small work lamp under the shoulder, above each big window.
    if (!small) {
      s.add(box(0.26, 0.16, 0.5, M.dark, apothem + 0.12, legH + 3.8, 0));
      s.add(box(0.2, 0.05, 0.4, M.warm, apothem + 0.14, legH + 3.7, 0));
    }
  }

  // Airlock, porch and stairs, facing the way layout.js says (south-east).
  const porch = face(doorA);
  const px = apothem + 0.6;
  porch.add(box(1.5, 3.0, 2.5, M.hull, px, legH + 1.75, 0));
  porch.add(box(1.6, 0.3, 2.6, M.trim, px, legH + 3.3, 0));
  porch.add(box(1.56, 0.14, 2.56, M.dark, px, legH + 0.3, 0));
  for (const side of [-1, 1]) porch.add(box(0.22, 3.0, 0.22, M.panel, px + 0.68, legH + 1.75, side * 1.2)); // corner posts
  const dx = apothem + 1.36; // the door's outer face
  porch.add(box(0.1, 2.36, 1.56, M.dark, dx, legH + 1.5, 0)); // door frame
  porch.add(box(0.08, 2.1, 1.24, M.panel, dx + 0.04, legH + 1.42, 0)); // the door itself
  porch.add(box(0.06, 0.08, 1.24, M.trim, dx + 0.07, legH + 0.72, 0)); // kick stripe
  const porthole = cyl(0.3, 0.3, 0.05, 20, M.warm, dx + 0.08, legH + 1.95, 0);
  porthole.rotation.z = Math.PI / 2;
  porch.add(porthole);
  const portRing = torus(0.33, 0.05, M.dark, dx + 0.09, legH + 1.95, 0, 6, 20);
  portRing.rotation.set(0, Math.PI / 2, 0);
  porch.add(portRing);
  porch.add(box(0.1, 0.34, 0.1, M.dark, dx + 0.1, legH + 1.25, 0.42)); // handle
  for (const side of [-1, 1]) porch.add(box(0.06, 1.7, 0.09, M.amber, dx + 0.05, legH + 1.5, side * 0.9)); // light strips
  porch.add(box(0.06, 0.26, 0.2, M.cyan, dx + 0.05, legH + 1.45, 1.08)); // keypad
  porch.add(box(0.3, 0.14, 1.3, M.amber, apothem + 1.45, legH + 2.95, 0)); // lamp over the door
  porch.add(box(1.5, 0.12, 2.3, M.tread, apothem + 2.1, legH + 0.18, 0)); // landing
  const steps = 7;
  for (let i = 0; i < steps; i++) {
    porch.add(box(0.44, 0.1, 1.7, M.tread, apothem + 3.05 + i * 0.42, legH + 0.18 - ((i + 1) * (legH + 0.05)) / (steps + 0.4), 0));
  }
  for (const side of [-0.95, 0.95]) {
    const topPost = v3(apothem + 2.8, legH + 0.2, side);
    const lowPost = v3(apothem + 3.05 + steps * 0.42, 0.25, side);
    const rise = v3(0, 1.0, 0);
    const half = v3(0, 0.52, 0);
    porch.add(strut(topPost, topPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(lowPost, lowPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(topPost.clone().add(rise), lowPost.clone().add(rise), 0.055, M.trim));
    porch.add(strut(topPost.clone().add(half), lowPost.clone().add(half), 0.035, M.trim));
    for (const t of [0.25, 0.5, 0.75]) {
      const p = topPost.clone().lerp(lowPost, t);
      porch.add(strut(p, p.clone().add(rise), 0.035, M.trim, 5));
    }
    porch.add(strut(v3(apothem + 1.4, legH + 1.2, side * 1.2), topPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(v3(apothem + 1.4, legH + 0.72, side * 1.2), topPost.clone().add(half), 0.035, M.trim));
    porch.add(strut(topPost, lowPost, 0.08, M.dark));
    porch.add(cyl(0.16, 0.2, 0.08, 8, M.dark, lowPost.x, 0.05, side));
  }

  // Roof deck: a lit observation cupola, a guard rail, vents, equipment
  // boxes, antennas, and a dish aimed toward the Sun, because from Jupiter
  // the Earth always sits close to the Sun in the sky.
  const top = legH + 5.55;
  g.add(cyl(2.3, 2.6, 1.3, 16, platingLow, 0, top + 0.65, 0));
  const bandTex = canvasTexture(512, 32, (ctx, w, h) => {
    ctx.fillStyle = '#ffc878';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2a1608';
    for (let i = 0; i < 16; i++) ctx.fillRect(i * 32, 0, 7, h);
  });
  const bandMat = new THREE.MeshStandardMaterial({ color: 0x1a0d00, emissive: 0xffffff, emissiveMap: bandTex, emissiveIntensity: 1.9, roughness: 0.25 });
  g.add(cyl(2.44, 2.52, 0.42, 24, bandMat, 0, top + 0.72, 0));
  g.add(cyl(2.56, 2.56, 0.07, 16, M.dark, 0, top + 0.97, 0));
  g.add(cyl(2.6, 2.6, 0.07, 16, M.dark, 0, top + 0.47, 0));
  g.add(cyl(2.36, 2.36, 0.1, 16, M.trim, 0, top + 1.3, 0));
  g.add(cyl(1.7, 2.3, 0.34, 16, M.panel, 0, top + 1.5, 0));
  g.add(cyl(0.75, 0.75, 0.12, 16, M.dark, 0, top + 1.72, 0)); // top hatch
  g.add(torus(0.3, 0.035, M.trim, 0, top + 1.8, 0, 5, 14));
  // Guard rail round the deck.
  const rail = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.69, 0.045, 5, 8), M.trim);
  rail.rotation.set(Math.PI / 2, 0, turn);
  rail.position.y = top + 0.78;
  g.add(rail);
  for (let k = 0; k < 8; k++) {
    const a = Math.PI / 8 + (k * Math.PI) / 4;
    const p = v3(Math.cos(a) * radius * 0.69, top - 0.02, Math.sin(a) * radius * 0.69);
    g.add(strut(p, p.clone().setY(top + 0.78), 0.04, M.trim, 5));
  }
  g.add(box(1.6, 0.7, 1.1, M.panel, -3.1, top + 0.33, 2.3));
  g.add(box(1.66, 0.1, 1.16, M.trim, -3.1, top + 0.7, 2.3));
  g.add(box(1.0, 0.5, 1.4, M.foil, 3.3, top + 0.22, -2.1));
  for (const [vx, vz] of [[2.9, 2.6], [3.6, 1.5], [0.4, 3.9]]) {
    g.add(cyl(0.24, 0.3, 0.7, 10, M.panel, vx, top + 0.33, vz));
    g.add(cyl(0.34, 0.34, 0.07, 10, M.dark, vx, top + 0.74, vz));
  }
  for (const [ax, az, h] of [[3.9, -0.4, 4.4], [-3.9, -0.6, 3.0], [1.2, -3.9, 2.3]]) {
    g.add(cyl(0.16, 0.2, 0.2, 8, M.dark, ax, top + 0.08, az));
    g.add(strut(v3(ax, top, az), v3(ax, top + h, az), 0.06, M.dark));
    g.add(ball(0.14, M.amber, ax, top + h + 0.1, az, 8));
    for (const f of [0.55, 0.72, 0.86]) g.add(strut(v3(ax - 0.34, top + h * f, az), v3(ax + 0.34, top + h * f, az), 0.025, M.dark, 4));
  }
  const dishPos = v3(-2.5, top + 2.7, -3.1);
  g.add(cyl(0.3, 0.38, 0.3, 10, M.dark, dishPos.x, top + 0.12, dishPos.z));
  g.add(strut(v3(dishPos.x, top, dishPos.z), dishPos, 0.13, M.panel));
  const profile = [];
  for (let i = 0; i <= 8; i++) {
    const r = (i / 8) * 1.7;
    profile.push(new THREE.Vector2(r, 0.22 * r * r));
  }
  const dishMat = M.hull.clone();
  dishMat.side = THREE.DoubleSide;
  const dish = new THREE.Group();
  dish.add(new THREE.Mesh(new THREE.LatheGeometry(profile, 28), dishMat));
  dish.add(torus(1.7, 0.05, M.trim, 0, 0.636, 0, 5, 28));
  dish.add(strut(v3(0, 0, 0), v3(0, 1.15, 0), 0.04, M.dark));
  dish.add(ball(0.13, M.trim, 0, 1.2, 0, 8));
  dish.add(cyl(0.22, 0.3, 0.3, 10, M.dark, 0, -0.14, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    dish.add(strut(v3(Math.cos(a) * 1.5, 0.5, Math.sin(a) * 1.5), v3(0, 1.15, 0), 0.025, M.dark, 4));
  }
  dish.position.copy(dishPos);
  dish.quaternion.setFromUnitVectors(UP, SKY.sunDir.clone().setY(SKY.sunDir.y + 0.25).normalize());
  g.add(dish);

  const light = new THREE.PointLight(0xffb070, 9, 16, 1.8);
  light.position.set(Math.cos(doorA) * (radius + 2.6), legH + 3.0, Math.sin(doorA) * (radius + 2.6));
  g.add(light);

  colliders.push({ x, z, r: radius + 1 });
  for (const d of [radius + 2.4, radius + 3.8]) colliders.push({ x: x + Math.cos(doorA) * d, z: z + Math.sin(doorA) * d, r: 1.15 });
  const out = bake(g, 'habitat');
  return onGround(out, x, z);
}

// ------------------------------------------------------------- solar array

function createSolarArray() {
  const { x, z, cols, rows } = LAYOUT.solarArray;
  const group = new THREE.Group();
  // Real solar-cell texture (ambientCG SolarPanel002, CC0) on each panel face.
  const solar = (map, isColour) => {
    const t = metalTex('solar-cells', map, isColour).clone();
    t.repeat.set(2, 1.2);
    t.needsUpdate = true;
    return t;
  };
  const cellMat = new THREE.MeshStandardMaterial({ map: solar('color', true), normalMap: solar('normal', false), roughnessMap: solar('roughness', false), roughness: 0.6, metalness: 0.5, emissive: 0x0a1c50, emissiveIntensity: 0.35 });
  // Panels face the Sun, which sits low in the east.
  const yaw = Math.atan2(SKY.sunDir.x, SKY.sunDir.z);
  const tilt = (Math.PI / 2 - Math.asin(SKY.sunDir.y)) * 0.85;
  const headY = 1.55;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const panel = new THREE.Group();
      const head = new THREE.Group();
      head.position.y = headY;
      head.rotation.order = 'YXZ';
      head.rotation.y = yaw;
      head.rotation.x = tilt;
      head.add(box(2.8, 0.1, 1.8, M.dark)); // tray the cells sit in
      const cells = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.6), cellMat);
      cells.rotation.x = -Math.PI / 2;
      cells.position.y = 0.056;
      head.add(cells);
      // A raised bright frame round the cells, and ribs under the tray.
      for (const s of [-1, 1]) {
        head.add(box(2.8, 0.05, 0.08, M.panel, 0, 0.07, s * 0.86));
        head.add(box(0.08, 0.05, 1.8, M.panel, s * 1.36, 0.07, 0));
        head.add(box(0.09, 0.12, 1.6, M.panel, s * 0.8, -0.1, 0));
      }
      head.add(box(2.5, 0.12, 0.12, M.panel, 0, -0.1, 0));
      panel.add(head);
      // Post on a bolted foot, two stays, and a short orange actuator that
      // sets the panel's tilt.
      panel.add(strut(v3(0, 0, 0), v3(0, headY - 0.05, 0), 0.09, M.dark, 8));
      panel.add(cyl(0.15, 0.15, 0.24, 10, M.panel, 0, headY - 0.14, 0));
      panel.add(strut(v3(-0.75, 0.06, 0.55), v3(0, 1.05, 0), 0.04, M.dark, 4));
      panel.add(strut(v3(0.75, 0.06, 0.55), v3(0, 1.05, 0), 0.04, M.dark, 4));
      panel.add(strut(v3(0, 0.7, 0), v3(-0.45, headY - 0.2, -0.3), 0.045, M.trim, 5));
      panel.add(cyl(0.4, 0.48, 0.12, 12, M.dark, 0, 0.06, 0));
      panel.add(cyl(0.3, 0.3, 0.03, 12, M.trim, 0, 0.13, 0));
      group.add(onGround(panel, x + c * 3.2, z + r * 3.4));
      // Each panel is long north to south and narrow east to west, so two
      // small circles fit it, and the player can walk the lanes between lines.
      for (const dz of [-0.78, 0.78]) colliders.push({ x: x + c * 3.2, z: z + r * 3.4 + dz, r: 0.95 });
    }
  }
  // Each line of panels (they stand side by side north to south) shares one
  // long tube that tilts them together, driven from a box at its north end; a
  // cable trunk gathers the lines' wires and runs to the junction box.
  const north = z - 1.8;
  const south = z + (rows - 1) * 3.4 + 1.5;
  for (let c = 0; c < cols; c++) {
    const cx = x + c * 3.2;
    const gy = heightAt(cx, z);
    group.add(strut(v3(cx, gy + 1.32, north), v3(cx, gy + 1.32, south), 0.06, M.panel, 6));
    const drive = new THREE.Group();
    drive.add(box(0.5, 0.55, 0.5, M.shell, 0, 1.1, 0), box(0.54, 0.08, 0.54, M.trim, 0, 1.4, 0), box(0.1, 0.08, 0.1, M.amber, 0.12, 1.47, 0.12));
    drive.add(strut(v3(0, 0, 0), v3(0, 0.85, 0), 0.07, M.dark), cyl(0.22, 0.26, 0.08, 10, M.dark, 0, 0.04, 0));
    group.add(onGround(drive, cx, north - 0.1));
    colliders.push({ x: cx, z: north - 0.1, r: 0.45 });
  }
  group.add(strut(v3(x - 0.3, heightAt(x, north) + 0.09, north - 0.55), v3(x + cols * 3.2 - 1.6, heightAt(x, north) + 0.09, north - 0.55), 0.09, M.dark, 6));
  // The junction box where the array's wires meet.
  const jx = x + cols * 3.2 - 1.2;
  const jz = z - 2.2;
  const junction = new THREE.Group();
  junction.add(box(1.3, 1.1, 0.8, M.shell, 0, 0.75, 0), box(1.36, 0.12, 0.86, M.trim, 0, 1.32, 0), box(1.36, 0.08, 0.86, M.dark, 0, 0.2, 0));
  junction.add(box(0.03, 0.9, 0.02, M.dark, 0, 0.75, 0.41), box(0.5, 0.34, 0.03, M.cyan, -0.32, 0.92, 0.41), box(0.2, 0.12, 0.2, M.amber, 0.4, 1.44, 0.2));
  for (const lx of [-0.5, 0.5]) junction.add(box(0.12, 0.2, 0.7, M.dark, lx, 0.1, 0));
  group.add(onGround(junction, jx, jz));
  colliders.push({ x: jx, z: jz, r: 0.95 });
  return bake(group, 'solarArray');
}

// ----------------------------------------------------------------- reactor

function createReactor() {
  const { x, z } = LAYOUT.reactor;
  const g = new THREE.Group();
  // Foundation: a wide skirt, the deck, and a warning band round the shield.
  g.add(cyl(3.3, 3.7, 0.22, 8, M.panel, 0, 0.11, 0));
  g.add(cyl(3.0, 3.3, 0.5, 8, M.dark, 0, 0.42, 0));
  g.add(cyl(2.9, 2.9, 0.08, 8, M.trim, 0, 0.7, 0));
  g.add(cyl(1.5, 1.7, 1.2, 16, M.panel, 0, 1.32, 0)); // radiation shield
  g.add(cyl(1.73, 1.73, 0.26, 24, M.hazard, 0, 0.9, 0));
  g.add(cyl(1.3, 1.4, 2.6, 16, hullPlating(1, 0.5), 0, 3.17, 0)); // core vessel
  g.add(cyl(1.36, 1.36, 0.32, 16, M.trim, 0, 3.67, 0));
  g.add(cyl(1.4, 1.4, 0.1, 16, M.dark, 0, 2.37, 0));
  g.add(cyl(1.36, 1.36, 0.1, 16, M.dark, 0, 4.42, 0));
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.hull);
  dome.position.y = 4.47;
  dome.scale.y = 0.55;
  g.add(dome);
  g.add(cyl(0.42, 0.55, 0.3, 12, M.panel, 0, 5.2, 0)); // shield cap
  g.add(cyl(0.58, 0.58, 0.06, 12, M.trim, 0, 5.08, 0));
  g.add(strut(v3(0, 5.3, 0), v3(0, 6.3, 0), 0.05, M.dark));
  g.add(ball(0.2, M.amber, 0, 6.4, 0, 10));
  // Status lights: a thin cyan ring round the vessel and four amber deck lamps,
  // so the reactor still reads from its shaded side.
  g.add(cyl(1.42, 1.42, 0.07, 24, M.cyan, 0, 3.2, 0));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 8;
    g.add(cyl(0.09, 0.11, 0.16, 8, M.dark, Math.cos(a) * 2.95, 0.78, Math.sin(a) * 2.95));
    g.add(ball(0.1, M.amber, Math.cos(a) * 2.95, 0.9, Math.sin(a) * 2.95, 8));
  }
  // Bolts round the deck.
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2;
    g.add(cyl(0.07, 0.07, 0.1, 6, M.panel, Math.cos(a) * 2.7, 0.76, Math.sin(a) * 2.7));
  }
  // Coolant loops: copper pipe rings round the vessel, risers between the
  // fins, and foil-wrapped tanks on the deck.
  g.add(torus(1.47, 0.07, M.copper, 0, 2.75, 0, 6, 28));
  g.add(torus(1.47, 0.07, M.copper, 0, 4.1, 0, 6, 28));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const c = Math.cos(a), s = Math.sin(a);
    g.add(strut(v3(c * 1.5, 1.95, s * 1.5), v3(c * 1.5, 4.1, s * 1.5), 0.07, M.copper, 6));
    g.add(strut(v3(c * 1.5, 1.95, s * 1.5), v3(c * 2.25, 1.3, s * 2.25), 0.07, M.copper, 6));
    if (i === 1) continue; // the control cabinet stands here
    g.add(cyl(0.42, 0.42, 1.1, 12, M.foil, c * 2.3, 1.3, s * 2.3));
    g.add(ball(0.42, M.foil, c * 2.3, 1.85, s * 2.3, 12));
    g.add(cyl(0.46, 0.46, 0.08, 12, M.dark, c * 2.3, 0.78, s * 2.3));
  }
  // Control cabinet on the side facing the base.
  g.add(box(0.9, 1.25, 0.6, M.shell, 0, 1.37, 2.45), box(0.96, 0.1, 0.66, M.trim, 0, 2.03, 2.45), box(0.96, 0.08, 0.66, M.dark, 0, 0.78, 2.45));
  g.add(box(0.5, 0.3, 0.03, M.cyan, -0.1, 1.6, 2.76), box(0.12, 0.12, 0.03, M.amber, 0.3, 1.66, 2.76), box(0.5, 0.06, 0.03, M.dark, -0.1, 1.3, 2.76));

  // Radiator fins: a reactor makes far more heat than electricity and, with
  // no air to carry it off, has to glow that heat away from big flat panels.
  // (These are NOT solar panels.)
  const finTex = canvasTexture(256, 128, (ctx, w, h) => {
    ctx.fillStyle = '#d9dee6';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(90,100,120,0.35)';
    for (let i = 0; i < 32; i++) ctx.fillRect(i * 8, 0, 2, h);
    ctx.fillStyle = 'rgba(60,70,90,0.5)';
    ctx.fillRect(0, h / 2 - 2, w, 4);
  });
  const finGlow = canvasTexture(256, 8, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, '#ff5a1e');
    grad.addColorStop(0.35, '#7a2408');
    grad.addColorStop(1, '#0a0200');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  });
  const finMat = new THREE.MeshStandardMaterial({ map: finTex, emissive: 0xffffff, emissiveMap: finGlow, emissiveIntensity: 0.9, roughness: 0.4, metalness: 0.45, side: THREE.DoubleSide });
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const s = new THREE.Group();
    s.rotation.y = -a;
    g.add(s);
    const fy = 2.77; // the fin's middle height
    const fin = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 3.2), finMat);
    fin.position.set(4.3, fy, 0);
    s.add(fin);
    s.add(box(5.6, 0.12, 0.14, M.dark, 4.3, fy + 1.62, 0), box(5.6, 0.12, 0.14, M.dark, 4.3, fy - 1.62, 0), box(0.12, 3.3, 0.14, M.dark, 7.07, fy, 0), box(0.12, 3.3, 0.14, M.dark, 1.55, fy, 0));
    for (const rx of [2.9, 4.3, 5.7]) s.add(box(0.06, 3.2, 0.1, M.dark, rx, fy, 0));
    // Heat pipes from the core run the length of the fin.
    for (const hy of [-1.05, 0, 1.05]) s.add(strut(v3(1.35, fy + hy, 0), v3(7.0, fy + hy, 0), 0.055, M.copper, 6));
    s.add(strut(v3(0.9, 5.0, 0), v3(7.05, fy + 1.66, 0), 0.03, M.dark, 4)); // stay from the cap
    s.add(strut(v3(7.07, fy - 1.6, 0), v3(7.07, 0.08, 0), 0.07, M.dark));
    s.add(cyl(0.26, 0.32, 0.1, 10, M.dark, 7.07, 0.05, 0));
    s.add(strut(v3(3.2, 0.72, 0), v3(4.6, fy - 1.6, 0), 0.05, M.dark, 5));
    for (const d of [4.5, 6.3]) colliders.push({ x: x + Math.cos(a) * d, z: z + Math.sin(a) * d, r: 0.95 });
  }
  colliders.push({ x, z, r: 3.8 });
  return onGround(bake(g, 'reactor'), x, z);
}

// ----------------------------------------------------------------- cryobot

// Where the cryobot's winch stands, measured from the cryobot (on the side
// the cable from the spool arrives on).
const WINCH = { x: -3.2, z: 0.5 };

function createCryobot() {
  const { x, z } = LAYOUT.cryobot;
  const g = new THREE.Group();
  // A tall three-legged gantry standing over the melt hole. The probe hangs
  // from a cable that runs up from a winch on the ground, over a pulley at
  // the gantry's head, and down the middle.
  const headY = 8.6;
  const footR = 3.0;
  const headR = 0.5;
  const legAt = (a, y) => {
    const r = footR + (headR - footR) * (y / headY);
    return v3(Math.cos(a) * r, y, Math.sin(a) * r);
  };
  const legAngles = [0, 1, 2].map((i) => (i / 3) * Math.PI * 2 + 0.4);
  legAngles.forEach((a, i) => {
    const a2 = legAngles[(i + 1) % 3];
    g.add(strut(legAt(a, 0.14), legAt(a, headY), 0.14, M.dark, 8));
    g.add(strut(legAt(a, 0.14), legAt(a, 2.2), 0.19, M.panel, 8)); // lower sleeve
    // Foot: a wide pad pinned to the ice.
    const f = legAt(a, 0);
    g.add(cyl(0.5, 0.6, 0.16, 12, M.dark, f.x, 0.08, f.z));
    g.add(cyl(0.42, 0.42, 0.04, 12, M.trim, f.x, 0.175, f.z));
    for (const [ox, oz] of [[0.34, 0], [-0.17, 0.3], [-0.17, -0.3]]) g.add(cyl(0.05, 0.05, 0.16, 6, M.panel, f.x + ox, 0.22, f.z + oz));
    // Two tiers of cross braces, and diagonals between them.
    for (const y of [2.4, 5.6]) g.add(strut(legAt(a, y), legAt(a2, y), 0.055, M.dark, 5));
    g.add(strut(legAt(a, 2.4), legAt(a2, 5.6), 0.035, M.panel, 4));
    g.add(strut(legAt(a2, 2.4), legAt(a, 5.6), 0.035, M.panel, 4));
    // Spokes holding the guide ring the probe slides through.
    const spoke = legAt(a, 5.6);
    g.add(strut(spoke, v3(Math.cos(a) * 0.8, 5.6, Math.sin(a) * 0.8), 0.045, M.dark, 5));
  });
  g.add(torus(0.8, 0.07, M.trim, 0, 5.6, 0, 8, 28));
  // Head: a deck with the pulley on top and a beacon.
  g.add(cyl(0.82, 0.9, 0.2, 16, M.dark, 0, headY, 0));
  g.add(cyl(0.86, 0.86, 0.07, 16, M.trim, 0, headY + 0.13, 0));
  const toWinch = Math.atan2(WINCH.z, WINCH.x); // direction of the winch, seen from the middle
  const head = new THREE.Group();
  head.rotation.y = -toWinch; // local +x points at the winch
  head.position.y = headY;
  const wheelR = 0.44;
  const wheel = cyl(wheelR, wheelR, 0.14, 24, M.panel, wheelR, 0.72, 0);
  wheel.rotation.x = Math.PI / 2;
  head.add(wheel);
  const hub = cyl(0.12, 0.12, 0.44, 10, M.trim, wheelR, 0.72, 0);
  hub.rotation.x = Math.PI / 2;
  head.add(hub);
  for (const s of [-1, 1]) {
    head.add(box(1.0, 0.95, 0.06, M.shell, wheelR, 0.6, s * 0.16));
    head.add(box(1.06, 0.1, 0.07, M.trim, wheelR, 1.1, s * 0.16));
  }
  head.add(box(0.5, 0.08, 0.44, M.dark, wheelR, 1.18, 0));
  head.add(strut(v3(wheelR, 1.2, 0), v3(wheelR, 1.75, 0), 0.04, M.dark, 5));
  head.add(ball(0.15, M.amber, wheelR, 1.85, 0, 8));
  g.add(head);
  // The cable: winch → pulley → probe.
  const out = v3(Math.cos(toWinch), 0, Math.sin(toWinch));
  g.add(strut(v3(WINCH.x + out.x * -0.1, 0.95, WINCH.z + out.z * -0.1), v3(out.x * wheelR * 2, headY + 0.78, out.z * wheelR * 2), 0.045, M.dark, 6));
  // Down from the pulley, through the probe's shackle and on down the hole
  // (the lower part is hidden inside the probe until the probe is lowered).
  g.add(strut(v3(0, headY + 0.72, 0), v3(0, -6.8, 0), 0.045, M.dark, 6));

  // The winch: a cable drum between two side plates, with its motor.
  const winch = new THREE.Group();
  winch.rotation.y = -toWinch;
  winch.position.set(WINCH.x, 0, WINCH.z);
  winch.add(box(1.5, 0.14, 1.2, M.dark, 0, 0.07, 0));
  const drum = cyl(0.34, 0.34, 0.7, 18, M.copper, 0, 0.72, -0.1);
  drum.rotation.x = Math.PI / 2;
  winch.add(drum);
  for (const s of [-1, 1]) {
    const flange = cyl(0.5, 0.5, 0.06, 18, M.shell, 0, 0.72, -0.1 + s * 0.38);
    flange.rotation.x = Math.PI / 2;
    winch.add(flange);
    winch.add(box(0.9, 0.95, 0.07, M.panel, 0, 0.6, -0.1 + s * 0.46));
  }
  winch.add(box(0.5, 0.5, 0.36, M.shell, 0.05, 0.5, 0.72), box(0.54, 0.08, 0.4, M.trim, 0.05, 0.78, 0.72), box(0.1, 0.08, 0.1, M.amber, 0.2, 0.85, 0.78));
  winch.add(box(0.26, 0.2, 0.03, M.cyan, -0.05, 0.52, 0.91));
  g.add(winch);

  // The probe: a long melt probe hanging in the gantry, nose down the shaft.
  // Tapered toward the nose; segment rings; guide rails that keep it straight
  // in the hole; heater strips; small sensor windows; a hot nose.
  const probe = new THREE.Group(); // kept apart from the gantry, so it can be lowered down the hole
  const probeSkin = hullPlating(0.5, 1);
  probe.add(cyl(0.55, 0.55, 3.7, 18, probeSkin, 0, 4.65, 0));
  probe.add(cyl(0.55, 0.46, 1.9, 18, probeSkin, 0, 1.85, 0));
  probe.add(cyl(0.3, 0.55, 0.5, 18, M.panel, 0, 6.75, 0));
  probe.add(cyl(0.14, 0.24, 0.3, 10, M.dark, 0, 7.13, 0));
  const shackle = torus(0.11, 0.035, M.panel, 0, 7.36, 0, 5, 12);
  shackle.rotation.set(0, 0, 0);
  probe.add(shackle);
  for (const y of [1.5, 3.1, 4.9]) probe.add(cyl(0.59, 0.59, 0.2, 18, M.trim, 0, y, 0));
  for (const y of [2.8, 3.9, 5.7, 6.45]) probe.add(cyl(0.575, 0.575, 0.07, 18, M.dark, 0, y, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.9;
    const rail = box(0.12, 3.5, 0.16, M.dark, Math.cos(a) * 0.6, 4.7, Math.sin(a) * 0.6);
    rail.rotation.y = -a;
    probe.add(rail);
  }
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    const heater = box(0.05, 1.0, 0.16, M.amber, Math.cos(a) * 0.52, 2.2, Math.sin(a) * 0.52);
    heater.rotation.y = -a;
    probe.add(heater);
    const eye = box(0.05, 0.16, 0.22, M.cyan, Math.cos(a + 0.5) * 0.56, 5.3, Math.sin(a + 0.5) * 0.56);
    eye.rotation.y = -(a + 0.5);
    probe.add(eye);
  }
  probe.add(cyl(0.5, 0.5, 0.16, 18, M.copper, 0, 0.82, 0)); // heating collar above the nose
  probe.add(cyl(0.48, 0.44, 0.34, 18, M.dark, 0, 0.57, 0));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.44, 1.3, 18), M.hot);
  nose.rotation.x = Math.PI;
  nose.position.y = -0.25;
  probe.add(nose);

  // A steel collar bolted round the top of the shaft, with clamps and
  // status lights.
  g.add(lathe([[1.2, 0], [1.66, 0], [1.66, 0.1], [1.52, 0.24], [1.2, 0.24]], 32, M.dark));
  g.add(torus(1.36, 0.05, M.trim, 0, 0.26, 0, 6, 32));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.2;
    const clamp = box(0.34, 0.16, 0.24, M.panel, Math.cos(a) * 1.45, 0.3, Math.sin(a) * 1.45);
    clamp.rotation.y = -a;
    g.add(clamp);
    if (i % 2 === 0) g.add(box(0.1, 0.06, 0.1, M.cyan, Math.cos(a + 0.5) * 1.45, 0.27, Math.sin(a + 0.5) * 1.45));
  }

  const baked = bake(g, 'cryobot');

  // The melt shaft. No open pool (water can't sit on the surface in a
  // vacuum): just a round shaft of ice, glowing from the probe's lamps below.
  const shaftMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: { uPower: cryobotFx.uPower },
    vertexShader: /* glsl */ `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec3 vP; uniform float uPower;
      void main(){
        float d = clamp(-vP.y / 7.0, 0.0, 1.0);            // 0 at the rim, 1 at the bottom
        float rings = 0.85 + 0.15 * sin(vP.y * 9.0);        // melt rings in the wall
        vec3 col = mix(vec3(0.05,0.22,0.36), vec3(0.35,1.25,1.6), smoothstep(0.0, 0.75, d)) * rings;
        gl_FragColor = vec4(col * uPower, 1.0);
      }`,
  });
  const shaftGeo = new THREE.CylinderGeometry(1.16, 0.95, 7, 28, 1, true);
  shaftGeo.translate(0, -3.5, 0);
  const shaft = new THREE.Mesh(shaftGeo, shaftMat);
  shaft.name = 'meltShaft';
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.96, 24), M.cyan);
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = -7;
  // A smooth lip of refrozen meltwater outside the collar.
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.85, 0.36, 10, 32), makeIceMaterial());
  rim.rotation.x = Math.PI / 2;
  rim.scale.z = 0.5;
  rim.position.y = 0.0;
  rim.receiveShadow = true;
  const glow = new THREE.PointLight(0x5fd8ff, 30, 18, 1.6);
  glow.position.y = 0.9;
  const probeBaked = bake(probe, 'probe');
  baked.add(shaft, bottom, rim, glow, probeBaked);
  cryobotFx.probe = probeBaked;
  cryobotFx.glow = glow;

  // Solid things only: the collar and shaft, each foot, the winch. The
  // player can walk between the legs.
  colliders.push({ x, z, r: 1.9 });
  for (const a of legAngles) colliders.push({ x: x + Math.cos(a) * (footR - 0.35), z: z + Math.sin(a) * (footR - 0.35), r: 0.75 });
  colliders.push({ x: x + WINCH.x, z: z + WINCH.z, r: 0.95 });
  return onGround(baked, x, z);
}

// ------------------------------------------------------------------- spool

function createSpool() {
  const { x, z } = LAYOUT.cableSpool;
  const g = new THREE.Group();
  const axleY = 1.4;
  const axle = new THREE.Group();
  axle.rotation.z = Math.PI / 2; // the drum lies on its side
  axle.position.y = axleY;
  axle.add(cyl(0.78, 0.78, 1.3, 24, M.copper)); // wound cable
  for (let i = -6; i <= 6; i++) axle.add(cyl(0.805, 0.805, 0.035, 24, M.dark, 0, i * 0.098, 0));
  for (const s of [-1, 1]) {
    axle.add(cyl(1.2, 1.2, 0.09, 28, M.shell, 0, s * 0.72, 0)); // flange
    axle.add(cyl(1.24, 1.24, 0.05, 28, M.trim, 0, s * 0.72, 0)); // its orange rim
    axle.add(cyl(0.36, 0.36, 0.1, 12, M.trim, 0, s * 0.8, 0)); // hub cap
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2;
      axle.add(cyl(0.17, 0.17, 0.1, 10, M.dark, Math.cos(a) * 0.82, s * 0.725, Math.sin(a) * 0.82)); // lightening holes
    }
  }
  axle.add(cyl(0.2, 0.2, 2.0, 10, M.dark));
  g.add(axle);
  // Frame: an A on each side, joined by cross-members, on skids pinned down.
  for (const side of [-0.95, 0.95]) {
    g.add(strut(v3(side, axleY, 0), v3(side, 0.14, 0.95), 0.08, M.dark), strut(v3(side, axleY, 0), v3(side, 0.14, -0.95), 0.08, M.dark));
    g.add(strut(v3(side, 0.6, 0.6), v3(side, 0.6, -0.6), 0.05, M.dark, 5));
    g.add(box(0.2, 0.14, 2.3, M.dark, side, 0.07, 0));
    g.add(box(0.26, 0.3, 0.26, M.panel, side, axleY, 0)); // bearing block
    for (const e of [-1.0, 1.0]) g.add(cyl(0.06, 0.06, 0.2, 6, M.trim, side, 0.2, e));
  }
  for (const e of [-0.95, 0.95]) g.add(box(2.0, 0.1, 0.12, M.dark, 0, 0.1, e));
  // A guide arm that lays the cable evenly, and the motor box.
  g.add(strut(v3(-0.95, 0.5, 1.15), v3(0.95, 0.5, 1.15), 0.045, M.panel, 6));
  g.add(box(0.2, 0.3, 0.16, M.trim, 0.15, 0.5, 1.15));
  for (const side of [-0.95, 0.95]) g.add(strut(v3(side, 0.14, 0.95), v3(side, 0.5, 1.15), 0.045, M.panel, 5));
  g.add(box(0.6, 0.7, 0.6, M.shell, 1.5, 0.5, 0.2), box(0.64, 0.1, 0.64, M.trim, 1.5, 0.88, 0.2), box(0.64, 0.08, 0.64, M.dark, 1.5, 0.14, 0.2));
  g.add(box(0.14, 0.1, 0.14, M.amber, 1.62, 0.97, 0.3), box(0.03, 0.22, 0.3, M.cyan, 1.81, 0.56, 0.2));
  g.add(strut(v3(1.2, axleY, 0), v3(1.5, 0.9, 0.1), 0.06, M.dark, 6));
  g.rotation.y = Math.atan2(-(LAYOUT.cryobot.z - z), LAYOUT.cryobot.x - x) + Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(g);
  colliders.push({ x, z, r: 1.9 });
  return onGround(bake(holder, 'cableSpool'), x, z);
}

// ------------------------------------------------------------------ cables

// A heavy ribbed power cable lying on the ice: steel collars every metre and
// a half, and every nine metres a clamp pinned to the ground with an amber
// marker light on a short stake.
function cableAlong(group, points, radius = 0.16) {
  const lift = radius + 0.02;
  const pts = points.map(([px, pz]) => new THREE.Vector3(px, heightAt(px, pz) + lift, pz));
  const curve = new THREE.CatmullRomCurve3(pts);
  // Re-sample so the cable hugs the ground between control points.
  const samples = curve.getSpacedPoints(Math.ceil(curve.getLength() / 1.2)).map((p) => new THREE.Vector3(p.x, heightAt(p.x, p.z) + lift, p.z));
  const hugging = new THREE.CatmullRomCurve3(samples);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(hugging, samples.length * 2, radius, 8, false), M.dark));
  const len = hugging.getLength();
  const tangent = new THREE.Vector3();
  for (let d = 0.7; d < len - 0.3; d += 1.5) {
    const p = hugging.getPointAt(d / len);
    hugging.getTangentAt(d / len, tangent);
    const collar = cyl(radius * 1.32, radius * 1.32, 0.13, 8, M.panel, p.x, p.y, p.z);
    collar.quaternion.setFromUnitVectors(UP, tangent);
    group.add(collar);
  }
  for (let d = 4; d < len - 2; d += 9) {
    const p = hugging.getPointAt(d / len);
    hugging.getTangentAt(d / len, tangent);
    const clamp = new THREE.Group();
    clamp.add(box(0.26, 0.08, 0.7, M.trim, 0, -radius + 0.02, 0)); // plate under the cable
    clamp.add(box(0.2, radius * 2 + 0.1, radius * 2 + 0.16, M.dark, 0, 0.02, 0)); // saddle over it
    for (const s of [-1, 1]) clamp.add(cyl(0.04, 0.04, 0.16, 6, M.panel, 0, -radius + 0.1, s * 0.28)); // pins
    clamp.add(strut(v3(0, 0, 0.28), v3(0, 0.62, 0.28), 0.035, M.dark, 4));
    clamp.add(ball(0.13, M.amber, 0, 0.7, 0.28, 8));
    clamp.position.copy(p);
    clamp.rotation.y = Math.atan2(tangent.x, tangent.z) + Math.PI / 2; // local x along the cable
    group.add(clamp);
  }
}

function createCables() {
  const g = new THREE.Group();
  const R = LAYOUT.reactor;
  const H = LAYOUT.habitat;
  const S = LAYOUT.cableSpool;
  const C = LAYOUT.cryobot;
  const A = LAYOUT.solarArray;
  cableAlong(g, [[R.x - 3, R.z + 2], [16, -20], [9, -11], [H.x + 4, H.z - 4.5]]);
  // Reactor → spool → cryobot. This run crosses "Spool Linea" (the tide event).
  cableAlong(g, [[R.x + 3, R.z + 3], [35, -15], [39, 1], [33, 13], [S.x + 0.5, S.z - 1.2]], 0.18);
  cableAlong(g, [[S.x + 1.2, S.z + 0.6], [33, 24.6], [C.x + WINCH.x - 0.8, C.z + WINCH.z + 0.1]], 0.18);
  // Solar array's junction box → habitat (a small share of the power).
  cableAlong(g, [[A.x + A.cols * 3.2 - 1.0, A.z - 2.9], [-4.4, 7.8], [-5.3, 5.1]], 0.1);
  return bake(g, 'cables');
}

// ------------------------------------------------------------------ crates

// Printed labels for the crates, all drawn on one sheet (plain words, no logos).
const CRATE_LABELS = ['ICE CORES', 'SPARES', 'TOOLS', 'FOOD', 'CABLE', 'SAMPLES'];
let crateLabelMat = null;
function crateLabel(index, w, h) {
  if (!crateLabelMat) {
    const tex = canvasTexture(1536, 512, (ctx) => {
      CRATE_LABELS.forEach((text, i) => {
        const x0 = (i % 3) * 512, y0 = Math.floor(i / 3) * 256;
        ctx.fillStyle = '#e6e2d8';
        ctx.fillRect(x0, y0, 512, 256);
        ctx.strokeStyle = '#2a2f38';
        ctx.lineWidth = 10;
        ctx.strokeRect(x0 + 16, y0 + 16, 480, 224);
        ctx.fillStyle = '#ff8427';
        ctx.fillRect(x0 + 32, y0 + 32, 448, 30);
        ctx.fillStyle = '#2a2f38';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.font = 'bold 74px sans-serif';
        ctx.fillText(text, x0 + 256, y0 + 138);
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText(`CRATE ${String(i + 1).padStart(2, '0')}  ·  THIS SIDE UP`, x0 + 256, y0 + 206);
      });
    });
    crateLabelMat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, metalness: 0.05 });
  }
  const geo = new THREE.PlaneGeometry(w, h);
  const uv = geo.attributes.uv;
  const u0 = (index % 3) / 3;
  const v0 = 1 - (Math.floor(index / 3) + 1) / 2;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, u0 + uv.getX(i) / 3, v0 + uv.getY(i) / 2);
  return new THREE.Mesh(geo, crateLabelMat);
}

// One cargo crate, s metres tall: ribbed shell, corner fittings, latches,
// handles, and a printed label on both long sides.
function makeCrate(s, labelIndex) {
  const crate = new THREE.Group();
  const w = s * 1.4;
  crate.add(box(w, s, s, M.shell, 0, s / 2, 0));
  crate.add(box(w + 0.04 * s, s * 0.14, s * 1.04, M.trim, 0, s * 0.82, 0));
  crate.add(box(w + 0.04 * s, s * 0.08, s * 1.04, M.dark, 0, s * 0.1, 0));
  crate.add(box(w + 0.02 * s, s * 0.03, s * 1.02, M.dark, 0, s * 0.72, 0)); // lid seam
  for (const hx of [-0.45, 0.45]) crate.add(box(s * 0.12, s * 1.03, s * 1.05, M.panel, hx * s, s / 2, 0));
  for (const cx of [-1, 1]) for (const cy of [0, 1]) for (const cz of [-1, 1]) {
    crate.add(box(s * 0.17, s * 0.17, s * 0.17, M.dark, cx * (w / 2 - s * 0.05), cy * (s - s * 0.1) + s * 0.05, cz * (s / 2 - s * 0.05)));
  }
  for (const side of [-1, 1]) {
    const label = crateLabel(labelIndex, s * 0.72, s * 0.36);
    label.position.set(0, s * 0.41, side * (s / 2 + 0.006));
    if (side < 0) label.rotation.y = Math.PI;
    crate.add(label);
    crate.add(box(s * 0.1, s * 0.1, s * 0.05, M.dark, -s * 0.2, s * 0.72, side * s * 0.53), box(s * 0.1, s * 0.1, s * 0.05, M.dark, s * 0.2, s * 0.72, side * s * 0.53)); // latches
    // A carrying handle on each end.
    const hx = side * (w / 2 + s * 0.04);
    crate.add(strut(v3(hx, s * 0.5, -s * 0.2), v3(hx + side * s * 0.07, s * 0.5, -s * 0.2), s * 0.025, M.dark, 4));
    crate.add(strut(v3(hx, s * 0.5, s * 0.2), v3(hx + side * s * 0.07, s * 0.5, s * 0.2), s * 0.025, M.dark, 4));
    crate.add(strut(v3(hx + side * s * 0.07, s * 0.5, -s * 0.2), v3(hx + side * s * 0.07, s * 0.5, s * 0.2), s * 0.03, M.dark, 5));
  }
  return crate;
}

function createCrates() {
  const g = new THREE.Group();
  const list = [[11, 13, 1.1], [12.6, 14.1, 0.9], [13.5, 2, 1.0], [-3, 12, 1.2], [24.5, 19, 0.8], [3, 15.5, 0.7]];
  list.forEach(([cx, cz, s], i) => {
    const crate = makeCrate(s, i % CRATE_LABELS.length);
    crate.rotation.y = cx * 0.3;
    // Two of them carry a smaller crate on top.
    if (i === 0 || i === 3) {
      const upper = makeCrate(s * 0.62, (i + 2) % CRATE_LABELS.length);
      upper.position.set(s * 0.12, s, -s * 0.06);
      upper.rotation.y = 0.5;
      crate.add(upper);
    }
    g.add(onGround(crate, cx, cz));
    colliders.push({ x: cx, z: cz, r: s });
  });
  return bake(g, 'crates');
}
