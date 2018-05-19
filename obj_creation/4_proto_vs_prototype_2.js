function Person () {}

Person.prototype.talk = function () {
  console.log('I am a person')
}

Person.prototype.legNumber = 2

let mario = new Person()

mario.talk()
console.log(mario.legNumber)

// prototype esiste solo per le function
// e serve solo a fare new

// tutti gli oggetti hanno __proto__
let x = {}
console.log(x.__proto__ === Object.prototype) // true
