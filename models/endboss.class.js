class Endboss extends MovableObject {
  IMAGES_ENDBOSS_WALK = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_IDLE = [
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ENDBOSS_ATTACK = [
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_ENDBOSS_HURT = [
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_ENDBOSS_DEAD = [
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];
  currentImage = 0;
  hitEndbossChicken = false;
  endbossWalkStart = false;

  height = 350;
  width = 350;
  y = 95;
  constructor() {
    super().loadImage(this.IMAGES_IDLE[0]);
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_ENDBOSS_ATTACK);
    this.loadImages(this.IMAGES_ENDBOSS_HURT);
    this.loadImages(this.IMAGES_ENDBOSS_DEAD);
    this.loadImages(this.IMAGES_ENDBOSS_WALK);
    this.applyGravityEndboss();
    this.x = 2800;
    this.speed = 15.5;
    this.animateEndboss();
  }

  animateEndboss() {
    setInterval(() => {
      if (
        (this.isDead() && this.isAboveGround()) ||
        (this.isDead() && this.hitChickenEndboss())
      ) {
        this.y - 300;
        this.playAnimation(this.IMAGES_ENDBOSS_DEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_ENDBOSS_HURT);
        setTimeout(() => {
          let endbossAttackID = setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
            this.playAnimation(this.IMAGES_ENDBOSS_ATTACK);
          }, 1000 / 5);
          console.log("ID von setintervalAttack:", endbossAttackID);
          setTimeout(() => {
            clearInterval(endbossAttackID);
          }, 1000);
        }, 1500);

        setTimeout(() => {
          let endbossWalkID = setInterval(() => {
            this.moveLeft();
            this.otherDirection = false;
            this.playAnimation(this.IMAGES_ENDBOSS_WALK);
          }, 1000 / 5);
          console.log("ID von setinterval:", endbossWalkID);
          setTimeout(() => {
            clearInterval(endbossWalkID);
          }, 1000);
        }, 500);
      } else this.playAnimation(this.IMAGES_IDLE);
    }, 1000 / 2);
  }

  hitChickenEndboss() {
    return this.hitEndbossChicken;
  }
  endbossStartWalk() {
    return this.endbossWalkStart;
  }

  ChickenEndbossHit() {
    return this.EndbossChickenHit;
  }
}
