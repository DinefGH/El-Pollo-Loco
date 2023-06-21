
let keyboard = new Keyboard();




function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
        // for (let i = 1; i < 9999; i++) window.clearInterval(i);  
    console.log('My Character is', world.character);
}


  

   function startGame() {
    document.getElementById('startScreenContainer').classList.add('displayNone');
    document.getElementById('canvas').classList.remove('displayNone');
    // for (let i = 1; i < 9999; i++) window.setInterval(i);
   }

   function startInfo() {
    document.getElementById('infoContainer').classList.remove('displayNone');
    document.getElementById('startButton').classList.add('displayNone');
    document.getElementById('infoButton').classList.add('displayNone');
   }

   function closeInfo() {
    document.getElementById('infoContainer').classList.add('displayNone');
    document.getElementById('startButton').classList.remove('displayNone');
    document.getElementById('infoButton').classList.remove('displayNone');
   }





window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
        keyboard.D = true
    }
    if (e.keyCode == 65) {
        keyboard.A = true
    }
    if (e.keyCode == 87) {
        keyboard.W = true
    }
    if (e.keyCode == 83) {
        keyboard.S = true
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
        keyboard.D = false
    }
    if (e.keyCode == 65) {
        keyboard.A = false
    }
    if (e.keyCode == 87) {
        keyboard.W = false
    }
    if (e.keyCode == 83) {
        keyboard.S = false
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false
    }
});




