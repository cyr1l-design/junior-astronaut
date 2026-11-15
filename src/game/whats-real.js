// "What's real?": the panel that owns up to what in this game is real, what
// was changed to make it playable, and what is imagined. The judging rules
// allow fiction only when it is labelled and teaches nothing false about a
// real place, so every science flag in CLAUDE.md and rules.js ends up here.
//
// Press I while playing (the mission clock stands still while it is open),
// or use the button on the end-of-mission screen. Pages turn with A / D or
// the arrow keys; I or F closes it.
//
// Placeholder wording for Cyril to rewrite. Every "Real" line is sourced in
// references/europa.md; change a fact there first, then here.

import { RULES } from './rules.js';

const REAL = 'real';
const GAME = 'game';
const MADE = 'made';
const TAGS = { [REAL]: 'Real', [GAME]: 'Changed for the game', [MADE]: 'Imagined' };

export const REAL_PAGES = [
  {
    title: 'Europa',
    lines: [
      [REAL, 'Europa is a moon of Jupiter covered in ice. Scientists are almost certain an ocean lies under the ice, with about twice the water of all Earth’s oceans. NASA’s Europa Clipper, launched in 2024, is on its way to find out for sure.'],
      [REAL, `The ice is about ${RULES.iceKm} km thick where NASA’s Juno spacecraft measured it.`],
      [REAL, `One Europa day lasts ${RULES.dayHours} hours. Jupiter never moves in Europa’s sky, and it looks about 24 times wider than our Moon does from Earth.`],
      [REAL, 'Gravity is 13% of Earth’s. There is no air: the sky is black even by day, shadows are sharp, and you can’t steer once you have jumped.'],
      [REAL, 'Sunlight is 25 times weaker than at Earth, so solar panels give only a little power.'],
    ],
  },
  {
    title: 'The dangers',
    lines: [
      [REAL, 'Jupiter’s radiation is the biggest danger on Europa. Ice and water block it, so the open surface is worst, walls help, and thick ice is the best shelter.'],
      [REAL, 'NASA lets an astronaut take no more than 600 millisieverts of radiation in a whole career. Your radiation meter is modelled on that limit.'],
      [GAME, 'How fast the three meters move is made up for the game. Only their order is real: what is worse and what is safer.'],
      [REAL, 'About every 5.6 hours Europa passes through the thickest part of the cloud of charged particles round Jupiter. Jupiter really does hide the Sun for about 3 hours each Europa day, and the tide really does grind Europa’s cracks sideways, slowly.'],
      [GAME, 'The purple glow is false colour. The real glow is ultraviolet, which eyes can’t see.'],
      [MADE, 'The “Purple Aurora Storm”. Scientists think eruptions on the moon Io may make these crossings stronger, but that is not certain.'],
    ],
  },
  {
    title: 'The base and the dig',
    lines: [
      [MADE, 'A base with people on Europa. Nobody has been there, and no such mission is planned.'],
      [GAME, `The dig is sped up enormously. A real cryobot would need about 3 years to melt through ${RULES.iceKm} km.`],
      [GAME, 'Our cryobot gets its power down a cable from the reactor. Real designs carry their own nuclear heater.'],
      [REAL, 'Meltwater does freeze again behind a cryobot, salt layers do slow it down, and a cable can snap when the ice shifts. NASA-funded engineers are studying all three.'],
      [MADE, 'Walls you can fill with water. Water is a real radiation shield, and melting ice really costs a lot of power, but this habitat is imagined.'],
      [GAME, 'Each situation begins when the cryobot reaches a certain depth, so every mission meets all of them.'],
      [REAL, 'The stories on the end screens are true: Opportunity lost power in a dust storm on Mars in 2018, and Spirit could not keep warm through the winter of 2010.'],
    ],
  },
  {
    title: 'The landscape',
    lines: [
      [REAL, 'Europa’s ice is whitish, crossed by long red-brown lines of salt. Pairs of ridges with a trough between them, like our canyon, are real and a few hundred metres tall.'],
      [REAL, 'We don’t drill in the canyon because it would save only about 1% of the dig, and it is a crack the tide keeps moving, which would tear the cable.'],
      [GAME, 'The colours are pushed brighter, and the night is lighter than it would be, so that you can see.'],
      [GAME, 'Europa has no true mountains. Ours are kept to the size of its real ridges.'],
      [MADE, 'The big ice arch near the base. Nothing like it has been seen on Europa. Spiky blades of ice may exist there, but nobody has seen them yet.'],
      [REAL, 'The sounds are only the ones that would travel through your boots and suit. With no air, nothing else could be heard.'],
    ],
  },
  {
    title: 'Life and the ocean',
    lines: [
      [REAL, 'No life has been found on Europa. Nobody knows yet whether anything lives there.'],
      [REAL, 'The clues you can collect are things scientists really look for. Data from NASA’s Galileo spacecraft point to ammonia near Europa’s cracks.'],
      [MADE, 'Everything alive in the ocean. The creatures are modelled on real deep-sea animals on Earth that make their own light.'],
      [GAME, 'Most real deep-sea light is blue or green. Our pinks, violets and oranges are for the look.'],
      [MADE, 'A submersible with people in it, and getting it down a hole that deep.'],
      [REAL, 'Under water, haze and soft light are true, unlike on the surface.'],
    ],
  },
  {
    title: 'Where the facts come from',
    lines: [
      [REAL, 'Ice thickness: NASA’s Juno spacecraft (NASA Jet Propulsion Laboratory).'],
      [REAL, 'Europa’s day, size and gravity: NASA’s NSSDC fact sheet and NASA’s Europa pages.'],
      [REAL, 'The radiation limit: NASA’s Office of the Chief Health and Medical Officer. Radiation at Europa: NASA JPL.'],
      [REAL, 'Cryobots: NASA’s research into melting probes for ocean worlds.'],
      [REAL, 'Jupiter’s picture in the sky: NASA/JPL/Space Science Institute, from the Cassini spacecraft (PIA07782).'],
      [GAME, 'All of it is saved data, not live. The game’s code was written with an AI assistant, and the narrator is an AI voice.'],
    ],
  },
];

const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};

// parent: the display's root (hud.js). onChange(open): the game is told when
// the panel opens or closes.
export function createWhatsReal(parent, onChange = () => {}) {
  const hint = el('div', 'real-hint');
  hint.append(el('kbd', '', 'I'), el('span', '', 'What’s real?'));

  const box = el('div', 'real hidden');
  const card = el('div', 'real-card');
  const head = el('div', 'real-head');
  const step = el('span', 'real-step');
  head.append(el('span', 'real-tag', 'What’s real?'), step);
  const title = el('h2');
  const list = el('div', 'real-list');
  const foot = el('div', 'real-foot');
  const back = el('button', 'real-nav', '◀');
  const dots = el('div', 'real-dots');
  const fwd = el('button', 'real-nav', '▶');
  const keys = el('div', 'real-keys');
  keys.append(el('kbd', '', 'A'), el('kbd', '', 'D'), el('span', '', 'turn the page'), el('kbd', '', 'I'), el('span', '', 'close'));
  const shut = el('button', 'real-close', 'Close');
  foot.append(back, dots, fwd, keys, shut);
  card.append(head, title, list, foot);
  box.append(card);
  parent.append(hint, box);

  let page = 0;
  let open = false;
  function draw() {
    const p = REAL_PAGES[page];
    step.textContent = `${page + 1} of ${REAL_PAGES.length}`;
    title.textContent = p.title;
    list.replaceChildren(...p.lines.map(([kind, text]) => {
      const row = el('div', `real-row is-${kind}`);
      row.append(el('b', '', TAGS[kind]), el('span', '', text));
      return row;
    }));
    dots.replaceChildren(...REAL_PAGES.map((_, n) => el('i', n === page ? 'on' : '')));
    list.scrollTop = 0;
  }
  function turn(by) {
    page = (page + by + REAL_PAGES.length) % REAL_PAGES.length;
    draw();
  }
  function show(on) {
    if (on === open) return;
    open = on;
    if (on) draw();
    box.classList.toggle('hidden', !on);
    document.body.classList.toggle('reading', on); // keeps the start screen's layer away, like the end screen does
    onChange(on);
  }
  back.addEventListener('click', () => turn(-1));
  fwd.addEventListener('click', () => turn(1));
  shut.addEventListener('click', () => show(false));

  return {
    open: () => show(true),
    close: () => show(false),
    toggle: () => show(!open),
    next: () => turn(1),
    prev: () => turn(-1),
    get isOpen() { return open; },
    get page() { return page; },
    // The small "I: What's real?" reminder in the corner.
    hint(on) { hint.classList.toggle('show', on); },
  };
}
