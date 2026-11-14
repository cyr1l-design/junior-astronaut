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
const MAX_STEP_SLOPE = 0.9; // rise per metre the suit can climb

export function createPlayer(camera, domElement) {
  const controls = new PointerLockControls(camera, domElement);
  const keys = new Set();
  const velocity = new THREE.Vector3();
  let vy = 0;
  let grounded = true;

  const { spawn } = LAYOUT;
  camera.position.set(spawn.x, heightAt(spawn.x, spawn.z) + EYE, spawn.z);
  camera.lookAt(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ);

  addEventListener('keydown', (e) => {
    keys.add(e.code);
    if (e.code === 'Space' && grounded && controls.isLocked) {
      vy = JUMP_SPEED;
      grounded = false;
    }
  });
  addEventListener('keyup', (e) => keys.delete(e.code));

  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();

  function blocked(x, z, fromX, fromZ) {
    if (Math.hypot(x, z) > LAYOUT.playRadius) return true;
    const h = heightAt(x, z);
    if (h < -3) return true; // canyon edge: look, don't fall
    const rise = h - heightAt(fromX, fromZ);
    const run = Math.hypot(x - fromX, z - fromZ) || 1e-6;
    if (rise / run > MAX_STEP_SLOPE) return true;
    for (const c of colliders) {
      if (Math.hypot(x - c.x, z - c.z) < c.r) return true;
    }
    // Cave shell: walk in through the mouth only.
    const cv = LAYOUT.cave;
    const dx = x - cv.x;
    const dz = z - cv.z;
    const d = Math.hypot(dx, dz);
    if (d < cv.radius + 0.6 && d > cv.radius - 2.8) {
      const a = THREE.MathUtils.degToRad(cv.mouthAngleDeg);
      const facing = (dx * Math.cos(a) + dz * -Math.sin(a)) / d;
      if (facing < 0.9) return true;
    }
    return false;
  }

  function update(dt) {
    if (!controls.isLocked) return;
    const speed = keys.has('ShiftLeft') || keys.has('ShiftRight') ? RUN : WALK;
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    right.crossVectors(forward, camera.up).normalize();
    velocity.set(0, 0, 0);
    if (keys.has('KeyW') || keys.has('ArrowUp')) velocity.add(forward);
    if (keys.has('KeyS') || keys.has('ArrowDown')) velocity.sub(forward);
    if (keys.has('KeyD') || keys.has('ArrowRight')) velocity.add(right);
    if (keys.has('KeyA') || keys.has('ArrowLeft')) velocity.sub(right);
    if (velocity.lengthSq() > 0) velocity.normalize().multiplyScalar(speed * dt);

    const p = camera.position;
    // Try the full move, then slide along each axis.
    if (!blocked(p.x + velocity.x, p.z + velocity.z, p.x, p.z)) {
      p.x += velocity.x;
      p.z += velocity.z;
    } else if (!blocked(p.x + velocity.x, p.z, p.x, p.z)) {
      p.x += velocity.x;
    } else if (!blocked(p.x, p.z + velocity.z, p.x, p.z)) {
      p.z += velocity.z;
    }

    const ground = heightAt(p.x, p.z) + EYE;
    vy -= EUROPA_GRAVITY * dt;
    p.y += vy * dt;
    if (p.y <= ground) {
      p.y = ground;
      vy = 0;
      grounded = true;
    }
  }

  return { controls, update };
}
