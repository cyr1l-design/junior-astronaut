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
| 2026-11-14 | Wrote a text prompt for an image-generation model to make a **reference image** of the base location (style and composition from Cyril's brief; science limits from `references/`). Any resulting AI image is for reference only unless watermarked | `design/base-reference-prompt.md` |
| 2026-11-14 | AI-generated **reference image** of the base location (made by Cyril from the prompt above). Reference only, not used in the game | `design/reference/base-location-AI-reference.webp` |
| 2026-11-14 | Wrote the project setup (Vite + Three.js) and a blockout of the first scene: terrain and ice shader, sky with NASA's Jupiter map, base objects, ice cave, first-person controls with Europa's gravity, glow and colour effects, start screen | `src/`, `index.html`, `vite.config.js`, `package.json`, `.claude/launch.json` |
| 2026-11-14 | Wrote the first-scene brief (layout, sky, look, science limits, in-game text explaining why the canyon isn't drilled) | `design/FIRST-SCENE-BRIEF.md` |
| 2026-11-14 | Wrote the **final graphics of the first scene** (AI-written code; no AI-made images, models or textures are in the game). Ground: finer mesh near the base, sculpted swells, fault lines as real grooves, a new stylised ice shader (pastel plates, rusty salt, blue layered faces, soft blue shadows, sparkle). Ridge, canyon walls, cave (scalloped blue interior, crystals, real sunlight through the mouth), chaos blocks, loose ice chunks, ice blades. Outpost rebuilt: habitat, solar array, reactor with radiator fins, cryobot and melt shaft (no pool), spool, cables, crates. Sky: Jupiter shading (soft day-night edge, darker rim), Milky Way stars, tiny star-like Sun, wider aurora. Light, colour grade, bloom, edge smoothing, and automatic picture-sharpness control for slow laptops. Positions, sizes and sky physics from the blockout were kept | `src/world/terrain.js`, `src/world/ice.js` (new), `src/world/colliders.js` (new), `src/world/base.js`, `src/world/sky.js`, `src/main.js`, `src/post.js` |
| 2026-11-14 | Second graphics pass on the first scene, directed by Cyril from his two reference pictures and his style screenshots (AI-written code only; no AI-made or copyrighted images are in the game). Re-laid out the base for the first view; replaced the endless ridge with a finite cave ridge and an ice massif behind the base; rewrote the ice shader (cracked plates with relief on the plain, frost-and-bare-ice texture on slopes); rounded boulders; hull plating drawn in code | `src/world/layout.js`, `src/world/terrain.js`, `src/world/ice.js`, `src/world/base.js`, `src/main.js`, `CLAUDE.md` |
