class Character extends MovableObject {

    height = 300;
    speed = 5;
    y = 130;
    IMAGES_IDLE = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
        ];
        currentImage = 0;
        world;

    constructor(){
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png',)
        this.loadImages(this.IMAGES_IDLE);
        this.animateCharacter();
    };

    animateCharacter() {
        setInterval(() => {
            if (this.world.keyboard.D){
            this.x += this.speed;
            }

            if (this.world.keyboard.A){
                this.x -= this.speed;
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.D || this.world.keyboard.A) {
            // walk Animation
            let i = this.currentImage % this.IMAGES_IDLE.length; //let i = 0 % 6; =>0, Rest 0 |...| let i = 7 % 6; => 1, Rest 1
            //i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, ....
            let path = this.IMAGES_IDLE[i];
            this.img = this.imageCache[path];
            this.currentImage++;
            }
        }, 1000 / 20);

    }



    jump() {

    };
}