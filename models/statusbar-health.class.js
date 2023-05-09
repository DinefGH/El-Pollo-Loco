class StatusbarHealth extends MovableObject {

    height = 70;
    width = 200;
    speed = 5;
    y = -15;
    IMAGES_IDLE = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        ];
        currentImage = 0;
        world;



    constructor(){
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',)
        this.loadImages(this.IMAGES_IDLE);
        this.animateStatusbarHealth();
    };

    animateStatusbarHealth() {
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