import * as THREE from 'three';
import { fbm } from './noise.js';
import { LAYOUT, LINEAE, SKY } from './layout.js';

const smoothstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// Sharp-crested noise: gives ridgelines and peaks instead of round bumps.
function ridged(x, z, octaves = 4) {
  const v = 1 - Math.abs(2 * fbm(x, z, octaves) - 1);
  return v * v;
}

// Distance (along z) from a point to a linea's centre line.
function lineaDistance(l, x, z) {
  return Math.abs(z - (l.slope * x + l.offset + l.wobbleAmp * Math.sin(x * l.wobbleFreq)));
}

// Ground height at (x, z). The player walks on this exact function, so the
// mesh and the feet always agree. "swells" = false leaves out the small
// hummocks (used only when deciding where loose ice may lie, so adding the
// hummocks didn't shuffle every plate and slab to a new place).
export function heightAt(x, z, swells = true) {
  // Soft swells: smooth, sculpted ice (no wind on Europa, so no dunes).
  let h = 1.3 * fbm(x / 70, z / 70) - 0.65;
  h += 0.5 * fbm(x / 19 + 4.2, z / 23 + 1.7, 3) - 0.25;

  const dist = Math.hypot(x, z);

  // Low domes out on the plain (Europa's real "lenticulae").
  h += 16 * smoothstep(0.6, 0.9, fbm(x / 210 + 40, z / 210 + 17, 3)) * smoothstep(230, 420, dist);

  // The cave mountain: a mountain arm west of the base, with the cave at its
  // foot. Built the same way as the massif behind the base (Cyril: that one
  // "has relief", this one "doesn't look like a mountain"): a sharp crest
  // with peaks, spurs running down toward the base, and crags on the spurs.
  // Its crest stands well back and its slope on the base side is long, so
  // frost can lie on it (a short steep wall came out as a striped blue face).
  // It tapers to nothing at its north end and runs south into the massif. A
  // second crest runs behind it (Europa's ridges are often double).
  const r = LAYOUT.westRidge;
  const ridgeCenter = r.centerX + 12 * Math.sin(z / 70);
  const dr = x - ridgeCenter;
  const along = smoothstep(r.northEnd, r.northEnd + 80, z) * (1 - smoothstep(230, 330, z));
  const rd = Math.abs(dr) / (dr > 0 ? r.eastRun : r.westRun); // 0 on the crest, about 1 at the foot
  let ridgeShape = 0;
  if (rd < 1.25 && along > 0) {
    const rs = smoothstep(1.25, 0.1, rd);
    ridgeShape = rs * rs * along;
    const spurs = ridged(x / 95 + 3.3, z / 62 + 9.1, 4);   // longer across the ridge: they run down to the base
    const crags = ridged(x / 44 + 7.2, z / 44 + 1.4, 3);
    const peaks = 0.66 + 0.6 * fbm(z / 55, 3.1);            // the crest rises and falls
    h += r.height * along * peaks * (rs * rs * (0.36 + 0.64 * spurs) + 0.36 * Math.exp(-rd * rd * 7)) * (0.9 + 0.2 * crags);
    h += along * rs * (8 * ridged(x / 21 + 1.7, z / 21 + 5.3, 3) + 2.6 * ridged(x / 8.5 + 4, z / 8.5 + 2, 2));
    // Buttresses and the gullies between them, running down the slope: they
    // break up the long lower slope, which was one smooth white sheet.
    h += along * 27 * rs * (1 - 0.55 * rs) * (ridged(x / 54 + 5.1, z / 22 + 2.7, 4) - 0.4);
  }
  h += 0.7 * r.height * Math.exp(-Math.pow((dr + 80) / 30, 2)) * along * (0.6 + 0.8 * fbm(z / 60 + 11, 5.2));
  // One spur comes down to the cave, so the cave opens into the mountain's
  // foot instead of standing in front of it. Nothing of it reaches the
  // mouth side (east), where the player walks in.
  {
    const cvs = LAYOUT.cave;
    const d2 = Math.pow(x - (cvs.x - 15), 2) + Math.pow(z - cvs.z, 2);
    if (d2 < 60 * 60) {
      h += 23 * Math.exp(-d2 / (23 * 23)) * smoothstep(cvs.x + 4, cvs.x - 10, x) * (0.8 + 0.4 * ridged(x / 14 + 2, z / 14 + 7, 2));
    }
    // Two low rocky arms reach out from the mountain on either side of the
    // cave mouth, so the cave sits in a small bay of rock (Cyril: the ground
    // beside the cave was "perfectly flat"). They stay clear of the mouth
    // and of the path into it.
    for (const side of [-1, 1]) {
      const armZ = cvs.z + side * 27 + 3 * Math.sin(x / 9 + side);
      const dz = z - armZ;
      if (Math.abs(dz) < 16 && x > cvs.x - 30 && x < cvs.x + 30) {
        const lengthwise = smoothstep(cvs.x + 27, cvs.x + 8, x) * smoothstep(cvs.x - 30, cvs.x - 12, x);
        const across = Math.exp(-Math.pow(dz / 4.2, 2));
        h += lengthwise * across * (3 + 7 * ridged(x / 10 + 3 + side, z / 10 + 6, 3)) * (0.75 + 0.5 * ridged(x / 4.5, z / 4.5 + 2 * side, 2));
      }
    }
  }

  // The massif behind the base: one big broken peak with sharp spurs.
  const m = LAYOUT.massif;
  const md = Math.hypot((x - m.x) * 0.8, z - m.z) / m.radius;
  let massifShape = 0;
  if (md < 1.25) {
    massifShape = smoothstep(1.25, 0.12, md);
    const spurs = ridged(x / 150 + 3, z / 150 + 9, 4);
    const crags = ridged(x / 52 + 7, z / 52 + 1, 3);
    h += m.height * (massifShape * massifShape * (0.38 + 0.62 * spurs) + 0.42 * Math.exp(-md * md * 7)) * (0.9 + 0.2 * crags);
    h += massifShape * (11 * ridged(x / 24 + 1, z / 24 + 5, 3) + 3.5 * ridged(x / 9, z / 9 + 2, 2));
  }

  // East canyon: trough of a double ridge, with raised rims, ragged edges and
  // stepped walls.
  const c = LAYOUT.canyon;
  const canyonCenter = c.centerX + 14 * Math.sin(z / 130);
  const dcRaw = Math.abs(x - canyonCenter);
  const dc = dcRaw + 5 * (fbm(x / 16, z / 16, 3) - 0.47);
  let wall = smoothstep(c.halfWidth + 6, c.halfWidth - 8, dc);
  const t = wall * 3;
  const f = Math.floor(t);
  let s = t - f;
  s = s * s * (3 - 2 * s);
  s = s * s * (3 - 2 * s);
  wall = wall * 0.3 + ((f + s) / 3) * 0.7;
  h -= c.depth * wall;
  if (x > canyonCenter) {
    // Far side: a plain raised rim.
    h += c.rim * Math.exp(-Math.pow((dc - c.halfWidth - 8) / 6, 2)) * (0.75 + 0.5 * fbm(z / 40 + 3, x / 40));
  } else {
    // Near side (the one the player sees): a broken line of crags instead of
    // one smooth rise (Cyril: "really, really flat"). Peaks and saddles
    // along it, stretches where it nearly dies away, and one deliberate gap
    // through which the canyon's far wall shows. Gentle on the base side,
    // falling straight into the canyon on the other. Kept low: the Sun
    // rises behind it, and anything taller would put the base in shadow.
    const dn = x - (canyonCenter - c.halfWidth - c.rimBack); // 0 on the crags' crest line
    if (dn > -34 && dn < 18) {
      const across = Math.exp(-Math.pow(dn / (dn < 0 ? 10 : 6), 2));
      const peaks = ridged(z / 34 + 4.3, x / 80 + 2.1, 3);
      const stretch = smoothstep(0.3, 0.55, fbm(z / 75 + 13.7, 2.2, 3));
      const notch = 1 - Math.exp(-Math.pow((z - c.notchZ) / 13, 2));
      const tall = (3 + 9.5 * peaks * peaks) * (0.3 + 0.7 * stretch) * notch;
      h += across * tall * (0.8 + 0.4 * ridged(x / 13 + 3, z / 13 + 8, 3));
      h += across * notch * (3 * ridged(x / 6.5 + 1, z / 6.5 + 5, 2) - 1);
    }
  }
  h += 2.2 * fbm(x / 9, z / 9, 3) * wall * wall * wall;
  // Beyond the canyon its far wall rises into the second crest of the double
  // ridge: broken and peaked, so the east skyline isn't one flat line.
  const de = x - canyonCenter - c.halfWidth - 24;
  if (de > -40 && de < 60) {
    const crest = Math.exp(-Math.pow(de / 15, 2));
    const peaks = 0.4 + 0.95 * ridged(z / 45 + 4, x / 45 + 2, 3);
    h += c.farRidge * crest * peaks * (0.65 + 0.55 * fbm(z / 120 + 9, 1.3));
    h += crest * 6 * ridged(x / 12 + 5, z / 12 + 1, 2);
  }

  // Far hills: broken, sharp-crested, with gaps (the true horizon on Europa
  // is only about 2 km away at eye height).
  const far = smoothstep(900, 1700, dist);
  if (far > 0) {
    const rg = ridged(x / 190 + 2, z / 190 + 7, 4);
    h += far * (60 * fbm(x / 260 + 5, z / 260) + 110 * rg * rg) * (0.35 + 0.65 * smoothstep(0.35, 0.6, fbm(x / 520 + 1, z / 520 + 4, 3)));
  }

  // Relief on the open plain (Cyril: the ice in front of the player looked
  // flat): rounded mounds, and sharp-crested low ridges where the crust has
  // been squeezed. A few metres at most; the base pad below stays level.
  // Further from the base it grows (Cyril: the open plain to the north was
  // still flat): bigger swells, and long low pressure ridges.
  {
    const out = smoothstep(50, 200, Math.hypot(x - 12, z - 4));
    const mound = (2.6 + 3.4 * out) * (fbm(x / 36 + 13, z / 36 + 5, 3) - 0.45);
    const swell = 7 * out * smoothstep(0.42, 0.75, fbm(x / 110 + 31, z / 110 + 17, 3));
    // Ridges run along lines where the noise crosses its middle; a bell
    // curve across them keeps their tops rounded, not knife-edged.
    const squeeze = Math.exp(-Math.pow((fbm(x / 17 + 2, z / 23 + 8, 2) - 0.5) / 0.07, 2));
    const crestMask = smoothstep(0.45, 0.7, fbm(x / 90 + 21, z / 90 + 3, 2));
    const longRidge = Math.exp(-Math.pow((fbm(x / 60 + 6, z / 26 + 2, 3) - 0.5) / 0.05, 2));
    h += mound + swell + (1.6 + 1.6 * out) * squeeze * crestMask + 4.5 * out * longRidge * crestMask;
    // Hummocks (Cyril: the plain read as a flat frozen lake): low swells
    // about ten metres across and a few tens of centimetres high. Small, but
    // with the Sun this low one side of each is lit and the other shaded,
    // so the ground shows its shape from eye height. Only inside the finely
    // meshed play area (the coarse far mesh can't hold them); the base pad
    // below stays level.
    if (swells) {
      const edge = Math.max(Math.abs(x - 12) / 152, Math.abs(z + 20) / 170);
      const fade = 1 - smoothstep(0.72, 0.93, edge);
      if (fade > 0) {
        const lumps = fbm(x / 9.5 + 3.7, z / 12 + 8.1, 2) - 0.375; // two layers of this noise average 0.375
        const patches = 0.35 + 0.65 * smoothstep(0.25, 0.5, fbm(x / 47 + 9, z / 47 + 14, 2));
        h += 1.15 * lumps * patches * fade;
      }
    }
  }

  // Flat pads: the base, and the cave floor.
  const bp = LAYOUT.basePad;
  // (Shorter toward the west: nothing stands there beyond the solar array,
  // and levelling it left the ground beside the cave dead flat.)
  const base = smoothstep(bp.outer, bp.inner, Math.hypot((x - bp.x) * (x < bp.x ? 1.38 : 1), z - bp.z));
  h = h * (1 - base);
  const cv = LAYOUT.cave;
  // Level right out to the cave wall, so no slope of the mountain pokes up
  // inside the cave; it rises only outside, under the foot of the cave's peak.
  const caveFlat = smoothstep(cv.radius + 3.5, cv.radius + 0.2, Math.hypot(x - cv.x, z - cv.z));
  h = h * (1 - caveFlat);

  // Lineae: each red fault line is a shallow groove between two low raised
  // edges (a small double ridge). Faded out on the ridge, massif and canyon.
  const open = (1 - smoothstep(0.02, 0.2, ridgeShape)) * (1 - smoothstep(0.0, 0.15, wall)) * (1 - caveFlat) * (1 - far) * (1 - smoothstep(0.05, 0.3, massifShape));
  if (open > 0) {
    for (let i = 0; i < LINEAE.length; i++) {
      const l = LINEAE[i];
      const d = lineaDistance(l, x, z);
      const w = l.width;
      if (d < w * 2.4) {
        const size = w / 7; // Spool Linea = 1, Far Linea is bigger
        // A wide, shallow groove with low rounded shoulders. It used to be
        // narrow with sharp raised edges, which the 2 m ground mesh could
        // only draw as jagged folds (Cyril: "very acute, it looks bad").
        const groove = -0.5 * size * Math.exp(-Math.pow(d / (w * 0.42), 2));
        const rims = (0.22 + 0.4 * fbm(x / 15 + i * 7, z / 15, 2)) * size * Math.exp(-Math.pow((d - w * 0.95) / (w * 0.42), 2));
        h += (groove + rims) * open;
      }
    }
  }
  return h;
}

// Photo textures (all CC0, see design/FIRST-SCENE-BRIEF.md "Credits"). They add
// fine surface detail on top of the shader's own shapes and colours: frost
// powder, bare ice, cracked ice, and the salt colour of the red lines. Loaded
// once and shared by every piece of ice. Until they have all arrived, uTexOn
// stays 0 and the ice looks as it did without them.
export const ICE_TEX = (() => {
  const manager = new THREE.LoadingManager();
  const loader = new THREE.TextureLoader(manager);
  const base = `${import.meta.env.BASE_URL}textures/`;
  const load = (path, isColour) => {
    const t = loader.load(base + path);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.anisotropy = 8;
    if (isColour) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  const uniforms = {
    uTexOn: { value: 0 },
    // Set every frame by src/game/daylight.js as the Sun moves:
    // uIceAway: the level direction pointing away from the Sun (where the
    // sunlit plain bounces light back from). uIceDay: how much of that
    // bounced daylight there is (1 = full day, low at night and in eclipse).
    uIceAway: { value: new THREE.Vector3(-SKY.sunDir.x, 0, -SKY.sunDir.z).normalize() },
    uIceDay: { value: 1 },
    tFrostC: { value: load('frost/color.jpg', true) },
    tFrostN: { value: load('frost/normal.jpg', false) },
    tIceC: { value: load('ice-bare/color.jpg', true) },
    tIceN: { value: load('ice-bare/normal.jpg', false) },
    tCrackC: { value: load('ice-cracked/color.jpg', true) },
    tCrackN: { value: load('ice-cracked/normal.jpg', false) },
    tSaltC: { value: load('salt/color.jpg', true) },
    tSaltN: { value: load('salt/normal.jpg', false) },
  };
  // Cliff relief (Poly Haven "Cliff Side", CC0): chunky layered rock, used
  // only for its SHAPE, never its colour. Its bump directions and its height
  // are packed into one picture here (red+green = which way the surface
  // leans, blue = how far it sticks out), so the ice shader gets real
  // ledges, chips and hollows from a single texture read.
  const grey = new THREE.DataTexture(new Uint8Array([128, 128, 128, 255]), 1, 1);
  grey.needsUpdate = true;
  uniforms.tCliff = { value: grey };
  const images = new THREE.ImageLoader(manager);
  const cliff = {};
  images.load(base + 'cliff/normal.jpg', (img) => { cliff.normal = img; });
  images.load(base + 'cliff/height.jpg', (img) => { cliff.height = img; });
  manager.onLoad = () => {
    if (cliff.normal && cliff.height) {
      const size = cliff.normal.width;
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(cliff.height, 0, 0, size, size);
      const h = ctx.getImageData(0, 0, size, size).data;
      ctx.drawImage(cliff.normal, 0, 0, size, size);
      const packed = ctx.getImageData(0, 0, size, size);
      for (let i = 0; i < h.length; i += 4) packed.data[i + 2] = h[i];
      ctx.putImageData(packed, 0, 0);
      const t = new THREE.CanvasTexture(canvas);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.anisotropy = 8;
      uniforms.tCliff.value = t;
    }
    uniforms.uTexOn.value = 1;
  };
  return uniforms;
})();

// The lineae, written out as shader code from the same list the ground height
// uses.
const fl = (n) => (Number.isInteger(n) ? n.toFixed(1) : String(n));
const LINEA_GLSL = LINEAE.map((l) => {
  const size = fl(l.width / 7);
  return `{
    float ld = abs(p.y - (${fl(l.slope)}*p.x + (${fl(l.offset)}) + ${fl(l.wobbleAmp)}*sin(p.x*${fl(l.wobbleFreq)})));
    linea = max(linea, 1.0 - smoothstep(0.5*${size}, 2.4*${size}*rag, ld));
    core = max(core, 1.0 - smoothstep(0.25*${size}, 1.0*${size}, ld));
  }`;
}).join('\n');

// Shared GLSL for every piece of ice (ground, ridge, massif, canyon, blocks,
// cave shell, blades). World-space, so they all match. The look:
//   FLAT ICE: broken plates, each tilted a little differently so it catches
//   the low Sun its own way; deep red seams between big plates, thin dark
//   cracks between small ones, hairline red veins wandering across; frost
//   grain up close.
//   STEEP ICE: crystal facets, pale blue and lilac, with red veins running
//   through like marble, and vertical rust streaks.
// "iceH" is a height in metres used to bend the light (bump), so cracks look
// cut in and plates look raised without adding any triangles.
const ICE_GLSL = /* glsl */ `
varying vec3 vWPos;
varying vec3 vWNormal;
vec3 iceCol; float iceGloss; float iceFace; float iceSalt; float iceH; vec2 iceTilt;
vec3 iceDetailN;   // world-space bend of the surface from the photo textures
float iceSnow;     // 1 = frost-covered, 0 = bare ice
float iceAO;       // 1 = open surface, lower = down in a hollow (less light reaches it)
uniform float uTexOn;
uniform vec3 uIceAway;
uniform float uIceDay;
uniform sampler2D tFrostC, tFrostN, tIceC, tIceN, tCrackC, tCrackN, tSaltC, tSaltN, tCliff;
// Cliff relief: xy = which way the surface leans, z = how far it sticks out (0..1).
vec3 tCliffAt(vec2 uv){ vec3 c = texture(tCliff, uv).rgb; return vec3((c.xy*2.0 - 1.0) * uTexOn, c.z); }
float tLumOf(vec3 c){ return dot(c, vec3(0.3, 0.59, 0.11)); }
// A texture's light-and-dark pattern, as "times its own average" (1 = average).
// Only the pattern is used, so the ice keeps its own colours. If the texture
// hasn't loaded yet both reads are 0 and this gives 1 (no change).
float tDetail(sampler2D t, vec2 uv){
  return (tLumOf(texture(t, uv).rgb) + 0.02) / (tLumOf(textureLod(t, vec2(0.5), 10.0).rgb) + 0.02);
}
// A normal map's sideways tilt (0 until loaded).
vec2 tTilt(sampler2D t, vec2 uv){ return (texture(t, uv).xy*2.0 - 1.0) * uTexOn; }
float iHash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
vec2 iHash2(vec2 p){ p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3))); return fract(sin(p)*43758.5453); }
// Smooth noise. The quintic curve keeps its slope smooth across grid lines,
// so no square grid shows when it is used for relief.
float iNoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*f*(f*(f*6.-15.)+10.);
  return mix(mix(iHash(i),iHash(i+vec2(1,0)),u.x), mix(iHash(i+vec2(0,1)),iHash(i+vec2(1,1)),u.x), u.y); }
const mat2 iRot = mat2(0.8, -0.6, 0.6, 0.8);   // each layer is turned, so layers never line up
float iFbm(vec2 p){ float v=0., a=.5; for(int i=0;i<4;i++){ v+=a*iNoise(p); p = iRot*p*2.03 + 7.3; a*=.5; } return v; }
// Distance to the nearest cell edge, plus a random number per cell.
float iVoronoi(vec2 x, out float cellId, out vec2 edgeDir){
  vec2 n=floor(x), f=fract(x); vec2 mg, mr; float md=8.;
  for(int j=-1;j<=1;j++) for(int i=-1;i<=1;i++){ vec2 g=vec2(float(i),float(j)); vec2 o=iHash2(n+g); vec2 r=g+o-f; float d=dot(r,r); if(d<md){ md=d; mr=r; mg=g; } }
  cellId = iHash(n+mg);
  edgeDir = vec2(1.0, 0.0);   // which way the nearest cell edge lies
  md=8.; float sm=8.;
  for(int j=-2;j<=2;j++) for(int i=-2;i<=2;i++){ vec2 g=mg+vec2(float(i),float(j)); vec2 o=iHash2(n+g); vec2 r=g+o-f;
    if(dot(mr-r,mr-r)>0.00001){ vec2 en = normalize(r-mr); float dd = dot(0.5*(mr+r), en); if(dd<md){ md=dd; edgeDir=en; }
      // Smooth minimum: where two edges meet, the distance blends instead
      // of switching, so every plate gets rounded corners, not sharp points.
      float hk = max(0.14 - abs(sm - dd), 0.0) / 0.14; sm = min(sm, dd) - hk*hk*0.14*0.25; } }
  return max(sm, 0.0);
}
// Steepness of a groove wall, for a groove "w" wide, at distance e from its
// middle (the slope of a smoothstep).
float iGroove(float e, float w){ float t = clamp(e/w, 0.0, 1.0); return 6.0*t*(1.0 - t)/w; }
// A crisp line where value v crosses 0, "w" wide, antialiased at any distance.
float iLine(float v, float w){ float a = fwidth(v); return 1.0 - smoothstep(w, w + a*1.5, abs(v)); }
// How much a pattern of this size can still be shown before it turns to
// pixel noise (1 = fine, 0 = too small on screen).
float iShow(vec2 q){ vec2 w = fwidth(q); return 1.0 - smoothstep(0.12, 0.45, max(w.x, w.y)); }

// Wrinkled, creased noise (0..1): the look of worn ice and rock.
float iRidge(vec2 p){ float v=0., a=.55; for(int i=0;i<3;i++){ float n = 1.0 - abs(2.0*iNoise(p) - 1.0); v += a*n*n; p = iRot*p*2.17 + 13.1; a *= .5; } return v; }

// The big shapes on a steep face, seen square-on from one side:
// x = buttresses (~25 m), y = creases (~5 m), z = grooves running down.
vec3 iFaceForms(vec2 q){
  vec2 qs = vec2(q.x, q.y*0.5);   // squashed, so features run down the slope
  float sB = iShow(qs*0.19);
  float r1 = iRidge(qs*0.04 + 5.0);
  float r2 = iRidge(qs*0.19 + 9.0) * sB;
  float fl = mix(0.5, iNoise(vec2(q.x*0.55 + 3.0*r1, q.y*0.05)), sB);
  return vec3(r1, r2, fl);
}

void iceSurface(vec3 wp, vec3 wn, float dist){
  vec2 p = wp.xz;
  vec3 salt = vec3(0.84,0.26,0.13);
  vec3 saltDark = vec3(0.45,0.09,0.06);
  float nearK = 1.0 - smoothstep(18.0, 60.0, dist);
  float midK = 1.0 - smoothstep(220.0, 520.0, dist);

  float steep = 1.0 - clamp(wn.y, 0.0, 1.0);
  float face = smoothstep(0.2, 0.5, steep);
  float flat_ = 1.0 - face;

  // Photo-texture detail. Read here, outside the branches below, so the
  // GPU can pick the right sharpness for every pixel.
  // Ground: seen from above. Frost at two sizes, turned against each other,
  // so its repeat doesn't show.
  vec2 uvF1 = p / 2.6, uvF2 = (iRot * p) / 11.0, uvK = p / 4.2;
  float frostG = mix(tDetail(tFrostC, uvF1), tDetail(tFrostC, uvF2), 0.45);
  vec2 frostGN = tTilt(tFrostN, uvF1) + 0.6*tTilt(tFrostN, uvF2);
  float crackG = tDetail(tCrackC, uvK);
  vec2 crackGN = tTilt(tCrackN, uvK);
  // Steep faces: seen from the side, blended between the two wall
  // directions; stretched downhill so the grain runs down the slope.
  vec2 qX = vec2(wp.z, wp.y*0.5), qZ = vec2(wp.x, wp.y*0.5);
  float wX = wn.x*wn.x, wZ = wn.z*wn.z; float wS = wX + wZ + 1e-4; wX /= wS; wZ /= wS;
  float frostW = tDetail(tFrostC, qX/3.0)*wX + tDetail(tFrostC, qZ/3.0)*wZ;
  vec2 fnX = tTilt(tFrostN, qX/3.0), fnZ = tTilt(tFrostN, qZ/3.0);
  vec3 frostWN = wX*vec3(0.0, 0.5*fnX.y, fnX.x) + wZ*vec3(fnZ.x, 0.5*fnZ.y, 0.0);
  // The cliff relief, at two sizes. Big: layered ledges and blocks (one
  // repeat is about 36 m on the mountain, smaller on smaller things).
  // Small: the same relief turned on its side, so its grooves run down the
  // slope, about 9 m a repeat. Each is nudged by slow noise so the repeat
  // doesn't show across a whole mountainside.
  vec2 fX = vec2(wp.z, wp.y) * ICE_FACE_SCALE, fZ = vec2(wp.x, wp.y) * ICE_FACE_SCALE;
  vec2 nudge = 0.22*vec2(iNoise(fX*0.017 + 3.0), iNoise(fZ*0.017 + 11.0));
  vec3 cXa = tCliffAt(fX.yx/30.0 + nudge), cZa = tCliffAt(fZ.yx/30.0 + nudge.yx);
  vec3 cXb = tCliffAt(fX/11.0 + 0.37 + nudge.yx), cZb = tCliffAt(fZ/11.0 + 0.61 + nudge);
  // Close up, a third, fine layer (about 3 m a repeat): chips and cracks
  // you only see when you walk right up to a wall.
  float fineFace = 1.0 - smoothstep(22.0, 70.0, dist);
  vec3 cXc = tCliffAt(fX/3.1 + 0.19), cZc = tCliffAt(fZ/3.1 + 0.83);
  float cliffC = cXc.z*wX + cZc.z*wZ;
  float cliffA = cXa.z*wX + cZa.z*wZ;   // big flutes and blocks, 0 (deep) .. 1 (sticking out)
  float cliffB = cXb.z*wX + cZb.z*wZ;   // small ledges and chips
  vec3 cliffN = wX*(1.8*vec3(0.0, cXa.x, cXa.y) + 1.0*vec3(0.0, cXb.y, cXb.x))
              + wZ*(1.8*vec3(cZa.y, cZa.x, 0.0) + 1.0*vec3(cZb.x, cZb.y, 0.0));
  cliffN += fineFace * 0.9 * (wX*vec3(0.0, cXc.y, cXc.x) + wZ*vec3(cZc.x, cZc.y, 0.0));
  // The same relief seen from above, large and soft: gentle lumps and
  // hollows in the frost on open ground.
  vec3 cTop = tCliffAt(p/15.0 + nudge);
  // Salt: the stone texture's own colour and grain (Cyril: the plain colour
  // looked like a marker stroke). Two sizes, so the grain shows up close
  // without the repeat showing further off. Contrast raised, and pushed
  // from ochre toward Europa's red-brown.
  vec2 uvS1 = p / 2.8, uvS2 = (iRot * p) / 9.0;
  vec3 saltRaw = mix(texture(tSaltC, uvS1).rgb, texture(tSaltC, uvS2).rgb, 0.4);
  float saltAvg = tLumOf(textureLod(tSaltC, vec2(0.5), 10.0).rgb) + 1e-3;
  vec3 saltRel = saltRaw / saltAvg;
  float saltL = mix(1.0, tLumOf(saltRel), uTexOn);   // the stone's light and dark, 1 = average
  saltRel = mix(vec3(tLumOf(saltRel)), saltRel, 0.55); // calm the texture's yellow-green
  vec3 saltTex = pow(saltRel, vec3(1.5)) * vec3(0.88, 0.5, 0.36);
  salt = mix(salt, saltTex * 0.5, uTexOn);
  saltDark = mix(saltDark, saltTex * 0.2, uTexOn);
  vec2 saltN = tTilt(tSaltN, uvS1) + 0.5*tTilt(tSaltN, uvS2);
  vec3 gN = vec3(0.0), fN = vec3(0.0);
  float mid = iFbm(p*0.05 + 7.0);
  float grainA = iNoise(p*3.3)*iShow(p*3.3);
  float grain = grainA;

  vec3 gCol = vec3(0.9); float gH = 0.0; float gSalt = 0.0; float gDark = 0.0; float gGloss = 0.0; vec2 gTilt = vec2(0.0);
  float gSaltyDark = 0.0;   // how much of the dark (crevice) colour is salt rather than shadowed ice
  if (flat_ > 0.002) {
    float big = iFbm(p*0.012);
    float plateId, chipId;
    // Bend the plate pattern so the plates look broken, not like honeycomb.
    vec2 warp = vec2(iNoise(p*0.03), iNoise(p*0.03 + 17.0)) - 0.5;
    vec2 warp2 = vec2(iNoise(p*0.11 + 5.0), iNoise(p*0.11 + 23.0)) - 0.5;
    vec2 pa = (p + 34.0*warp + 7.0*warp2)*0.022 + 3.1;    // big plates, ~45 m
    vec2 pb = (p + 12.0*warp.yx + 4.0*warp2.yx)*0.09;     // small plates, ~11 m
    vec2 nA = vec2(1.0, 0.0), nB = vec2(1.0, 0.0), nC = vec2(1.0, 0.0);
    // Drifts of frost bury the small cracks in places, so the ground isn't
    // the same everywhere.
    float plain = smoothstep(0.93, 0.99, wn.y) * (1.0 - smoothstep(2.5, 8.0, wp.y));
    float cover = max(smoothstep(0.45, 0.62, iFbm(p*0.035 + 50.0)), 1.0 - plain);
    float showB = iShow(pb) * midK * (1.0 - 0.85*cover) * min(1.0, plain*4.0);
    // The plate patterns are the costliest part of this shader, so each is
    // only worked out where it can actually be seen: big plates on level
    // ground, small ones where they are large enough on screen. Elsewhere
    // (slopes, slabs, far ground) they are skipped.
    float e2 = 1.0, e = 1.0; plateId = 0.5; chipId = 0.5;
    if (plain > 0.002) e2 = iVoronoi(pa, plateId, nA);
    if (showB > 0.004) e = iVoronoi(pb, chipId, nB);

    // Every plate gets its own pastel tint.
    gCol = mix(vec3(0.84,0.93,1.00), vec3(0.98,0.96,0.93), smoothstep(0.3, 0.7, big));
    gCol = mix(gCol, vec3(1.00,0.87,0.84), 0.2*smoothstep(0.5, 0.8, mid));
    gCol = mix(gCol, vec3(0.66,0.85,0.99), 0.55*plateId*plateId);
    gCol = mix(gCol, vec3(0.85,0.83,0.99), 0.4*fract(plateId*7.3)*fract(plateId*7.3));
    gCol *= 0.84 + 0.16*mix(chipId, 0.7, cover);
    gCol = mix(gCol, vec3(0.94,0.97,1.00), 0.55*cover);
    gCol = mix(vec3(0.93,0.96,1.00)*(0.92 + 0.1*iRidge(p*0.3 + 2.0)), gCol, plain);
    gCol *= 1.0 + 0.12*nearK*(grain - 0.5);
    // Photo detail: frost powder where frost lies (drifts and gentle slopes),
    // cracked ice on the open plates.
    float frostAmt = max(cover, 1.0 - plain);
    gCol *= mix(1.0, mix(crackG, frostG, frostAmt), 0.85);
    vec2 gN2 = mix(crackGN*0.9, frostGN*1.25, frostAmt);
    // Soft lumps and hollows in the frost (real surface directions, so the
    // low Sun lights one side of each lump and shades the other).
    gN2 += cTop.xy * (0.8 + 0.4*frostAmt);
    gCol *= 0.88 + 0.2*cTop.z;
    gN = vec3(gN2.x, 0.0, gN2.y);

    // Seams between big plates (deep red, cut in), cracks between small
    // plates, and hairline veins wandering across them.
    float seamW = 0.004 + 0.011*iNoise(p*0.09 + 60.0);   // seams widen and pinch (about 0.4 to 1.3 m)
    // Ragged, broken edges that follow the stone's grain, not a clean stroke.
    seamW *= clamp(0.35 + 0.75*saltL + 0.3*(iNoise(p*1.7 + 3.0) - 0.5), 0.2, 1.8);
    float seam = (1.0 - smoothstep(seamW, seamW + fwidth(e2)*1.5, e2)) * plain;
    float seamHalo = (1.0 - smoothstep(0.0, 0.07, e2)) * plain;
    float crack = (1.0 - smoothstep(0.02, 0.02 + fwidth(e)*1.5, e)) * showB;
    // Up close, a third layer: fine angular cracks, ~3 m apart.
    float fineKRaw = 1.0 - smoothstep(40.0, 90.0, dist);
    float fineK = fineKRaw * (1.0 - cover);
    float vein = 0.0; float fineId = 0.0; float e3 = 1.0;
    if (fineK > 0.002) {
      vec2 warp3 = vec2(iNoise(p*0.42 + 9.0), iNoise(p*0.42 + 31.0)) - 0.5;
      vec2 pc = (p + 5.0*warp2 + 2.6*warp3)*0.3 + 11.0;   // bent so the cracks don't look like tiles
      e3 = iVoronoi(pc, fineId, nC);
      vein = (1.0 - smoothstep(0.018, 0.018 + fwidth(e3)*1.5, e3)) * fineK * iShow(pc);
    }
    float linea = 0.0; float core = 0.0;
    float rag = 0.75 + 0.5*iNoise(p*0.35);
    ${LINEA_GLSL}
    linea = linea * linea * (0.55 + 0.45*smoothstep(0.3, 0.7, mid));
    // Salt is rare (Cyril: the whole floor was stripes). It lies along the
    // two big red lines and in a few patches of plate seams; everywhere else
    // a seam or crack is just a dark-blue crevice in clean ice.
    float saltySeam = smoothstep(0.6, 0.7, iFbm(p*0.006 + 41.0));
    float stain = (0.15 + 0.6*smoothstep(0.4, 0.75, mid)) * seamHalo * seamHalo * (0.6 + 0.4*iNoise(p*0.8 + 12.0)) * saltySeam;
    gSalt = clamp(stain*0.35 + linea*0.85, 0.0, 1.0);
    float seamCore = (1.0 - smoothstep(seamW*0.35, seamW*0.35 + fwidth(e2)*1.5, e2)) * plain;
    gSalt = max(gSalt, seam*0.9*saltySeam);
    gDark = clamp(core*0.9 + seamCore*0.7 + crack*0.4 + vein*0.25, 0.0, 1.0);
    gSaltyDark = max(core, saltySeam * max(seamCore, seam));
    // The stone's bumps, wherever there is salt.
    gN += vec3(saltN.x, 0.0, saltN.y) * 0.9 * max(gSalt, core);
    gCol *= 0.93 + 0.14*fineId*fineK;

    // Relief: plates tilt a little, seams and cracks are cut in.
    // Each plate's tilt is measured from the plate's own middle, so the
    // numbers stay small and the lighting stays clean.
    vec2 tiltA = (iHash2(vec2(plateId*37.1, plateId*11.7)) - 0.5) * 0.10;
    vec2 tiltB = (iHash2(vec2(chipId*53.9, chipId*29.3)) - 0.5) * 0.12;
    vec2 tiltC = (iHash2(vec2(fineId*71.3, fineId*13.9)) - 0.5) * 0.10;
    // The tilt of each plate is passed on exactly (as a slope), not measured
    // from pixel to pixel, so plates shade cleanly.
    gTilt = tiltA*plain + tiltB*showB + tiltC*fineK;
    // Grooves along every seam and crack, also as exact slopes: the ground
    // drops toward the nearest edge.
    float wA = seamW + 0.035;
    gTilt -= nA * (1.0*iGroove(e2, wA)*0.022*plain);
    gTilt -= nB * (0.3*iGroove(e, 0.05)*0.09*showB);
    gTilt -= nC * (0.05*iGroove(e3, 0.06)*0.3*fineK);
    gH = 0.0
       + (1.0 - plain)*(0.9*iRidge(p*0.06 + 8.0) + 0.3*iRidge(p*0.3 + 2.0)*iShow(p*0.3))
       - 0.3*core
       + nearK*0.012*grainA
       + 0.22*iFbm(p*0.3 + 70.0) + 0.12*cover*iRidge(p*0.5 + 4.0)*fineKRaw;

    // Smooth "window" ice here and there: glossier, a touch more aqua.
    float window = smoothstep(0.56, 0.68, iFbm(p*0.021 + 31.0));
    gCol = mix(gCol, vec3(0.66,0.88,0.95), 0.4*window);
    gGloss = 0.1 + 0.65*window;   // frost is matte powder; only window ice shines
  }

  vec3 fCol = vec3(0.8); float fH = 0.0; float fDark = 0.0; float fSalt = 0.0; float fSnow = 0.0; float fAO = 1.0;
  if (face > 0.002) {
    // Look at the face square-on: pick the wall plane it is closest to.
    // Small objects use a smaller pattern (ICE_FACE_SCALE), so they get the
    // same buttresses, creases and frost as the big mountain, at their size.
    vec2 q = (abs(wn.x) > abs(wn.z) ? vec2(wp.z, wp.y) : vec2(wp.x, wp.y)) * ICE_FACE_SCALE;
    // Features run down the slope, as if slowly worn: squash the height.
    vec2 qs = vec2(q.x, q.y*0.5);
    // Worked out from both wall directions and blended, so no seam shows
    // where a face turns from one to the other.
    vec3 forms = vec3(0.0);
    if (wX > 0.02) forms += wX * iFaceForms(fX);
    if (wZ > 0.02) forms += wZ * iFaceForms(fZ);
    forms /= max(step(0.02, wX)*wX + step(0.02, wZ)*wZ, 1e-3);
    float r1 = forms.x, r2 = forms.y, flute = forms.z;
    // Only the big, smooth forms go through the height bump; ledges, chips
    // and grooves come from the cliff relief, as exact surface directions.
    fH = 2.4*r1 + 0.6*r2 + 0.4*flute;
    // Which way the surface REALLY faces here, ledges and hollows included.
    vec3 bend = cliffN - wn*dot(cliffN, wn);
    vec3 nP = normalize(wn + bend);
    float relief = 0.62*cliffA + 0.38*cliffB;                // 0 = deep in a hollow, 1 = sticking out
    relief = mix(relief, 0.75*relief + 0.25*cliffC, fineFace);
    // Frost settles on whatever faces up: ledge tops, shelves, gentle
    // shoulders. Undersides, steep chips and hollows stay bare. Because it
    // follows the same relief the light does, a white ledge is also lit like
    // a ledge, which is what makes it read as solid instead of painted.
    float snowV = ICE_FROST + 0.68*wn.y + 0.34*nP.y + ICE_PATCH*(0.42*(r1 - 0.4) + 0.26*(r2 - 0.25) - 0.1*(flute - 0.5)) + 0.24*(relief - 0.5);
    snowV += 0.12*fineFace*(cliffC - 0.5);
    fSnow = smoothstep(0.47, 0.52, snowV);
    // Bare ice is DARK deep blue (the frost is what's white): the strong
    // light-against-dark is most of what gives the faces their depth.
    vec3 bare = mix(vec3(0.07,0.17,0.42), vec3(0.26,0.48,0.80), smoothstep(0.2, 0.85, relief));
    bare *= 0.85 + 0.3*flute;
    bare = mix(bare, vec3(0.30,0.32,0.66), 0.22*iNoise(q*0.03 + 7.0));
    vec3 snowC = vec3(0.93,0.96,1.00) * (0.86 + 0.14*relief);
    snowC *= mix(1.0, frostW, 0.5);
    // The frost has thickness: the bare ice right beside it sits in its
    // shade, and its own edge catches a little extra light.
    bare *= 1.0 - 0.3*smoothstep(0.36, 0.47, snowV);
    snowC *= 1.0 + 0.07*(1.0 - smoothstep(0.52, 0.62, snowV));
    fCol = mix(bare, snowC, fSnow);
    // Hollows and the foot of every ledge gather shade.
    float cavity = smoothstep(0.62, 0.18, relief);
    fAO = 1.0 - 0.6*cavity;
    fCol *= 1.0 - 0.3*cavity;
    fCol *= 0.82 + 0.3*clamp(0.6*r1 + 0.4*r2, 0.0, 1.0);
    fCol *= mix(vec3(0.80,0.90,1.04), vec3(1.0), smoothstep(-30.0, 60.0, wp.y));
    fCol *= 1.0 + 0.12*nearK*(grain - 0.5);
    // Rust: stains that run down the bare ice and gather in its creases.
    float streak = smoothstep(0.55, 0.9, iNoise(vec2(q.x*0.2 + 2.0*iNoise(p*0.04), q.y*0.016)));
    float crease = smoothstep(0.45, 0.1, r2) * smoothstep(0.5, 0.75, iNoise(q*0.09 + 30.0));
    fSalt = clamp(streak*0.42 + crease*0.35, 0.0, 1.0) * (1.0 - 0.85*fSnow) * ICE_RUST;
    fDark = clamp(streak*crease*0.5, 0.0, 1.0) * (1.0 - fSnow) * ICE_RUST;
    fN = bend + frostWN*1.1*fSnow;
  }

  vec3 col = mix(gCol, fCol, face);
  float saltAmt = mix(gSalt, fSalt, face);
  float darkAmt = mix(gDark, fDark, face);
  col = mix(col, salt, saltAmt);
  vec3 crevice = vec3(0.26, 0.40, 0.64);   // a clean crack: deep blue ice in shadow
  col = mix(col, mix(crevice, saltDark, mix(gSaltyDark, 1.0, face)), darkAmt);
  // Down in the canyon the ice turns deeper blue.
  col *= mix(vec3(1.0), vec3(0.62,0.78,1.08), smoothstep(-3.0, -30.0, wp.y));

  iceCol = col;
  iceFace = face;
  iceH = mix(gH, fH, face);
  iceTilt = gTilt * flat_;
  iceDetailN = mix(gN, fN, face);
  iceSalt = max(saltAmt, darkAmt);
  iceSnow = mix(1.0, fSnow, face);
  iceAO = mix(1.0, fAO, face);
  iceGloss = mix(gGloss, 0.75*(1.0 - fSnow), face) * (1.0 - 0.6*iceSalt);
}

// Bend the surface direction by the slope of the bump height.
vec3 iceBump(vec3 N, float h){
  vec3 sx = dFdx(-vViewPosition);
  vec3 sy = dFdy(-vViewPosition);
  vec3 r1 = cross(sy, N);
  vec3 r2 = cross(N, sx);
  float det = dot(sx, r1);
  vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
  return normalize(abs(det) * N - grad);
}
`;

// look: how the steep faces are drawn. faceScale shrinks the mountain pattern
// to suit a smaller object (1 = the big mountain), frost (-0.3..0.3) shifts
// how much of it is frosted white, rust (0..1) is how strong the salt streaks
// running down it are, patch (0..1) is how patchy the frost is: 1 = broken
// into big patches (a mountainside), low = frost simply caps whatever faces
// up (a boulder: white top, bare sides).
export function makeIceMaterial(extra = {}, look = {}) {
  const { faceScale = 1, frost = 0, rust = 1, patch = 1 } = look;
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0, ...extra });
  const defines = `#define ICE_FACE_SCALE ${faceScale.toFixed(3)}\n#define ICE_FROST ${frost.toFixed(3)}\n#define ICE_RUST ${rust.toFixed(3)}\n#define ICE_PATCH ${patch.toFixed(3)}\n`;
  // Materials with different looks need their own compiled shader.
  mat.customProgramCacheKey = () => mat.onBeforeCompile.toString() + defines;
  mat.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, ICE_TEX);
    shader.fragmentShader = defines + shader.fragmentShader;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;\nvarying vec3 vWNormal;')
      .replace(
        '#include <project_vertex>',
        `#include <project_vertex>
        vec4 iwp = vec4(transformed, 1.0);
        vec3 iwn = objectNormal;
        #ifdef USE_INSTANCING
          iwp = instanceMatrix * iwp;
          iwn = mat3(instanceMatrix) * iwn;
        #endif
        vWPos = (modelMatrix * iwp).xyz;
        vWNormal = normalize(mat3(modelMatrix) * iwn);`
      );
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\n' + ICE_GLSL)
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        vec3 iceN = normalize(vWNormal);
        #ifdef DOUBLE_SIDED
          if (!gl_FrontFacing) iceN = -iceN;
        #endif
        iceSurface(vWPos, iceN, length(vViewPosition));
        diffuseColor.rgb *= iceCol;`
      )
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(0.7, 0.3, iceGloss);')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = iceBump(normal, iceH);\nnormal = normalize(normal - (viewMatrix * vec4(iceTilt.x, 0.0, iceTilt.y, 0.0)).xyz);\nnormal = normalize(normal + (viewMatrix * vec4(iceDetailN, 0.0)).xyz);')
      // Stylised light on ice: the Sun sits very low, so with plain physics
      // the flat ground would be almost dark. This bends the falloff so
      // low-angle light still lights the ice brightly, while tilted plates
      // and facets still catch clearly different amounts of light.
      .replace(
        '#include <lights_physical_pars_fragment>',
        THREE.ShaderChunk.lights_physical_pars_fragment.replace(
          'vec3 irradiance = dotNL * directLight.color;',
          // x*(1+k)/(x+k): lifts low-angle light a lot, but stays gentle right
          // at the edge of shadow so the relief does not flicker there.
          // Gentler than before (it was 1.16x/(x+0.16), which made every
          // sunward face equally bright, so cliffs looked flat): now a face
          // turned toward the Sun is clearly brighter than one side-on to it.
          'vec3 irradiance = (dotNL * 1.5 / (dotNL + 0.5)) * directLight.color;'
        )
      )
      .replace(
        '#include <lights_fragment_end>',
        `#include <lights_fragment_end>
        // Keep the Sun's mirror-glint on smooth ice from blowing out.
        reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.42,0.38,0.32));
        // Hollows get less of the soft all-round light.
        reflectedLight.indirectDiffuse *= iceAO;
        // How much direct light (Sun or a lamp) this spot gets.
        float iceLit = clamp(dot(reflectedLight.directDiffuse, vec3(0.9)), 0.0, 1.0);
        // Stylised: shadowed ice is never dead black (stands in for light
        // bouncing off bright ice all around). It is NOT one flat glow: it
        // comes more from above, and from the side facing away from the Sun
        // (where the sunlit ground bounces light back), so ledges and chips
        // still show their shape inside a shadow.
        vec3 iceNW = inverseTransformDirection(normal, viewMatrix);
        float iceUp = 0.5 + 0.5*iceNW.y;
        float iceBack = max(dot(iceNW, uIceAway), 0.0);
        // The bounce is strong: the sunlit frost plain is a huge bright
        // reflector, so a cliff facing away from the Sun is lit by it, and its
        // ledges and chips show (without it the whole right side of the scene,
        // which the player sees from its shaded side, was one flat blue).
        vec3 iceFill = mix(vec3(0.03,0.06,0.15), vec3(0.08,0.17,0.36), iceUp*iceUp) + vec3(0.17,0.23,0.33)*iceBack*(0.35 + 0.65*iceBack);
        // The bounce is daylight: it fades at night and when Jupiter hides the Sun.
        totalEmissiveRadiance += iceCol * iceFill * iceAO * (1.0 - iceLit) * uIceDay;
        // Bare ice glows a little from inside at its edges (light passing
        // through thin ice); frost doesn't.
        float iceRim = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += iceFace * (1.0 - iceSnow) * (1.0 - iceSalt) * (0.02 + 0.16*iceRim) * vec3(0.12,0.42,0.85) * (0.35 + 0.65*uIceDay);
        // Sparkle: tiny ice crystals catch the Sun near your feet.
        float iceDist = length(vViewPosition);
        if (iceDist < 28.0) {
          vec2 sg = floor(vWPos.xz * 11.0 + 3.0*iNoise(vWPos.xz*0.7));
          float sh = iHash(sg);
          float tw = fract(sh*91.7 + dot(geometryViewDir, vec3(7.1, 3.3, 5.7)));
          float glint = step(0.994, sh) * smoothstep(0.8, 1.0, tw);
          totalEmissiveRadiance += vec3(1.0,0.97,0.92) * glint * iceLit * (1.0 - iceSalt) * (1.0 - iceSalt) * (1.0 - iceDist/28.0) * 2.0;
        }`
      );
  };
  return mat;
}

// Grid lines for the ground mesh: fine near the base (where the player walks
// and looks closely), growing coarser toward the far hills. This gives close
// detail without millions of triangles.
function gridAxis(coreMin, coreMax, step, midStep, midLimit, limit, growth) {
  // step inside the core; grows to midStep and holds it out to midLimit (so
  // the mountain and ridges get even, small cells); then grows to the edge.
  const side = (start, dir) => {
    const out = [];
    let s = step;
    let v = start;
    while (Math.abs(v) < limit) {
      s = Math.abs(v) < midLimit ? Math.min(s * growth, midStep) : s * growth;
      v += dir * s;
      if (Math.abs(v) > limit) v = dir * limit;
      out.push(v);
    }
    return out;
  };
  const core = [];
  for (let v = coreMin; v <= coreMax + 1e-6; v += step) core.push(v);
  return side(coreMin, -1).reverse().concat(core, side(core[core.length - 1], 1));
}

export function createTerrain() {
  const xs = gridAxis(-140, 164, 2, 5, 640, 2000, 1.08);
  const zs = gridAxis(-190, 150, 2, 5, 640, 2000, 1.08);
  const nx = xs.length;
  const nz = zs.length;
  const positions = new Float32Array(nx * nz * 3);
  let k = 0;
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      positions[k++] = xs[i];
      positions[k++] = heightAt(xs[i], zs[j]);
      positions[k++] = zs[j];
    }
  }
  const indices = new Uint32Array((nx - 1) * (nz - 1) * 6);
  k = 0;
  for (let j = 0; j < nz - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const a = j * nx + i;
      const b = a + 1;
      const c = a + nx;
      const d = c + 1;
      indices[k++] = a; indices[k++] = c; indices[k++] = b;
      indices[k++] = b; indices[k++] = c; indices[k++] = d;
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  // The ground has one round hole in it: the cryobot's melt shaft.
  // A little more frost and fainter rust streaks than the default (Cyril: the
  // cave mountain looked "too blue", and red on blue on white read as gaudy).
  const mat = makeIceMaterial({}, { frost: 0.08, rust: 0.55 });
  const iceCompile = mat.onBeforeCompile;
  mat.onBeforeCompile = (shader) => {
    iceCompile(shader);
    shader.uniforms.uHole = { value: new THREE.Vector3(LAYOUT.cryobot.x, LAYOUT.cryobot.z, 1.16) };
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform vec3 uHole;')
      .replace('#include <clipping_planes_fragment>', '#include <clipping_planes_fragment>\nif (distance(vWPos.xz, uHole.xy) < uHole.z) discard;');
  };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  // Drawn after the rocks, slabs and buildings standing on it, so the costly
  // ice shading isn't worked out for ground that ends up hidden behind them.
  mesh.renderOrder = 5;
  mesh.name = 'terrain';
  return mesh;
}
