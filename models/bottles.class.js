class Bottles extends MovableObject {
    IMAGES_IDLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ]


    currentImage = 0;
    y = 180
    height = 60

    constructor(){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png')
        this.loadImages(this.IMAGES_IDLE);

        this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700 (random zahl zwischen 0 und 1)
        
        this.animateBottles();
    }


    animateBottles() {
        setInterval(() => {
// walk Animation
this.playAnimation(this.IMAGES_IDLE);
        }, 1000 / 2);

    }
    
}