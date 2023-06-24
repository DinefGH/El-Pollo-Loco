class Win extends DrawableObject {

  /**
   * Initials the win screen.
   * 
   */
  IMAGES_WIN = ["img/9_intro_outro_screens/game_over/YOU_WIN_LOGO.png"];
  y = 180;
  x = 270;
  height = 120;
  width = 180;

  constructor(x, y) {
    super().loadImage(this.IMAGES_WIN);
  }
}
