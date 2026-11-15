"""Records the game's narrator lines (story/voice-lines.md) with ElevenLabs, in the intro's voice.

Voice "Nathaniel C." (7S3KNdLDL7aRgBVRQb1z), model eleven_v4, default settings: the same as
tools/intro-v3/voice.py. One MP3 per line: public/voice/<name>.mp3, tagged as AI audio.
Spends ElevenLabs credits (about 7,900 characters for all lines). Lines already recorded are
skipped; pass names to redo only those.

Usage: ELEVENLABS_API_KEY=... python3 tools/voice-lines/record.py [name ...]
"""
import json, os, re, subprocess, sys, urllib.request
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
VOICE = "7S3KNdLDL7aRgBVRQb1z"
COMMENT = 'AI voice (ElevenLabs, "Nathaniel C."). Junior Astronaut: Europa.'
OUT = os.path.join(ROOT, "public", "voice")

text = open(os.path.join(ROOT, "story", "voice-lines.md"), encoding="utf-8").read()
lines = re.findall(r"^([a-z0-9-]+): (.+)$", text.split("The lines (name: text):", 1)[1], re.M)
only = set(sys.argv[1:])
os.makedirs(OUT, exist_ok=True)


def record(item):
    name, line = item
    dest = os.path.join(OUT, f"{name}.mp3")
    if (only and name not in only) or (not only and os.path.exists(dest)):
        return f"skip {name}"
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=mp3_44100_128",
        data=json.dumps({"text": line, "model_id": "eleven_v4"}).encode(),
        headers={"xi-api-key": os.environ["ELEVENLABS_API_KEY"], "Content-Type": "application/json"})
    for attempt in range(4):
        try:
            mp3 = urllib.request.urlopen(req, timeout=180).read(); break
        except Exception as e:
            if attempt == 3: return f"FAILED {name}: {e}"
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "mp3", "-i", "-", "-c", "copy", "-map_metadata", "-1",
                    "-metadata", f"comment={COMMENT}", "-metadata", f"title={name}", "-id3v2_version", "3", dest],
                   input=mp3, check=True)
    return f"ok {name}"


with ThreadPoolExecutor(3) as pool:
    for r in pool.map(record, lines):
        print(r, flush=True)
