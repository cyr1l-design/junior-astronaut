import * as THREE from 'three';
import { createTerrain, heightAt } from './world/terrain.js';
import { createSky } from './world/sky.js';
import { createBase } from './world/base.js';
import { SKY } from './world/layout.js';
import { createPlayer } from './player.js';
import { createComposer } from './post.js';
import { createUI } from './ui.js';
import './style.css';

// Picture sharpness. The game starts at the screen's own sharpness (capped)
// and lowers it by itself if the computer can't keep up (see the loop below).
const MAX_PIXEL_RATIO = Math.min(devicePixelRatio, 1.5);
const MIN_PIXEL_RATIO = Math.min(devicePixelRatio, 0.75);
let pixelRatio = MAX_PIXEL_RATIO;

const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(pixelRatio);
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.NeutralToneMapping; // keeps pastel colours from washing out
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // smooths the stair-steps in long, low-Sun shadows
// Nothing that casts a shadow moves, so the shadow picture is drawn only when
// the player has walked far enough to need a new one (not every frame).
renderer.shadowMap.autoUpdate = false;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // airless: black sky, no haze

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 12000);

// Sunlight: one Sun lights the ground AND Jupiter, so Jupiter's phase is
// always physically right. Low in the east → long, sharp shadows.
const sun = new THREE.DirectionalLight(0xfff6ea, 2.3);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
const SHADOW_HALF = 120; // metres of ground covered each side of the player
const SHADOW_STEP = 24; // the shadow picture re-centres in steps of this many metres
const sc = sun.shadow.camera;
sc.left = -SHADOW_HALF; sc.right = SHADOW_HALF; sc.top = SHADOW_HALF; sc.bottom = -SHADOW_HALF; sc.near = 10; sc.far = 1200;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.5;
scene.add(sun, sun.target);
let shadowX = Infinity;
let shadowZ = Infinity;
function updateShadowArea(force = false) {
  const cx = Math.round(camera.position.x / SHADOW_STEP) * SHADOW_STEP;
  const cz = Math.round(camera.position.z / SHADOW_STEP) * SHADOW_STEP;
  if (!force && cx === shadowX && cz === shadowZ) return;
  shadowX = cx;
  shadowZ = cz;
  sun.target.position.set(cx, 0, cz);
  sun.position.copy(SKY.sunDir).multiplyScalar(400).add(sun.target.position);
  sun.target.updateMatrixWorld();
  renderer.shadowMap.needsUpdate = true;
}

// Jupiter-shine: a weak warm fill from Jupiter's direction (real, small).
const jupiterShine = new THREE.DirectionalLight(0xffd2a0, 0.3);
jupiterShine.position.copy(SKY.jupiterDir).multiplyScalar(400);
scene.add(jupiterShine);

// Stylised fill so shadows read soft and blue instead of pitch black
// (stands in for light bouncing off bright ice).
scene.add(new THREE.HemisphereLight(0x6a86c8, 0xcfe0ff, 0.5));

scene.add(createTerrain());
createBase(scene);
const sky = createSky(sun);
scene.add(sky.group);

const player = createPlayer(camera, renderer.domElement);
const { composer, setSize } = createComposer(renderer, scene, camera);
const ui = createUI(player.controls);

function applySize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatio);
  renderer.setSize(innerWidth, innerHeight);
  setSize(innerWidth, innerHeight, pixelRatio);
}
addEventListener('resize', applySize);

// Keeps the game smooth on slower computers: if frames come too slowly, the
// picture is drawn a little less sharp; if there is power to spare, sharper.
const perf = { frames: 0, time: 0, fps: 60, drawCalls: 0, triangles: 0 };
renderer.info.autoReset = false; // counted once per whole frame, below
function watchPerformance(rawDt) {
  if (rawDt > 0.25) return; // tab was in the background: not a real slow frame
  perf.frames++;
  perf.time += rawDt;
  if (perf.time < 1.5) return;
  perf.fps = perf.frames / perf.time;
  perf.frames = 0;
  perf.time = 0;
  let next = pixelRatio;
  if (perf.fps < 42) next = Math.max(MIN_PIXEL_RATIO, pixelRatio * 0.85);
  else if (perf.fps > 57) next = Math.min(MAX_PIXEL_RATIO, pixelRatio * 1.08);
  if (Math.abs(next - pixelRatio) > 0.01) {
    pixelRatio = next;
    applySize();
  }
  // Still struggling at low sharpness: use a smaller shadow picture too.
  if (pixelRatio < 0.8 && sun.shadow.mapSize.x > 2048) {
    sun.shadow.mapSize.set(2048, 2048);
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    renderer.shadowMap.needsUpdate = true;
  }
}

const clock = new THREE.Clock();
let elapsed = 0;
renderer.setAnimationLoop(() => {
  const rawDt = clock.getDelta();
  const dt = Math.min(rawDt, 0.05);
  elapsed += dt;
  player.update(dt);
  sky.update(camera, elapsed, pixelRatio);
  updateShadowArea();
  ui.update(dt);
  renderer.info.reset();
  composer.render();
  perf.drawCalls = renderer.info.render.calls;
  perf.triangles = renderer.info.render.triangles;
  watchPerformance(rawDt);
});

// For debugging and screenshots from the browser console.
window.__game = {
  THREE, scene, camera, renderer, sky, heightAt, perf,
  get pixelRatio() { return pixelRatio; },
  // Stand at (x, z), eyes `lift` metres up, looking at a point.
  view(x, z, lx, ly, lz, lift = 1.7) {
    camera.position.set(x, heightAt(x, z) + lift, z);
    camera.lookAt(lx, ly, lz);
  },
};
