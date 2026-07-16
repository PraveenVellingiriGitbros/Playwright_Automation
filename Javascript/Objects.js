/* 
A JavaScript object is a collection of key–value pairs. 
The keys are called properties, and each property stores a value. Objects are used to group related data together.
*/

//Creating an object:
let person = { // This is called an object literal because you create the object directly using curly braces {}.
    name: "Praveen", // name is key & "Praveen" is a value
    age: 31,
    place: "Coimbatore",
    Marks: [90,78,90,87],  //Object can store a array
    address: {            //Objects can contain another Object (Nested Object)
        landmark: "Isha",
        pincode: 641026
    }
}
console.log(person)
console.log("------------------------------------------------")

//Accessing Object Properties - Two ways.
/* 
JavaScript provides two ways to access object properties:
1. Dot notation (object.property)
2. Bracket notation (object["property"])
 */

console.log("------------------------------------------------")
//1. Dot notation - Mostlt we use this.
console.log(person.name)
console.log(person.Marks)
console.log(person.Marks[0])
console.log(person.address.landmark)
console.log("------------------------------------------------")

//2. Bracket notation
console.log(person["name"])
console.log(person["Marks"])
console.log(person["Marks"][0])
console.log(person["address"]["landmark"])
console.log("------------------------------------------------")

//Bracket notation - 
//Use when the property name is dynamic (stored in a variable).
//Use when object property stored in variable.

let student = {
    name: "Adhvik",
    age: 6 ,
    place: "Coimbatore"
}

let a = "name"; //Use when object property stored in variable.
let b = "age"
console.log(student[a])
console.log(student[b])
console.log("------------------------------------------------")

//Adding, Updating and Deleting Object Properties.

//Adding properties
let cars = {
    company : "NEXA",
    modelname : "Fronx",
    color : "White",
}
cars.year = 2026
cars.registered = true
console.log(cars)

console.log("---------------")

//Update
cars.modelname = "Baleno"
console.log(cars)
console.log("---------------")

//delete
delete cars.color;
console.log(cars)
console.log("---------------")


//Object Methods (Functions Inside Objects)
/* 
A method is simply a function stored inside an object.
Property → Stores data (value)
Method → Stores a function (behavior)
*/
console.log("------------------------------------------------")
let college = {
    name: "VLB",
    courseName : "Information technology",
    fees : 14000,
    greetStudents : function () // Type 1 creating method with function keyword.
    {
        console.log("Welcome Students")
    },

    greetTeachers () // Type 2 of creating a method without function keyword.
    {
        console.log("Welcome Teachers")
    },

    display: function (){
        console.log(this.name, this.courseName) // this keyword checks for current object
    }
}

college.greetStudents()
college.greetTeachers()
college.display()
console.log("------------------------------------------------")

//Return all keys, all values and both entries.

console.log(Object.keys(person))

console.log("------------------------------------------------")

console.log(Object.values(person))

console.log("------------------------------------------------")

console.log(Object.entries(person))

console.log("------------------------------------------------")

//for in loop to get the person keys
for(let key in person) //key is a varaible.
{
    console.log(key)
}
console.log("------------------------------------------------")

//for in loop to get the person values
for(let key in person) //key is a varaible.
{
    console.log(person[key])
}
console.log("------------------------------------------------")

//for in loop to print both person key and values
for(let key in person) //key is a varaible.
{
    console.log(key, ":" , person[key])
}
console.log("------------------------------------------------")

//Object destructuring: 
/* 
Object destructuring is a way to extract values from an object and store them 
in variables.
Rule 1: Property name should match in destructure.
Rule 2: Wrong property names give undefined
 */



//Without destructuring:

let employee = {
    name : "Sara",
    id : 337378,
    place : "Bangalore"
}

let empname = employee.name // assigneed to variable - empname
let empid = employee.id // assigneed to variable - empid
let empplace = employee.place //// assigneed to variable - empplace

console.log(empname) //Printing using variable name empname.
console.log(empid) //Printing using variable name empid.
console.log(empplace) //Printing using variable name empplace.

console.log("------------------------------------------------")

//With destructuring
let user = {
    name1 : "admin", // name 1, name 2, name 2 is property.
    name2 : "testuser",
    name3 : "superuser"
}

let {name1,name2,name3} = user // The variable names must match the property names.

console.log(name1)
console.log(name2)
console.log(name3)
//Hence destructuring gives shorter and cleaner code.

console.log("------------------------------------------------")

//Renaming Variables in destructuring. 

const heros = {
    tamil : "Vijay",
    malayalam : "Mohanlal",
    telugu : "Maheshbabu"
}

const { 
    tamil : TAMIL, 
    malayalam : MALAYALAM , 
    telugu : TELUGU} = heros

console.log(TAMIL)
console.log(MALAYALAM)
console.log(TELUGU)

console.log("------------------------------------------------")

//Spread Operator:
let foodMenu = {
    veg : "Panneer",
    nonveg : "Chicken",
    drinks: "apple juice"
}

let updatedFoodMenu = {
    ...foodMenu, // Spread operator
    dessert : "ice cream"
}

let { veg, nonveg , drinks, dessert} = updatedFoodMenu

console.log(veg)
console.log(nonveg)
console.log(drinks)
console.log(dessert)

console.log("------------------------------------------------")

//Array of object
//An array that contains one or more objects.

//Creating a Array object:
let company = [

    {
        name: "Praveen",
        id: 337377,
        department : "Finance"
    },
    {
        name : "Pintoo",
        id : 1012001,
        department : "Finance"
    },

    {
        name: "Sara",
        id : 337378,
        department : "HR"
    },

    {
        name: "Adhvik",
        id : 30052005,
        department : "Infrastructure"
    }
]

console.log(company)

console.log("------------------------------------------------")

//Accessing a Array object.

//Type 1: Accessing object inside array
console.log(company[1]) // Accessed using index value.

console.log("------------------------------------------------")

//Type 2: Accessing property inside array
console.log(company[1].name)

console.log("------------------------------------------------")

//for of loop

for(let b1 of company)
{
    console.log(b1.name ,b1.id , b1.department)
}

console.log("------------------------------------------------")

//filter() Array method

console.log("-----FIlTER--------------------------------")
let finance = company.filter(x=>x.department === "Finance")
console.log(finance)

console.log("------------------------------------------------")

//find() Array method

console.log("------FIND------------------------------------")
let fi = company.find(x=>x.department === "Finance")
console.log(fi)

console.log("------------------------------------------------")

/* Above code explanation for Filter and find.
| Feature                   | `find()`                                             | `filter()`                                                          |
| ------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------- |
| **Returns**               | One object (e.g., `{ name: "Praveen", id: 337377 }`) | Array of objects (e.g., `[{ name: "Praveen" }, { name: "Pintoo" }]`) |
| **Number of matches**     | Returns only the **first** matching object           | Returns **all** matching objects                                    |
| **No match**              | `undefined`                                          | `[]` (empty array)                                                  |
| **Stops searching early** | ✅ Yes, stops after the first match                   | ❌ No, checks every element in the array                             |

 */

//map() - map() is used to create a new array by transforming every element of an existing array.

let xy = company.map(x=>x.name)
console.log(xy)

let yz = company.map(x=>x.id)
console.log(yz)

// Also learn - Assign() , freeze() , seal() - Object Methods.

