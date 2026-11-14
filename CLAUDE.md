# Junior Astronaut Mission Trainer — working agreement

Cyril's entry for the **NASA Space Apps Challenge 2026**, challenge
["Build a Junior Astronaut Mission Trainer"](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=details).
Read this file before changing anything. Cyril is not a programmer: explain what
you are doing in plain language, and when something breaks say what broke and
what you'll try next.

## Timeline

- **Hackathon:** Sat Nov 14, 09:00 → Sun Nov 15, 23:59, 2026, local event time.
- **No game code before Sat Nov 14, 09:00.** Rules forbid starting work on the
  challenge early. Setup (tools, this file, empty repo) is fine.
- Event: a local event with a virtual option (plan: Rome, same time zone as
  Milan). Solo teams are eligible at local events.

## The idea — Cyril's, not Claude's

The rules say AI must not come up with the solution idea. **The concept,
mechanics and story come from Cyril.** Claude may ask questions, flag
problems, check science and build — but does not propose the core concept.

Cyril's idea, in his words as given (2026-11-14):

- **Setting: Europa.** The first scene introduces Europa and explains it.
- **The goal: dig down through the ice to find life.** The player starts
  with a base that already exists on the surface. The surface is a sandbox.
- **The ending: a cutscene.** The player rides a submarine (simplified for the
  visuals) into the ocean, and it's beautiful: full of life.
  This replaces the earlier plan of an ocean base with scripted missions.
- **Resources: power, radiation, heat.** Heat was chosen over oxygen because
  it's more distinctive.
- **Time runs in Europa days** (85 hours = 3.55 Earth days), with day and
  night and Jupiter blocking the Sun.
- **No communication delay as a mechanic.** Cyril finds it fits the Moon and
  Mars better than Europa.
- **Reasoning, not recall.** Children should work things out by connecting
  pieces of information, not by remembering facts.
- **No safe choice.** Every decision is a compromise.
- **The loop (Cyril, 2026-11-14):**
  1. ~~Explore to find the fastest dig spot.~~ **Dropped (Cyril,
     2026-11-14):** more scenes cost too much. How the dig spot is chosen,
     if at all, is open.
  2. **Place the cryobot** there.
  3. **Keep it powered and watch over it** while exploring Europa and
     **handling events** that force hard choices.
  4. Survive until the cryobot breaks through, then the submarine ending.
- **Power is finite (Cyril, 2026-11-14).** One supply, enough to dig all
  the way through. It's shared between staying alive and keeping the cryobot
  going. Events force the child to risk it, or to sacrifice digging power to
  survive.
- **Radiation dose budget as the mission clock (Cyril, 2026-11-14,
  confirmed):** the crew
  has a total dose they may take on Europa, like NASA's real career limit
  (600 mSv). It fills faster outside, slower in the habitat, slowest in the
  ice cave, and faster during plasma crossings. The cryobot must break
  through before the budget runs out. This replaces a cryobot energy timer.
  Together with heat (the cave is very cold, so body heat drops there) it
  removes the "hide in the cave forever" loophole: waiting still costs dose, and it ties power to time: more power to the cryobot
  means a faster dig and less dose, but less heat. Shown as a meter in game
  units with the real limit explained in "What's real?". Real Europa surface
  rates aren't shown as numbers (the common 5.4 Sv/day figure isn't
  NASA-sourced).
- **A power red line (Cyril, 2026-11-14):** if stored power drops below a
  threshold, systems shut down. The child manages around it. (Science: the
  reactor's flow doesn't run out; the **battery** does, when spending beats
  income. See `references/europa.md` section 15.)
- **Events chosen so far (Cyril, 2026-11-14):**
  - **Plasma-sheet crossing with the aurora.** Every ~5.6 hours Europa
    crosses Jupiter's plasma sheet: radiation and the static-spark risk rise,
    and the sky glows purple (labelled false colour; the real glow is
    ultraviolet). Occasionally a much stronger crossing, the **Purple Aurora
    Storm**, labelled "scientists think Io's eruptions may make this
    stronger".
  - **Sideways tide (strike-slip).** Once per Europa day (85 h) the tide
    slowly grinds a ridged fault sideways over hours (real: Astypalaea Linea,
    810 km). It strains the cryobot's cable. Not a sudden quake.
  - **Jupiter eclipse.** ~3 hours of pitch dark at noon on the Jupiter-facing
    side, every Europa day. Taking heat from the cryobot lets its hole
    refreeze. No eclipse-made cracks (not real).
  - **Brine pocket.** Early in the dig (1–3 km down) the cryobot meets a
    pocket of salty water. The trouble happens down at the probe (the hole
    refreezes behind it). The reward is a sample that could hold signs of
    life, not fuel.
  - Science notes for all four: `references/europa.md` sections 13–17.
- Maybe later: micrometeorite hit (rare, not a shower), plume (only with a
  life-clue reward).
- **Power setup (Cyril, 2026-11-14): reactor + some sunlight + battery.**
  - **Reactor:** the steady, finite supply shared by the base and the
    cryobot. Sending power down the cable is a simplification and is labelled
    (real cryobots carry their own nuclear heater).
  - **Solar panels:** a *small* daytime bonus, zero at night (42 h) and
    during Jupiter's eclipse (~3 h). Sunlight is 25× weaker than at Earth:
    ~15 W per m² of panel.
  - **Battery** with the red line: below it, systems shut down.
- **Losing (Cyril, 2026-11-14):**
  - **No one dies: the mission is aborted** and Mission Control calls the
    crew home (true to NASA practice; suits ages 7–12).
  - **A separate ending for each cause**, each with its own real story:
    - power: battery below the red line too long, base shuts down
      (Opportunity, 2018);
    - heat: heaters starve, equipment freezes (Spirit, 2010);
    - radiation: the crew hits the dose limit (NASA's real 600 mSv career
      limit);
    - cryobot: locked in by refrozen ice, or its cable snaps.
  - **A debrief shows the cause-and-effect chain** that led there.
  - **It shows how deep the cryobot got**, against Juno's 29 km.
  - **Restart from the start of the last Europa day**; a full restart stays
    available.
  - Sources: `references/europa.md` section 18.
- **One scene (Cyril, 2026-11-14):** a single settled place: the base in an
  ice canyon, with an ice cave. No other scenes in the game itself (intro and
  ending cutscene aside).
- **Canyon (Cyril, 2026-11-14):** a **fixed backdrop** beside the base: the
  deep trough of a double ridge (Europa's real canyon-like landform), seen
  from the base and reachable to its edge, not fully walkable. It does not
  open during play (real tides move cracks slowly and slightly).
  **Why we don't drill in it (shown to the player):** it's only a few hundred
  metres deep, but the ice is ~29 km thick, so starting there saves about 1%
  of the dig. And it's the active fault the tide grinds sideways, which would
  tear the cryobot's cable (a real NASA cryobot concern).
  Visual reference: `design/reference/` (AI-made, reference only).
- **First person (Cyril):** the player *is* the astronaut, walking around the
  base in first person, in the spirit of underwater-survival games. No
  astronaut model needed on screen.
- **Visual direction (Cyril):** **stylised and beautiful over realistic**:
  bold colours, clean shapes, glowing lights, in the spirit of colourful
  space-exploration games. Our own look, not a copy of any game. Cyril named
  this direction himself, so the Nila design system does not govern the game
  world. Science limits on the style: black sky with no haze (no air), hard
  shadows, Jupiter at true size (~12°) and correct phase, Europa's real
  palette (whitish-tan ice, red-brown streaks) pushed brighter rather than
  replaced; spiky ice crowns and plumes labelled as unconfirmed.
- **Game structure: the mix (Cyril, 2026-11-14).** The base runs freely in
  first person (meters, battery, Europa-day clock, eclipse, plasma clock),
  and the four events arrive at planned moments. The right choice depends on
  the base's state at that moment. Order and timing may vary a little per
  run, if time allows.
- **Style references (Cyril, 2026-11-14):** screenshots from colourful
  space-exploration games and a stylised ice-lake render: soft pastel
  colours, smooth sculpted snow and ice, glowing lights, a giant planet in
  the sky. Mood reference only: never put those screenshots in the game,
  video or project page (copyrighted). How it maps to Europa:
  - **Surface:** take the soft colours, smooth shapes and glow, but **not**
    the blue sky, clouds, haze or plants (Europa has no air and no known
    surface life). Colour in the sky comes from Jupiter and the aurora
    (labelled false colour) against black.
  - **Ocean cutscene:** here haze and soft light are *true* (water scatters
    and absorbs light), so this is where the full dreamy, glowing look goes.
    Imagined life, labelled.
- **Tech (decided by Claude at Cyril's request, 2026-11-14):** a browser 3D
  game with **Three.js**, built with **Vite**, hosted on GitHub Pages.
- Still open: how the dig spot is chosen now that exploration is dropped;
  whether tablets/touch must work (first person by default needs a keyboard
  and mouse).

## The code

- **Run it:** `npm install`, then `npm run dev` (or the Browser pane's
  `europa-game` launcher in `.claude/launch.json`, port 5180).
  `npm run build` makes `dist/` for GitHub Pages.
- **Stack:** Three.js 0.170 + Vite 5, plain JavaScript.
- **Layout:** `src/main.js` (renderer, lights, shadows, loop, automatic
  picture-sharpness control) · `src/world/layout.js` (where everything
  stands; sky directions) · `src/world/terrain.js` (ground height + the
  shared ice shader) · `src/world/sky.js` (stars, Jupiter, Io, Sun, aurora) ·
  `src/world/ice.js` (cave, chaos blocks, ice chunks, ice blades) ·
  `src/world/base.js` (habitat, panels, reactor, cryobot, spool, cables,
  crates) · `src/world/colliders.js` (what the player can't walk through) ·
  `src/player.js` (first-person walking, Europa gravity) · `src/post.js`
  (bloom, colour grade, edge smoothing) · `src/ui.js` (start screen,
  captions).
- **State (2026-11-14, evening): first scene, second graphics pass, in
  progress.** Read "Handoff" just below before touching the graphics.
- **Assets:** Jupiter's map is NASA's Cassini PIA07782
  (`public/textures/`), credited on screen. Everything else is generated in
  code. Any new outside asset must be credited in the game and the brief.

## Handoff: first-scene graphics (written 2026-11-14 for the next session)

**What Cyril wants (his words, in order of weight):**
- **Layout target:** his two AI pictures. The FIRST VIEW on login is the
  Jupiter picture (player south of the base, looking north: cave ridge left,
  habitat left of centre with solar panels in front, reactor behind, spool
  and cryobot right, canyon and slabs far right). BEHIND THE BASE is a big
  veined ice mountain. Local copies: `design/reference/first-view-AI-reference-v3.webp`
  and `behind-base-AI-reference-v3.webp` (AI-made, NOT pushed: the repo is
  public and they carry no watermark; ask Cyril to re-attach them on a new PC).
- **Texture style target: No Man's Sky screenshots** ("primary style
  reference, match the textures closely"): white frost on gentler parts, bare
  blue ice where steep, fine wrinkles and grooves running downslope, rounded
  frost-capped boulders. Copies in `design/style-refs-local/nms-ref-*`
  (copyrighted, git-ignored, local only: ask Cyril to re-attach).
- **He rejected:** the first soft/smooth pass ("flat, blurry"); an endless
  straight ridge; **polygon/cell patterns on mountains and cliffs** and
  noodle-like vein lines. He approved: the new layout, the cracked-plate
  ground with relief, the mountain direction.
- **How to work with him here:** show ONE screenshot at a checkpoint before
  building on; he is watching token use.

**Where the code stands (all in `src/world/terrain.js` unless noted):**
- Layout re-done in `layout.js` (spawn south of base, door faces SE, massif,
  finite cave ridge, base pad). `LINEAE` generates both the ground groove and
  the shader's red lines.
- Ground mesh: 2 m cells in the play area, 5 m out to 640 m (covers the
  mountain), coarser beyond. About 390k triangles.
- Ice shader: FLAT ice = three sizes of cracked plates (tilted, with cut-in
  seams) only on the open plain, frost drifts hiding small cracks in places;
  STEEP ice = frost/bare-ice texture from wrinkled noise (no cells).
- **Hard-won rule:** never get plate tilt or groove relief from `dFdx/dFdy`
  of a height built from the Voronoi pattern: it makes dotted grids and
  hatching on the ground. Plate tilts and grooves are passed as exact slopes
  (`iceTilt`); only smooth noise goes through the height bump (`iceH`). The
  low-Sun light curve is `x*1.16/(x+0.16)` (gentle at the shadow edge).
- `ice.js`: rounded boulders (big ones frame the first view, with colliders),
  chaos slabs, cave. `base.js`: hull plating texture on habitat, reactor,
  cryobot.
- Camera lens is 60° (Jupiter stays its true 12.2°, just fills more screen).

**Still to do / known issues:**
- A small stair-stepped edge where a rusty stain meets a seam near the
  habitat (around x 12, z 16). Cosmetic.
- Cyril has not yet seen the frost-and-ice mountain, the boulders or the hull
  plating. Show him the first view and the behind-base view next.
- Chaos slabs and ice blades have not been re-checked with the new texture.
- Speed on an ordinary laptop is untested (the Browser pane's frame timer
  pauses when hidden). The shader is heavier than the first pass.
- `design/FIRST-SCENE-BRIEF.md`'s position table still describes the OLD
  layout; `layout.js` is the truth. Update the table once Cyril approves.
- Not walked by hand since the re-layout: check the stairs, cave mouth and
  boulder colliders.
- Science flag to keep: Europa has no alpine mountains; the massif is capped
  near 200-250 m ("ridges hundreds of metres tall"). Say so in "What's real?".

## What the challenge asks for

Kids **7–12** run a **Moon or Mars outpost** and make real trade-offs between
life support, radiation shielding, power, food production and comms delay, then
see how those choices play out over a simulated mission. Format is open
(survival/resource game, narrative decisions, mission-control dashboard, …).

Design rules from the brief:

- **No free choice.** Every decision costs something ("save power today, lose
  oxygen tomorrow"). No safe option.
- **2–3 core resources**, not 5–6. Don't overwhelm young players.
- **Mechanics over polish.** A simple game that teaches a true constraint beats
  a pretty one that doesn't.
- **Plain language.** Explain unavoidable terms (radiation dose, microgravity,
  sol) in context.
- **Browser-playable, no download, no account.**
- **Replayable**; failing should feel like learning, not punishment.
- Stand-out: link an in-game choice to **real current space weather**.

## NASA data

At least one NASA dataset is **required** for global awards. Attribute every
source **inside the game**. Never present saved/static data as live.

| Source | Use | Link |
|---|---|---|
| DONKI | Solar flares, CMEs, radiation storms | https://ccmc.gsfc.nasa.gov/tools/DONKI/ |
| api.nasa.gov | API portal (DONKI, Mars photos, APOD) | https://api.nasa.gov/ |
| OSDR | Astronaut health / space biology research | https://osdr.nasa.gov/bio/repo/ |
| RadLab | Real ISS radiation dose measurements | https://visualization.osdr.nasa.gov/radlab/gui/data-api/ |
| Mars Trek | Real Mars terrain and imagery | https://trek.nasa.gov/mars/ |
| CSA food toolkit | Growing food on the Moon | https://www.asc-csa.gc.ca/eng/youth-educators/toolkits/food-production/ |

**Real data and notes are in [`references/`](references/README.md): read them
before deciding any number, event or science fact.** Every number in the game
should trace back to one of them, or to another named source.

**API key:** lives in `.env` (never committed, never pasted into chat or code).
`.env.example` shows the variable name. Note that anything a browser game
fetches with a key exposes that key to players — acceptable for a free NASA
key, but prefer fetching/caching data at build time where possible.

## Submission checklist

- [ ] Project page on spaceappschallenge.org, all fields, **English**
- [ ] Public link to the playable game (planned: GitHub Pages) — no login
- [ ] Demo: **video ≤ 30 s** *or* **≤ 7 slides** — hard limits, over = disqualified
- [ ] NASA data section filled in
- [ ] AI ("SI") use disclosed — keep `AI-USE.md` current as we go
- [ ] AI-made images/video carry a visible watermark; AI-made code/data noted in text + metadata
- [ ] No NASA logos, flags or mission insignia in anything AI-generated
- [ ] No image, video or voice of anyone under 18
- [ ] "Submit for Judging" clicked before Sun Nov 15, 23:59 event time

Judged on **Impact, Creativity, Validity, Relevance, Presentation**, each 1–5
(Judging & Awards Guide). The two that police the science:

- **Validity:** "grounded in scientific principles", "scientifically sound",
  also usable and user-friendly.
- **Relevance:** NASA data must be "a core component of the proposed solution
  rather than a superficial addition".

Fiction is allowed only if it's labelled as imagined and doesn't teach kids
something false about a real world or substance.

**Every game decision is checked against [`JUDGING.md`](JUDGING.md).** It
holds the five scores, the brief's pitfalls and stand-outs, all 10 awards, the
hard rules, the demo plan and a log of decisions weighed so far. When Cyril
weighs an option, say which scores and awards it helps or hurts, whether it
breaks a rule, and roughly what it costs in hours, then recommend one. Our
award targets: **Art & Technology** and **Best Use of Data**. Add each new
decision to the log at the end of `JUDGING.md`.

## Open questions

- ~~Visual direction~~ and ~~tech stack~~: decided 2026-11-14, see "The idea".
