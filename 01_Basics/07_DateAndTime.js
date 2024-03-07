// Dates

let myDate = new Date()
// Type of Date is Object


// console.log(myDate)
// Output: 2024-03-06T11:39:16.109Z

// console.log(myDate.toString())
// Output: Wed Mar 06 2024 16:37:55 GMT+0500 (Pakistan Standard Time)

// console.log(myDate.toDateString())
// Output: Wed Mar 06 2024

// console.log(myDate.toISOString())
// Output: 2024-03-06T11:39:16.109Z

// console.log(myDate.toJSON())
// Output: 2024-03-06T11:40:25.295Z

// console.log(myDate.toLocaleDateString())
// Output: 3/6/2024

// console.log(myDate.toLocaleString())
// 3/6/2024, 4:41:24 PM


// let myCreatedDate = new Date(2024, 1, 23)
// let myCreatedDate = new Date(2024, 1, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2024")

// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())
// console.log(newDate.getMonth() + 1) (+1) for not start with 0
console.log(newDate.getDay())

// `${newDate.getDay()} and the day is 4`

newDate.toLocaleString('default', {
    weekday: "long",
})