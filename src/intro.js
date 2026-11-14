// Intro scene: a 30-second story about Europa.
//
// Everything on screen is worked out from one number, the time `t` in
// seconds, by render(t). In the game, t comes from the soundtrack, so
// pictures and narration can't drift apart. To record the demo video,
// tools/record-intro.mjs opens this page with ?capture=1 and calls
// render(t) once per frame.

import { FACTS, CREDITS } from "./intro-data.js";

export const END = 29.8; // seconds: keeps the demo video under 30 s

// ---------- small maths helpers ----------
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, k) => a + (b - a) * k;
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
// Opacity of something visible from a to b, fading in over fi and out over fo
const win = (t, a, b, fi = 0.4, fo = 0.4) =>
  Math.min(clamp((t - a) / fi), clamp((b - t) / fo));
const prog = (t, a, b) => clamp((t - a) / (b - a));

// ---------- the timeline ----------
// Each shot: when it's on screen, and how the camera drifts (Ken Burns).
// Times were set against the narration (see story/intro.md).
const SHOTS = [
  { id: "s-jupiter", a: 0.0, b: 4.15, fi: 1.5, fo: 0.45, s: [1.0, 1.12], x: [0, -20], y: [0, 0],
    place: { w: 1303, h: 1180, cx: 1080, cy: 540 }, mask: [93, 100] },
  { id: "s-europa", a: 3.7, b: 5.15, fi: 0.45, fo: 0.45, s: [1.14, 1.04], x: [0, 0], y: [0, 0] },
  { id: "s-ice", a: 4.7, b: 8.75, fi: 0.45, fo: 0.45, s: [1.28, 1.08], x: [-40, 30], y: [20, -10] },
  { id: "s-launch", a: 8.3, b: 12.85, fi: 0.45, fo: 0.45, s: [1.02, 1.12], x: [0, 0], y: [0, 0],
    pos: "center 20%", origin: "48% 25%" }, // keep the rocket's nose in frame
  { id: "s-earth", a: 12.4, b: 17.0, fi: 0.45, fo: 0.5, s: [0.97, 1.04], x: [0, 0], y: [0, 0],
    place: { w: 1250, h: 1250, cx: 1300, cy: 540 }, mask: [70, 82] },
  { id: "s-clipper", a: 18.35, b: 23.05, fi: 0.6, fo: 0.45, s: [1.16, 1.03], x: [40, -20], y: [0, 0] },
  { id: "s-lander", a: 22.65, b: 27.75, fi: 0.45, fo: 0.6, s: [1.03, 1.14], x: [0, -50], y: [0, 10] },
  { id: "s-title", a: 27.6, b: 99, fi: 0.7, fo: 0.5, s: [1.0, 1.07], x: [0, 0], y: [0, 0],
    place: { w: 1150, h: 1106, cx: 960, cy: 540 }, dim: 0.5, mask: [86, 100] },
];

// Words on screen. tag: "real" or "imagined".
const CAPTIONS = [
  { a: 0.9, b: 3.75, tag: "real", date: "Jupiter", line: "The giant planet has a frozen moon…" },
  { a: 5.15, b: 8.5, tag: "real", date: "1990s", line: "NASA's Galileo spacecraft finds clues: a salty ocean hides under the ice." },
  { a: 8.75, b: 12.5, tag: "real", date: "2024", line: "NASA launches Europa Clipper to find out." },
  { a: 12.85, b: 16.7, tag: "real", date: "3 December 2026", line: "Clipper swings past Earth, on its way to Jupiter." },
  { a: 18.7, b: 22.75, tag: "imagined", date: "3 December 2031", line: "Clipper proves it: the ocean is real." },
  { a: 22.95, b: 27.4, tag: "imagined", date: "2040", line: "You land on Europa. Your mission: dig through 29 km of ice." },
];

const TAGS = [
  { a: 0.6, b: 16.85, kind: "real", text: "REAL" },
  { a: 17.0, b: 27.45, kind: "imagined", text: "IMAGINED" },
];

const SHOT_CREDITS = [
  { a: 0.6, b: 3.9, text: "Jupiter · NASA, ESA, STScI · Hubble, 2024" },
  { a: 3.95, b: 4.95, text: "Europa · NASA/JPL-Caltech/SETI Institute · Galileo" },
  { a: 5.0, b: 8.55, text: "Europa's ice · NASA/JPL-Caltech/SETI Institute · Galileo, 1998" },
  { a: 8.6, b: 12.6, text: "Launch, 14 Oct 2024 · SpaceX, via NASA" },
  { a: 12.7, b: 16.8, text: "Earth · NASA, Apollo 17 · Clipper's path: diagram" },
  { a: 18.5, b: 22.8, text: "Illustration · NASA/JPL-Caltech" },
  { a: 23.0, b: 27.4, text: "Lander concept (illustration) · NASA/JPL-Caltech" },
  { a: 27.9, b: 99, text: "Europa · NASA/JPL-Caltech/SwRI/MSSS · Björn Jónsson, CC BY 3.0 · Juno" },
];

const TITLE_WORDS = [27.75, 27.98, 28.2]; // "Are" "we" "alone?" land on the narrator's words

// ---------- page elements ----------
const $ = (s) => document.querySelector(s);
const el = {
  stage: $("#stage"), stars: $("#stars"), scrim: $("#scrim"), tag: $("#tag"),
  date: $("#date"), line: $("#line"), bigword: $("#bigword"), imagine: $("#imagine"),
  titleWords: [...document.querySelectorAll("#title span")], credit: $("#credit"),
  flyby: $("#flyby"), flypath: $("#flypath"), flydot: $("#flydot"), flylabel: $("#flylabel"),
  tojupiter: $("#tojupiter"), fade: $("#fade"),
};
const shotEls = Object.fromEntries(SHOTS.map((s) => [s.id, document.getElementById(s.id)]));

// Fixed placement for pictures that aren't full-screen (planets on black)
for (const s of SHOTS) {
  const img = shotEls[s.id].querySelector("img");
  if (s.place) {
    const { w, h, cx, cy } = s.place;
    Object.assign(img.style, { width: w + "px", height: h + "px", left: cx - w / 2 + "px", top: cy - h / 2 + "px" });
  }
  if (s.dim) img.style.filter = `brightness(${s.dim})`;
  if (s.pos) img.style.objectPosition = s.pos;
  if (s.mask) { // soft round edge: only the planet fades in, not its square black frame
    const m = `radial-gradient(circle closest-side, #000 ${s.mask[0]}%, transparent ${s.mask[1]}%)`;
    img.style.maskImage = m; img.style.webkitMaskImage = m;
  }
  if (s.origin) img.style.transformOrigin = s.origin;
}

// ---------- starfield (same stars every time) ----------
function drawStars() {
  let seed = 20261203;
  const rnd = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const c = el.stars.getContext("2d");
  c.fillStyle = "#000"; c.fillRect(0, 0, 2000, 1160);
  for (let i = 0; i < 1100; i++) {
    const x = rnd() * 2000, y = rnd() * 1160, m = rnd();
    const r = m > 0.985 ? 1.8 : m > 0.9 ? 1.2 : 0.7;
    c.globalAlpha = 0.25 + 0.75 * rnd() * (r > 1 ? 1 : 0.7);
    c.fillStyle = rnd() > 0.85 ? "#cfe6ff" : "#ffffff";
    c.beginPath(); c.arc(x, y, r, 0, Math.PI * 2); c.fill();
  }
  c.globalAlpha = 1;
}

// ---------- render one moment ----------
let pathLen = 0;
export function render(t) {
  // stars drift slowly
  el.stars.style.transform = `translate(${-t * 4}px, ${-t * 1.5}px)`;

  // pictures
  for (const s of SHOTS) {
    const o = win(t, s.a, s.b, s.fi, s.fo);
    const node = shotEls[s.id];
    node.style.opacity = o.toFixed(4);
    if (o <= 0) continue;
    const k = ease(prog(t, s.a, Math.min(s.b, END)));
    const img = node.querySelector("img");
    img.style.transform = `translate(${lerp(s.x[0], s.x[1], k)}px, ${lerp(s.y[0], s.y[1], k)}px) scale(${lerp(s.s[0], s.s[1], k)})`;
  }

  // tag
  const tg = TAGS.find((g) => t >= g.a - 0.3 && t <= g.b + 0.3);
  if (tg) {
    el.tag.textContent = tg.text;
    el.tag.className = tg.kind;
    el.tag.style.opacity = win(t, tg.a, tg.b, 0.3, 0.3);
  } else el.tag.style.opacity = 0;

  // caption
  const cap = CAPTIONS.find((c) => t >= c.a - 0.05 && t <= c.b + 0.35);
  if (cap) {
    const o = win(t, cap.a, cap.b, 0.35, 0.3);
    const rise = (1 - ease(clamp((t - cap.a) / 0.5))) * 24;
    el.date.textContent = cap.date;
    el.date.style.color = cap.tag === "real" ? "var(--real)" : "var(--imagined)";
    el.line.textContent = cap.line;
    el.date.style.opacity = o; el.line.style.opacity = win(t, cap.a + 0.15, cap.b, 0.35, 0.3);
    el.date.style.transform = `translateY(${rise}px)`;
    el.line.style.transform = `translateY(${rise * 1.3}px)`;
  } else { el.date.style.opacity = 0; el.line.style.opacity = 0; }

  // picture credit, bottom right
  const cr = SHOT_CREDITS.find((c) => t >= c.a - 0.05 && t <= c.b + 0.3);
  if (cr) { el.credit.textContent = cr.text; el.credit.style.opacity = win(t, cr.a, cr.b, 0.3, 0.3); }
  else el.credit.style.opacity = 0;

  // "EUROPA"
  const bw = win(t, 3.95, 5.0, 0.25, 0.3);
  el.bigword.style.opacity = bw;
  el.bigword.style.letterSpacing = `${lerp(0.02, 0.1, prog(t, 3.95, 5.0))}em`;

  // "Now, imagine…"
  const im = win(t, 16.95, 18.55, 0.35, 0.35);
  el.imagine.style.opacity = im;
  el.imagine.style.letterSpacing = `${lerp(0.26, 0.4, prog(t, 16.95, 18.55))}em`;

  // fly-by diagram over Earth
  const fo = win(t, 12.9, 16.85, 0.4, 0.4);
  el.flyby.style.opacity = fo;
  if (fo > 0 && pathLen) {
    const p = ease(prog(t, 13.1, 16.5));
    const pt = el.flypath.getPointAtLength(p * pathLen);
    el.flydot.setAttribute("cx", pt.x); el.flydot.setAttribute("cy", pt.y);
    el.flylabel.setAttribute("x", pt.x + 44); el.flylabel.setAttribute("y", pt.y + 12);
    el.flylabel.style.opacity = win(t, 13.2, 14.9, 0.3, 0.4); // gone before it nears the edge
    el.flypath.style.strokeDashoffset = (-t * 30).toFixed(1); // dashes flow along the path
    el.flypath.style.opacity = 0.75;
    el.tojupiter.style.opacity = win(t, 15.4, 16.85, 0.4, 0.4);
  }

  // title
  TITLE_WORDS.forEach((w, i) => {
    const k = clamp((t - w) / 0.16);
    const span = el.titleWords[i];
    span.style.opacity = k;
    span.style.transform = `scale(${lerp(1.35, 1, ease(k)) * lerp(1, 1.04, prog(t, 28.4, END))})`;
  });

  // scrim is lighter on the title
  el.scrim.style.opacity = t > 27.4 ? 1 - prog(t, 27.4, 27.9) * 0.6 : 1;

  // fade up from black at the very start
  el.fade.style.opacity = 1 - clamp(t / 0.5);
}

// ---------- fit the stage to the window ----------
function fit() {
  const k = Math.min(innerWidth / 1920, innerHeight / 1080);
  el.stage.style.transform = `translate(${-960 * k}px, ${-540 * k}px) scale(${k})`;
}

// ---------- start-up ----------
async function ready() {
  drawStars();
  const imgs = [...document.querySelectorAll("#stage img")];
  await Promise.all(imgs.map((i) => i.decode().catch(() => {})));
  await document.fonts.ready;
  pathLen = el.flypath.getTotalLength();
  el.flypath.style.strokeDasharray = "14 12";
}

const capture = new URLSearchParams(location.search).has("capture");

if (capture) {
  // Video recording mode: no buttons, the recorder drives the clock.
  document.querySelectorAll(".ui").forEach((n) => n.classList.add("hidden"));
  el.stage.style.left = "0"; el.stage.style.top = "0"; el.stage.style.transform = "none";
  window.__render = render;
  window.__END = END;
  window.__ready = ready().then(() => render(0));
} else {
  fit(); addEventListener("resize", fit);
  game();
}

// ---------- game mode ----------
function game() {
  const audio = $("#audio");
  const start = $("#start"), skip = $("#skip"), end = $("#end");
  const realPanel = $("#whatsreal"), mission = $("#mission");
  let running = false, clock0 = 0, useAudio = true;

  $("#facts").innerHTML = FACTS.map((f) =>
    `<li><b class="${f.kind === "real" ? "r" : f.kind === "imagined" ? "i" : ""}">${f.kind.toUpperCase()}</b>${f.text}</li>`).join("");
  $("#credits").innerHTML = CREDITS.map((c) => `<li>${c}</li>`).join("");

  const now = () => (useAudio ? audio.currentTime : (performance.now() - clock0) / 1000);

  function loop() {
    if (!running) return;
    const t = now();
    render(Math.min(t, END + 2));
    if (t >= END) finish();
    else requestAnimationFrame(loop);
  }
  function finish() {
    running = false; skip.classList.add("hidden"); end.classList.add("show");
    $("#begin").focus();
  }
  async function play() {
    start.classList.add("hidden"); end.classList.remove("show");
    skip.classList.remove("hidden");
    audio.currentTime = 0;
    try { await audio.play(); useAudio = true; }
    catch { useAudio = false; clock0 = performance.now(); } // no sound: still play the pictures
    running = true; requestAnimationFrame(loop);
  }

  ready().then(() => { render(0); $("#play").focus(); });
  $("#play").addEventListener("click", play);
  $("#again").addEventListener("click", play);
  skip.addEventListener("click", () => { audio.pause(); render(END); finish(); });
  $("#real").addEventListener("click", () => {
    realPanel.classList.add("show"); realPanel.scrollTop = 0;
    $("#closereal").focus({ preventScroll: true });
  });
  $("#closereal").addEventListener("click", () => { realPanel.classList.remove("show"); $("#real").focus(); });
  $("#begin").addEventListener("click", () => mission.classList.add("show"));
  $("#back").addEventListener("click", () => mission.classList.remove("show"));
}
