class StatusbarBottle extends MovableObject {

    height = 70;
    width = 200;
    speed = 5;
    y = 115;
    IMAGES_IDLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        ];
        currentImage = 0;
        world;



    constructor(){
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',)
        this.loadImages(this.IMAGES_IDLE);
        this.animateStatusbarBottle();
    };

    animateStatusbarBottle() {
        setInterval(() => {
            if (this.world.keyboard.D && this.x < this.world.level.level_end_x){
            this.x += this.speed;
            }

            if (this.world.keyboard.A && this.x > 0 ){
                this.x -= this.speed;  
            }
            this.world.camera_x = -this.x + 150;
        }, 1000 / 60);
    }
}