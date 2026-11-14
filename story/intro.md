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
