class Endboss extends MovableObject {
    IMAGES_IDLE = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]
    currentImage = 0;
    height = 350;
    width = 350;
    y = 95;
    constructor(){
        super().loadImage(this.IMAGES_IDLE[0])
        this.loadImages(this.IMAGES_IDLE);
        this.x = 700
        this.animateEndboss();
    }


    animateEndboss() {
        setInterval(() => {
// walk Animation
this.playAnimation(this.IMAGES_IDLE);
        }, 1000 / 2);

    }
    
}