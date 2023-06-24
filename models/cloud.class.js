class Cloud extends MovableObject {
  /**
  * Initials the clouds.
  * 
  */

  y = 20;
  width = 500;
  height = 250;

  constructor(x) {
    super().loadImage("img/5_background/layers/4_clouds/1.png");
    this.x = x;
    this.animateCloud();
  }

  animateCloud() {
    this.moveLeft();
  }
}
