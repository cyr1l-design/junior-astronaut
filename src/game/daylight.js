// Day, night and Jupiter's eclipse, as light in the 3D world.
//
// The Sun's path is worked out from the sky that was already there: it is
// the one circle across the sky that passes through the Sun's place in the
// first view AND through Jupiter. That has to be so on Europa: Jupiter never
// moves in the sky, and once every Europa day the Sun passes behind it
// (references/europa.md section 12). The length of the eclipse is not a
// number we chose: the Sun crosses Jupiter's 12.2-degree disc at 360 degrees
// per 85 hours, which comes to about 2.9 hours.
//
// By day the one shadow-casting light is the Sun. At night the same light is
// re-aimed to come from Jupiter, which is nearly "full" around midnight and
// lights the ice (real; how bright we draw it is stylised).

import * as THREE from 'three';
import { SKY, LAYOUT } from '../world/layout.js';
import { ICE_TEX, heightAt } from '../world/terrain.js';
import { CAVE_LIGHT } from '../world/ice.js';
import { RULES } from './rules.js';

const SUN_STRENGTH = 2.9; // the Sun's light at full day (as the first scene was tuned)
const JUPITER_STRENGTH = 0.95; // Jupiter's light when it is full
const SUN_COLOUR = new THREE.Color(0xfff6ea);
const JUPITER_COLOUR = new THREE.Color(0xffe2bd);
const TABLE = 340; // samples of "is the Sun hidden by the land?" over one day

const smooth = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

export function createDaylight({ sun, jupiterShine, hemi, sky }) {
  const DAY = RULES.dayHours;
  const J = SKY.jupiterDir.clone().normalize();
  const S0 = SKY.sunDir.clone().normalize();

  // The circle the Sun travels: e0 is where it rises, e1 its highest point.
  const pole = new THREE.Vector3().crossVectors(S0, J).normalize();
  if (pole.y < 0) pole.negate();
  const e0 = new THREE.Vector3().crossVectors(new THREE.Vector3(0, 1, 0), pole).normalize();
  const e1 = new THREE.Vector3().crossVectors(pole, e0).normalize();
  if (e1.y < 0) e1.negate();
  const angleOf = (v) => Math.atan2(v.dot(e1), v.dot(e0));
  if (angleOf(J) < angleOf(S0)) e0.negate(); // the Sun must reach Jupiter AFTER the first view
  const startAngle = angleOf(S0);
  const jupiterAngle = angleOf(J);
  const jupiterHalf = THREE.MathUtils.degToRad(SKY.jupiterAngularDiameterDeg / 2);

  const skyTimes = {
    startHour: (startAngle / (Math.PI * 2)) * DAY,
    eclipseMidHour: (jupiterAngle / (Math.PI * 2)) * DAY,
    eclipseHalfHours: (jupiterHalf / (Math.PI * 2)) * DAY,
  };

  const sunDirAt = (hourOfDay, out = new THREE.Vector3()) => {
    const a = (hourOfDay / DAY) * Math.PI * 2;
    return out.copy(e0).multiplyScalar(Math.cos(a)).addScaledVector(e1, Math.sin(a));
  };

  // Is the Sun hidden by the land, seen from the solar panels? Walk along the
  // line toward the Sun and see whether the ground rises above it.
  const { solarArray } = LAYOUT;
  const eye = { x: solarArray.x, z: solarArray.z, y: heightAt(solarArray.x, solarArray.z) + 3 };
  const dir = new THREE.Vector3();
  function clearOfLand(hourOfDay) {
    sunDirAt(hourOfDay, dir);
    if (dir.y <= 0.004) return 0;
    for (let d = 8; d < 2400; d *= 1.045) {
      if (heightAt(eye.x + dir.x * d, eye.z + dir.z * d) > eye.y + dir.y * d) return 0;
    }
    return 1;
  }
  const table = new Float32Array(TABLE);
  for (let i = 0; i < TABLE; i++) table[i] = clearOfLand(((i + 0.5) / TABLE) * DAY);
  // Soften the on/off edges a little (the Sun doesn't snap out behind a ridge).
  const soft = new Float32Array(TABLE);
  for (let i = 0; i < TABLE; i++) {
    soft[i] = (table[(i + TABLE - 1) % TABLE] + 2 * table[i] + table[(i + 1) % TABLE]) / 4;
  }
  const landAt = (hourOfDay) => {
    const f = ((((hourOfDay % DAY) + DAY) % DAY) / DAY) * TABLE - 0.5;
    const i = Math.floor(f);
    const t = f - i;
    return soft[(i + TABLE) % TABLE] * (1 - t) + soft[(i + 1 + TABLE) % TABLE] * t;
  };
  // 0 = the Sun is clear of Jupiter, 1 = fully behind it.
  const eclipseAt = (hourOfDay) => {
    const d = Math.abs(hourOfDay - skyTimes.eclipseMidHour);
    return 1 - smooth(skyTimes.eclipseHalfHours - 0.12, skyTimes.eclipseHalfHours + 0.12, d);
  };
  // How much direct sunlight reaches the base: 0 (none) to 1 (full).
  const sunlightAt = (hourOfDay) => landAt(hourOfDay) * (1 - eclipseAt(hourOfDay));

  // When the land lets the Sun through, for the notes and the clock.
  let up = -1;
  let down = -1;
  for (let i = 0; i < TABLE; i++) {
    const h = ((i + 0.5) / TABLE) * DAY;
    if (table[i] && up < 0) up = h;
    if (table[i]) down = h;
  }
  skyTimes.sunUpFrom = up;
  skyTimes.sunUpUntil = down;

  // --- Applying it to the world, every frame --------------------------------
  const sunDir = S0.clone();
  const lightDir = S0.clone(); // where the shadow-casting light comes from right now
  const lastShadowDir = new THREE.Vector3();
  let nightBlend = 0; // 0 = the main light is the Sun, 1 = it is Jupiter
  const hemiBase = hemi.intensity;
  const sunDistance = sky.sun.position.length(); // how far away the sky is drawn
  const info = { sunlight: 1, eclipse: 0, jupiterLit: 0.5, sunHeightDeg: 17, night: false };

  // Returns true when the shadows need redrawing (the light has moved).
  function update(hourOfDay, realDt) {
    sunDirAt(hourOfDay, sunDir);
    const ecl = eclipseAt(hourOfDay);
    const light = sunlightAt(hourOfDay);
    // How much of Jupiter's face is lit, seen from here: none when the Sun is
    // beside or behind it, all of it when the Sun is on the far side of the sky.
    const lit = (1 - sunDir.dot(J)) / 2;
    const sunSoon = sunlightAt(hourOfDay + 0.6) > 0.02;
    const night = light <= 0.02;
    const want = night && !sunSoon ? 1 : 0;
    // Only hand the light over to Jupiter once the Sun's light is fully gone.
    if (!night) nightBlend = 0;
    else nightBlend += (want - nightBlend) * Math.min(1, realDt * 1.6);

    if (!night) {
      lightDir.copy(sunDir);
      sun.color.copy(SUN_COLOUR);
      sun.intensity = SUN_STRENGTH * light;
    } else {
      lightDir.copy(J);
      sun.color.copy(JUPITER_COLOUR);
      sun.intensity = JUPITER_STRENGTH * lit * nightBlend;
    }
    jupiterShine.intensity = JUPITER_STRENGTH * lit * (1 - nightBlend) * 0.7;
    hemi.intensity = hemiBase * (0.22 + 0.5 * light + 0.28 * lit * (1 - light));

    // The ice's bounced light, and the cave's glow, follow the daylight.
    ICE_TEX.uIceDay.value = light + (1 - light) * (0.08 + 0.34 * lit * nightBlend);
    ICE_TEX.uIceAway.value.set(-lightDir.x, 0, -lightDir.z).normalize();
    CAVE_LIGHT.uSunDir.value.copy(sunDir);
    CAVE_LIGHT.uDay.value = light + (1 - light) * 0.25 * lit;

    // The sky: Jupiter's and Io's phase, the ring of light during the
    // eclipse, and the Sun itself.
    sky.jupiter.material.uniforms.uSunDir.value.copy(sunDir);
    sky.jupiter.material.uniforms.uBehind.value = ecl;
    sky.io.material.uniforms.uSunDir.value.copy(sunDir);
    sky.sun.position.copy(sunDir).multiplyScalar(sunDistance);
    sky.sun.material.opacity = (1 - ecl) * smooth(-0.03, 0.0, sunDir.y);
    sky.sun.visible = sky.sun.material.opacity > 0.01;

    info.sunlight = light;
    info.eclipse = ecl;
    info.jupiterLit = lit;
    info.night = night;
    info.sunHeightDeg = THREE.MathUtils.radToDeg(Math.asin(sunDir.y));

    // Redraw the shadows whenever the light has moved at all: in practice
    // every frame while the clock runs by day (the Sun crosses about half a
    // degree a second). It used to wait for a tenth of a degree, which made
    // long shadows move in visible jumps five times a second.
    if (lightDir.angleTo(lastShadowDir) > 0.00002) {
      lastShadowDir.copy(lightDir);
      return true;
    }
    return false;
  }

  return { update, sunlightAt, eclipseAt, sunDirAt, skyTimes, lightDir, sunDir, info };
}
