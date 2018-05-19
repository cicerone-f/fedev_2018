// variables
// punteggio, tentativi rimasti, numero ai
var score, guessRemaining, aiNum

// functions

function reset () {
  // reset delle variabili script allo stato iniziale
  // reset della ui allo stato iniziale
}

function ai () {
  // ai sceglie un numero
  aiNum = Math.floor(Math.random() * 9) + 1
}

function user (n) {
  // UI mostra n in 'user-number'
  if (n == aiNum) {
    // incrementa score
    // UI mostra 'Correct Make a new guess.' in 'msg'
  } else {
    // UI mostra 'Wrong Make a new guess.' in 'msg'
  }
  // decrementa guessRemaining
  displayResult()
}

function displayResult () {
  // UI mostra aiNum in 'ai-number'
  // UI mostra score in 'score'
  // UI mostra guessRemaining in 'guess-remaining'

  if (guessRemaining == 0) {
    // UI mostra 'Your score: 2 out of 5 Click RESET to play again.' in 'result'
  } else {
    ai()
  }
}
