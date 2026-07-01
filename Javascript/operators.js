//Arithmetic Operator ==> (+, -, *, /, %)
//Assignment Operator ==> (= , += , -= , *= , /=, %=)
//Comparison Operator ==> (== , === , !=, !==, > , < , >= , <=)
//Logical Operator ==> (&&, ||)
//String Operator ==> Used for Concatenation
//Unary Operator ==> (++ , -- , Logical Not (!), Unary Plus +4 , Unary minus (-4))
//Ternary Operator ==> It is a shorthand of if..else ==> condition ? value1 : value2
//Typeof Operator ==> Returns the datatype
//instanceof Operator ==> Returns the object type.

//Comparison Operator:
//Double equal == Check only the value. Doesn't check datatypes.
//Triple equal === Check both value and its datatype. It is also called strict equal.

//Logical Operator: Helps to check the conditions.
//And (&&) Operator: Able to check more than 1 condition. All Condition must be true. If any one condition is false and then Result - false.
//OR (||) Operator: Any one is true then result will be true.

//Ternary Operator: Looks like if..else
//EX: Write a program to find given number is even or odd.
let number = 44
const result = 44%2 == 0 ? "Even" : "Odd"
console.log("Given Number is: " + result)

//Task 1: Take two number and perform - Arithmetic Operations.

console.log("------------------------------------------------")

let a = 12
let b = 7
let addition = a + b
console.log("Two Numbers added: " + addition)

let x = 20
let y = 5
let modulus = x % y
console.log("Two Numbers modulus: " + modulus)

//The modulus operator (%) returns the remainder after dividing one number by another.
// 20 / 5 = 4 reminder is 0.

console.log("------------------------------------------------")

//Task 2: Write a program which number is greater between two.

console.log("------------------------------------------------")

let m = 200
let n = 95
if(m>n){
    console.log("Greater Number is: " + m)
} else {
    console.log("Greater Number is: " + n)
}

console.log("------------------------------------------------")

//Task 3: Check whether a given number is: if(c%2 == 0). Even or odd (using modulus operator)

console.log("------------------------------------------------")

let c = 24240
if(c%2 == 0){
    console.log("Given number is Even")
}else {
    console.log("Given number is odd")
}

console.log("------------------------------------------------")

//Task 4: Use Comparison opertor to check == and ===

console.log("------------------------------------------------")

let q = 5
let r = "5"

console.log(q==r) //true - double equals check only the assigned value so true.
console.log(q===r) //false - triple equals check both value and its datatype so false.

console.log("------------------------------------------------")

//Task 5: Use Logical Operators to check, If a person is eligible to vote.

console.log("------------------------------------------------")

//And Operator
let age = 21
let citizen = "Indian"

if ((age>=21 && citizen == "Indian")){
    console.log("Eligible to vote.")
}else{
    console.log("Not eligible to Vote.")
}

//OR Operator
let Mark = 550

if ((Mark>=35 || Mark >= 95)){
    console.log("Pass")
}else{
    console.log("Fail")
}

console.log("------------------------------------------------")




