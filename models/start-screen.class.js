class Startscreen extends DrawableObject {
  IMAGES_STARTSCREEN = ["img/9_intro_outro_screens/start/startscreen_2.png"];
  y = 0;
  x = 0;
  height = 480;
  width = 720;

  constructor(x, y) {
    super().loadImage(this.IMAGES_STARTSCREEN);
  }
}
