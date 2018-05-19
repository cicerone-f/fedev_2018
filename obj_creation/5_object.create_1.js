const person = {
  hello: function () {
    console.log('Hello my name is: ', this.name)
  }
}

const p1 = Object.create(person)
p1.name = 'Mario'
p1.hello()

const p2 = Object.create(person)
p1.name = 'Luca'
p1.hello()

console.log(person.isPrototypeOf(p1))

// perché esiste??
// é piu naturale di new rispetto al modello prototype
// Douglas Crockford
// JS the good part
// eslint

// mai usare setprototype direttamente
// performance
