let level1;

function initLevel() {
  level1 = new Level(
    [
      new Chicken(800),
      new Chicken(1200),
      new Chicken(1600),
      new Chicken(1800),
      new Chicken(2000),
      new Chicken(2400),
    ],

    [
      new Cloud(),
      new Cloud(500),
      new Cloud(1000),
      new Cloud(1500),
      new Cloud(2000),
      new Cloud(2500),
    ],
    [
      new BackgroundObject("img/5_background/layers/air.png", -719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        -719
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719),
      new BackgroundObject("img/5_background/layers/air.png", 0),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0),
      new BackgroundObject("img/5_background/layers/air.png", 719),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719),
      new BackgroundObject("img/5_background/layers/air.png", 1438),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 1438),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        1438
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 1438),
      new BackgroundObject("img/5_background/layers/air.png", 2157),
      new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 2157),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/2.png",
        2157
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 2157),
      new BackgroundObject("img/5_background/layers/air.png", 2876),
      new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 2876),
      new BackgroundObject(
        "img/5_background/layers/2_second_layer/1.png",
        2876
      ),
      new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 2876),
    ],
    [
      new Bottles(),
      new Bottles(),
      new Bottles(),
      new Bottles(),
      new Bottles(),
      new Bottles(),
      new Bottles(),
      new Bottles(),
    ],
    [new Coins(), new Coins(), new Coins(), new Coins(), new Coins()]
  );
}
