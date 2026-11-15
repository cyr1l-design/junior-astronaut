// Writes design/VOICE-SCRIPT.md: every line the guide's voice can say, with
// the file name to save each recording under. The words are read from the
// game's own code, so run this again after changing any wording:
//   node scripts/voice-script.mjs
import { writeFileSync } from 'node:fs';
import { createTraining } from '../src/game/training.js';
import { createVoice } from '../src/game/voice.js';

const training = createTraining({ camera: {}, player: {}, sim: {}, places: { cryobot: {}, door: {} }, isInside: () => false });
const { lines, characters, table } = createVoice({ audio: {}, trainingLines: training.lines }).script();

const doc = `# The guide's voice: lines to record

Made by \`node scripts/voice-script.mjs\` from the game's own wording. Don't edit
this file by hand: change the wording in the game (\`src/game/training.js\`,
\`situations.js\`, \`voice.js\`) and run the script again.

**${lines} lines, ${characters} characters in all.**

How to use it:

1. Record each line in the "Say" column and save it as an MP3 under the name
   in the "Save as" column.
2. Put the files in \`public/voice/\`.
3. That's all: the game plays a line when its text comes up. A line with no
   file is simply not spoken, so a few at a time is fine.

Rules that apply (JUDGING.md): an AI voice is AI-made audio, so it has to be
disclosed in \`AI-USE.md\` and on the project page and noted in each file's own
tags; and it must be an adult's voice (no voice of anyone under 18).

The situation cards are spoken without their live numbers ("in about 4
hours"), because a recording can't change; the card on screen still shows them.
${table}`;
writeFileSync(new URL('../design/VOICE-SCRIPT.md', import.meta.url), doc);
console.log(`design/VOICE-SCRIPT.md: ${lines} lines, ${characters} characters`);

// The same lines as a message to paste into the chat that holds the
// ElevenLabs key (Cyril, 2026-11-15): what to record, how, and where to
// save it. Words in capitals are written plain, as they should be spoken.
const all = createVoice({ audio: {}, trainingLines: training.lines }).lines;
const spoken = (text) => text.replace(/\b[A-Z]{3,}\b/g, (w) => w.toLowerCase());
const order = ['brief-', 'train-', 'card-', '', 'end-'];
const rank = (id) => { const n = order.findIndex((p) => p && id.startsWith(p)); return n < 0 ? 3 : n; };
const sorted = Object.entries(all).sort((a, b) => rank(a[0]) - rank(b[0]));
const handoff = `Please record these ${sorted.length} narrator lines for the game, in the SAME voice as the intro video
(ElevenLabs voice "Nathaniel C.", id 7S3KNdLDL7aRgBVRQb1z, model eleven_v4: the settings in tools/intro-v3/voice.py).

- One MP3 per line (mp3_44100_128 is fine), named exactly as given: <name>.mp3
- Save them in public/voice/ (create the folder). The game looks for public/voice/<name>.mp3.
- Tag each file's comment: AI voice (ElevenLabs, "Nathaniel C."). Junior Astronaut: Europa.
- Speak each line as written, calm and clear, for children aged 7 to 12. No music, no effects.
- About ${characters} characters in all. If credits are short, do them in this order:
  brief-* first (the briefing before the game), then train-*, card-*, the short messages, end-*.
- Commit the files and push; tell me the branch name so they can be copied into the game.
- Add a line to AI-USE.md: these are AI-made audio.

The lines (name: text):

${sorted.map(([id, text]) => `${id}: ${spoken(text)}`).join('\n\n')}
`;
writeFileSync(new URL('../design/VOICE-HANDOFF.md', import.meta.url), handoff);
console.log(`design/VOICE-HANDOFF.md: ${sorted.length} lines, ready to paste`);
