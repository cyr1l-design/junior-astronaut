"""Mixes the intro soundtrack: narration lines at fixed times + music, which dips under each line.

Usage: python3 tools/intro-v3/mix.py assets/intro/v3 <superior.wav> <out.wav>

The music is "Superior" by Silver Maple (Epidemic Sound, licensed to Cyril). It is not in this
repository (it's public, and the licence covers using the track, not sharing the file).
No sound effects (Cyril, 2026-11-14).
"""
import subprocess, sys
import numpy as np

SR = 48000
END = 29.8                       # the video is cut here (demo limit: 30 s)
VODIR, MUSIC, OUT = sys.argv[1:4]
MSTART = 72.04                   # start 1:12.04 into "Superior": its swell (1:27.24) lands on the launch, 15.2 s
VO = {1: 0.6, 2: 5.9, 3: 10.2, 4: 20.6, 5: 27.4}     # line -> start time (s)
DEPTH = {1: 3, 2: 3, 3: 5, 4: 11, 5: 11}             # dB the music dips under each line (more where the music is loud)


def load(path, ss=None, t=None):
    cmd = ["ffmpeg", "-v", "error"] + (["-ss", str(ss), "-t", str(t)] if ss is not None else [])
    cmd += ["-i", path, "-f", "f32le", "-ac", "2", "-ar", str(SR), "-"]
    raw = subprocess.run(cmd, capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64)


n = int(END * SR)
voice = np.zeros((n, 2))
duck = np.zeros(n)
for k, t in VO.items():
    clip = load(f"{VODIR}/vo{k}.wav")
    i = int(t * SR); j = min(n, i + len(clip))
    voice[i:j] += clip[: j - i]
    a = max(0, int((t - 0.25) * SR)); b = min(n, int((t + len(clip) / SR + 0.1) * SR))
    duck[a:b] = np.maximum(duck[a:b], DEPTH[k])
ramp = int(0.25 * SR)
duck = np.convolve(duck, np.ones(ramp) / ramp, "same")          # 250 ms ramps in and out of each dip

music = load(MUSIC, MSTART, END + 0.5)[:n]
if len(music) < n:
    music = np.vstack([music, np.zeros((n - len(music), 2))])
t = np.arange(n) / SR
fade = np.minimum(np.clip(t / 1.5, 0, 1) ** 2, np.clip((END - t) / 1.5, 0, 1) ** 2)
gain = 10 ** ((-duck - 2) / 20) * fade

voice *= 10 ** (9 / 20)
music *= gain[:, None]
mix = voice + music
peak = np.abs(mix).max()
if peak > 0.97:
    mix *= 0.97 / peak

# How far the voice sits above the music on each line (aim: about 11-13 dB)
for k, s in VO.items():
    a = int(s * SR); b = min(n, a + int(4 * SR))
    rms = lambda x: 20 * np.log10(np.sqrt((x[a:b] ** 2).mean()) + 1e-9)
    print(f"line {k}: voice {rms(voice):.1f} dB, music {rms(music):.1f} dB")

subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-",
                "-af", "loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000", "-c:a", "pcm_s16le", OUT],
               input=mix.astype(np.float32).tobytes(), check=True)
print("wrote", OUT)
