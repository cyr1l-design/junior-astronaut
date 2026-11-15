import * as THREE from 'three';
import { createTerrain, heightAt } from './world/terrain.js';
import { createSky } from './world/sky.js';
import { createBase } from './world/base.js';
import { SKY } from './world/layout.js';
import { createPlayer } from './player.js';
import { createAudio } from './audio.js';
import { createComposer } from './post.js';
import { createUI } from './ui.js';
import { createDaylight } from './game/daylight.js';
import { createGame } from './game/game.js';
// (style.css is linked from index.html, so it applies before the first paint.)

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
// Nothing that casts a shadow moves, so the shadow picture is redrawn only
// when it has to be: when the light has moved (every frame while the mission
// clock runs by day, so shadows glide; Cyril, 2026-11-15: redrawn five times
// a second they visibly jumped), or when the player has walked far enough to
// need a new one. With the clock stopped, or at night under Jupiter (which
// never moves), it is not redrawn at all.
renderer.shadowMap.autoUpdate = false;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // airless: black sky, no haze

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 12000);

// Sunlight: one Sun lights the ground AND Jupiter, so Jupiter's phase is
// always physically right. Low in the east → long, sharp shadows. The Sun
// moves over the Europa day, and at night this same light comes from Jupiter
// instead (src/game/daylight.js decides its direction, colour and strength).
const sun = new THREE.DirectionalLight(0xfff6ea, 2.9);
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
const lightFrom = SKY.sunDir.clone(); // where the shadow-casting light is right now
const shadowRight = new THREE.Vector3();
const shadowUp = new THREE.Vector3();
const WORLD_UP = new THREE.Vector3(0, 1, 0);
function updateShadowArea(force = false) {
  const cx = Math.round(camera.position.x / SHADOW_STEP) * SHADOW_STEP;
  const cz = Math.round(camera.position.z / SHADOW_STEP) * SHADOW_STEP;
  if (!force && cx === shadowX && cz === shadowZ) return;
  shadowX = cx;
  shadowZ = cz;
  // The shadow picture is a grid of dots laid over the ground. Slide the
  // area to the nearest whole dot, seen from the light, so that re-centring
  // it moves no shadow edge (otherwise every edge shifts by a fraction of a
  // dot each time, which shows as a twitch).
  const dot = (2 * SHADOW_HALF) / sun.shadow.mapSize.x;
  shadowRight.crossVectors(WORLD_UP, lightFrom).normalize();
  shadowUp.crossVectors(lightFrom, shadowRight);
  const t = sun.target.position.set(cx, 0, cz);
  const r = t.dot(shadowRight);
  const u = t.dot(shadowUp);
  t.addScaledVector(shadowRight, Math.round(r / dot) * dot - r).addScaledVector(shadowUp, Math.round(u / dot) * dot - u);
  sun.position.copy(lightFrom).multiplyScalar(400).add(sun.target.position);
  sun.target.updateMatrixWorld();
  renderer.shadowMap.needsUpdate = true;
}

// Jupiter-shine: a weak warm fill from Jupiter's direction (real, small).
const jupiterShine = new THREE.DirectionalLight(0xffd2a0, 0.3);
jupiterShine.position.copy(SKY.jupiterDir).multiplyScalar(400);
scene.add(jupiterShine);

// Stylised fill so shadows read soft and blue instead of pitch black
// (stands in for light bouncing off bright ice).
const hemi = new THREE.HemisphereLight(0x6a86c8, 0xcfe0ff, 0.5);
scene.add(hemi);

scene.add(createTerrain());
createBase(scene);
const sky = createSky(sun);
scene.add(sky.group);

const audio = createAudio();
const player = createPlayer(camera, renderer.domElement, audio);
const { composer, bloom, setSize } = createComposer(renderer, scene, camera);
const renderPass = composer.passes[0]; // draws the 3D scene; the ocean ending swaps its own scene in
const surfaceBloom = { strength: bloom.strength, radius: bloom.radius, threshold: bloom.threshold };
const ui = createUI(player.controls);
// The mission: Europa's clock and daylight, power, heat, radiation, the dig.
const daylight = createDaylight({ sun, jupiterShine, hemi, sky });
const game = createGame({ scene, camera, player, audio, sky, daylight });
// The first click plays the intro video and the dangers briefing; the next one starts the game.
ui.before((whenOver) => game.prelude.begin(whenOver));

// Inside the habitat only the round window shows the world; the rest of the
// screen is the dark wall. So only the square around the window is drawn,
// and the drawing power that saves goes into a sharper picture there (Cyril,
// 2026-11-15: the view from inside was "very, very blurry": it is the
// heaviest view in the game, so the automatic control below had turned the
// sharpness right down for it).
const WINDOW_SIZE = 0.92; // the window's width, as a share of the screen's shorter side (.p-ring in hud.css)
let windowOnly = false;
let insideFor = 0;
function drawnRatio() {
  if (!windowOnly) return pixelRatio;
  const side = WINDOW_SIZE * Math.min(innerWidth, innerHeight);
  const saved = Math.sqrt((innerWidth * innerHeight) / (side * side)); // how much sharper the same work buys
  return Math.min(MAX_PIXEL_RATIO, pixelRatio * Math.min(1.6, Math.max(1, saved * 0.9)));
}
function applySize() {
  const ratio = drawnRatio();
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(ratio);
  renderer.setSize(innerWidth, innerHeight);
  setSize(innerWidth, innerHeight, ratio, windowOnly ? WINDOW_SIZE : 0);
}
// Switches window-only drawing on once the dark wall has fully faded in
// (0.5 s, hud.css), and off the moment the player leaves.
function watchWindow(dt) {
  const hudAt = game.hud.root.classList;
  const framed = game.inside && !game.dive && hudAt.contains('inside') && !hudAt.contains('hidden');
  insideFor = framed ? insideFor + dt : 0;
  const want = insideFor > 0.6;
  if (want === windowOnly) return;
  windowOnly = want;
  applySize(); // before this frame is drawn, so nothing half-sized is seen
}
let pendingResize = false;
addEventListener('resize', () => { pendingResize = true; }); // applied at the start of the next frame (see applyPendingChanges)

// Keeps the game smooth on slower computers: if frames come too slowly, the
// picture is drawn a little less sharp; if there is power to spare, sharper.
//
// Two rules stop this from being seen (Cyril: "every now and then the screen
// goes black for a fraction of a second"):
// 1. A change of sharpness is only NOTED here; it is applied at the start of
//    the next frame, just before drawing. Changing the picture's size wipes
//    it, and doing that right after drawing meant the wiped (black) picture
//    was what reached the screen.
// 2. It doesn't flip back and forth. Sharpness goes down quickly when needed,
//    but only goes back up after a long steady spell, and if going up made
//    things slow again it remembers that level as the limit and stops trying.
const perf = { frames: 0, time: 0, fps: 60, drawCalls: 0, triangles: 0 };
renderer.info.autoReset = false; // counted once per whole frame, below
let pendingRatio = 0;        // a new sharpness waiting to be applied (0 = none)
let pendingShadowSize = 0;   // a new shadow-picture size waiting to be applied
let ratioCeiling = MAX_PIXEL_RATIO;
let goodSpells = 0;          // measuring periods in a row with speed to spare
let justRaised = false;
function watchPerformance(rawDt) {
  if (rawDt > 0.25) return; // tab was in the background: not a real slow frame
  perf.frames++;
  perf.time += rawDt;
  if (perf.time < 1.5) return;
  perf.fps = perf.frames / perf.time;
  perf.frames = 0;
  perf.time = 0;
  let next = pixelRatio;
  if (perf.fps < 42) {
    if (justRaised) ratioCeiling = Math.max(MIN_PIXEL_RATIO, pixelRatio * 0.9); // that step up was too much: never again
    next = Math.max(MIN_PIXEL_RATIO, Math.min(ratioCeiling, pixelRatio * 0.85));
    goodSpells = 0;
    justRaised = false;
  } else if (perf.fps > 57) {
    goodSpells++;
    justRaised = false;
    if (goodSpells >= 8 && pixelRatio < ratioCeiling - 0.01) { // about 12 steady seconds
      next = Math.min(ratioCeiling, pixelRatio * 1.1);
      goodSpells = 0;
      justRaised = true;
    }
  } else {
    goodSpells = 0;
    justRaised = false;
  }
  if (Math.abs(next - pixelRatio) > 0.01) pendingRatio = next;
  // Still struggling at low sharpness: use a smaller shadow picture too.
  if (pixelRatio < 0.8 && sun.shadow.mapSize.x > 2048) pendingShadowSize = 2048;
}
// Applied at the very start of a frame, so the same frame redraws everything.
function applyPendingChanges() {
  if (pendingRatio || pendingResize) {
    if (pendingRatio) pixelRatio = pendingRatio;
    pendingRatio = 0;
    pendingResize = false;
    applySize();
  }
  if (pendingShadowSize) {
    sun.shadow.mapSize.set(pendingShadowSize, pendingShadowSize);
    pendingShadowSize = 0;
    if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; }
    renderer.shadowMap.needsUpdate = true;
  }
}

// The surface, or (during the ending) the ocean under the ice. Under water
// everything that glows should glow more, so the bloom is stronger there.
function showRightScene() {
  const dive = game.dive;
  renderPass.scene = dive ? dive.scene : scene;
  bloom.strength = dive ? 0.95 : surfaceBloom.strength;
  bloom.radius = dive ? 0.75 : surfaceBloom.radius;
  bloom.threshold = dive ? 0.5 : surfaceBloom.threshold;
}

const clock = new THREE.Clock();
let elapsed = 0;
let shownOnce = false;
renderer.setAnimationLoop(() => {
  const rawDt = clock.getDelta();
  tick(Math.min(rawDt, 0.05));
  watchPerformance(rawDt);
});
// One frame of the game: everything moves on by `dt` seconds and is drawn.
// `aim` (filming only) may then place the camera and the light itself, and
// returns true if it moved the light.
function tick(dt, aim) {
  elapsed += dt;
  applyPendingChanges();
  if (!game.frozen) player.update(dt);
  let lightMoved = game.update(dt);
  if (aim && aim()) lightMoved = true;
  watchWindow(dt);
  showRightScene();
  if (!game.dive) {
    lightFrom.copy(daylight.lightDir);
    sky.update(camera, elapsed, drawnRatio());
    updateShadowArea(lightMoved);
  }
  ui.update(dt);
  renderer.info.reset();
  composer.render();
  perf.drawCalls = renderer.info.render.calls;
  perf.triangles = renderer.info.render.triangles;
  // The first picture is on screen: let the start screen appear (index.html
  // keeps everything hidden until now, so nothing half-loaded is ever seen).
  if (!shownOnce) { shownOnce = true; document.body.classList.remove('loading'); }
}

// For debugging and screenshots from the browser console.
window.__game = {
  THREE, scene, camera, renderer, sky, heightAt, perf, sun, SKY, game, daylight,
  // Would the player be stopped stepping from (fromX, fromZ) to (x, z)? For walk tests.
  blocked: (x, z, fromX, fromZ) => player.blocked(x, z, fromX, fromZ),
  // Drive the suit for `seconds` without the mouse: input is { fwd, side,
  // run, jump }. Returns where it ended up. For walk tests.
  walk(input, seconds, dt = 1 / 60) {
    let first = true;
    for (let t = 0; t < seconds; t += dt) {
      player.update(dt, { ...input, jump: first && input.jump });
      first = false;
    }
    return player.state();
  },
  get player() { return player.state(); },
  controls: player.controls,
  audio,
  // Draw one frame right now (the browser pauses the game loop when the
  // page is hidden, so screenshots need this).
  frame(redoShadows = true) {
    watchWindow(1);
    showRightScene();
    if (!game.dive) {
      if (game.prelude.active) game.prelude.update(0); // the briefing sets the camera and the light itself
      else game.refresh(0);
      lightFrom.copy(daylight.lightDir);
      sky.update(camera, elapsed, drawnRatio());
      updateShadowArea(redoShadows);
    }
    composer.render();
  },
  // Filming (the demo video): stop the clock-driven loop, fix the
  // sharpness, then move the game on one exact frame at a time.
  film(ratio = 1) {
    renderer.setAnimationLoop(null);
    pendingRatio = ratio;
    applyPendingChanges();
  },
  step(dt = 1 / 30, aim) { tick(dt, aim); },
  get pixelRatio() { return drawnRatio(); },
  get windowOnly() { return windowOnly; },
  // Stand at (x, z), eyes `lift` metres up, looking at a point.
  view(x, z, lx, ly, lz, lift = 1.7) {
    camera.position.set(x, heightAt(x, z) + lift, z);
    camera.lookAt(lx, ly, lz);
  },
};
