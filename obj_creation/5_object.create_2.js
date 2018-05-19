// ricostruiamo Object.create

const person = {
  hello: function () {
    console.log('Hello my name is: ', this.name)
  }
}

function ObjectDotCreate (proto) {
  const obj = {}
  obj.setPrototypeOf(proto)
  return obj
}

const p1 = ObjectDotCreate(person)
p1.name = 'Mario'
p1.hello()

const p2 = ObjectDotCreate(person)
p1.name = 'Luca'
p1.hello()

console.log(person.isPrototypeOf(p1))
