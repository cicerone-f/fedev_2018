let dog = {
  name: 'ciccio',
  talk: function () {
    console.log(this.name)
  }
}

let talkFunction = dog.talk
talkFunction() // undefined
let boundTalkFunction = talkFunction.bind(dog)
boundTalkFunction()
