// Draws the words layer (overlay.html, transparent) frame by frame, lays it over the cut footage and adds the soundtrack.
// Usage: node tools/intro-v3/render.cjs <picture.mp4> <soundtrack.wav> <out.mp4> ["music credit"] [title word times, e.g. 27.5,27.68,27.82]
const { chromium } = require("playwright"); const fs = require("fs"), path = require("path"); const { spawn } = require("child_process");
const [FOOT, AUDIO, OUT, MUSIC = "", WORDS = ""] = process.argv.slice(2); const ROOT = path.resolve(__dirname, "../.."); const fps = 30, frames = 894;
const types = { ".html": "text/html", ".woff2": "font/woff2" };
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.route("http://ov.local/**", (r) => { const f = path.join(ROOT, decodeURIComponent(new URL(r.request().url()).pathname));
    r.fulfill({ status: 200, contentType: types[path.extname(f)] || "application/octet-stream", body: fs.readFileSync(f) }); });
  await p.goto("http://ov.local/tools/intro-v3/overlay.html?music=" + encodeURIComponent(MUSIC) + "&words=" + WORDS); await p.evaluate(() => window.ready);
  const ff = spawn("ffmpeg", ["-y", "-v", "error", "-i", FOOT, "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-", "-i", AUDIO,
    "-filter_complex", "[0:v][1:v]overlay=0:0:format=auto,format=yuv420p[v];[2:a]volume=0.9dB,alimiter=limit=0.84:level=false[a]",
    "-map", "[v]", "-map", "[a]", "-t", (frames / fps).toFixed(3), "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-profile:v", "high",
    "-c:a", "aac", "-b:a", "256k", "-metadata", "title=Are we alone? Junior Astronaut: Europa", "-metadata", "comment=Footage: NASA, NASA/JPL-Caltech, SpaceX (NASA Image and Video Library). Narrator: AI voice (ElevenLabs). Music: " + MUSIC + ".", "-movflags", "+faststart", OUT], { stdio: ["pipe", "inherit", "inherit"] });
  for (let f = 0; f < frames; f++) {
    await p.evaluate((t) => window.render(t), f / fps);
    const buf = await p.screenshot({ type: "png", omitBackground: true });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  }
  ff.stdin.end(); await new Promise((r) => ff.on("close", r)); await b.close(); console.log("wrote", OUT);
})();
