# References — real science for the game

Everything here was pulled from the challenge's Resources tab on **2026-11-13**.
Use these files when deciding any number, event or fact in the game. If a number
isn't traceable to one of these (or another named source), it's invented: mark
it as such or replace it.

| File | What's in it |
|---|---|
| [space-weather.md](space-weather.md) | Solar flares, eruptions, radiation storms: what they are, a year of real events |
| [radiation.md](radiation.md) | Measured radiation doses on Mars, near the Moon, in deep space, on the ISS |
| [health-and-food.md](health-and-food.md) | Real NASA studies on astronaut bodies and growing food in space |
| [mission-basics.md](mission-basics.md) | Sol, comms delay, and other basics the brief mentions (from general NASA facts, not the resources) |
| [europa.md](europa.md) | Europa: ice, ocean, radiation map, weak sunlight, real comms delay, missions, usable NASA data (added 2026-11-14) |
| `data/horizons-europa-earth-2026-2027.json` | Real daily Earth–Europa distance and radio delay, 2026 → 2027, from NASA JPL Horizons |
| `data/donki-2025-11-to-2026-11.json` | A year of real space weather events (storms, radiation days, big flares, fast eruptions) |
| `data/radlab-mars-surface-daily.csv` | Curiosity rover radiation dose, daily average, 2015 → 2024 |
| `data/radlab-lunar-orbit-daily.csv` | LRO orbiter radiation dose near the Moon, daily average, 2009 → 2024 |
| `data/radlab-deep-space-daily.csv` | BioSentinel radiation dose in deep space, daily average, 2022 → 2025 |

## The sources and how to reach them

| Source | What it is | Access (tested 2026-11-13) |
|---|---|---|
| [api.nasa.gov](https://api.nasa.gov/) | NASA's API portal | **Works** with the key in `.env`. |
| [DONKI](https://ccmc.gsfc.nasa.gov/tools/DONKI/) | Space weather database | Via `api.nasa.gov/DONKI/<type>` — works. **Max 60 days per request.** The flare list (`FLR`) currently returns "not found" on NASA's side; flares still appear in `notifications`. The keyless direct server (`kauai.ccmc.gsfc.nasa.gov`) didn't answer from here. |
| [OSDR](https://osdr.nasa.gov/bio/repo/) | Space biology & astronaut health research | Search API works, no key: `https://osdr.nasa.gov/osdr/data/search?term=<word>` |
| [RadLab](https://visualization.osdr.nasa.gov/radlab/gui/data-api/) | Radiation dose measurements | API works, no key: `https://visualization.osdr.nasa.gov/radlab/api/?…` (needs at least one field in the query, or it errors) |
| [Mars Trek](https://trek.nasa.gov/mars/) | Mars maps, terrain, imagery | Interactive portal; not explored in depth yet — open it when we need a real landing site or map |
| [CSA food toolkit](https://www.asc-csa.gc.ca/eng/youth-educators/toolkits/food-production/) | Canadian Space Agency's kid/educator kit on food in space | Readable in the browser (the shell can't reach it) |

## Rules for using this

- **Attribute in the game.** Every real number shown to players names its source (e.g. "Measured by NASA's Curiosity rover on Mars").
- **Archived ≠ live.** The files in `data/` are snapshots from 2026-11-13. If the game shows them, say "real data from <date>", never "live".
- **Simplify, don't distort.** Rounding 8.34 to "about 8" is fine. Changing which thing is more dangerous is not.
