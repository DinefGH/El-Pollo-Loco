class World {
  character = new Character();
  endboss = new Endboss();


  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;
  statusBar = new StatusBar();
  coinsBar = new CoinsBar();
  bottlesBar = new BottlesBar();
  statusBarEndboss = new StatusBarEndboss();
  endbossIcon = new EndbossIcon();
  hadFirstContact = true


  // endBossBar = new EndbossBar();f
  throwableObjects = [new ThrowableObject()];
  throwableBottles = new ThrowableObject();
  throwBottle = false
  throwBottleS = false
  

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
    this.endboss.world = this;
    this.statusBar.world = this;
    this.coinsBar.world = this;
    this.bottlesBar.world = this;
    this.statusBarEndboss.world = this;
    this.endbossIcon.world = this;
    // this.endBossBar.world = this;
    
  }

  run() {
    setInterval(() => {

      this.checkCollisions();
      this.checkCollisionsBottles();
      this.checkCollisionsCoins();
      this.checkThrowObjects();
      this.checkCollisionsThrowBottle();
      this.checkCollisionsEndboss();
      this.checkCollisionsThrowBottleEndboss();
    }, 100);

  }


  checkThrowObjects() {
    if(this.keyboard.SPACE && this.character.bottlesAmmount > 0 && !this.throwBottle) {
    this.throwBottle = true
    let bottle = new ThrowableObject(this.character.x, this.character.y);
    this.throwableObjects.push(bottle)
    this.character.bottlesAmmount -= 20
    this.bottlesBar.setPercentage(this.character.bottlesAmmount);
    console.log(' bottlesAmmount ', this.character.bottlesAmmount)
    setTimeout(() => {
      this.throwBottle= false
    }, 500);
  }
  }

  checkCollisions() {
    this.level.enemies.forEach( (enemy, index) => {
      if(this.character.isAboveGround() && this.character.isCollidingChicken(enemy) && this.character.speedY < 0) {
        this.level.enemies.splice(index, 1);
      
      } else if ( this.character.isCollidingChicken(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
          // console.log('Collision with Character, energy ', this.character.energy);
      }
    
      
     });
  }


  checkCollisionsEndboss() {
      if ( this.character.isCollidingChicken(this.endboss)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
    }
  }



  checkCollisionsThrowBottleEndboss() {
    this.throwableObjects.forEach( ( bottle, index) => {
      if (bottle.isCollidingEndboss(this.endboss)) {
        this.endboss.hitEndboss();
        bottle.hitEnemy = true
        this.statusBarEndboss.setPercentage(this.endboss.energy);
        // setTimeout (
        // this.throwableObjects.splice(index, 1),
        // 1000);
        console.log('Energy:', this.endboss.energy)
    }
});
}



  checkCollisionsThrowBottle() {
    this.throwableObjects.forEach( ( bottle) => {
      this.level.enemies.forEach( ( enemy, index) =>{
      if (bottle.isCollidingChicken(enemy)) {
        this.level.enemies.splice(index, 1);
        
    }
  });
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
    
    if (this.character.x > 2250 || !this.hadFirstContact) {
      this.hadFirstContact = false
    this.ctx.translate(-this.camera_x, 0); // Back
    // Space for fixed objects 
    this.addToMap(this.statusBarEndboss);
    this.ctx.translate(this.camera_x, 0); // Forwards
    }

    if (this.character.x > 2250 || !this.hadFirstContact) {
      this.hadFirstContact = false
    this.ctx.translate(-this.camera_x, 0); // Back
    // Space for fixed objects 
    this.addToMap(this.endbossIcon);
    this.ctx.translate(this.camera_x, 0); // Forwards
  }

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
    

    this.addToMap(this.character);
    this.addToMap(this.endboss);
    this.addObjectsToMap(this.throwableObjects);


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
