# Project page: text to paste into spaceappschallenge.org

**Draft written by AI (Claude) on 2026-11-15 from Cyril's decisions in
`CLAUDE.md`. Cyril: rewrite it in your own words before submitting.** Every
field must be in English. The official page is a form: its look can't be
changed, so the beautiful version is our own page (see "Links" below), and
this file is the words for the form.

Things only you can fill in are marked **[like this]**.

---

## Project name

Europa Mission Trainer

## Team

**[team name]** · **[your name]** · solo · local event: **[Rome]**

## Links

| Field | Link |
|---|---|
| Final project (the game) | https://cyr1l-design.github.io/junior-astronaut/ |
| About page (our own, with pictures) | https://cyr1l-design.github.io/junior-astronaut/about/ |
| Demo (video of 30 seconds or less) | **[YouTube link, unlisted: not made yet]** |
| Code | https://github.com/cyr1l-design/junior-astronaut |

Test each link in a private browser window before submitting.

## High-level summary

Europa Mission Trainer is a first-person browser game for children aged 7 to
12. You are an astronaut running a small base on Jupiter's moon Europa. Under
your boots is 29 km of ice, measured by NASA's Juno spacecraft, and under that,
scientists are almost certain, an ocean. Your cryobot can melt a hole down to it, if you keep it going.

You watch three things: the battery, the crew's heat and your radiation dose.
One lever shares the reactor's power between the dig and the heaters, and
seven situations arrive on the way down: a pocket of salty water, Jupiter
eclipsing the Sun, a radiation storm, a tide that strains the cable. Each
stops the clock and offers two or three ways out, and every one has a price.
There is no safe choice.

It answers the challenge by teaching real trade-offs through play: shielding
against power, science against safety, speed against warmth. The setting is
Europa instead of the Moon or Mars, and the constraints are real ones, taken
from NASA data. It matters because a child who has frozen a cryobot's hole
shut by keeping warm has understood something true about living in deep
space: you can't have everything, and waiting is never free.

## Detailed description

### What it does

The player walks around a base on Europa in first person: a habitat, solar
panels, a reactor, a cryobot and an ice cave. A short video and a narrated
briefing introduce the mission, and a guided training teaches the controls
one step at a time. Then the mission clock starts.

- **Three resources.** The battery fills in sunlight and drains in the dark.
  Heat falls outside and rises inside, if the heaters get power. The
  radiation dose only rises: fastest outside, slower in the habitat, slowest
  under the ice of the cave. It is the mission clock.
- **One standing choice.** A lever in the habitat sends the reactor's power
  to the dig ("Dig first"), to the heaters ("Warm first") or to both
  ("Share"). Starve the cryobot of heat and its hole starts to freeze shut.
- **Seven situations**, each a real hazard: a pocket of salty water, Jupiter's
  eclipse, ocean chemicals at a crack, a clouded camera, a radiation storm,
  the sideways tide, a layer of salt. The player answers by walking to a
  place and holding a key.
- **Science costs safety.** Two of the situations offer a clue about life.
  Collecting both makes the ending richer and the mission harder.
- **Failing is learning.** Nobody dies: Mission Control calls the crew home.
  Each of the five ways to fail has its own ending with a real story behind
  it (NASA's Opportunity rover for power, Spirit for cold), a debrief of the
  choices that led there, and how deep the cryobot got. Then you try again
  from the start of the last Europa day.
- **"What's real?"** Press I at any time, or use the button on the end
  screen: six short pages say what in the game is real, what was changed to
  make it playable, and what is imagined, each line tagged.
- **The ending.** Break through, and a submersible rides down into the ocean.
  The player switches off the lamps and the water lights up with life. The
  life is imagined, and the game says so.

### How it works

It runs in a web browser with no download and no account. The 3D world is
built with Three.js. The mission's rules are a small simulation separate from
the graphics, with every number in one file, each marked "Real" (with its
source) or "Game" (chosen for play). The Sun's path, the 85-hour day, the
night and the eclipse are worked out from Europa's real orbit, not scripted.
A narrator reads every instruction and warning, so a child who reads slowly
can still play while the clock runs.

### Benefits

- A child meets real constraints by acting on them, not by reading facts.
- The right answer depends on the base's state at that moment, so it rewards
  reasoning over memory, and it plays differently each time.
- Spoken guidance and one instruction at a time suit ages 7 to 12.
- It is honest: everything imagined or simplified is labelled.

### Goals

To leave a young player understanding three true things about deep space:
power is finite and must be shared; radiation is a budget you spend by being
there; and every decision costs something.

### Tools

JavaScript, Three.js, Vite, GitHub Pages. The terrain, ice, sky, creatures,
sound effects and music are generated in code.

## Use of AI

- **The idea is the author's own.** The setting, the three resources, the
  radiation dose as the clock, the events, "no safe choice" and the ending
  are Cyril's. Three of the seven situations, and details such as the water
  walls and the boost, were suggested by AI from real hazards in the NASA
  sources and accepted by him. **[Cyril: check this sentence is how you want
  it said.]**
- **Code:** written by Claude (Anthropic, via Claude Code) under his
  direction. Noted in the repository (`AI-USE.md`) and in code comments.
- **Research:** Claude gathered and summarised the NASA sources in
  `references/`.
- **Text:** the on-screen wording, the narration script and the draft of
  this page were written by AI.
- **Audio:** the narrator in the intro video and in the game is an AI voice
  (ElevenLabs, voice "Nathaniel C."). Each audio file's own tags say so, and
  the game's credit line says "Narrator: AI voice (ElevenLabs)".
- **Images and video:** no AI-made images, 3D models or textures are in the
  game. The intro video is edited from NASA footage; **[check: it contains no
  AI-made pictures, so it needs no watermark]**.
- No NASA logos, flags or mission insignia appear in anything AI-made.
- The full log is `AI-USE.md` in the repository.

## NASA data

The data sets the goal, the clock, the power and the dangers of the game.

| In the game | NASA source |
|---|---|
| 29 km of ice: the goal, and the scale failures are measured against | NASA JPL, "NASA's Juno Measures Thickness of Europa's Ice Shell": https://www.jpl.nasa.gov/news/nasas-juno-measures-thickness-of-europas-ice-shell |
| The radiation budget, modelled on the 600 mSv career limit; which places shield best | NASA OCHMO radiation protection technical brief: https://www.nasa.gov/wp-content/uploads/2023/03/radiation-protection-technical-brief-ochmo.pdf · NASA JPL radiation maps of Europa: https://www.jpl.nasa.gov/news/radiation-maps-of-jupiters-moon-europa-key-to-future-missions/ |
| The 85-hour day, gravity (13% of Earth's), Jupiter's size in the sky, the eclipse | NASA NSSDC Jovian Satellite Fact Sheet: https://nssdc.gsfc.nasa.gov/planetary/factsheet/joviansatfact.html · NASA Europa facts: https://science.nasa.gov/jupiter/jupiter-moons/europa/europa-facts |
| Sunlight 25 times weaker than at Earth: why solar power is a small bonus | NASA JPL, Juno's solar power record: https://www.jpl.nasa.gov/news/nasas-juno-spacecraft-breaks-solar-power-distance-record |
| The hole refreezing, the salt layer, the strained cable | NASA, "Digging Deeper to Find Life on Ocean Worlds": https://science.nasa.gov/science-research/science-enabling-technology/digging-deeper-to-find-life-on-ocean-worlds/ |
| The clouded camera rescued by heating | NASA JPL, Juno's camera: https://www.jpl.nasa.gov/news/nasa-shares-how-to-save-camera-370-million-miles-away-near-jupiter/ |
| Clues about life (ammonia near cracks) | NASA, Galileo points to ammonia at Europa: https://science.nasa.gov/blogs/science-news/2026/01/29/nasas-galileo-mission-points-to-ammonia-at-europa-recent-study-shows |
| Jupiter's picture in the sky | NASA/JPL/Space Science Institute, Cassini, PIA07782: https://photojournal.jpl.nasa.gov/catalog/PIA07782 |
| The endings' real stories | NASA Opportunity: https://science.nasa.gov/mission/mer-opportunity/ · NASA Spirit: https://science.nasa.gov/mission/mer-spirit/ |
| The intro video's footage | NASA Image and Video Library (images.nasa.gov): "4K Earth Views: Extended Cut for Earth Day 2021" (NASA JSC); "Europa Clipper: Exploring Jupiter's Ocean Moon" and "NASA's Europa Clipper Mission Animations" (NASA/JPL-Caltech, 2024); "NASA's SpaceX Europa Clipper Isolated Launch Views" (NASA KSC, 2024) |

All of it is saved data, not live, and the game never presents it as live.

## Other references and resources

- Three.js (MIT licence): https://threejs.org
- Vite (MIT licence): https://vite.dev
- Surface and metal textures, all CC0: ambientCG (https://ambientcg.com),
  Poly Haven "Cliff Side" (https://polyhaven.com), TextureCan
  (https://www.texturecan.com)
- Music in the intro video: "Vestige" by Lennon Hutton, Epidemic Sound,
  under the author's licence
- Narrator: ElevenLabs text to speech (AI voice)
- Typeface on the about page: Space Grotesk (SIL Open Font License), from
  Google Fonts
- The complete list of scientific sources, with what each was used for, is
  `references/europa.md` in the repository
- **[Before submitting: copy over the full source list for the intro video
  from the other chat's branch (`story/intro.md`).]**

## Pictures to put on the page

All are real frames of the game, in `public/about/img/` (JPG, each under
1 MB; the page allows up to 10 MB):

1. `first-view.jpg`: the base with Jupiter (use as the main picture)
2. `aurora.jpg`: a plasma crossing (say "false colour" in the caption)
3. `cryobot.jpg`: the cryobot
4. `eclipse.jpg`: Jupiter's eclipse
5. `ocean.jpg`: the ending (say "imagined life" in the caption)

A screenshot of the control desk inside the habitat would show the
trade-offs best; take one while playing.

## Before you click "Submit for Judging"

- [ ] Team name, your name and the event filled in above
- [ ] The 30-second demo is made and its link is public
- [ ] Every link opens in a private window
- [ ] The copyrighted style screenshots are gone from GitHub
- [ ] The words above are yours
