// dove mettiamo la logica del costruttore?

const person = {
  init: function (sound, name) {
    this.sound = sound
    this.name = name
    return this
  },
  hello: function () {
    console.log(`${this.sound} my name is: ${this.name}`)
  }
}

const p1 = Object.create(person).init('Hi', 'Mario')
p1.hello()
