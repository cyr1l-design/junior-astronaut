// Records the guide's lines in the narrator's voice from the intro video
// (ElevenLabs, voice "Nathaniel C.", model eleven_v4: the same settings as
// tools/intro-v3/voice.py on the intro's branch), and saves each one where
// the game looks for it: public/voice/<name>.mp3.
//
//   node scripts/record-voice.mjs               lists what it WOULD record, and how many characters
//   node scripts/record-voice.mjs --go          records every line that has no file yet
//   node scripts/record-voice.mjs --go brief-   records only the lines whose name starts with "brief-"
//
// It SPENDS ElevenLabs credits (one per character), so nothing is recorded
// without --go, and a line that already has a file is never recorded again
// (delete the file to redo it). The key is read from ELEVENLABS_API_KEY, in
// the environment or in .env; it is never printed.
//
// Each file is tagged as AI-made audio (the rules ask for that: JUDGING.md).
import { existsSync, mkdirSync, readFileSync, writeFileSync, renameSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createTraining } from '../src/game/training.js';
import { createVoice } from '../src/game/voice.js';

const VOICE = '7S3KNdLDL7aRgBVRQb1z'; // "Nathaniel C."
const MODEL = 'eleven_v4';
const OUT = new URL('../public/voice/', import.meta.url);
const args = process.argv.slice(2);
const go = args.includes('--go');
const prefix = args.find((a) => !a.startsWith('--')) || '';

const training = createTraining({ camera: {}, player: {}, sim: {}, places: { cryobot: {}, door: {} }, isInside: () => false });
const { lines } = createVoice({ audio: {}, trainingLines: training.lines });
// Words in capitals ("HOLD", "AND") are for the eye; spoken, they are plain.
const spoken = (text) => text.replace(/\b[A-Z]{3,}\b/g, (w) => w.toLowerCase());

const todo = Object.entries(lines).filter(([id]) => id.startsWith(prefix) && !existsSync(new URL(`${id}.mp3`, OUT)));
const characters = todo.reduce((n, [, text]) => n + text.length, 0);
console.log(`${todo.length} lines to record, ${characters} characters (= ElevenLabs credits).`);
if (!go) {
  for (const [id] of todo) console.log(`  ${id}.mp3`);
  console.log('Nothing recorded. Add --go to record them.');
  process.exit(0);
}

let key = process.env.ELEVENLABS_API_KEY;
if (!key && existsSync(new URL('../.env', import.meta.url))) {
  const line = readFileSync(new URL('../.env', import.meta.url), 'utf8').split('\n').find((l) => l.startsWith('ELEVENLABS_API_KEY='));
  if (line) key = line.slice('ELEVENLABS_API_KEY='.length).trim();
}
if (!key) {
  console.error('No ELEVENLABS_API_KEY found. Put it in .env as ELEVENLABS_API_KEY=... (that file is never committed).');
  process.exit(1);
}

mkdirSync(OUT, { recursive: true });
for (const [id, text] of todo) {
  const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${VOICE}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: spoken(text), model_id: MODEL }),
  });
  if (!res.ok) {
    console.error(`${id}: ElevenLabs said ${res.status} ${(await res.text()).slice(0, 200)}`);
    process.exit(1);
  }
  const file = new URL(`${id}.mp3`, OUT);
  const raw = new URL(`${id}.raw.mp3`, OUT);
  writeFileSync(raw, Buffer.from(await res.arrayBuffer()));
  // Note in the file itself that the voice is AI-made.
  const tagged = spawnSync('ffmpeg', ['-y', '-v', 'error', '-i', raw.pathname, '-c', 'copy', '-metadata', `title=${id}`,
    '-metadata', 'comment=AI voice (ElevenLabs, "Nathaniel C."). Junior Astronaut: Europa.', file.pathname]);
  if (tagged.status === 0) rmSync(raw);
  else renameSync(raw, file); // no ffmpeg here: keep the recording, untagged
  console.log(`${id}.mp3 ok${tagged.status === 0 ? '' : ' (not tagged: ffmpeg missing)'}`);
}
