//Regular Imports
// import { empNames, pi , person} from '../Javascript/Module.js'
// import {login} from '../Javascript/Module.js'
// import {add} from '../Javascript/Module.js'
// import { Employee } from '../Javascript/Module.js';

//Below way is named exports - Using name like below empNames, pi ....
import {empNames, pi , person, login , add, Employee} from '../Javascript/Module.js'

//Below way is default export. Dont need {} - Only one default is allowed to import.
import sub from '../Javascript/Module.js';

// import multiply - Unable to import because only one default is allowed to import.

//Variable pi imported and used below.
console.log("---------------------------");
function findRadius(r)
{
    return pi*r*r
}
let answer = findRadius(4)
console.log(`Radius value is` , answer)

console.log("---------------------------");

//Ex 1: function login imported and used below
login("Admin","1234")

console.log("---------------------------");

//Ex 2: function add imported and used below
let result = add(10,20)
console.log(result)

console.log("---------------------------");


//Array Method - to add element at last and printed.
empNames.push("Advik")
console.log(empNames)
console.log("---------------------------");

//Object called here
console.log(person)
console.log("---------------------------");

//Object for...of loop
for(let key in person)
{
    console.log(key + ": " + person[key])
}
console.log("---------------------------");

//Class employee is calling here by creating an object

let d = new Employee("Praveen","337377")
d.displayEmployeeDetails()

console.log("---------------------------");

//default export example- Called in ModuleTest.js file.
sub(10,7)
console.log("---------------------------");


//Instead of import like bellow
//import {empNames, pi , person, login , add, Employee} from '../Javascript/Module.js'

//Using * as moduleName
import * as myModule from '../Javascript/Module.js'

//While using it we need use like below - Refering class example. modulename.classname
let emp = new myModule.Employee("Sara","337378")
emp.displayEmployeeDetails()
console.log("---------------------------");

//We can able to rename the import functions, variable, objects. Below is rename function name.

import { multiply as multiplication } from '../Javascript/Module.js';

multiplication(5,5)
