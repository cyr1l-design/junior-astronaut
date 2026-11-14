"""Mixes the intro soundtrack: narration + music + sound effects.

Usage: python3 tools/mix-intro.py <vo_dir> <sfx_dir> <music_file|-> <out_wav>

- Narration clips vo1..vo7.wav are placed at the times in VO below (the same
  times the pictures in src/intro.js are set to).
- Music is cut from the Holst recording (MUSIC segments) and turned down
  automatically while the narrator speaks ("ducking").
- The result is levelled to about -14 LUFS afterwards with ffmpeg (see
  tools/build-intro-audio.sh).
"""
import sys, subprocess, numpy as np
from scipy.io import wavfile
from scipy.signal import butter, sosfilt

SR = 48000
END = 29.8   # the video is cut here (under the 30-second limit)
TAIL = 3.0   # the game keeps the title's sound ringing a little longer

vo_dir, sfx_dir, music_path, out = sys.argv[1:5]

# Narration: clip number -> start time (seconds)
VO = {1: 0.60, 2: 4.95, 3: 8.50, 4: 12.60, 5: 17.00, 6: 22.70, 7: 27.75}

# Sound effects: (name, start time, gain in dB)
SFX = [
    ("shimmer", 0.00, -12), ("boom", 0.15, -6),
    ("whoosh", 4.20, -16), ("whoosh", 8.05, -17), ("rumble", 8.30, -9),
    ("whoosh", 12.15, -17), ("flyby", 13.55, -11),
    ("riser", 15.15, -10), ("boom", 18.30, -12),
    ("whoosh", 22.35, -17), ("impact", 27.72, -4),
]

# Music: (start in the recording, start in the intro, length, gain dB, fade in, fade out)
# Filled in once the recording is chosen; see the music notes in story/intro.md.
MUSIC = []

def load(path):
    """Any audio file -> float stereo at 48 kHz (via ffmpeg)."""
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-f", "f32le", "-ac", "2", "-ar", str(SR), "-"],
                         capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64)

def db(x): return 10 ** (x / 20)

n = int((END + TAIL) * SR)
voice = np.zeros((n, 2)); fx = np.zeros((n, 2)); music = np.zeros((n, 2))

def place(buf, clip, t, gain=1.0):
    i = int(t * SR); j = min(n, i + len(clip))
    buf[i:j] += clip[: j - i] * gain

for k, t in VO.items():
    place(voice, load(f"{vo_dir}/vo{k}.wav"), t)
for name, t, g in SFX:
    place(fx, load(f"{sfx_dir}/{name}.wav"), t, db(g))

if music_path != "-" and MUSIC:
    src = load(music_path)
    for s0, t0, dur, g, fi, fo in MUSIC:
        seg = src[int(s0 * SR): int((s0 + dur) * SR)].copy()
        m = len(seg); ramp = np.ones(m)
        a, b = int(fi * SR), int(fo * SR)
        if a: ramp[:a] = np.linspace(0, 1, a) ** 2
        if b: ramp[-b:] = np.minimum(ramp[-b:], np.linspace(1, 0, b) ** 2)
        place(music, seg * ramp[:, None], t0, db(g))

# Ducking: music drops by up to 9 dB while the narrator talks
env = np.abs(voice).max(1)
env = sosfilt(butter(2, 8, "low", fs=SR, output="sos"), env)        # smooth loudness
talking = np.clip(env / 0.05, 0, 1)
att, rel = np.exp(-1 / 50), np.exp(-1 / 350)   # per 1 ms step: 50 ms attack, 350 ms release
duck = np.zeros(n); g = 0.0
for i in range(0, n, 48):                                          # 1 ms steps
    target = talking[i]
    g = att * g + (1 - att) * target if target > g else rel * g + (1 - rel) * target
    duck[i:i + 48] = g
music *= (1 - duck * (1 - db(-9))).reshape(-1, 1)

mix = voice * db(-1) + music + fx
peak = np.abs(mix).max()
if peak > 0.98: mix *= 0.98 / peak
wavfile.write(out, SR, (mix * 32767).astype(np.int16))
print(f"wrote {out}: {n / SR:.1f}s, peak {20 * np.log10(np.abs(mix).max()):.1f} dBFS")
