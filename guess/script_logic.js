//variables
// punteggio, tentativi rimasti, numero ai
var score, guessRemaining, aiNum;

//functions

function reset() {
  // reset delle variabili allo stato iniziale
}

function start() {
  // call reset
  // call ai
}

function ai() {
  // ai sceglie un numero
  aiNum = Math.floor(Math.random() * 9) + 1;
  // se non ci sono piu tentativi rimasti
  // --- alert del risultato partita
  // --- call reset
  // altrimenti
  // --- prendi input da utente
  // --- se l'utente ha indovinato
  // --- --- aumenta il punteggio
  // --- altrimenti
  // --- --- niente, log
  // decrementa tentativi rimasti
  // call ai
}
