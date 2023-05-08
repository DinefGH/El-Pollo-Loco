class Level {
    enemies;
    clouds;
    collectables;
    backgroundObjects;
    level_end_x = 2300

    constructor(enemies, clouds, backgroundObjects, collectables){
        this.enemies = enemies;
        this.clouds = clouds;
        this.collectables = collectables;
        this.backgroundObjects = backgroundObjects;
    }
}