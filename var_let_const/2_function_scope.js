function counter() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("Dentro counter: ", i);
}
counter();

console.log("Fuori counter: ", i);
