class BottlesBar extends DrawableObject {

  /**
 * Initials the bottlesbar.
 * 
 */
  IMAGES_BOTTLES = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png", // 0
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png", // 5
  ];

  percentage = 0;

  constructor() {
    super().loadImage(
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png"
    );
    this.loadImages(this.IMAGES_BOTTLES);
    this.x = 70;
    this.y = 100;
    this.width = 200;
    this.height = 70;
    this.setPercentage(0);
  }

  //setPercentage(50);
  setPercentage(percentage) {
    this.percentage = percentage; // => 0 ... 5
    let path = this.IMAGES_BOTTLES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }



  resolveImageIndex() {
    if (this.percentage == 0) {
      return 0;
    } else if (this.percentage == 20) {
      return 1;
    } else if (this.percentage == 40) {
      return 2;
    } else if (this.percentage == 60) {
      return 3;
    } else if (this.percentage == 80) {
      return 4;
    } else {
      return 5;
    }
  }
}
