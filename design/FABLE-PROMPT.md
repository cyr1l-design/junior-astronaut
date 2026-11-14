# Prompt to start the graphics session (Fable 5.2)

Start a new chat **in this same folder on this Mac** (the style screenshots
in `design/style-refs-local/` are local only), choose **Fable 5.2**, and paste:

```
You're building the final graphics for the first scene of our NASA Space Apps 2026 game, "Junior Astronaut Mission Trainer", set on Jupiter's moon Europa. I'm Cyril; I'm not a programmer, so explain what you do in plain language.

Before changing anything, read in this order:
1. CLAUDE.md: the working agreement and every game decision so far.
2. design/FIRST-SCENE-BRIEF.md: exactly what this scene must contain, the sky physics, the look, what must NOT appear, and the in-game text about the canyon.
3. JUDGING.md: how we're scored (Validity and Art & Technology matter most for this job).
4. references/europa.md: the science behind every number.
5. Look at the images: design/reference/base-location-AI-reference-v2-canyon.webp (WHERE things are: the place) and design/style-refs-local/ (HOW it should look: the graphics style, stylised and colourful like big space-exploration games). The style screenshots are copyrighted, for mood only: never copy them into the game.

The project already runs: `npm install`, then `npm run dev` (or the Browser pane's "europa-game" launcher, port 5180). src/ holds a working blockout: every object is in its real place and size, the sky is physically right (real NASA Jupiter map, correct size and phase), and first-person walking uses Europa's gravity.

Your job: replace the blockout's simple shapes and materials with a beautiful final look, in the stylised style of the references, while keeping:
- positions, names and sizes in src/world/layout.js,
- the sky physics (black airless sky, no haze or fog on the surface, Jupiter 12.2 degrees wide and lit only by the Sun, tiny Sun, false-colour purple aurora with its intensity uniform),
- the science limits in the brief (no open water on the surface, no blue sky or clouds, radiator fins on the reactor, ice blades labelled as unconfirmed),
- smooth performance on an ordinary school laptop in a browser.

Jupiter must be the star of the sky: very visible and very beautiful.

Work in steps and show me each one in the Browser pane: ground and ice first, then the ridge, canyon and cave, then the base objects, then light and colour. Take one screenshot per step, not many. Don't add game systems (meters, events, endings): that's separate work. Don't commit or push unless I say so. Log what you do in AI-USE.md, and add every outside asset (model, texture, font) with its licence to the brief's credits. Never use NASA logos, flags or insignia.
```
