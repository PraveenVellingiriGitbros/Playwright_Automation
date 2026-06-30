//Variables - It is a container used to store a value.
//Keywords: var, let, const
//What is var? - It is used to declare the variable, reassign & re-declare.
//What is let? - It is used to declare the variable, re-assign the variable. But cannot be re-declare.
//if we try to re-declare let then will get Error Msg - Identifier is already declared.
//What is const? - It is used to store the fixed value. It is fixed. We can declare but cannot re-assign and re-declare.
//if we try to re-assign or re-declare - Error msg as - Assignment to constant variable.

//Why var is deprecated? - Due to re-declaration, if we use var in if condtion or for block. it can be accessible even inside the block.
        // if (true) {
        //     var message = "Hello";
        // }
        // console.log(message); // Hello
//Output: Hello
// var is avoided because:
        // - Function scoped
        // - Allows re-declaration
        // - Hoisting can cause bugs

//Scope for var - It is a Function scope. Can able to access inside and outside the block.
//Scope for let, const - Block level scope. We cannot the call the variable outside the block.
//if we try to print the let , const variable outside the block we will get undefined error.

//Hoisted: Variable is declared move to the top not the initialization.
//Var - Allows hoisted. - Error will not come instead shows undefined.
//let, const - If we do only declaration then we will get error. Cannot access "variable name" before initialization.
//Ex for var:
        //console.log(x)
        //let x = 3;
//Ex for Const:
        //console.log(a)
    //const a = "Praveen"


//Task 1:
//Declare variable to store - Student Name, Roll Number, Age & Is the student present today?
console.log("------------------------------------------------")
const studentname = "Praveen"
const rollnumber = 337377
let age = 30
let present = true

console.log("Student Name: "+studentname + " " 
    + "Roll Number: "+rollnumber + " "
    + "Age: "+age)

    if(present)
    {
    console.log("Student is present")
    }
else
    {
    console.log("student is absent")
    }

console.log("------------------------------------------------")

// Task 2: Create two variables a and b - Swap their value using a third variable.
let a = 2 // DECLARED & ASSINGED VALUE
let b = 4 // DECLARED & ASSINGED VALUE
let temp // ONLY DECLARED

console.log("Before Swap")
console.log("a value: "+ a)
console.log("b value: "+ b)
console.log(temp)

temp = a // ASSIGNED VALUE
a = b  // RE-ASSINGED VALUE FOR A
b = temp // RE-ASSINGED VALUE FOR B

console.log("After Swap")
console.log("a value: "+ a)
console.log("b value: "+ b)

console.log("------------------------------------------------")

//Task 3:  Declare the variable without assigning the value.
let name
console.log(name)
//Output: undefined
//Explanation: We should assign the value otherwise we will get undefined as output during runtime.

// const dateofbirth
// console.log(dateofbirth)
//Output: Missing initializer in const declaration.
//Explanation: We should assign the value for const variable always.

console.log("------------------------------------------------")

//Task 4: Store a fav color in variable and change it to another color.
let favcolor = "Green" // Declared and assigned
console.log(favcolor)
favcolor = "Black" // Here for same variable i have reassigned.
console.log(favcolor)

console.log("------------------------------------------------")

//Task 5: 
const schoolname = "MILTON"
console.log(schoolname)

// schoolname = "CSI"
// console.log(schoolname)
//Output: Assignment to constant variable.
//Explanation: Const is a fixed value we cannot re-assing with new value. EX: PI value - 3.14 remains same.

console.log("------------------------------------------------")