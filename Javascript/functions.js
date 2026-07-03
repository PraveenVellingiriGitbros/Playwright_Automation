//What is funcation? - Function is a block of code that perform a specific code.
//Advantage: Code reuse, easy maintainance.
//Function types - void function , return function and arrow function.
// 1. Function without a Return (Void Function)
// Performs a task.
// Does not return a value.
// If you don't use return, JavaScript automatically returns undefined.


//Type 1: Fucntion without parameter
console.log("------------------------------------------------")
function greet() // function declaration
{
    console.log("Hello")
}

greet() //fucntion call
console.log("------------------------------------------------")

//Type 2: Function with parameter
console.log("------------------------------------------------")
function sum(a,b)
{
    console.log(a+b)
}

sum(2,2)
console.log("------------------------------------------------")

// 2. Function with Return
// Performs a task.
// Returns a value using the return keyword.
// The returned value can be stored in a variable or used elsewhere.

console.log("------------------------------------------------")
function add(x,y)
{
    return x+y
}

result = add(3,3)
console.log(result)
console.log("------------------------------------------------")

//Ex: Employee Salary with one time bonus
console.log("------------------------------------------------")
function Salary(basic,hra,allowance)
{
    return(basic+hra+allowance)
}
let netsalary = Salary(10000,3000,500)
let bonus = 15000
//Additionaly bonus added
let empsalary = netsalary + bonus
console.log("Employee Salary: " + empsalary)
console.log("------------------------------------------------")


//Ex:
function mobile(processor, model)
{
    return processor + " " + model
}
let d = mobile("MacOs","Apple")
console.log(d)

//anonymous Function: An anonymous function is a function without a name.
//Instead of giving the function a name, you store it in a variable or pass it directly as an argument.
//Syntax:
// function () { code }

//Below code explaination- Function name is not specified, so it is stored in variable called subraction.

let subraction = function (i,j)
{
    return i-j
}
console.log(subraction(10,6))