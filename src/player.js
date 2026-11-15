import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { heightAt } from './world/terrain.js';
import { colliders } from './world/base.js';
import { LAYOUT } from './world/layout.js';

// Europa's surface gravity: 1.315 m/s², about 13% of Earth's
// (references/europa.md section 1). A jump hangs in the air for seconds.
export const EUROPA_GRAVITY = 1.315;
const EYE = 1.7;
const WALK = 4.2;
const RUN = 7.5;
const JUMP_SPEED = 2.6;
// --- How moving feels. These are the knobs to turn. ---
const BACK_FACTOR = 0.7; // walking backwards is slower
const GRIP = 7.5; // how quickly the suit reaches the speed you ask for (bigger = snappier)
const GLIDE = 4.5; // how quickly it coasts to a stop once the keys are let go
// Steering in mid-air, in m/s². Zero on purpose: Europa has no air to push
// against, so a jump keeps the speed and direction it started with.
const AIR_CONTROL = 0;
const JUMP_WINDUP = 0.1; // seconds of knee-bend before the feet leave the ground
const JUMP_BUFFER = 0.2; // Space pressed this long before landing still counts
const LANDING_GRIP = 0.72; // share of the speed kept when the boots hit the ground
// The step bounce: a slow, springy lope, the way people move in low gravity.
const STEPS_WALK = 1.3; // steps a second
const STEPS_RUN = 1.65;
const BOUNCE_WALK = 0.05; // metres the eyes rise each step
const BOUNCE_RUN = 0.09;
const SWAY = 0.022; // metres the body shifts side to side
const LEAN = 0.02; // radians of tilt when side-stepping at full speed
// The knees: a spring that dips the view on push-off and on landing.
const KNEE_STIFF = 11;
const KNEE_DAMP = 0.62;
const MAX_STEP_SLOPE = 0.9; // rise per metre the suit can climb
const MAX_GROUND_SLOPE = 1.0; // ground steeper than this can't be climbed at all, even at a slant
const MAX_CLIMB_HEIGHT = 16; // the mountains are scenery: nobody walks up above this

// `sounds` (optional) has step(pace, foot), jump() and land(impact).
export function createPlayer(camera, domElement, sounds = null) {
  const controls = new PointerLockControls(camera, domElement);
  const keys = new Set();
  const pos = new THREE.Vector3(); // the eyes, before any bounce is added
  const vel = new THREE.Vector3(); // metres a second over the ground
  const wish = new THREE.Vector3();
  const lastCam = new THREE.Vector3();
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');
  let vy = 0;
  let grounded = true;
  let windup = 0; // > 0 while the knees bend before a jump
  let jumpWanted = 0; // > 0 for a moment after Space is pressed
  let stride = 0; // where we are in the step cycle
  let bounce = 0; // 0 standing still or in the air, 1 at a full run
  let knee = 0; // metres the view is dipped by the knees
  let kneeVel = 0;
  let roll = 0;
  let lastStep = 0; // which step of the cycle last made a sound

  const { spawn } = LAYOUT;
  camera.position.set(spawn.x, heightAt(spawn.x, spawn.z) + EYE, spawn.z);
  camera.lookAt(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ);
  pos.copy(camera.position);
  lastCam.copy(camera.position);

  addEventListener('keydown', (e) => {
    keys.add(e.code);
    if (e.code === 'Space' && !e.repeat && controls.isLocked) jumpWanted = JUMP_BUFFER;
  });
  addEventListener('keyup', (e) => keys.delete(e.code));
  addEventListener('blur', () => keys.clear());

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();

  function blocked(x, z, fromX, fromZ) {
    if (Math.hypot(x, z) > LAYOUT.playRadius) return true;
    const h = heightAt(x, z);
    if (h < -3) return true; // canyon edge: look, don't fall
    // The craggy rim east of the base is scenery: stop at its foot.
    const cn = LAYOUT.canyon;
    if (x > cn.centerX + 14 * Math.sin(z / 130) - cn.halfWidth - cn.rimBack - cn.walkLimit) return true;
    const rise = h - heightAt(fromX, fromZ);
    const run = Math.hypot(x - fromX, z - fromZ) || 1e-6;
    if (rise / run > MAX_STEP_SLOPE) return true;
    if (rise > 0) {
      // Going up: also stop on ground that is steep in ANY direction, and at
      // a height limit. (A walk test showed the old rule alone let the
      // player zig-zag to the top of the west mountain, because it only
      // measured the rise along the step.)
      if (h > MAX_CLIMB_HEIGHT) return true;
      const gx = (heightAt(x + 1, z) - heightAt(x - 1, z)) / 2;
      const gz = (heightAt(x, z + 1) - heightAt(x, z - 1)) / 2;
      if (Math.hypot(gx, gz) > MAX_GROUND_SLOPE) return true;
    }
    for (const c of colliders) {
      if (Math.hypot(x - c.x, z - c.z) < c.r) return true;
    }
    // Cave shell: walk in through the mouth only.
    const cv = LAYOUT.cave;
    const dx = x - cv.x;
    const dz = z - cv.z;
    const d = Math.hypot(dx, dz);
    if (d < cv.radius + 5 && d > cv.radius - 2.8) {
      const a = THREE.MathUtils.degToRad(cv.mouthAngleDeg);
      const facing = (dx * Math.cos(a) + dz * -Math.sin(a)) / d;
      // The rock of the cave's peak spreads a few metres beyond the dome,
      // except beside the mouth, where only the arch stands.
      const reach = facing < 0.75 ? 5 : 2;
      if (facing < 0.9 && d < cv.radius + reach) return true;
    }
    return false;
  }

  function readKeys() {
    const down = (a, b) => keys.has(a) || keys.has(b);
    return {
      fwd: (down('KeyW', 'ArrowUp') ? 1 : 0) - (down('KeyS', 'ArrowDown') ? 1 : 0),
      side: (down('KeyD', 'ArrowRight') ? 1 : 0) - (down('KeyA', 'ArrowLeft') ? 1 : 0),
      run: down('ShiftLeft', 'ShiftRight'),
    };
  }

  // `forced` lets a test drive the suit without the mouse being captured:
  // { fwd, side, run, jump }.
  function update(dt, forced) {
    if (!controls.isLocked && !forced) return;
    const input = forced || readKeys();
    if (forced && forced.jump) jumpWanted = JUMP_BUFFER;

    // Something else moved the camera (a debug view): carry on from there.
    if (!camera.position.equals(lastCam)) {
      pos.copy(camera.position);
      vel.set(0, 0, 0);
      vy = 0;
      knee = kneeVel = bounce = 0;
      grounded = pos.y <= heightAt(pos.x, pos.z) + EYE + 0.05;
    }

    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    right.crossVectors(forward, camera.up).normalize();

    // The speed and direction being asked for.
    wish.set(0, 0, 0).addScaledVector(forward, input.fwd).addScaledVector(right, input.side);
    if (wish.lengthSq() > 1) wish.normalize();
    const top = input.fwd < 0 ? WALK * BACK_FACTOR : input.run && input.fwd > 0 ? RUN : WALK;
    wish.multiplyScalar(top);
    const asking = wish.lengthSq() > 0;

    if (grounded) {
      // The suit has weight: it leans into the speed asked for, and coasts
      // a little when the keys are let go, instead of snapping.
      const a = 1 - Math.exp(-(asking ? GRIP : GLIDE) * dt);
      vel.x += (wish.x - vel.x) * a;
      vel.z += (wish.z - vel.z) * a;
      if (!asking && vel.lengthSq() < 0.0009) vel.set(0, 0, 0);
    } else if (AIR_CONTROL > 0 && asking) {
      wish.normalize();
      vel.x += wish.x * AIR_CONTROL * dt;
      vel.z += wish.z * AIR_CONTROL * dt;
    }

    // Try the full move, then slide along each axis.
    const dx = vel.x * dt;
    const dz = vel.z * dt;
    if (!blocked(pos.x + dx, pos.z + dz, pos.x, pos.z)) {
      pos.x += dx;
      pos.z += dz;
    } else if (!blocked(pos.x + dx, pos.z, pos.x, pos.z)) {
      pos.x += dx;
      if (!grounded) vel.z = 0;
    } else if (!blocked(pos.x, pos.z + dz, pos.x, pos.z)) {
      pos.z += dz;
      if (!grounded) vel.x = 0;
    } else if (!grounded) {
      vel.x = vel.z = 0;
    } else {
      vel.multiplyScalar(0.5);
    }

    // Jumping: bend the knees, then push off. Once in the air the jump is
    // committed.
    jumpWanted -= dt;
    if (grounded && windup <= 0 && jumpWanted > 0) {
      windup = JUMP_WINDUP;
      jumpWanted = 0;
      kneeVel -= 1.5;
    } else if (windup > 0) {
      windup -= dt;
      if (windup <= 0 && grounded) {
        vy = JUMP_SPEED;
        grounded = false;
        if (sounds) sounds.jump();
      }
    }

    const ground = heightAt(pos.x, pos.z) + EYE;
    if (grounded) {
      pos.y = ground;
      vy = 0;
    } else {
      vy -= EUROPA_GRAVITY * dt;
      pos.y += vy * dt;
      if (pos.y <= ground) {
        // Landing: the knees take the hit and the boots bite into the ice.
        const impact = Math.max(0, -vy);
        pos.y = ground;
        vy = 0;
        grounded = true;
        kneeVel -= Math.min(impact, 4) * 1.3;
        if (impact > 1) vel.multiplyScalar(LANDING_GRIP);
        if (sounds && impact > 0.4) sounds.land(impact);
      }
    }

    // --- What the eyes do on top of that ---
    const speed = Math.hypot(vel.x, vel.z);
    const pace = THREE.MathUtils.clamp((speed - WALK) / (RUN - WALK), 0, 1);
    const moving = grounded ? Math.min(speed / WALK, 1) : 0;
    bounce += (moving - bounce) * (1 - Math.exp(-(grounded ? 8 : 14) * dt));
    stride += dt * Math.PI * THREE.MathUtils.lerp(STEPS_WALK, STEPS_RUN, pace) * Math.min(speed / WALK, 1);
    // Each step is a small hop: quick off the ground, slow over the top.
    const hop = Math.sqrt(Math.sin(stride) ** 2 + 0.02) - Math.sqrt(0.02);
    const lift = hop * THREE.MathUtils.lerp(BOUNCE_WALK, BOUNCE_RUN, pace) * bounce;
    const sway = Math.sin(stride) * SWAY * bounce;
    // A boot touches down each time the hop reaches its lowest point.
    const stepNow = Math.floor(stride / Math.PI);
    if (stepNow !== lastStep) {
      lastStep = stepNow;
      if (sounds && grounded && bounce > 0.35) sounds.step(pace, stepNow % 2);
    }

    // The knee spring.
    kneeVel += (-KNEE_STIFF * KNEE_STIFF * knee - 2 * KNEE_DAMP * KNEE_STIFF * kneeVel) * dt;
    knee = THREE.MathUtils.clamp(knee + kneeVel * dt, -0.4, 0.12);

    // Lean a touch into a side-step.
    const sideSpeed = vel.x * right.x + vel.z * right.z;
    const lean = -(sideSpeed / RUN) * LEAN - Math.sin(stride) * 0.004 * bounce;
    roll += (lean - roll) * (1 - Math.exp(-8 * dt));
    euler.setFromQuaternion(camera.quaternion);
    euler.z = roll;
    camera.quaternion.setFromEuler(euler);

    camera.position.set(pos.x + right.x * sway, pos.y + lift + knee, pos.z + right.z * sway);
    lastCam.copy(camera.position);
  }

  // For tests: where the suit is and how it is moving.
  const state = () => ({
    x: pos.x, y: pos.y, z: pos.z, vx: vel.x, vz: vel.z, vy, grounded,
    speed: Math.hypot(vel.x, vel.z), camY: camera.position.y, knee, roll,
  });

  return { controls, update, blocked, state };
}
