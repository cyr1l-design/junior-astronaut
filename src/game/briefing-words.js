// The words of the dangers briefing that plays before the game (Cyril,
// 2026-11-15: "explain every danger that you face ... not in words, but
// see": pictures of the base, and the narrator's voice).
//
// Only the words are here (so the voice script can read them without the 3D
// world); the shots that go with them are in prelude.js. "say" is what the
// narrator says, and is shown as a subtitle. "note" is a small label that
// must stay on screen (where the picture is not what a human eye would see).
//
// Placeholder wording for Cyril to rewrite. Every fact is sourced in
// references/europa.md.

import { RULES } from './rules.js';

export const BRIEFING_WORDS = [
  {
    id: 'radiation', title: 'Radiation',
    say: 'Jupiter is beautiful, and dangerous. It wraps Europa in radiation you cannot see or feel. It builds up in your body all the time you are here, and when your dose reaches the limit, the mission is over.',
  },
  {
    id: 'plasma', title: 'Plasma crossings',
    say: 'Every few hours Europa crosses a river of plasma around Jupiter. The sky glows, and the radiation climbs faster. Now and then, a far stronger storm comes.',
    note: 'The purple is our colouring: the real glow is ultraviolet, which eyes can’t see.',
  },
  {
    id: 'shelter', title: 'Shelter',
    say: 'Walls slow the radiation down. The thick ice of the cave stops nearly all of it. But the cave is bitterly cold.',
  },
  {
    id: 'dark', title: 'Cold and dark',
    say: 'Europa is far colder than anywhere on Earth. Once every Europa day, Jupiter hides the Sun for three hours, and the night lasts about two Earth days. In the dark you get cold, and the battery drains.',
  },
  {
    id: 'power', title: 'Power',
    say: 'The reactor cannot run everything at once. Power for the dig, or power for warmth: you choose, and you will have to keep choosing.',
  },
  {
    id: 'cryobot', title: 'The cryobot',
    say: `The cryobot melts its way down through ${RULES.iceKm} kilometres of ice. If it gets no heat, the water behind it freezes and locks it in. On the way it may meet pockets of salty water, and hard layers of salt.`,
  },
  {
    id: 'tide', title: 'The tide',
    say: 'Once every Europa day, the tide grinds this crack sideways and pulls the cryobot’s cable tight. If it pulls too far, the cable snaps.',
  },
  {
    id: 'go', title: 'No safe choice',
    say: 'Every choice here costs something. There is no safe choice. Reach the ocean before your radiation dose reaches the limit. Good luck.',
  },
];

// name -> words, for the voice (voice.js): brief-<id>.mp3
export const BRIEFING_LINES = Object.fromEntries(BRIEFING_WORDS.map((b) => [`brief-${b.id}`, b.say]));
