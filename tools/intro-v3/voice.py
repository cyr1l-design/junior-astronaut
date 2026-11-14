"""Records the narrator's lines with ElevenLabs (voice "Nathaniel C.", model eleven_v4).
Spends ElevenLabs credits: the takes used are saved in assets/intro/v3/, so only re-run to change a line.
Usage: ELEVENLABS_API_KEY=... python3 tools/intro-v3/voice.py <out_dir>
"""
import json, os, subprocess, sys, urllib.request
LINES = {
    1: "For as long as people have looked up at the stars... we've asked one question.",
    2: "Around Jupiter circles a frozen moon. Europa.",
    3: "Beneath its ice, almost certainly... lies an ocean.",
    4: "Your mission: dig down through the ice, reach that ocean... and find out.",
    5: "Are we alone?",
}
VOICE = "7S3KNdLDL7aRgBVRQb1z"
out = sys.argv[1]; os.makedirs(out, exist_ok=True)
for k, text in LINES.items():
    req = urllib.request.Request(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}?output_format=pcm_48000",
        data=json.dumps({"text": text, "model_id": "eleven_v4"}).encode(),
        headers={"xi-api-key": os.environ["ELEVENLABS_API_KEY"], "Content-Type": "application/json"})
    pcm = urllib.request.urlopen(req, timeout=120).read()
    subprocess.run(["ffmpeg", "-y", "-v", "error", "-f", "s16le", "-ar", "48000", "-ac", "1", "-i", "-", f"{out}/vo{k}.wav"],
                   input=pcm, check=True)
    print("vo", k, "ok")
