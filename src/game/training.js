// The training: a short guided start before the mission clock begins
// (Cyril, 2026-11-14: "we gotta add proper onboarding ... it's too messy
// right now for a child to navigate easily").
//
// One instruction at a time. Each step either finishes when the child has
// DONE the thing (looked round, walked a few steps, jumped, held E...), or
// waits for F after something to read. The panels on screen appear only as
// each is explained, so a child never faces everything at once. Mission time
// stands still until the last step.
//
// Placeholder wording for Cyril to rewrite; every fact is sourced in
// references/europa.md.

import * as THREE from 'three';
import { SKY } from '../world/layout.js';
import { RULES } from './rules.js';

// isSpeaking: is the guide's voice still talking? (so a step's closing line
// is not cut off by the next step)
export function createTraining({ camera, player, sim, places, isInside, isSpeaking = () => false }) {
  const P = RULES.plans;
  let walked = 0; // metres walked during the current step
  let lastX = 0;
  let lastZ = 0;
  const fwd = new THREE.Vector3();
  const last = new THREE.Vector3();
  const jupiter = SKY.jupiterDir.clone().normalize();
  let turned = 0; // how far the view has been swung round, in radians
  let leftGround = false;
  let planAtStep = null;

  // allow: which hold-a-key actions work during this step (by their id).
  // show: panels that appear at this step. way: where the marker points.
  // id: the step's name, which is also the name of its voice recording
  // (train-<id>.mp3, and train-<id>-done.mp3 for its closing line).
  const steps = [
    {
      id: 'look',
      text: 'Welcome to Europa, an ice moon of Jupiter. Move the mouse to look around.',
      hint: 'Can you find Jupiter?',
      done: () => turned > 1.0 && fwd.dot(jupiter) > 0.975,
      patience: 40, // seconds before the step lets a child through anyway
      then: 'That is Jupiter. It never moves in this sky: one side of Europa always faces it.',
    },
    {
      id: 'walk',
      text: 'Walk with the W, A, S and D keys. Hold Shift to run.',
      // No place to walk to here (Cyril, 2026-11-15: a checkpoint with nothing
      // at it made no sense). A few steps in any direction is enough.
      hint: 'Try a few steps, any way you like.',
      done: () => walked > 5,
      patience: 40,
      then: 'You weigh very little here: gravity is only 13% of Earth’s.',
    },
    {
      id: 'jump',
      text: 'Press Space to jump.',
      hint: 'Jump!',
      done: () => {
        const g = player.state().grounded;
        if (!g) leftGround = true;
        return leftGround && g;
      },
      patience: 45,
      then: 'There is no air to push against, so you can’t steer once you are off the ground.',
    },
    {
      id: 'cryobot',
      text: `Under your feet is ${RULES.iceKm} km of ice, and under that an ocean. Your mission: melt a hole down to it and look for life. The cryobot does the melting.`,
      hint: 'Walk to the cryobot, the tall tripod. Then HOLD the E key to switch it on.',
      way: { ...places.cryobot, label: 'Cryobot' },
      allow: ['start'],
      done: () => sim.state.started,
      show: ['dig'],
      then: 'It is on its way down. The panel on the right shows how deep it has got.',
    },
    {
      id: 'habitat',
      show: ['dose'],
      text: 'Out here Jupiter’s radiation builds up in your body. When this purple meter is full, the mission is over. So the dig has to win the race.',
      hint: 'Walls slow the radiation down. Walk to the habitat and HOLD E to go inside.',
      way: { ...places.door, label: 'Habitat' },
      allow: ['in'],
      done: () => isInside(),
      then: 'Inside, the radiation rises much more slowly.',
    },
    {
      id: 'plan',
      show: ['heat'],
      text: `Outside you get cold, and in here you warm up, but the reactor can’t run everything at full. “${P.dig.name}”: fast dig, cold crew. “${P.share.name}”: some of each. “${P.warm.name}”: warm crew, but the cryobot’s hole starts to freeze.`,
      hint: 'HOLD Q to change the power plan. Try it.',
      allow: ['plan'],
      done: () => planAtStep !== null && sim.state.plan !== planAtStep,
      confirm: 'You can change the plan as often as you like, but only from in here.',
    },
    {
      id: 'battery',
      show: ['battery'],
      text: 'The battery is your spare power. Sunlight fills it and the dark drains it. Holding R spends some of it on 3 hours of full digging AND warmth. It also gets you out of trouble, so don’t waste it.',
      confirm: true,
    },
    {
      id: 'start',
      show: ['clock'],
      text: 'Things will happen out there. Each one stops the clock and gives you choices, and every choice costs something. There is no safe choice.',
      hint: 'The light and the arrow will show you where to go.',
      confirm: 'start',
    },
  ];

  // What the voice says: each step's words, and its closing line if it has one.
  const closing = (step) => step.then || (typeof step.confirm === 'string' && step.confirm !== 'start' ? step.confirm : '');
  const lines = {};
  for (const step of steps) {
    lines[`train-${step.id}`] = step.hint ? `${step.text} ${step.hint}` : step.text;
    if (closing(step)) lines[`train-${step.id}-done`] = closing(step);
  }

  let i = -1;
  let active = false;
  let flashFor = 0; // seconds the closing line has been up
  let flash = 0; // seconds left of a step's "well done" line
  let ready = false; // the step's task is done; waiting for F
  let stepTime = 0; // seconds spent on this step
  const shown = [];

  function enter(n) {
    i = n;
    ready = false;
    flash = 0;
    stepTime = 0;
    leftGround = false;
    walked = 0;
    ({ x: lastX, z: lastZ } = player.state());
    planAtStep = sim.state.plan;
    for (const part of steps[i].show || []) if (!shown.includes(part)) shown.push(part);
  }
  function begin() {
    active = true;
    turned = 0;
    shown.length = 0;
    camera.getWorldDirection(last);
    enter(0);
  }
  function finish() {
    active = false;
    i = -1;
  }

  // Returns 'next' when a step has just been completed (for a sound), 'end'
  // when the training is over, else null.
  function update(dt) {
    if (!active) return null;
    camera.getWorldDirection(fwd);
    turned += fwd.angleTo(last);
    last.copy(fwd);
    const at = player.state();
    walked += Math.hypot(at.x - lastX, at.z - lastZ);
    lastX = at.x;
    lastZ = at.z;
    const step = steps[i];
    if (flash > 0) {
      flash -= dt;
      flashFor += dt;
      // Let the voice finish the closing line (but never wait for ever).
      if (flash <= 0 && isSpeaking() && flashFor < 12) flash = 0.05;
      if (flash <= 0) return advance();
      return null;
    }
    stepTime += dt;
    if (!ready && (!step.done || step.done() || (step.patience && stepTime > step.patience))) {
      if (step.confirm) { ready = true; return step.done ? 'next' : null; }
      if (step.then) { flash = 3.6; flashFor = 0; return 'next'; }
      return advance();
    }
    return null;
  }
  function advance() {
    if (i + 1 >= steps.length) { finish(); return 'end'; }
    enter(i + 1);
    return null;
  }
  // F: carry on, where a step waits for it.
  function confirm() {
    if (!active || !ready) return null;
    return advance();
  }
  function skip() {
    if (!active) return false;
    finish();
    return true;
  }

  return {
    begin, update, confirm, skip,
    get active() { return active; },
    get total() { return steps.length; },
    lines,
    // The name of the voice line that goes with what the box says right now.
    get voice() {
      if (!active) return null;
      const step = steps[i];
      const done = flash > 0 || (ready && typeof step.confirm === 'string' && step.confirm !== 'start');
      return `train-${step.id}${done ? '-done' : ''}`;
    },
    allows: (id) => active && (steps[i].allow || []).includes(id),
    // Where the marker should point right now.
    get way() { return active && flash <= 0 && steps[i].way ? steps[i].way : null; },
    // Which panels may be seen (all of them once the training is over).
    get parts() { return active ? shown : null; },
    // What the training box says right now.
    get view() {
      if (!active) return null;
      const step = steps[i];
      if (flash > 0) return { n: i + 1, total: steps.length, text: step.then, good: true };
      const waiting = ready || (step.confirm && !step.done);
      const more = typeof step.confirm === 'string' && step.confirm !== 'start' && ready ? step.confirm : '';
      return {
        n: i + 1, total: steps.length,
        text: more || step.text,
        hint: waiting ? '' : step.hint,
        key: waiting ? (step.confirm === 'start' ? 'Start the mission' : 'Carry on') : '',
      };
    },
  };
}
