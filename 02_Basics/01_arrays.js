// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeroes = ["IronMan", "Thor", "SpiderMan"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1])
// console.log(myHeroes)
// console.log(myArr2)

// ++++++++++++++++++++++++++ Array Methods ++++++++++++++++++++++++++

// myArr.push(6)           // adds element in last
// myArr.push(7)          // adds element in last
// myArr.pop()           // remove element from last doesnt need any arguements

// myArr.unshift(9)     // adds element in start but not good optimization
// myArr.shift()       // remove element from start



// console.log(myArr.includes(9)) 
// searches that the value is in array or not gives answer in boolean

// console.log(myArr.indexOf(2))
// search the index of the value if its not present gives result as -1

// const newArr = myArr.join()
// Adds all the elements of an array into a string

// console.log(myArr)
// console.log(newArr)


// ++++++++++++++++++++++++++ slice, splice ++++++++++++++++++++++++++

console.log("A ", myArr)

const myNewArr = myArr.slice(1, 3)
// Returns a copy of a section of an array

console.log(myNewArr)
console.log("B ", myArr)


const myNewArr2 = myArr.splice(1, 3)
// Removes elements from an array

console.log(myNewArr2)
console.log("C ", myArr)