player.onTravelled(SWIM_LAVA, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 1e+30, -10000000000000)
})
player.onTravelled(SWIM_WATER, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 10, -10000000000000)
})
player.onTravelled(CLIMB, function () {
    mobs.applyEffect(WITHER, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
})
player.onTravelled(BOUNCE, function () {
    mobs.applyEffect(POISON, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 10, 10000000000000)
})
player.onTravelled(TELEPORT, function () {
    mobs.applyEffect(NAUSEA, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(HUNGER, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(MINING_FATIGUE, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(BLINDNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(WITHER, mobs.target(ALL_PLAYERS), 1e+30, 1)
})
player.onTravelled(FALL, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 1e+30, -10000000000000)
})
player.onTravelled(FROST_WALK, function () {
    mobs.applyEffect(SLOWNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(LEVITATION, mobs.target(ALL_PLAYERS), 10, -10000000000000)
})
player.onTravelled(TravelMethod.Unknown, function () {
    mobs.applyEffect(MINING_FATIGUE, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(NAUSEA, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(HUNGER, mobs.target(ALL_PLAYERS), 10, -10000000000000)
})
player.onTravelled(FLY, function () {
    mobs.applyEffect(WEAKNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
    mobs.applyEffect(INVISIBILITY, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
})
player.onTravelled(SNEAK, function () {
    mobs.applyEffect(BLINDNESS, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
})
player.onTravelled(SPRINT, function () {
    mobs.applyEffect(SPEED, mobs.target(ALL_PLAYERS), 1e+30, 10000000000000)
})
