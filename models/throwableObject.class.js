class ThrowableObject extends MovableObject {

  /**
   * Initials the throwableObjects
   * 
   */
  IMAGES_IDLE = [
    "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  splash_sound = new Audio ("audio/bottle_short.mp3")


  currentImage = 0;
  height = 60;
  hitEnemy = false;


  constructor(x, y) {
    super().loadImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_SPLASH);
    this.x = x;
    this.y = y + 80;
    this.animateBottles();
    this.throw();
  }


  animateBottles() {
    const interval = setInterval(() => {
      if (this.bottleHit()) {
        this.playAnimation(this.IMAGES_SPLASH);
        this.splash_sound.play()
        setTimeout(() => {
        clearInterval(interval);
      }, 10);
      } else this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 10);
    }
  
  

  


  isSplashed() {
    let timePassed = new Date().getTime() - 1687671616304; // Difference in ms
    timePassed = timePassed / 1000;
    return timePassed < 0.5;
  }

  bottleHit() {
    return this.hitEnemy;
  }


  throw() {
    this.speedY = 25;
    this.applyGravity();
    setInterval(() => {
      this.x += 10;
    }, 30);
  }
}
