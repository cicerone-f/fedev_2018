// real example https://plnkr.co/edit/UnEClvbn4gXbKKyb?open=lib%2Fscript.js

let dog = {
  name: 'ciccio',
  talk: function () {
    console.log(this.name)
  }
}

let talkFunction = dog.talk
talkFunction() // undefined

// ma posso assegnare funzioni a variabili

// JavaScript = JAVA + SCHEME
// JAVA => OOP
// SCHEME => FP
// natura OO si scontra con natura Funzionale
