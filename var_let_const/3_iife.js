(function() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Dentro IIFE: ", i);
})();
console.log("Fuori IIFE: ", i);

// Esempi IIFE
// https://ajax.googleapis.com/ajax/libs/threejs/r84/three.js
// https://code.jquery.com/jquery-3.3.1.js


// HOISTING
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting