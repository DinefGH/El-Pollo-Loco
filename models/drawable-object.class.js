class DrawableObject {
   
  x = 120;
    y = 275;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    imagesToLoad = 0;
    percent = 0 
 


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