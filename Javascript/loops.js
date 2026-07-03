//Control Statments:
//Looping - for loop, while loop and do while loop.
//For loop: When you know occurance or iteration how many times to repeat go with for loop.
//While loop: When you don't know how many times. "Keep doing this until something changes."
//do while loop: Run at least once. A do...while loop always executes the body before checking the condition.

//for loop:
//Initalization will be inside the loop. (ie) i=2
console.log("------------------------------------------------")
for(let i=2; i<=20; i+=2)
{
   console.log(i)
}

//Print odd num
for (let i = 1; i<=30; i+=2)
{
    console.log(i)
}
console.log("------------------------------------------------")

//While loop - Example - Wait until pageload. (We don't know when load will fully complete)
//Initalization will be outside the loop. (ie) i = 1
console.log("------------------------------------------------")
let i = 1

while(i<=5)
{
    console.log(i)
    i++
}
console.log("------------------------------------------------")

//do while loop
console.log("------------------------------------------------")
let a = 1
do
{
    console.log(a)
    a++
}while(a<=5)
console.log("------------------------------------------------")

//Example of ATM PIN using terminal input. 
console.log("------------------------------------------------")
const prompt = require("prompt-sync")(); // Allow the user to enter the value in terminal. (node install prompt-sync command to install it.)

let pin

do
{
    pin = prompt("Enter the ATM Pin: ")
}while(pin!=="1234")

console.log("Success")
console.log("------------------------------------------------")


// Task 1: Print number 1 to 10 using for loop
console.log("------------------------------------------------")
console.log("----------------for loop------------------------")
for(i=1; i<=10; i++)
{
    console.log(i)
}
console.log("----------------while loop----------------------")
let b = 1
while(b<=10)
{
    console.log(b)
    b++
}
console.log("------------------------------------------------")


//Task 2: Print multiplication table of a given number.
console.log("------------------------------------------------")
let number = 3

for(i=1; i<=10; i++)
{
    console.log(number*i)
    //3*1 = i is 3
    //3*2 = i is 6
    //same as above until 10
}
console.log("------------------------------------------------")

// Task 3: Print Sum of number from 1 to 100
console.log("------------------------------------------------")
let Sum = 0
for(i=1; i<=100; i++)
{
    Sum = Sum + i
}
console.log("Sum of 1 to 100 = " +Sum)
console.log("------------------------------------------------")


