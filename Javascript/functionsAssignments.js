//Task 1: Write a function to add two numbers and return the result.
console.log("------------------------------------------------")
function sum(a,b)
{
    return a+b
}
let result = sum(3,3)
console.log("Sum of two numbers: " + result)
console.log("------------------------------------------------")

//Task 2: Write a function to check whether a given number is even or odd. //Always remember number%2===0
console.log("------------------------------------------------")
let number = 342

function checkNumber()
{
    if(number%2===0)
    {
        console.log("Even")
    }else{
        console.log("Odd")
    }
}

checkNumber()
console.log("------------------------------------------------")

//Task 3: Write a function to find the largest number among three numbers.
console.log("------------------------------------------------")
let x = 1000
let y = 272432
let z = 556

function findLargeNumber()
{
    if(x>=y && x>=z)
    {
        console.log("X is highest: " + x)
    }
    else if(y>=x && y>=z)
    {
        console.log("Y is highest: "+ y)
    }
    else if(z>=x && z>=y)
    {
        console.log("Z is highest: " + z)
    }
    else{
        console.log("Invalid Number")
    }
}
findLargeNumber()
console.log("------------------------------------------------")

//Task 4: Write a function to reverse a given string. // Refered Online. Always go with for loop with reverse variable.
console.log("------------------------------------------------")
let name = "Praveen"
let reverse = ""

function stringreverse(name){
    for(let i = name.length - 1; i>=0 ; i--)
    {
        reverse += name[i]
    }
    return reverse
}
console.log("Reversed String: " + stringreverse(name))
console.log("------------------------------------------------")

//Task 5: Write a function to check whether a string is a palindrome.
console.log("------------------------------------------------")
function checkPalindrome(str) {
    str = str.toLowerCase();

    let strreverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        strreverse += str[i];
    }

    if (str === strreverse) {
        console.log("Given string is Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}

checkPalindrome("Madam");
console.log("------------------------------------------------")

//Task to do:
	// •	Write a function to calculate the factorial of a number.
	// •	Write a function to count the number of vowels in a string.
	// •	Write a function to find the sum of all elements in an array.
	// •	Write a function to check whether a number is prime or not.
	// •	Write a function to convert Celsius temperature to Fahrenheit.

console.log("------------------------------------------------")

//sample try:
console.log("------------------------------------------------")
let strname = "Sara"

function rev()
    {
        let revs = ""
        for(let i = strname.length - 1 ; i>=0 ; i--) // 4-1 ; 3>=0 ; 
        {
            revs+=strname[i] // 
        }
        
        return revs
    }

console.log(rev())
console.log("------------------------------------------------")
