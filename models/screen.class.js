class Screen extends DrawableObject {
  /**
   * Initials the blackscreen.
   * 
   */
  IMAGES_SCREEN = ["img/5_background/blackscreen.png"];
  y = 0;
  x = 0;
  height = 480;
  width = 720;

  constructor(x, y) {
    super().loadImage(this.IMAGES_SCREEN);
  }
}
