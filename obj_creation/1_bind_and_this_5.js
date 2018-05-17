function talk () {
  console.log(this.sentence)
}

let dante = {
  speak: talk,
  sentence: 'Nel mezzo del cammin...'
}

let totti = {
  yell: dante.speak,
  sentence: 'Forza Roma!!'
}

dante.speak() // 'Nel mezzo del cammin...'
totti.yell() //  'Forza Roma!!'

// real example https://plnkr.co/edit/UnEClvbn4gXbKKyb?open=lib%2Fscript.js
