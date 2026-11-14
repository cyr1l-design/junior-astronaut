# Prompt: reference image of the base location

Written 2026-11-14 for an image-generation model. The result is a **reference
only**: if an AI-made image ever goes into the game, video or project page, it
needs a visible watermark (hackathon rule), and it must be logged in `AI-USE.md`.

## Main prompt (wide establishing shot)

```
Wide establishing shot of a small research base on the frozen surface of Jupiter's moon Europa, stylized 3D video game art, vibrant painterly colors, soft smooth sculpted shapes, clean stylized shading, gentle glow and bloom on lights, cinematic composition, highly detailed but stylized, not photorealistic.

Setting: a wide shallow ice valley between two long parallel ice ridges (a double ridge), the ridges a few hundred meters tall with smooth rounded crests. To one side, a field of giant tilted ice slabs and broken blocks jutting out of the ground at angles, like jumbled rafts of ice frozen in place. In the far distance, a forest of tall sharp ice blades. The ground is pale cyan-white and creamy ice, crossed by long cracks and ridges stained rusty red-brown and orange with salts, the red streaks following the cracks and pooling in low spots, so the landscape is warm red against cool ice, not plain white.

Base: a compact lander habitat on legs with warm glowing windows, a modest array of solar panels beside it, and a separate small nuclear reactor unit set apart from the habitat with large flat radiator fins. A tall slim cylindrical drilling probe stands over a glowing melt hole in the ice, with a cable spool beside it. Thick cables snake across the ice from the base to the probe and cross one of the red cracks. In the side of the nearer ridge, the entrance to an ice cave, glowing deep blue from inside.

Sky: completely black, airless, full of sharp stars. No clouds, no haze, no fog, no atmosphere glow. Jupiter hangs huge low above the horizon, about a fifth of the image width, half of its disk lit and half in shadow, with clear cream, orange and brown cloud bands and the Great Red Spot. A small yellow-orange moon (Io) near Jupiter. The Sun is a tiny, intensely bright white point low on the opposite horizon, casting long, razor-sharp black shadows. A faint ribbon of purple aurora glows near the horizon.

Mood: awe, beauty, isolation, cold and alien but inviting to explore.
```

## Avoid (negative prompt, or add as "Do not include")

```
blue sky, clouds, fog, haze, mist, atmosphere, soft diffuse daylight, plants, trees, grass, animals, people, astronauts, liquid water on the surface, rivers, lakes, steam clouds, rings around Jupiter, text, logos, flags, mission patches, insignia, photorealistic
```

## Optional second prompt (player's eye view, first person)

```
First-person view at eye level, standing on the ice near a small research lander on Jupiter's moon Europa, stylized 3D video game art, vibrant painterly colors, soft sculpted shapes, glowing lights. In front: thick cables running across creamy cyan-white ice with rusty red-brown salt-stained cracks, leading to a tall slim cylindrical drilling probe over a glowing melt hole. To the left, a glowing blue ice cave entrance in a smooth ice ridge. Above: a black airless sky with sharp stars, giant half-lit Jupiter with cream, orange and brown bands, a tiny brilliant Sun low on the horizon casting long sharp shadows, a faint purple aurora. No clouds, no haze, no fog.
```

## Why each piece is there (and whether it's real)

| Element | Gameplay | Science |
|---|---|---|
| Double ridge valley | The sideways-tide event grinds along it | ✅ real Europa landform (`references/europa.md` §17) |
| Tilted ice slabs, broken blocks | Beauty; landmarks | ✅ "chaos terrain" (§1) |
| Tall ice blades in the distance | Beauty | ⚠️ predicted, unconfirmed: label in game (§13) |
| Red-brown salt streaks along cracks | Colour; clue of ocean material | ✅ (§1–2) |
| Lander habitat | Home base, heat | Imagined (no crewed mission exists) |
| Small solar array | Daytime power bonus | ✅ kept small: sunlight is 25× weaker (§4, §15) |
| Reactor with radiator fins | Main power | ✅ nuclear is NASA's plan; reactors need radiators (§15) |
| Cryobot over a melt hole, cable spool | The goal | ✅ NASA cryobot concept (§13) |
| Cables crossing a red crack | Tide event can strain them | ✅ NASA lists tether breakage (§13) |
| Ice cave | Radiation shelter | ✅ ice blocks radiation (§3) |
| Black sky, no haze, sharp shadows | Truth | ✅ no atmosphere (§1) |
| Jupiter ~a fifth of the width, half-lit | Eclipse event; wow | ✅ ~12° wide; half-lit when the Sun is low (§12). Exact size depends on the lens |
| Io, small yellow-orange | Plasma/aurora story | ✅ up to ~0.8° wide from Europa, bigger than our Moon from Earth (our arithmetic) |
| Tiny bright Sun | Truth | ✅ about a fifth of the size it looks from Earth (our arithmetic) |
| Faint purple aurora | Plasma-sheet event | ⚠️ real glow is ultraviolet: purple is false colour, labelled (§14) |
