# Use of AI ("Super Intelligence") in this project

Space Apps 2026 requires every submission to say where and how AI tools were
used. This log is kept as we go and feeds the project page.

**Tool:** Claude (Anthropic), via Claude Code.

**Not AI:** the project idea, game concept and mechanics are Cyril's own.

| Date | What AI did | Files / parts affected |
|---|---|---|
| 2026-11-13 | Read and summarized the challenge brief and submission rules; checked the development setup | `CLAUDE.md` |
| 2026-11-13 | Downloaded real data from NASA DONKI, RadLab and OSDR; computed daily averages and yearly event counts; wrote plain-language summaries of the sources and the CSA food toolkit | `references/` |
| 2026-11-13 | Summarized the official judging criteria, awards and submission rules into a checklist for weighing design decisions | `JUDGING.md` |
| 2026-11-13 | Wrote this project's setup files (working notes, this log, git ignore rules) | `CLAUDE.md`, `AI-USE.md`, `.gitignore`, `.env.example` |
| 2026-11-14 | Researched NASA sources on Europa (NASA pages, Juno, Webb, Galileo, Europa Clipper instruments and status); downloaded two years of Earth–Europa distance and radio delay from JPL Horizons; wrote a sourced fact sheet | `references/europa.md`, `references/data/horizons-europa-earth-2026-2027.json` |
| 2026-11-14 | Wrote the intro scene's code (layout, timing, animation, "What's real?" panel) and the tools that mix its sound and record it as a video | `index.html`, `src/intro.js`, `src/intro-data.js`, `src/intro.css`, `tools/` |
| 2026-11-14 | **AI voice:** the intro narration is spoken by an AI voice ("Nathaniel", ElevenLabs, model eleven_v4) from a script written by Cyril and Claude. Labelled on screen ("AI narrator voice") and in the credits | `assets/intro/intro-audio.mp3`, demo video |
| 2026-11-14 | Made the intro's sound effects with code (synthesised, no samples) | `tools/make-sfx.py` |
| 2026-11-14 | Chose and prepared the intro's pictures. **All are real NASA images or NASA illustrations, none AI-made**; each is credited on screen and in the "What's real?" panel | `assets/intro/` |
| 2026-11-14 | Remade the intro video (version 3): found and cut NASA footage, wrote the edit, the soundtrack mix and the on-screen words, from a story and direction by Cyril. **AI voice:** 5 new narrator lines ("Nathaniel C.", ElevenLabs, eleven_v4), labelled "AI narrator voice" on screen. **No AI-made pictures:** all footage is NASA's (real or NASA animation) | `assets/intro/europa-intro-v3.mp4`, `assets/intro/v3/`, `tools/intro-v3/`, `story/intro.md` |
