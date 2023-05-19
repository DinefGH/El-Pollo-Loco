class MovableObject extends DrawableObject {

 

  speed = 0.15;
  
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  bottlesAmmount = 0;
  coinsAmmount = 0;
  lastHit = 0;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    if (this instanceof ThrowableObject) { // Bottles should always fall
      return true;
    } else {
    return this.y < 120;
  }
  }


  // character.isColliding(chicken);
  isColliding(mo) {  
    return  this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
  }

  hitBottles() {
    this.bottlesAmmount += 20;
    this.bottles
    if(this.bottlesAmmount > 100) {
      this.bottlesAmmount = 100;
  }
  }

  hitCoins() {
    this.coinsAmmount += 20;
    if(this.coinsAmmount > 100) {
      this.coinsAmmount = 100;
  }
  }

  hit() {
    this.energy -= 5;
    if(this.energy < 0) {
      this.energy = 0;
    } else { 
      this.lastHit = new Date().getTime();
    }
  }


  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
    timePassed = timePassed / 1000;
    return timePassed < 0.8;


  }

  isDead() {
    return this.energy == 0;
  }


  

  playAnimation(images) {
    let i = this.currentImage % images.length; //let i = 0 % 6; =>0, Rest 0 |...| let i = 7 % 6; => 1, Rest 1
    //i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ....
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }

  jump() {
    this.speedY = 25;
  }
}
