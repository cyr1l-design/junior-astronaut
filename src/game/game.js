// Ties the mission together: the rules (sim.js), the world (where the player
// is standing, what the sky is doing, how the cryobot looks) and the screen
// (hud.js).
//
// How the player acts (Cyril, 2026-11-14): walk up to a thing and HOLD a key.
//   - Inside the habitat (hold E at the foot of its stairs to go in): E to
//     step out, Q to change the power plan, R for a battery boost, F to fill
//     the walls with water when a storm is forecast.
//   - At the cryobot: E to start it; then whatever its situation offers
//     (sample or steer round the salty water, cutting jets, bake the camera).
//   - At the cable spool, when the tide is coming: E to pay out slack, Q to
//     lock the spool.
//   - At the green beacon by the crack: E to collect the ocean chemicals.
//
// When a situation begins, its card is shown and the mission stands still
// until the player presses F, so a child has time to read the choices.

import * as THREE from 'three';
import { LAYOUT, LINEAE } from '../world/layout.js';
import { heightAt } from '../world/terrain.js';
import { cryobotFx } from '../world/base.js';
import { createSim } from './sim.js';
import { createHUD } from './hud.js';
import { RULES } from './rules.js';
import { SITUATIONS } from './situations.js';
import { createOcean } from '../ocean/ocean.js';
import { createTraining } from './training.js';
import { createVoice, NOTICES } from './voice.js';
import { createPrelude } from './prelude.js';
import { createWhatsReal } from './whats-real.js';

const EYE = 1.7;
const PROBE_DOWN = -16.5; // metres the probe is lowered once the dig starts (out of sight down the hole)
const KEYS = { KeyE: 'E', KeyQ: 'Q', KeyR: 'R', KeyF: 'F' };
const PLAN_ORDER = ['dig', 'share', 'warm'];

export function createGame({ scene, camera, player, audio, sky, daylight }) {
  const sim = createSim({ sky: daylight.skyTimes, sunlightAt: daylight.sunlightAt });
  const hud = createHUD(sim);
  const controls = player.controls;

  // --- Places ---------------------------------------------------------------
  const hab = LAYOUT.habitat;
  const doorA = THREE.MathUtils.degToRad(hab.doorAngleDeg);
  const doorDir = { x: Math.cos(doorA), z: Math.sin(doorA) };
  const doorYaw = Math.atan2(-doorDir.x, -doorDir.z);
  const apothem = hab.radius * Math.cos(Math.PI / 8);
  const along = (d) => ({ x: hab.x + doorDir.x * d, z: hab.z + doorDir.z * d });
  const doorSpot = along(hab.radius + 6.3); // the foot of the stairs
  const windowSpot = along(apothem + 1.85); // just outside the door's round window
  const windowY = heightAt(hab.x, hab.z) + 2.2 + 1.95;
  const cryo = LAYOUT.cryobot;
  const spool = LAYOUT.cableSpool;
  const cave = LAYOUT.cave;
  // Where the ocean chemicals show up: on the main red crack, a long walk
  // north-west of the habitat.
  const fault = LINEAE[0];
  const crackX = -24; // open, level ground about 64 m from the habitat door (checked by a walking flood-fill)
  const crack = { x: crackX, z: fault.slope * crackX + fault.offset + fault.wobbleAmp * Math.sin(fault.wobbleFreq * crackX) };

  // The green beacon that marks them: a thin pillar of light and a ring on
  // the ice, there only while the chemicals are.
  const beacon = new THREE.Group();
  const beaconColour = new THREE.Color(0x5dffa8).multiplyScalar(2.2); // bright enough to glow
  const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 26, 8), new THREE.MeshBasicMaterial({ color: beaconColour, transparent: true, opacity: 0.85 }));
  pillar.position.y = 13;
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.07, 6, 40), new THREE.MeshBasicMaterial({ color: beaconColour }));
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.12;
  beacon.add(pillar, ring);
  beacon.position.set(crack.x, heightAt(crack.x, crack.z), crack.z);
  beacon.visible = false;
  if (scene) scene.add(beacon);

  // A marker for wherever the player should go next: a thin pillar of light
  // in the world, and (hud.js) a tag on screen with an arrow when it is out
  // of view. Yellow during the training, blue in the mission.
  const wayPillar = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 30, 8), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7, depthWrite: false }));
  const wayRing = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.08, 6, 36), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthWrite: false }));
  wayRing.rotation.x = Math.PI / 2;
  const wayMark = new THREE.Group();
  wayPillar.position.y = 15;
  wayRing.position.y = 0.15;
  wayMark.add(wayPillar, wayRing);
  wayMark.visible = false;
  if (scene) scene.add(wayMark);
  const WAY_TRAIN = new THREE.Color(0xffd24a).multiplyScalar(2.2);
  const WAY_MISSION = new THREE.Color(0x6fdcff).multiplyScalar(1.8);

  let inside = false; // in the habitat
  let begun = false; // has the player clicked into the game yet?
  let wasEnded = false;
  let card = null; // the situation whose card is open (the mission stands still)
  let ocean = null; // the ending under the ice, built the first time it is needed
  let diving = false; // is the ending playing?
  let probeY = 0;
  let glow = 0.5;
  let clockT = 0;
  const euler = new THREE.Euler(0, 0, 0, 'YXZ');

  function zoneNow() {
    if (inside) return 'habitat';
    const p = player.state();
    if (Math.hypot(p.x - cave.x, p.z - cave.z) < cave.radius - 1) return 'cave';
    return 'outside';
  }
  const near = (place, r) => {
    const p = player.state();
    return Math.hypot(p.x - place.x, p.z - place.z) < r;
  };

  // --- Going in and out of the habitat ---------------------------------------
  function enterHabitat(quiet) {
    inside = true;
    camera.position.set(windowSpot.x, windowY, windowSpot.z);
    camera.lookAt(windowSpot.x + doorDir.x * 30, windowY - 3.5, windowSpot.z + doorDir.z * 30);
    if (!quiet) audio.signal('hatch');
  }
  function leaveHabitat() {
    inside = false;
    const out = along(hab.radius + 6.6);
    camera.position.set(out.x, heightAt(out.x, out.z) + EYE, out.z);
    camera.lookAt(out.x + doorDir.x * 30, heightAt(out.x, out.z) + EYE, out.z + doorDir.z * 30);
    audio.signal('hatch');
  }
  function toSpawn() {
    inside = false;
    const { spawn } = LAYOUT;
    camera.position.set(spawn.x, heightAt(spawn.x, spawn.z) + EYE, spawn.z);
    camera.lookAt(spawn.lookAtX, spawn.lookAtY, spawn.lookAtZ);
  }
  // Inside, you look out of the door's window: the view can turn only so far.
  function holdWindowView() {
    euler.setFromQuaternion(camera.quaternion);
    let turn = euler.y - doorYaw;
    turn = Math.atan2(Math.sin(turn), Math.cos(turn));
    euler.y = doorYaw + THREE.MathUtils.clamp(turn, -0.95, 0.95);
    euler.x = THREE.MathUtils.clamp(euler.x, -0.55, 0.5);
    euler.z = 0;
    camera.quaternion.setFromEuler(euler);
    camera.position.set(windowSpot.x, windowY, windowSpot.z);
  }

  // --- The training before the mission (training.js) ---------------------------
  let voice = null; // the guide's voice (voice.js); made just below, once the training's words exist
  const training = createTraining({ camera, player, sim, places: { cryobot: cryo, door: doorSpot }, isInside: () => inside, isSpeaking: () => !!voice && voice.speaking });
  voice = createVoice({ audio, trainingLines: training.lines });
  // A short message on screen, spoken too if it has been recorded.
  const tell = (id, kind, sec) => { hud.say(NOTICES[id], kind, sec); voice.say(id); };
  let spokenStep = null; // the training line last handed to the voice
  // The intro video and the dangers briefing, played once before the game.
  const prelude = createPrelude({ camera, daylight, sky, voice, restore: () => toSpawn() });
  let trained = false; // has this player been through (or skipped) it?
  // "What's real?" (whats-real.js): press I. The mission stands still while
  // it is open, like a situation's card.
  const real = createWhatsReal(hud.root);
  addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (diving && !ocean.finished) return; // not during the dive itself
    if (e.code === 'KeyI' && begun && !prelude.active && (controls.isLocked || real.isOpen || sim.state.ended)) { real.toggle(); return; }
    if (!real.isOpen) return;
    if (e.code === 'KeyD' || e.code === 'ArrowRight') real.next();
    else if (e.code === 'KeyA' || e.code === 'ArrowLeft') real.prev();
  });

  // Where the marker points during the mission: the place of whatever needs
  // the player most. Things that can't wait are always marked; optional ones
  // only for a few hours after they begin, so the marker doesn't nag.
  function missionWay() {
    const s = sim.state;
    const fresh = (id) => s.hour - (s[id].since || 0) < 5;
    if (!s.started) return { ...cryo, label: 'Cryobot: switch it on' };
    if (s.brine.stage === 'open') return { ...cryo, label: 'Cryobot: salty water' };
    if (s.tide.stage === 'open' && (sim.tideNow() || s.strain > 0.02 || sim.tideIn() < 1.5)) return { ...spool, label: `Cable spool: strain ${Math.round(s.strain * 100)}%` };
    if (s.salt.stage === 'open' && !s.salt.jets && fresh('salt')) return { ...cryo, label: 'Cryobot: salt layer' };
    if (s.sensor.stage === 'open' && fresh('sensor')) return { ...cryo, label: 'Cryobot: clouded camera' };
    if (s.crack.stage === 'open') return { ...crack, label: 'Ocean chemicals', own: true };
    if (s.tide.stage === 'open') return { ...spool, label: 'Cable spool' };
    return null;
  }
  const wayPos = new THREE.Vector3();
  const wayDir = new THREE.Vector3();
  const camDir = new THREE.Vector3();
  // The marker's place on screen: { label, dist, x, y } when in view, or
  // { label, dist, side: 'left' | 'right' } when it is off to one side.
  function wayView() {
    const way = !begun ? null : training.active ? training.way : card || diving || sim.state.ended ? null : missionWay();
    wayMark.visible = !!way && !way.own;
    if (!way) return null;
    const ground = heightAt(way.x, way.z);
    wayMark.position.set(way.x, ground, way.z);
    const c = training.active ? WAY_TRAIN : WAY_MISSION;
    wayPillar.material.color.copy(c);
    wayRing.material.color.copy(c);
    wayPillar.material.opacity = 0.5 + 0.2 * Math.sin(clockT * 3);
    const dist = Math.hypot(way.x - camera.position.x, way.z - camera.position.z);
    wayPos.set(way.x, ground + 4.5, way.z);
    wayDir.copy(wayPos).sub(camera.position);
    camera.getWorldDirection(camDir);
    const ahead = wayDir.dot(camDir) > 0;
    wayPos.project(camera);
    const view = { label: way.label, dist, train: training.active };
    if (ahead && Math.abs(wayPos.x) < 0.9 && Math.abs(wayPos.y) < 0.86) {
      view.x = (wayPos.x * 0.5 + 0.5) * innerWidth;
      view.y = (-wayPos.y * 0.5 + 0.5) * innerHeight;
    } else {
      // Which way to turn: is the place to the right or the left of where we look?
      view.side = camDir.x * wayDir.z - camDir.z * wayDir.x > 0 ? 'right' : 'left';
    }
    return view;
  }

  // --- What can be done right here --------------------------------------------
  // Each action: { id, key, label, hold (seconds), run }.
  const battLeft = (cost) => {
    const left = sim.state.battery - cost;
    return left < RULES.battery.redLine ? ` · DROPS BELOW THE RED LINE` : '';
  };
  function actionsNow() {
    const s = sim.state;
    const list = [];
    const say = (text, kind, sec) => hud.say(text, kind, sec);
    if (inside) {
      list.push({ id: 'out', key: 'E', label: 'step outside', hold: 0.9, run: leaveHabitat });
      const next = PLAN_ORDER[(PLAN_ORDER.indexOf(s.plan) + 1) % PLAN_ORDER.length];
      const P = RULES.plans;
      const why = { dig: 'fastest dig, the crew gets cold', share: 'half-speed dig, some warmth', warm: 'the crew warms, the cryobot’s hole freezes' };
      list.push({
        id: 'plan', key: 'Q', label: `power plan: ${P[s.plan].name} → ${P[next].name} (${why[next]})`, hold: 0.7,
        next, why: why[next], // for the lever on the control desk (hud.js)
        run: () => { sim.setPlan(next); audio.signal('tick'); if (!training.active) say(`Power plan: ${P[next].name}. ${why[next][0].toUpperCase()}${why[next].slice(1)}.`, 'info', 6); },
      });
      if (!sim.boosted()) {
        const B = RULES.battery;
        list.push({
          id: 'boost', key: 'R', label: `boost: ${B.boostHours} hours of full digging AND warmth (−${B.boost}% battery${battLeft(B.boost)})`, hold: 1.0,
          run: () => { sim.boost(); audio.signal('done'); say(`Boost: for ${B.boostHours} hours the battery runs both the cryobot and the heaters at full.`, 'good', 7); },
        });
      }
      if (s.storm.stage === 'open' && !s.storm.walls) {
        const W = RULES.storm.wallsBattery;
        list.push({
          id: 'walls', key: 'F', label: `fill the walls with water against the storm (−${W}% battery${battLeft(W)})`, hold: 1.2,
          run: () => { sim.choose('storm', 'walls'); audio.signal('done'); say('Ice is melting into the walls. Water will block most of the storm in here.', 'good', 8); },
        });
      }
      return list;
    }
    if (near(doorSpot, 3.4)) {
      list.push({ id: 'in', key: 'E', label: 'go inside the habitat', hold: 0.9, run: () => enterHabitat() });
    } else if (near(cryo, 7)) {
      if (!s.started) {
        list.push({
          id: 'start', key: 'E', label: 'start the cryobot', hold: 1.4,
          run: () => { sim.start(); audio.signal('done'); if (!training.active) say('The dig has begun. A real cryobot would need about 3 years: ours is sped up.', 'good', 8); },
        });
      } else if (s.brine.stage === 'open') {
        const B = RULES.brine;
        list.push({
          key: 'E', label: `take a sample (the dig stops ${B.sampleHours} hours, the hole freezes partly)`, hold: 1.2,
          run: () => { sim.choose('brine', 'sample'); audio.signal('done'); say(`Taking a sample: it could hold signs of life. The dig stands still for ${B.sampleHours} hours.`, 'good', 8); },
        });
        list.push({
          key: 'Q', label: `steer round it (−${B.detourBattery}% battery${battLeft(B.detourBattery)}, no sample)`, hold: 1.2,
          run: () => { sim.choose('brine', 'detour'); audio.signal('tick'); say('The cryobot steered round the pocket on battery power and is digging again. No sample.', 'info', 8); },
        });
      } else {
        if (s.salt.stage === 'open' && !s.salt.jets) {
          const J = RULES.salt.jetsBattery;
          list.push({
            key: 'E', label: `cutting jets through the salt (−${J}% battery${battLeft(J)})`, hold: 1.2,
            run: () => { sim.choose('salt', 'jets'); audio.signal('done'); say('The jets are cutting through the salt at full speed.', 'good', 7); },
          });
        }
        if (s.sensor.stage === 'open') {
          const S = RULES.sensor;
          list.push({
            key: 'Q', label: `bake the camera clear (habitat heaters off for ${S.bakeHours} hours)`, hold: 1.2,
            run: () => { sim.choose('sensor', 'bake'); audio.signal('done'); say(`The habitat’s heaters are baking the camera clear. For ${S.bakeHours} hours it will be cold in there.`, 'info', 8); },
          });
        }
      }
    } else if (s.tide.stage === 'open' && near(spool, 6)) {
      if (s.strain >= 0.03) {
        list.push({
          key: 'E', label: `pay out slack (cable strain ${Math.round(s.strain * 100)}%)`, hold: 1.0,
          run: () => { sim.choose('tide', 'slack'); audio.signal('tick'); },
        });
      }
      list.push({
        key: 'Q', label: 'lock the spool (cable can’t snap, dig a third slower for good)', hold: 1.6,
        run: () => { sim.choose('tide', 'brake'); audio.signal('done'); say('The spool is locked. The cable will stretch instead of snapping, and carry less power from now on.', 'info', 8); },
      });
    } else if (s.crack.stage === 'open' && near(crack, 4)) {
      list.push({
        key: 'E', label: 'collect the ocean chemicals', hold: 1.5,
        run: () => { sim.choose('crack', 'collect'); audio.signal('done'); say('Collected: a life clue. Scientists will search it for signs of what lives in the ocean.', 'good', 8); },
      });
    }
    return list;
  }

  // Holding a key: it must stay down for the whole of an action's time, and
  // be let go before it can start another.
  const down = new Set();
  const held = { E: 0, Q: 0, R: 0, F: 0 };
  const spent = { E: false, Q: false, R: false, F: false };
  addEventListener('keydown', (e) => {
    const k = KEYS[e.code];
    if (!k) return;
    if (k === 'F' && real.isOpen && !e.repeat) { real.close(); spent.F = true; return; } // F also closes "What's real?"
    if (real.isOpen) return; // no actions while reading
    if (k === 'F' && card && !diving && !e.repeat) { closeCard(); spent.F = true; return; } // "carry on" closes a card
    if (k === 'F' && training.active && !e.repeat) { trainingResult(training.confirm()); spent.F = true; return; }
    down.add(k);
  });
  addEventListener('keydown', (e) => {
    if (e.code === 'KeyT' && training.active && controls.isLocked && !e.repeat) { training.skip(); trainingResult('end'); }
  });
  // What happens when a training step is completed, or the training ends.
  function trainingResult(result) {
    if (result === 'next') audio.signal('done');
    if (result === 'end' || (!training.active && !trained)) {
      trained = true;
      audio.signal('done');
      forgetAnnouncements();
      voice.stop('train-');
      tell(sim.state.started ? 'clock-start' : 'clock-start-skipped', 'good', 6);
    }
  }
  addEventListener('keyup', (e) => {
    const k = KEYS[e.code];
    if (k) { down.delete(k); spent[k] = false; held[k] = 0; }
  });
  addEventListener('blur', () => down.clear());

  function runHolds(dt, actions) {
    const view = [];
    for (const a of actions) {
      if (down.has(a.key) && !spent[a.key]) {
        held[a.key] += dt;
        if (held[a.key] >= a.hold) {
          held[a.key] = 0;
          spent[a.key] = true;
          a.run();
          return []; // what can be done here has just changed: ask again next frame
        }
      } else held[a.key] = 0;
      view.push({ id: a.id, key: a.key, label: a.label, progress: held[a.key] / a.hold, next: a.next, why: a.why });
    }
    for (const k of Object.keys(held)) if (!actions.some((a) => a.key === k)) held[k] = 0;
    return view;
  }

  // --- Situation cards ----------------------------------------------------------
  function openCard(id) {
    card = id;
    const def = SITUATIONS[id];
    hud.showCard({ title: def.title, story: def.story(sim), real: def.real, where: def.where, options: def.options });
    voice.say(`card-${id}`, true);
    audio.signal(id === 'crack' ? 'done' : 'alarm');
  }
  function closeCard() {
    card = null;
    hud.hideCard();
    voice.stop('card-');
  }

  // --- Short messages when something changes ---------------------------------------
  const was = { plasma: 0, eclipse: 0, sun: 1, low: false, cold: false, dose: 0, km: 0, tight: false, freeze: 0, brine: 'ahead', sensor: 'ahead', crack: 'ahead', salt: 'ahead', boosted: false, storm: false };
  function announce() {
    const s = sim.state;
    const p = sim.plasma();
    const ecl = sim.eclipse();
    const sun = sim.sunlight();
    const outside = s.zone === 'outside';

    // Ordinary crossings are a rhythm in the background: one quiet line, and
    // an alarm only if you are caught in the open.
    if (p > 0.25 && was.plasma <= 0.25 && !sim.inStorm()) {
      if (outside) { tell('plasma-open', 'plasma'); audio.signal('alarm'); }
      else tell('plasma', 'plasma', 4);
    }
    was.plasma = p;
    const storm = sim.inStorm() && p > 0.5;
    if (storm && !was.storm) {
      tell(outside ? 'storm-open' : 'storm', 'warn', 8);
      audio.signal('alarm');
    }
    was.storm = storm;

    if (ecl > 0.5 && was.eclipse <= 0.5) tell('eclipse-start', 'warn', 8);
    else if (ecl < 0.5 && was.eclipse >= 0.5) tell('eclipse-end', 'good');
    else if (ecl < 0.05 && sun < 0.5 && was.sun >= 0.5) tell('night', 'warn', 9);
    else if (ecl < 0.05 && sun > 0.5 && was.sun <= 0.5) tell('sunrise', 'good');
    was.eclipse = ecl;
    was.sun = sun;

    const low = s.battery < RULES.battery.redLine;
    if (low && !was.low) {
      tell('battery-low', 'warn', 10);
      audio.signal('alarm');
    }
    was.low = low;

    const cold = s.warmth < RULES.heat.warnAt;
    if (cold && !was.cold) {
      tell('cold', 'warn', 8);
      audio.signal('alarm');
    }
    was.cold = cold;

    for (const mark of [50, 75, 90]) {
      if (s.dose >= mark && was.dose < mark) tell(`dose-${mark}`, mark >= 75 ? 'warn' : 'plasma');
    }
    was.dose = s.dose;

    const freezeMark = s.refreeze >= 0.75 ? 75 : s.refreeze >= 0.5 ? 50 : 0;
    if (freezeMark > was.freeze) {
      tell(`freeze-${freezeMark}`, 'warn', 8);
      audio.signal('alarm');
    }
    was.freeze = freezeMark;

    const tight = s.strain > 0.7;
    if (tight && !was.tight) {
      tell('cable-tight', 'warn', 8);
      audio.signal('alarm');
    }
    was.tight = tight;

    if (s.brine.stage === 'done' && was.brine === 'sampling') tell('sample-done', 'good', 8);
    was.brine = s.brine.stage;
    if (s.sensor.stage === 'done' && was.sensor === 'baking') tell('camera-clear', 'good', 7);
    was.sensor = s.sensor.stage;
    if (s.crack.stage === 'done' && was.crack === 'open' && sim.state.cluesMissed > 0 && s.hour >= s.crack.until) tell('crack-gone', 'info', 7);
    was.crack = s.crack.stage;
    if (s.salt.stage === 'done' && was.salt === 'open') tell('salt-through', 'good', 6);
    was.salt = s.salt.stage;
    if (!sim.boosted() && was.boosted) tell('boost-over', 'info', 6);
    was.boosted = sim.boosted();

    const km = Math.floor(s.depthKm / 5) * 5;
    if (km > was.km && km < RULES.iceKm) hud.say(`The cryobot is ${km} km down.`, 'good');
    was.km = km;
  }
  function forgetAnnouncements() {
    const s = sim.state;
    Object.assign(was, {
      plasma: sim.plasma(), eclipse: sim.eclipse(), sun: sim.sunlight(), low: false, cold: false, dose: s.dose,
      km: Math.floor(s.depthKm / 5) * 5, tight: false, freeze: 0, brine: s.brine.stage, sensor: s.sensor.stage,
      crack: s.crack.stage, salt: s.salt.stage, boosted: sim.boosted(), storm: false,
    });
  }

  // --- The end of a mission ----------------------------------------------------
  function onEnd() {
    const ended = sim.state.ended;
    closeCard();
    audio.signal(ended.type === 'breakthrough' ? 'done' : 'alarm');
    voice.say(ended.type === 'breakthrough' ? 'end-win' : `end-${ended.cause}`, true);
    hud.showEnd(ended, {
      onReal: () => real.open(),
      retryLabel: sim.lastCheckpoint,
      onRetry: () => {
        const label = sim.retry();
        // Back at the very start you stand where you first stood; at any
        // later checkpoint you wake up safe inside the habitat.
        if (label.startsWith('the start of the mission')) toSpawn();
        else enterHabitat(true);
        resume();
      },
      onRestart: () => {
        sim.reset();
        toSpawn();
        resume();
      },
    });
    if (controls.isLocked) controls.unlock();
  }
  // Breakthrough: the submersible's dive plays first, then the win card
  // comes up over the living ocean.
  function startDive() {
    if (!ocean) ocean = createOcean({ camera, audio });
    diving = true;
    closeCard();
    voice.stop();
    hud.root.classList.add('cine');
    ocean.start(sim.state.clues, RULES.iceKm);
  }
  function resume() {
    wasEnded = false;
    if (diving) {
      diving = false;
      ocean.stop();
      hud.root.classList.remove('cine');
    }
    probeY = sim.state.started ? PROBE_DOWN : 0;
    forgetAnnouncements();
    closeCard();
    real.close();
    voice.stop();
    hud.hideEnd();
    controls.lock();
  }

  controls.addEventListener('lock', () => {
    if (!begun && !trained) training.begin(); // the very first click into the game
    begun = true;
    hud.show(true);
  });

  // What the reminder under the clock says: the goal, and what is going on.
  function tracker() {
    const s = sim.state;
    if (!s.started) return ['Walk to the cryobot, the tall tripod, and switch it on.'];
    const lines = sim.openSituations().slice(0, 3).map((id) => SITUATIONS[id].status(sim));
    return lines.length ? lines : [`Melt through ${RULES.iceKm} km of ice before your radiation dose reaches the limit.`];
  }

  // --- Every frame --------------------------------------------------------------
  // Returns true when the shadows need redrawing (the light has moved).
  let timeScale = 1; // for tests: makes mission time run faster
  let diveCard = false;
  function update(dt) {
    const s = sim.state;
    voice.update();
    // Before the game: the briefing drives the camera and the sky itself.
    if (prelude.active) return prelude.update(dt);
    if (diving) {
      // The ending runs while the game has the mouse; after the win card is
      // up (which frees the mouse) the ocean simply goes on living behind it.
      if (controls.isLocked || ocean.finished) ocean.update(dt, { E: down.has('E'), F: down.has('F') });
      if (ocean.finished && !diveCard) { diveCard = true; onEnd(); }
      hud.update(dt, { actions: [], tracker: [] });
      return false;
    }
    diveCard = false;
    const playing = begun && controls.isLocked && !s.ended;
    let actions = [];
    if (playing && training.active) {
      // Training: the mission clock stands still, and only the action the
      // step is teaching will work.
      if (inside) holdWindowView();
      sim.state.zone = zoneNow(); // so the display knows where you are while the clock stands still
      trainingResult(training.update(dt));
      // Speak each training line once, as it comes up.
      if (training.voice !== spokenStep) {
        spokenStep = training.voice;
        if (spokenStep) voice.say(spokenStep, true);
      }
      actions = runHolds(dt, actionsNow().filter((a) => training.allows(a.id)));
    } else if (playing && real.isOpen) {
      if (inside) holdWindowView(); // reading "What's real?": the clock stands still
    } else if (playing && !card) {
      if (inside) holdWindowView();
      sim.step((dt * timeScale) / RULES.hourSeconds, zoneNow());
      announce();
      // A situation has just begun: show its card and stop the clock.
      const next = sim.nextCard();
      if (next && !s.ended) openCard(next);
      else actions = runHolds(dt, actionsNow());
    } else if (playing && inside) holdWindowView();
    if (s.ended && !wasEnded) {
      wasEnded = true;
      if (s.ended.type === 'breakthrough') startDive();
      else onEnd();
    }
    return refresh(dt, actions);
  }

  // Bring the world and the screen in line with the mission's state.
  function refresh(dt = 0, actions = []) {
    const s = sim.state;
    clockT += dt;
    const lightMoved = daylight.update(sim.hourOfDay(), dt);

    // The aurora brightens at each plasma crossing, and far more in the
    // storm (false colour: the real glow is ultraviolet).
    const au = sky.aurora.material.uniforms.uIntensity;
    au.value += (0.3 + 1.9 * sim.plasma() - au.value) * Math.min(1, dt * 3 + (dt === 0 ? 1 : 0));

    // The cryobot: the probe goes down the hole when the dig starts, and the
    // hole glows with how hard it is digging.
    const speed = sim.digSpeed();
    const wantGlow = !s.started ? 0.5 : 0.18 + 2.2 * speed;
    glow += (wantGlow - glow) * Math.min(1, dt * 2 + (dt === 0 ? 1 : 0));
    const flicker = speed > 0 ? 1 + 0.07 * Math.sin(clockT * 9) + 0.04 * Math.sin(clockT * 23) : 1;
    cryobotFx.uPower.value = glow * flicker;
    if (cryobotFx.glow) cryobotFx.glow.intensity = 30 * glow * flicker;
    const wantY = s.started ? PROBE_DOWN : 0;
    if (dt === 0) probeY = wantY;
    else probeY += Math.sign(wantY - probeY) * Math.min(Math.abs(wantY - probeY), dt * 1.5);
    if (cryobotFx.probe) cryobotFx.probe.position.y = probeY;

    // The beacon at the crack.
    beacon.visible = s.crack.stage === 'open';
    if (beacon.visible) pillar.material.opacity = 0.65 + 0.25 * Math.sin(clockT * 3);

    real.hint(begun && !s.ended && !card && !real.isOpen);
    hud.update(dt, { actions, tracker: training.active ? [] : tracker(), way: inside ? null : wayView(), training: training.view, parts: training.parts });
    if (inside) wayMark.visible = false;
    return lightMoved;
  }

  return {
    sim, hud, update, refresh, crack, training, voice, prelude, real,
    get inside() { return inside; },
    // The player can't walk while inside the habitat or while a card is open.
    get frozen() { return inside || !!card || diving || real.isOpen; },
    // The ending's own 3D scene while it plays (the main loop draws it
    // instead of the surface), else null.
    get dive() { return diving ? ocean : null; },
    // For tests: play the ending now, with this many life clues.
    startDive(clues) { if (training.active) training.skip(); trained = true; if (clues !== undefined) sim.state.clues = clues; begun = true; hud.show(true); wasEnded = true; sim.state.ended = sim.state.ended || { type: 'breakthrough', hour: sim.state.hour, depthKm: RULES.iceKm }; startDive(); return ocean; },
    get card() { return card; },
    // --- For tests, from the browser console (window.__game.game) ---
    set timeScale(v) { timeScale = v; },
    get timeScale() { return timeScale; },
    // Run the mission forward by this many Europa hours, standing where you
    // are (cards are skipped, as if read at once).
    skip(hours, zone) {
      if (training.active) { training.skip(); trained = true; }
      const step = 0.05;
      for (let t = 0; t < hours && !sim.state.ended; t += step) sim.step(step, zone || zoneNow());
      begun = true;
      hud.show(true);
      if (sim.state.ended && !wasEnded) { wasEnded = true; onEnd(); }
      return refresh(0);
    },
    // Do what holding a key here would do, at once.
    act(key) {
      const a = actionsNow().find((k) => k.key === key);
      if (a) a.run();
      refresh(0);
      return a ? a.label : null;
    },
    actions: () => actionsNow().map((a) => `${a.key}: ${a.label}`),
    openCard, closeCard, enterHabitat, leaveHabitat, toSpawn,
  };
}
