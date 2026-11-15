# First scene brief: the base on Europa

The single source for building the look of the first scene. Read
`CLAUDE.md` (the decisions) and `JUDGING.md` (how we're scored) first.
Every fact here is sourced in `references/europa.md` (section numbers in
brackets).

## What the scene is

The player's base is already set up on Europa. The player (first person, no
visible astronaut) steps out of the habitat and **meets this new world**. This
is the one location of the whole game: everything else happens here, except
the intro and the ocean ending.

**Jupiter must be the star of the sky: very visible and very beautiful.**

## Where things stand (already built as a blockout)

> **Out of date (2026-11-14, evening):** Cyril re-laid out the base from his
> two reference pictures. The positions below are the OLD ones.
> `src/world/layout.js` is the truth; see "Handoff" in `CLAUDE.md`.

The blockout in `src/` has every object at its real place, size and light.
**Keep positions, names, sizes and the sky directions**; replace the simple
shapes and materials with the final look. Layout: `src/world/layout.js`.
1 unit = 1 metre; +X east, −Z north.

| Object | Where | Why it's there (gameplay) |
|---|---|---|
| Habitat (lander on legs, warm windows, door + stairs facing NE) | origin | Home; warm |
| Solar array (12 panels, facing the low Sun) | west-south-west of the habitat | Small daytime power bonus; zero at night and in Jupiter's eclipse |
| Reactor with 4 radiator fins | 45 m south-west, set apart | Main steady power. Reactors shed heat through radiators, **not solar wings** |
| Cables with amber marker lights | reactor → habitat; reactor → spool → cryobot | The reactor-to-spool run **crosses the main red fault line ("Spool Linea")**: the sideways-tide event strains it there |
| Cable spool | NE, 48 m | Feeds the cryobot's cable |
| Cryobot on a tripod over its melt hole | NE, 63 m | The goal: melting down to the ocean |
| Ice cave (hollow mound, mouth facing the base, blue glow and crystals inside) | 67 m west, at the foot of the west ridge | Radiation shelter, but very cold |
| West ridge | west | Backdrop; the cave sits at its foot |
| Canyon (trough of a double ridge with raised rims) | east, ~110 m | Fixed backdrop; the player can walk to its edge, not into it |
| Chaos blocks (tilted ice slabs) | between the base and the canyon, and beyond the canyon | Beauty; landmarks; real Europa "chaos terrain" |
| Ice blades | far north, 650–1150 m | Beauty. **Unconfirmed prediction** (label it) |
| Far hills | beyond ~900 m | Hide the edge of the world against the black sky |

## The sky (must stay physically right)

| | Value | Source |
|---|---|---|
| Sky | **Black, full of sharp stars. No clouds, haze, fog or blue.** Europa has no air | §1 |
| Jupiter | **12.2° wide** (about 24 full Moons), fixed in the sky, north-north-west, ~23° up. Real NASA Cassini map (PIA07782) | §1, §12 |
| Jupiter's phase | **Lit only by the Sun**, so the lit half faces the Sun. In this scene: half-lit, lit side toward the east. Already correct in `sky.js`: keep it | §12 |
| Io | Small yellow-orange disc near Jupiter, ~0.6° (bigger than our Moon from Earth) | our arithmetic, §17 |
| Sun | Tiny, intensely bright point low in the east (~0.1° across, a fifth of its size from Earth). Long, razor-sharp shadows | our arithmetic |
| Aurora | Faint purple curtain near the horizon, false colour (the real glow is ultraviolet). Has an intensity uniform for the plasma-sheet event | §14 |
| Jupiter-shine | Weak warm fill from Jupiter's direction | real, small |

## The look

**Direction (Cyril):** stylised and beautiful over realistic, in the spirit
of colourful space-exploration games: soft pastel colour, smooth sculpted
snow and ice, glowing lights, a giant planet in the sky. Our own look, not a
copy of any game.

- **Style references:** `design/style-refs-local/` (screenshots from published
  games, **local only, git-ignored, copyrighted: never put them in the game,
  video or project page**). Take their colour, softness, sculpted shapes and
  glow, **not** their blue skies, clouds, haze or plants.
- **Place reference:** `design/reference/base-location-AI-reference-v2-canyon.webp`
  (AI-made: reference only). Its notes and four fixes are in
  `design/reference/README.md`.
- **Palette:** pale cyan-white and cream ice; **rusty red-brown and orange salt**
  along cracks, lineae and low spots, so it's warm red against cool ice, never
  plain white; bluer ice and vertical salt streaks on steep faces; warm amber
  base lights; cyan glow from the cave and the cryobot's hole; purple aurora.
- **Light:** one Sun, low; hard shadows; a stylised cool fill so shadows read
  soft blue, not dead black (stands in for light bouncing off bright ice).
- **Finish:** bloom on lights, gentle colour grade, soft vignette (`src/post.js`).
  **No fog or distance haze on the surface.**
- **Performance:** must run smoothly on an ordinary school laptop in a
  browser (judged on usability). Prefer procedural shaders and instancing
  over heavy assets.

## Things that must not appear (science)

Blue sky, clouds, haze, rain, plants, animals on the surface, liquid water
on the surface (the cryobot's hole glows from heat below; no open pool),
billowing steam clouds (vapour vanishes in a vacuum), rings around Jupiter,
solar panels on the reactor, a huge Sun, any NASA logo, flag or mission
insignia.

## Labels the game will need (for "What's real?")

- Ice blades: "Scientists predict ice blades like these may exist on Europa.
  No one has seen them yet."
- Aurora: "Europa's real aurora glows in ultraviolet light, invisible to our
  eyes. We coloured it purple so you can see it."
- The outpost and astronaut: imagined (no crewed mission to Europa exists).
- Power down the cable: simplified (real cryobots carry their own nuclear
  heater).

## Why we don't drill in the canyon (final in-game text)

A judge looking at the scene will ask this, so the game answers it before
they can. Show it when the player first walks to the canyon edge, and keep it
in "What's real?".

> **Why not dig from down there?**
> The canyon looks deep, but it's only a few hundred metres. The ice under
> your feet is about **29 kilometres** thick (measured by NASA's Juno
> spacecraft). Starting at the bottom would save about **1%** of the dig.
> And this canyon is a crack that Jupiter's tides grind sideways every Europa
> day. A cable running down it would be torn apart. So the cryobot melts down
> here, on solid, quiet ice.

Short version for a caption: *"Only a few hundred metres deep, on 29 km of
ice, and it's a moving fault that would tear the cable. We dig on quiet
ice."*

Sources: Juno ice thickness (§2); ridges hundreds of metres tall (§1);
strike-slip faults moving with the daily tide (§17); NASA cryobot tether
breakage risk (§13).

## Credits shown in the game

- Jupiter map: NASA/JPL/Space Science Institute (Cassini, PIA07782), already
  in the corner of the screen.
- Every outside asset (models, fonts, sounds) must be listed here and on the
  project page's References. No copyrighted material without permission.
- Code library: **Three.js 0.170** (MIT licence), including its bundled
  add-ons used here: bloom, FXAA edge smoothing, pointer-lock controls and
  geometry merging. Built with **Vite 5** (MIT licence).
- **Surface textures (added 2026-11-14, evening), all CC0 public domain,**
  in `public/textures/`. Used in the game since 2026-11-14 (night); the
  on-screen credit names the three sources:
  - `frost/`: Snow 014, ambientCG.com (CC0), shown as Europa's ice powder.
  - `ice-bare/`: Ice 002, ambientCG.com (CC0).
  - `ice-cracked/`: Ice 0002, TextureCan.com (CC0).
  - `salt/`: Rock 056, ambientCG.com (CC0), for the red-brown salt streaks
    and the salt crusts along the red lines.
  - `cliff/`: Cliff Side, polyhaven.com (CC0). Only its bump and height maps
    are used, never its colour: they give the ice faces, slabs and boulders
    their ledges, chips and hollows.
  - `metal/` (the base), all ambientCG.com (CC0): `hull-panels/` Metal
    Plates 017A, `brushed-steel/` Metal Plates 001, `dark-coated/` Metal
    027, `gold-foil/` Foil 002, `solar-cells/` Solar Panel 002,
    `floor-plate/` Diamond Plate 007A.
- Apart from the Jupiter map and the textures above, every model, texture
  and effect is generated in code. Text uses the computer's own system font,
  so no font file is shipped.

## Final look: what was built (2026-11-14)

Science-relevant choices made while building, for "What's real?" and for
anyone checking the scene:

- **Light on the ice is stylised.** The Sun is ~17° above the horizon
  (raised from ~10° on 2026-11-14, night: at 10° the far crest's shadow
  covered most of the base and the scene looked dim and flat), so
  real flat ice would be dim; the ice shader brightens low-angle light and
  tints shadows soft blue. The sky, the shadows' direction and length, and
  Jupiter's phase are untouched.
- **Jupiter:** same NASA map, size (12.2°) and Sun-only lighting. Added: a
  soft day-night edge and a darker rim (both real for a planet with deep
  air), and brighter, more saturated colour (stylised).
- **Sun:** a tiny core with thin camera-style glint spikes. The spikes are a
  lens effect, not a bigger Sun.
- **Stars** don't twinkle (no air). A Milky Way band of faint stars was added.
- **Aurora:** same false-colour purple and the same intensity control
  (`sky.aurora.material.uniforms.uIntensity`). The arc was widened and raised
  a little so it shows under Jupiter instead of hiding behind the west ridge.
- **Cryobot hole:** a round shaft cut into the ice, glowing from below, with
  a lip of refrozen ice. No pool, no steam.
- **Reactor:** four radiator fins with a faint warm glow at their roots and
  heat pipes from the core. No solar cells on it.
- **Habitat dish** points toward the Sun, because seen from Jupiter the Earth
  is never more than about 11° from the Sun (our arithmetic: Earth's orbit is
  1/5.2 the size of Jupiter's).
- **Lineae** are shallow grooves between two low raised edges (a small double
  ridge), with rusty salt beside them. The west ridge has a second crest
  behind it (Europa's ridges are often double).
- **Cave:** the blue glow stands for sunlight filtering through ice (as in
  glacier caves on Earth); the crystals are imagined. No icicles (nothing
  drips at -160 °C in a vacuum).
- **Low domes** on the far plain stand for Europa's real "lenticulae".
- **Ice blades** unchanged in place; still need the "unconfirmed" label.
- Nothing added from the "must not appear" list.
