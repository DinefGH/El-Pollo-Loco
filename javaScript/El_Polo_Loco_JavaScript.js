let keyboard = new Keyboard();


/**
 * Start the game and show the loadscreen with the startbutton
 * 
 * @param {string} id - The ID of the start button.
 * @param {string} id - The ID of the canvas
 */
function startGame() {
  document.getElementById("startScreenContainer").classList.add("displayNone");
  document.getElementById("canvas").classList.remove("displayNone");
  progressAnimate();
  document.getElementById("loadingScreenContainer").classList.remove("displayNone");
  initLevel();
  init();
  setVariableToFalse(startGameVar);
}


function setVariableToFalse(startGameVar) {
  startGameVar = false;
}


/**
 * Shows the infobox
 * 
 * @param {string} id - The ID of the info button.
 * @param {string} id - The ID of the infobox.
 */
function startInfo() {
  document.getElementById("infoContainer").classList.remove("displayNone");
  document.getElementById("startButton").classList.add("displayNone");
  document.getElementById("infoButton").classList.add("displayNone");
}

/**
 * Closes the infobox
 * 
 * @param {string} id - The ID of the info button.
 * @param {string} id - The ID of the infobox.
 */
function closeInfo() {
  document.getElementById("infoContainer").classList.add("displayNone");
  document.getElementById("startButton").classList.remove("displayNone");
  document.getElementById("infoButton").classList.remove("displayNone");
}



/**
 * Initials the canvas and start the control functions.
 * 
 * @param {string} id - The ID of the canvas.
 */
function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  keyboardPressEvents();
  buttonsPressEvents();
}


/**
 * Restart the game.
 * 
 */
function restartGame() {
  location.reload();
}


/**
 * Initials the control functions.
 * 
 * @param {string} id - The ID of the control buttons.
 */
function buttonsPressEvents() {
  document.getElementById('buttonLeft').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.A = true;
  });

  document.getElementById('buttonLeft').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.A = false;
  });

  document.getElementById('buttonRight').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById('buttonRight').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.D = false;
  });

  document.getElementById('buttonJump').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.W = true;
  });

  document.getElementById('buttonJump').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.W = false;
  });

  document.getElementById('buttonThrow').addEventListener('touchstart', (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById('buttonThrow').addEventListener('touchend', (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });
}


/**
 * Initials the control functions.
 * 
 * @param {string} id - The ID of the keyboard buttons.
 */
function keyboardPressEvents() {
  window.addEventListener("keydown", (e) => {
    if (e.keyCode == 68) {
      keyboard.D = true;
    }
    if (e.keyCode == 65) {
      keyboard.A = true;
    }
    if (e.keyCode == 87) {
      keyboard.W = true;
    }
    if (e.keyCode == 83) {
      keyboard.S = true;
    }
    if (e.keyCode == 32) {
      keyboard.SPACE = true;
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.keyCode == 68) {
      keyboard.D = false;
    }
    if (e.keyCode == 65) {
      keyboard.A = false;
    }
    if (e.keyCode == 87) {
      keyboard.W = false;
    }
    if (e.keyCode == 83) {
      keyboard.S = false;
    }
    if (e.keyCode == 32) {
      keyboard.SPACE = false;
    }
  });
}

