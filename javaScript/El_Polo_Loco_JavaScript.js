let keyboard = new Keyboard();

function startGame() {
  document.getElementById("startScreenContainer").classList.add("displayNone");

  document.getElementById("canvas").classList.remove("displayNone");
  // for (let i = 1; i < 9999; i++) window.setInterval(i);
  progressAnimate();
  document
    .getElementById("loadingScreenContainer")
    .classList.remove("displayNone");
  initLevel();
  init();
  setVariableToFalse(startGameVar);
  // location.replace('http://127.0.0.1:5500/El_Pollo_Loco_index.html')
}

function setVariableToFalse(startGameVar) {
  startGameVar = false;
  console.log("startGameVar", startGameVar);
}

function startInfo() {
  document.getElementById("infoContainer").classList.remove("displayNone");
  document.getElementById("startButton").classList.add("displayNone");
  document.getElementById("infoButton").classList.add("displayNone");
}

function closeInfo() {
  document.getElementById("infoContainer").classList.add("displayNone");
  document.getElementById("startButton").classList.remove("displayNone");
  document.getElementById("infoButton").classList.remove("displayNone");
}

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  // for (let i = 1; i < 9999; i++) window.clearInterval(i);
  console.log("My Character is", world.character);
  console.log("TRUE", `${percent}`);
}

function progressAnimate() {
  progressAnimate00(), setTimeout(progressAnimate10, 500);
  setTimeout(progressAnimate20, 650);
  setTimeout(progressAnimate30, 800);
  setTimeout(progressAnimate40, 950);
  setTimeout(progressAnimate50, 1100);
  setTimeout(progressAnimate60, 1250);
  setTimeout(progressAnimate70, 1400);
  setTimeout(progressAnimate80, 1550);
  setTimeout(progressAnimate90, 1600);
  setTimeout(progressAnimate100, 1750);
}

function progressAnimate00() {
  document.getElementById("progress0").classList.remove("displayNone");
}

function progressAnimate10() {
  document.getElementById("progress0").classList.add("displayNone");
  document.getElementById("progress10").classList.remove("displayNone");
}

function progressAnimate20() {
  document.getElementById("progress10").classList.add("displayNone");
  document.getElementById("progress20").classList.remove("displayNone");
}

function progressAnimate30() {
  document.getElementById("progress20").classList.add("displayNone");
  document.getElementById("progress30").classList.remove("displayNone");
}

function progressAnimate40() {
  document.getElementById("progress30").classList.add("displayNone");
  document.getElementById("progress40").classList.remove("displayNone");
}

function progressAnimate50() {
  document.getElementById("progress40").classList.add("displayNone");
  document.getElementById("progress50").classList.remove("displayNone");
}

function progressAnimate60() {
  document.getElementById("progress50").classList.add("displayNone");
  document.getElementById("progress60").classList.remove("displayNone");
}

function progressAnimate70() {
  document.getElementById("progress60").classList.add("displayNone");
  document.getElementById("progress70").classList.remove("displayNone");
}

function progressAnimate80() {
  document.getElementById("progress70").classList.add("displayNone");
  document.getElementById("progress80").classList.remove("displayNone");
}

function progressAnimate90() {
  document.getElementById("progress80").classList.add("displayNone");
  document.getElementById("progress90").classList.remove("displayNone");
}

function progressAnimate100() {
  document.getElementById("progress90").classList.add("displayNone");
  document
    .getElementById("loadingScreenContainer")
    .classList.add("displayNone");
}

function restartGame() {
  location.reload();
}

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
