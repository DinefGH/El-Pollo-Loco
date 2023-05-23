class ThrowableObject extends MovableObject {
    IMAGES_IDLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    currentImage = 0;
    height = 60

    constructor(x, y){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png')
        this.loadImages(this.IMAGES_IDLE);
        this.x = x;
        this.y = y+80;
        
        this.animateBottles();
        this.throw();
        console.log(this.x);
    }


    animateBottles() {
        setInterval(() => {
// walk Animation
this.playAnimation(this.IMAGES_IDLE);
        }, 1000 / 10);   

    }


    throw() {
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 30);
        
    }
    
}

    