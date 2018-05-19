function Person (name) {
  this.name = name
}

Person.prototype.talk = function () {
  console.log('My name is: ', this.name)
}

// crea un oggetto
// setta il prototype
// esegue constructor col this
// fa return

var myNew = function (constructor) {
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype)
  constructor.call(obj, arguments[1])
  return obj
}

var mario = myNew(Person, 'Mario')
mario.talk()

// myNew != new
// solo 1 arg
// no edge case constructor return
