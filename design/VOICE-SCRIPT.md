# The guide's voice: lines to record

Made by `node scripts/voice-script.mjs` from the game's own wording. Don't edit
this file by hand: change the wording in the game (`src/game/training.js`,
`situations.js`, `voice.js`) and run the script again.

**58 lines, 7886 characters in all.**

How to use it:

1. Record each line in the "Say" column and save it as an MP3 under the name
   in the "Save as" column.
2. Put the files in `public/voice/`.
3. That's all: the game plays a line when its text comes up. A line with no
   file is simply not spoken, so a few at a time is fine.

Rules that apply (JUDGING.md): an AI voice is AI-made audio, so it has to be
disclosed in `AI-USE.md` and on the project page and noted in each file's own
tags; and it must be an adult's voice (no voice of anyone under 18).

The situation cards are spoken without their live numbers ("in about 4
hours"), because a recording can't change; the card on screen still shows them.

## The dangers briefing (before the game)

| Save as | Say |
|---|---|
| `brief-radiation.mp3` | Jupiter is beautiful, and dangerous. It wraps Europa in radiation you cannot see or feel. It builds up in your body all the time you are here, and when your dose reaches the limit, the mission is over. |
| `brief-plasma.mp3` | Every few hours Europa crosses a river of plasma around Jupiter. The sky glows, and the radiation climbs faster. Now and then, a far stronger storm comes. |
| `brief-shelter.mp3` | Walls slow the radiation down. The thick ice of the cave stops nearly all of it. But the cave is bitterly cold. |
| `brief-dark.mp3` | Europa is far colder than anywhere on Earth. Once every Europa day, Jupiter hides the Sun for three hours, and the night lasts about two Earth days. In the dark you get cold, and the battery drains. |
| `brief-power.mp3` | The reactor cannot run everything at once. Power for the dig, or power for warmth: you choose, and you will have to keep choosing. |
| `brief-cryobot.mp3` | The cryobot melts its way down through 29 kilometres of ice. If it gets no heat, the water behind it freezes and locks it in. On the way it may meet pockets of salty water, and hard layers of salt. |
| `brief-tide.mp3` | Once every Europa day, the tide grinds this crack sideways and pulls the cryobot’s cable tight. If it pulls too far, the cable snaps. |
| `brief-go.mp3` | Every choice here costs something. There is no safe choice. Reach the ocean before your radiation dose reaches the limit. Good luck. |

## The training

| Save as | Say |
|---|---|
| `train-look.mp3` | Welcome to Europa, an ice moon of Jupiter. Move the mouse to look around. Can you find Jupiter? |
| `train-look-done.mp3` | That is Jupiter. It never moves in this sky: one side of Europa always faces it. |
| `train-walk.mp3` | Walk with the W, A, S and D keys. Hold Shift to run. Try a few steps, any way you like. |
| `train-walk-done.mp3` | You weigh very little here: gravity is only 13% of Earth’s. |
| `train-jump.mp3` | Press Space to jump. Jump! |
| `train-jump-done.mp3` | There is no air to push against, so you can’t steer once you are off the ground. |
| `train-cryobot.mp3` | Under your feet is 29 km of ice, and under that an ocean. Your mission: melt a hole down to it and look for life. The cryobot does the melting. Walk to the cryobot, the tall tripod. Then HOLD the E key to switch it on. |
| `train-cryobot-done.mp3` | It is on its way down. The panel on the right shows how deep it has got. |
| `train-habitat.mp3` | Out here Jupiter’s radiation builds up in your body. When this purple meter is full, the mission is over. So the dig has to win the race. Walls slow the radiation down. Walk to the habitat and HOLD E to go inside. |
| `train-habitat-done.mp3` | Inside, the radiation rises much more slowly. |
| `train-plan.mp3` | Outside you get cold, and in here you warm up, but the reactor can’t run everything at full. “Dig first”: fast dig, cold crew. “Share”: some of each. “Warm first”: warm crew, but the cryobot’s hole starts to freeze. HOLD Q to change the power plan. Try it. |
| `train-plan-done.mp3` | You can change the plan as often as you like, but only from in here. |
| `train-battery.mp3` | The battery is your spare power. Sunlight fills it and the dark drains it. Holding R spends some of it on 3 hours of full digging AND warmth. It also gets you out of trouble, so don’t waste it. |
| `train-start.mp3` | Things will happen out there. Each one stops the clock and gives you choices, and every choice costs something. There is no safe choice. The light and the arrow will show you where to go. |

## The seven situations (spoken when the card opens)

| Save as | Say |
|---|---|
| `card-brine.mp3` | A pocket of salty water. The cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing. Your choices. Take a sample: It could hold signs of life. The dig stops for 3 hours and the hole freezes partly shut. Steer round it: Costs 20% of the battery. No sample. Decide at the cryobot. |
| `card-eclipse.mp3` | Jupiter is about to hide the Sun. Soon Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer. Your choices. Dig first: Fastest dig. The crew gets cold, quickly in the dark. Share: Half-speed dig. Warm by day, slowly cooling in the dark. Warm first: The crew warms up. The cryobot gets no heat: no digging, and its hole starts to freeze. Boost: 15% of the battery buys 3 hours of full digging AND warmth. The power plan is set inside the habitat. |
| `card-crack.mp3` | Ocean chemicals at the crack. The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about 10 hours. Your choices. Walk out and collect it: A life clue. It is a long walk in the open: radiation and cold all the way. Leave it: No walk, and no clue. Follow the green beacon. |
| `card-sensor.mp3` | The cryobot’s camera is clouded. Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed. Your choices. Bake it clear: The habitat’s heaters go to the camera for 4 hours. The crew gets cold meanwhile. Leave it: The dig stays at about half speed until you do. Decide at the cryobot. |
| `card-storm.mp3` | A Purple Aurora Storm is coming. A far stronger plasma crossing is on its way, and it will last about 3 hours. The habitat’s thin walls will not stop much of it. Your choices. Stay in the habitat: A big dose of radiation. Fill the habitat’s walls with water: Costs 25% of the battery to melt the ice. Water blocks most of the storm. Shelter in the ice cave: Thick ice blocks nearly all of it, but the cave is bitterly cold and a long walk. Choose where to be when it hits. |
| `card-tide.mp3` | The sideways tide. Soon the tide will start to grind the fault sideways, for 6 hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps. Your choices. Pay out slack: Only helps while the cable is tight, so you must come back about three times: outside, at night. Lock the spool: The cable stretches but cannot snap. Stretched, it carries less power: the dig is a third slower for the rest of the mission. Decide at the cable spool. |
| `card-salt.mp3` | A layer of salt. The cryobot has hit a hard layer of salt. It has slowed to a crawl. Your choices. Use the cutting jets: Costs 25% of the battery. Through at full speed. Crawl through: Costs nothing but hours, while your radiation dose climbs. Decide at the cryobot. |

## Short messages during the mission

| Save as | Say |
|---|---|
| `clock-start.mp3` | The mission clock is running. Good luck! |
| `clock-start-skipped.mp3` | Training skipped. The mission clock is running. |
| `plasma-open.mp3` | Plasma crossing! You have no shelter out here. |
| `plasma.mp3` | Plasma crossing: the sky glows and radiation rises for about an hour. |
| `storm-open.mp3` | The Purple Aurora Storm is here, and you are in the open! |
| `storm.mp3` | The Purple Aurora Storm is here. |
| `eclipse-start.mp3` | Jupiter is hiding the Sun: 3 hours of darkness. Everything is colder and the battery drains. |
| `eclipse-end.mp3` | The Sun is back. |
| `night.mp3` | The Sun has gone behind the mountain. The long night begins: colder, and no sunlight for the battery. |
| `sunrise.mp3` | Sunrise. Warmer, and the battery is filling again. |
| `battery-low.mp3` | Battery below the red line! Switch to “Warm first” to let the reactor refill it, or the base shuts down. |
| `cold.mp3` | You are getting dangerously cold. Get inside, and give the habitat more heat. |
| `dose-50.mp3` | Radiation dose: 50% of your limit. |
| `dose-75.mp3` | Radiation dose: 75% of your limit. |
| `dose-90.mp3` | Radiation dose: 90% of your limit. |
| `freeze-50.mp3` | The cryobot’s hole is 50% frozen shut! It needs heat. |
| `freeze-75.mp3` | The cryobot’s hole is 75% frozen shut! It needs heat. |
| `cable-tight.mp3` | The cable is close to snapping! Pay out slack at the cable spool. |
| `sample-done.mp3` | The sample of salty water is on board: a life clue. The cryobot is digging again. |
| `camera-clear.mp3` | The camera is clear again. The cryobot is back to full speed. |
| `crack-gone.mp3` | Radiation has destroyed the chemicals at the crack. That clue is gone. |
| `salt-through.mp3` | The cryobot is through the salt layer. |
| `boost-over.mp3` | The boost has run out. Back to your power plan. |

## The end of a mission

| Save as | Say |
|---|---|
| `end-power.mp3` | Mission called home: out of power. The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home. |
| `end-heat.mp3` | Mission called home: too cold. The crew got too cold to carry on safely. Mission Control is bringing them home. |
| `end-radiation.mp3` | Mission called home: radiation limit reached. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home. |
| `end-cryobot.mp3` | Mission called home: the cryobot is frozen in. It went too long without heat, and the meltwater froze solid around it. |
| `end-cable.mp3` | Mission called home: the cable snapped. The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped. |
| `end-win.mp3` | Breakthrough! The cryobot melted through all 29 kilometres of ice, and you were the first to see what lives in Europa’s ocean. |
