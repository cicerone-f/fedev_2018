//variables
var score, guessRemaining, aiNum;

//functions

function reset() {
  score = 0;
  guessRemaining = 5;
  console.log("Reset...");
  console.log("score: ", score);
  console.log("guessRemaining: ", guessRemaining);
}

function start() {
  reset();
  ai();
}

function ai() {
  aiNum = Math.floor(Math.random() * 9) + 1;
  if (guessRemaining == 0) {
    alert("Your score: " + score + " out of 5");
    reset();
  } else {
    var n = prompt("shot!");
    if (n == aiNum) {
      score++;
      console.log("Correct Make a new guess.");
    } else {
      console.log("Wrong Make a new guess.");
    }
    guessRemaining--;
    ai();
  }
}
