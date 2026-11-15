// Every number the game's rules run on, in one place, so they can be tuned
// without hunting through code. "Real:" marks a number taken from
// references/europa.md (section in brackets); "Game:" marks a number chosen
// for play, which the "What's real?" panel must own up to.
//
// SECOND VERSION (Cyril, 2026-11-14, late night). The first version was two
// dials to keep balanced, and Cyril found it "just managing stuff": hiding in
// the habitat was safe. This version follows the challenge brief's own
// examples instead: ONE standing choice (what the reactor's power goes to),
// and a run of one-off SITUATIONS, each with two or three options that cost
// different things. There is no option without a price.

export const RULES = {
  // --- Time ---------------------------------------------------------------
  hourSeconds: 8, // Game: real seconds per Europa hour. A winning run is about 11 minutes.
  dayHours: 85, // Real: one orbit of Jupiter, 3.55 Earth days [1]

  // --- The dig --------------------------------------------------------------
  iceKm: 29, // Real: ice thickness measured by NASA's Juno [2]
  // Game: a real cryobot would need about 3 YEARS for 29 km [13]. Sped up.

  // --- The one standing choice: what the reactor's power goes to -----------
  // Set at the reactor. Real: a reactor gives a steady flow that can't be
  // turned up [15], so more for one thing is less for another.
  //   kmh: dig speed (km per Europa hour).
  //   warmLit / warmDark: how fast the crew warms (+) or cools (-) INSIDE
  //     the habitat, % per hour, in sunlight / in the dark. Real: sunlight on
  //     the hull gives a little heat back [11], so the same power keeps you
  //     less warm at night and in the eclipse.
  //   freeze / thaw: how fast the cryobot's hole freezes shut or melts open
  //     again (share per hour). Real: meltwater refreezes behind a cryobot;
  //     unheated, it gets locked in [13]. (Cyril: "taking heat from the
  //     cryobot lets its hole refreeze".)
  //   charge: % of battery per hour the reactor's spare power puts back.
  plans: {
    dig: { name: 'Dig first', kmh: 0.7, warmLit: -2, warmDark: -6, freeze: 0, thaw: 0.25, charge: 0 },
    share: { name: 'Share', kmh: 0.3, warmLit: 4, warmDark: -0.8, freeze: 0, thaw: 0.12, charge: 0 },
    warm: { name: 'Warm first', kmh: 0, warmLit: 11, warmDark: 8, freeze: 0.04, thaw: 0, charge: 0.5 },
  },
  startPlan: 'share',

  // --- The battery (0-100%): the base's spare power -------------------------
  // Real: batteries are a small tank that stores power for the dark hours
  // and for emergencies [15]. Sunlight fills it (weakly: ~15 W per square
  // metre of panel at Europa [17]); the dark drains it; several situations
  // can be solved by spending it.
  battery: {
    start: 70,
    sun: 1.2, // % per hour gained in sunlight
    dark: -0.3, // % per hour lost at night and in the eclipse
    redLine: 20, // below this, the base is in trouble
    graceHours: 6, // Game: this long below the red line and the base shuts down (Opportunity, 2018 [15])
    boost: 15, // % spent on a boost
    boostHours: 3, // ...which runs the cryobot at full AND warms the crew for this long
  },

  // --- Heat (the crew's warmth, 0-100%) -------------------------------------
  // % per Europa hour. Game numbers; the ORDER is real: sunlight helps a
  // little, darkness is colder, and bare ice at -160 C drinks heat [1][11].
  heat: { outsideSun: -3, outsideDark: -5, cave: -10, start: 100, warnAt: 25 },

  // --- Radiation (dose, 0-100% of the mission limit) -------------------------
  // % per Europa hour. Game numbers; the ORDER is real: ice is the best
  // shield, the habitat's walls help, the open surface is worst [3]. The
  // limit stands for NASA's real career limit of 600 millisieverts [18].
  dose: { outside: 1.3, habitat: 0.52, cave: 0.1, plasmaBoost: 3, warnAt: 75 },

  // Europa crosses the thick middle of Jupiter's plasma sheet about every
  // 5.6 hours [17]. How long a crossing lasts is a Game number. Ordinary
  // crossings are a background rhythm; only the storm is a situation.
  plasma: { periodHours: 5.6, widthHours: 0.55, firstAfterStart: 3.6 },

  // === The seven situations =================================================
  // Game: each one begins when the cryobot reaches a certain depth (a little
  // different every mission), so every mission meets all seven, in order,
  // however fast it digs. The eclipse alone comes by the clock.
  // Four are Cyril's events; three (crack, sensor, salt) were suggested by
  // Claude from the real hazards in references/europa.md section 13 and
  // accepted by Cyril ("Yes, rebuild", 2026-11-14).

  // 1. The pocket of salty water (Cyril). Real: pockets of salty water inside
  // the ice, 1-3 km down, are a leading idea [17]; NASA lists water pockets
  // as a cryobot hazard [13].
  brine: {
    kmMin: 1.6, kmMax: 2.6,
    waitFreezeHours: 14, // Game: undecided this long, the hole freezes shut
    sampleHours: 3, // Game: taking a sample stops the dig this long...
    sampleFreeze: 0.4, // ...and the hole freezes this far shut behind it
    detourBattery: 20, // Game: % of battery to steer round it
  },

  // 2. Jupiter's eclipse (Cyril). Real: ~2.9 hours of darkness [12]. No
  // number of its own: it is the first taste of what darkness does to every
  // plan above. The card is raised this many hours ahead.
  eclipse: { warnHours: 5 },

  // 3. Ocean chemicals at the crack (suggested). Real: ammonia compounds
  // were found near Europa's cracks in Galileo data, and radiation destroys
  // ammonia quickly, so it surfaced recently [2]. Game: when and how long.
  crack: { kmMin: 5.5, kmMax: 8, lastsHours: 10 },

  // 4. The clouded camera (suggested). Real: radiation damaged Juno's
  // camera, and engineers healed it by heating it [13].
  sensor: {
    kmMin: 9.5, kmMax: 12, // the first plasma crossing after this depth clouds it
    slow: 0.55, // Game: dig speed while half-blind
    bakeHours: 4, // Game: the habitat's heaters go to the camera this long...
    bakeChill: -5, // ...and the crew inside cools this fast meanwhile
  },

  // 5. The Purple Aurora Storm (Cyril). Real: Io's eruptions feed Jupiter's
  // plasma; whether that raises the dose at Europa is NOT established, so
  // the game says "scientists think ... may" [14]. Water walls: water is a
  // real radiation shield, and melting ice really takes a lot of power
  // (~140 kWh per cubic metre [12]); a habitat with fillable walls is imagined.
  storm: {
    kmMin: 14, kmMax: 16, // forecast when the cryobot is this deep
    strength: 3, widthHours: 1.3, warnHours: 5,
    wallsBattery: 25, // Game: % of battery to melt ice into the walls
    wallsShield: 0.35, // Game: share of the storm's dose that still gets through
  },

  // 6. The sideways tide (Cyril). Real: ridged faults grind sideways with the
  // daily tide, slowly, over hours [17]; a cable can snap when the ice
  // shifts [13].
  tide: {
    kmMin: 18.5, kmMax: 20, // forecast when the cryobot is this deep; the fault moves warnHours later
    hours: 6,
    strainPerHour: 0.34, // Game: untended, the cable snaps about 3 hours in
    slack: 0.4, // Game: what one pay-out of slack relieves
    relaxPerHour: 0.2,
    warnHours: 4,
    brakeSlow: 0.65, // Game: dig speed for the rest of the mission on a stretched cable
  },

  // 7. The salt layer (suggested). Real: salt and dust layers slow a cryobot
  // and need extra tools such as water jets and cutters [13].
  salt: {
    kmMin: 22.5, kmMax: 24.5,
    thickKm: 1.5,
    slow: 0.3, // Game: dig speed inside the layer without the jets
    jetsBattery: 25, // Game: % of battery to cut through at full speed
  },
};

// Where the Sun and Jupiter are over the day. The game fills this in from the
// real 3D sky (src/game/daylight.js); these are the same numbers, written
// out, so the rules can be tested without the 3D world.
export const DEFAULT_SKY = {
  startHour: 9.59, // hours after sunrise when the mission starts
  eclipseMidHour: 29.3, // the Sun passes behind Jupiter around this hour
  eclipseHalfHours: 1.44, // Real: Jupiter is 12.2 degrees wide, the Sun crosses it in ~2.9 h [12]
  sunUpFrom: 4.9, // the eastern crags hide the Sun until then
  sunUpUntil: 33.6, // the cave mountain hides it from then on
};
