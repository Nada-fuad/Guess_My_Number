"use strict";

const message = document.querySelector(`.message`);
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const score = document.querySelector(`.score`);
const body = document.querySelector(`body`);
const highscore = document.querySelector(`.highscore`);
const again = document.querySelector(`.again`);

let scoreNum = 20;
let high = 0;

//Random number between 1 and 20.

const secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (result) {
  message.textContent = result;
};

const play = function () {
  const guess = +document.querySelector(`.guess`).value;

  if (scoreNum > 1) {
  }
  if (!guess) {
    displayMessage(`⛔ No Number`);
  } else if (guess === secretNumber) {
    number.textContent = secretNumber;
    displayMessage(`🎉 Correct Number`);
    body.style.backgroundColor = `teal`;
    number.style.width = `30rem`;

    if (scoreNum > high) {
      high = scoreNum;
      highscore.textContent = high;
    }
  } else if (guess > secretNumber && scoreNum > 1) {
    scoreNum--;

    displayMessage(`📈 To high!`);
    score.textContent = scoreNum;
  } else if (guess < secretNumber && scoreNum > 1) {
    scoreNum--;
    displayMessage(`📉 To low!`);
    score.textContent = scoreNum;
  } else {
    displayMessage(`💥You lost the game!`);
    score.textContent = scoreNum;
    body.style.backgroundColor = `red`;
  }
};
//Chek button
check.addEventListener(`click`, play);
//Again button
again.addEventListener(`click`, function () {
  document.querySelector(`.guess`).value = ``;
  score.textContent = 20;
  body.style.backgroundColor = `#222`;
  displayMessage(`Start guessing...`);

  number.textContent = `?`;
  number.style.width = `15rem`;
});
