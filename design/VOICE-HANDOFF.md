Please record these 58 narrator lines for the game, in the SAME voice as the intro video
(ElevenLabs voice "Nathaniel C.", id 7S3KNdLDL7aRgBVRQb1z, model eleven_v4: the settings in tools/intro-v3/voice.py).

- One MP3 per line (mp3_44100_128 is fine), named exactly as given: <name>.mp3
- Save them in public/voice/ (create the folder). The game looks for public/voice/<name>.mp3.
- Tag each file's comment: AI voice (ElevenLabs, "Nathaniel C."). Junior Astronaut: Europa.
- Speak each line as written, calm and clear, for children aged 7 to 12. No music, no effects.
- About 7886 characters in all. If credits are short, do them in this order:
  brief-* first (the briefing before the game), then train-*, card-*, the short messages, end-*.
- Commit the files and push; tell me the branch name so they can be copied into the game.
- Add a line to AI-USE.md: these are AI-made audio.

The lines (name: text):

brief-radiation: Jupiter is beautiful, and dangerous. It wraps Europa in radiation you cannot see or feel. It builds up in your body all the time you are here, and when your dose reaches the limit, the mission is over.

brief-plasma: Every few hours Europa crosses a river of plasma around Jupiter. The sky glows, and the radiation climbs faster. Now and then, a far stronger storm comes.

brief-shelter: Walls slow the radiation down. The thick ice of the cave stops nearly all of it. But the cave is bitterly cold.

brief-dark: Europa is far colder than anywhere on Earth. Once every Europa day, Jupiter hides the Sun for three hours, and the night lasts about two Earth days. In the dark you get cold, and the battery drains.

brief-power: The reactor cannot run everything at once. Power for the dig, or power for warmth: you choose, and you will have to keep choosing.

brief-cryobot: The cryobot melts its way down through 29 kilometres of ice. If it gets no heat, the water behind it freezes and locks it in. On the way it may meet pockets of salty water, and hard layers of salt.

brief-tide: Once every Europa day, the tide grinds this crack sideways and pulls the cryobot’s cable tight. If it pulls too far, the cable snaps.

brief-go: Every choice here costs something. There is no safe choice. Reach the ocean before your radiation dose reaches the limit. Good luck.

train-look: Welcome to Europa, an ice moon of Jupiter. Move the mouse to look around. Can you find Jupiter?

train-look-done: That is Jupiter. It never moves in this sky: one side of Europa always faces it.

train-walk: Walk with the W, A, S and D keys. Hold Shift to run. Try a few steps, any way you like.

train-walk-done: You weigh very little here: gravity is only 13% of Earth’s.

train-jump: Press Space to jump. Jump!

train-jump-done: There is no air to push against, so you can’t steer once you are off the ground.

train-cryobot: Under your feet is 29 km of ice, and under that an ocean. Your mission: melt a hole down to it and look for life. The cryobot does the melting. Walk to the cryobot, the tall tripod. Then hold the E key to switch it on.

train-cryobot-done: It is on its way down. The panel on the right shows how deep it has got.

train-habitat: Out here Jupiter’s radiation builds up in your body. When this purple meter is full, the mission is over. So the dig has to win the race. Walls slow the radiation down. Walk to the habitat and hold E to go inside.

train-habitat-done: Inside, the radiation rises much more slowly.

train-plan: Outside you get cold, and in here you warm up, but the reactor can’t run everything at full. “Dig first”: fast dig, cold crew. “Share”: some of each. “Warm first”: warm crew, but the cryobot’s hole starts to freeze. hold Q to change the power plan. Try it.

train-plan-done: You can change the plan as often as you like, but only from in here.

train-battery: The battery is your spare power. Sunlight fills it and the dark drains it. Holding R spends some of it on 3 hours of full digging and warmth. It also gets you out of trouble, so don’t waste it.

train-start: Things will happen out there. Each one stops the clock and gives you choices, and every choice costs something. There is no safe choice. The light and the arrow will show you where to go.

card-brine: A pocket of salty water. The cryobot has melted into a pocket of salty water and stopped. Until you decide, the water behind it goes on freezing. Your choices. Take a sample: It could hold signs of life. The dig stops for 3 hours and the hole freezes partly shut. Steer round it: Costs 20% of the battery. No sample. Decide at the cryobot.

card-eclipse: Jupiter is about to hide the Sun. Soon Jupiter will block the Sun for 3 hours. In the dark the same power keeps the habitat less warm, and the battery drains instead of filling. Tonight it will be the same, for far longer. Your choices. Dig first: Fastest dig. The crew gets cold, quickly in the dark. Share: Half-speed dig. Warm by day, slowly cooling in the dark. Warm first: The crew warms up. The cryobot gets no heat: no digging, and its hole starts to freeze. Boost: 15% of the battery buys 3 hours of full digging and warmth. The power plan is set inside the habitat.

card-crack: Ocean chemicals at the crack. The scanner has found ammonia beside the red crack: a sign that ocean water reached the surface there not long ago. Radiation will destroy it in about 10 hours. Your choices. Walk out and collect it: A life clue. It is a long walk in the open: radiation and cold all the way. Leave it: No walk, and no clue. Follow the green beacon.

card-sensor: The cryobot’s camera is clouded. Radiation from the plasma crossing has clouded the cryobot’s guide camera. Half-blind, it digs at about half its speed. Your choices. Bake it clear: The habitat’s heaters go to the camera for 4 hours. The crew gets cold meanwhile. Leave it: The dig stays at about half speed until you do. Decide at the cryobot.

card-storm: A Purple Aurora Storm is coming. A far stronger plasma crossing is on its way, and it will last about 3 hours. The habitat’s thin walls will not stop much of it. Your choices. Stay in the habitat: A big dose of radiation. Fill the habitat’s walls with water: Costs 25% of the battery to melt the ice. Water blocks most of the storm. Shelter in the ice cave: Thick ice blocks nearly all of it, but the cave is bitterly cold and a long walk. Choose where to be when it hits.

card-tide: The sideways tide. Soon the tide will start to grind the fault sideways, for 6 hours. The cryobot’s cable crosses that fault, and will be pulled tighter and tighter until it snaps. Your choices. Pay out slack: Only helps while the cable is tight, so you must come back about three times: outside, at night. Lock the spool: The cable stretches but cannot snap. Stretched, it carries less power: the dig is a third slower for the rest of the mission. Decide at the cable spool.

card-salt: A layer of salt. The cryobot has hit a hard layer of salt. It has slowed to a crawl. Your choices. Use the cutting jets: Costs 25% of the battery. Through at full speed. Crawl through: Costs nothing but hours, while your radiation dose climbs. Decide at the cryobot.

clock-start: The mission clock is running. Good luck!

clock-start-skipped: Training skipped. The mission clock is running.

plasma-open: Plasma crossing! You have no shelter out here.

plasma: Plasma crossing: the sky glows and radiation rises for about an hour.

storm-open: The Purple Aurora Storm is here, and you are in the open!

storm: The Purple Aurora Storm is here.

eclipse-start: Jupiter is hiding the Sun: 3 hours of darkness. Everything is colder and the battery drains.

eclipse-end: The Sun is back.

night: The Sun has gone behind the mountain. The long night begins: colder, and no sunlight for the battery.

sunrise: Sunrise. Warmer, and the battery is filling again.

battery-low: Battery below the red line! Switch to “Warm first” to let the reactor refill it, or the base shuts down.

cold: You are getting dangerously cold. Get inside, and give the habitat more heat.

dose-50: Radiation dose: 50% of your limit.

dose-75: Radiation dose: 75% of your limit.

dose-90: Radiation dose: 90% of your limit.

freeze-50: The cryobot’s hole is 50% frozen shut! It needs heat.

freeze-75: The cryobot’s hole is 75% frozen shut! It needs heat.

cable-tight: The cable is close to snapping! Pay out slack at the cable spool.

sample-done: The sample of salty water is on board: a life clue. The cryobot is digging again.

camera-clear: The camera is clear again. The cryobot is back to full speed.

crack-gone: Radiation has destroyed the chemicals at the crack. That clue is gone.

salt-through: The cryobot is through the salt layer.

boost-over: The boost has run out. Back to your power plan.

end-power: Mission called home: out of power. The battery stayed below the red line for too long, so the base shut itself down to protect its systems. Mission Control is bringing the crew home.

end-heat: Mission called home: too cold. The crew got too cold to carry on safely. Mission Control is bringing them home.

end-radiation: Mission called home: radiation limit reached. Nobody is hurt: the rule is to stop before anyone is. Mission Control is bringing them home.

end-cryobot: Mission called home: the cryobot is frozen in. It went too long without heat, and the meltwater froze solid around it.

end-cable: Mission called home: the cable snapped. The tide ground the fault sideways and pulled the cryobot’s cable tighter and tighter until it snapped.

end-win: Breakthrough! The cryobot melted through all 29 kilometres of ice, and you were the first to see what lives in Europa’s ocean.
