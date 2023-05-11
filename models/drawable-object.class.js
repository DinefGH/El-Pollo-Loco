class DrawableObject {
    x = 120;
    y = 275;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

// loadImage('img/test.png');
loadImage(path) {
    this.img = new Image(); //this.img = document.getElementById('image') <img id='image' src="">
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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