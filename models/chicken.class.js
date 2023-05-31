class Chicken extends MovableObject {
  height = 100;
  y = 325;

  IMAGES_IDLE = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = [
    "img/3_enemies_chicken/chicken_normal/2_dead/dead.png",
  ];

  
  currentImage = 0;
  hitChicken = false

  constructor() {
    super().loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_DEAD);

    this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700 (random zahl zwischen 0 und 1)
    this.speed = 0.15 + Math.random() * 0.25;
    this.animateChicken();
  }

  animateChicken() {
    setInterval(() => {
      this.moveLeft();
      this.otherDirection = false;
    }, 1000 / 60);

    setInterval(() => {
      // walk Animation
      if(this.chickenHit())
      this.playAnimation(this.IMAGES_DEAD);
      else
      this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 5);
  }

  chickenHit() {
    return this.hitChicken;
  }

}
