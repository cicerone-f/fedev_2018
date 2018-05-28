class Car {
  // no private
  constructor (name) {
    this.name = name
  }

  print () {
    console.log(this.name)
  }
}

const myCar = new Car('Fiat')
myCar.name = 'potatoes'
myCar.print()

// this._name    just a convention

// why no private ??

// JS does NOT have CLASSES!!

// new , function, fake class

// es6 class is the same

console.log(typeof Car)
console.log(typeof myCar)

Car.prototype.print()

Car.prototype.print.bind({ name: 'foooo' })()

console.log(Car.prototype.isPrototypeOf(myCar))
