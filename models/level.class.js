class Level {
  /**
   * Initials the level.
   * 
   */
  enemies;
  clouds;
  bottles;
  coins;
  backgroundObjects;
  level_end_x = 3000;

  constructor(enemies, clouds, backgroundObjects, bottles, coins) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
    this.bottles = bottles;
    this.coins = coins;
  }
}
