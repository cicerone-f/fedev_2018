class Car {
  constructor (name) {
    this.name = name
  }

  print () {
    console.log(this.name)
  }
}

const myCar = new Car('Fiat')

myCar.print() // Fiat

class Ferrari extends Car {
  constructor () {
    super('Ferrari')
  }
}

const myExpensiveCar = new Ferrari()
myExpensiveCar.print() // Ferrari
