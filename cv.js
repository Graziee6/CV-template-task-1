"use strict";

const nameDiv = document.querySelector("#name");

const randomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) - min;
};

function randomColor(a = 0.6) {
  return `rgb(${randomNumbers(0, 132)}, ${randomNumbers(
    70,
    280 * a
  )}, ${randomNumbers(80, 300 * a)})`;
}

nameDiv.addEventListener("click", function () {
  const randomAppearance = randomColor();
  document.body.style.setProperty("--main-color", randomAppearance);
});
