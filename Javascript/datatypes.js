//Datatypes in Javascript - Primitive and Non-Primitive
//Primitive - number, String, boolean, Bigint, null, undefined, Symbol
//Explanation: Symbol - It is a primitive datatype it is unique and immutable data. Mostly used in devlopment.
//EX of symbol datatype - Here below show id1 equal id2 but result will be false.
//..Because id1 is stored in one address location and id2 is stored in another location.
let id1 = Symbol("ADMIN") 
let id2 = Symbol("ADMIN")
console.log(id1==id2) // Result = False.
//Non-Primitive - Object (includes Arrays, Functions, Dates, Maps, Sets, etc.)
//Javascript is a object oriented program language but not purely object oriented programming language.

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
//Primitive - number, string, boolean, undefined, null, Bigint
console.log("------------------------------------------------")

let id = 337377 // number
const ename = "Praveen" // String
let ispresent = true // Boolean
let phonenumber //Undefined
let address = null //null
let registernumber = 988453543543543645n //Bigint
console.log(id)
console.log(ename)
console.log(ispresent)
console.log(phonenumber)
console.log(address)
console.log(registernumber)

console.log("------------------------------------------------")

//Non-primitive - Class yet to start.

//Task 5: Convert a number stored as string into a number and add 10 to it.
console.log("------------------------------------------------")

let a = "20"
let b = Number(a)
console.log(b+10)

console.log("------------------------------------------------")