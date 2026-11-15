# Project page: text to paste into spaceappschallenge.org

**Draft written by AI (Claude) on 2026-11-15 from Cyril's decisions in
`CLAUDE.md`. Cyril: rewrite it in your own words before submitting.** Every
field must be in English. The official page is a form: its look can't be
changed, so the beautiful version is our own page (see "Links" below), and
this file is the words for the form.

Things only you can fill in are marked **[like this]**.

---

## Project name

Europa

## Team

Are We Alone? · Cyril Hutornoy · solo

## Links

| Field | Link |
|---|---|
| Final project (the game) | https://cyr1l-design.github.io/junior-astronaut/ |
| About page (our own, with pictures) | https://cyr1l-design.github.io/junior-astronaut/about/ |
| Demo (video of 30 seconds or less) | https://youtu.be/MtBO7EkE64Y |
| Code | https://github.com/cyr1l-design/junior-astronaut |

Test each link in a private browser window before submitting.

## High-level summary

Most of history was moved by a few people. Not because they were born different, but because they believed it was possible. I want kids to know it can be them.

In school, kids learn about the planets and a little about the Moon and Mars. Hardly anyone gets to Europa, Jupiter's ice moon, where an ocean almost certainly lies under 29 km of ice. It's one of our best chances of finding life beyond Earth, right here in our own Solar System. Every kid who has looked at the stars has wondered if we're alone. I hope this game makes them curious enough to look up Europa, and then Enceladus, Titan and everything else out there.

Europa is a first-person browser game for ages 7 to 12. You run a small base on the ice while a probe melts its way down, and you have to balance power, heat and radiation. These are the real trade-offs the challenge asks for, built on NASA data. Every choice costs something, and there is no safe one.

And at the bottom of the ice waits the question every kid wants answered. Are we alone?

## Detailed description

### What it does and how it works

Europa is a first-person game you play in your web browser. There's nothing to download and no account. You're an astronaut living in a small base on Jupiter's moon Europa. Under your feet is 29 km of ice, and a cryobot (a probe that melts its way down) is slowly digging toward the ocean underneath. Your job is to keep it going until it breaks through.

You have three things to look after: the battery, the crew's heat and your radiation dose. The dose only ever goes up. It rises fastest when you're outside and slowest in the ice cave, so it works as the mission clock.

Inside the habitat there's a power lever. Push it one way and the cryobot digs faster, but the crew gets cold. Push it the other way and the crew warms up, but the cryobot's hole starts to freeze shut. There's a setting in the middle too.

On the way down, seven things happen, and each one is based on a real hazard. A pocket of salty water, Jupiter's eclipse, chemicals at a crack in the ice, a fogged-up camera, a radiation storm, a tide that pulls on the cable, a layer of salt. The game pauses and explains what's going on, then you choose by walking to the right place and holding a key. Every option costs you something.

Day and night follow Europa's real 85-hour orbit, and so does the eclipse. In the code, every number is marked as either real (with its NASA source) or changed for the game.

If you lose, nobody dies. Mission Control calls the crew home. There are five different endings, and each one comes with a real story, like NASA's Opportunity and Spirit rovers or the 600 mSv radiation limit for astronauts. You see which choices led there and how deep you got, and you can try again from the start of the last Europa day.

If you win, a small submarine goes down into the ocean. You switch off its lamps and the water lights up with life. That life is imagined, and the game says so.

### Benefits

Kids learn by doing things, not by memorising facts. There isn't one right answer you can remember, because what you should do depends on how the base is doing at that moment. So every mission plays out a bit differently.

It's made for 7 to 12 year olds. A narrator reads everything out loud, so kids who read slowly can still keep up. A short training teaches the controls one at a time. And when you fail, the game explains why instead of just saying game over.

It also tells you what's real. Press I at any time and a "What's real?" panel shows which parts are real science, which were changed to make the game playable, and which are imagined.

It's free, it runs in the browser, and the code is public.

### Intended impact, and why it matters

I made this because I think most people give up on big things before they even start. They think great discoveries are for geniuses, for someone else. I don't believe that. If you look at history, it was moved by people who simply believed it was possible. I want a kid to finish this game thinking they could be on the crew that goes to Europa one day.

Kids already hear a lot about the Moon and Mars. Europa is different. It's one of the best places we know of to look for life beyond Earth, and I think going there will be one of the most important journeys people ever make. The kids playing this now are the ones who could make it.

I also want it to make kids curious about space in general. In school you learn the planets and a few things about the Moon and Mars, because that's where we've been and where we have the most data. Hardly anyone gets as far as the moons. But every kid has looked up at the stars and wondered if we're alone. If they see that we might find life right here in our own Solar System, I think some of them will go and look up more about Europa. And then maybe Saturn's moons Enceladus and Titan, which may hide oceans too, and all the other places out there we still know so little about.

And I wanted the game to show what a trip like that really takes. If you keep the crew warm and the cryobot's hole freezes shut, you've learned something true about space. You can't have everything, and waiting around costs you too.

### How it is creative

The challenge asks for a base on the Moon or Mars. I went further out, to an ocean world, because the point there isn't only to survive. It's to find something.

There's no timer. Time is measured by the radiation your body takes in, which is how NASA actually limits how long astronauts can spend in space. So hiding in the base still costs you.

You don't pick choices from a menu. You walk over to the cryobot, the cable spool or the ice cave and do it there. You can watch Jupiter slide over the Sun and know the cold is coming.

The ending isn't a score. You switch the submarine's lamps off yourself, and the dark water lights up.

Almost everything you see and hear is generated by the code, from the ice and the sky to the glowing creatures, the sound effects and the music. There are no 3D models. The only images are free CC0 textures and NASA's map of Jupiter.

### Tools, languages, hardware and software

I built it in JavaScript, with Three.js for the 3D, Vite to build it and GitHub Pages to host it, on a MacBook with an M2 chip. It plays on any computer with a modern browser, a keyboard and a mouse. The narrator is an AI voice from ElevenLabs. I used Claude (Anthropic) as an AI assistant for the code, research and writing, and every use is listed in AI-USE.md in the repository. The science comes from the NASA sources listed below.

### Factors I considered

Getting the science right came first. Every real number in the game comes from a NASA source, and anything simplified or made up is labelled. The dig is much faster than a real one would be (that would take years), and the game tells you so. NASA hasn't confirmed the ocean yet, so the game says it's "almost certainly" there.

I kept it simple on purpose. There are three things to manage, not six, and only one decision at a time. The clock stops while a situation is explained.

There's no safe choice. Staying in the habitat still adds radiation. The ice cave protects you best, but it's freezing. And the battery can't pay for everything.

It had to be right for kids, so nobody dies, and trying again takes one click.

I wanted it to feel like Europa. There's no air there, so the sky is black, the shadows are hard and there's no wind. The only sounds you hear are the ones that travel through your suit.

It doesn't work on tablets yet. You need a keyboard and mouse, and touch controls are next.

### More

About page, with pictures of the game: https://cyr1l-design.github.io/junior-astronaut/about/
Code: https://github.com/cyr1l-design/junior-astronaut

## Use of AI

- **The idea is the author's own.** The setting, the three resources, the
  radiation dose as the clock, the events, "no safe choice" and the ending
  are Cyril's. Three of the seven situations, and details such as the water
  walls and the boost, were suggested by AI from real hazards in the NASA
  sources and accepted by him.
- **Code:** written by Claude (Anthropic, via Claude Code) under his
  direction. Noted in the repository (`AI-USE.md`) and in code comments.
- **Research:** Claude gathered and summarised the NASA sources in
  `references/`.
- **Text:** the on-screen wording, the narration script and the draft of
  this page were written by AI.
- **Audio:** the narrator in the intro video, the demo and the game is an AI voice
  (ElevenLabs, voice "Nathaniel C."). Each audio file's own tags say so, and
  the game's credit line says "Narrator: AI voice (ElevenLabs)".
- **Images and video:** no AI-made images, 3D models or textures are in the
  game. The intro video and the 30-second demo are edited from NASA footage
  and real frames of the game; neither contains AI-made pictures.
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
| The footage in the intro video and the demo | NASA Image and Video Library (images.nasa.gov): "4K Earth Views: Extended Cut for Earth Day 2021" (NASA JSC); "Europa Clipper: Exploring Jupiter's Ocean Moon" and "NASA's Europa Clipper Mission Animations" (NASA/JPL-Caltech, 2024); "NASA's SpaceX Europa Clipper Isolated Launch Views" (NASA KSC, 2024) |

All of it is saved data, not live, and the game never presents it as live.

## Other references and resources

- Three.js (MIT licence): https://threejs.org
- Vite (MIT licence): https://vite.dev
- Surface and metal textures, all CC0: ambientCG (https://ambientcg.com),
  Poly Haven "Cliff Side" (https://polyhaven.com), TextureCan
  (https://www.texturecan.com)
- Music in the intro video and the demo: "Vestige" by Lennon Hutton, Epidemic Sound,
  under the author's licence
- Narrator: ElevenLabs text to speech (AI voice)
- Typeface on the about page: Space Grotesk (SIL Open Font License), from
  Google Fonts
- The complete list of scientific sources, with what each was used for, is
  `references/europa.md` in the repository

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
