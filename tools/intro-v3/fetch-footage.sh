#!/usr/bin/env bash
# Downloads the four NASA videos the intro is cut from (1080p "large" copies, about 3.9 GB in all).
# Usage: tools/intro-v3/fetch-footage.sh <footage_dir>
set -euo pipefail
OUT=$1; mkdir -p "$OUT"; B="https://images-assets.nasa.gov/video"
get(){ u="$B/$2/$2~large.mp4"; [ -s "$OUT/$1-large.mp4" ] || curl -sS -o "$OUT/$1-large.mp4" "${u// /%20}"; echo "$1 ok"; }
get earth "jsc2021m000138_4K_Earth_Views_Extended_Cut_for_Earth_Day_ 2021_210422-4KMP4"
get overview "JPL-20240916-CLIPPRf-0001-Europa Clipper Mission Overview"
get launch "KSC-20241014-MH-AJN01-0001-SpaceX_Europa_Clipper_Isolated_Launch_Views-M9336"
get anim "JPL-20220310-CLIPPRf-0001-Europa Clipper Mission Animations"
