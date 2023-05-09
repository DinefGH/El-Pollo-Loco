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
        walking_sound = new Audio('audio/running.mp3')



    constructor(){
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png',)
        this.loadImages(this.IMAGES_IDLE);
        this.animateCharacter();
    };

    animateCharacter() {
        setInterval(() => {
            if (this.world.keyboard.D && this.x < this.world.level.level_end_x){
            this.x += this.speed;
            this.otherDirection = false;
            // this.walking_sound.play();
            }

            if (this.world.keyboard.A && this.x > 0 ){
                this.x -= this.speed;
                this.otherDirection = true;
                // this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 150;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.D || this.world.keyboard.A) {
            // walk Animation
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000 / 20);

    }



    jump() {

    };
}