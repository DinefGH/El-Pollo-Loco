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
  screen = new Screen();
  loose = new Loose();
  win = new Win();
  startscreen = new Startscreen();
  hadFirstContact = true;
  hitBossChicken = false;
  throwableObjects = [new ThrowableObject()];
  throwableBottles = new ThrowableObject();
  throwBottle = false;
  throwBottleS = false;

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
    if (
      this.keyboard.SPACE &&
      this.character.bottlesAmmount > 0 &&
      !this.throwBottle
    ) {
      this.throwBottle = true;
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.character.bottlesAmmount -= 20;
      this.bottlesBar.setPercentage(this.character.bottlesAmmount);
      console.log(" bottlesAmmount ", this.character.bottlesAmmount);
      setTimeout(() => {
        this.throwBottle = false;
      }, 2500);
    }
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      if (
        this.character.isAboveGround() &&
        this.character.isCollidingChicken(enemy) &&
        this.character.speedY < 0
      ) {
        enemy.hitChicken = true;
        setTimeout(() => {
          this.level.enemies.splice(index, 1);
        }, 50);
      } else if (this.character.isCollidingChicken(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
      }
    });
  }

  checkCollisionsEndboss() {
    this.level.enemies.forEach((enemy) => {
      if (
        this.character.isAboveGround() &&
        this.character.isCollidingChicken(this.endboss) &&
        this.character.speedY < 0
      ) {
        this.character.hitEndbossAbove();
        enemy.hitEndbossChicken = true;
        enemy.hitBossChicken = true;
        this.statusBarEndboss.setPercentage((this.endboss.energy = 0));
      } else if (this.character.isCollidingChicken(this.endboss)) {
        this.character.hit();
        enemy.EndbossChickenHit = false;
        this.statusBar.setPercentage(this.character.energy);
        console.log(
          "endbossCh Energy",
          this.character.energy,
          this.endboss.energy
        );
      }
    });
  }

  checkCollisionsThrowBottleEndboss() {
    this.throwableObjects.forEach((bottle, index) => {
      if (bottle.isCollidingEndboss(this.endboss)) {
        this.endboss.hitEndboss();
        bottle.hitEnemy = true;
        this.statusBarEndboss.setPercentage(this.endboss.energy);
        console.log("Energy:", this.endboss.energy);
      }
    });
  }

  checkCollisionsThrowBottle() {
    this.throwableObjects.forEach((bottle) => {
      this.level.enemies.forEach((enemy, index) => {
        if (bottle.isCollidingChicken(enemy)) {
          bottle.hitEnemy = true;
          this.level.enemies.splice(index, 1);
        }
      });
    });
  }

  checkCollisionsBottles() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isCollidingBottle(bottle)) {
        this.character.hitBottles();
        this.level.bottles.splice(index, 1);
        this.bottlesBar.setPercentage(this.character.bottlesAmmount);
        console.log(
          "Collision with Character, bottlesAmmount ",
          this.character.bottlesAmmount
        );
      }
    });
  }

  checkCollisionsCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isCollidingCoins(coin)) {
        this.character.hitCoins();
        this.level.coins.splice(index, 1);
        this.coinsBar.setPercentage(this.character.coinsAmmount);
        console.log(
          "Collision with Character, coinsAmmount ",
          this.character.coinsAmmount
        );
      }
    });
  }

  hitChickenBoss() {
    return this.hitBossChicken;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    if ((this.startgame = true)) {
      this.ctx.translate(this.camera_x, 0);
      this.addObjectsToMap(this.level.backgroundObjects);
      this.addObjectsToMap(this.level.clouds);
      this.ctx.translate(-this.camera_x, 0); // Back
      // Space for fixed objects
      this.addToMap(this.statusBar);
      this.ctx.translate(this.camera_x, 0); // Forwards
      if (this.character.x > 2250 || !this.hadFirstContact) {
        this.hadFirstContact = false;
        this.ctx.translate(-this.camera_x, 0); // Back
        // Space for fixed objects
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0); // Forwards
      }
      if (this.character.x > 2250 || !this.hadFirstContact) {
        this.hadFirstContact = false;
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
      if (this.endboss.energy < 1 && this.endboss.y > 500) {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.screen);
        this.addToMap(this.win);
        this.ctx.translate(this.camera_x, 0);
        document.getElementById("btn").classList.remove("displayNone");
        return (gameWin = true);
      }
      if (this.character.energy < 1 && this.character.y > 500) {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.screen);
        this.addToMap(this.loose);
        this.ctx.translate(this.camera_x, 0);
        setTimeout(() => {
          document.getElementById("btn").classList.remove("displayNone");
        }, 3000);
        return (gameLost = true);
      }
    } else {
      this.ctx.translate(-this.camera_x, 0);
      this.addToMap(this.startscreen);
      this.ctx.translate(this.camera_x, 0);
    }

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
