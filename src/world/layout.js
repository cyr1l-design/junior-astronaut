// Where everything stands. 1 unit = 1 metre. +X = east, -Z = north, +Y = up.
// Laid out from Cyril's two reference pictures (2026-11-14):
//   - the FIRST VIEW: the player stands south of the base and looks north.
//     Left: the cave ridge. Left of centre: the habitat, solar array in front
//     of it. Behind: the reactor. Right: spool and cryobot. Far right: canyon
//     and chaos slabs. Above: Jupiter.
//   - BEHIND THE BASE (looking south): a big ice massif.
// Gameplay depends on these relationships (see design/FIRST-SCENE-BRIEF.md):
//   - the cable from the reactor to the spool crosses the main red fault line
//     ("Spool Linea"), which is what the "sideways tide" event strains;
//   - the cave is a walk away from the habitat (radiation shelter, but cold);
//   - the canyon is a backdrop, glimpsed through a gap in its craggy rim;
//     the player can't walk onto the rim.

import * as THREE from 'three';

export const LAYOUT = {
  habitat: { x: 0, z: 0, radius: 7, doorAngleDeg: 45 }, // door and stairs face south-east, toward the spawn
  solarArray: { x: -15, z: 13, cols: 4, rows: 3 },
  reactor: { x: 26, z: -30, radius: 2 }, // set apart from the habitat
  cableSpool: { x: 28, z: 22 },
  cryobot: { x: 40, z: 24 },
  cave: { x: -50, z: -30, radius: 16, mouthAngleDeg: -15 }, // mouth faces east, a little south
  // The cave ridge: a ridge arm west of the base, with the cave at its foot.
  // It is NOT endless: it tapers away at northEnd and runs south into the massif.
  // eastRun / westRun: how far its slope runs out from the crest on the base
  // side and on the far side.
  westRidge: { centerX: -104, height: 64, eastRun: 62, westRun: 85, northEnd: -175 },
  // The massif behind (south of) the base. Europa has no true mountains: its
  // tallest landforms are a few hundred metres, so this one stays in that range.
  massif: { x: -30, z: 350, height: 170, radius: 240 },
  // The canyon: the trough of a double ridge to the east. Backdrop only.
  // farRidge: the second crest beyond it (real double ridges are 100-300 m
  // tall; ours stays lower so it doesn't swamp the view).
  // The near rim is a broken, craggy low ridge standing rimBack metres back
  // from the canyon's edge, there for its looks (Cyril, 2026-11-14: looks
  // first; nobody needs to walk there). notchZ: where a gap in it lets you
  // see through to the canyon's far wall. walkLimit: the player stops this
  // many metres short of the rim's crest, at its foot.
  canyon: { centerX: 100, depth: 38, halfWidth: 22, rim: 7, farRidge: 34, rimBack: 12, notchZ: 10, walkLimit: 10 },
  basePad: { x: 12, z: 4, inner: 40, outer: 62 }, // levelled ground under the outpost
  // A big natural arch of ice in the south-east corner, where the craggy rim
  // ends and the massif begins (Cyril, 2026-11-15: that corner was "a little
  // boring"; his idea: "some sort of arch"). It springs from the end of the
  // crags and comes down on the mountain's foot. spanDeg: which way its two
  // feet lie from each other, so that the opening faces the base.
  // Imagined: nothing like it has been seen on Europa (say so in "What's real?").
  iceArch: { x: 60, z: 126, span: 42, height: 28, spanDeg: -26 },
  playRadius: 240,
  spawn: { x: 20, z: 58, lookAtX: 11, lookAtY: 17, lookAtZ: -42 },
};

// Main red fault lines (lineae): z = slope * x + offset + wobble. The ground
// height and the ground shader are both generated from this list, so the
// groove and its red salt always line up. The tide event uses the first one.
export const LINEAE = [
  { name: 'Spool Linea', slope: 0.9, offset: -22, wobbleAmp: 5, wobbleFreq: 0.02, width: 7 },
  { name: 'Far Linea', slope: -0.25, offset: -95, wobbleAmp: 10, wobbleFreq: 0.013, width: 12 },
];

// Sky directions (unit vectors, world space). Jupiter never moves in Europa's
// sky (tidally locked). The Sun moves over the 85-hour Europa day; this is the
// first scene's moment: Sun low in the east, Jupiter ~90 degrees away, so
// Jupiter shows as half lit (lit side facing the Sun).
export const SKY = {
  jupiterDir: new THREE.Vector3(-0.22, 0.42, -1).normalize(),
  jupiterAngularDiameterDeg: 12.2, // real, from NSSDC radii (references/europa.md section 1)
  ioDir: new THREE.Vector3(0.05, 0.6, -1).normalize(), // Io stays within ~39 degrees of Jupiter
  ioAngularDiameterDeg: 0.6, // 0.5 to 0.84 depending on where Io is (our arithmetic)
  // About 17 degrees up. It was about 10: so low that the far crest's shadow
  // covered most of the base and the ground only caught a glancing light,
  // which made the whole scene look dim and flat. Still low enough for long
  // shadows; Jupiter's phase barely changes (the Sun-Jupiter angle moves ~3 degrees).
  sunDir: new THREE.Vector3(1, 0.32, -0.22).normalize(),
  sunAngularDiameterDeg: 0.1, // a fifth of what we see from Earth
  auroraCenterDir: new THREE.Vector3(-1, 0, -0.35).normalize(),
};
