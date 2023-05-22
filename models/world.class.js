class World {
  character = new Character();

  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  coinsBar = new CoinsBar();
  bottlesBar = new BottlesBar();
  throwableObjects = [new ThrowableObject()];

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  setWorld() {
    this.character.world = this;
    this.statusBar.world = this;
    this.coinsBar.world = this;
    this.bottlesBar.world = this;
  }

  run() {
    setInterval(() => {

      this.checkCollisions();
      this.checkCollisionsBottles();
      this.checkCollisionsCoins();
      this.checkThrowObjects();

    }, 100);

  }


  checkThrowObjects() {
    if(this.keyboard.SPACE && this.character.bottlesAmmount > 0 ) {
    let bottle = new ThrowableObject(this.character.x, this.character.y);
    this.throwableObjects.push(bottle)
  }
  }

  checkCollisions() {
    this.level.enemies.forEach( (enemy) => {
      if( this.character.isCollidingChicken(enemy)) {
       this.character.hit();
       this.statusBar.setPercentage(this.character.energy);
         // console.log('Collision with Character, energy ', this.character.energy);
      }

     });
  }


  checkCollisionsBottles() {
    this.level.bottles.forEach( (bottle, index) => {
      if( this.character.isCollidingBottle(bottle)) {
       this.character.hitBottles();
       this.level.bottles.splice(index, 1);
       this.bottlesBar.setPercentage(this.character.bottlesAmmount);
         console.log('Collision with Character, bottlesAmmount ', this.character.bottlesAmmount);
      }

     });

  }

  checkCollisionsCoins() {
    this.level.coins.forEach( (coin, index) => {
      if( this.character.isCollidingCoins(coin)) {
       this.character.hitCoins();
       this.level.coins.splice(index, 1);
       this.coinsBar.setPercentage(this.character.coinsAmmount);
         console.log('Collision with Character, coinsAmmount ', this.character.coinsAmmount);
      }

     });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.clouds);

    this.ctx.translate(-this.camera_x, 0); // Back
    // Space for fixed objects 
    this.addToMap(this.statusBar);
    this.ctx.translate(this.camera_x, 0); // Forwards

    
    this.ctx.translate(-this.camera_x, 0); // Back
    // Space for fixed objects 
    this.addToMap(this.coinsBar);
    this.ctx.translate(this.camera_x, 0); // Forwards

    this.ctx.translate(-this.camera_x, 0); // Back
    // Space for fixed objects 
    this.addToMap(this.bottlesBar);
    this.ctx.translate(this.camera_x, 0); // Forwards
    

    this.addObjectsToMap(this.level.enemies);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addObjectsToMap(this.throwableObjects);

    this.addToMap(this.character);


    this.ctx.translate(-this.camera_x, 0);

    // Draw() wird immer wieder aufgerufen
    let self = this; //in requestAnimationFrame wird this nicht mehr erkannt, deshalb wird let self benötigt
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    //mo = movable Object
    if (mo.otherDirection) {
      this.flipImage(mo);
    }
    mo.draw(this.ctx);
    mo.drawFrameCharacter(this.ctx);
    mo.drawFrameCoins(this.ctx);
    mo.drawFrameBottles(this.ctx);
    mo.drawFrameChicken(this.ctx);
    mo.drawFrameEndboss(this.ctx);
    
    
    

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }


  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
