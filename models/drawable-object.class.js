class DrawableObject {
   
  x = 120;
    y = 275;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    imagesToLoad = 0;
 


    loadImage(path) {
        imagesToLoad++;
        this.img = new Image();
        this.img.onload = () => {
            imagesLoaded++;
      let percent = (imagesLoaded / imagesToLoad) * 100;
      console.log(`${percent} loaded`);
  }
  this.img.src = path;
}

  draw(ctx) {
    try {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  } catch(e) {
    console.warn('Error loading image', e);
    console.log('Could not load image', this.img);
  }
}


  drawFrameCharacter(ctx) {
    if (this instanceof Character) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x+15, this.y+120, this.width-35, this.height-130);
      ctx.stroke();
    }
  }


  drawFrameEndboss(ctx) {
    if (this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x+10, this.y+80, this.width-25, this.height-95);
      ctx.stroke();
    }
  }

  
  drawFrameChicken(ctx) {
    if (this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x+3, this.y+5, this.width-5, this.height-10);
      ctx.stroke();
    }
  }


 drawFrameBottles(ctx) {
    if (this instanceof Bottles) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x+30, this.y+50, this.width-50, this.height-100);
      ctx.stroke();
    }
  }


  drawFrameCoins(ctx) {
    if (this instanceof Coins) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x+32, this.y+50, this.width-65, this.height-100);
      ctx.stroke();
    }
  }




/**
   *
   * @param {Array} arr - ['img/image1.png', 'img/image2.png', ...]
   *
   */
loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

}