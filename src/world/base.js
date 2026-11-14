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

const UP = new THREE.Vector3(0, 1, 0);

const M = {
  hull: new THREE.MeshStandardMaterial({ color: 0xf1ede4, roughness: 0.55, metalness: 0.1 }),
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
  return new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55, metalness: 0.1 });
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

  // Body: an eight-sided lander. Belly, main ring, sloped shoulders, roof.
  const belly = cyl(radius, radius * 0.8, 0.9, 8, M.panel, 0, legH + 0.45, 0);
  const plating = hullPlating(2, 1);
  const body = cyl(radius, radius, 3.1, 8, plating, 0, legH + 2.45, 0);
  const shoulder = cyl(radius * 0.74, radius, 1.3, 8, hullPlating(2, 0.5), 0, legH + 4.65, 0);
  const roof = cyl(radius * 0.7, radius * 0.74, 0.25, 8, M.panel, 0, legH + 5.42, 0);
  const stripe = cyl(radius + 0.04, radius + 0.04, 0.42, 8, M.trim, 0, legH + 1.25, 0);
  const seamLow = cyl(radius + 0.03, radius + 0.03, 0.1, 8, M.dark, 0, legH + 0.92, 0);
  const seamHigh = cyl(radius + 0.03, radius + 0.03, 0.1, 8, M.dark, 0, legH + 4.0, 0);
  for (const part of [belly, body, shoulder, roof, stripe, seamLow, seamHigh]) part.rotation.y = turn;
  g.add(belly, body, shoulder, roof, stripe, seamLow, seamHigh);

  // Under the floor: tanks wrapped in gold foil.
  g.add(cyl(2.6, 2.2, 1.3, 16, M.dark, 0, legH - 0.6, 0));
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.5;
    g.add(ball(1.0, M.foil, Math.cos(a) * 3.6, legH - 0.45, Math.sin(a) * 3.6));
  }

  // Four landing legs with foot pads.
  for (let i = 0; i < 4; i++) {
    const a = Math.PI / 8 + (i * Math.PI) / 2;
    const dir = (r, y, da = 0) => v3(Math.cos(a + da) * r, y, Math.sin(a + da) * r);
    const foot = dir(radius + 2.3, 0.2);
    g.add(strut(dir(radius - 0.3, legH + 0.9), foot, 0.2, M.foil, 8));
    g.add(strut(dir(radius - 2.2, legH + 0.1, 0.28), foot, 0.09, M.dark));
    g.add(strut(dir(radius - 2.2, legH + 0.1, -0.28), foot, 0.09, M.dark));
    const pad = cyl(0.75, 0.9, 0.18, 14, M.dark);
    pad.position.copy(foot).setY(0.09);
    g.add(pad);
  }

  // Windows: warm light, with a hint of the room inside.
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
  const doorA = THREE.MathUtils.degToRad(LAYOUT.habitat.doorAngleDeg);
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
    s.add(box(0.16, 1.5, w + 0.4, M.dark, apothem + 0.02, legH + 2.75, 0));
    const pane = new THREE.Mesh(new THREE.PlaneGeometry(w, 1.15), windowMat);
    pane.rotation.y = Math.PI / 2;
    pane.position.set(apothem + 0.11, legH + 2.75, 0);
    s.add(pane);
  }

  // Airlock, porch and stairs, facing the way layout.js says (south-east).
  const porch = face(doorA);
  porch.add(box(1.5, 3.0, 2.5, M.hull, apothem + 0.6, legH + 1.75, 0));
  porch.add(box(1.56, 0.3, 2.56, M.trim, apothem + 0.6, legH + 3.3, 0));
  porch.add(box(0.1, 2.3, 1.5, M.dark, apothem + 1.36, legH + 1.45, 0));
  porch.add(box(0.08, 2.05, 1.2, M.warm, apothem + 1.4, legH + 1.42, 0));
  porch.add(box(0.12, 0.5, 0.5, M.dark, apothem + 1.44, legH + 1.9, 0)); // door window frame
  porch.add(box(0.3, 0.14, 1.3, M.amber, apothem + 1.45, legH + 2.95, 0)); // lamp over the door
  porch.add(box(1.5, 0.12, 2.3, M.dark, apothem + 2.1, legH + 0.18, 0)); // landing
  const steps = 7;
  for (let i = 0; i < steps; i++) {
    porch.add(box(0.44, 0.1, 1.7, M.dark, apothem + 3.05 + i * 0.42, legH + 0.18 - ((i + 1) * (legH + 0.05)) / (steps + 0.4), 0));
  }
  for (const side of [-0.95, 0.95]) {
    const topPost = v3(apothem + 2.8, legH + 0.2, side);
    const lowPost = v3(apothem + 3.05 + steps * 0.42, 0.25, side);
    const rise = v3(0, 1.0, 0);
    porch.add(strut(topPost, topPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(lowPost, lowPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(topPost.clone().add(rise), lowPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(v3(apothem + 1.4, legH + 1.2, side * 1.2), topPost.clone().add(rise), 0.05, M.trim));
    porch.add(strut(topPost, lowPost, 0.07, M.dark));
  }

  // Roof: hatch, equipment, antennas, and a dish aimed toward the Sun, because
  // from Jupiter the Earth always sits close to the Sun in the sky.
  const top = legH + 5.55;
  g.add(cyl(1.5, 1.7, 0.5, 16, M.hull, 0.6, top + 0.2, 0.4));
  g.add(cyl(1.1, 1.1, 0.12, 16, M.trim, 0.6, top + 0.5, 0.4));
  g.add(box(1.6, 0.7, 1.1, M.panel, -2.6, top + 0.3, 2.2));
  g.add(box(1.0, 0.5, 1.4, M.foil, 2.9, top + 0.22, -2.0));
  for (const [ax, az, h] of [[3.2, 2.4, 4.2], [-3.4, 0.2, 3.0], [1.2, -3.4, 2.2]]) {
    g.add(strut(v3(ax, top, az), v3(ax, top + h, az), 0.06, M.dark));
    g.add(ball(0.14, M.amber, ax, top + h + 0.1, az, 8));
  }
  const dishPos = v3(-1.6, top + 1.9, -2.4);
  g.add(strut(v3(dishPos.x, top, dishPos.z), dishPos, 0.12, M.dark));
  const profile = [];
  for (let i = 0; i <= 8; i++) {
    const r = (i / 8) * 1.7;
    profile.push(new THREE.Vector2(r, 0.22 * r * r));
  }
  const dishMat = M.hull.clone();
  dishMat.side = THREE.DoubleSide;
  const dish = new THREE.Group();
  dish.add(new THREE.Mesh(new THREE.LatheGeometry(profile, 28), dishMat));
  dish.add(strut(v3(0, 0, 0), v3(0, 1.15, 0), 0.04, M.dark));
  dish.add(ball(0.13, M.trim, 0, 1.2, 0, 8));
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
  const cellTex = canvasTexture(256, 160, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#1b3f96');
    grad.addColorStop(0.5, '#10276a');
    grad.addColorStop(1, '#2450b0');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(150,190,255,0.75)';
    ctx.lineWidth = 2;
    for (let i = 0; i <= 8; i++) { ctx.beginPath(); ctx.moveTo(i * 32, 0); ctx.lineTo(i * 32, h); ctx.stroke(); }
    for (let j = 0; j <= 5; j++) { ctx.beginPath(); ctx.moveTo(0, j * 32); ctx.lineTo(w, j * 32); ctx.stroke(); }
    ctx.strokeStyle = 'rgba(150,190,255,0.25)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) { ctx.beginPath(); ctx.moveTo(i * 32 + 16, 0); ctx.lineTo(i * 32 + 16, h); ctx.stroke(); }
  });
  const cellMat = new THREE.MeshStandardMaterial({ map: cellTex, roughness: 0.22, metalness: 0.55, emissive: 0x0a1c50, emissiveIntensity: 0.5 });
  // Panels face the Sun, which sits low in the east.
  const yaw = Math.atan2(SKY.sunDir.x, SKY.sunDir.z);
  const tilt = (Math.PI / 2 - Math.asin(SKY.sunDir.y)) * 0.85;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const panel = new THREE.Group();
      const head = new THREE.Group();
      head.position.y = 1.5;
      head.rotation.order = 'YXZ';
      head.rotation.y = yaw;
      head.rotation.x = tilt;
      head.add(box(2.7, 0.08, 1.7, M.panel)); // frame and back
      const cells = new THREE.Mesh(new THREE.PlaneGeometry(2.56, 1.56), cellMat);
      cells.rotation.x = -Math.PI / 2;
      cells.position.y = 0.045;
      head.add(cells);
      head.add(box(2.4, 0.1, 0.1, M.dark, 0, -0.09, 0));
      panel.add(head);
      panel.add(strut(v3(0, 0, 0), v3(0, 1.5, 0), 0.07, M.dark));
      panel.add(strut(v3(-0.7, 0, 0.5), v3(0, 1.1, 0), 0.04, M.dark, 4));
      panel.add(strut(v3(0.7, 0, 0.5), v3(0, 1.1, 0), 0.04, M.dark, 4));
      panel.add(cyl(0.3, 0.36, 0.1, 10, M.dark, 0, 0.05, 0));
      group.add(onGround(panel, x + c * 3.2, z + r * 3.4));
    }
  }
  // A junction box where the array's wires meet.
  const jx = x + cols * 3.2 - 1.2;
  const jz = z - 2.2;
  const junction = new THREE.Group();
  junction.add(box(1.1, 0.8, 0.8, M.hull, 0, 0.5, 0), box(1.16, 0.12, 0.86, M.trim, 0, 0.92, 0), box(0.2, 0.12, 0.2, M.amber, 0.3, 1.02, 0.2));
  group.add(onGround(junction, jx, jz));
  colliders.push({ x: x + 4.8, z: z + 3.4, r: 6.5 });
  return bake(group, 'solarArray');
}

// ----------------------------------------------------------------- reactor

function createReactor() {
  const { x, z } = LAYOUT.reactor;
  const g = new THREE.Group();
  g.add(cyl(3.0, 3.3, 0.5, 8, M.dark, 0, 0.25, 0));
  g.add(cyl(2.9, 2.9, 0.08, 8, M.trim, 0, 0.53, 0));
  g.add(cyl(1.5, 1.7, 1.2, 16, M.panel, 0, 1.15, 0)); // shield base
  g.add(cyl(1.3, 1.4, 2.6, 16, hullPlating(1, 0.5), 0, 3.0, 0)); // core vessel
  g.add(cyl(1.36, 1.36, 0.32, 16, M.trim, 0, 3.5, 0));
  g.add(cyl(1.36, 1.36, 0.1, 16, M.dark, 0, 2.2, 0));
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.3, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), M.hull);
  dome.position.y = 4.3;
  dome.scale.y = 0.55;
  g.add(dome);
  g.add(strut(v3(0, 4.9, 0), v3(0, 5.9, 0), 0.05, M.dark));
  g.add(ball(0.2, M.amber, 0, 6.0, 0, 10));

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
    const fin = new THREE.Mesh(new THREE.PlaneGeometry(5.5, 3.2), finMat);
    fin.position.set(4.3, 2.6, 0);
    s.add(fin);
    s.add(box(5.6, 0.1, 0.12, M.dark, 4.3, 4.22, 0), box(5.6, 0.1, 0.12, M.dark, 4.3, 0.98, 0), box(0.1, 3.3, 0.12, M.dark, 7.07, 2.6, 0));
    // Heat pipes from the core into the fin.
    s.add(strut(v3(1.3, 3.4, 0), v3(1.7, 3.4, 0), 0.09, M.copper), strut(v3(1.4, 1.9, 0), v3(1.7, 1.9, 0), 0.09, M.copper));
    s.add(strut(v3(7.0, 1.0, 0), v3(7.0, 0.1, 0), 0.06, M.dark));
  }
  colliders.push({ x, z, r: 7 });
  return onGround(bake(g, 'reactor'), x, z);
}

// ----------------------------------------------------------------- cryobot

function createCryobot() {
  const { x, z } = LAYOUT.cryobot;
  const g = new THREE.Group();
  // Tripod with a winch head, standing over the melt hole.
  const headY = 7.4;
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.4;
    const foot = v3(Math.cos(a) * 2.6, 0.12, Math.sin(a) * 2.6);
    g.add(strut(foot, v3(Math.cos(a) * 0.45, headY, Math.sin(a) * 0.45), 0.11, M.dark, 8));
    const pad = cyl(0.36, 0.44, 0.14, 10, M.trim);
    pad.position.copy(foot).setY(0.07);
    g.add(pad);
    const a2 = a + (Math.PI * 2) / 3;
    g.add(strut(v3(Math.cos(a) * 1.75, 3.0, Math.sin(a) * 1.75), v3(Math.cos(a2) * 1.75, 3.0, Math.sin(a2) * 1.75), 0.05, M.dark, 4));
  }
  g.add(cyl(0.7, 0.7, 0.5, 14, M.hull, 0, headY + 0.1, 0));
  g.add(cyl(0.74, 0.74, 0.14, 14, M.trim, 0, headY + 0.1, 0));
  g.add(ball(0.13, M.amber, 0, headY + 0.5, 0, 8));
  g.add(strut(v3(0, headY, 0), v3(0, 6.6, 0), 0.05, M.dark)); // the cable it hangs from

  // The probe: a long melt probe with a hot nose, hanging into the shaft.
  g.add(cyl(0.55, 0.55, 5.6, 18, hullPlating(0.5, 1), 0, 3.7, 0));
  g.add(cyl(0.3, 0.55, 0.5, 18, M.panel, 0, 6.75, 0));
  for (const y of [1.5, 3.1, 4.9]) g.add(cyl(0.585, 0.585, 0.2, 18, M.trim, 0, y, 0));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2;
    g.add(box(0.05, 1.1, 0.16, M.amber, Math.cos(a) * 0.57, 2.3, Math.sin(a) * 0.57)).children.at(-1).rotation.y = -a;
  }
  g.add(cyl(0.55, 0.45, 0.5, 18, M.dark, 0, 0.65, 0));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.3, 18), M.hot);
  nose.rotation.x = Math.PI;
  nose.position.y = -0.25;
  g.add(nose);

  const baked = bake(g, 'cryobot');

  // The melt shaft. No open pool (water can't sit on the surface in a
  // vacuum): just a round shaft of ice, glowing from the probe's lamps below.
  const shaftMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    vertexShader: /* glsl */ `varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: /* glsl */ `
      varying vec3 vP;
      void main(){
        float d = clamp(-vP.y / 7.0, 0.0, 1.0);            // 0 at the rim, 1 at the bottom
        float rings = 0.85 + 0.15 * sin(vP.y * 9.0);        // melt rings in the wall
        vec3 col = mix(vec3(0.05,0.22,0.36), vec3(0.35,1.25,1.6), smoothstep(0.0, 0.75, d)) * rings;
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  const shaftGeo = new THREE.CylinderGeometry(1.16, 0.95, 7, 28, 1, true);
  shaftGeo.translate(0, -3.5, 0);
  const shaft = new THREE.Mesh(shaftGeo, shaftMat);
  shaft.name = 'meltShaft';
  const bottom = new THREE.Mesh(new THREE.CircleGeometry(0.96, 24), M.cyan);
  bottom.rotation.x = -Math.PI / 2;
  bottom.position.y = -7;
  // A smooth lip of refrozen meltwater around the hole.
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.36, 10, 32), makeIceMaterial());
  rim.rotation.x = Math.PI / 2;
  rim.scale.z = 0.55;
  rim.position.y = 0.02;
  rim.receiveShadow = true;
  const glow = new THREE.PointLight(0x5fd8ff, 30, 18, 1.6);
  glow.position.y = 0.9;
  baked.add(shaft, bottom, rim, glow);

  colliders.push({ x, z, r: 2.9 });
  return onGround(baked, x, z);
}

// ------------------------------------------------------------------- spool

function createSpool() {
  const { x, z } = LAYOUT.cableSpool;
  const g = new THREE.Group();
  const axle = new THREE.Group();
  axle.rotation.z = Math.PI / 2; // the drum lies on its side
  axle.position.y = 1.25;
  axle.add(cyl(0.72, 0.72, 1.2, 24, M.copper)); // wound cable
  for (let i = -5; i <= 5; i++) axle.add(cyl(0.745, 0.745, 0.035, 24, M.dark, 0, i * 0.105, 0));
  axle.add(cyl(1.05, 1.05, 0.08, 24, M.hull, 0, 0.66, 0), cyl(1.05, 1.05, 0.08, 24, M.hull, 0, -0.66, 0));
  axle.add(cyl(0.2, 0.2, 1.7, 10, M.dark), cyl(0.3, 0.3, 0.1, 10, M.trim, 0, 0.72, 0), cyl(0.3, 0.3, 0.1, 10, M.trim, 0, -0.72, 0));
  g.add(axle);
  for (const side of [-0.82, 0.82]) {
    g.add(strut(v3(side, 1.25, 0), v3(side, 0.1, 0.8), 0.07, M.dark), strut(v3(side, 1.25, 0), v3(side, 0.1, -0.8), 0.07, M.dark));
    g.add(box(0.16, 0.12, 1.9, M.dark, side, 0.08, 0));
  }
  g.add(box(0.6, 0.6, 0.6, M.hull, 1.25, 0.4, 0.3), box(0.64, 0.1, 0.64, M.trim, 1.25, 0.72, 0.3), box(0.14, 0.1, 0.14, M.amber, 1.4, 0.8, 0.3));
  g.rotation.y = Math.atan2(-(LAYOUT.cryobot.z - z), LAYOUT.cryobot.x - x) + Math.PI / 2;
  const holder = new THREE.Group();
  holder.add(g);
  colliders.push({ x, z, r: 1.7 });
  return onGround(bake(holder, 'cableSpool'), x, z);
}

// ------------------------------------------------------------------ cables

function cableAlong(group, points, radius = 0.12) {
  const lift = radius + 0.02;
  const pts = points.map(([px, pz]) => new THREE.Vector3(px, heightAt(px, pz) + lift, pz));
  const curve = new THREE.CatmullRomCurve3(pts);
  // Re-sample so the cable hugs the ground between control points.
  const samples = curve.getSpacedPoints(Math.ceil(curve.getLength() / 1.2)).map((p) => new THREE.Vector3(p.x, heightAt(p.x, p.z) + lift, p.z));
  const hugging = new THREE.CatmullRomCurve3(samples);
  group.add(new THREE.Mesh(new THREE.TubeGeometry(hugging, samples.length * 2, radius, 7, false), M.dark));
  // Amber marker lights on short stakes along the cable.
  const len = hugging.getLength();
  for (let d = 4; d < len - 2; d += 9) {
    const p = hugging.getPointAt(d / len);
    group.add(box(0.42, 0.16, 0.42, M.trim, p.x, p.y + 0.02, p.z));
    group.add(strut(v3(p.x, p.y, p.z), v3(p.x, p.y + 0.55, p.z), 0.035, M.dark, 4));
    group.add(ball(0.13, M.amber, p.x, p.y + 0.62, p.z, 8));
  }
}

function createCables() {
  const g = new THREE.Group();
  const R = LAYOUT.reactor;
  const H = LAYOUT.habitat;
  const S = LAYOUT.cableSpool;
  const C = LAYOUT.cryobot;
  cableAlong(g, [[R.x - 3, R.z + 2], [16, -20], [9, -11], [H.x + 4, H.z - 4.5]]);
  // Reactor → spool → cryobot. This run crosses "Spool Linea" (the tide event).
  cableAlong(g, [[R.x + 3, R.z + 3], [35, -15], [39, 1], [33, 13], [S.x + 0.5, S.z - 1.2]], 0.14);
  cableAlong(g, [[S.x + 1.2, S.z + 0.6], [34, 25], [C.x - 2.6, C.z + 0.9]], 0.14);
  return bake(g, 'cables');
}

// ------------------------------------------------------------------ crates

function createCrates() {
  const g = new THREE.Group();
  for (const [cx, cz, s] of [[11, 13, 1.1], [12.6, 14.1, 0.9], [13.5, 2, 1.0], [-3, 12, 1.2], [24.5, 19, 0.8], [3, 15.5, 0.7]]) {
    const crate = new THREE.Group();
    crate.add(box(s * 1.4, s, s, M.hull, 0, s / 2, 0));
    crate.add(box(s * 1.44, s * 0.14, s * 1.04, M.trim, 0, s * 0.82, 0));
    crate.add(box(s * 1.44, s * 0.08, s * 1.04, M.dark, 0, s * 0.1, 0));
    for (const hx of [-0.45, 0.45]) crate.add(box(s * 0.12, s * 1.03, s * 1.05, M.panel, hx * s, s / 2, 0));
    crate.add(box(s * 0.3, s * 0.06, s * 0.1, M.dark, 0, s * 0.6, s * 0.52));
    crate.rotation.y = cx * 0.3;
    g.add(onGround(crate, cx, cz));
    colliders.push({ x: cx, z: cz, r: s });
  }
  return bake(g, 'crates');
}
