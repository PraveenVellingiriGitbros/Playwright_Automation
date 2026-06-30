//Datatypes in Javascript - Primitive and Non-Primitive
//Primitive - number, String, boolean, Bigint, null, undefined, Symbol
//Explanation: Symbol - It is a primitive datatype it is unique and immutable data.
//Non-Primitive - Object (includes Arrays, Functions, Dates, Maps, Sets, etc.)
//Javascript is a object oriented program language but not purely oop language.

//Task 1: Identify the datatype of the following.
console.log("------------------------------------------------")

console.log(typeof(100)) // number
console.log(typeof("Hello")) //string
console.log(typeof(true)) //boolean
console.log(typeof(null)) //object - it is historic bug, Because internally, JavaScript stored values using type tags, 000 denotes object.
console.log(typeof(undefined)) // undefined
console.log(typeof(10.5)) // number

console.log("------------------------------------------------")

//Task 2: Create one example for each datatype
//Primitive - number, string, boolean
console.log("------------------------------------------------")

let id = 337377
const ename = "Praveen"
let ispresent = true
console.log(id + " " + ename + " " + ispresent)

console.log("------------------------------------------------")

//Non-primitive - Class yet to start.

//Task 5: Convert a number stored as string into a number and add 10 to it.
console.log("------------------------------------------------")

let a = "20"
let b = Number(a)
console.log(b+10)

console.log("------------------------------------------------")
