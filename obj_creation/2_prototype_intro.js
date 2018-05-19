function talk () {
  console.log(this.sound)
}

let animal = {
  talk: talk // solo talk
}

let cat = {
  sound: 'miao!'
}

// cat.talk() // is not a function

Object.setPrototypeOf(cat, animal)
cat.talk()

// this di talk é cat e non animal

let bigCat = {
  talk: function () {
    console.log(this.sound.toUpperCase())
  }
}

// bigCat.talk() // Cannot read property 'toUppercase' of undefined

Object.setPrototypeOf(bigCat, cat)

bigCat.talk()
