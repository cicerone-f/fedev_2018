"use strict";
var i = 99999;
(function() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Dentro IIFE: ", i);
})();
console.log("Fuori IIFE: ", i);
