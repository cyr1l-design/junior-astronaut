// The guide's voice (Cyril, 2026-11-15: "it's kind of overwhelming to
// constantly read that stuff, especially knowing that your time is ticking").
//
// Every line the game shows as text can also be spoken. Each line has a
// name; if a recording of it exists at public/voice/<name>.mp3 it is played
// when the line appears, and if it doesn't, nothing happens: the game works
// the same with none, some or all of the recordings.
//
// The words are NOT written here. They are collected from where the game
// already keeps them (training.js, situations.js, the short messages and
// endings below), so the voice and the text on screen can't drift apart.
// design/VOICE-SCRIPT.md is the list to record from; rebuild it with
// __game.game.voice.script() in the browser console after changing any wording.
//
// The recordings are to be made by Cyril with an AI voice (ElevenLabs): that
// is AI-made audio, so it must be disclosed (AI-USE.md, the project page, and
// a note in each file's own tags), and it must be an adult's voice.

import { RULES } from './rules.js';
import { SITUATIONS } from './situations.js';
import { BRIEFING_LINES } from './briefing-words.js';

const VOLUME = 1.0;
const FOLDER = `${import.meta.env?.BASE_URL ?? "./"}voice/`; // (the fallback is for scripts/voice-script.mjs, run outside the browser)

// Short messages that come up while the clock runs (shown by hud.say).
export const NOTICES = {
  'clock-start': 'The mission clock is running. Good luck!',
  'clock-start-skipped': 'Training skipped. The mission clock is running.',
  'plasma-open': 'Plasma crossing! You have no shelter out here.',
  'plasma': 'Plasma crossing: the sky glows and radiation rises for about an hour.',
  'storm-open': 'The Purple Aurora Storm is here, and you are in the open!',
  'storm': 'The Purple Aurora Storm is here.',
  'eclipse-start': 'Jupiter is hiding the Sun: 3 hours of darkness. Everything is colder and the battery drains.',
  'eclipse-end': 'The Sun is back.',
  'night': 'The Sun has gone behind the mountain. The long night begins: colder, and no sunlight for the battery.',
  'sunrise': 'Sunrise. Warmer, and the battery is filling again.',
  'battery-low': 'Battery below the red line! Switch to “Warm first” to let the reactor refill it, or the base shuts down.',
  'cold': 'You are getting dangerously cold. Get inside, and give the habitat more heat.',
  'dose-50': 'Radiation dose: 50% of your limit.',
  'dose-75': 'Radiation dose: 75% of your limit.',
  'dose-90': 'Radiation dose: 90% of your limit.',
  'freeze-50': 'The cryobot’s hole is 50% frozen shut! It needs heat.',
  'freeze-75': 'The cryobot’s hole is 75% frozen shut! It needs heat.',
  'cable-tight': 'The cable is close to snapping! Pay out slack at the cable spool.',
  'sample-done': 'The sample of salty water is on board: a life clue. The cryobot is digging again.',
  'camera-clear': 'The camera is clear again. The cryobot is back to full speed.',
  'crack-gone': 'Radiation has destroyed the chemicals at the crack. That clue is gone.',
  'salt-through': 'The cryobot is through the salt layer.',
  'boost-over': 'The boost has run out. Back to your power plan.',
};

// What the voice says when a mission ends (the end screen shows more).
export const ENDING_LINES = {
  'end-power': 'Mission called home: out of power. The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home.',
  'end-heat': 'Mission called home: too cold. The crew got too cold to carry on safely. Mission Control is bringing them home.',
  'end-radiation': 'Mission called home: radiation limit reached. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home.',
  'end-cryobot': 'Mission called home: the cryobot is frozen in. It went too long without heat, and the meltwater froze solid around it.',
  'end-cable': 'Mission called home: the cable snapped. The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped.',
  'end-win': `Breakthrough! The cryobot melted through all ${RULES.iceKm} kilometres of ice, and you were the first to see what lives in Europa’s ocean.`,
};

// A situation's card, as spoken: what is happening, then each choice and
// its price. (The live numbers on the card, like "in about 4 hours", are
// left out, because a recording can't change.)
function cardLine(def) {
  const choices = def.options.map((o) => `${o.name}: ${o.cost}`).join(' ');
  return `${def.title}. ${def.spoken} Your choices. ${choices} ${def.where}`;
}

export function createVoice({ audio, trainingLines }) {
  // name -> the words, for every line the game can speak.
  const lines = { ...BRIEFING_LINES, ...trainingLines, ...NOTICES, ...ENDING_LINES };
  for (const [id, def] of Object.entries(SITUATIONS)) lines[`card-${id}`] = cardLine(def);

  const missing = new Set(); // names with no recording (found out on the first try)
  let now = null; // { id, el }: the line being spoken
  let waiting = null; // one line waiting its turn

  function start(id) {
    const el = new Audio(`${FOLDER}${id}.mp3`);
    const mine = { id, el };
    el.volume = audio.muted ? 0 : VOLUME;
    const over = (lost) => {
      if (lost) missing.add(id);
      if (now !== mine) return;
      now = null;
      if (waiting) { const next = waiting; waiting = null; say(next); }
    };
    el.addEventListener('ended', () => over(false));
    el.addEventListener('error', () => over(true));
    now = mine;
    el.play().catch(() => over(false)); // the browser refused to play: carry on silently
  }

  // Speak a line. "atOnce" lines (training steps, cards, endings) cut off
  // whatever is being said; the short messages wait for it to finish, and
  // only the newest of them is kept waiting.
  function say(id, atOnce = false) {
    if (!lines[id] || missing.has(id)) return;
    if (now && !atOnce) { waiting = id; return; }
    stop();
    start(id);
  }
  // Stop talking (only lines whose name starts with "prefix", if given).
  function stop(prefix = '') {
    if (waiting && waiting.startsWith(prefix)) waiting = null;
    if (now && now.id.startsWith(prefix)) {
      const el = now.el;
      now = null;
      el.pause();
    }
  }
  // Every frame: follow the M key (sound on/off).
  function update() {
    if (now) now.el.volume = audio.muted ? 0 : VOLUME;
  }

  // The list to record from, as a document (design/VOICE-SCRIPT.md).
  function script() {
    const groups = [
      ['The dangers briefing (before the game)', (id) => id.startsWith('brief-')],
      ['The training', (id) => id.startsWith('train-')],
      ['The seven situations (spoken when the card opens)', (id) => id.startsWith('card-')],
      ['Short messages during the mission', (id) => id in NOTICES],
      ['The end of a mission', (id) => id.startsWith('end-')],
    ];
    let total = 0;
    let out = '';
    for (const [title, has] of groups) {
      out += `\n## ${title}\n\n| Save as | Say |\n|---|---|\n`;
      for (const [id, text] of Object.entries(lines)) {
        if (!has(id)) continue;
        total += text.length;
        out += `| \`${id}.mp3\` | ${text} |\n`;
      }
    }
    return { lines: Object.keys(lines).length, characters: total, table: out };
  }

  return {
    say, stop, update, script, lines,
    get speaking() { return !!now; },
    get current() { return now ? now.id : null; },
    missing,
  };
}
