/**
 * function to show the progressbar.
 *
 * @param {string} id - the id of the image from the progressbar
 * @param {string} class - the class of the image from the progressbar
 */

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
  document.getElementById("loadingScreenContainer").classList.add("displayNone");
  document.getElementById("buttonDescription").classList.remove("displayNone");
  document.getElementById("mobileButtonContainer").classList.add("displayFlex");
}

