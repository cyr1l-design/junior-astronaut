// Records the intro as a video, one frame at a time, so every frame is
// exactly in step with the soundtrack.
//
// Usage: node tools/record-intro.cjs <audio.wav> <out.mp4> [fps] [--stills t1,t2,...]
// Needs a web server on http://localhost:8123 serving this folder.

const { chromium } = require("playwright");
const { spawn } = require("child_process");
const fs = require("fs");

const [audio, out, fpsArg] = process.argv.slice(2);
const fps = Number(fpsArg) || 30;
const stillsIdx = process.argv.indexOf("--stills");
const stills = stillsIdx > 0 ? process.argv[stillsIdx + 1].split(",").map(Number) : null;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto("http://localhost:8123/index.html?capture=1");
  await page.evaluate(() => window.__ready);
  const END = await page.evaluate(() => window.__END);

  if (stills) {                          // quick check: a few frames as pictures
    fs.mkdirSync(out, { recursive: true });
    for (const t of stills) {
      await page.evaluate((t) => window.__render(t), t);
      await page.screenshot({ path: `${out}/t${t.toFixed(2)}.jpg`, type: "jpeg", quality: 85 });
    }
    await browser.close(); return;
  }

  const frames = Math.floor(END * fps);
  const ff = spawn("ffmpeg", ["-y", "-v", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "mjpeg", "-i", "-",
    "-i", audio, "-map", "0:v", "-map", "1:a", "-t", (frames / fps).toFixed(3),
    "-c:v", "libx264", "-preset", "slow", "-crf", "17", "-pix_fmt", "yuv420p", "-profile:v", "high",
    "-c:a", "aac", "-b:a", "256k", "-movflags", "+faststart", out], { stdio: ["pipe", "inherit", "inherit"] });

  for (let f = 0; f < frames; f++) {
    await page.evaluate((t) => window.__render(t), f / fps);
    const buf = await page.screenshot({ type: "jpeg", quality: 95 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (f % 90 === 0) process.stdout.write(`frame ${f}/${frames}\n`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
  await browser.close();
  console.log("wrote", out);
})();
