# Intro scene: script

Decided by Cyril, 2026-11-14. Each screen shows a small **REAL** or
**IMAGINED** tag so children always know which is which. Facts trace to
`references/europa.md`.

| # | Text on screen | Tag | Source |
|---|---|---|---|
| 1 | Jupiter has a moon called **Europa**. It's covered in ice, colder than anywhere on Earth. | REAL | europa.md §1 (−130 to −220 °C) |
| 2 | In the 1990s, NASA's Galileo spacecraft found clues that a **salty ocean** is hiding under the ice. | REAL | europa.md §2, §6 (Galileo magnetometer) |
| 3 | In 2024, NASA launched **Europa Clipper** to find out for sure. | REAL | europa.md §6 (launched 14 Oct 2024) |
| 4 | **3 December 2026:** Clipper swings past Earth, using Earth's pull like a slingshot to speed toward Jupiter. | REAL | europa.md §6 (Earth flyby 3 Dec 2026) |
| 5 | **3 December 2031:** Clipper proves it. The ocean is real, with twice as much water as all of Earth's oceans. | IMAGINED | Prediction. Clipper arrives April 2030 (§6). "Twice the water" is real (§2) |
| 6 | **2040:** You land on Europa. Your mission: dig through **29 km of ice** and reach the ocean. | IMAGINED | No crewed mission exists. The 29 km is real: Juno, 2026 (§2) |
| 7 | **ARE WE ALONE?** (huge letters) | — | An open question: no life is known |

## Rules for this scene

- Never say NASA *has* confirmed the ocean. Today's wording: "almost certainly".
- Screen 4 uses the present tense so it reads right before and after 3 Dec 2026.
- Keep each screen to one or two short sentences (ages 7–12).

## As built (2026-11-14)

The intro runs 29.8 s, so it doubles as the demo video (limit 30 s).
Narrator: AI voice "Nathaniel" (ElevenLabs), chosen by Cyril. To fit 30 s the
spoken lines are shorter than the on-screen text, and Galileo is named on
screen only.

| # | Starts | Spoken | On screen | Tag |
|---|---|---|---|---|
| 1 | 0.6 s | "Around giant Jupiter circles a frozen moon... Europa." | JUPITER: The giant planet has a frozen moon… then EUROPA | REAL |
| 2 | 4.95 s | "Clues say a salty ocean hides beneath its ice." | 1990s: NASA's Galileo spacecraft finds clues: a salty ocean hides under the ice. | REAL |
| 3 | 8.5 s | "In 2024, NASA launched Europa Clipper to find out." | 2024: NASA launches Europa Clipper to find out. | REAL |
| 4 | 12.6 s | "December third, 2026: Clipper swings past Earth." | 3 December 2026: Clipper swings past Earth, on its way to Jupiter. | REAL |
| 5 | 17.0 s | "Now imagine... December third, 2031: the ocean is real." | NOW, IMAGINE… then 3 December 2031: Clipper proves it: the ocean is real. | IMAGINED |
| 6 | 22.7 s | "2040: you land. Dig through twenty-nine kilometres of ice." | 2040: You land on Europa. Your mission: dig through 29 km of ice. | IMAGINED |
| 7 | 27.75 s | "Are we alone?" | ARE WE ALONE? | — |

"Now imagine…" is spoken so that children who can't read yet still hear
where the real part ends.

Pictures (all NASA; full credits in `src/intro-data.js`): Hubble's Jupiter
(2024), Galileo's Europa (PIA19048) and ice bands (PIA23872), the Falcon Heavy
liftoff (SpaceX via NASA), Apollo 17's Earth, Clipper over Europa (PIA24321,
illustration), the Europa Lander concept (PIA21048, illustration), Juno's
Europa (PIA26331, Björn Jónsson, CC BY 3.0).

Music: Holst, "Jupiter" from The Planets, US Air Force Band recording (public
domain). Sound effects are synthesised in `tools/make-sfx.py`.

### How to rebuild

```bash
python3 tools/make-sfx.py <sfx_dir>
tools/build-intro-audio.sh <vo_dir> <sfx_dir> <holst.ogg> <out_dir>
python3 -m http.server 8123 &
node tools/record-intro.cjs <out_dir>/intro-audio.wav intro.mp4
```

## Version 3: "Are we alone?" (2026-11-14, replaces the slideshow)

Cyril on version 2: "feels like a slide show"; wants it "much more minimalistic,
with more videos and less talk", "not to name every event"; "the sounds effects
are also horrible". Then: "it's okay to tell… it's weird to tell like year and
what happened in that year"; "present it in epic way… a really important mission
for humanity… kind of philosophical question whether we alone or not, and your
goal is to find that out". It is both the game's intro and the ≤30 s demo video.

**File:** `assets/intro/europa-intro-v3.mp4` (29.8 s, 1080p30, −14 LUFS).
No years, no captions per event, no sound effects. The question opens and
closes the video.

| Time | Shot (real NASA footage or NASA animation) | Narrator |
|---|---|---|
| 0–5.5 s | Earth from the ISS, solar array in frame (real) | "For as long as people have looked up at the stars... we've asked one question." |
| 5.5–9.6 s | Jupiter with a moon passing; Europa rising in front of Jupiter (animation) | "Around Jupiter circles a frozen moon. Europa." |
| 9.6–15.2 s | Europa's ice with Jupiter in the sky; Europa cut open, ice over ocean (animation) | "Beneath its ice, almost certainly... lies an ocean." |
| 15.2–20.3 s | Europa Clipper's launch and separation (real); Clipper skimming Europa (animation) | music only, the swell |
| 20.3–26.4 s | Europa's icy ground, Jupiter rising; down through the ice into the ocean (animation) | "Your mission: dig down through the ice, reach that ocean... and find out." |
| 26.4–29.8 s | Europa's crescent going dark; **ARE WE ALONE?** word by word | "Are we alone?" |

**Science checks.** "Almost certainly" keeps the ocean honest: NASA has not
confirmed it. Every shot carries a small label, "Animation · NASA/JPL-Caltech"
or "Real footage", and NASA's own animations also carry their "ANIMATION" tag.
The ocean-floor vents in the cut-open shot are NASA's illustration of an idea,
not something seen.

**Sound.** Narrator: AI voice "Nathaniel C." (ElevenLabs, eleven_v4), labelled
"AI narrator voice" on screen. Music: "Superior" by Silver Maple, Epidemic
Sound, from Cyril's licence (his Nila downloads), starting 1:12.04 so its swell
lands on the launch. Every cut sits on a beat (117.5 bpm). The music dips about
11 dB under the narrator, measured. Before uploading to YouTube, connect the
channel to Epidemic Sound so the music isn't flagged.

**Footage** (NASA Image and Video Library, images.nasa.gov; shot list with
in-points in `tools/intro-v3/shots.tsv`):
- *4K Earth Views: Extended Cut for Earth Day 2021*, NASA JSC (jsc2021m000138).
- *Europa Clipper: Exploring Jupiter's Ocean Moon (Mission Overview)*, NASA/JPL-Caltech, 2024.
- *NASA's Europa Clipper Mission Animations*, NASA/JPL-Caltech, 2024.
- *NASA's SpaceX Europa Clipper Isolated Launch Views*, NASA KSC, 14 Oct 2024
  (includes SpaceX's rocket camera at separation).

### How to rebuild version 3

```bash
tools/intro-v3/fetch-footage.sh <footage_dir>
tools/intro-v3/cut.sh <footage_dir> <work_dir>
python3 tools/intro-v3/mix.py assets/intro/v3 <superior.wav> <work_dir>/soundtrack.wav
node tools/intro-v3/render.cjs <work_dir>/picture.mp4 <work_dir>/soundtrack.wav assets/intro/europa-intro-v3.mp4
```

The narrator's takes are kept in `assets/intro/v3/`. `tools/intro-v3/voice.py`
records them again, which spends ElevenLabs credits. The words on screen
(labels, title, credit) are `tools/intro-v3/overlay.html`.
