// Premitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const outSideTemp = null
let userEmail;

// console.log(outSideTemp) // return => // object

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId) // return => // false

const bigNumber = 12435n

// console.log(typeof bigNumber) // return => // BigInt



// Reference ( Non Premitive )

// Array, Objects, Functions


const heroes = ['IronMan', 'Thor', 'Captain America', 'SpiderMan', 'Hulk', 'BlackPanther']

const myObj = {
    username: "KingSaad",
    realname: "Saad Kashif",
    inGameName: "NexusForReal",
    age: 16
}

const myFunction = function(){
    console.log("hello world")
}


// console.log(typeof myFunction) // return => // function

// console.log(typeof heroes) // return => // object




// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Memory:

// Stack (Premitive Datatypes use Stack Memory) 
// Heap (Non Premitive Datatypes use Heap Memory)

// suppose

let myYoutubename = "code-with-saad"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(anotherName)
console.log(myYoutubename)

let userOne = {
    email: "user@google.com",
    easypaisa: "user "
}

let userTwo = userOne
userTwo.email = "user123@google.com"
console.log(userOne.email)
console.log(userTwo.email)