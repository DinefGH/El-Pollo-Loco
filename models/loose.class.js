class Loose extends DrawableObject {
  /**
   * Initials the loose screen
   * 
   */
  IMAGES_LOOSE = ["img/9_intro_outro_screens/game_over/oh no you lost!.png"];
  y = 0;
  x = 0;
  height = 480;
  width = 720;

  constructor(x, y) {
    super().loadImage(this.IMAGES_LOOSE);
  }
}
