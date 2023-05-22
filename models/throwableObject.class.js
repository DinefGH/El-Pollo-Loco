class ThrowableObject extends MovableObject {
    IMAGES_IDLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ]

    currentImage = 0;
    y = 100
    height = 60

    constructor(){
        super().loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png')
        this.loadImages(this.IMAGES_IDLE);

        this.x = 200 + Math.random() * 2000; //Zahl zwischen 200 und 700 (random zahl zwischen 0 und 1)
        
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


    throw(x, y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 30);
        
    }
    
}

    