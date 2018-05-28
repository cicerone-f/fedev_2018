class Car {
  constructor (name) {
    this.name = name
  }
}

const myCar = new Car('Fiat')

console.log(myCar)
console.log(JSON.stringify(myCar))
console.log(typeof myCar)
