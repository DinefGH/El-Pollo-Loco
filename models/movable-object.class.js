class MovableObject extends DrawableObject {

 

  speed = 0.15;
  
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  energy = 100;
  bottlesAmmount = 0;
  coinsAmmount = 0;
  lastHit = 0;

  // ==> Chicken
  offsetCh = {
    topCh: 0,
    bottomCh: 80,
    leftCh: 20,
    rightCh: 0,
  }


  // C ==> Coins
  offsetC = {
    topC: 0,
    bottomC: 80,
    leftC: 50,
    rightC: 0,
  }


  // B ==> Bottles
  offsetB = {
    topB: 0,
    bottomB: 50,
    leftB: 40,
    rightB: 0,
  }

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


  // character.isCollidingChicken(chicken);
  isCollidingChicken(mo) {  
    return  this.x + this.width - this.offsetCh.rightCh > mo.x + mo.offsetCh.leftCh &&
            this.y + this.height - this.offsetCh.bottomCh > mo.y + mo.offsetCh.topCh &&
            this.x + this.offsetCh.leftCh < mo.x + mo.width - mo.offsetCh.rightCh &&
            this.y + this.offsetCh.topCh < mo.y + mo.height - mo.offsetCh.bottomCh;
  }


  // character.isCollidingCoins(coins);
  isCollidingCoins(mo) {  
    return  this.x + this.width - this.offsetC.rightC > mo.x + mo.offsetC.leftC &&
            this.y +40 + this.height-50 - this.offsetC.bottomC > mo.y + mo.offsetC.topC &&
            this.x + this.offsetC.leftC < mo.x + mo.width - mo.offsetC.rightC &&
            this.y +40 + this.offsetC.topC < mo.y + mo.height -50 - mo.offsetC.bottomC;
  }

   // character.isCollidingBottle(bottles);
   isCollidingBottle(mo) {  
    return  this.x + this.width - this.offsetB.rightB > mo.x + mo.offsetB.leftB &&
            this.y +40 + this.height -50 - this.offsetB.bottomB > mo.y + mo.offsetB.topB &&
            this.x + this.offsetB.leftB < mo.x + mo.width - mo.offsetB.rightB &&
            this.y +40+ this.offsetB.topB < mo.y + mo.height -50 - mo.offsetB.bottomB;
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
