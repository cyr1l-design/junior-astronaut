"""Synthesises the intro's sound effects from scratch (no samples, no licences).
Run: python3 tools/make-sfx.py <out_dir>"""
import sys, os, numpy as np
from scipy.signal import butter, sosfilt
from scipy.io import wavfile

SR = 48000
rng = np.random.default_rng(7)
out = sys.argv[1]; os.makedirs(out, exist_ok=True)

def t_(d): return np.arange(int(d * SR)) / SR
def lp(x, f, o=4): return sosfilt(butter(o, f, 'low', fs=SR, output='sos'), x)
def hp(x, f, o=4): return sosfilt(butter(o, f, 'high', fs=SR, output='sos'), x)
def bp(x, lo, hi, o=2): return sosfilt(butter(o, [lo, hi], 'band', fs=SR, output='sos'), x)
def noise(d): return rng.standard_normal(int(d * SR))
def norm(x, peak=0.9): return x / (np.max(np.abs(x)) + 1e-9) * peak
def stereo(l, r=None): return np.stack([l, l if r is None else r], 1)
def save(name, x): wavfile.write(f'{out}/{name}.wav', SR, (np.clip(x, -1, 1) * 32767).astype(np.int16))

def swept_bp(x, f0, f1, q_oct=0.6, steps=60):
    """Band-pass whose centre glides from f0 to f1 (block-wise)."""
    n = len(x); y = np.zeros(n); blk = n // steps
    for i in range(steps):
        a, b = i * blk, n if i == steps - 1 else (i + 1) * blk
        fc = f0 * (f1 / f0) ** (i / (steps - 1))
        lo, hi = fc / 2 ** (q_oct / 2), min(fc * 2 ** (q_oct / 2), SR / 2 - 100)
        seg = bp(x[max(0, a - 2000):b], lo, hi)[-(b - a):]
        y[a:b] = seg
    return y

# 1. Opening boom: deep sub drop with a soft noise thump
t = t_(3.0)
sub = np.sin(2 * np.pi * np.cumsum(70 * (35 / 70) ** (t / 3.0)) / SR) * np.exp(-t * 1.3)
thump = lp(noise(3.0), 180) * np.exp(-t * 9)
boom = norm(sub + 0.6 * norm(thump)) * np.minimum(1, t / 0.01)
save('boom', stereo(boom * 0.95))

# 2. Whoosh: noise swept up then down, panned across
d = 1.3; t = t_(d)
env = np.sin(np.pi * np.clip(t / d, 0, 1)) ** 2
w = swept_bp(noise(d), 300, 3500, 1.0) * env
w = norm(w, 0.8); pan = t / d
save('whoosh', stereo(w * np.cos(pan * np.pi / 2) * 1.2, w * np.sin(pan * np.pi / 2) * 1.2))

# 3. Launch rumble: brown noise, low-passed, with crackle
d = 4.5; t = t_(d)
brown = np.cumsum(noise(d)); brown = hp(brown, 20, 2)
rum = lp(brown, 140) ; rum = norm(rum)
crack = hp(noise(d), 800) * (rng.random(len(t)) > 0.9985) * 6
crack = lp(crack, 4000)
env = np.minimum(1, t / 0.6) * np.minimum(1, (d - t) / 1.2)
r = norm(rum + 0.25 * crack) * env
save('rumble', stereo(r, np.roll(r, 240)))

# 4. Fly-by: Doppler sweep (tone + air) panning left to right
d = 2.6; t = t_(d); x = (t - d / 2) / 0.45
f = 520 - 260 * np.tanh(x)                     # pitch falls as it passes
tone = np.sin(2 * np.pi * np.cumsum(f) / SR)
air = swept_bp(noise(d), 900, 2400, 1.2)
env = 1 / (1 + x ** 2)
fb = norm(0.35 * tone + norm(air)) * env
pan = 0.5 + 0.5 * np.tanh(x)
save('flyby', stereo(fb * np.cos(pan * np.pi / 2) * 1.3, fb * np.sin(pan * np.pi / 2) * 1.3))

# 5. Riser into "Now imagine": noise swell + shimmering partials, ending in a cut
d = 1.8; t = t_(d)
env = (t / d) ** 2.5
sw = swept_bp(noise(d), 400, 6000, 0.8) * env
shim = sum(np.sin(2 * np.pi * fr * (1 + 0.15 * t / d) * t + k) for k, fr in enumerate([880, 1320, 1760, 2640])) * env
rs = norm(norm(sw) + 0.35 * norm(shim)) * 0.85
fade = np.minimum(1, (d - t) / 0.03)
save('riser', stereo(rs * fade, np.roll(rs, 120) * fade))

# 6. Title impact: boom + inharmonic metal ring + long airy tail
d = 4.5; t = t_(d)
sub = np.sin(2 * np.pi * np.cumsum(60 * (32 / 60) ** (t / d)) / SR) * np.exp(-t * 1.0)
ring = sum(a * np.sin(2 * np.pi * fr * t) * np.exp(-t * dk) for fr, a, dk in [(196, 1, 1.2), (523, .6, 1.6), (847, .45, 2.1), (1290, .3, 2.6), (1873, .2, 3.2)])
tail = lp(hp(noise(d), 2000), 9000) * np.exp(-t * 1.4) * 0.15
hit = lp(noise(d), 300) * np.exp(-t * 14)
imp = norm(sub + 0.45 * norm(ring) + tail + 0.5 * norm(hit)) * np.minimum(1, t / 0.004)
save('impact', stereo(imp, np.roll(imp, 300) * 0.97))

# 7. Shimmer: soft high sparkle for the opening stars
d = 4.0; t = t_(d)
sh = sum(np.sin(2 * np.pi * fr * t + 3 * np.sin(2 * np.pi * 0.3 * t + k)) for k, fr in enumerate([1568, 2093, 2637, 3136]))
sh = norm(sh) * np.sin(np.pi * t / d) ** 2 * 0.35
save('shimmer', stereo(sh, np.roll(sh, 900)))
print('done:', sorted(os.listdir(out)))
