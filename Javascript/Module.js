/* 
A module is a JavaScript file that contains reusable code 
(variables, functions, classes, objects) that can be shared with other files.

Instead of writing everything in one file, we split the code into multiple files.

Why do we use modules?
Code reusability
Better organization
Easy maintenance
Avoid duplicate code
Separation of concerns

Where are modules used in Playwright?

Modules are used throughout a Playwright project:

    1. Page Object Model (POM) classes (e.g., LoginPage.ts)
    2. Utility/helper functions
    3. Test data files
    4. Constants and configuration
    5. Test files (*.spec.ts) that import and use those modules

| Question                  | Short Answer                                       |
| ------------------------- | -------------------------------------------------- |
| What is a module?         | A reusable JavaScript file.                        |
| Why use modules?          | Code reuse and organization.                       |
| What is `export`?         | Shares code with other files.                      |
| What is `import`?         | Uses code from another file.                       |
| Named export?             | Multiple exports using `{}`.                       |
| Default export?           | One export without `{}`.                           |
| Multiple default exports? | ❌ No                                               |
| Multiple named exports?   | ✅ Yes                                              |
| `import * as`?            | Imports all named exports as one object.           |
| `as` keyword?             | Renames an export or import.                       |
| Curly braces `{}`?        | Used for named imports.                            |
| Playwright usage?         | POM, utilities, test data, config, and test files. |

*/

//Variable: Created variable and called in ModuleTest.js file.
export const pi = 3.14

//EX 1: Created function and call this from ModuleTest.js file.
export function login(username, password)
{
    if(username === "Admin" && password === "1234")
    {
        console.log("Login success")
    }
    else
    {
        console.log("Login Failed")
    }
}

//EX 2: Created function add, called in ModuleTest.js file.
export function add(a,b)
{
    return a+b
}

//Array - Created Array and used this in ModuleTest.js file.
export let empNames = ["Praveen", "Sara", "Dani", "Sowmi"]

//Object - Created and used this in ModuleTest.js file.
export let person = {
    name: "Praveen",
    age: 31,
    company: "Capgemini"
}

//classes - Created Classed and used this in ModuleTest.js file.

export class Employee
{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    displayEmployeeDetails()
    {   
        console.log(`Name:` , this.name)
        console.log(`ID:` , this.id)
    }
}

//Defualt export

export default function sub(x,y)
{
    console.log(x-y)
}

export function multiply(c, d)
{
    console.log(c*d)
}   