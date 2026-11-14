"""Mixes the intro soundtrack: narration lines at fixed times + music, plus (optionally) the real
launch sound from NASA's launch footage.

Usage:
  python3 tools/intro-v3/mix.py <vo_dir> <music.wav> <music_start_s> <out.wav> [--ending smooth|drop] [--roar <launch-large.mp4>]

- vo_dir: vo1.wav ... vo5.wav (assets/intro/v3).
- music_start_s: where in the track to start, chosen so the track's swell lands on the launch (15.2 s).
- The music dips under the narrator. Dips closer than 2 s apart are joined into one, so the music
  never jumps up between two lines (Cyril, 2026-11-14: "it's getting loud, and then it once again
  getting quieter. It feels really awkward").
- --ending smooth: the music stays low from line 4 to the end and fades out under the title.
- --ending drop: the music dies away as Europa goes dark (26.4 s); "Are we alone?" is spoken in
  near-silence, a trailer-style ending.
- --roar: lays the real rocket sound from NASA's launch footage under the launch shots.

The music tracks are Cyril's Epidemic Sound downloads; they are not in this public repository.
"""
import argparse, subprocess
import numpy as np

SR = 48000
END = 29.8                                          # demo limit is 30 s
VO = {1: 0.6, 2: 5.9, 3: 10.2, 4: 20.6, 5: 27.4}    # line -> start (s)
DEPTH = {1: 3, 2: 3, 3: 5, 4: 11, 5: 11}            # dB the music dips under each line
LAUNCH = (15.2, 18.27)                              # the two launch shots
DARK = 26.44                                        # cut to Europa going dark

ap = argparse.ArgumentParser()
ap.add_argument("vo_dir"); ap.add_argument("music"); ap.add_argument("start", type=float); ap.add_argument("out")
ap.add_argument("--ending", choices=["smooth", "drop"], default="smooth")
ap.add_argument("--roar")
a = ap.parse_args()


def load(path, ss=None, t=None):
    cmd = ["ffmpeg", "-v", "error"] + (["-ss", str(ss), "-t", str(t)] if ss is not None else [])
    cmd += ["-i", path, "-vn", "-f", "f32le", "-ac", "2", "-ar", str(SR), "-"]
    raw = subprocess.run(cmd, capture_output=True, check=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2).astype(np.float64)


def smooth(x, sec):
    k = max(1, int(sec * SR)); return np.convolve(x, np.ones(k) / k, "same")


n = int(END * SR); t = np.arange(n) / SR
voice = np.zeros((n, 2))
spans = []
for k, s in VO.items():
    clip = load(f"{a.vo_dir}/vo{k}.wav")
    i = int(s * SR); j = min(n, i + len(clip)); voice[i:j] += clip[: j - i]
    spans.append([s - 0.5, s + len(clip) / SR + 0.15, DEPTH[k]])

# join dips closer than 2 s, so the music doesn't bounce up between lines
joined = [spans[0]]
for s in spans[1:]:
    if s[0] - joined[-1][1] < 2.0:
        joined[-1][1] = s[1]; joined[-1][2] = max(joined[-1][2], s[2])
    else:
        joined.append(s)
dip = np.zeros(n)
for s, e, d in joined:
    dip[int(max(0, s) * SR): int(min(END + 1, e) * SR)] = d
if a.ending == "smooth":
    dip[int(VO[4] * SR):] = np.maximum(dip[int(VO[4] * SR):], DEPTH[4])   # stay low to the end
dip = smooth(dip, 0.6)                                                    # slow, gentle ramps

music = load(a.music, a.start, END + 0.5)[:n]
if len(music) < n: music = np.vstack([music, np.zeros((n - len(music), 2))])
fade_in = np.clip(t / 1.5, 0, 1) ** 2
if a.ending == "smooth":
    fade_out = np.clip((END - t) / 2.5, 0, 1) ** 1.5
else:  # die away over 1.6 s from the cut to dark Europa, leaving a faint tail
    fade_out = np.where(t < DARK, 1.0, np.exp(-(t - DARK) / 0.55))
gain = 10 ** ((-dip - 2) / 20) * fade_in * fade_out
music *= gain[:, None]

roar = np.zeros((n, 2))
if a.roar:  # real launch sound: Falcon Heavy climbing (1328 s), then the quiet of the rocket camera at separation
    r = load(a.roar, 1328.0, LAUNCH[1] - LAUNCH[0] + 1.0)
    i = int((LAUNCH[0] - 0.3) * SR); j = min(n, i + len(r)); roar[i:j] = r[: j - i]
    env = np.clip((t - (LAUNCH[0] - 0.3)) / 0.3, 0, 1) * np.clip((LAUNCH[1] + 0.4 - t) / 1.2, 0, 1)
    roar *= (env * 10 ** (4 / 20))[:, None]

voice *= 10 ** (9 / 20)
mix = voice + music + roar
peak = np.abs(mix).max()
if peak > 0.97: mix *= 0.97 / peak

for k, s in VO.items():
    i = int(s * SR); j = min(n, i + int(4 * SR))
    rms = lambda x: 20 * np.log10(np.sqrt((x[i:j] ** 2).mean()) + 1e-9)
    print(f"line {k}: voice {rms(voice):.1f} dB, music {rms(music):.1f} dB")

subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "f32le", "-ar", str(SR), "-ac", "2", "-i", "-",
                "-af", "loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000", "-c:a", "pcm_s16le", a.out],
               input=mix.astype(np.float32).tobytes(), check=True)
print("wrote", a.out)
