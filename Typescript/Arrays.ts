//Non-Primitive
//1. Array:

//Implicit Array: If we create a array without type(Means datatype is not provided) is called as Implicit Array
let numSample = [1,2,3,4]
let strSample = ["a","b","c"]
let boolSample = [true,false]

// numSample.push("x"); //Argument of type 'string' is not assignable to parameter of type 'number'.
// strSample.push(90); //Argument of type 'number' is not assignable to parameter of type 'string'.
// boolSample.push(67); //Argument of type 'number' is not assignable to parameter of type 'boolean'.


//Explicit Array: If we create array with type is called as Implicit Array
let names: string [] = ["Praveen","Sara","Adhvik"]
let score: number[] = [88,86,66,88]
let user: any[] = ["Praveen",90,67,"Sara"]

// names.push(67); //Argument of type 'number' is not assignable to parameter of type 'String'.

//Declare and Assign value

let sampleStr: string [];

// sampleStr.push("Praveen"); //Variable 'sampleStr' is used before being assigned.

// we need to declare the empty array before initalize the value to Array.
 sampleStr = []

 sampleStr.push("Praveen")
 console.log(sampleStr)


 //readonly

 let numReadonly: readonly number[] = [67,89,90]

// numReadonly.push(78); //Property 'push' does not exist on type 'readonly number[]'.

console.log("-----------------------------------------------------------------");

//2. Array of objects:

//Explicit way : Type is mentioned below.

type User = {
    username: string;
    password: string;
}

let users: User[] = 
[
    {
        username: "admin",
        password: "admin123"
    },
    {
        // username: 123, //Type 'number' is not assignable to type 'string'.
        username: "Manager",
        password: "manager123"
    }
];

console.log(users);