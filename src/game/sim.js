// The rules of the mission, with no 3D and no screen in them: time, the
// battery, heat, radiation, the dig, and the seven situations. Everything
// here is plain numbers, so it can be run and checked on its own (the tuning
// scripts do exactly that).
//
// Time is counted in Europa hours since the first sunrise of the mission.
//
// How a mission is shaped (Cyril, 2026-11-14): ONE standing choice, the
// power plan set at the reactor, and a run of one-off situations. Each
// situation has a stage: 'ahead' (not yet), 'open' (it is happening and a
// choice can be made), sometimes a working stage, then 'done'.

import { RULES, DEFAULT_SKY } from './rules.js';

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};

// How much direct sunlight reaches the base at a given hour of the day
// (0 = none, 1 = full). Used when the 3D world isn't there to ask.
export function defaultSunlight(hourOfDay, sky = DEFAULT_SKY) {
  const up = smooth(sky.sunUpFrom, sky.sunUpFrom + 0.6, hourOfDay) * (1 - smooth(sky.sunUpUntil - 0.6, sky.sunUpUntil, hourOfDay));
  return up * (1 - eclipseAt(hourOfDay, sky));
}

// 0 = the Sun is clear of Jupiter, 1 = fully hidden behind it.
export function eclipseAt(hourOfDay, sky = DEFAULT_SKY) {
  const d = Math.abs(hourOfDay - sky.eclipseMidHour);
  return 1 - smooth(sky.eclipseHalfHours - 0.12, sky.eclipseHalfHours + 0.12, d);
}

// A small random-number maker. Its state is kept in the saved mission, so a
// restored checkpoint replays the same luck.
function mulberry(a) {
  a = (a + 0x6d2b79f5) | 0;
  let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return [a, ((t ^ (t >>> 14)) >>> 0) / 4294967296];
}

export function createSim(options = {}) {
  const rules = options.rules || RULES;
  const sky = { ...DEFAULT_SKY, ...(options.sky || {}) };
  // (hourOfDay) -> 0..1. The game passes the real answer from the 3D world.
  const sunlightAt = options.sunlightAt || ((h) => defaultSunlight(h, sky));
  const B = rules.battery;
  const firstCrossing = sky.startHour + rules.plasma.firstAfterStart;
  // A fixed seed gives the same mission every time (for tests). Without one,
  // each new mission differs a little: how deep the salty water and the salt
  // layer lie, when the crack's chemicals show up, which crossing is the
  // storm, when the tide starts.
  const fixedSeed = options.seed;

  let s;
  let checkpoints;

  function fresh() {
    let seed = fixedSeed !== undefined ? fixedSeed : Math.floor(Math.random() * 2 ** 31);
    const roll = () => { let v; [seed, v] = mulberry(seed); return v; };
    const between = (a, b) => a + roll() * (b - a);
    const R = rules;
    return {
      hour: sky.startHour,
      battery: B.start, // %
      warmth: R.heat.start, // %
      dose: 0, // % of the limit
      depthKm: 0,
      started: false, // has the cryobot been switched on yet?
      plan: R.startPlan, // 'dig' | 'share' | 'warm'
      boostUntil: 0, // a battery boost runs until this hour
      refreeze: 0, // 0 = hole open, 1 = locked in
      lowPowerHours: 0,
      zone: 'outside', // 'outside' | 'habitat' | 'cave'
      ended: null, // { type: 'breakthrough' | 'abort', cause }
      clues: 0, // life clues collected
      cluesMissed: 0,
      log: [],
      cards: [], // situations whose card has not been shown to the player yet
      hoursIn: { outside: 0, habitat: 0, cave: 0 },
      flags: {},
      // --- the seven situations ---
      brine: { km: between(R.brine.kmMin, R.brine.kmMax), stage: 'ahead', until: 0 }, // ahead | open | sampling | done
      eclipse: { stage: 'ahead', day: 0 }, // ahead | open | done
      crack: { km: between(R.crack.kmMin, R.crack.kmMax), stage: 'ahead', until: 0 }, // ahead | open | done
      sensor: { km: between(R.sensor.kmMin, R.sensor.kmMax), stage: 'ahead', blind: false, bakeUntil: 0 }, // ahead | open | baking | done
      storm: { km: between(R.storm.kmMin, R.storm.kmMax), crossing: null, stage: 'ahead', walls: false }, // ahead | open | done
      tide: { km: between(R.tide.kmMin, R.tide.kmMax), start: null, stage: 'ahead', braked: false }, // ahead | open | done
      strain: 0, // the cable: 0 = slack, 1 = snapped
      salt: { km: between(R.salt.kmMin, R.salt.kmMax), stage: 'ahead', jets: false }, // ahead | open | done
    };
  }

  // --- Reading the clock ----------------------------------------------------
  const hourOfDay = (h = s.hour) => ((h % rules.dayHours) + rules.dayHours) % rules.dayHours;
  const dayNumber = (h = s.hour) => Math.floor(h / rules.dayHours) + 1;
  const sunlight = (h = s.hour) => sunlightAt(hourOfDay(h));
  const eclipse = (h = s.hour) => eclipseAt(hourOfDay(h), sky);
  // Hours until Jupiter next starts to hide the Sun (0 while it does).
  function eclipseIn(h = s.hour) {
    const hod = hourOfDay(h);
    const from = sky.eclipseMidHour - sky.eclipseHalfHours;
    const to = sky.eclipseMidHour + sky.eclipseHalfHours;
    if (hod >= from && hod < to) return 0;
    return hod < from ? from - hod : from + rules.dayHours - hod;
  }

  // How strong the plasma is right now: 0 between crossings, 1 at the middle
  // of an ordinary one, more in the Purple Aurora Storm.
  const crossingAt = (k) => firstCrossing + k * rules.plasma.periodHours;
  const crossingIndex = (h = s.hour) => Math.round((h - firstCrossing) / rules.plasma.periodHours);
  function plasma(h = s.hour) {
    const k = crossingIndex(h);
    const d = h - crossingAt(k);
    const storm = k === s.storm.crossing;
    const w = storm ? rules.storm.widthHours : rules.plasma.widthHours;
    return (storm ? rules.storm.strength : 1) * Math.exp(-(d * d) / (w * w));
  }
  // Hours until the middle of the next crossing.
  function nextCrossingIn(h = s.hour) {
    const k = Math.ceil((h - firstCrossing) / rules.plasma.periodHours);
    return crossingAt(k) - h;
  }
  // When the storm's middle arrives (Infinity until one is forecast).
  const stormHour = () => (s.storm.crossing === null ? Infinity : crossingAt(s.storm.crossing));
  const inStorm = (h = s.hour) => Math.abs(h - stormHour()) < rules.storm.widthHours * 1.6;

  // The sideways tide: is the fault moving right now? The real tide comes
  // once every Europa day; a mission lasts about one day, so it meets one.
  function tideNow(h = s.hour) {
    return s.tide.start !== null && h >= s.tide.start && h < s.tide.start + rules.tide.hours;
  }
  // Hours until the fault starts to move (0 while it does, Infinity if none is forecast).
  function tideIn(h = s.hour) {
    if (s.tide.start === null || h >= s.tide.start + rules.tide.hours) return Infinity;
    return Math.max(0, s.tide.start - h);
  }

  // --- The plan, the dig, the warmth ------------------------------------------
  const boosted = () => s.hour < s.boostUntil;
  const baking = () => s.sensor.stage === 'baking';
  const inSalt = () => s.salt.stage === 'open' && !s.salt.jets;
  const stopped = () => s.brine.stage === 'open' || s.brine.stage === 'sampling';
  function digSpeed() {
    if (!s.started || stopped()) return 0;
    const P = rules.plans;
    let v = boosted() ? P.dig.kmh : P[s.plan].kmh;
    v *= 1 - s.refreeze;
    if (s.sensor.blind) v *= rules.sensor.slow;
    if (s.tide.braked) v *= rules.tide.brakeSlow;
    if (inSalt()) v *= rules.salt.slow;
    return v;
  }
  // How fast the crew warms (+) or cools (-) inside the habitat right now.
  function habitatWarmth(sun = sunlight()) {
    const p = boosted() ? rules.plans.warm : rules.plans[s.plan];
    const rate = p.warmDark + (p.warmLit - p.warmDark) * sun;
    return baking() ? Math.min(rate, rules.sensor.bakeChill) : rate;
  }
  // % of battery per hour, up or down.
  function batteryRate(sun = sunlight()) {
    return B.dark + (B.sun - B.dark) * sun + (boosted() ? 0 : rules.plans[s.plan].charge);
  }

  // --- What the debrief needs: a diary of the moments that mattered ---------
  function note(tag, text) {
    s.log.push({ hour: s.hour, day: dayNumber(), hod: hourOfDay(), tag, text });
    if (s.log.length > 200) s.log.shift();
  }
  function once(flag, tag, text) {
    if (s.flags[flag]) return false;
    s.flags[flag] = true;
    note(tag, text);
    return true;
  }
  const clearFlag = (flag) => { delete s.flags[flag]; };
  function end(type, cause) {
    if (s.ended) return;
    s.ended = { type, cause, hour: s.hour, depthKm: s.depthKm };
    note('end', type === 'breakthrough' ? 'The cryobot broke through into the ocean.' : `Mission called home: ${cause}.`);
  }
  // A situation begins: its card goes on the pile for the player to read.
  function open(id, tag, text) {
    s[id].stage = 'open';
    s[id].since = s.hour; // when it began (the marker points at optional ones only for a while)
    s.cards.push(id);
    note(tag, text);
  }

  // --- One tick of the mission ------------------------------------------------
  // dt is in Europa hours. Returns nothing; read the state afterwards.
  function step(dt, zone = s.zone) {
    if (s.ended || dt <= 0) return;
    s.zone = zone;
    s.hour += dt;
    s.hoursIn[zone] += dt;
    const sun = sunlight();
    const p = plasma();
    const lit = sun > 0.5;
    const day = dayNumber();

    // Checkpoints: the start of each Europa day, and each nightfall.
    if (day > (s.flags.dayMarked || 1)) {
      s.flags.dayMarked = day;
      note('clock', `Sunrise: Europa day ${day} begins.`);
      checkpoints.push({ label: `the start of Europa day ${day}`, state: snapshot() });
    }
    if (!lit && s.flags.wasLit && eclipse() < 0.5) {
      note('clock', 'The Sun went behind the mountain: the long night began.');
      checkpoints.push({ label: `nightfall on Europa day ${day}`, state: snapshot() });
    }
    s.flags.wasLit = lit;

    // --- The battery: sunlight fills it, the dark drains it -------------------
    s.battery = clamp(s.battery + batteryRate(sun) * dt, 0, 100);
    if (s.battery < B.redLine) {
      once('redline', 'power', `The battery fell below the red line (${lit ? 'in daylight' : 'in the dark, with no sunlight to refill it'}).`);
      s.lowPowerHours += dt;
      if (s.lowPowerHours >= B.graceHours || s.battery <= 0) end('abort', 'power');
    } else {
      if (s.battery > B.redLine + 4) clearFlag('redline');
      s.lowPowerHours = Math.max(0, s.lowPowerHours - dt);
    }

    // --- Heat: warm up inside if the plan allows, cool down outside ------------
    const H = rules.heat;
    let warmRate;
    if (zone === 'habitat') warmRate = habitatWarmth(sun);
    else if (zone === 'cave') warmRate = H.cave;
    else warmRate = H.outsideDark + (H.outsideSun - H.outsideDark) * sun;
    s.warmth = clamp(s.warmth + warmRate * dt, 0, 100);
    if (s.warmth < H.warnAt) {
      once('cold', 'heat', `The crew got dangerously cold ${zone === 'habitat'
        ? `inside the habitat${baking() ? ', with the heaters lent to the camera' : `, on the "${rules.plans[s.plan].name}" plan ${lit ? '' : 'in the dark'}`}`
        : zone === 'cave' ? 'in the ice cave' : lit ? 'outside' : 'outside in the dark'}.`);
    } else if (s.warmth > H.warnAt + 15) clearFlag('cold');
    if (s.warmth <= 0) end('abort', 'heat');

    // --- Radiation: only ever up. Shelter slows it, a crossing speeds it ------
    const D = rules.dose;
    const k = crossingIndex();
    const storm = k === s.storm.crossing;
    let boost = D.plasmaBoost * p;
    if (storm && zone === 'habitat' && s.storm.walls) boost *= rules.storm.wallsShield;
    s.dose = Math.min(100, s.dose + D[zone] * (1 + boost) * dt);
    if (p > 0.6) {
      if (zone === 'outside') once('caughtOut' + k, 'radiation', `The crew was outside during ${storm ? 'the Purple Aurora Storm' : 'a plasma crossing'}.`);
      else if (storm) once('stormIn', 'radiation', `The crew sat out the Purple Aurora Storm ${zone === 'cave' ? 'under the ice of the cave' : s.storm.walls ? 'in the habitat, behind walls filled with water' : 'in the habitat, whose thin walls only stop part of it'}.`);
    }
    for (const mark of [50, 75, 90]) {
      if (s.dose >= mark) once('dose' + mark, 'radiation', `The dose reached ${mark}% of the limit, with the cryobot ${s.depthKm.toFixed(1)} km down.`);
    }
    if (s.dose >= 100) end('abort', 'radiation');

    // === The situations ==========================================================

    // 2. Jupiter's eclipse: the card comes up ahead of time; the darkness
    // itself needs no rule of its own (every plan is colder in the dark).
    const E = s.eclipse;
    if (s.started && E.day !== day && eclipseIn() > 0 && eclipseIn() < rules.eclipse.warnHours) {
      E.day = day;
      open('eclipse', 'clock', 'Forecast: Jupiter would soon hide the Sun for about 3 hours.');
    }
    if (eclipse() > 0.5) once('eclipse' + day, 'clock', `Jupiter hid the Sun for about 3 hours. The plan was "${rules.plans[s.plan].name}".`);
    if (E.stage === 'open' && eclipseIn() > rules.eclipse.warnHours) E.stage = 'done';

    // 3. Ocean chemicals at the crack: there for a while, then destroyed.
    const C = s.crack;
    if (C.stage === 'ahead' && s.depthKm >= C.km) {
      C.until = s.hour + rules.crack.lastsHours;
      open('crack', 'science', 'The scanner found ocean chemicals at the red crack.');
    } else if (C.stage === 'open' && s.hour >= C.until) {
      C.stage = 'done';
      s.cluesMissed += 1;
      note('science', 'Radiation destroyed the chemicals at the crack before anyone collected them.');
    }

    // 4. The clouded camera: one particular crossing damages it.
    const S = s.sensor;
    if (S.stage === 'ahead' && s.depthKm >= S.km && p > 0.9) { // the next crossing after it gets this deep
      S.blind = true;
      open('sensor', 'cryobot', 'Radiation clouded the cryobot’s guide camera. Half-blind, it digs slower.');
    } else if (S.stage === 'baking' && s.hour >= S.bakeUntil) {
      S.stage = 'done';
      S.blind = false;
      note('cryobot', 'The camera was baked clear and the cryobot could see again.');
    }

    // 5. The Purple Aurora Storm: forecast ahead of time.
    const ST = s.storm;
    if (ST.stage === 'ahead' && s.depthKm >= ST.km) {
      // Forecast: the storm is the first crossing far enough ahead to prepare for.
      ST.crossing = Math.ceil((s.hour + rules.storm.warnHours - firstCrossing) / rules.plasma.periodHours);
      open('storm', 'radiation', 'Forecast: a Purple Aurora Storm, far stronger than an ordinary crossing.');
    } else if (ST.stage === 'open' && stormHour() - s.hour < -rules.storm.widthHours * 1.6) ST.stage = 'done';

    // 6. The sideways tide: while the fault moves, the cable is pulled tighter.
    const T = rules.tide;
    const TD = s.tide;
    if (TD.stage === 'ahead' && s.depthKm >= TD.km) {
      TD.start = s.hour + T.warnHours;
      open('tide', 'cable', 'Forecast: the tide would soon grind the fault sideways and pull on the cable.');
    }
    if (!TD.braked && tideNow()) {
      s.strain += T.strainPerHour * dt;
      if (s.strain > 0.7) once('strain', 'cable', 'The cable was stretched close to breaking, with nobody at the spool.');
    } else {
      s.strain = Math.max(0, s.strain - T.relaxPerHour * dt);
      if (TD.stage === 'open' && tideIn() === Infinity && s.strain === 0) TD.stage = 'done';
    }
    if (s.strain >= 1) {
      s.strain = 1;
      end('abort', 'cable');
    }

    // --- The dig, with the salty water (1), the salt layer (7) and the hole
    // freezing shut ---------------------------------------------------------------
    if (s.started) {
      const BR = rules.brine;
      const plan = rules.plans[s.plan];
      if (s.brine.stage === 'open') {
        // Stopped at the pocket, undecided: the water behind it freezes.
        s.refreeze = Math.min(1, s.refreeze + dt / BR.waitFreezeHours);
      } else if (s.brine.stage === 'sampling') {
        s.refreeze = Math.min(1, s.refreeze + (BR.sampleFreeze / BR.sampleHours) * dt);
        if (s.hour >= s.brine.until) {
          s.brine.stage = 'done';
          s.clues += 1;
          note('science', `The sample of salty water was on board. Behind the stopped cryobot the hole had frozen ${Math.round(s.refreeze * 100)}% shut.`);
        }
      } else if (!boosted() && plan.freeze > 0) {
        // "Warm first": the cryobot gets no heat, and its hole freezes.
        s.refreeze = Math.min(1, s.refreeze + plan.freeze * dt);
        once('freezing', 'cryobot', 'On "Warm first" the cryobot had no heat, and its hole began to freeze shut.');
      } else {
        s.refreeze = Math.max(0, s.refreeze - (boosted() ? rules.plans.dig.thaw : plan.thaw) * dt);
        if (s.refreeze === 0) clearFlag('freezing');
      }
      if (s.refreeze >= 1) end('abort', 'cryobot');

      s.depthKm = Math.min(rules.iceKm, s.depthKm + digSpeed() * dt);
      if (s.brine.stage === 'ahead' && s.depthKm >= s.brine.km) {
        open('brine', 'cryobot', `${s.depthKm.toFixed(1)} km down, the cryobot met a pocket of salty water and stopped.`);
      }
      const SA = s.salt;
      if (SA.stage === 'ahead' && s.depthKm >= SA.km) {
        open('salt', 'cryobot', `${s.depthKm.toFixed(1)} km down, the cryobot ran into a hard layer of salt and slowed to a crawl.`);
      } else if (SA.stage === 'open' && s.depthKm >= SA.km + rules.salt.thickKm) {
        SA.stage = 'done';
        note('cryobot', SA.jets ? 'The jets cut through the salt layer.' : 'The cryobot crawled out of the salt layer at last.');
      }
      if (s.depthKm >= rules.iceKm) end('breakthrough');
    }
  }

  // --- What the player can do -------------------------------------------------
  function start() {
    if (s.started) return false;
    s.started = true;
    note('action', 'You switched the cryobot on and the dig began.');
    return true;
  }
  // The standing choice, at the reactor.
  function setPlan(name) {
    if (!rules.plans[name] || name === s.plan) return false;
    s.plan = name;
    note('action', `You set the reactor to "${rules.plans[name].name}".`);
    return true;
  }
  // Spend battery to run the cryobot at full AND warm the crew, for a while.
  function boost() {
    if (boosted()) return false;
    s.battery = Math.max(0, s.battery - B.boost);
    s.boostUntil = s.hour + B.boostHours;
    note('action', `You spent ${B.boost}% of the battery on ${B.boostHours} hours of full power for both the cryobot and the heaters.`);
    return true;
  }
  // The choices inside the situations. Returns true if the choice was made.
  function choose(id, option) {
    const R = rules;
    if (id === 'brine' && s.brine.stage === 'open') {
      if (option === 'sample') {
        s.brine.stage = 'sampling';
        s.brine.until = s.hour + R.brine.sampleHours;
        note('action', `You stopped the dig for ${R.brine.sampleHours} hours to take a sample of the salty water.`);
        return true;
      }
      if (option === 'detour') {
        s.brine.stage = 'done';
        s.cluesMissed += 1;
        s.battery = Math.max(0, s.battery - R.brine.detourBattery);
        note('action', `You steered the cryobot round the pocket. It took ${R.brine.detourBattery}% of the battery, and no sample was taken.`);
        return true;
      }
    }
    if (id === 'crack' && option === 'collect' && s.crack.stage === 'open') {
      s.crack.stage = 'done';
      s.clues += 1;
      note('action', 'You walked out to the crack and collected the ocean chemicals.');
      return true;
    }
    if (id === 'sensor' && option === 'bake' && s.sensor.stage === 'open') {
      s.sensor.stage = 'baking';
      s.sensor.bakeUntil = s.hour + R.sensor.bakeHours;
      note('action', `You lent the habitat’s heaters to the camera for ${R.sensor.bakeHours} hours to bake it clear.`);
      return true;
    }
    if (id === 'storm' && option === 'walls' && s.storm.stage === 'open' && !s.storm.walls) {
      s.storm.walls = true;
      s.battery = Math.max(0, s.battery - R.storm.wallsBattery);
      note('action', `You spent ${R.storm.wallsBattery}% of the battery melting ice to fill the habitat’s walls with water.`);
      return true;
    }
    if (id === 'tide' && s.tide.stage === 'open' && !s.tide.braked) {
      if (option === 'slack' && s.strain >= 0.03) {
        s.strain = Math.max(0, s.strain - R.tide.slack);
        clearFlag('strain');
        note('action', 'You paid out slack at the cable spool.');
        return true;
      }
      if (option === 'brake') {
        s.tide.braked = true;
        s.tide.stage = 'done';
        s.strain = 0;
        note('action', 'You locked the spool and let the cable stretch. It will never snap now, but it carries less power for the rest of the dig.');
        return true;
      }
    }
    if (id === 'salt' && option === 'jets' && s.salt.stage === 'open' && !s.salt.jets) {
      s.salt.jets = true;
      s.battery = Math.max(0, s.battery - R.salt.jetsBattery);
      note('action', `You spent ${R.salt.jetsBattery}% of the battery on the cutting jets.`);
      return true;
    }
    return false;
  }

  // The situations going on right now, most pressing first.
  function openSituations() {
    const order = ['brine', 'tide', 'storm', 'salt', 'sensor', 'crack', 'eclipse'];
    return order.filter((id) => {
      const st = s[id].stage;
      if (id === 'storm') return st === 'open';
      if (id === 'tide') return st === 'open';
      return st === 'open' || st === 'sampling' || st === 'baking';
    });
  }
  // Take the next unread card off the pile (the game shows it).
  function nextCard() {
    return s.cards.shift() || null;
  }

  // --- Saving and going back ---------------------------------------------------
  const snapshot = () => JSON.parse(JSON.stringify(s));
  function restore(state) {
    s = JSON.parse(JSON.stringify(state));
    s.ended = null;
  }
  function reset() {
    s = fresh();
    checkpoints = [{ label: 'the start of the mission', state: snapshot() }];
  }
  // Go back to the last checkpoint (the start of the last Europa day, or the
  // last nightfall). Returns its name.
  function retry() {
    const c = checkpoints[checkpoints.length - 1];
    restore(c.state);
    checkpoints = checkpoints.filter((k) => k.state.hour <= c.state.hour);
    return c.label;
  }

  reset();

  return {
    rules, sky, firstCrossing,
    get state() { return s; },
    step, start, setPlan, boost, choose, openSituations, nextCard,
    reset, retry, snapshot, restore,
    hourOfDay, dayNumber, sunlight, eclipse, eclipseIn, plasma, nextCrossingIn, crossingIndex,
    stormHour, inStorm, tideNow, tideIn,
    digSpeed, habitatWarmth, batteryRate, boosted, baking, inSalt,
    get lastCheckpoint() { return checkpoints[checkpoints.length - 1].label; },
  };
}
