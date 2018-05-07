"use strict";

var i = 99999;
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("Dopo loop: ", i); // 10

console.log("___________");

let t = 99999;
for (let t = 0; t < 10; t++) {
  console.log(t);
}
console.log("Dopo loop: ", t); // 99999

// var -> function scope
// let -> block scope
