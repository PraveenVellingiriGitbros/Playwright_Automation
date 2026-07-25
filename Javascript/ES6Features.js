/* 
✅ let and const
✅ Arrow Functions
✅ Template Literals
✅ Default Parameters
✅ Rest & Spread Operators
✅ Destructuring
✅ Modules (import / export)
✅ Classes
✅ Promises
✅ for...of Loop - Iterate Array elements.
✅ for...in Loop - Iterate Object properties.
✅ Optional Chaining (?.)
✅ Nullish Coalescing (??)
*/

/* 1. ✅ let and const

My Understanding: 
let - declaration, assign value and re-assign the value
let name; // Declaration without value is allowed.
name = "Praveen" - Assigned with value
name = "Sara" - Reassigned value
name = "Adhvik" - Reassigned value.

scope: Block

Const - declaration must with value, only assign. re-assign not allowed.

const name; --> Not allowed
const name = "Praveen" - fixed value.
name = "Sara". --> Not allows

Scope: Block

Important:
when const variables are declared in object and array, 
We can modify the properties of an object and the elements of an array.

Ex: Object
const person = 
{
    name: "Praveen"
}

person.name = "Sara"

Ex: Array
const name = ["Praveen","Sara"]
name.push("Adhvik")
console.log(name)

 */

/* 
✅ Arrow Functions:

Normal function:
function greet()
{
    console.log("Hello Praveen")
    console.log("How are you?")
}

Convert to Arrow function: 
Below concept applicable only for normal function
1. function keyword not required. becuase this is anonymous function.
2. function name like greet() is not required
3. {} not rquired only if one statement.
4. {} required if multiple values inside the block.
5. Store in variable
6. add => symbol

let str = ()=>{console.log("Hello Praveen") ; console.log("How are you?")}
str ()

--------------------------------------------------------------------------------
function with parameter:
function add(a,b)
{
    return a+b;
}

let sum = add(4,5);
console.log(sum)

Converted to Arrow function:
1. function keyword is not required.
2. Arrow functions can accept parameters just like normal functions.
3. assinged to sum varaiable.
4. calling the function and storing result in another variable and printing the result.

Way 1: let sum = (a,b) => {return a+b;}
Way 2: let sum = (a,b) => a+b // ignored return and {} brackets.
let a = sum(4,5);
console.log(a)

*/

/* 
✅ Template Literals

let name = "Praveen"
let age = 31
let gender = "Male"

//regular way
console.log("My Name is " + name + " " + "and age is " + age + "," + " I am "+gender)

//Temlate literal way in ES6
console.log(`My name is ${name} and age is ${age}, I am ${gender}`)

console.log("Hello Praveen\nHow are you?\n"); //Prints in new line - Old Method.

New methods in ES6 - Template literals. Using tick symbol.
let msg = `Hello Praveen
How are you?
Hope you are doing good..`
console.log(msg)

*/

//✅ Default Parameters
console.log("---------------------------------------");

function add(a, b=20)
{
    console.log(a+b)
}

add(2)

console.log("---------------------------------------");
/* 
✅ Rest & Spread Operators
| Rest Operator                                  | Spread Operator                                                 |
| ---------------------------------------------- | --------------------------------------------------------------- |
| Collects multiple values into one array/object | Expands an array/object into individual elements                |
| Used in function parameters and destructuring  | Used when passing arguments, copying, or merging arrays/objects |

1. The rest operator collects all arguments into the names array.
function showNames(...names) {
    console.log(names);
}

showNames("Praveen", "Kumar", "Ravi");

Output:
["Praveen", "Kumar", "Ravi"]
--------------------------------------------------------------------
2. The spread operator expands the array into individual values.
const names = ["Praveen", "Kumar", "Ravi"];

console.log(...names);

Output:
Praveen Kumar Ravi
--------------------------------------------------------------------
*/
//Spread Operator
console.log("---------------------------------------");
let arr1 = [1,2,3]
let arr2 = [...arr1,4,5,6]
console.log(arr2)
console.log("---------------------------------------");



//Rest Operators - The rest parameter must always be the last parameter in a function.
//Ex: Using rest operator in Function.

console.log("---------------------------------------");
function students(firststudent, ...others)
{
    console.log(firststudent)
    console.log(others)
}

students("Praveen","Sara","Adhvik","Pinto")

/* Output:
Praveen
[ 'Sara', 'Adhvik', 'Pinto' ]
*/

console.log("---------------------------------------");
//Ex: Using rest operator in Array.

console.log("---------------------------------------");
let names = ["Praveen","Sara","Adhvik","Pinto","Ashwin"]

const [first,second,...others] = names

console.log(first);
console.log(second);
console.log(others);

/* Output:
Praveen
Sara
[ 'Adhvik', 'Pinto', 'Ashwin' ]
*/

console.log("---------------------------------------");
//Ex: Using rest operatos in Object.

console.log("---------------------------------------");
const family = {
    father: "Praveen",
    mother: "Sara",
    son: "Adhvik",
}

const {father , ...othermembers} = family
console.log(father,othermembers);
console.log("---------------------------------------");

//✅ Classes - This is main ES6 Feature came after 2015. constructor() is called automatically when an object is created using new.

console.log("---------------------------------------");
class Student 
{
    constructor(name,id)
    {
        this.name = name
        this.id = id
    }

    display()
    {
        console.log(`Name: ${this.name}`)
        console.log(`ID: ${this.id}`)
    }
}

const s1 = new Student("Praveen","337377")
s1.display()

console.log("---------------------------------------");
//✅ Promises - Introduced in 2015 to handle asynchronous operation. More effective than callback.

//✅ for...of Loop - Used in arry to iterate array elements.

console.log("---------------------------------------");

let cars = ["BMW","Audi","MG HECTOR","TATA"]

for(let a of cars)
{
    console.log(a);
}
console.log("---------------------------------------");

//✅ for...in Loop - Used to iterate object properties. Refered Family object.

console.log("---------------------------------------");
for (let key in family)
{
    console.log(key , ":" , family[key])
}

console.log("---------------------------------------");
//1. Optional Chaining (?.)
/* What is it?
Optional Chaining (?.) allows you to safely access properties or methods without 
throwing an error if an object is null or undefined.
 */

//EX:
console.log("---------------------------------------");
const empDetails = 
{
    name: "Praveen",
    id: "337377",
    department: "IT",
    address: null
}

//console.log(empDetails.address.city); // TypeError: Cannot read properties of null (reading 'city')
console.log(empDetails.address?.city); //Undefined
console.log("---------------------------------------");

/* 
2. Nullish Coalescing (??)
What is it?
The Nullish Coalescing Operator (??) provides a default
value only when the left side is null or undefined.
*/

//Ex 1:
console.log("---------------------------------------");
let name = "Praveen"
let age = null

console.log(age ?? "30")

console.log("---------------------------------------");
//Ex 2:
const response =
{
    name: "Praveen",
}

console.log(response.name)
console.log(response.email ?? "No Mail");
console.log("---------------------------------------");
