# Radiation doses (RadLab)

Source: NASA OSDR **RadLab** database, pulled 2026-11-13. Daily averages are in
`data/radlab-*.csv`. Units: **μGy** (micrograys) = how much radiation energy
the instrument absorbed. Bigger = more radiation.

## The numbers

| Place | Instrument | Period | Typical dose rate | Per day | Per year |
|---|---|---|---|---|---|
| **Mars surface** | Curiosity rover, RAD | 2015 → Jun 2024 | ~8.3 μGy/hour | **~200 μGy** | ~73 mGy |
| **Orbiting the Moon** | LRO, CRaTER | 2009 → Jun 2024 | ~11 μGy/hour | **~265 μGy** | ~97 mGy |
| **Deep space** (orbiting the Sun near Earth) | BioSentinel | Nov 2022 → Nov 2025 | ~6.8 μGy/hour | ~163 μGy | ~60 mGy |
| **ISS** (Jan 2024, all modules) | several | 2 weeks | ~23 μGy/hour | ~550 μGy | — |

Cross-check: NASA's published figure for the Mars surface (Curiosity, 2014) is
about **0.21 mGy/day = 210 μGy/day**. Our 200 matches.

## Radiation storms, as measured

- **Mars, 20 May 2024**: daily average **69 μGy/hour**, about **8× a normal day**, the highest in the whole Curiosity record here. Other spikes: 16 Feb 2022 (24), 11 Sep 2017 (18), 29 Oct 2021 (17).
- **Near the Moon (LRO)**: during big storms the daily average jumped to thousands of μGy/hour (Jan 2012 peaked above 30,000). That's a thin detector **in orbit with no shielding**; don't present it as "inside a Moon base".
- **Deep space (BioSentinel)**: storm days reached ~1,000–2,500 μGy/hour (8 Jun 2024, 9 Oct 2024, 12 Nov 2025).

## What this teaches (safe to say to kids)

- **The planet itself is a shield.** Standing on Mars, the ground blocks half the sky, and the thin air helps a little. During storms the rover's readings rose ~8×, while deep-space readings rose by hundreds of times. (Different instruments in different years, so compare the *size of the jump*, not exact values.)
- **Most days are steady; storms are rare and huge.** That's the real shape of the danger: background radiation slowly adds up, and storms spike it suddenly.
- **Where you stand inside matters.** On the ISS the Columbus module read ~4.5 μGy/hour while other modules read ~20–28 in the same weeks. Walls and equipment act as shielding, which is why astronauts shelter in the most shielded spot during storms.

## Cautions

- The ISS figures mix different instrument types; use them only for the "where you stand matters" point, not as one precise number.
- Absorbed dose (μGy) isn't the same as health risk (μSv); the game doesn't need that distinction, but don't call μGy "health damage".
