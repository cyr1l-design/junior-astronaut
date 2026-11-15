// The ending (Cyril's idea, 2026-11-14): a submersible goes down the hole the
// cryobot melted, comes out under the ice, heads for a faint glow, and when
// its lamps are switched off the dark fills with living light.
//
// SCIENCE, to be said plainly on screen: NO LIFE HAS BEEN FOUND ON EUROPA.
// Everything alive here is imagined, modelled on real animals of Earth's
// deep sea that make their own light (jellyfish, comb jellies, siphonophores,
// dragonfish). What is real: the ocean under the ice, holding about twice
// the water of all Earth's oceans (references/europa.md section 2), and the
// idea that life could gather on the underside of the ice (section 11).
// Down here haze and soft light are TRUE (water scatters light), unlike on
// the airless surface.
//
// Everything is made in code: no models, no textures, no sound files.

import * as THREE from 'three';
import { fbm, seededRandom } from '../world/noise.js';
import './ocean.css';

const WATER = new THREE.Color(0x020b18);
const SHAFT_Y = 600; // the shaft is built far above the ocean, out of sight
const STOP = new THREE.Vector3(0, -17, -150); // where the submersible hovers
const FIELD = new THREE.Vector3(0, -24, -205); // the middle of the living light
const START_Y = -4.5; // where it comes out, just under the hole

// Shared by every shader: time, the lamps, and the wave of light that spreads
// outward when the lamps go off.
const U = {
  uTime: { value: 0 },
  uLamp: { value: 1 }, // 1 = lamps on, 0 = off
  uReveal: { value: 0 }, // metres the wave of light has spread from uCenter
  uHint: { value: 0.14 }, // how faintly the life glows before it is revealed
  uCenter: { value: STOP.clone() },
  uCamPos: { value: new THREE.Vector3() },
  uCamDir: { value: new THREE.Vector3(0, 0, -1) },
};
const REVEAL_GLSL = /* glsl */ `
  uniform vec3 uCenter; uniform float uReveal; uniform float uHint; uniform float uTime; uniform float uLamp;
  // Before the lamps go off the life is only a faint hint, fainter still in the lamps' glare.
  // Nothing near the window shows at all until then: only the far glow.
  float revealAt(vec3 w){ float d = distance(w, uCenter); return max(uHint * (1.0 - 0.8*uLamp) * smoothstep(28.0, 65.0, d), 1.0 - smoothstep(uReveal - 16.0, uReveal, d)); }
`;

// The underside of the ice: its height (negative = hanging lower) at a spot.
const ceilingAt = (x, z) => -(fbm(x * 0.035 + 7, z * 0.035 + 3, 4) * 7 + fbm(x * 0.15, z * 0.15, 3) * 1.4) + 4.2;

const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

export function createOcean({ camera, audio }) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  const rand = seededRandom(41);
  const R = (a, b) => a + rand() * (b - a);
  const world = new THREE.Group(); // everything under the ice
  scene.add(world);

  // --- The submersible's two lamps (they travel with the camera) -------------
  const rig = new THREE.Group();
  scene.add(rig);
  const lamps = [];
  for (const side of [-1, 1]) {
    const lamp = new THREE.SpotLight(0xdff4ff, 0, 130, 0.5, 0.7, 1.1);
    lamp.position.set(side * 1.3, -0.6, 0.5);
    lamp.target.position.set(side * 3, -1, -40);
    rig.add(lamp, lamp.target);
    lamps.push(lamp);
    // The beam itself, seen in the water: a soft cone of lit haze.
    const beam = new THREE.Mesh(
      new THREE.ConeGeometry(11, 60, 24, 1, true),
      new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
        uniforms: { uLamp: U.uLamp },
        vertexShader: /* glsl */ `varying float vL; varying vec3 vN; varying vec3 vV;
          void main(){ vL = -position.y / 60.0; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
        fragmentShader: /* glsl */ `uniform float uLamp; varying float vL; varying vec3 vN; varying vec3 vV;
          void main(){ float edge = pow(abs(dot(normalize(vN), normalize(vV))), 1.5); float a = (1.0 - vL) * (1.0 - vL) * edge * 0.16 * uLamp;
            gl_FragColor = vec4(vec3(0.55, 0.8, 1.0) * a, a); }`,
      }),
    );
    beam.geometry.translate(0, -30, 0); // tip at the lamp
    beam.rotation.x = Math.PI / 2; // pointing forward (-z)
    beam.rotation.z = -side * 0.07;
    beam.position.copy(lamp.position);
    rig.add(beam);
  }
  // A wide flood lamp tilted up, so the ice overhead is lit as it passes.
  const flood = new THREE.SpotLight(0xcfeeff, 0, 110, 1.05, 0.8, 1.0);
  flood.position.set(0, 0.4, 0);
  flood.target.position.set(0, 26, -30);
  rig.add(flood, flood.target);
  scene.add(new THREE.HemisphereLight(0x16365c, 0x02060c, 0.5));

  // --- The underside of the ice ------------------------------------------------
  {
    const geo = new THREE.PlaneGeometry(520, 520, 150, 150);
    geo.rotateX(Math.PI / 2); // facing down
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) pos.setY(i, ceilingAt(pos.getX(i), pos.getZ(i) - 110));
    geo.translate(0, 0, -110);
    geo.computeVertexNormals();
    const ice = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8fc4e6, roughness: 0.3, metalness: 0.0, emissive: 0x031826, emissiveIntensity: 1, side: THREE.DoubleSide, flatShading: true }));
    world.add(ice);
    // Ice hanging down: spikes and blunt lobes, as under sea ice on Earth.
    const spike = new THREE.ConeGeometry(0.5, 1, 6);
    spike.rotateX(Math.PI);
    spike.translate(0, -0.5, 0);
    const spikes = new THREE.InstancedMesh(spike, ice.material, 420);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    for (let i = 0; i < 420; i++) {
      let x = R(-70, 70);
      const z = R(-250, 20);
      if (Math.abs(x) < 10 && z > -170) x += x < 0 ? -12 : 12; // keep the submersible's way clear
      const len = Math.pow(rand(), 2.2) * 9 + 0.8;
      e.set(R(-0.12, 0.12), R(0, 6.28), R(-0.12, 0.12));
      m.compose(new THREE.Vector3(x, ceilingAt(x, z) + 0.3, z), q.setFromEuler(e), new THREE.Vector3(R(0.5, 1.6) * (0.6 + len * 0.12), len, R(0.5, 1.6) * (0.6 + len * 0.12)));
      spikes.setMatrixAt(i, m);
    }
    world.add(spikes);
    // The hole the cryobot made, glowing faintly from its lamps far above.
    const hole = new THREE.Mesh(new THREE.CircleGeometry(2.6, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(0x6fdcff).multiplyScalar(1.6), side: THREE.DoubleSide }));
    hole.rotation.x = Math.PI / 2;
    hole.position.set(0, ceilingAt(0, 0) - 0.05, 0);
    world.add(hole);
  }

  // --- Drifting specks ("marine snow"): bright in the lamp beams, and after
  // the lamps go off, sparks of living light ----------------------------------
  {
    const N = 2600;
    const BOX = 90;
    const p = new Float32Array(N * 3);
    const s = new Float32Array(N);
    for (let i = 0; i < N; i++) { p[i * 3] = R(0, BOX); p[i * 3 + 1] = R(0, BOX); p[i * 3 + 2] = R(0, BOX); s[i] = rand(); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    geo.setAttribute('aSeed', new THREE.BufferAttribute(s, 1));
    const pts = new THREE.Points(geo, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      uniforms: { ...U, uBox: { value: BOX } },
      vertexShader: /* glsl */ `attribute float aSeed; uniform vec3 uCamPos; uniform vec3 uCamDir; uniform float uBox; varying float vBeam; varying float vSeed; varying float vBio; ${REVEAL_GLSL}
        void main(){
          vec3 drift = vec3(sin(uTime*0.11 + aSeed*40.0)*1.5, -uTime*0.25, cos(uTime*0.09 + aSeed*31.0)*1.5);
          vec3 w = mod(position + drift - uCamPos, uBox) - 0.5*uBox + uCamPos;   // always a cloud around the camera
          vec3 to = w - uCamPos; float d = length(to);
          vBeam = smoothstep(0.80, 0.97, dot(to / max(d, 0.001), uCamDir)) * exp(-d * 0.035);
          vBio = revealAt(w) * step(0.55, aSeed); vSeed = aSeed;
          vec4 mv = viewMatrix * vec4(w, 1.0);
          gl_PointSize = (1.5 + 3.0*aSeed) * 26.0 / max(-mv.z, 1.0);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */ `uniform float uLamp; uniform float uTime; varying float vBeam; varying float vSeed; varying float vBio;
        void main(){ float r = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, r);
          float tw = 0.5 + 0.5*sin(uTime*(1.0 + 3.0*vSeed) + vSeed*90.0);
          vec3 lit = vec3(0.75, 0.9, 1.0) * vBeam * uLamp * 0.9;
          vec3 bio = mix(vec3(0.2, 1.0, 0.75), vec3(0.3, 0.6, 1.0), fract(vSeed*7.0)) * vBio * tw * tw * 0.9;
          gl_FragColor = vec4((lit + bio) * a, a); }`,
    }));
    pts.frustumCulled = false;
    world.add(pts);
  }

  // --- The life. Colours: the blues and greens most deep-sea animals glow in,
  // with a few pinks, violets and oranges for the look -------------------------
  const GLOW = [0x35f2ff, 0x4dffb0, 0x7aa2ff, 0xff5fd2, 0xb07aff, 0xffb347, 0x9dff5a];
  const colour = (i) => new THREE.Color(GLOW[i % GLOW.length]);
  const life = new THREE.Group();
  world.add(life);
  const instAttr = (geo, name, array, size) => geo.setAttribute(name, new THREE.InstancedBufferAttribute(array, size));

  // Jellyfish: a pulsing bell with trailing tentacles.
  function addJellies(list) {
    const n = list.length;
    const bell = new THREE.LatheGeometry([[0.001, 0.62], [0.32, 0.58], [0.62, 0.46], [0.86, 0.24], [1.0, 0.0], [0.9, -0.1]].map(([x, y]) => new THREE.Vector2(x, y)), 40);
    const phase = new Float32Array(n);
    const speed = new Float32Array(n);
    const cols = new Float32Array(n * 3);
    list.forEach((j, i) => { phase[i] = j.phase; speed[i] = j.speed; j.color.toArray(cols, i * 3); });
    instAttr(bell, 'aPhase', phase, 1);
    instAttr(bell, 'aSpeed', speed, 1);
    instAttr(bell, 'aColor', cols, 3);
    const bells = new THREE.InstancedMesh(bell, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: U,
      vertexShader: /* glsl */ `attribute float aPhase; attribute float aSpeed; attribute vec3 aColor; varying vec3 vCol; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPulse; ${REVEAL_GLSL}
        void main(){
          float pulse = 0.5 + 0.5*sin(uTime*aSpeed + aPhase); vPulse = pulse;
          float rim = smoothstep(0.15, 1.0, uv.y);
          vec3 p = position; p.xz *= 1.0 - 0.26*rim*pulse; p.y *= 1.0 + 0.2*pulse;
          vec4 w = modelMatrix * instanceMatrix * vec4(p, 1.0);
          w.y += sin(uTime*0.17 + aPhase*1.7)*1.6 + pulse*0.5; w.x += sin(uTime*0.07 + aPhase)*1.2;
          vW = w.xyz; vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vCol = aColor; vUv = uv;
          gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `uniform vec3 uCamPos; varying vec3 vCol; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPulse; ${REVEAL_GLSL}
        void main(){
          vec3 V = normalize(uCamPos - vW); float fres = pow(1.0 - abs(dot(normalize(vN), V)), 1.6);
          float canals = pow(abs(sin(vUv.x * 3.14159 * 16.0)), 8.0) * smoothstep(0.1, 0.9, vUv.y);
          float rimBand = smoothstep(0.86, 1.0, vUv.y);
          float bio = revealAt(vW);
          vec3 col = vCol * (0.16 + 1.5*fres + 1.1*canals + 2.2*rimBand*(0.5 + 0.5*vPulse)) * bio;
          col += vec3(0.5, 0.7, 0.9) * fres * 0.09 * uLamp * exp(-distance(vW, uCamPos)*0.03);   // a pale ghost in the lamplight
          gl_FragColor = vec4(col, 1.0); }`,
    }), n);
    // Tentacles: thin wavy ribbons hanging from the bell's rim.
    const PER = 9;
    const rib = new THREE.PlaneGeometry(1, 1, 1, 22);
    rib.translate(0, -0.5, 0);
    const tn = n * PER;
    const tPhase = new Float32Array(tn);
    const tBob = new Float32Array(tn);
    const tLen = new Float32Array(tn);
    const tCol = new Float32Array(tn * 3);
    const tentacles = new THREE.InstancedMesh(rib, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: U,
      vertexShader: /* glsl */ `attribute float aPhase; attribute float aBob; attribute float aLen; attribute vec3 aColor; varying vec3 vCol; varying float vT; varying vec3 vW; varying float vX; ${REVEAL_GLSL}
        void main(){
          float t = -position.y; vT = t; vX = position.x;
          vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.x += sin(t*7.0 - uTime*1.5 + aPhase) * 0.09 * aLen * t; w.z += cos(t*5.0 - uTime*1.2 + aPhase*2.0) * 0.09 * aLen * t;
          w.y += sin(uTime*0.17 + aBob*1.7)*1.6; w.x += sin(uTime*0.07 + aBob)*1.2;
          vW = w.xyz; vCol = aColor; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `varying vec3 vCol; varying float vT; varying vec3 vW; varying float vX; ${REVEAL_GLSL}
        void main(){ float beads = 0.55 + 0.45*sin(vT*60.0 - uTime*3.0); float across = 1.0 - abs(vX)*2.0;
          gl_FragColor = vec4(vCol * (1.0 - vT*0.85) * beads * across * 1.3 * revealAt(vW), 1.0); }`,
    }), tn);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    list.forEach((j, i) => {
      m.compose(j.pos, q.setFromEuler(new THREE.Euler(j.tilt, 0, j.tilt * 0.6)), new THREE.Vector3(j.size, j.size, j.size));
      bells.setMatrixAt(i, m);
      for (let k = 0; k < PER; k++) {
        const a = (k / PER) * Math.PI * 2;
        const r = k % 3 === 0 ? 0.25 : 0.82; // a few from the middle, most from the rim
        const len = j.size * (k % 3 === 0 ? R(3.5, 5.5) : R(1.8, 3.6));
        const t = i * PER + k;
        m.compose(new THREE.Vector3(j.pos.x + Math.cos(a) * r * j.size, j.pos.y, j.pos.z + Math.sin(a) * r * j.size), q.setFromEuler(new THREE.Euler(0, a, 0)), new THREE.Vector3(j.size * (k % 3 === 0 ? 0.16 : 0.07), len, 1));
        tentacles.setMatrixAt(t, m);
        tPhase[t] = R(0, 6.28); tBob[t] = j.phase; tLen[t] = len; j.color.toArray(tCol, t * 3);
      }
    });
    instAttr(rib, 'aPhase', tPhase, 1);
    instAttr(rib, 'aBob', tBob, 1);
    instAttr(rib, 'aLen', tLen, 1);
    instAttr(rib, 'aColor', tCol, 3);
    bells.frustumCulled = tentacles.frustumCulled = false;
    life.add(bells, tentacles);
  }

  // Comb jellies: clear ovals with eight rows of tiny paddles that flash
  // rainbow colours as they beat (real, and one of the sea's loveliest sights).
  function addCombJellies(list) {
    const n = list.length;
    const geo = new THREE.SphereGeometry(1, 40, 28);
    const phase = new Float32Array(n);
    list.forEach((c, i) => { phase[i] = c.phase; });
    instAttr(geo, 'aPhase', phase, 1);
    const mesh = new THREE.InstancedMesh(geo, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: U,
      vertexShader: /* glsl */ `attribute float aPhase; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPh; ${REVEAL_GLSL}
        void main(){ vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.y += sin(uTime*0.21 + aPhase*2.3)*1.1; w.z += sin(uTime*0.05 + aPhase)*2.5;
          vW = w.xyz; vN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal); vUv = uv; vPh = aPhase;
          gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `uniform vec3 uCamPos; varying vec2 vUv; varying vec3 vN; varying vec3 vW; varying float vPh; ${REVEAL_GLSL}
        vec3 hue(float h){ return clamp(abs(fract(h + vec3(0.0, 0.667, 0.333)) * 6.0 - 3.0) - 1.0, 0.0, 1.0); }
        void main(){
          float rows = pow(abs(cos(vUv.x * 3.14159 * 8.0)), 60.0) * smoothstep(0.06, 0.2, vUv.y) * smoothstep(0.94, 0.8, vUv.y);
          float beat = 0.35 + 0.65 * pow(0.5 + 0.5*sin(vUv.y*70.0 - uTime*7.0 + vPh), 2.0);
          vec3 rainbow = hue(vUv.y*2.5 - uTime*0.35 + vPh) * rows * beat * 3.2;
          float fres = pow(1.0 - abs(dot(normalize(vN), normalize(uCamPos - vW))), 2.2);
          vec3 col = (rainbow + vec3(0.25, 0.9, 1.0) * fres * 0.7) * revealAt(vW);
          col += vec3(0.5, 0.7, 0.9) * fres * 0.08 * uLamp * exp(-distance(vW, uCamPos)*0.03);
          gl_FragColor = vec4(col, 1.0); }`,
    }), n);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    list.forEach((c, i) => {
      m.compose(c.pos, q.setFromEuler(new THREE.Euler(c.tilt, c.phase, c.tilt)), new THREE.Vector3(c.size * 0.62, c.size, c.size * 0.62));
      mesh.setMatrixAt(i, m);
    });
    mesh.frustumCulled = false;
    life.add(mesh);
  }

  // The garden on the underside of the ice: glowing tufts hanging down.
  function addGarden(count) {
    const geo = new THREE.ConeGeometry(0.5, 1, 5, 6, true);
    geo.rotateX(Math.PI);
    geo.translate(0, -0.5, 0);
    const phase = new Float32Array(count);
    const cols = new Float32Array(count * 3);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const mesh = new THREE.InstancedMesh(geo, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: U,
      vertexShader: /* glsl */ `attribute float aPhase; attribute vec3 aColor; varying vec3 vCol; varying float vT; varying vec3 vW; ${REVEAL_GLSL}
        void main(){ float t = -position.y; vT = t; vec4 w = modelMatrix * instanceMatrix * vec4(position, 1.0);
          w.x += sin(uTime*0.9 + aPhase + t*3.0) * 0.35 * t; w.z += cos(uTime*0.7 + aPhase*1.3 + t*2.0) * 0.35 * t;
          vW = w.xyz; vCol = aColor; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `varying vec3 vCol; varying float vT; varying vec3 vW; ${REVEAL_GLSL}
        void main(){ float tip = smoothstep(0.55, 1.0, vT); float pulse = 0.7 + 0.3*sin(uTime*1.3 + vW.x*0.4 + vW.z*0.3);
          gl_FragColor = vec4(vCol * (0.12 + 0.3*vT + 2.4*tip) * pulse * revealAt(vW), 1.0); }`,
    }), count);
    // In patches, so it reads as gardens, not a lawn.
    const patches = Array.from({ length: 16 }, () => ({ x: FIELD.x + R(-55, 55), z: FIELD.z + R(-60, 55), r: R(5, 14), c: Math.floor(R(0, 7)) }));
    for (let i = 0; i < count; i++) {
      const p = patches[i % patches.length];
      const a = R(0, 6.28);
      const d = Math.sqrt(rand()) * p.r;
      const x = p.x + Math.cos(a) * d;
      const z = p.z + Math.sin(a) * d;
      const len = R(0.6, 3.2) * (1 - d / p.r * 0.6);
      m.compose(new THREE.Vector3(x, ceilingAt(x, z) + 0.1, z), q.setFromEuler(new THREE.Euler(R(-0.3, 0.3), R(0, 6.28), R(-0.3, 0.3))), new THREE.Vector3(0.14 + len * 0.05, len, 0.14 + len * 0.05));
      mesh.setMatrixAt(i, m);
      phase[i] = R(0, 6.28);
      colour(p.c + (rand() < 0.2 ? 1 : 0)).toArray(cols, i * 3);
    }
    instAttr(geo, 'aPhase', phase, 1);
    instAttr(geo, 'aColor', cols, 3);
    mesh.frustumCulled = false;
    life.add(mesh);
  }

  // Things moved by the program each frame (not by a shader): chains and fish.
  const movers = [];
  const revealOf = (p) => { const d = p.distanceTo(U.uCenter.value); return Math.max(U.uHint.value * (1 - 0.8 * U.uLamp.value) * THREE.MathUtils.smoothstep(d, 28, 65), 1 - THREE.MathUtils.smoothstep(d, U.uReveal.value - 16, U.uReveal.value)); };

  // Siphonophores: long chains of small glowing bodies, swimming as one.
  function addChain({ origin, dir, links, color, phase }) {
    const mat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
    const mesh = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 8, 6), mat, links);
    mesh.frustumCulled = false;
    life.add(mesh);
    const side = new THREE.Vector3().crossVectors(dir, new THREE.Vector3(0, 1, 0)).normalize();
    const up = new THREE.Vector3().crossVectors(side, dir).normalize();
    const m = new THREE.Matrix4();
    const p = new THREE.Vector3();
    const base = color.clone();
    movers.push((t) => {
      const head = origin.clone().addScaledVector(dir, Math.sin(t * 0.05 + phase) * 14);
      mat.color.copy(base).multiplyScalar(1.5 * revealOf(head));
      for (let i = 0; i < links; i++) {
        const s = i * 0.55;
        p.copy(head).addScaledVector(dir, -s).addScaledVector(side, Math.sin(s * 0.35 - t * 0.9 + phase) * (1.2 + s * 0.04)).addScaledVector(up, Math.cos(s * 0.27 - t * 0.7 + phase) * (0.8 + s * 0.03));
        const r = (i === 0 ? 0.55 : 0.12 + 0.2 * Math.abs(Math.sin(i * 1.7))) * (0.8 + 0.2 * Math.sin(t * 3 - i * 0.6));
        m.makeScale(r, r, r).setPosition(p);
        mesh.setMatrixAt(i, m);
      }
      mesh.instanceMatrix.needsUpdate = true;
    });
  }

  // Dragonfish: a dark body you only see by its own lights: a lure on a
  // stalk, an eye, and a row of light-spots along its side.
  function addDragonfish({ centre, radius, speed, phase, color, size }) {
    const g = new THREE.Group();
    const body = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), new THREE.MeshBasicMaterial({ color: 0x01050a }));
    body.scale.set(size * 2.6, size * 0.6, size * 0.45);
    g.add(body);
    const lights = [];
    const dot = (x, y, z, r, c) => {
      const d = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      d.position.set(x, y, z);
      d.userData.base = c.clone();
      g.add(d);
      lights.push(d);
      return d;
    };
    for (let i = 0; i < 14; i++) for (const s of [-1, 1]) dot(size * (2.1 - i * 0.32), -size * 0.22, s * size * 0.36 * Math.sin(Math.PI * (i + 1) / 16 + 0.3), size * 0.07, color);
    dot(size * 2.2, size * 0.2, size * 0.3, size * 0.1, new THREE.Color(0xffffff));
    dot(size * 2.2, size * 0.2, -size * 0.3, size * 0.1, new THREE.Color(0xffffff));
    const lure = dot(size * 3.4, size * 1.1, 0, size * 0.22, new THREE.Color(0xffd27a));
    life.add(g);
    const p = new THREE.Vector3();
    movers.push((t) => {
      const a = t * speed + phase;
      p.set(centre.x + Math.cos(a) * radius, centre.y + Math.sin(a * 2.1) * 3, centre.z + Math.sin(a) * radius * 0.7);
      g.position.copy(p);
      g.rotation.y = -a - Math.PI / 2 * Math.sign(speed);
      const rv = revealOf(p);
      for (const d of lights) d.material.color.copy(d.userData.base).multiplyScalar((d === lure ? 2.6 * (0.7 + 0.3 * Math.sin(t * 2.3 + phase)) : 1.7) * rv);
    });
  }

  // Lay the life out. More life clues, more to see (and the giant far below
  // needs both).
  function populate(clues) {
    while (life.children.length) life.remove(life.children[0]);
    movers.length = 0;
    const spot = (spread, yMin, yMax) => new THREE.Vector3(FIELD.x + R(-spread, spread), R(yMin, yMax), FIELD.z + R(-spread, spread * 0.8));
    const jellies = [];
    const count = 16 + clues * 7;
    for (let i = 0; i < count; i++) jellies.push({ pos: spot(52, -48, -9), size: Math.pow(rand(), 1.8) * 2.6 + 0.7, phase: R(0, 6.28), speed: R(0.7, 1.5), tilt: R(-0.3, 0.3), color: colour(i) });
    // A few close by, so the light arrives all around the window.
    for (let i = 0; i < 5; i++) jellies.push({ pos: new THREE.Vector3(STOP.x + R(-16, 16), STOP.y + R(-9, 5), STOP.z - R(14, 34)), size: R(0.6, 1.5), phase: R(0, 6.28), speed: R(0.8, 1.6), tilt: R(-0.3, 0.3), color: colour(i + 2) });
    if (clues >= 2) jellies.push({ pos: new THREE.Vector3(FIELD.x + 18, -92, FIELD.z - 40), size: 21, phase: 1.3, speed: 0.32, tilt: 0.12, color: new THREE.Color(0x8a6bff) }); // the giant, far below
    addJellies(jellies);
    const combs = [];
    for (let i = 0; i < 9 + clues * 3; i++) combs.push({ pos: spot(44, -38, -8), size: R(0.8, 2.1), phase: R(0, 6.28), tilt: R(-0.5, 0.5) });
    for (let i = 0; i < 3; i++) combs.push({ pos: new THREE.Vector3(STOP.x + R(-10, 10), STOP.y + R(-5, 4), STOP.z - R(9, 20)), size: R(0.5, 0.9), phase: R(0, 6.28), tilt: R(-0.5, 0.5) });
    addCombJellies(combs);
    addGarden(520 + clues * 160);
    if (clues >= 1) {
      for (let i = 0; i < 3; i++) {
        const dir = new THREE.Vector3(R(-1, 1), R(-0.25, 0.25), R(-0.6, 0.6)).normalize();
        addChain({ origin: spot(34, -34, -12), dir, links: 110, color: colour(i * 2 + 1), phase: R(0, 6.28) });
      }
      for (let i = 0; i < 3; i++) addDragonfish({ centre: new THREE.Vector3(FIELD.x + R(-12, 12), R(-34, -16), FIELD.z + R(-10, 14)), radius: R(22, 40), speed: R(0.05, 0.09) * (i % 2 ? -1 : 1), phase: R(0, 6.28), color: colour(i * 3), size: R(1.3, 2.2) });
    }
  }

  // --- The shaft: a long tube of ice lit by the lamps, rushing past ------------
  const shaftU = { uScroll: { value: 0 }, uOpen: { value: 0 } };
  const shaft = new THREE.Group();
  {
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(2.3, 2.3, 140, 40, 1, true), new THREE.ShaderMaterial({
      side: THREE.BackSide, uniforms: shaftU,
      vertexShader: /* glsl */ `varying vec3 vP; varying vec2 vUv; void main(){ vP = position; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `uniform float uScroll; uniform float uOpen; varying vec3 vP; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+1.0), f.x), f.y); }
        void main(){
          float y = vP.y + uScroll;                       // the wall slides up past us
          float depth = clamp((70.0 - vP.y) / 140.0, 0.0, 1.0);   // 0 at the camera, 1 far below
          float rings = 0.55 + 0.45 * sin(y * 2.4 + 2.0*n(vec2(vUv.x*12.0, y*0.3)));
          float layers = n(vec2(vUv.x * 5.0, y * 0.08)) * 0.6 + n(vec2(vUv.x * 30.0, y * 0.9)) * 0.4;
          float lampFall = exp(-depth * 7.5);             // the lamps only reach so far
          vec3 ice = mix(vec3(0.04, 0.2, 0.36), vec3(0.6, 0.95, 1.15), layers) * rings;
          vec3 col = ice * lampFall * 1.5 + vec3(0.0, 0.02, 0.05);
          col = mix(col, vec3(0.008, 0.04, 0.09), smoothstep(0.25, 0.9, depth) * uOpen);   // dark water coming up
          gl_FragColor = vec4(col, 1.0); }`,
    }));
    shaft.add(tube);
    // Ice chips and bubbles streaming up past the window.
    const N = 500;
    const p = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { const a = R(0, 6.28); const r = R(0.5, 2.1); p[i * 3] = Math.cos(a) * r; p[i * 3 + 1] = R(-60, 10); p[i * 3 + 2] = Math.sin(a) * r; }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const chips = new THREE.Points(geo, new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, uniforms: shaftU,
      vertexShader: /* glsl */ `uniform float uScroll; varying float vA; void main(){ vec3 q = position; q.y = mod(q.y + uScroll*1.6, 70.0) - 62.0;
        vA = exp(q.y * 0.07) ; vec4 mv = modelViewMatrix * vec4(q, 1.0); gl_PointSize = 60.0 / max(-mv.z, 0.5); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: /* glsl */ `varying float vA; void main(){ float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * clamp(vA, 0.0, 1.0); gl_FragColor = vec4(vec3(0.7, 0.95, 1.0) * a, a); }`,
    }));
    chips.frustumCulled = false;
    shaft.add(chips);
    shaft.position.set(0, SHAFT_Y, 0);
    scene.add(shaft);
  }

  // --- Words on screen -----------------------------------------------------------
  const ui = el('div', 'ocean-ui hidden');
  const fade = el('div', 'ocean-fade');
  const frame = el('div', 'ocean-frame');
  const depthBox = el('div', 'ocean-depth');
  const caption = el('div', 'ocean-caption');
  const prompt = el('div', 'prompt ocean-prompt hidden');
  const promptFill = el('i', 'p-fill');
  prompt.append(promptFill, el('kbd', '', 'E'), el('span', 'p-text', 'Hold: switch off the lamps'));
  const label = el('div', 'ocean-label', 'Imagined: no life has been found on Europa. These creatures are modelled on real animals of Earth’s deep sea that make their own light.');
  const skip = el('div', 'ocean-skip', 'Hold F to skip');
  ui.append(frame, fade, depthBox, caption, prompt, label, skip);
  document.body.append(ui);
  let captionText = '';
  function say(text) {
    if (text === captionText) return;
    captionText = text;
    caption.classList.remove('show');
    if (text) setTimeout(() => { if (captionText === text) { caption.textContent = text; caption.classList.add('show'); } }, 350);
  }

  // --- The sequence ----------------------------------------------------------------
  let phase = 'off';
  let t = 0; // seconds into this phase
  let total = 0;
  let holdE = 0;
  let holdF = 0;
  let finished = false;
  let iceKm = 29;
  const look = new THREE.Vector3();
  const pos = new THREE.Vector3();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  const ease = (x) => { const k = Math.min(1, Math.max(0, x)); return k * k * (3 - 2 * k); };
  const setLamps = (v) => { U.uLamp.value = v; for (const l of lamps) l.intensity = 30 * v; flood.intensity = 9 * v; };
  function go(next) { phase = next; t = 0; }

  function start(clues = 0, km = 29) {
    iceKm = km;
    populate(clues);
    finished = false;
    total = 0;
    holdE = holdF = 0;
    U.uReveal.value = 0;
    setLamps(1);
    shaft.visible = true;
    world.visible = false;
    scene.background.set(0x000000);
    scene.fog = null;
    ui.classList.remove('hidden', 'revealed', 'done');
    document.body.classList.add('diving');
    prompt.classList.add('hidden');
    fade.style.opacity = 1;
    depthBox.textContent = '';
    say('');
    go('fade');
    audio.music('descent');
  }
  function stop() {
    phase = 'off';
    ui.classList.add('hidden');
    document.body.classList.remove('diving');
    audio.music('stop');
  }

  // keys: { E: bool, F: bool } held right now. Returns nothing; read `finished`.
  function update(dt, keys = {}) {
    if (phase === 'off') return;
    t += dt;
    total += dt;
    U.uTime.value = total;

    // Skipping: straight to the lit ocean.
    if (!finished && phase !== 'reveal') {
      holdF = keys.F ? holdF + dt : 0;
      if (holdF > 1) { holdF = 0; shaft.visible = false; world.visible = true; scene.background.copy(WATER); scene.fog = new THREE.FogExp2(WATER.getHex(), 0.012); fade.style.opacity = 0; depthBox.textContent = ''; setLamps(0); U.uReveal.value = 400; pos.copy(STOP); camera.position.copy(STOP); camera.lookAt(FIELD); ui.classList.add('revealed'); prompt.classList.add('hidden'); audio.music('reveal'); go('reveal'); t = 12; }
    }

    if (phase === 'fade') {
      say('Breakthrough. The submersible goes down the hole the cryobot made.');
      camera.position.set(0, SHAFT_Y + 40, 0);
      euler.set(-Math.PI / 2 + 0.02, 0, 0);
      camera.quaternion.setFromEuler(euler);
      fade.style.opacity = 1 - ease((t - 1.6) / 1.4);
      if (t > 3) go('shaft');
    } else if (phase === 'shaft') {
      // 29 km of ice in a few seconds: the wall streams past, faster and faster.
      const k = t / 10;
      const speed = 6 + 70 * ease(k * 1.6) * (1 - ease((k - 0.82) / 0.18) * 0.8);
      shaftU.uScroll.value += speed * dt;
      shaftU.uOpen.value = ease((k - 0.72) / 0.28);
      camera.position.set(Math.sin(total * 0.9) * 0.12, SHAFT_Y + 40, Math.cos(total * 0.7) * 0.12);
      euler.set(-Math.PI / 2 + 0.03 * Math.sin(total * 0.6), total * 0.07, 0);
      camera.quaternion.setFromEuler(euler);
      depthBox.textContent = `${(iceKm * ease(k)).toFixed(1)} km down`;
      say(k < 0.45 ? `${iceKm} kilometres of ice, sped up.` : 'Below the ice: an ocean with twice the water of all Earth’s seas.');
      fade.style.opacity = ease((k - 0.88) / 0.12);
      if (k >= 1) {
        shaft.visible = false;
        world.visible = true;
        scene.background.copy(WATER);
        scene.fog = new THREE.FogExp2(WATER.getHex(), 0.012);
        depthBox.textContent = '';
        audio.music('ocean');
        go('cruise');
      }
    } else if (phase === 'cruise') {
      // Out under the ice, lamps on, gliding toward a faint glow.
      const k = ease(t / 16);
      fade.style.opacity = 1 - ease(t / 2.2);
      pos.set(Math.sin(k * 2.6) * 5, START_Y + (STOP.y - START_Y) * ease(k * 1.15), STOP.z * k);
      pos.y = Math.min(pos.y, ceilingAt(pos.x, pos.z) - 2.8); // never up into the ice
      camera.position.copy(pos);
      look.set(Math.sin(k * 2.6 + 0.5) * 6, pos.y + 22 * (1 - ease(k * 1.7)) - 4 * k, pos.z - 60);   // up at the ice first, then ahead
      camera.lookAt(look);
      say(t < 6 ? 'The underside of Europa’s ice.' : t < 11.5 ? 'Something is glowing ahead.' : 'Getting closer…');
      if (t >= 16) go('arrive');
    } else if (phase === 'arrive') {
      camera.position.set(STOP.x + Math.sin(total * 0.3) * 0.25, STOP.y + Math.sin(total * 0.4) * 0.2, STOP.z);
      look.copy(FIELD);
      camera.lookAt(look);
      say('The lamps are too bright to see it. Switch them off.');
      prompt.classList.remove('hidden');
      holdE = keys.E ? holdE + dt : 0;
      promptFill.style.width = `${Math.min(1, holdE / 1.2) * 100}%`;
      prompt.classList.toggle('holding', holdE > 0);
      if (holdE >= 1.2 || t > 40) {
        prompt.classList.add('hidden');
        audio.signal('tick');
        audio.music('dark');
        say('');
        go('dark');
      }
    } else if (phase === 'dark') {
      // Lamps off: a breath of real darkness before anything shows.
      setLamps(Math.max(0, 1 - t / 0.25));
      camera.position.set(STOP.x, STOP.y, STOP.z);
      if (t > 1.7) {
        audio.music('reveal');
        ui.classList.add('revealed');
        go('reveal');
      }
    } else if (phase === 'reveal') {
      // The light spreads outward from the window. From here the child may
      // look around freely: only the position is moved.
      U.uReveal.value = Math.min(400, 10 + 330 * (1 - Math.exp(-t / 2.6)));
      camera.position.set(STOP.x + Math.sin(total * 0.13) * 1.5, STOP.y - Math.min(t, 60) * 0.05, STOP.z - Math.min(t, 60) * 0.5);
      say(t < 1.2 ? '' : t < 8 ? 'Life.' : t < 16 ? 'Look around. You are the first to see it.' : '');
      if (t > 22 && !finished) { finished = true; ui.classList.add('done'); }
    }

    if (phase !== 'arrive') prompt.classList.add('hidden');
    // The lamps, the specks and the creatures all need to know where we are.
    rig.position.copy(camera.position);
    rig.quaternion.copy(camera.quaternion);
    U.uCamPos.value.copy(camera.position);
    camera.getWorldDirection(U.uCamDir.value);
    for (const move of movers) move(total);
  }

  return {
    scene, start, stop, update, uniforms: U,
    get finished() { return finished; },
    get phase() { return phase; },
    // For tests: jump to a moment of the sequence.
    jump(name, seconds = 0) { go(name); t = seconds; if (name !== 'fade' && name !== 'shaft') { shaft.visible = false; world.visible = true; scene.background.copy(WATER); scene.fog = new THREE.FogExp2(WATER.getHex(), 0.012); fade.style.opacity = 0; depthBox.textContent = ''; } if (name === 'reveal') { setLamps(0); ui.classList.add('revealed'); } },
  };
}
