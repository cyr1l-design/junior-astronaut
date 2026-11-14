#!/usr/bin/env bash
# Builds the intro soundtrack: mix, level to -14 LUFS (streaming loudness),
# then write a .wav for the video and an .mp3 for the game.
# Usage: tools/build-intro-audio.sh <vo_dir> <sfx_dir> <music_file|-> <out_dir>
set -euo pipefail
VO=$1; SFX=$2; MUSIC=$3; OUT=$4
mkdir -p "$OUT"
python3 "$(dirname "$0")/mix-intro.py" "$VO" "$SFX" "$MUSIC" "$OUT/intro-raw.wav"
ffmpeg -y -v error -i "$OUT/intro-raw.wav" -af "loudnorm=I=-14:TP=-1.5:LRA=11" -ar 48000 "$OUT/intro-audio.wav"
ffmpeg -y -v error -i "$OUT/intro-audio.wav" -codec:a libmp3lame -b:a 192k "$OUT/intro-audio.mp3"
ffmpeg -v info -i "$OUT/intro-audio.wav" -af ebur128=peak=true -f null - 2>&1 | grep -E "^\s+(I:|True peak:|Peak:)" | head -3
