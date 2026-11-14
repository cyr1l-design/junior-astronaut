#!/usr/bin/env bash
# Cuts the shots in shots.tsv out of the NASA videos and joins them into one silent picture track.
# Every cut sits on a beat of the music (117.5 bpm, see story/intro.md).
# Usage: tools/intro-v3/cut.sh <footage_dir> <work_dir>   -> <work_dir>/picture.mp4
set -euo pipefail
F=$1; W=$2; mkdir -p "$W/cut"; : > "$W/cut/list.txt"
grep -v '^#' "$(dirname "$0")/shots.tsv" | while IFS=$'\t' read -r n src ss a b _; do
  ffmpeg -nostdin -y -v error -ss "$ss" -i "$F/$src-large.mp4" -an -frames:v $((b-a)) \
    -vf "fps=30,scale=1920:1080,setsar=1,format=yuv420p" -c:v libx264 -crf 12 -preset fast "$W/cut/$n.mp4"
  echo "file '$W/cut/$n.mp4'" >> "$W/cut/list.txt"
done
ffmpeg -nostdin -y -v error -f concat -safe 0 -i "$W/cut/list.txt" -c copy "$W/picture.mp4"
echo "wrote $W/picture.mp4"
