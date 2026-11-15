// What plays before the game, once, on the first click (Cyril, 2026-11-15):
//
//   1. his intro video, "Are we alone?" (public/video/europa-intro.mp4, made
//      in another chat from NASA footage; its credits are in the video);
//   2. the dangers briefing: the base itself, filmed live by moving the
//      game's own camera from place to place, while the narrator explains
//      each danger and a meter or two shows what it does. Nothing here is a
//      recording: it is the real world of the game, so it can never be out
//      of date with it.
//
// Then the start screen comes back ("Click to step outside") and the
// training begins as before. "Skip" jumps over the part that is playing;
// Space goes to the next danger.
//
// The narrator's lines are played by voice.js (brief-<id>.mp3) when they
// have been recorded; the words are always shown as subtitles as well.

import * as THREE from 'three';
import { LAYOUT } from '../world/layout.js';
import { heightAt } from '../world/terrain.js';
import { BRIEFING_WORDS } from './briefing-words.js';
import './prelude.css';

const VIDEO = `${import.meta.env.BASE_URL}video/europa-intro.mp4`;
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
const smooth = (k) => { const c = Math.min(1, Math.max(0, k)); return c * c * (3 - 2 * c); };
const mix = (a, b, k) => a + (b - a) * k;

export function createPrelude({ camera, daylight, sky, voice, restore }) {
  const { spawn, habitat, cave, reactor, cryobot, cableSpool } = LAYOUT;
  const at = (x, z, lift) => new THREE.Vector3(x, heightAt(x, z) + lift, z); // a point `lift` metres above the ground
  const day = daylight.skyTimes.startHour; // the first scene's light
  const eclipse = daylight.skyTimes.eclipseMidHour; // Jupiter in front of the Sun

  // The shots, by the name of the danger (briefing-words.js).
  //   from/to: the camera glides between these. look/lookTo: what it looks at.
  //   hour: the time of the Europa day (sets the light). aurora: the sky's glow.
  //   meters: bars that fill or drain while the narrator talks:
  //   [label, colour, from, to] with 0 = empty and 1 = full.
  const SHOTS = {
    radiation: {
      from: at(spawn.x, spawn.z, 1.7), to: at(spawn.x - 1, spawn.z - 7, 1.9),
      look: new THREE.Vector3(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ), lookTo: new THREE.Vector3(6, 28, -42),
      hour: day, aurora: [0.3, 0.5],
      meters: [['Radiation dose', 'dose', 0.04, 1]],
    },
    plasma: {
      // North-west, past the end of the cave mountain, where the glow on the
      // horizon is in plain view (straight west the mountain hides it).
      from: at(30, 44, 1.8), to: at(26, 38, 2.1),
      look: new THREE.Vector3(-110, 34, -150), lookTo: new THREE.Vector3(-130, 52, -150),
      hour: day, aurora: [0.4, 2.4],
      meters: [['Radiation dose', 'dose', 0.3, 1]],
    },
    shelter: {
      from: at(6, -24, 2.4), to: at(2, -27, 2.6),
      look: new THREE.Vector3(habitat.x, 4, habitat.z), lookTo: new THREE.Vector3(cave.x, 6, cave.z),
      hour: day, aurora: [0.3, 0.3],
      meters: [['Outside', 'dose', 0, 1], ['In the habitat', 'dose', 0, 0.42], ['In the ice cave', 'dose', 0, 0.1]],
    },
    dark: {
      from: at(spawn.x, spawn.z, 1.7), to: at(spawn.x - 2, spawn.z - 9, 1.8),
      look: new THREE.Vector3(spawn.lookAtX, spawn.lookAtY + 4, spawn.lookAtZ), lookTo: new THREE.Vector3(6, 26, -42),
      hour: eclipse, aurora: [0.3, 0.3],
      meters: [['Heat', 'heat', 1, 0.3], ['Battery', 'power', 0.8, 0.35]],
    },
    power: {
      from: at(10, -14, 2), to: at(14, -19, 2.6),
      look: new THREE.Vector3(reactor.x, 3.5, reactor.z), lookTo: new THREE.Vector3(reactor.x, 4, reactor.z),
      hour: day, aurora: [0.3, 0.3],
      meters: [['Power for the dig', 'ice', 0.2, 1], ['Power for warmth', 'heat', 1, 0.2]],
    },
    cryobot: {
      from: at(cryobot.x - 11, cryobot.z + 12, 1.8), to: at(cryobot.x - 7, cryobot.z + 9, 3.2),
      look: new THREE.Vector3(cryobot.x, 9, cryobot.z), lookTo: new THREE.Vector3(cryobot.x, 5, cryobot.z),
      hour: day, aurora: [0.3, 0.3],
      meters: [['The dig', 'ice', 0, 0.6], ['Hole frozen shut', 'warn', 0, 0.75]],
    },
    tide: {
      from: at(19, -6, 2.6), to: at(21, -1, 2.2),
      look: new THREE.Vector3(cableSpool.x, 0.5, cableSpool.z - 10), lookTo: new THREE.Vector3(cableSpool.x, 1.5, cableSpool.z),
      hour: day, aurora: [0.3, 0.3],
      meters: [['Cable strain', 'warn', 0.08, 0.96]],
    },
    go: {
      from: at(spawn.x + 2, spawn.z + 6, 2.2), to: at(spawn.x, spawn.z, 1.7),
      look: new THREE.Vector3(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ), lookTo: new THREE.Vector3(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ),
      hour: day, aurora: [0.3, 0.3],
      meters: [],
    },
  };
  const parts = BRIEFING_WORDS.map((w) => ({ ...w, ...SHOTS[w.id], seconds: 2.5 + w.say.length / 15 })); // seconds: time to read it, when there is no voice

  // --- What is on the screen ---------------------------------------------------
  const root = el('div', 'prelude hidden');
  const video = el('video', 'pre-video');
  video.playsInline = true;
  video.preload = 'none';
  const brief = el('div', 'pre-brief');
  const fade = el('div', 'pre-fade');
  const head = el('div', 'pre-head');
  const count = el('div', 'pre-count');
  const title = el('div', 'pre-title');
  const meters = el('div', 'pre-meters');
  head.append(count, title, meters);
  const foot = el('div', 'pre-foot');
  const note = el('div', 'pre-note');
  const say = el('div', 'pre-say');
  foot.append(note, say);
  brief.append(head, foot, fade);
  const skipButton = el('button', 'pre-skip', 'Skip ›');
  const keys = el('div', 'pre-keys');
  root.append(video, brief, skipButton, keys);
  document.body.appendChild(root);

  let state = 'idle'; // idle -> video -> brief -> done
  let done = null; // called when it is all over
  let i = 0; // which danger
  let t = 0; // seconds into this danger
  let closing = -1; // seconds since this danger's fade-out began (-1 = not yet)
  let bars = [];
  const lookAt = new THREE.Vector3();

  function begin(whenDone) {
    if (state !== 'idle') return false;
    done = whenDone;
    state = 'video';
    root.classList.remove('hidden');
    root.classList.add('on-video');
    keys.textContent = 'Enter: skip';
    video.src = VIDEO;
    // If the video can't be played for any reason, go straight on.
    video.play().catch(() => { if (state === 'video') toBriefing(); });
    return true;
  }
  video.addEventListener('ended', () => { if (state === 'video') toBriefing(); });
  video.addEventListener('error', () => { if (state === 'video') toBriefing(); });

  function toBriefing() {
    video.pause();
    state = 'brief';
    root.classList.remove('on-video');
    root.classList.add('on-brief');
    keys.textContent = 'Space: next · Enter: skip';
    show(0);
  }
  function show(n) {
    i = n;
    t = 0;
    closing = -1;
    const p = parts[i];
    count.textContent = `${i + 1} / ${parts.length}`;
    title.textContent = p.title;
    note.textContent = p.note || '';
    say.textContent = p.say;
    meters.replaceChildren();
    bars = p.meters.map(([label, colour, from, to]) => {
      const row = el('div', `pre-meter ${colour}`);
      const fill = el('i');
      const bar = el('div', 'pre-bar');
      bar.append(fill);
      row.append(el('span', '', label), bar);
      meters.append(row);
      return { fill, from, to };
    });
    fade.style.opacity = 1;
    voice.say(`brief-${p.id}`, true);
    frame(0);
  }
  function next() {
    if (i + 1 < parts.length) show(i + 1);
    else finish();
  }
  function finish() {
    if (state === 'done' || state === 'idle') return;
    video.pause();
    voice.stop('brief-');
    state = 'done';
    root.classList.add('hidden');
    restore(); // put the camera and the sky back where the game starts
    if (done) done();
  }
  // Skip: over the video to the briefing, or over the briefing to the game.
  function skip() {
    if (state === 'video') toBriefing();
    else if (state === 'brief') finish();
  }
  skipButton.addEventListener('click', skip);
  addEventListener('keydown', (e) => {
    if (state !== 'video' && state !== 'brief') return;
    if (e.code === 'Enter' || e.code === 'Escape') { e.preventDefault(); skip(); }
    else if ((e.code === 'Space' || e.code === 'ArrowRight') && state === 'brief' && !e.repeat) { e.preventDefault(); next(); }
  });

  // Put the camera, the sky and the meters where this danger's shot has them.
  function frame(dt) {
    const p = parts[i];
    const k = smooth(t / p.seconds);
    camera.position.lerpVectors(p.from, p.to, k);
    camera.lookAt(lookAt.lerpVectors(p.look, p.lookTo, k));
    sky.aurora.material.uniforms.uIntensity.value = mix(p.aurora[0], p.aurora[1], k);
    for (const b of bars) b.fill.style.width = `${mix(b.from, b.to, k) * 100}%`;
    return daylight.update(p.hour, dt);
  }

  // Every frame while it plays. Returns true when the shadows need redrawing.
  function update(dt) {
    if (state !== 'brief') return false;
    t += dt;
    const p = parts[i];
    // A recorded line decides how long the shot lasts; without one, the time
    // it takes to read the subtitle does.
    const voiced = !voice.missing.has(`brief-${p.id}`);
    const over = (voiced ? t > 1.5 && !voice.speaking : t > p.seconds) || t > 45; // (45 s: never wait for ever on a recording that won't load)
    if (over && closing < 0) closing = 0;
    if (closing >= 0) closing += dt;
    fade.style.opacity = closing >= 0 ? Math.min(1, Math.max(0, (closing - 0.5) / 0.5)) : Math.max(0, 1 - t / 0.6);
    const moved = frame(dt);
    if (closing > 1.05) next();
    return moved;
  }

  return {
    begin, update, skip, next, finish,
    get active() { return state === 'video' || state === 'brief'; },
    get state() { return state; },
    get part() { return state === 'brief' ? parts[i].id : null; },
    // For tests: jump to a danger's shot, `seconds` in.
    jump(id, seconds = 0) {
      if (state === 'idle') begin(null);
      if (state === 'video') toBriefing();
      show(parts.findIndex((p) => p.id === id));
      t = seconds;
      return frame(0);
    },
    parts,
  };
}
