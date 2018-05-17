// real example https://plnkr.co/edit/UnEClvbn4gXbKKyb?open=lib%2Fscript.js

function talk () {
  console.log(this.sentence)
}

let dante = {
  sentence: 'Nel mezzo del cammin...'
}
dante.speak = talk.bind(dante)

let foo = dante.speak
foo() // Nel mezzo del cammin...
talk() // undefined

let talkBoundToDante = talk.bind(dante)
talkBoundToDante() // Nel mezzo del cammin...
// ma talk() resta undefined!!
talk() // undefined

// this non dipende dal context
// dove la funzione viene definita

// this dipende dal context
// dove la funzione viene invocata
