# Space weather (DONKI)

Source: NASA DONKI, via `api.nasa.gov`, pulled 2026-11-13. Raw numbers are in
`data/donki-2025-11-to-2026-11.json`. DONKI's own messages are written by
NASA's **Moon to Mars Space Weather Analysis Office**, which is a real job
that looks a lot like what a player would do.

## What the event types mean (plain words)

| DONKI code | Real name | For a kid | Matters on Moon/Mars? |
|---|---|---|---|
| FLR | Solar flare | A sudden flash of light and energy from the Sun. Classes go A, B, C, **M**, **X**, and each letter is 10× stronger than the one before. | The flash itself arrives in ~8 minutes (at light speed). Big flares often come with radiation storms. |
| CME | Coronal mass ejection | The Sun burps out a giant cloud of hot gas. It takes about 1–3 days to cross to Earth. | Yes — fast ones push particles ahead of them. |
| SEP | Solar energetic particle event | A **radiation storm**: tiny particles from the Sun, moving near light speed. | **This is the big one for astronauts.** The Moon and Mars have no global magnetic shield and thin or no air, so these reach the surface. Shelter time. |
| GST | Geomagnetic storm | The Sun's cloud shakes Earth's magnetic field: auroras, satellite trouble. Measured with the **Kp index** (0–9). | Mostly an *Earth* thing. On the Moon/Mars there's no global magnetic field to shake. Could still matter for **communications/relay with Earth**. |
| RBE | Radiation belt enhancement | Earth's radiation belts fill up with extra particles. | No — Earth-orbit hazard. |
| HSS | High speed stream | Fast solar wind from a "hole" in the Sun's outer layer. | Minor. |
| IPS | Interplanetary shock | The shock wave in front of a CME passing a spacecraft. | Signals that a CME has arrived. |

**Accuracy point for the game:** a radiation-shielding decision should be tied to
**SEP events (radiation storms)** and big flares/fast CMEs — not to the Kp index,
which describes Earth's magnetic field.

CME speed classes DONKI uses: **S** (slow, < 500 km/s), **C** (common, 500–999),
**O** (occasional, 1000–1999), **R** (rare, 2000–2999), **ER** (extremely rare, ≥ 3000).

## A real year: 13 Nov 2025 → 13 Nov 2026

- **1,655 CMEs** — roughly 100–180 a month. Most are slow: 1,009 S-type, 574 C-type, **72 O-type** (faster than 1,000 km/s). None R or ER. Median speed ~450 km/s; fastest ~1,960 km/s.
- **20 geomagnetic storms.** Strongest: **19 Jan 2026, Kp 8.67** (a "severe" G4 storm). Others reached Kp 7–7.3 (20 Mar, 4 Jul, 10 Oct 2026).
- **Radiation storm (SEP) days:** 14–15 Nov 2025 · 18–21 Jan 2026 · 25–26 May · 6 Jun · 30 Jul · 20–22 Aug · 5 Sep 2026. About **7 separate episodes in a year**, so roughly one every 7–8 weeks, and they cluster.
- **X-class flares:** 16 alerts. Biggest **X8.1 on 2 Feb 2026**, part of a burst of five X flares on 1–4 Feb. Also X4.0 on 14 Nov 2025 (same day a radiation storm began) and X4.2 on 4 Feb 2026.
- **~800 alerts in total**, about 2 a day.

### Patterns worth using in gameplay

- **Big flare → radiation storm, same or next day** (14 Nov 2025: X4.0 + SEP; 18 Jan 2026: X1.9 + SEP + the year's strongest storm on 19 Jan). A warning window is real.
- **Quiet stretches are real too**: no radiation storm between 21 Jan and 25 May 2026.
- **Bursts happen**: Feb 2026 had five X flares in four days.

## This week (as of 13 Nov 2026)

Moderate activity: the weekly report for 4–10 Nov counted **7 M-class flares
and 7 slow-to-common CMEs**. A CME (~525 km/s) left the Sun on 13 Nov, not aimed
at Earth. Earth's radiation belts have been elevated since 8 Nov. No radiation
storm this week.

## Using it live

`GET https://api.nasa.gov/DONKI/notifications?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&type=all&api_key=…`
returns the latest alerts. Also `/DONKI/CME`, `/DONKI/SEP`, `/DONKI/GST` (max 60
days per call). A browser game calling this exposes the key; fine for a free
key, but caching at build time is safer and works offline.
