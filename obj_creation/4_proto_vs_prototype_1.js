// open console chrome

let dog = {
  category: 'animals'
}

let myDog = {
  name: 'ciccio'
}

Object.setPrototypeOf(myDog, dog)

// myDog.name
// myDog.category

console.log(myDog.__proto__) // { category: 'animal' }

// non é una copia ma una referenza!!
// infatti se cambio dog

dog.size = 'large'
myDog.__proto__
console.log(myDog.__proto__)
// {
//   category: 'animals',
//   size: 'large'
// }
