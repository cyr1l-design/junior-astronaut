import * as THREE from 'three';
import { fbm } from './noise.js';
import { LAYOUT, LINEAE } from './layout.js';

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
// mesh and the feet always agree.
export function heightAt(x, z) {
  // Soft swells: smooth, sculpted ice (no wind on Europa, so no dunes).
  let h = 1.3 * fbm(x / 70, z / 70) - 0.65;
  h += 0.5 * fbm(x / 19 + 4.2, z / 23 + 1.7, 3) - 0.25;

  const dist = Math.hypot(x, z);

  // Low domes out on the plain (Europa's real "lenticulae").
  h += 16 * smoothstep(0.6, 0.9, fbm(x / 210 + 40, z / 210 + 17, 3)) * smoothstep(230, 420, dist);

  // The cave ridge: a ridge arm west of the base, with the cave at its foot.
  // It rises and falls along its length, tapers to nothing at its north end
  // and runs south into the massif. A second crest runs behind it (Europa's
  // ridges are often double).
  const r = LAYOUT.westRidge;
  const ridgeCenter = r.centerX + 12 * Math.sin(z / 70);
  const dr = x - ridgeCenter;
  const along = smoothstep(r.northEnd, r.northEnd + 80, z) * (1 - smoothstep(230, 330, z));
  const ridgeShape = Math.exp(-Math.pow(dr / r.halfWidth, 2)) * along;
  let ridge = r.height * ridgeShape * (0.62 + 0.75 * fbm(z / 55, 3.1)) * (0.8 + 0.45 * ridged(x / 48, z / 48, 3));
  // Ledges: layers of ice step up the face instead of one smooth hump.
  ridge += 1.5 * Math.sin(ridge * 0.6 + 2.5 * fbm(x / 30 + 2, z / 30 + 6, 3)) * smoothstep(1, 6, ridge);
  // Gullies running down the face break it into buttresses.
  ridge *= 1 - 0.3 * smoothstep(0.42, 0.7, fbm(z / 13 + x / 70, 2.2, 3)) * smoothstep(5, 16, ridge) * (1 - 0.75 * ridgeShape * ridgeShape * ridgeShape);
  ridge += smoothstep(3, 14, ridge) * (5 * ridged(x / 17 + 3, z / 17, 3) - 1.5);
  h += ridge;
  h += 0.7 * r.height * Math.exp(-Math.pow((dr + 60) / 27, 2)) * along * (0.6 + 0.8 * fbm(z / 60 + 11, 5.2));

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
  h += c.rim * Math.exp(-Math.pow((dc - c.halfWidth - 8) / 6, 2)) * (0.75 + 0.5 * fbm(z / 40 + 3, x / 40));
  h += 2.2 * fbm(x / 9, z / 9, 3) * wall * wall * wall;

  // Far hills: broken, sharp-crested, with gaps (the true horizon on Europa
  // is only about 2 km away at eye height).
  const far = smoothstep(900, 1700, dist);
  if (far > 0) {
    const rg = ridged(x / 190 + 2, z / 190 + 7, 4);
    h += far * (60 * fbm(x / 260 + 5, z / 260) + 110 * rg * rg) * (0.35 + 0.65 * smoothstep(0.35, 0.6, fbm(x / 520 + 1, z / 520 + 4, 3)));
  }

  // Flat pads: the base, and the cave floor.
  const bp = LAYOUT.basePad;
  const base = smoothstep(bp.outer, bp.inner, Math.hypot(x - bp.x, z - bp.z));
  h = h * (1 - base);
  const cv = LAYOUT.cave;
  const caveFlat = smoothstep(cv.radius + 2, cv.radius - 3, Math.hypot(x - cv.x, z - cv.z));
  h = h * (1 - caveFlat);

  // Lineae: each red fault line is a shallow groove between two low raised
  // edges (a small double ridge). Faded out on the ridge, massif and canyon.
  const open = (1 - smoothstep(0.02, 0.2, ridgeShape)) * (1 - smoothstep(0.0, 0.15, wall)) * (1 - caveFlat) * (1 - far) * (1 - smoothstep(0.05, 0.3, massifShape));
  if (open > 0) {
    for (let i = 0; i < LINEAE.length; i++) {
      const l = LINEAE[i];
      const d = lineaDistance(l, x, z);
      const w = l.width;
      if (d < w * 1.6) {
        const size = w / 7; // Spool Linea = 1, Far Linea is bigger
        const groove = -0.55 * size * Math.exp(-Math.pow(d / (w * 0.22), 2));
        const rims = 0.3 * size * size * Math.exp(-Math.pow((d - w * 0.5) / (w * 0.2), 2));
        h += (groove + rims) * open;
      }
    }
  }
  return h;
}

// The lineae, written out as shader code from the same list the ground height
// uses.
const fl = (n) => (Number.isInteger(n) ? n.toFixed(1) : String(n));
const LINEA_GLSL = LINEAE.map((l) => {
  const size = fl(l.width / 7);
  return `{
    float ld = abs(p.y - (${fl(l.slope)}*p.x + (${fl(l.offset)}) + ${fl(l.wobbleAmp)}*sin(p.x*${fl(l.wobbleFreq)})));
    linea = max(linea, 1.0 - smoothstep(0.8*${size}, 4.4*${size}*rag, ld));
    core = max(core, 1.0 - smoothstep(0.3*${size}, 1.3*${size}, ld));
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
  md=8.;
  for(int j=-2;j<=2;j++) for(int i=-2;i<=2;i++){ vec2 g=mg+vec2(float(i),float(j)); vec2 o=iHash2(n+g); vec2 r=g+o-f;
    if(dot(mr-r,mr-r)>0.00001){ vec2 en = normalize(r-mr); float dd = dot(0.5*(mr+r), en); if(dd<md){ md=dd; edgeDir=en; } } }
  return md;
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

void iceSurface(vec3 wp, vec3 wn, float dist){
  vec2 p = wp.xz;
  vec3 salt = vec3(0.84,0.26,0.13);
  vec3 saltDark = vec3(0.45,0.09,0.06);
  float nearK = 1.0 - smoothstep(18.0, 60.0, dist);
  float midK = 1.0 - smoothstep(220.0, 520.0, dist);

  float steep = 1.0 - clamp(wn.y, 0.0, 1.0);
  float face = smoothstep(0.2, 0.5, steep);
  float flat_ = 1.0 - face;
  float mid = iFbm(p*0.05 + 7.0);
  float grainA = iNoise(p*3.3)*iShow(p*3.3);
  float grain = grainA;

  vec3 gCol = vec3(0.9); float gH = 0.0; float gSalt = 0.0; float gDark = 0.0; float gGloss = 0.0; vec2 gTilt = vec2(0.0);
  if (flat_ > 0.002) {
    float big = iFbm(p*0.012);
    float plateId, chipId;
    // Bend the plate pattern so the plates look broken, not like honeycomb.
    vec2 warp = vec2(iNoise(p*0.03), iNoise(p*0.03 + 17.0)) - 0.5;
    vec2 warp2 = vec2(iNoise(p*0.11 + 5.0), iNoise(p*0.11 + 23.0)) - 0.5;
    vec2 pa = (p + 34.0*warp + 7.0*warp2)*0.022 + 3.1;    // big plates, ~45 m
    vec2 pb = (p + 12.0*warp.yx + 4.0*warp2.yx)*0.09;     // small plates, ~11 m
    vec2 nA, nB, nC = vec2(1.0, 0.0);
    float e2 = iVoronoi(pa, plateId, nA);
    float e  = iVoronoi(pb, chipId, nB);
    // Drifts of frost bury the small cracks in places, so the ground isn't
    // the same everywhere.
    float plain = smoothstep(0.93, 0.99, wn.y) * (1.0 - smoothstep(2.5, 8.0, wp.y));
    float cover = max(smoothstep(0.45, 0.62, iFbm(p*0.035 + 50.0)), 1.0 - plain);
    float showB = iShow(pb) * midK * (1.0 - 0.85*cover);

    // Every plate gets its own pastel tint.
    gCol = mix(vec3(0.84,0.93,1.00), vec3(0.98,0.96,0.93), smoothstep(0.3, 0.7, big));
    gCol = mix(gCol, vec3(1.00,0.87,0.84), 0.2*smoothstep(0.5, 0.8, mid));
    gCol = mix(gCol, vec3(0.66,0.85,0.99), 0.55*plateId*plateId);
    gCol = mix(gCol, vec3(0.85,0.83,0.99), 0.4*fract(plateId*7.3)*fract(plateId*7.3));
    gCol *= 0.84 + 0.16*mix(chipId, 0.7, cover);
    gCol = mix(gCol, vec3(0.94,0.97,1.00), 0.55*cover);
    gCol = mix(vec3(0.93,0.96,1.00)*(0.92 + 0.1*iRidge(p*0.3 + 2.0)), gCol, plain);
    gCol *= 1.0 + 0.12*nearK*(grain - 0.5);

    // Seams between big plates (deep red, cut in), cracks between small
    // plates, and hairline veins wandering across them.
    float seamW = 0.004 + 0.011*iNoise(p*0.09 + 60.0);   // seams widen and pinch (about 0.4 to 1.3 m)
    float seam = (1.0 - smoothstep(seamW, seamW + fwidth(e2)*1.5, e2)) * plain;
    float seamHalo = (1.0 - smoothstep(0.0, 0.07, e2)) * plain;
    float crack = (1.0 - smoothstep(0.02, 0.02 + fwidth(e)*1.5, e)) * showB;
    // Up close, a third layer: fine angular cracks, ~3 m apart.
    float fineKRaw = 1.0 - smoothstep(45.0, 110.0, dist);
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
    float stain = (0.15 + 0.6*smoothstep(0.4, 0.75, mid)) * seamHalo * seamHalo * (0.6 + 0.4*iNoise(p*0.8 + 12.0));
    gSalt = clamp(stain*0.5 + linea*0.8 + vein*0.35, 0.0, 1.0);
    float seamCore = (1.0 - smoothstep(seamW*0.35, seamW*0.35 + fwidth(e2)*1.5, e2)) * plain;
    gSalt = max(gSalt, seam*0.9);
    gDark = clamp(core*0.9 + seamCore*0.95 + crack*0.7 + vein*0.4, 0.0, 1.0);
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
    gTilt -= nA * (0.6*iGroove(e2, wA)*0.022*plain);
    gTilt -= nB * (0.18*iGroove(e, 0.05)*0.09*showB);
    gTilt -= nC * (0.05*iGroove(e3, 0.06)*0.3*fineK);
    gH = 0.0
       + (1.0 - plain)*(0.9*iRidge(p*0.06 + 8.0) + 0.3*iRidge(p*0.3 + 2.0)*iShow(p*0.3))
       - 0.3*core
       + nearK*0.012*grainA
       + 0.22*iFbm(p*0.3 + 70.0) + 0.12*cover*iRidge(p*0.5 + 4.0)*fineKRaw;

    // Smooth "window" ice here and there: glossier, a touch more aqua.
    float window = smoothstep(0.56, 0.68, iFbm(p*0.021 + 31.0));
    gCol = mix(gCol, vec3(0.66,0.88,0.95), 0.4*window);
    gGloss = 0.35 + 0.5*window;
  }

  vec3 fCol = vec3(0.8); float fH = 0.0; float fDark = 0.0; float fSalt = 0.0; float fSnow = 0.0;
  if (face > 0.002) {
    // Look at the face square-on: pick the wall plane it is closest to.
    vec2 q = abs(wn.x) > abs(wn.z) ? vec2(wp.z, wp.y) : vec2(wp.x, wp.y);
    // Features run down the slope, as if slowly worn: squash the height.
    vec2 qs = vec2(q.x, q.y*0.5);
    float sB = iShow(qs*0.19), sC = iShow(qs*0.85);
    float r1 = iRidge(qs*0.04 + 5.0);            // buttresses, ~25 m
    float r2 = iRidge(qs*0.19 + 9.0) * sB;       // creases, ~5 m
    float r3 = iRidge(qs*0.85 + 2.0) * sC;       // wrinkles, ~1 m
    float r4 = iRidge(qs*3.4 + 6.0) * iShow(qs*3.4);   // fine cracks, ~30 cm, up close
    float flute = iNoise(vec2(q.x*0.55 + 3.0*r1, q.y*0.05));   // grooves running down
    float rock = clamp(r1*0.6 + r2*0.3 + r3*0.25, 0.0, 1.0);
    fH = 2.4*r1 + 0.75*r2 + 0.16*r3 + 0.035*r4 + 0.5*flute*sB;
    // Snow-like frost rests on the gentler parts; bare blue ice shows where
    // it is steep.
    // The edge between the two is crisp and ragged, not a soft fade.
    float snowV = wn.y + 0.42*(r1 - 0.4) + 0.3*(r2 - 0.25) + 0.22*(r3 - 0.2) + 0.1*(r4 - 0.2) - 0.15*(flute - 0.5);
    fSnow = smoothstep(0.46, 0.53, snowV);
    vec3 bare = mix(vec3(0.27,0.43,0.76), vec3(0.60,0.77,0.96), rock);
    bare *= 0.85 + 0.3*flute;
    bare = mix(bare, vec3(0.66,0.68,0.95), 0.28*iNoise(q*0.03 + 7.0));
    vec3 snowC = vec3(0.93,0.96,1.00) * (0.93 + 0.1*r3);
    // Thin dark creases in the bare ice, and shade gathered in hollows.
    float creaseLine = max(smoothstep(0.78, 0.95, r3*2.2), smoothstep(0.8, 0.97, r4*2.4)*0.7);
    bare *= 1.0 - 0.45*creaseLine;
    fCol = mix(bare, snowC, fSnow);
    fCol *= 0.74 + 0.4*clamp(0.5*r1 + 0.4*r2 + 0.35*r3, 0.0, 1.0);
    fCol *= mix(vec3(0.80,0.90,1.04), vec3(1.0), smoothstep(-30.0, 60.0, wp.y));
    fCol *= 1.0 + 0.12*nearK*(grain - 0.5);
    // Rust: stains that run down the bare ice and gather in its creases.
    float streak = smoothstep(0.55, 0.9, iNoise(vec2(q.x*0.2 + 2.0*iNoise(p*0.04), q.y*0.016)));
    float crease = smoothstep(0.45, 0.1, r2) * smoothstep(0.5, 0.75, iNoise(q*0.09 + 30.0));
    fSalt = clamp(streak*0.42 + crease*0.35, 0.0, 1.0) * (1.0 - 0.85*fSnow);
    fDark = clamp(streak*crease*0.5, 0.0, 1.0) * (1.0 - fSnow);
  }

  vec3 col = mix(gCol, fCol, face);
  float saltAmt = mix(gSalt, fSalt, face);
  float darkAmt = mix(gDark, fDark, face);
  col = mix(col, salt, saltAmt);
  col = mix(col, saltDark, darkAmt);
  // Down in the canyon the ice turns deeper blue.
  col *= mix(vec3(1.0), vec3(0.62,0.78,1.08), smoothstep(-3.0, -30.0, wp.y));

  iceCol = col;
  iceFace = face;
  iceH = mix(gH, fH, face);
  iceTilt = gTilt * flat_;
  iceSalt = max(saltAmt, darkAmt);
  iceGloss = mix(gGloss, 0.5*(1.0 - fSnow), face) * (1.0 - 0.6*iceSalt);
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

export function makeIceMaterial(extra = {}) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.6, metalness: 0, ...extra });
  mat.onBeforeCompile = (shader) => {
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
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\nnormal = iceBump(normal, iceH);\nnormal = normalize(normal - (viewMatrix * vec4(iceTilt.x, 0.0, iceTilt.y, 0.0)).xyz);')
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
          'vec3 irradiance = (dotNL * 1.16 / (dotNL + 0.16)) * directLight.color;'
        )
      )
      .replace(
        '#include <lights_fragment_end>',
        `#include <lights_fragment_end>
        // Keep the Sun's mirror-glint on smooth ice from blowing out.
        reflectedLight.directSpecular = min(reflectedLight.directSpecular, vec3(0.42,0.38,0.32));
        // How much direct light (Sun or a lamp) this spot gets.
        float iceLit = clamp(dot(reflectedLight.directDiffuse, vec3(0.9)), 0.0, 1.0);
        // Stylised: shadowed ice glows soft blue-violet, so shadows are never
        // dead black (stands in for light bouncing off bright ice).
        totalEmissiveRadiance += iceCol * mix(vec3(0.11,0.15,0.33), vec3(0.0), iceLit);
        // Steep faces glow a little from inside, strongest at their edges.
        float iceRim = pow(1.0 - clamp(dot(geometryNormal, geometryViewDir), 0.0, 1.0), 3.0);
        totalEmissiveRadiance += iceFace * (1.0 - iceSalt) * (0.06 + 0.25*iceRim) * vec3(0.16,0.50,0.90);
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
  const mat = makeIceMaterial();
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
  mesh.name = 'terrain';
  return mesh;
}
