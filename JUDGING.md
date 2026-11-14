# How this project will be judged

The rulebook for every game decision. Sources, all read on 2026-11-13:
the [Judging & Awards Guide](https://www.spaceappschallenge.org/resources/judging-awards-guide/),
the [Project Submission Guide](https://www.spaceappschallenge.org/resources/project-submission-guide/)
and the [challenge brief](https://www.spaceappschallenge.org/2026/challenges/junior-astronaut-mission-trainer/?tab=details).
Written in our own words; short quotes are marked.

## How to use this file

When Cyril weighs a game decision, Claude checks each option against this file
and says, briefly:

1. which of the **five scores** it raises or lowers (section 3),
2. which **awards** it moves us towards or away from (section 5),
3. whether it breaks a **hard rule** (section 2) or a **brief pitfall** (section 4),
4. roughly what it costs in **build hours** out of the 48,

then gives one recommendation. Use the scorecard at the end for bigger choices.
The concept stays Cyril's: Claude judges options, it doesn't invent the idea.

---

## 1. The path to an award

| Step | Who decides | When |
|---|---|---|
| Hackathon | — | Sat 14 Nov 09:00 → Sun 15 Nov 23:59, Rome time |
| **Global Nominees** | Local judges (Rome event) pick the projects that go on | 3 Dec 2026 |
| **Global Finalists** + Honorable Mentions | Expert global judges | 17 Dec 2026 |
| **10 Global Awards** | Executives from NASA and partner space agencies | 26 Jan 2027 |

- **The five scores decide every step.** The named awards are only handed out
  among the Finalists, so there's no shortcut to one award: the project has to
  score well across all five first.
- Honorable Mentions are for projects ranked high "for their ingenuity and
  creativity" that didn't become Finalists.
- The local event may give its own local prizes too; those are separate.
- Every submitted project gets a participation certificate.

## 2. Hard rules (break one and the project can't win)

- Answers this official challenge; team registered at the same local event (Rome).
  Solo is fine at a local event.
- Every required field on the project page is filled in, **in English**.
- **Demo: a video of 30 seconds or less, or at most 7 slides** (title slides
  count). Over the limit = not eligible for global judging.
- Demo and game links are public: no login, password or permission. Test them
  in a private browser window.
- **At least one NASA dataset or resource** is used, or no global award.
- Every outside resource (code libraries, fonts, sounds, textures, data) is
  listed in the References field. **No copyrighted material without permission.**
- AI use disclosed (see `AI-USE.md`). AI-made images or video carry a **visible
  watermark**; AI-made audio, code and data are noted in text and metadata.
  **AI must not come up with the idea.** AI content may not use NASA logos,
  flags or mission insignia.
- **No image, video or voice of anyone under 18**, so no recordings of kids
  playing it.
- "Submit for Judging" clicked before Sun 15 Nov, 23:59 Rome time. We can
  resubmit as often as we like until then; the last version counts.

## 3. The five scores (each 1 to 5, equal weight)

### Impact
**What it means:** how big a problem it tackles and how many people it helps or inspires.
**A 5:** a significant problem, a wide reach, inspiring, quality well above expectations.
**For us:** the problem is real and named in the brief: space education for kids is either too abstract or too technical, and "many students never encounter the actual decision-making logic behind a mission". A game kids actually want to play, and that teaches a true constraint, is the impact.
**Raises it:** works for the full 7–12 range; usable in classrooms and by parents or older siblings too (the brief suggests this); free in a browser; a kid finishes it understanding one real trade-off.
**Lowers it:** only fun, or only educational; too hard for a 7-year-old.

### Creativity
**What it means:** original, new, or a meaningful improvement on what exists.
**A 5:** a groundbreaking approach "never attempted before" that challenges the usual way.
**For us:** most entries will be a 2D Moon or Mars dashboard. A beautiful first-person 3D world at a real outer-solar-system moon is already unusual.
**Raises it:** a setting other than the Moon or Mars; a mechanic that turns real data into something you *feel* (not a number on a panel); a fresh use of real science (ice as a shield, the giant planet as a compass).
**Lowers it:** a standard resource-bar game in a 3D skin.

### Validity
**What it means:** grounded in scientific principles, workable, usable and user-friendly.
**A 5:** scientifically sound, "fully developed", highly usable and accessible.
**For us:** this is where invented content costs points. Every number must trace to a source in `references/`; every imagined thing is labelled.
**Raises it:** the "What's real?" panel; real physics behind each mechanic; a finished, bug-free core loop; plain-language explanations; runs smoothly on an ordinary laptop or tablet.
**Lowers it:** anything that teaches kids a false fact about a real world or substance; a half-working 3D world; confusing controls.

### Relevance
**What it means:** directly answers this challenge, with NASA data as "a core component … rather than a superficial addition".
**A 5:** NASA data is "integral to the project's success" and drives the innovation.
**For us:** the brief asks for an outpost, trade-offs between life support, radiation shielding, power, food and comms delay, ages 7–12, real NASA data. A non-Moon/Mars site is allowed only if "teaching real engineering trade-offs through play" stays central.
**Raises it:** data *changes what happens in the game* (how long you can stay outside, how much power you get); sources credited inside the game; a short note for judges on which datasets were used and why.
**Lowers it:** data shown only as fun facts; drifting so far from "outpost and trade-offs" that it reads as a different challenge.

### Presentation
**What it means:** how clearly the challenge, the solution and why it matters are communicated. Judges use the demo **and** the project page.
**A 5:** well structured, engaging storytelling, polished delivery.
**For us:** the guide stresses giving this "equal attention", and says most of the evaluation is based on the project page itself, with a strong demo raising the Presentation score.
**Raises it:** a scripted 30-second video; a complete, well-written project page with images; a clear story.
**Lowers it:** a rushed video made at 23:00 on Sunday; empty or thin page fields.

## 4. What the challenge brief itself asks for

**The ask:** an interactive game or app where kids 7–12 manage an outpost and
make decisions about **life support, radiation shielding, power budgeting, food
production and communication delay**, then see how those choices play out over
a simulated mission. The goal is a working prototype that leaves a young player
"understanding a real constraint of deep space survival, not just having
played a fun game". Format is open: browser, mobile or desktop.

**Setting:** the brief says Moon or Mars, but creative interpretations of
"outpost", "site" or "mission" beyond them are welcome if the teaching of real
trade-offs stays central.

**Data the brief names:** DONKI (solar activity, radiation risk), OSDR
(astronaut dosimetry and biology), Artemis and Mars surface mission data.
"Even a small amount of real data" makes it more credible. A curated real
dataset built into the game is fine; just don't present static data as live.

**Pitfalls the brief warns about:**
- A "safe" choice with no cost. **Every decision must cost something.**
- Visual polish replacing mechanical accuracy. "A simple game that teaches a
  real constraint beats a beautiful one that doesn't." This is the brief
  speaking directly to our plan: the beauty must sit *on top of* a real
  trade-off, never instead of it.
- Too many systems at once. **Two or three core resources** beat five or six.

**What makes a solution stand out (the brief's own list):**
1. Linking an in-game choice to real-world consequences, e.g. a shielding
   decision tied to actual current space weather.
2. **Replayability:** events that vary, so failing feels like learning.
3. A short explanation of which NASA datasets were used and why, so judges can
   trace and check the science.

**Also suggested:** plain language, with any unavoidable term explained in
context; flexible enough for siblings, parents or classrooms; no download, no
account.

## 5. The 10 Global Awards

| Award | What it rewards (official wording, shortened) | Fit for us | What would win it |
|---|---|---|---|
| **Art & Technology** | Most effectively combines technical and creative skills | ⭐⭐⭐ | A world that's stunning *and* runs smoothly in a browser; visuals generated in code, not stock images |
| **Best Use of Data** | Best makes space data accessible, or uses it in a unique way | ⭐⭐⭐ | Real NASA numbers that a child *feels* through gameplay; sources visible in the game |
| **Most Inspirational** | "Captures our hearts" | ⭐⭐ | A moment that makes a kid want to go to space; a demo with emotion |
| **Best Storytelling** | Most creatively communicates the potential of open data through storytelling | ⭐⭐ | A mission story where real data drives the plot (a real solar storm, a real measurement) |
| **Best Use of Science** | Best and most valid use of the scientific method | ⭐ | Only if players test things: change shielding, measure the dose, compare, conclude |
| **Best Use of Technology** | Most innovative use of technology | ⭐ | 3D in a browser is impressive but not new; would need something more |
| **Best Mission Concept** | Most plausible concept and design | weak | A game isn't a mission plan, unless the outpost design itself is realistic and explained |
| **Galactic Impact** | Most potential to improve life on Earth or the universe | weak | Hard to argue for a kids' game |
| **Global Connection** | Best connects people around the world through technology | weak | Would need multiplayer or sharing |
| **Local Impact** | Greatest potential to make a difference in the local community | weak | Would need e.g. an Italian version tested with local schools |

**Our targets: Art & Technology and Best Use of Data**, with Most Inspirational
and Best Storytelling as the next fits. The first two push the same way: a
beautiful world whose rules come from real data.

## 6. Submission and demo

**Project page fields:** project name; high-level summary (what, how it answers
the challenge, why it matters); demo link; final project link; detailed
description (what it does, how, benefits, goals, tools used); AI use; **NASA
data** (specific datasets and resources); partner agency data and all other
references. Images (JPG, PNG, GIF up to 10 MB) can go on the page; videos and
documents must be links.

**Partner space agencies are "highly encouraged"**: ESA, the Italian Space
Agency, CSA, JAXA, UK Space Agency and others. Worth checking before we cite them:
ESA's JUICE mission is heading to Jupiter's moons (Europa and Ganymede), and
the Italian Space Agency contributed hardware to NASA missions to Jupiter and
Saturn, a natural link for an entry from the Rome event.

**Website access tip:** the guide recommends asking FortiGuard to classify a
new website, so school or office filters don't block it for judges. Not
required; takes a few minutes.

**The official 30-second video plan:**

| Time | What |
|---|---|
| 0:00 | Name and team name |
| 0:02 | Which challenge, and why we picked it |
| 0:05 | Project title and tagline |
| 0:10 | How it works: show the game, the player's experience, and how NASA data makes it possible |
| 0:20–0:30 | The future: what it could do for kids and beyond |

The 7-slide option needs: team name, member names, the challenge, a picture of
the project, the user experience, and how NASA data makes it possible. The
video suits a 3D game better.

**Budget 3–4 hours on Sunday** for the video and the project page.

**Video style (decided 2026-11-13): a trailer that follows the official plan.**
Cinematic shots of the real game, with English captions on screen and Cyril's
voice-over. Rules that apply: only real game footage, no faked scenes; no
voice or face of anyone under 18; an AI-made voice or AI images would need
disclosure or a watermark, so avoid them; music must be licensed and listed
in References; no NASA logo. A hidden "cinematic camera" mode in the game gives
smooth shots. Edit in iMovie; upload to YouTube as unlisted (public link, no
login).

---

## Scorecard for bigger decisions

Copy this for each option and fill it in together:

| | Option A | Option B |
|---|---|---|
| Impact | | |
| Creativity | | |
| Validity | | |
| Relevance | | |
| Presentation | | |
| Award fit (Art & Tech / Data / other) | | |
| Breaks a hard rule or brief pitfall? | | |
| Build hours | | |
| Biggest risk | | |

## Decisions weighed so far (Cyril's leanings, not final)

| Question | Leaning | Why, by the criteria |
|---|---|---|
| Real solar-system world vs exoplanet or invented system | Real world | Relevance and Validity: NASA has far more data on our own moons |
| Imaginary moon at Saturn vs real Titan | Real world | Relevance; real-and-beautiful stands out more for Creativity |
| Europa vs Titan | Europa slightly ahead (open) | Jupiter really visible in the sky; radiation is the brief's own trade-off; NASA's Europa Clipper is current. Titan wins on landscape variety |
| Saturn visible from Titan's surface | OK if labelled | Artistic choice, true size and fixed position, "What's real?" note |
| Methane rain changes the player's mind | Dropped | Validity: false about a real substance; inappropriate for 7–12 |
| Aliens | OK, labelled as imagined | Creativity and Impact up; Validity safe if labelled and placed where the science allows |
| Shield upgrades to reach the aliens (Europa) | Promising | Puts radiation shielding at the centre; each upgrade must cost something; 2–3 levels to fit the 48 hours |
| Setting: Europa (2026-11-14) | **Europa chosen**; first scene introduces it | Creativity up (not Moon/Mars). Relevance risk: the brief says Moon or Mars, so the trade-offs must stay central and every Europa fact must be real (`references/europa.md`). Radiation is the strongest real trade-off; DONKI fits only the journey or Earth's side, since Europa's radiation comes from Jupiter. New data hook: real daily comms delay from JPL Horizons (44 min on 14 Nov 2026), which helps Best Use of Data |
| Game shape (2026-11-14) | **Ready-made base, surface + ocean; surface sandbox; scripted ocean missions; reasoning over recall; no safe choice** (Cyril) | Validity and Best Use of Science up if decisions need two or more facts combined. Relevance: matches the brief's "outpost" plus trade-offs. A base in the ocean is imagined (no plan exists to get people under 15–29 km of ice), so label it. **Scope risk:** sandbox plus ocean missions plus intro is a lot for the time left, so the surface loop should work end to end before any ocean mission is built |
| Third resource: heat vs oxygen (2026-11-14) | Open; Cyril leans towards heat | Heat: Creativity up (few entries will pick it), and kids feel cold. It only stays separate from power if waste heat and insulation are modelled truthfully. Oxygen: safer and in the brief's "life support", but common, and on Europa it's really just power (ice is unlimited). Same hours either way. Claude recommends heat |
| Time in Europa days (2026-11-14) | **Chosen** | Validity up (a real unit). Risk: a 44-minute radio delay disappears inside an 85-hour turn, so the brief's "communication delay" needs another way in |
| Goal: discover life, by submarine (2026-11-14) | **Chosen** | Most Inspirational and Best Storytelling up. Validity: no life is known, so the find must be labelled as imagined. Grounded by NASA's real SWIM under-ice robot concept and Earth's vent life. The surface-to-sub power link ties the two halves together |
| Heat as third resource (2026-11-14) | **Chosen** | Creativity up. Strongest link in the science: real Europa probes *melt* their way down, so heat is the digging tool (~140 kWh per cubic metre), not just comfort |
| No comms delay mechanic (2026-11-14) | **Chosen** (Cyril) | Relevance slightly down, since the brief names comms delay. Allowed, as the brief wants only 2–3 resources. Cheap fix if wanted: mention the real delay in the intro (44 min on 14 Nov 2026, from JPL Horizons), which also helps Best Use of Data |
| Goal: dig through the ice; ending is a submarine cutscene into a living ocean (2026-11-14) | **Chosen**; replaces ocean base and ocean missions | Saves many build hours. Juno's real 29 km measurement becomes the distance to beat (Best Use of Data). Validity: the living ocean must be labelled imagined. Grounding it in Earth's vent life (microbes, mats, vent animals) keeps it from teaching something false. Most Inspirational and Art & Technology up: the cutscene is the demo video's money shot |
| Loop: explore for the dig spot, place the cryobot, power and guard it through events (2026-11-14) | **Chosen** | Relevance up: it mirrors NASA's real cryobot roadmap. Best Use of Science up if picking the spot means reading real clues. **Validity flags:** NASA plans ~10 kW of *nuclear* power for a cryobot, which sunlight can't supply; digging takes about 3 years, so game time must be sped up and say so; storm-style "radiation strikes" aren't established at Europa |
| Purple aurora storm from Io (2026-11-14) | Weighed, open | Art & Technology and Most Inspirational up: a striking, true-to-physics visual. Validity is safe only if (1) purple is labelled false colour (the real glow is ultraviolet), (2) it shows the real rhythm, poles or Io's sulfur on the trailing side, and (3) it doesn't claim Io "storms" spike Europa's dose. About 2–3 hours for the visual |
| Finite power shared by survival and cryobot (2026-11-14) | **Chosen** (Cyril) | Relevance up: "power budgeting" is named in the brief. "No safe choice" built in, since every rescue spends digging power. **Checks:** (1) heat and radiation must stay real states the child trades against power, or the game shrinks to one resource; (2) the spare margin must be tight, or saving power becomes the safe choice; (3) real cryobots carry their own nuclear heater, so power through the cable must be labelled a simplification; (4) if all power is one reactor, night and Jupiter's eclipse stop mattering for power. Low build cost: this is the core |
| Power red line: below a threshold, systems shut down (2026-11-14) | **Chosen** (Cyril) | Validity safe if the **battery** hits the line, not the reactor (reactors don't run out from overuse). Real precedents: Opportunity 2018 (power), Spirit 2010 (power plus cold), which make good "What's real?" stories. Ties power to heat honestly |
| Intro story: real past, then a labelled imagined future (2026-11-14) | **Chosen** (Cyril): real flyby on **3 Dec 2026**, imagined ocean confirmation on **3 Dec 2031**, player lands in **2040**, then a big "ARE WE ALONE?" | Script in `story/intro.md`. The same date twice works as a story hook. Validity safe only if every imagined screen is visibly labelled: NASA has *not* confirmed the ocean (its wording is "almost certainly"), and on 3 Dec 2026 Clipper passes **Earth**, so it can't measure Europa that day. A 2026 confirmation was weighed and dropped for that reason. 2031 fits Clipper's real schedule (arrives April 2030). 2040 allows the ~5.5-year trip (Clipper: 2024 to 2030). Most Inspirational and Best Storytelling up; Best Use of Data up (real flyby date, Juno's 29 km). About 1–2 hours to build |
| Intro look and sound (2026-11-14) | **Chosen** (Cyril): real NASA pictures, AI narrator (ElevenLabs "Nathaniel"), Holst's "Jupiter", 30 s, one build for the game and the demo video | Art & Technology and Best Use of Data up: every picture is a real NASA image, credited on screen; REAL/IMAGINED tags on every shot and a "What's real?" panel keep Validity safe. Presentation up: the intro *is* the ≤30 s demo video (29.8 s). Hard rules: AI voice disclosed on screen and in `AI-USE.md`; no AI-made images; no NASA logos added by us (the lander concept art is NASA's own). About 4 hours |
