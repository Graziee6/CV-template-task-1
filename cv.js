"use strict";

const nameDiv = document.querySelector("#name");

const randomNumbers = (min, max) => {
  return Math.floor(Math.random() * (max - min) + 1) - min;
};

function randomColor(a = 0.5) {
  return `rgb(${randomNumbers(123, 132)}, ${randomNumbers(
    0,
    280 * a
  )}, ${randomNumbers(0, 300 * a)})`;
}

nameDiv.addEventListener("click", function () {
  const randomAppearance = randomColor();
  nameDiv.style.setProperty("--main-color", randomAppearance);
});
