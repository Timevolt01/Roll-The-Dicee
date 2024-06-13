document.getElementById("btn").addEventListener("click", roll);

let theRoll;

function roll() {
  setTimeout(rollTheDice, 1000);

  theRoll = setInterval(interval, 20);
}
function interval() {
  var RNumber1 = Math.random();
  var RNumber2 = Math.random();

  RNumber1 = RNumber1 * 6 + 1;
  RNumber2 = RNumber2 * 6 + 1;

  RNumber1 = Math.floor(RNumber1);
  RNumber2 = Math.floor(RNumber2);

  console.log(RNumber1);
  console.log(RNumber2);

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + RNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + RNumber2 + ".png");
}

function rollTheDice() {
  clearInterval(theRoll);

  var randomNumber1 = Math.random();
  var randomNumber2 = Math.random();

  randomNumber1 = randomNumber1 * 6 + 1;
  randomNumber2 = randomNumber2 * 6 + 1;

  randomNumber1 = Math.floor(randomNumber1);
  randomNumber2 = Math.floor(randomNumber2);

  console.log(randomNumber1);
  console.log(randomNumber2);

  document
    .querySelector(".img1")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document
    .querySelector(".img2")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏆";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
  }
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw !!!";
  } else {
    document.querySelector("h1").innerHTML;
  }
}
