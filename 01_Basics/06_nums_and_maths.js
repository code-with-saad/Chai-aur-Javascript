const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toFixed(2))


const convertToString = balance.toString()

// console.log(convertToString)
// console.log(typeof convertToString)

const secondNum = 123.8966

// console.log(secondNum.toPrecision(4))

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'))



// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

// console.log(Math)

// console.log(Math.abs(-4))
// console.log(Math.abs(4))

// console.log(Math.round(4.3))
// console.log(Math.round(4.6))

// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.8))

// console.log(Math.min(4, 8, 2, 5, 6,))
// console.log(Math.max(4, 8, 2, 5, 6,))

// console.log(Math.random())
// console.log((Math.random()*10) + 1)

// console.log(Math.round((Math.random()*5) + 1))

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min) + min))
// console.log(Math.floor(Math.random() * ((max - min) + min) + 1))
