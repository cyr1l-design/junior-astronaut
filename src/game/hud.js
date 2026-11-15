// Everything drawn on top of the 3D view while playing: the three meters
// (power, heat, radiation), the Europa clock, the cryobot's depth, warnings,
// the hold-a-key prompts, short messages, the end-of-mission screen, and the
// CONTROL DESK shown inside the habitat.
//
// Outside, the screen is kept small: three meters, the depth, the day, the
// one nearest thing to come, and a warning when the cable or the hole is in
// trouble. Inside the habitat the dark wall round the window is the control
// desk (Cyril, 2026-11-15: the habitat was "a bit boring", the monitoring
// should be simpler, the power plan needs "another type of switcher", the
// cable needs "better indicators ... maybe a warning"): the power lever, the
// boost, gauges for the cable and the hole, and the forecast. So inside you
// can see what is coming but can't touch anything out there; outside you
// can act but see less.
//
// It only shows what src/game/sim.js says; no rule lives here.

import './hud.css';

const el = (tag, cls, text) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  return e;
};
const hoursText = (h) => (h < 1 ? 'under 1 hour' : `${Math.round(h)} hour${Math.round(h) === 1 ? '' : 's'}`);

const STRIP_HOURS = 30; // how far ahead the clock strip looks

// The real stories behind each way a mission ends (references/europa.md
// section 18). Placeholder wording for Cyril to rewrite; the facts are sourced.
const ENDINGS = {
  power: {
    title: 'Mission called home: out of power',
    what: 'The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home.',
    real: 'Real story: in 2018 a dust storm on Mars stopped NASA’s Opportunity rover from charging its batteries. It never woke up again.',
  },
  heat: {
    title: 'Mission called home: too cold',
    what: 'The crew got too cold to carry on safely. Mission Control is bringing them home.',
    real: 'Real story: in 2010 NASA’s Spirit rover on Mars could not get enough power to its heaters through the winter. It never woke up again.',
  },
  radiation: {
    title: 'Mission called home: radiation limit reached',
    what: 'The crew reached their radiation limit. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home.',
    real: 'Real rule: NASA allows an astronaut no more than 600 millisieverts of radiation in a whole career.',
  },
  cryobot: {
    title: 'Mission called home: the cryobot is frozen in',
    what: 'The cryobot went too long without heat, and the meltwater froze solid around it. It is locked in the ice and cannot go on.',
    real: 'Real problem: NASA’s engineers know that meltwater freezes again behind a cryobot, so real designs heat their own sides.',
    // The same ending, reached at the pocket of salty water instead of by
    // switching the cryobot off.
    whatWaiting: 'The cryobot stopped at a pocket of salty water and waited to be told what to do. While it stood still, the meltwater behind it froze solid. It is locked in the ice and cannot go on.',
    whatSampling: 'While the cryobot stood still to take its sample, the meltwater behind it froze solid. It is locked in the ice and cannot go on.',
  },
  cable: {
    title: 'Mission called home: the cable snapped',
    what: 'The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped. Without its cable the cryobot cannot go on.',
    real: 'Real problem: Europa’s ice shifts with the tide every day, and a NASA-funded team is studying how a cryobot’s cable could survive it.',
  },
};

export function createHUD(sim) {
  const rules = sim.rules;
  const root = el('div', 'hud hidden');
  root.id = 'hud';

  // --- The three meters -----------------------------------------------------
  const meters = el('div', 'hud-panel hud-meters');
  const where = el('div', 'hud-where');
  meters.append(where);
  function meter(cls, name) {
    const m = el('div', `meter ${cls}`);
    const head = el('div', 'm-head');
    const val = el('span', 'm-val');
    head.append(el('span', 'm-name', name), val);
    const bar = el('div', 'm-bar');
    const fill = el('i', 'm-fill');
    bar.append(fill);
    const sub = el('div', 'm-sub');
    m.append(head, bar, sub);
    meters.append(m);
    return { m, val, bar, fill, sub };
  }
  const power = meter('power', 'Battery');
  const redline = el('b', 'm-redline');
  redline.style.left = `${rules.battery.redLine}%`;
  redline.title = 'The red line';
  power.bar.append(redline);
  const heat = meter('heat', 'Heat');
  const dose = meter('dose', 'Radiation dose');

  // --- The clock ------------------------------------------------------------
  const clock = el('div', 'hud-panel hud-clock');
  const clockTitle = el('div', 'c-title');
  const clockNext = el('div', 'c-next');
  const goal = el('div', 'c-goal');
  clock.append(clockTitle, clockNext, goal);

  // --- Warnings (under the clock): the two dangers that have no meter --------
  const alerts = el('div', 'hud-alerts');
  function alertBox(cls, name) {
    const a = el('div', `hud-alert ${cls} hidden`);
    const head = el('div', 'a-head');
    const val = el('span', 'a-val');
    head.append(el('b', '', name), val);
    const bar = el('div', 'm-bar');
    const fill = el('i', 'm-fill');
    bar.append(fill);
    const todo = el('div', 'a-todo');
    a.append(head, bar, todo);
    alerts.append(a);
    return { a, val, fill, todo };
  }
  const cableAlert = alertBox('cable', 'Cable strain');
  const holeAlert = alertBox('hole', 'Hole freezing shut');

  // --- The control desk (inside the habitat only) ---------------------------
  // The power lever: one supply, slid between the cryobot and the crew.
  const planIds = Object.keys(rules.plans); // dig, share, warm: left to right
  const stopAt = Object.fromEntries(planIds.map((id, n) => [id, (n / (planIds.length - 1)) * 100]));
  const deskPower = el('div', 'hud-panel desk desk-power');
  const kEnds = el('div', 'k-ends');
  kEnds.append(el('span', '', '◀ Cryobot'), el('span', '', 'Crew ▶'));
  const lever = el('div', 'k-lever');
  const knob = el('b', 'k-knob');
  lever.append(el('i', 'k-rail'), ...planIds.map((id) => { const dot = el('i', 'k-stop'); dot.style.left = `${stopAt[id]}%`; return dot; }), knob);
  const kNames = el('div', 'k-names');
  const stopName = {};
  for (const id of planIds) { stopName[id] = el('span', '', rules.plans[id].name); kNames.append(stopName[id]); }
  const kDig = el('div', 'k-row');
  const kDigText = el('span', 'k-val');
  kDig.append(el('span', '', 'Dig speed'), kDigText);
  const kDigBar = el('div', 'm-bar k-bar');
  const kDigFill = el('i', 'm-fill');
  kDigBar.append(kDigFill);
  const kWarm = el('div', 'k-row');
  const kWarmText = el('span', 'k-val');
  kWarm.append(el('span', '', 'Crew'), kWarmText);
  const kHole = el('div', 'k-hole');
  const kKey = el('div', 'k-key');
  const kKeyText = el('span');
  kKey.append(el('kbd', '', 'Q'), kKeyText);
  deskPower.append(el('div', 'k-title', 'Reactor power'), kEnds, lever, kNames, kDig, kDigBar, kWarm, kHole, kKey);

  // The boost button.
  const deskBoost = el('div', 'hud-panel desk desk-boost');
  const boostFill = el('i', 'p-fill');
  const boostText = el('div', 'b-text');
  const boostSub = el('span');
  boostText.append(el('b', '', 'Boost'), boostSub);
  deskBoost.append(boostFill, el('kbd', '', 'R'), boostText);

  // Gauges for the cable and the hole.
  const deskGauges = el('div', 'hud-panel desk desk-gauges');
  function gauge(name) {
    const g = el('div', 'gauge');
    const head = el('div', 'g-head');
    const val = el('span', 'g-val');
    head.append(el('span', 'g-name', name), val);
    const bar = el('div', 'm-bar');
    const fill = el('i', 'm-fill');
    bar.append(fill);
    const sub = el('div', 'g-sub');
    g.append(head, bar, sub);
    deskGauges.append(g);
    return { g, val, fill, sub };
  }
  const gCable = gauge('Cable strain');
  const gHole = gauge('Hole frozen shut');
  function setGauge(g, share, text) {
    g.val.textContent = `${Math.round(share * 100)}%`;
    g.fill.style.width = `${share * 100}%`;
    g.g.classList.toggle('mid', share >= 0.3 && share < 0.7);
    g.g.classList.toggle('bad', share >= 0.7);
    g.sub.textContent = text;
  }

  // The forecast: the next 30 hours as a strip, and the list of what is coming.
  const deskForecast = el('div', 'hud-panel desk desk-forecast');
  const strip = el('canvas', 'c-strip');
  strip.width = 300;
  strip.height = 22;
  const stripLabels = el('div', 'c-labels');
  stripLabels.append(el('span', '', 'now'), el('span', '', `in ${STRIP_HOURS} hours`));
  const legend = el('div', 'f-legend');
  for (const [cls, name] of [['day', 'day'], ['night', 'night'], ['ecl', 'eclipse'], ['plasma', 'plasma']]) {
    const item = el('span', '', name);
    item.prepend(el('i', cls));
    legend.append(item);
  }
  const comingList = el('div', 'f-list');
  deskForecast.append(el('div', 'k-title', 'What is coming'), strip, stripLabels, legend, comingList);
  const ctx = strip.getContext('2d');

  // --- The cryobot ----------------------------------------------------------
  const dig = el('div', 'hud-panel hud-dig');
  const digLevel = el('div', 'd-level');
  const digCol = el('div', 'd-col');
  const digShaft = el('i', 'd-shaft');
  const digProbe = el('b', 'd-probe');
  digCol.append(el('span', 'd-ice', 'ice'), digShaft, digProbe, el('span', 'd-ocean', 'ocean'));
  const digDepth = el('div', 'd-depth');
  const digOf = el('div', 'd-of', `of ${rules.iceKm} km of ice`);
  const digSource = el('div', 'd-source', 'thickness measured by NASA’s Juno');
  const digClues = el('div', 'd-clues');
  dig.append(el('div', 'd-title', 'Cryobot'), digLevel, digCol, digDepth, digOf, digSource, digClues);

  // --- Messages, prompts, the habitat window, the end screen ----------------
  const toast = el('div', 'hud-toast');
  const prompts = el('div', 'hud-prompts');
  const porthole = el('div', 'hud-porthole');
  porthole.append(el('div', 'p-ring'), el('div', 'p-label', 'Inside the habitat'));
  const endscreen = el('div', 'hud-end hidden');
  // The card shown when a situation begins. The mission stands still while
  // it is up, so there is time to read the choices.
  const cardBox = el('div', 'hud-card hidden');
  // The training box (one instruction at a time) and the marker that shows
  // where to go.
  const train = el('div', 'hud-train hidden');
  const trainStep = el('div', 't-step');
  const trainText = el('div', 't-text');
  const trainHint = el('div', 't-hint');
  const trainKey = el('div', 't-key');
  const trainKeyText = el('span');
  trainKey.append(el('kbd', '', 'F'), trainKeyText);
  const trainSkip = el('div', 't-skip', 'T: skip the training');
  train.append(trainStep, trainText, trainHint, trainKey, trainSkip);
  const way = el('div', 'hud-way hidden');
  const wayArrow = el('i', 'w-arrow');
  const wayLabel = el('span', 'w-label');
  way.append(wayArrow, wayLabel);
  // Which part of the display each panel is, so the training can bring them
  // in one at a time.
  power.m.dataset.part = 'battery';
  heat.m.dataset.part = 'heat';
  dose.m.dataset.part = 'dose';
  clock.dataset.part = 'clock';
  dig.dataset.part = 'dig';
  deskPower.dataset.part = 'heat'; // the lever arrives with the step that teaches it
  deskBoost.dataset.part = 'battery';
  deskGauges.dataset.part = 'clock';
  deskForecast.dataset.part = 'clock';

  // Three columns: left (the crew's meters, and on the desk the power
  // controls), top centre (the day and the warnings), right (the cryobot,
  // and on the desk its gauges and the forecast).
  const left = el('div', 'hud-col hud-left');
  left.append(meters, deskPower, deskBoost);
  const top = el('div', 'hud-col hud-top');
  top.append(clock, alerts);
  const right = el('div', 'hud-col hud-right');
  right.append(dig, deskGauges, deskForecast);
  root.append(porthole, left, top, right, toast, prompts, way, train, cardBox, endscreen);
  document.body.append(root);

  let toastTimer = 0;
  let stripTimer = 0;
  const promptEls = new Map();

  function drawStrip() {
    const w = strip.width;
    const h = strip.height;
    const now = sim.state.hour;
    for (let x = 0; x < w; x++) {
      const t = now + (x / w) * STRIP_HOURS;
      const sun = sim.sunlight(t);
      const ecl = sim.eclipse(t);
      // Day is warm and pale, night is deep blue, the eclipse is nearly black.
      const r = Math.round(14 + 241 * sun);
      const g = Math.round(22 + 204 * sun - 8 * ecl);
      const b = Math.round(58 + 110 * sun - 40 * ecl);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillRect(x, 0, 1, h);
      if (ecl > 0.5) {
        ctx.fillStyle = 'rgba(255,140,60,0.9)';
        ctx.fillRect(x, h - 3, 1, 3);
      }
      const p = sim.plasma(t);
      if (p > 0.04) {
        ctx.fillStyle = `rgba(190,110,255,${Math.min(1, 0.35 + p)})`;
        const ph = Math.round(p * (h - 6));
        ctx.fillRect(x, h - 3 - ph, 1, ph);
      }
    }
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    for (let k = 1; k * 10 < STRIP_HOURS; k++) ctx.fillRect(Math.round((k * 10 * w) / STRIP_HOURS), 0, 1, 4);
  }

  // What is coming up: [{ what, hours }], hours 0 = happening now.
  function comingUp() {
    const s = sim.state;
    const list = [];
    const p = sim.plasma();
    const stormIn = sim.stormHour() - s.hour;
    if (p > 0.25) list.push({ what: Math.abs(stormIn) < 2 ? 'PURPLE AURORA STORM' : 'Plasma crossing', hours: 0 });
    else if (stormIn > 0 && stormIn < 12) list.push({ what: 'Purple Aurora Storm', hours: stormIn });
    else list.push({ what: 'Plasma crossing', hours: sim.nextCrossingIn() });
    if (sim.tideNow()) list.push({ what: 'The fault is moving', hours: 0 });
    else if (sim.tideIn() < 12) list.push({ what: 'The fault moves', hours: sim.tideIn() });
    if (sim.eclipse() > 0.5) list.push({ what: 'Jupiter is hiding the Sun', hours: 0 });
    else if (sim.sunlight() > 0.5) {
      // Look ahead for the next darkness: the eclipse or sunset.
      for (let d = 0.25; d < 60; d += 0.25) {
        if (sim.sunlight(s.hour + d) < 0.5) {
          list.push({ what: sim.eclipse(s.hour + d + 0.3) > 0.5 ? 'Eclipse' : 'Dark', hours: d });
          break;
        }
      }
    } else {
      for (let d = 0.25; d < 80; d += 0.25) {
        if (sim.sunlight(s.hour + d) > 0.5) {
          list.push({ what: 'Sunlight', hours: d });
          break;
        }
      }
    }
    return list;
  }
  const whenText = (h) => (h <= 0 ? 'NOW' : `in ${hoursText(h)}`);

  // The numbers are refreshed ten times a second, not every frame: writing
  // to the page costs time the 3D picture needs. (realDt 0 = "right now".)
  let slowTimer = 0;
  let trainKeyNow = '';
  let partsKey = null;
  function update(realDt, view) {
    updatePrompts(view);
    updateDesk(view);
    updateWay(view.way);
    updateTraining(view.training, view.parts);
    if (toastTimer > 0) {
      toastTimer -= realDt;
      if (toastTimer <= 0) toast.classList.remove('show');
    }
    slowTimer -= realDt;
    if (realDt > 0 && slowTimer > 0) return;
    slowTimer = 0.1;
    updateNumbers(view);
  }

  function updateNumbers(view) {
    const s = sim.state;
    const p = sim.plasma();
    const sun = sim.sunlight();

    // Where you are.
    where.textContent = s.zone === 'habitat' ? 'Inside the habitat' : s.zone === 'cave' ? 'In the ice cave' : 'Outside';
    root.classList.toggle('inside', s.zone === 'habitat');

    // The battery.
    const lit = sun > 0.5;
    power.val.textContent = `${Math.round(s.battery)}%`;
    power.fill.style.width = `${s.battery}%`;
    const low = s.battery < rules.battery.redLine;
    power.m.classList.toggle('warn', low);
    power.sub.textContent = low
      ? `BELOW THE RED LINE: base shuts down in ${hoursText(Math.max(0, rules.battery.graceHours - s.lowPowerHours))}`
      : sim.boosted() ? `Boost running: ${hoursText(s.boostUntil - s.hour)} of full power left`
        : sim.batteryRate() > 0.05 ? (lit ? 'Sunlight is filling it' : 'The reactor’s spare power is filling it') : 'Dark: slowly draining';

    // Heat.
    heat.val.textContent = `${Math.round(s.warmth)}%`;
    heat.fill.style.width = `${s.warmth}%`;
    heat.m.classList.toggle('warn', s.warmth < rules.heat.warnAt);
    const inRate = sim.habitatWarmth();
    const planName = sim.boosted() ? 'Boost' : rules.plans[s.plan].name;
    heat.sub.textContent = s.zone === 'habitat'
      ? (sim.baking() ? 'Heaters lent to the camera: cooling' : `${planName}${lit ? '' : ', in the dark'}: ${inRate > 0.3 ? 'warming up' : inRate < -3 ? 'cooling fast' : inRate < -0.3 ? 'cooling slowly' : 'holding'}`)
      : s.zone === 'cave' ? 'Bare ice all round: cooling fast'
        : lit ? 'Outside in sunlight: cooling' : 'Outside in the dark: cooling fast';

    // Radiation.
    dose.val.textContent = `${Math.round(s.dose)}% of limit`;
    dose.fill.style.width = `${s.dose}%`;
    dose.m.classList.toggle('warn', s.dose > rules.dose.warnAt);
    dose.m.classList.toggle('surge', p > 0.25);
    const shelter = s.zone === 'habitat' ? 'Habitat walls: rising slowly' : s.zone === 'cave' ? 'Under thick ice: almost stopped' : 'No shelter: rising fast';
    dose.sub.textContent = p > 0.25 ? `${shelter} · ${sim.inStorm() ? 'PURPLE AURORA STORM' : 'PLASMA CROSSING'}` : shelter;

    // Clock.
    clockTitle.textContent = `Europa day ${sim.dayNumber()} · hour ${Math.floor(sim.hourOfDay())} of ${rules.dayHours}`;
    stripTimer -= 1;
    if (stripTimer <= 0) {
      stripTimer = 3; // every third refresh
      drawStrip();
      const coming = comingUp();
      // Outside: only the nearest thing. On the desk: all of them.
      const soonest = coming.reduce((a, b) => (b.hours < a.hours ? b : a));
      clockNext.textContent = `${soonest.what} ${whenText(soonest.hours)}`;
      clockNext.classList.toggle('now', soonest.hours <= 0);
      comingList.replaceChildren(...coming.map((c) => {
        const row = el('div', c.hours <= 0 ? 'f-row now' : 'f-row');
        row.append(el('span', '', c.what), el('b', '', whenText(c.hours)));
        return row;
      }));
    }

    // Cryobot. Says WHY the dig is slow or standing still when it is.
    const frac = s.depthKm / rules.iceKm;
    const speed = sim.digSpeed();
    const slowBy = [s.sensor.blind ? 'half-blind' : '', sim.inSalt() ? 'in salt' : '', s.tide.braked ? 'stretched cable' : '', s.refreeze > 0.02 && speed > 0 ? 'melting free' : ''].filter(Boolean).join(', ');
    digLevel.textContent = !s.started ? 'Not started'
      : s.brine.stage === 'open' ? 'STOPPED at salty water'
      : s.brine.stage === 'sampling' ? 'Stopped: taking a sample'
      : speed === 0 ? `${planName}: not digging`
      : `${planName} · ${speed.toFixed(2)} km an hour${slowBy ? ` (${slowBy})` : ''}`;
    digShaft.style.height = `${frac * 100}%`;
    digProbe.style.top = `${frac * 100}%`;
    digDepth.textContent = `${s.depthKm.toFixed(1)} km`;
    dig.classList.toggle('warn', s.refreeze > 0.02 || s.strain > 0.05);

    // The cable and the hole: gauges on the desk, and a warning anywhere
    // while either is getting worse.
    const inHabitat = s.zone === 'habitat';
    const cableBad = s.strain > 0.05 && !s.tide.braked;
    setGauge(gCable, s.strain, s.tide.braked ? 'Spool locked: it can’t snap'
      : s.strain >= 0.7 ? 'Close to snapping!'
        : sim.tideNow() ? 'The fault is moving: tightening'
          : s.strain > 0.02 ? 'Easing off' : 'Slack');
    cableAlert.a.classList.toggle('hidden', !cableBad);
    cableAlert.a.classList.toggle('urgent', s.strain >= 0.7);
    if (cableBad) {
      cableAlert.val.textContent = `${Math.round(s.strain * 100)}%`;
      cableAlert.fill.style.width = `${s.strain * 100}%`;
      cableAlert.todo.textContent = s.strain >= 0.7 ? 'About to snap! Pay out slack at the cable spool'
        : inHabitat ? 'Go out to the cable spool and pay out slack' : 'Pay out slack at the cable spool';
    }
    const waiting = s.brine.stage === 'open';
    const sampling = s.brine.stage === 'sampling';
    const noHeat = !sim.boosted() && rules.plans[s.plan].freeze > 0;
    const holeUp = s.started && (waiting || sampling || noHeat);
    const holeBad = holeUp && s.refreeze > 0.02;
    setGauge(gHole, s.refreeze, s.refreeze < 0.02 && !holeUp ? 'Open' : holeUp ? 'Freezing shut' : 'Melting free again');
    holeAlert.a.classList.toggle('hidden', !holeBad);
    holeAlert.a.classList.toggle('urgent', s.refreeze >= 0.7);
    if (holeBad) {
      holeAlert.val.textContent = `${Math.round(s.refreeze * 100)}%`;
      holeAlert.fill.style.width = `${s.refreeze * 100}%`;
      holeAlert.todo.textContent = waiting ? 'The cryobot is waiting at the salty water: decide there'
        : sampling ? 'It freezes while the cryobot stands still for its sample'
          : inHabitat ? 'The cryobot has no heat: move the power lever' : 'The cryobot has no heat: change the power plan in the habitat';
    }
    root.classList.toggle('danger', (cableBad && s.strain >= 0.7) || (holeBad && s.refreeze >= 0.7));

    // The power lever's read-out: what this plan does right now.
    const kmh = sim.boosted() ? rules.plans.dig.kmh : rules.plans[s.plan].kmh;
    kDigFill.style.width = `${(kmh / rules.plans.dig.kmh) * 100}%`;
    kDigText.textContent = kmh > 0 ? (kmh >= rules.plans.dig.kmh ? 'full' : 'half') : 'stopped';
    kWarmText.textContent = sim.baking() ? '▼ heaters lent to the camera'
      : `${inRate > 0.3 ? '▲ warming up' : inRate < -3 ? '▼ cooling fast' : inRate < -0.3 ? '▼ cooling slowly' : '● holding'}${lit ? '' : ' (dark)'}`;
    kWarm.classList.toggle('up', inRate > 0.3 && !sim.baking());
    kWarm.classList.toggle('down', inRate < -0.3 || sim.baking());
    kHole.textContent = noHeat ? 'No heat for the cryobot: its hole is freezing' : '';
    digClues.textContent = s.clues > 0 ? `Life clues on board: ${s.clues}` : '';

    // Under the clock: the goal, or what is going on right now.
    const lines = view.tracker || [];
    const key = lines.join('|');
    if (goal.dataset.key !== key) {
      goal.dataset.key = key;
      goal.replaceChildren(...lines.map((t) => el('div', 'c-line', t)));
    }
  }

  // The marker: a tag over the place when it is in view, an arrow at the
  // side of the screen when it isn't.
  function updateWay(w) {
    way.classList.toggle('hidden', !w);
    if (!w) return;
    const text = `${w.label} · ${Math.round(w.dist)} m`;
    if (wayLabel.textContent !== text) wayLabel.textContent = text;
    way.classList.toggle('train', !!w.train);
    way.classList.toggle('left', w.side === 'left');
    way.classList.toggle('right', w.side === 'right');
    if (w.side) { way.style.left = ''; way.style.top = ''; }
    else { way.style.left = `${w.x}px`; way.style.top = `${w.y}px`; }
  }

  // The training box, and which panels may be seen yet (null = all of them).
  function updateTraining(t, parts) {
    const key = t ? `${t.n}|${t.text}|${t.hint}|${t.key}|${t.good}` : '';
    if (key !== trainKeyNow) {
      trainKeyNow = key;
      train.classList.toggle('hidden', !t);
      root.classList.toggle('training', !!t);
      if (t) {
        trainStep.textContent = `Training · ${t.n} of ${t.total}`;
        trainText.textContent = t.text;
        trainHint.textContent = t.hint || '';
        trainKeyText.textContent = t.key || '';
        trainKey.classList.toggle('hidden', !t.key);
        train.classList.toggle('good', !!t.good);
      }
    }
    const pk = parts ? parts.join(',') : 'all';
    if (pk !== partsKey) {
      const before = partsKey;
      partsKey = pk;
      for (const node of root.querySelectorAll('[data-part]')) {
        const off = !!parts && !parts.includes(node.dataset.part);
        const wasOff = node.classList.contains('part-off');
        node.classList.toggle('part-off', off);
        if (wasOff && !off && before !== null && parts) { node.classList.add('part-new'); setTimeout(() => node.classList.remove('part-new'), 5000); }
      }
      meters.classList.toggle('part-off', !!parts && !['battery', 'heat', 'dose'].some((p) => parts.includes(p)));
    }
  }

  // Prompts: one chip per action, with a bar that fills while the key is held.
  function updatePrompts(view) {
    const seen = new Set();
    for (const a of view.actions || []) {
      if (a.id === 'plan' || a.id === 'boost') continue; // these are on the desk (updateDesk)
      seen.add(a.key);
      let chip = promptEls.get(a.key);
      if (!chip) {
        chip = el('div', 'prompt');
        chip.append(el('i', 'p-fill'), el('kbd', '', a.key), el('span', 'p-text'));
        promptEls.set(a.key, chip);
        prompts.append(chip);
      }
      const text = `Hold: ${a.label}`;
      if (chip.dataset.text !== text) {
        chip.dataset.text = text;
        chip.querySelector('.p-text').textContent = text;
      }
      chip.querySelector('.p-fill').style.width = `${Math.min(1, a.progress) * 100}%`;
      chip.classList.toggle('holding', a.progress > 0);
    }
    for (const [key, chip] of promptEls) {
      if (!seen.has(key)) {
        chip.remove();
        promptEls.delete(key);
      }
    }
  }

  // The desk's controls, every frame: the lever's knob slides toward the
  // next stop while Q is held, and the boost button fills while R is held.
  let deskKey = null;
  function updateDesk(view) {
    if (!root.classList.contains('inside')) return;
    const s = sim.state;
    const acts = view.actions || [];
    const plan = acts.find((a) => a.id === 'plan');
    const boost = acts.find((a) => a.id === 'boost');
    const at = stopAt[s.plan];
    const to = plan ? stopAt[plan.next] : at;
    knob.style.left = `${at + (to - at) * (plan ? Math.min(1, plan.progress) : 0)}%`;
    lever.classList.toggle('holding', !!plan && plan.progress > 0);
    boostFill.style.width = `${boost ? Math.min(1, boost.progress) * 100 : 0}%`;
    deskBoost.classList.toggle('holding', !!boost && boost.progress > 0);
    const running = sim.boosted() ? Math.ceil(s.boostUntil - s.hour) : 0;
    const key = `${s.plan}|${plan ? plan.next : ''}|${boost ? boost.label : ''}|${running}`;
    if (key === deskKey) return;
    deskKey = key;
    for (const id of planIds) stopName[id].classList.toggle('on', id === s.plan);
    kKey.classList.toggle('off', !plan);
    if (plan) kKeyText.textContent = `Hold: move to ${rules.plans[plan.next].name} (${plan.why})`;
    deskBoost.classList.toggle('off', !boost);
    deskBoost.classList.toggle('running', running > 0);
    const B = rules.battery;
    boostSub.textContent = running > 0 ? `Running: ${hoursText(running)} left`
      : boost ? `Hold: ${boost.label.replace(/^boost: /, '')}`
        : `${B.boostHours} hours of full digging AND warmth (−${B.boost}% battery)`;
  }

  // One message at a time. A warning that is still showing is not replaced
  // by a lesser message ("the cryobot is 15 km down" must not wipe out "the
  // cable is about to snap").
  let toastKind = 'info';
  function say(text, kind = 'info', seconds = 6) {
    if (toastTimer > 0 && toastKind === 'warn' && kind !== 'warn') return;
    toastKind = kind;
    toast.textContent = text;
    toast.className = `hud-toast show ${kind}`;
    toastTimer = seconds;
  }

  function show(on) {
    root.classList.toggle('hidden', !on);
  }

  // A situation's card: what is happening, the real fact behind it, the
  // choices with their prices, and where to go.
  function showCard({ title, story, real, where: whereTo, options }) {
    cardBox.replaceChildren();
    const box = el('div', 'card-box');
    box.append(el('div', 'card-tag', 'Situation'), el('h2', '', title), el('p', 'card-story', story), el('p', 'card-real', real));
    const list = el('div', 'card-options');
    for (const o of options) {
      const row = el('div', 'card-option');
      row.append(el('b', '', o.name), el('span', '', o.cost));
      list.append(row);
    }
    const foot = el('div', 'card-foot');
    const go = el('div', 'card-go');
    go.append(el('kbd', '', 'F'), el('span', '', 'Carry on'));
    foot.append(el('div', 'card-where', whereTo), go);
    box.append(list, foot);
    cardBox.append(box);
    cardBox.classList.remove('hidden');
  }
  function hideCard() {
    cardBox.classList.add('hidden');
  }

  // The end of a mission. `onRetry` and `onRestart` are what the buttons do.
  function showEnd(ended, { onRetry, onRestart, retryLabel, onReal }) {
    const s = sim.state;
    endscreen.replaceChildren();
    const card = el('div', 'end-card');
    if (ended.type === 'breakthrough') {
      card.classList.add('win');
      card.append(
        el('h2', '', 'Breakthrough!'),
        el('p', '', `The cryobot melted through all ${rules.iceKm} km of ice, and you were the first to see what lives in Europa’s ocean.`),
        el('p', 'end-real', `You finished with ${Math.round(s.dose)}% of your radiation limit used, on Europa day ${sim.dayNumber()}.`),
        el('p', '', s.clues >= 2 ? 'You brought 2 life clues, the salty water and the ocean chemicals, so the cameras knew where to look: you found the most there was to find, even the giant far below.'
          : s.clues === 1 ? 'You brought 1 life clue, so the cameras knew a little of where to look. With both clues there is more down there to find.'
            : 'You brought no life clues, so the cameras did not know where to look. With clues there is more down there to find.'),
        el('p', 'end-note', 'The ocean under Europa’s ice is real. The life in it is imagined: none has been found.'),
      );
    } else {
      const e = ENDINGS[ended.cause];
      const what = ended.cause === 'cryobot' && s.brine.stage === 'open' ? e.whatWaiting
        : ended.cause === 'cryobot' && s.brine.stage === 'sampling' ? e.whatSampling : e.what;
      card.append(el('h2', '', e.title), el('p', '', what), el('p', 'end-real', e.real));
      const depth = el('div', 'end-depth');
      const bar = el('div', 'end-bar');
      const fill = el('i');
      fill.style.width = `${(ended.depthKm / rules.iceKm) * 100}%`;
      bar.append(fill);
      depth.append(
        el('div', '', `The cryobot got ${ended.depthKm.toFixed(1)} km down. The ice is about ${rules.iceKm} km thick (measured by NASA’s Juno spacecraft).`),
        bar,
      );
      card.append(depth);
      // What led here: what the sky did, what you chose, and what it did to
      // this meter, oldest first.
      const chain = s.log.filter((n) => n.tag === ended.cause || n.tag === 'clock' || n.tag === 'action').slice(-7);
      if (chain.length) {
        card.append(el('h3', '', 'What led here'));
        const list = el('ol', 'end-chain');
        for (const n of chain) list.append(el('li', '', `Day ${n.day}, hour ${Math.floor(n.hod)}: ${n.text}`));
        card.append(list);
      }
    }
    const buttons = el('div', 'end-buttons');
    if (ended.type !== 'breakthrough' && onRetry) {
      const again = el('button', 'primary', `Try again from ${retryLabel}`);
      again.addEventListener('click', onRetry);
      buttons.append(again);
    }
    // No second button when "try again" already means the very start.
    if (ended.type === 'breakthrough' || !retryLabel.startsWith('the start of the mission')) {
      const over = el('button', ended.type === 'breakthrough' ? 'primary' : '', ended.type === 'breakthrough' ? 'Play again' : 'Start the mission over');
      over.addEventListener('click', onRestart);
      buttons.append(over);
    }
    if (onReal) {
      const real = el('button', '', 'What’s real?');
      real.addEventListener('click', onReal);
      buttons.append(real);
    }
    card.append(buttons);
    endscreen.append(card);
    endscreen.classList.remove('hidden');
    // While this screen is up, the start screen's "click to continue" layer
    // must stay away (hud.css): it lies on top of everything, so a click on
    // one of these buttons landed on it instead and captured the mouse again
    // (Cyril, 2026-11-15: "I cannot press anything in that window").
    document.body.classList.add('mission-over');
  }
  function hideEnd() {
    endscreen.classList.add('hidden');
    document.body.classList.remove('mission-over');
  }

  return { update, say, show, showCard, hideCard, showEnd, hideEnd, root };
}
