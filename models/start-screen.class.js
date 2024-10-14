class Startscreen extends DrawableObject {
  /**
   * Initials the startscreen.
   * 
   */
  IMAGES_STARTSCREEN = ["img/9_intro_outro_screens/game_over/game over!.png"];
  y = -100;
  x = 0;
  height = 480;
  width = 720;

  constructor(x, y) {
    super().loadImage(this.IMAGES_STARTSCREEN);
  }
}
