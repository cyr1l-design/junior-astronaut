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
  1. **Explore** to find the spot where the ice can be dug through fastest.
  2. **Place the cryobot** there.
  3. **Keep it powered and watch over it** while exploring Europa and
     **handling events** that force hard choices.
  4. Survive until the cryobot breaks through, then the submarine ending.
- **Power is finite (Cyril, 2026-11-14).** One supply, enough to dig all
  the way through. It's shared between staying alive and keeping the cryobot
  going. Events force the child to risk it, or to sacrifice digging power to
  survive.
- **A power red line (Cyril, 2026-11-14):** if stored power drops below a
  threshold, systems shut down. The child manages around it. (Science: the
  reactor's flow doesn't run out; the **battery** does, when spending beats
  income. See `references/europa.md` section 15.)
- Still open: which events to use (real options are in
  `references/europa.md` section 13), where the cryobot's power comes from,
  and what losing looks like.

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

- **Visual direction.** This is a hackathon entry, not a Nila product. Ask
  Cyril whether the Nila design system applies before styling anything.
- Tech stack — decide once the idea is in (default lean: plain web game, Vite).
