
let keyboard = new Keyboard();




function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    console.log('My Character is', world.character);
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




