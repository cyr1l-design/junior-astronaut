// The words for the seven situations: what the card says when one begins,
// where to go, what each choice costs, and the one-line reminder shown while
// it is going on. The rules themselves are in sim.js; the numbers in rules.js.
//
// spoken: the story as the guide's voice says it (voice.js): the same words
// without the live numbers, because a recording can't change.
//
// Placeholder wording for Cyril to rewrite. Every "Real:" line is sourced in
// references/europa.md (section in brackets in rules.js).

import { RULES as R } from './rules.js';

const hrs = (h) => `${Math.max(1, Math.round(h))} hour${Math.round(h) === 1 ? '' : 's'}`;
const pct = (v) => `${Math.round(v * 100)}%`;

export const SITUATIONS = {
  brine: {
    title: 'A pocket of salty water',
    spoken: 'The cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing.',
    story: (sim) => `${sim.state.depthKm.toFixed(1)} km down, the cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing.`,
    real: 'Real: scientists think pockets of salty water lie inside Europa’s ice, and NASA counts them as a hazard for a cryobot.',
    where: 'Decide at the cryobot.',
    options: [
      { name: 'Take a sample', cost: `It could hold signs of life. The dig stops for ${R.brine.sampleHours} hours and the hole freezes partly shut.` },
      { name: 'Steer round it', cost: `Costs ${R.brine.detourBattery}% of the battery. No sample.` },
    ],
    status: (sim) => {
      const s = sim.state;
      return s.brine.stage === 'sampling'
        ? `Taking the sample: ${hrs(s.brine.until - s.hour)} left`
        : `Salty water: the cryobot is waiting for you (hole ${pct(s.refreeze)} frozen)`;
    },
  },

  eclipse: {
    title: 'Jupiter is about to hide the Sun',
    spoken: 'Soon Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer.',
    story: (sim) => `In about ${hrs(sim.eclipseIn())} Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer.`,
    real: 'Real: on this side of Europa, Jupiter eclipses the Sun once every Europa day, for about 3 hours.',
    where: 'The power plan is set inside the habitat.',
    options: [
      { name: 'Dig first', cost: 'Fastest dig. The crew gets cold, quickly in the dark.' },
      { name: 'Share', cost: 'Half-speed dig. Warm by day, slowly cooling in the dark.' },
      { name: 'Warm first', cost: 'The crew warms up. The cryobot gets no heat: no digging, and its hole starts to freeze.' },
      { name: 'Boost', cost: `${R.battery.boost}% of the battery buys ${R.battery.boostHours} hours of full digging AND warmth.` },
    ],
    status: (sim) => (sim.eclipse() > 0.5 ? 'Jupiter is hiding the Sun: everything is colder' : `Eclipse in ${hrs(sim.eclipseIn())}: choose your power plan in the habitat`),
  },

  crack: {
    title: 'Ocean chemicals at the crack',
    spoken: `The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about ${R.crack.lastsHours} hours.`,
    story: () => `The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about ${R.crack.lastsHours} hours.`,
    real: 'Real: ammonia compounds were found near Europa’s cracks in data from NASA’s Galileo. Radiation destroys ammonia quickly, so it must have surfaced recently.',
    where: 'Follow the green beacon.',
    options: [
      { name: 'Walk out and collect it', cost: 'A life clue. It is a long walk in the open: radiation and cold all the way.' },
      { name: 'Leave it', cost: 'No walk, and no clue.' },
    ],
    status: (sim) => `Ocean chemicals at the green beacon: gone in ${hrs(sim.state.crack.until - sim.state.hour)}`,
  },

  sensor: {
    title: 'The cryobot’s camera is clouded',
    spoken: 'Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed.',
    story: () => 'Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed.',
    real: 'Real: radiation damaged the camera on NASA’s Juno spacecraft. Engineers healed it by heating it.',
    where: 'Decide at the cryobot.',
    options: [
      { name: 'Bake it clear', cost: `The habitat’s heaters go to the camera for ${R.sensor.bakeHours} hours. The crew gets cold meanwhile.` },
      { name: 'Leave it', cost: 'The dig stays at about half speed until you do.' },
    ],
    status: (sim) => (sim.state.sensor.stage === 'baking'
      ? `Baking the camera: ${hrs(sim.state.sensor.bakeUntil - sim.state.hour)} left, heaters off`
      : 'Clouded camera: the dig is at half speed (bake it at the cryobot)'),
  },

  storm: {
    title: 'A Purple Aurora Storm is coming',
    spoken: 'A far stronger plasma crossing is on its way, and it will last about 3 hours. The habitat’s thin walls will not stop much of it.',
    story: (sim) => `A far stronger plasma crossing will arrive in about ${hrs(sim.stormHour() - sim.state.hour)} and last about 3 hours. The habitat’s thin walls will not stop much of it.`,
    real: 'Real: Jupiter’s plasma sweeps over Europa, and scientists think Io’s eruptions may make it stronger. The purple is our colouring: the real glow is ultraviolet.',
    where: 'Choose where to be when it hits.',
    options: [
      { name: 'Stay in the habitat', cost: 'A big dose of radiation.' },
      { name: 'Fill the habitat’s walls with water', cost: `Costs ${R.storm.wallsBattery}% of the battery to melt the ice. Water blocks most of the storm.` },
      { name: 'Shelter in the ice cave', cost: 'Thick ice blocks nearly all of it, but the cave is bitterly cold and a long walk.' },
    ],
    status: (sim) => {
      const t = sim.stormHour() - sim.state.hour;
      const walls = sim.state.storm.walls ? ' (walls filled)' : '';
      return t > 1 ? `Purple Aurora Storm in ${hrs(t)}${walls}` : `PURPLE AURORA STORM${walls}`;
    },
  },

  tide: {
    title: 'The sideways tide',
    spoken: `Soon the tide will start to grind the fault sideways, for ${R.tide.hours} hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps.`,
    story: (sim) => `In about ${hrs(sim.tideIn())} the tide will start to grind the fault sideways, for ${R.tide.hours} hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps.`,
    real: 'Real: Europa’s faults slide sideways with the daily tide. A NASA-funded team is studying how a cryobot’s cable could survive it.',
    where: 'Decide at the cable spool.',
    options: [
      { name: 'Pay out slack', cost: 'Only helps while the cable is tight, so you must come back about three times: outside, at night.' },
      { name: 'Lock the spool', cost: 'The cable stretches but cannot snap. Stretched, it carries less power: the dig is a third slower for the rest of the mission.' },
    ],
    status: (sim) => (sim.tideNow() || sim.state.strain > 0.02
      ? `The fault is moving: cable strain ${pct(sim.state.strain)} (cable spool)`
      : `The fault moves in ${hrs(sim.tideIn())} (cable spool)`),
  },

  salt: {
    title: 'A layer of salt',
    spoken: 'The cryobot has hit a hard layer of salt. It has slowed to a crawl.',
    story: (sim) => `${sim.state.depthKm.toFixed(1)} km down, the cryobot has hit a hard layer of salt. It has slowed to a crawl.`,
    real: 'Real: NASA expects layers of salt to slow a cryobot, which needs water jets or cutters to get through.',
    where: 'Decide at the cryobot.',
    options: [
      { name: 'Use the cutting jets', cost: `Costs ${R.salt.jetsBattery}% of the battery. Through at full speed.` },
      { name: 'Crawl through', cost: 'Costs nothing but hours, while your radiation dose climbs.' },
    ],
    status: (sim) => (sim.state.salt.jets ? 'Salt layer: the jets are cutting through' : 'Salt layer: the dig is crawling (jets at the cryobot)'),
  },
};
