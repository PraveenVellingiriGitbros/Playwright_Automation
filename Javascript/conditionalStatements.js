//Control Statements: Conditional, Looping, Jumping.

//1. Conditional Statements: 
//Simple if ==> Only IF block when condition is true then it will work.
//if..else ==> The condition is true execute if block. Condition is false then else block will execute.
//if..elseif or called as (ifelse..ladder) ==> To check Multiple condition.
//Nested if ==> One if block is decalred inside that one more if block is declared means Nested if. (condition kulla oru Condition)
//Switch Case ==> Helps to choose right option based on input given in program code.

//If else ladder or if..else if
//Task 1: Check whether number is postive, negative , zero

console.log("------------------------------------------------")

let a = -1

if(a>=1)
    {
        console.log("Positive")
    }
else if(a<0)
    {
        console.log("Negative")
    }
else
    {
        console.log("Zero")
    }

console.log("------------------------------------------------")

//Task 2: Write a program to display grade based on Marks

console.log("------------------------------------------------")

let Mark = 34

if(Mark>=90 && Mark<=100)
{
    console.log("O Grade")
}
else if(Mark>=75 && Mark<=89)
{
    console.log("A+ Grade")
}
else if(Mark>=50 && Mark<=74)
{
    console.log("A Grade")
}
else if(Mark>=35 && Mark<=49)
{
    console.log("B Grade")
}
else
{
    console.log("Work Hard")
}

console.log("------------------------------------------------")

//Task 3: Check given year is a leap year?

console.log("------------------------------------------------")
let year = 2020
if(year%4 == 0) // Remember: year % 4 gives the remainder. To check if a number is divisible by 4, you must compare the remainder to 0
{
    console.log("leap year")
}
else{
    console.log("Not a leap year")
}
console.log("------------------------------------------------")

//Task 4: Simple login validation program to verify login if username and password match - Login Successful. else "Invalid Credentials"

console.log("------------------------------------------------")
let username = "Admin"
let password = "123"
if(username === "Admin" && password === "123")
{
    console.log("Login Successful")
}
else{
    console.log("Invalid Credentials")
}
console.log("------------------------------------------------")

//Task 5: Switch case to print day name of the week by giving number (1 to 7)

console.log("------------------------------------------------")
let day = 7

switch(day)
{
    case 1:
        (console.log("Monday"));
        break;
    case 2:
        (console.log("Tuesday"));
        break;
    case 3:
        (console.log("Wednesday"));
        break;
    case 4:
        (console.log("Thursday"));
        break;
    case 5:
        (console.log("Friday"));
        break;
    case 6:
        (console.log("Saturday"));
        break;
    case 7:
        (console.log("Sunday"));
        break;
    default:
        (console.log("Wrong day"))
}
console.log("------------------------------------------------")

