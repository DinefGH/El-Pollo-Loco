class Coins extends MovableObject {
  IMAGES_IDLE = ["img/8_coin/coin_1.png", "img/8_coin/coin_2.png"];

  currentImage = 0;
  y = 140;

  constructor() {
    super().loadImage("img/8_coin/coin_1.png");
    this.loadImages(this.IMAGES_IDLE);

    this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700 (random zahl zwischen 0 und 1)

    this.animateCoins();
  }

  animateCoins() {
    setInterval(() => {
      // walk Animation
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 2);
  }
}
