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
  **Changed (Cyril, 2026-11-14, night): looks first on the east side.** The
  canyon is now only glimpsed through a gap in a craggy rim, and the player
  can no longer walk to its edge ("no one's gonna climb that"; he is fine
  with removing the canyon outright if it ever gets in the way).
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
- **Dig spot (Cyril, 2026-11-14, night): set by us.** The cryobot stays
  where it stands; the player doesn't choose.
- **How the player acts (Cyril, 2026-11-14, night): walk up to a thing and
  HOLD a button** to do something to it.
- **The opening** is Cyril's, handled in a separate chat (`src/ui.js`,
  `index.html`). Don't rework it from the gameplay side. (2026-11-15: at
  his request the first click now plays his intro video and then the
  dangers briefing; see "Before the game" below. The start screen's look
  was not touched; `ui.js` gained one hook, `before()`.)
- Still open: whether tablets/touch must work (first person by default needs
  a keyboard and mouse).

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
  `src/player.js` (first-person walking, Europa gravity) · `src/audio.js`
  (suit sounds made in code) · `src/post.js`
  (bloom, colour grade, edge smoothing) · `src/ui.js` (start screen,
  captions) · **`src/game/`, the mission:** `rules.js` (every number, with
  its source) · `sim.js` (the rules themselves: clock, battery, heat,
  radiation, dig, the seven situations; no 3D in it) · `situations.js` (the
  words on each situation's card) · `daylight.js` (the Sun's path, night,
  eclipse, as light in the world) · `game.js` (ties rules, world and screen
  together; the hold-a-key actions) · `hud.js` + `hud.css` (meters, clock,
  depth, warnings, prompts, the control desk inside the habitat, end screen) · **`src/ocean/ocean.js`, the ending:** the
  dive down the shaft and the living ocean under the ice (its own 3D scene,
  drawn in place of the surface while it plays). · **`src/game/voice.js`,
  the guide's voice** (plays a recording for each line of text, when one
  exists) · `scripts/voice-script.mjs` (writes the list of lines to record) ·
  `scripts/record-voice.mjs` (records them with ElevenLabs) ·
  **`src/game/prelude.js`, what plays before the game** (the intro video,
  then the dangers briefing) with `briefing-words.js` (its narration).
- **State (2026-11-14, night): first scene, THIRD graphics pass done (depth
  and relief), waiting for Cyril's verdict.** Read "Handoff" just below, and
  "Third pass" at its end, before touching the graphics.
- **Gameplay state (2026-11-14, late night): second version built** (one
  power plan, seven situations, life clues, five ways to lose and one to
  win), **and the ocean ending** (see "The ocean ending" below).
  "What's real?" is built (2026-11-15; see its section below). Read "Gameplay
  (second version)" below before touching `src/game/`.
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
  and `behind-base-AI-reference-v3.webp` (AI-made; see the TEMPORARY note below).
- **Texture style target: No Man's Sky screenshots** ("primary style
  reference, match the textures closely"): white frost on gentler parts, bare
  blue ice where steep, fine wrinkles and grooves running downslope, rounded
  frost-capped boulders. Copies in `design/style-refs-local/nms-ref-*`
  (copyrighted, git-ignored; see the TEMPORARY note below).
- **He rejected:** the first soft/smooth pass ("flat, blurry"); an endless
  straight ridge; **polygon/cell patterns on mountains and cliffs** and
  noodle-like vein lines. He approved: the new layout, the cracked-plate
  ground with relief, the mountain direction.
- **How to work with him here:** show ONE screenshot at a checkpoint before
  building on; he is watching token use.

**TEMPORARY reference images are in this branch (Cyril's call, 2026-11-14):**
the AI pictures in `design/reference/` and the No Man's Sky screenshots in
`design/style-refs-local/` were pushed in ONE separate commit ("TEMP reference
images") so he can work from another PC. **They must be removed before
submission, and that commit must not reach `main`:** drop the commit (or
rebuild the branch without it) rather than just deleting the files, because
deleted files stay in git history. Rules at stake: no copyrighted material
without permission; AI images need a visible watermark.

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

**Third pass (2026-11-14, night): "everything looks flat, like 2D".** Cyril
sent four more No Man's Sky screenshots and asked for their depth. What was
missing, and what was done about each:
- *Light and dark:* bare ice was pale, so frost and ice had the same
  brightness. Now bare ice is dark deep blue and frost is white.
- *Relief that the light agrees with:* a CC0 cliff texture (`public/textures/cliff/`,
  Poly Haven "Cliff Side"; bump + height packed into one texture at load,
  `tCliff`) gives faces exact surface directions at three sizes (36 m, 11 m,
  3 m close up). Frost is decided from that SAME relief (`nP.y`), so a white
  ledge is also lit as a ledge. Hollows are darkened (`iceAO`).
- *Flat lighting:* the low-Sun curve is now `1.5x/(x+0.5)` (the old
  `1.16x/(x+0.16)` made every sunward face equally bright). The shadow fill
  depends on the surface direction instead of being one flat glow. **Sun
  raised to ~17°** (`layout.js`): at ~10° the far crest shadowed most of the base.
- *Shapes:* boulders are cut blocks with crisp edges (`chiselledRock`), slabs
  have broken corners, ~800 pieces of small debris lie on level ground.
- **Not copied on purpose: the references' fog.** Europa has no air.
- Look knobs per object: `makeIceMaterial({}, { faceScale, frost, rust, patch })`.
- *Flat ground:* low hummocks (~10 m across, a few tens of cm high) in
  `heightAt`, inside the finely meshed play area only; the base pad stays
  level. `heightAt(x, z, false)` (and `flatH` in `ice.js`) leaves them out:
  use it ONLY in the rules that decide where loose ice may lie, so the
  plates and slabs kept their places. Things still sit on the real ground.
- Speed: ~19 ms a frame on an Apple M2 at 1536×1152 (first view); the canyon
  view ~26 ms. The terrain draws last (`renderOrder`) to skip hidden ground,
  and each plate pattern is skipped where it can't be seen (slopes, far
  ground). Measured: the plate (Voronoi) patterns cost about a quarter of
  the frame on level ground; a cheaper pattern there is the next saving.
- Debug: `__game.frame()` draws one frame on demand (the Browser pane pauses
  the loop when hidden; screenshots lag one frame behind without it).
- Not done: the base's metal was left as it was.

**Fourth pass (2026-11-14, night): the two sides of the first view.** Cyril:
the mountain behind the base "looks very good"; the ice cave too. The LEFT
mountain "doesn't look like a mountain, too blue, flat", with "ugly rocks"
above the cave and awkward rocks stuck on its slope. The RIGHT side's near
rise is "really, really flat" and the canyon can't be seen. Looks beat
walkability there. What was done:
- *Left (the cave mountain, `westRidge` in `layout.js`):* rebuilt with the
  massif's recipe in `heightAt`: crest moved back to x≈-104 with a 62 m
  slope toward the base (a short steep wall came out as a striped blue
  face), peaks along the crest, spurs, crags, buttresses and gullies down
  the slope, and one spur behind the cave so the cave opens into the
  mountain's foot. Terrain material: a little more frost, fainter rust.
- *Rocks:* the apron of blocks round the cave dome is gone; loose chunks lie
  only on level ground (`tryFlat`), never up a slope.
- *Right:* the smooth near rim is now a broken line of crags (`canyon.rimBack`
  back from the edge), kept under ~12 m plus slabs because the Sun rises
  behind it (taller = the base in shadow). One gap at `canyon.notchZ` shows
  the canyon's far wall. The player stops `canyon.walkLimit` metres before
  the crags' crest (`player.js`).
- *Shaded faces:* the right side is seen from its shaded side, so the shadow
  fill now has a strong bounce from the sunlit plain (`iceBack` in the ice
  shader); without it those faces were one flat blue.
- The blocks framing the first view have their own random sequence now
  (`fr` in `ice.js`), so terrain edits can't change their shape. The plates
  on the plain can still reshuffle when `heightAt` changes near them.
- `__game.blocked(x, z, fromX, fromZ)` exposes the walking rule for tests.

**Fifth pass (2026-11-14, night): cave, salt line, black flash, walking.**
- *Black flash every now and then (fixed, `main.js`):* the automatic
  sharpness control resized the picture right AFTER drawing a frame, which
  wipes it, so a black frame reached the screen; and it flipped up and down
  every 1.5 s. Size changes now wait for the start of the next frame
  (`applyPendingChanges`), go up only after ~12 steady seconds, and
  remember a level that proved too much.
- *Cave (Cyril: "looks like a tube, artificially created"):* the outside
  shell is the dome pulled up into a craggy peak (`peakOver` in `ice.js`,
  +17 m, leaning back into the mountain); the inside wall keeps the plain
  dome (`domeGeo`). The arch is a six-sided, lumpy, hard-edged tube. The
  icicles are gone (they read as spikes floating in the air). Terrain: a
  taller spur behind the cave, two low rocky arms beside the mouth, and the
  cave floor is level right out to the wall (`caveFlat`).
- *Ground beside the cave:* the base pad is shorter toward the west
  (`heightAt`), so that ground has relief again; boulders at the arms' feet.
- *Salt lines (Cyril: the ice around them "is very acute"):* the groove is
  wide and shallow with low rounded shoulders (the old narrow one could
  only be drawn as jagged folds by the 2 m mesh); no slabs stand along the
  lines and no plates lie within ~2 line-widths of them.
- *Plates:* every try now draws all its random numbers first (`drawer`), so
  terrain edits add or drop single plates instead of reshuffling them all.
  Nothing within 13 m of the spawn.
- *Walking (from a scripted walk test by a second agent):* going uphill is
  also stopped by ground steeper than 1.0 in any direction and above 16 m
  (the old rule let the player zig-zag to the mountain's crest); the east
  stop is 10 m before the crags' crest; boulder, slab and plate colliders
  were widened to fit what is drawn; the cave's rock blocks 5 m out from
  the dome except beside the mouth. Re-checked by a flood-fill from spawn:
  cave centre, stairs foot, reactor and cryobot reachable; highest
  reachable ground 16 m; nothing below -1.4 m.
- *Base and gear:* upgraded by a forked agent working only in `base.js`
  (see its notes in the code).

**Sixth pass (2026-11-14, late night): black squares in the cave, and the
bare page while loading.**
- *Black squares in the cave (fixed, found by measuring):* the cave's
  glowing inner wall worked out its edge glow as `pow(1.0 - dot(N, V), 2.5)`.
  Looking at the wall dead-on, rounding makes the dot a hair over 1, and a
  power of a negative number is "not a number". About 1 view in 50 inside
  the cave had one such pixel; the glow effect (bloom) blurs the picture and
  spreads that pixel into a black square. (The earlier guess, a too-shiny
  crystal highlight, was wrong.) **Rule: in any shader, clamp what goes into
  `pow` to 0 or more** (`pow(clamp(1.0 - x, 0.0, 1.0), k)`). Same clamp
  added to the crystals' rim and to Jupiter's limb in `sky.js`.
- *Safety net (`SafeShader` in `post.js`):* a pass right after the scene is
  drawn turns any not-a-number pixel black and caps absurd brightness, so
  one bad pixel from any future shader can't become a square. Tested with a
  deliberately broken pixel: 83% of the screen black with the net off, none
  with it on.
- *How to hunt these:* draw the scene into a `FloatType` render target,
  read it back and count values where `v !== v`; hide objects one at a time
  to find the one responsible.
- *Bare page while loading (Cyril: "looks awful, remove it"):* the page's
  text used to show unstyled, black on white, for the seconds the game took
  to load, because `style.css` arrived with the game's code. It is now
  linked from `index.html`'s head, and `<body class="loading">` keeps
  everything hidden (black) until the first picture is drawn (`main.js`
  removes the class). The start screen itself is unchanged.

**Seventh pass (2026-11-15): habitat view, gliding shadows, the arch.**
- *View from inside the habitat (Cyril: "very, very blurry"):* it is the
  heaviest view in the game, so the automatic sharpness control had turned
  the picture right down for it. Inside, only the square round the window
  is drawn now (`setSize(..., windowShare)` in `post.js`, a scissor on the
  composer's two pictures; switched by `watchWindow` in `main.js` 0.6 s
  after going in, once the dark wall has faded in), and what that saves is
  spent on sharpness (`drawnRatio()`). `WINDOW_SIZE` in `main.js` must match
  `.p-ring`'s 92vmin in `hud.css`. Measured here: 23 ms a frame before,
  17 ms after, at the same sharpness. Test: `__game.windowOnly`.
- *Shadows (Cyril: "laggy, changing frame by frame"):* they were redrawn
  only when the light had moved a tenth of a degree, about five times a
  second at 8 s per Europa hour, so long shadows moved in jumps. They are
  now redrawn every frame the light moves (`daylight.js`); costs ~1.5 ms a
  frame by day, nothing at night or while the clock stands still. The
  shadow area also re-centres by whole dots of the shadow picture
  (`updateShadowArea`), so walking no longer twitches the edges.
- *The ice arch (Cyril: that corner "looks a little boring ... maybe some
  sort of arch"):* `LAYOUT.iceArch`, `createIceArch` in `ice.js`: a 42 m
  wide, 28 m tall arch from the south end of the crags to the massif's
  foot, with fallen blocks at its feet. The player can walk under it; the
  feet and big blocks have colliders. **Imagined landform: nothing like it
  has been seen on Europa. Say so in "What's real?".** Not yet seen by
  Cyril from the first view or at night.

**Walking feel (2026-11-14, night).** Cyril: walking and jumping were
"robotic", and a jump could be steered in any direction. `src/player.js` now
keeps a real velocity. Not yet tried by Cyril with his own hands.
- The suit gathers speed and coasts to a stop (`GRIP`, `GLIDE`); backwards is
  slower; running works only going forward.
- **A jump is committed:** it keeps the speed and direction it left the
  ground with (`AIR_CONTROL = 0`; true to Europa, no air to push against).
  Knee-bend before take-off (`JUMP_WINDUP`), dip on landing, some speed lost
  on landing. A running jump carries ~30 m in ~4 s.
- The eyes bounce with each step (a slow lope) and lean a touch when
  side-stepping. The bounce is added on top of the suit's position (`pos`);
  never do physics from `camera.position`.
- A dot crosshair (`#crosshair`), shown only while playing.
- Tests: `__game.walk({ fwd, side, run, jump }, seconds)` drives the suit
  without the mouse and returns its state; `__game.player` reads it.
- **Sound (`src/audio.js`), made in code, no sound files:** a crunch for
  each step (in time with the bounce, alternating feet), a push-off, a
  heavier thud on landing, silence in the air. **M** turns sound on and off.
  Europa has no air, so these are only the sounds that travel through the
  boots and suit into the helmet, which is why they are dull; say so in
  "What's real?". Nothing out in the world may make a sound the player
  hears through "air" (no engine hum from across the base, no wind).
  Checked by measuring the output level, not by ear: Cyril has not heard it.
  Test: `__game.audio.level()`.

## Gameplay (second version, 2026-11-14, late night)

**Why there was a second version.** The first build was two dials to keep
balanced (cryobot power and heaters, in kilowatts). Cyril played it and
said: too much power, hiding in the habitat is the safest choice, and it is
"just managing stuff", repetitive, with no real decision by situation. He
pointed back at the challenge brief, whose own examples are all one-off
situations with a price: "reinforce shielding against a radiation event at
the cost of tonight's power supply", "trade oxygen reserves for an extra
research opportunity", "a choice that saves power today might cost oxygen
tomorrow". The game was rebuilt on that shape. **Not yet played by Cyril in
this form**; checked by scripted tests (the Browser pane can't capture the
mouse, so real mouse-and-keyboard play is untested).

**The shape now:**
- **Three meters:** the battery (the base's spare power, 0-100%), heat (the
  crew's warmth) and the radiation dose (the mission clock).
- **One standing choice, the power plan,** changed inside the habitat (hold
  Q): *Dig first* (fastest dig, the crew gets cold, quickly in the dark),
  *Share* (half-speed dig, warm by day, slowly cooling in the dark), *Warm
  first* (the crew warms, the cryobot gets no heat so its hole starts to
  freeze: Cyril's "taking heat from the cryobot lets its hole refreeze").
  Hold R for a **boost**: 15% of the battery buys 3 hours of full digging
  AND warmth.
- **The battery** fills in sunlight, drains in the dark, and is what several
  situations can be solved with. There is not enough for all of them.
- **Seven situations,** each a card that stops the clock until the child
  presses F, then a choice made by walking to a place and holding a key:
  1. *Pocket of salty water* (Cyril), at the cryobot: take a sample (a life
     clue; the dig stops 3 h and the hole freezes partly) or steer round it
     (20% battery, no clue). Undecided, it freezes in.
  2. *Jupiter's eclipse* (Cyril): a forecast card. No rule of its own: in
     the dark every plan is colder and the battery drains, so it is a
     3-hour rehearsal of the night.
  3. *Ocean chemicals at the crack* (suggested): a long walk to a green
     beacon for a second life clue, or leave it. Gone in 10 hours.
  4. *Clouded camera* (suggested), at the cryobot: bake it clear (the
     habitat's heaters go to it for 4 h) or dig on at half speed.
  5. *Purple Aurora Storm* (Cyril): stay in the habitat (a big dose), fill
     its walls with water (hold F inside; 25% battery), or shelter in the
     ice cave (bitterly cold, a long walk).
  6. *Sideways tide* (Cyril), at the cable spool: pay out slack about three
     times while the fault moves (outside, at night), or lock the spool (no
     snap, but the dig is a third slower for good). Ignored, the cable snaps.
  7. *Salt layer* (suggested), at the cryobot: cutting jets (25% battery) or
     crawl through while the dose climbs.
- **Life clues (0-2)** are shown on the win screen. The ocean cutscene should
  use them (more clues, more to find); that is not built.
- **Ordinary plasma crossings** are a background rhythm (the sky glows, the
  dose ticks faster); only the storm is a decision. The "static spark"
  dice-roll from an in-between draft was dropped: no luck decides anything.
- **Each situation begins at a depth** (a little different every mission),
  so every mission meets all seven in order however fast it digs. Only the
  eclipse comes by the clock.

**Whose is what.** Cyril's: the three resources, the dose as the clock, the
four events, "taking heat from the cryobot lets its hole refreeze", hold a
button to act, no safe choice, the dig spot fixed. From the brief: the three
shapes of decision. **Suggested by Claude from the real hazards in
`references/europa.md` section 13 and accepted by Cyril's "Yes, rebuild"
without discussing them one by one:** the crack, the camera and the salt
layer; the water walls (the brief's "reinforce shielding" example made
concrete); the boost; life clues counting; the clock stopping on a card.
**Any of these is Cyril's to change or drop.** All numbers are Claude's.

**The sky is worked out, not chosen** (`daylight.js`): the Sun travels the
one circle through its place in the first view and through Jupiter. From
that: the mission starts 9.6 h after sunrise; the eclipse is centred at hour
29.3 and lasts 2.9 h (Jupiter's 12.2 degrees at 360 degrees per 85 h, which
matches the "about 3 hours" in `references/europa.md` section 12); land
hides the Sun from the base before hour ~4.9 and after ~33.6 (the cave
mountain), so the base's own night is ~56 h and most of a mission is night.
At night the one shadow-casting light is re-aimed to come from Jupiter,
nearly full around midnight. During the eclipse Jupiter is a dark disc with
a thin ring of sunlight bent through its air (real).

**Balance, from simulated players** (a script stepping `sim.js` with
different habits, ten missions each): start the dig and hide loses in 3
minutes (frozen in at the salty water); answering only the cryobot loses
the cable; "Share" all mission, never boosting, locking the spool, skipping
the camera, or always taking the cheap option all run out of radiation
budget. Active play wins in 10-12 minutes with 85-95% of the dose used.
Going for both life clues about halves the chance of winning: science is
paid for in safety, which is the brief's "radiation exposure weighed against
mission objectives". The simulated players are crude; **a real child's
difficulty is unknown until Cyril plays it.**

**Science flags for "What's real?"** (all noted in `rules.js`):
- The dig is sped up enormously (real: ~3 years); a message says so at the start.
- Dose, heat and battery rates are game units; only their ORDER is real.
- Situations starting at set depths is a game device; the real tide comes
  once a Europa day and the plasma rhythm is 5.6 h (kept).
- Water walls: water is a real shield and melting ice really costs a lot of
  power, but a habitat with fillable walls is imagined.
- "Io's eruptions may make it stronger" must stay a "may".
- Life clues: no life has been found on Europa; the clues are things real
  scientists look for (ammonia near cracks is a real Galileo finding).
- Night brightness under Jupiter is stylised.
- The end screens quote Opportunity 2018, Spirit 2010 and the 600 mSv limit:
  cite NASA's own pages before submission.

**Tests** (browser console): `__game.game.skip(hours, zone)` runs the
mission forward (cards skipped); `.act('E')` does what holding a key here
would; `.actions()` lists what can be done here; `.card` is the open card;
`.timeScale = 40` speeds time; `.sim.state` is the live state;
`.sim.choose(id, option)`, `.sim.setPlan(name)`, `.sim.boost()`. After
`__game.view(...)`, call `__game.walk({ fwd: 0, side: 0, run: false },
0.05)` so the player's position catches up with the camera.

**Still to build:** touch controls. (The "What's real?" panel was built on
2026-11-15 and carries the NASA credits for the numbers.) The reactor has no action of its own any more.
All on-screen wording is placeholder copy for Cyril to rewrite
(`src/game/situations.js`, `hud.js`, `game.js`).

## The training before the mission (2026-11-14, late night)

Cyril: "we gotta add proper onboarding before the game begins. It's too
messy right now for a child to navigate easily." Built in
`src/game/training.js`; **not yet tried by Cyril or by a child.**

- **Eight steps, one at a time,** in a box low on the screen. Each either
  finishes when the child has DONE the thing, or waits for F after something
  to read: look round and find Jupiter; walk a few steps (any direction:
  the checkpoint light that stood here was removed, Cyril, 2026-11-15:
  "I have no idea why would I go there"); jump; walk
  to the cryobot and hold E to start it; walk to the habitat and hold E to
  go in; hold Q to change the power plan; the battery and the boost; "no
  safe choice", then F starts the mission.
- **The mission clock stands still** until the last step, and only the
  action a step is teaching will work.
- **Panels appear only as each is explained** (cryobot depth, then
  radiation, heat, battery, clock), with a yellow glow when they arrive.
- **T skips it.** It runs once, on the first click into the game; "try
  again" and "play again" go straight to the mission.
- **A marker shows where to go,** in the training (yellow) and in the
  mission (blue): a thin pillar of light at the place, and on screen a tag
  with the distance, which turns into an arrow at the side when the place is
  out of view. In the mission it points at whatever needs the player most
  (things that can't wait always; optional ones for about 5 hours after
  they begin, so it doesn't nag).
- The opening facts that used to play as timed captions in `src/ui.js`
  (Europa, Jupiter fixed in the sky, low gravity, no steering in a jump) are
  now taught by the training's first three steps; the captions list there
  is empty. The start screen itself is untouched.
- Wording is placeholder copy for Cyril to rewrite.
- Tests: `__game.game.training` (`.active`, `.view`, `.way`, `.skip()`).
  `skip()` and `startDive()` on the game also skip the training.

## Before the game: the intro video and the dangers briefing (2026-11-15)

**Cyril:** his intro video goes before the game; after it, "film parts of
the base ... explain every danger that you face ... not in words, but see",
with "the same voice I used in the video".

- **The order now:** start screen ("Click to begin") → **his video** →
  **the dangers briefing** → start screen again ("Click to step outside")
  → the training → the mission. The second click is needed because a
  browser only lets the game capture the mouse straight after a click.
  It plays once per page load. "Skip ›" (or Enter) jumps over the part that
  is playing; Space goes to the next danger.
- **The video** is `public/video/europa-intro.mp4`: "Are we alone?", 29.8 s,
  25 MB, copied unchanged out of the branch
  `origin/claude/clever-feynman-ahp3yo`, where another chat made it (NASA
  footage, AI narrator, Epidemic Sound music "Vestige"; its credits are in
  its last seconds and in the file's tags). **That branch was NOT merged:**
  it grew from `main`, not from this branch. Its `story/intro.md`,
  `tools/intro-v3/`, and its rows in `AI-USE.md` and `JUDGING.md` still
  have to be brought over before submission (the video's sources belong in
  the project page's references).
- **The briefing** (`src/game/prelude.js`) is not a recording: it moves the
  game's own camera round the real base, shot by shot, so it can't go out
  of date. Eight parts: radiation, plasma crossings, shelter, cold and
  dark (shown during Jupiter's eclipse), power, the cryobot, the tide, "no
  safe choice". Each has a title, one to three meters that fill or drain
  (the HUD's colours), the narration as a subtitle, and for the plasma
  part the false-colour label. Shots are in `SHOTS`; words in
  `briefing-words.js` (placeholder copy, AI-written from the facts already
  in the game; Cyril's to rewrite).
- **Length:** about 1 min 50 s unvoiced (each part lasts as long as its
  subtitle takes to read); with recordings each part lasts as long as its
  line. That is long on top of a 30 s video and the training: it is
  skippable, but watch a judge's patience.
- **Voice:** the briefing's lines are `brief-<id>.mp3` in the same system
  as the rest (below). **Recorded** (see below); voiced, the briefing runs
  about 1 min 40 s. `scripts/record-voice.mjs`
  records every missing line with the intro's narrator (ElevenLabs
  "Nathaniel C.", eleven_v4) and tags each file as AI-made. It needs
  `ELEVENLABS_API_KEY` in `.env`, which is not on this computer, and it
  spends credits (58 lines, about 7,900 characters; the briefing alone is
  8 lines, about 1,260). Without `--go` it only lists. **Never run it with
  `--go` unless Cyril says so.**
- **Not done:** footage from the internet (Cyril said it could be used).
  The briefing uses only the game's own pictures. NASA footage could be cut
  in (the intro's tools download it from images.nasa.gov, 3.9 GB), but it
  needs his go-ahead for the download and a credit for each clip.
- Tests: `__game.game.prelude` (`.state`, `.part`, `.jump(id, seconds)`,
  `.skip()`, `.next()`, `.finish()`); `__game.frame()` draws its shots.

## The public link (2026-11-15, afternoon)

**https://cyr1l-design.github.io/junior-astronaut/** (GitHub Pages, switched
on at Cyril's word, "Yes, publish it").

- It serves the **`gh-pages` branch**, which holds ONLY the built game
  (`dist/`): no code, no notes, no reference pictures, and none of this
  branch's history (so the "TEMP reference images" commit is not in it).
- **To publish a new version:** `sh scripts/publish.sh`. It builds the game
  and replaces what is on `gh-pages`; the link stays the same. GitHub takes
  about a minute to show it. **Only when Cyril says to publish.**
- The published game is built from the working copy, so it can be ahead of
  what is committed. The code itself still has to be committed and reach
  `main` (without the TEMP commit) before submission.

## "What's real?" (2026-11-15, afternoon)

Built at Cyril's word ("Build What's real?"), in `src/game/whats-real.js`
(the words and the panel) with styles at the end of `hud.css`. **Not yet
read by Cyril.**

- **Press I while playing** (a small "I · What's real?" reminder sits in the
  bottom right corner), or use the **"What's real?" button on the end
  screen**. The mission clock stands still while it is open, like a card.
  A / D or the arrow keys turn the page; I, F or "Close" shuts it. Not
  available during the dive itself (it is once the win card is up).
- **Six pages:** Europa · The dangers · The base and the dig · The landscape
  · Life and the ocean · Where the facts come from. Every line carries one
  of three tags: **Real**, **Changed for the game**, **Imagined**.
- **It is where every science flag in this file ends up.** When a new one
  is raised (a new imagined landform, a new game-unit number), add a line
  to `REAL_PAGES`. The ocean is worded "almost certain", never "confirmed"
  (NASA has not confirmed it).
- It is not spoken (no recordings needed), and the start screen was not
  touched: the reminder in the corner is how a player learns the key.
- Wording is placeholder copy for Cyril to rewrite.
- Hard-won: a row's tag class must not be the bare word `real` (the panel's
  own class), or the row takes the panel's full-screen style. They are
  `is-real`, `is-game`, `is-made`.
- Tests: `__game.game.real` (`.open()`, `.close()`, `.next()`, `.isOpen`,
  `.page`).

## The project page (2026-11-15, afternoon)

**Cyril:** "Draft the project page", then: "make it beautiful ... it should
be a website ... focus on aesthetic as well". Two things were made, because
the official page on spaceappschallenge.org is a form whose look can't be
changed:

- **`design/PROJECT-PAGE.md`: the words for the official form**, field by
  field (name, summary, links, detailed description, AI use, NASA data,
  references, which pictures to attach, a last checklist). **AI-written
  draft; Cyril rewrites it.** Placeholders in **[brackets]** are his to fill
  in (team name, his name, the demo link).
- **`public/about/index.html`: our own presentation page**, served with the
  game at `.../junior-astronaut/about/` once published. One self-contained
  file (no build step; Vite copies `public/` as it is). Its look follows the
  game's own direction, which Cyril named himself, so the Nila system does
  not govern it: black sky, the game display's colours, the habitat's round
  window, the desk's power lever. **Every picture on it is a real frame of
  the game** (`public/about/img/`, taken with `__game.frame()` and the
  canvas), so no watermark is needed. It loads one outside thing, the
  typeface Space Grotesk from Google Fonts (listed in the references).
- **Keep the two in step with the game:** if a rule, a situation or a
  credit changes, change it in both files.
- In `npm run dev` open it as `/about/index.html` (plain `/about/` shows the
  game there).
- **Published 2026-11-15** on Cyril's word:
  https://cyr1l-design.github.io/junior-astronaut/about/ . Later changes
  to it go live with the next `sh scripts/publish.sh`, on his word.

## The control desk inside the habitat (2026-11-15, afternoon)

**Cyril:** the habitat is "a bit boring"; the power plan needs "another type
of switcher"; the monitoring should be "a little more simple"; the cable
needs "better indicators ... maybe a warning". Of three options he chose
**"Control desk only"** (not the "rest to skip the waiting" key, and not
examining the sample inside). Built in `src/game/hud.js` + `hud.css`;
**not yet tried by Cyril.**

- **Inside, the dark wall round the window is the desk.** Left: the three
  meters, then the **power lever** (one rail from "Cryobot" to "Crew", three
  stops, a knob that slides toward the next stop while Q is held, and what
  the plan does right now: dig speed, crew warming or cooling, "its hole is
  freezing"), then the **boost** button (R). Right: the cryobot's depth,
  **gauges** for cable strain and the hole freezing (green, amber, red), and
  the **forecast** (the 30-hour strip with a legend, and a list of what is
  coming). The window itself is left clear: only "E: step outside" (and the
  storm's water walls) sit at its foot.
- **Outside, the screen is smaller:** three meters, the depth, the day and
  hour, and only the ONE nearest thing to come. The strip and the full list
  are on the desk only. So inside you see ahead but can't touch anything;
  outside you can act but see less.
- **Warnings, anywhere:** a red box under the clock while the cable is
  under strain (above 5%, unless the spool is locked) or the hole is
  freezing shut, with a bar and what to do about it. At 70% it pulses
  faster and the edge of the screen glows red.
- **The keys did not change** (Q still moves the plan one step, R boosts),
  so the training's words and their recordings still match.
- The desk's panels follow the training: the lever arrives with the step
  that teaches the power plan, the boost with the battery step, the gauges
  and forecast with the last step.
- The forecast strip is a `<canvas>`; the page's rule for the game's own
  canvas (`style.css`) would pin it to the top of the screen, so
  `.c-strip` sets its own position.
- Tests: the Browser pane can't hold a key, so the lever's slide was
  checked by handing the screen a made-up half-held Q
  (`__game.game.hud.update(0, { actions: [{ id: 'plan', next, why, progress }] ... })`).
  Real key-holding is untested.

## The guide's voice, and the end screen (2026-11-15)

**Cyril:** "I also want to record a voice from 11 Labs ... to guide you,
because it's kind of overwhelming to constantly read that stuff, especially
knowing that your time is ticking." (The videos he also asked for are
described just above.)

- **How the voice works (`src/game/voice.js`):** every line of text the game
  shows has a name. If `public/voice/<name>.mp3` exists it is played when
  the line comes up; if not, nothing happens. So the game works with none,
  some or all of the recordings. **All 58 lines are recorded** (2026-11-15):
  `public/voice/*.mp3`, 8.8 MB, about 9.5 minutes of speech in all, made in
  Cyril's other chat with the intro's narrator (ElevenLabs "Nathaniel C.",
  eleven_v4) from `design/VOICE-HANDOFF.md`, each file tagged as an AI
  voice, and copied here from `origin/claude/clever-feynman-ahp3yo`
  (commit 9f4765d; that branch is still not merged). **If any wording
  changes, that line's recording no longer matches the text on screen:**
  delete its file and record it again (the other chat's
  `tools/voice-lines/record.py`, or `scripts/record-voice.mjs` here).
  The situation cards are long when spoken (the eclipse card is 43 s); F
  closes a card and stops the voice. Checked in the Browser pane that the
  files load and play and that a briefing shot waits for its line; **not
  yet listened to by Cyril for tone or mistakes in the reading.**
- **What is spoken:** each training step and its closing line (the step
  waits for the voice to finish its closing line, at most 12 s); each
  situation card when it opens (title, story, every choice and its price,
  where to go; F still closes it and stops the voice); the short messages
  while the clock runs (these queue behind whatever is being said, newest
  only); the six endings. Not spoken: the "Real:" lines, the "X km down"
  messages, the ocean ending.
- **One source for the words:** the voice reads the same strings the screen
  shows (`training.js` steps have an `id`; `situations.js` has a `spoken`
  story without the live numbers; `NOTICES` and `ENDING_LINES` in
  `voice.js`). After changing any wording run
  `node scripts/voice-script.mjs`: it rewrites `design/VOICE-SCRIPT.md`,
  the list Cyril records from (50 lines, about 6,600 characters).
- **M** silences the voice too.
- **Rules:** an AI voice is AI-made audio: disclosed in `AI-USE.md`, noted
  in each file's own tags (done), an adult voice (it is). the game's
  on-screen credit line says "Narrator: AI voice (ElevenLabs)" (`#credit`
  in `index.html`). **Still to do: say so on the project page.** Earlier rows
  of `AI-USE.md` that say "no AI-generated audio" were true when written;
  the game's suit sounds and music are still made in code.
- Tests: `__game.game.voice` (`.say(name, true)`, `.speaking`, `.current`,
  `.missing`, `.script()`).
- **End screen fix:** the buttons on the end-of-mission screen could not be
  clicked: the start screen's "click to continue" layer lies above the whole
  HUD, so the click landed on it and captured the mouse again. While the end
  screen is up, `body.mission-over` hides that layer (`hud.js`, `hud.css`).

## The ocean ending (2026-11-14, late night)

**Cyril's idea, in his words:** a submersible goes into the hole the cryobot
made; you submerge and see "maybe a little light"; you go toward it past
"the beautiful stuff that you normally see under the ice"; then the lamps
are switched off and "boom, you see life", like Earth's weird deep-water
animals but glowing; and the music has to mark the discovery.

**What was built** (`src/ocean/ocean.js`, all in code: no models, textures
or sound files). On breakthrough the surface fades out and:
1. *The shaft* (~10 s): looking down the hole, ice walls streaming past, a
   depth counter running to 29 km, "sped up".
2. *Under the ice* (~16 s): out beneath a faceted ice ceiling with hanging
   ice, lamps on, specks drifting in the beams, a faint glow ahead.
3. *The lamps:* the child holds E to switch them off (Cyril's hold-a-button).
4. *Darkness* for a breath, then the light spreads outward from the window:
   jellyfish with pulsing bells, comb jellies with rainbow rows, glowing
   gardens hanging from the ice; with 1 life clue also long siphonophore
   chains and dragonfish; with 2, a giant jellyfish far below. From here
   the child can look around freely with the mouse.
5. After ~22 s the win card comes up over the still-living ocean.
Hold F skips to the lit ocean. A dark rim round the picture stands for the
submersible's window.

**Music** (`audio.js`, `music(cue)`): made in code, like the suit sounds: a
low drone down the shaft; an open, quiet fifth with a sonar ping under the
ice; near-silence when the lamps go off; then a deep soft swell, a wide
D-major chord opening up, and bell notes like lights coming on. Not yet
heard by Cyril (checked only that it runs). **Open, Cyril's call:** he said
"choose some music from what we have, like scientific music". Nothing is in
the project, so this is a stand-in. A real alternative would be NASA's own
recordings (for example Juno's radio-wave recordings near Jupiter's moons
turned into sound), which would also count as NASA data; that needs a
download he approves and a credit.

**Science, for "What's real?":**
- **No life has been found on Europa.** Everything alive in the scene is
  imagined; the on-screen label says so, and names what it is modelled on:
  real deep-sea animals that make their own light.
- Cyril said "fluorescent". The true word for animals that make their own
  light is *bioluminescent* (fluorescence needs light shone on it). The
  label uses "make their own light".
- Most real deep-sea light is blue or green; our pinks, violets and oranges
  are for the look. A comb jelly's rainbow is real, but it is its beating
  paddles scattering light, not light it makes.
- Real: the ocean, about twice the water of all Earth's oceans
  (`references/europa.md` section 2); the idea that life could gather on the
  underside of the ice (section 11). Imagined: a crewed submersible, and
  getting it down a 29 km hole.
- Haze and soft light are true under water, unlike on the surface.

**Tests:** `__game.game.startDive(clues)` plays it now and returns the
ocean; `.jump('cruise' | 'arrive' | 'dark' | 'reveal', seconds)` goes to a
moment; `.uniforms` are its shared shader values. The dive only advances
while the mouse is captured (`__game.controls.isLocked`).

**Not done:** nothing has been tried on a slow laptop (it measured ~5 ms a
frame on an Apple M2); the ice ceiling is plain compared with the life.

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
- [x] Public link to the playable game — no login: https://cyr1l-design.github.io/junior-astronaut/ (republish after changes: `sh scripts/publish.sh`)
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
