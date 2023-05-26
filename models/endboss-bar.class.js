class EndbossBar extends DrawableObject {


        IMAGES_ENDBOSS_BAR = [
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png', // 0
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
            'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png', // 5
            ];
        
        IMAGES_ICON_ENDBOSS = [
            'img/7_statusbars/3_icons/icon_health_endboss.png'
        ];
            percentage = 0;
        
        
            constructor() {
                super();
                this.loadImages(this.IMAGES_ENDBOSS_BAR);
                this.loadImages(this.IMAGES_ICON_ENDBOSS);
                this.x = 70;
                this.y = 40;
                this.width = 200;
                this.height = 70;
                this.setPercentage(0);
            };
        
        
            //setPercentage(50);
            setPercentage(percentage) {
                this.percentage = percentage; // => 0 ... 5
                let path = this.IMAGES_COINS[this.resolveImageIndex()];
                this.img = this.imageCache[path];
            }
        
        
                resolveImageIndex() {
                    if (this.percentage == 100) {
                        return 5;
                    } else if (this.percentage == 80) {
                        return 4;
                    } else if (this.percentage == 60) {
                        return 3;
                    } else if (this.percentage == 40) {
                        return 2;
                    } else if (this.percentage == 20) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                        
            }
        