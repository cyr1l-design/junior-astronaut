// Sounds, all made in code: there are no sound files.
//
// Europa has no air, so nothing out there can be heard the way we hear on
// Earth. What an astronaut does hear is what travels through the boots and
// the suit into the helmet: their own steps, dull and close. So every sound
// here is the suit's own, and all of it passes through one "muffle" filter.

export function createAudio() {
  let ctx = null;
  let master;
  let muffle;
  let noise;
  let meter;
  let meterData;
  let muted = false;
  const VOLUME = 0.6;

  // Browsers only allow sound after a click or a key press: call this then.
  function unlock() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      ctx = new AC();
      muffle = ctx.createBiquadFilter();
      muffle.type = 'lowpass';
      muffle.frequency.value = 1900;
      muffle.Q.value = 0.5;
      master = ctx.createGain();
      master.gain.value = muted ? 0 : VOLUME;
      meter = ctx.createAnalyser();
      meter.fftSize = 2048;
      meterData = new Float32Array(meter.fftSize);
      muffle.connect(master);
      master.connect(ctx.destination);
      master.connect(meter);
      // Two seconds of hiss: every crunch is a short slice of it.
      noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === 'suspended') ctx.resume();
  }

  const ready = () => ctx && ctx.state === 'running';
  const rand = (a, b) => a + Math.random() * (b - a);

  // One grain of crunch: a very short slice of hiss around one pitch.
  function grain(t, dur, freq, q, gain, pan = 0) {
    const src = ctx.createBufferSource();
    src.buffer = noise;
    const band = ctx.createBiquadFilter();
    band.type = 'bandpass';
    band.frequency.value = freq;
    band.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    src.connect(band).connect(g).connect(p).connect(muffle);
    src.start(t, rand(0, 1.7), dur + 0.05);
  }

  // The weight of a boot: a short low note that slides from f0 to f1.
  function thump(t, f0, f1, dur, gain) {
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.exponentialRampToValueAtTime(f1, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(muffle);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }

  // A boot coming down on frost. pace: 0 walking, 1 running. foot: 0 or 1.
  function step(pace = 0, foot = 0) {
    if (!ready()) return;
    const t = ctx.currentTime;
    const strength = 0.55 + 0.45 * pace;
    const pan = foot ? 0.22 : -0.22;
    const grains = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < grains; i++) {
      grain(t + i * rand(0.012, 0.024), rand(0.018, 0.045), rand(650, 1700), rand(1.2, 3), rand(0.18, 0.34) * strength, pan);
    }
    thump(t, rand(78, 92), 48, 0.09, 0.32 * strength);
  }

  // Both boots hitting the ground after a jump. impact: metres a second.
  function land(impact = 2.6) {
    if (!ready()) return;
    const t = ctx.currentTime;
    const k = Math.min(Math.max(impact / 2.6, 0.3), 1.5);
    thump(t, 112, 36, 0.34, 0.55 * k);
    grain(t, 0.26, 210, 0.7, 0.3 * k);
    for (let i = 0; i < 7; i++) {
      grain(t + i * rand(0.014, 0.034), rand(0.03, 0.07), rand(500, 1600), rand(1, 2.5), rand(0.12, 0.24) * k, rand(-0.3, 0.3));
    }
  }

  // Pushing off: a scrape under the boots and the suit shifting.
  function jump() {
    if (!ready()) return;
    const t = ctx.currentTime;
    thump(t, 64, 96, 0.11, 0.3);
    for (let i = 0; i < 3; i++) grain(t + i * 0.016, rand(0.02, 0.04), rand(700, 1500), 2, 0.2, rand(-0.2, 0.2));
    grain(t + 0.03, 0.24, 380, 0.5, 0.11);
  }

  // The suit's own signals, played by the helmet's speaker (so they don't
  // pass through the "muffle": they start inside the helmet). kind: 'tick'
  // (a switch set), 'done' (something started), 'alarm' (a warning), 'hatch'
  // (the airlock, felt through the suit).
  function beep(t, freq, dur, gain) {
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(g).connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.05);
  }
  function signal(kind) {
    if (!ready()) return;
    const t = ctx.currentTime;
    if (kind === 'tick') beep(t, 700, 0.08, 0.1);
    else if (kind === 'done') { beep(t, 520, 0.12, 0.12); beep(t + 0.11, 780, 0.2, 0.12); }
    else if (kind === 'alarm') { for (let i = 0; i < 3; i++) beep(t + i * 0.24, 470, 0.16, 0.13); }
    else if (kind === 'hatch') { thump(t, 95, 38, 0.5, 0.5); grain(t + 0.04, 0.45, 260, 0.6, 0.22); thump(t + 0.55, 70, 44, 0.25, 0.3); }
  }

  // --- The music for the ocean ending, made in code like everything else ---
  // (Inside the submersible there is air, so here sound is allowed to be
  // clear.) Four cues: 'descent' (a low drone going down the shaft), 'ocean'
  // (open and quiet under the ice, with a sonar ping), 'dark' (almost
  // nothing), 'reveal' (a soft deep swell, a wide warm chord opening up, and
  // small bell notes like lights coming on). 'stop' fades it all out.
  let score = null;
  function buildScore() {
    const out = ctx.createGain();
    out.gain.value = 0.9;
    out.connect(master);
    const voice = (type, freq, dest, detune = 0) => {
      const o = ctx.createOscillator();
      o.type = type;
      o.frequency.value = freq;
      o.detune.value = detune;
      const g = ctx.createGain();
      g.gain.value = 0;
      o.connect(g).connect(dest);
      o.start();
      return g;
    };
    // The drone: two low saws a hair apart, through a dark filter.
    const droneFilter = ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.value = 150;
    droneFilter.connect(out);
    const drone = [voice('sawtooth', 55, droneFilter, -6), voice('sawtooth', 55, droneFilter, 7), voice('sine', 27.5, out)];
    // The air: an open fifth, high and thin.
    const air = [voice('sine', 220, out), voice('sine', 329.6, out), voice('triangle', 110, out)];
    // The discovery chord: D major with an added ninth, spread wide.
    const chordFilter = ctx.createBiquadFilter();
    chordFilter.type = 'lowpass';
    chordFilter.frequency.value = 300;
    chordFilter.Q.value = 0.3;
    chordFilter.connect(out);
    const chord = [73.42, 110, 146.83, 185, 220, 293.66, 329.63, 369.99].map((f, i) => voice(i % 2 ? 'triangle' : 'sawtooth', f, chordFilter, (i % 3 - 1) * 5));
    // Bells go through an echo, for a sense of a huge space.
    const bells = ctx.createGain();
    const delay = ctx.createDelay(1);
    delay.delayTime.value = 0.36;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.48;
    bells.connect(out);
    bells.connect(delay);
    delay.connect(feedback).connect(delay);
    delay.connect(out);
    score = { out, drone, droneFilter, air, chord, chordFilter, bells, timers: [] };
  }
  function bell(freq, gain, pan = 0) {
    const t = ctx.currentTime;
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(gain, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
    const p = ctx.createStereoPanner();
    p.pan.value = pan;
    o.connect(g).connect(p).connect(score.bells);
    o.start(t);
    o.stop(t + 2.3);
  }
  function music(cue) {
    if (!ready()) return;
    if (!score) buildScore();
    const t = ctx.currentTime;
    const to = (nodes, level, seconds) => nodes.forEach((g, i) => g.gain.setTargetAtTime(Array.isArray(level) ? level[i] : level, t, seconds / 3));
    for (const id of score.timers) clearInterval(id);
    score.timers = [];
    if (cue === 'descent') {
      to(score.drone, [0.16, 0.16, 0.22], 2);
      score.droneFilter.frequency.setTargetAtTime(150, t, 0.5);
      score.droneFilter.frequency.linearRampToValueAtTime(420, t + 12);
      to(score.air, 0, 1);
      to(score.chord, 0, 1);
    } else if (cue === 'ocean') {
      to(score.drone, [0.07, 0.07, 0.14], 3);
      score.droneFilter.frequency.cancelScheduledValues(t);
      score.droneFilter.frequency.setTargetAtTime(200, t, 1);
      to(score.air, [0.035, 0.022, 0.05], 4);
      to(score.chord, 0, 1);
      const ping = () => { bell(1174.7, 0.05, 0.3); };
      ping();
      score.timers.push(setInterval(ping, 4300)); // the sonar
    } else if (cue === 'dark') {
      to(score.drone, [0, 0, 0.05], 0.5);
      to(score.air, 0, 0.5);
      to(score.chord, 0, 0.5);
    } else if (cue === 'reveal') {
      thump(t, 62, 30, 2.4, 0.55); // not a bang: a deep, soft swell
      to(score.drone, [0.05, 0.05, 0.16], 2);
      to(score.air, [0.03, 0.03, 0.04], 3);
      to(score.chord, [0.07, 0.06, 0.06, 0.05, 0.05, 0.04, 0.035, 0.03], 5);
      score.chordFilter.frequency.cancelScheduledValues(t);
      score.chordFilter.frequency.setValueAtTime(260, t);
      score.chordFilter.frequency.exponentialRampToValueAtTime(2600, t + 7);
      // Bell notes from the same chord, like lights coming on one by one.
      const notes = [587.33, 659.25, 739.99, 880, 987.77, 1174.66, 1318.5, 1479.98];
      let i = 0;
      const ring = () => { bell(notes[(i * 3 + Math.floor(Math.random() * 2)) % notes.length], 0.045 + 0.03 * Math.random(), Math.random() * 1.4 - 0.7); i++; };
      score.timers.push(setInterval(ring, 260));
      setTimeout(() => { if (score.timers.length) { clearInterval(score.timers.pop()); score.timers.push(setInterval(ring, 620)); } }, 9000); // then calmer
    } else if (cue === 'stop') {
      to(score.drone, 0, 2);
      to(score.air, 0, 2);
      to(score.chord, 0, 2);
    }
  }

  function setMuted(m) {
    muted = m;
    if (ctx) master.gain.setTargetAtTime(muted ? 0 : VOLUME, ctx.currentTime, 0.02);
  }

  addEventListener('pointerdown', unlock);
  addEventListener('keydown', (e) => {
    unlock();
    if (e.code === 'KeyM' && !e.repeat) setMuted(!muted);
  });

  return {
    step, land, jump, signal, music, unlock, setMuted,
    get muted() { return muted; },
    get ready() { return !!ready(); },
    // For tests: how loud the output is right now (0 = silence, 1 = full).
    level() {
      if (!ready()) return 0;
      meter.getFloatTimeDomainData(meterData);
      let peak = 0;
      for (const v of meterData) peak = Math.max(peak, Math.abs(v));
      return peak;
    },
  };
}
