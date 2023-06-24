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


  /**
  * set the world
  * @property {class}  character- class of character.  
  * @property {class}  endboss- class of endboss.  
  * @property {class}  statusBar- class of statusBar.  
  * @property {class}  coinsBar- class of coinsBar.  
  * @property {class}  bottlesBar- class of bottlesBar.  
  * @property {class}  statusBarEndboss- class of statusBarEndboss. 
  * @property {class}  endbossIcon- class of endbossIcon. 
  */
  setWorld() {
    this.character.world = this;
    this.endboss.world = this;
    this.statusBar.world = this;
    this.coinsBar.world = this;
    this.bottlesBar.world = this;
    this.statusBarEndboss.world = this;
    this.endbossIcon.world = this;
  }


  /**
   *run the intervals.
   * 
   */
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


  /**
   *function for throw the bottle.
   * @property {class}  keyboard- class of EndbossIcon. 
   * @property {class}  character- class of Character. 
   * @property {class}  throwBottle- class of ThrowableObject.
   * @property {class}  bottlesBar- class of Bottlesbar.
   * 
   */
  checkThrowObjects() {
    if (this.keyboard.SPACE && this.character.bottlesAmmount > 0 && !this.throwBottle) {
      this.throwBottle = true;
      let bottle = new ThrowableObject(this.character.x, this.character.y);
      this.throwableObjects.push(bottle);
      this.character.bottlesAmmount -= 20;
      this.bottlesBar.setPercentage(this.character.bottlesAmmount);
      setTimeout(() => {
        this.throwBottle = false;
      }, 2500);
    }
  }


  /**
 *function for check collision of chicken and character, after hit the chicken from above delete the chicken.
 * @property {class}  level- class of Level. 
 * @property {class}  character- class of Character. 
 * @property {class}  statusBar- class of Statusbar.
 */
  checkCollisions() {
    this.level.enemies.forEach((enemy, index) => {
      if (this.character.isAboveGround() && this.character.isCollidingChicken(enemy) && this.character.speedY < 0) {
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


  /**
  *function for check collision of chicken and character, after hit the chicken from above delete the chicken.
  *@property {class}  character- class of Character. 
  *@property {class}  endboss- class of Endboss.
  *@property {class}  statusBar- class of Statusbar.
  *@property {class}  statusBarEndboss- class of StatusBarEndboss.
  */
  checkCollisionsEndboss() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isAboveGround() && this.character.isCollidingChicken(this.endboss) && this.character.speedY < 0) {
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


  /**
   *function for check collision of bottle and endboss, after hit the endboss set the energy.
   * @property {class}  throwBottle- class of ThrowableObject.
   * @property {class}  endboss- class of Endboss.
   * @property {class}  statusBarEndboss- class of StatusBarEndboss.
   */
  checkCollisionsThrowBottleEndboss() {
    this.throwableObjects.forEach((bottle, index) => {
      if (bottle.isCollidingEndboss(this.endboss)) {
        this.endboss.hitEndboss();
        bottle.hitEnemy = true;
        this.statusBarEndboss.setPercentage(this.endboss.energy);
      }
    });
  }


  /**
   *function for check collision of bottle and chicken, after hit the chicken delete the chicken.
   * @property {class}  throwBottle- class of ThrowableObject.
   * @property {class}  level- class of Level. 
   */
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


  /**
   *function for check collision of bottle and character, after hit the bottle increase ammount of bottles.
   * @property {class}  level- class of Level. 
   * @property {class}  bottlesBar- class of Bottlesbar.
   * @property {class}  character- class of Character. 
   */
  checkCollisionsBottles() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isCollidingBottle(bottle)) {
        this.character.hitBottles();
        this.level.bottles.splice(index, 1);
        this.bottlesBar.setPercentage(this.character.bottlesAmmount);
      }
    });
  }


  /**
   *function for check collision of coins and character, after hit the bottle increase ammount of coins.
   * @property {class}  character- class of Character.
   * @property {class}  level- class of Level. 
   * @property {class}  coinsbar- class of Coinsbar. 
   */
  checkCollisionsCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isCollidingCoins(coin)) {
        this.character.hitCoins();
        this.level.coins.splice(index, 1);
        this.coinsBar.setPercentage(this.character.coinsAmmount);
      }
    });
  }



  hitChickenBoss() {
    return this.hitBossChicken;
  }


  /**
   *draws the canvas.
   * 
   */
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


      /**
       * check if character is near to endboss and display the endboss statusbar
       * 
       */
      if (this.character.x > 2250 || !this.hadFirstContact) {
        this.hadFirstContact = false;
        this.ctx.translate(-this.camera_x, 0); // Back

        // Space for fixed objects
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(this.camera_x, 0); // Forwards
      }


      /**
       * check if character is near to endboss and display the endboss icon
       * 
       */
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

      /**
       * add the level content to the map
       * 
       */
      this.addObjectsToMap(this.level.enemies);
      this.addObjectsToMap(this.level.coins);
      this.addObjectsToMap(this.level.bottles);
      this.addToMap(this.character);
      this.addToMap(this.endboss);
      this.addObjectsToMap(this.throwableObjects);


      /**
       * check if the endboss energy is under 1 and the endboss y above 500, then show winscreen
       * 
       */
      if (this.endboss.energy < 1 && this.endboss.y > 500) {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.screen);
        this.addToMap(this.win);
        this.ctx.translate(this.camera_x, 0);
        document.getElementById("buttonDescription").classList.add("displayNone");
        document.getElementById("mobileButtonContainer").classList.add("displayNone");
        document.getElementById("mobileButtonContainer").classList.remove("displayFlex");
        setTimeout(() => {
          document.getElementById("btn").classList.remove("displayNone");
        }, 3000);
        return (gameWin = true);
      }


      /**
       * check if the character energy is under 1 and the character y above 500, then show loosescreen
       * 
       */
      if (this.character.energy < 1 && this.character.y > 500) {
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.screen);
        this.addToMap(this.loose);
        this.ctx.translate(this.camera_x, 0);
        document.getElementById("buttonDescription").classList.add("displayNone");
        document.getElementById("mobileButtonContainer").classList.add("displayNone");
        document.getElementById("mobileButtonContainer").classList.remove("displayFlex");
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


  /**
   * function to add objects to map
   * 
   * @param {string}  objects- objects parameter.
   */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }


  /**
   * function to add the flipped image
   * 
   * @param {mo}  movable- movable Object.
   */
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


  /**
   * function to flip image when the character go backwards
   * 
   * @param {mo}  movable- movable Object.
   * @param {string} ctx - context of the canvas.
   */
  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * function to flip image back
   * 
   * @param {mo}  movable- movable Object.
   * @param {string} ctx - context of the canvas.
   */
  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
