// Type Alias - Creates a custom name for an existing type.
// It can be used with primitive types, arrays, objects, unions, tuples, and functions.

//Primitive type

//Regular Way:
// let mname: string = "Praveen";
// let mage: number = 31;
// let isActive:boolean = true;

//Using TypeAlias in variable datatypes.
type Username = string;
type Age = number;
type YesOrNo = boolean;

let mname: Username = "Praveen";
let mage: Age = 31;
let isActive:YesOrNo = true;

//Array:

//Regular way.
// let fruit: string [] = ["Mango","Apple"]


//Using TypeAlias - Array
type Fruit = string[];

let fruit: Fruit = ["Apple","Banana"]

//Object

//Regular way
// let users = {
//     fname: "Pravee",
//     lname: "Vellingiri",
//     age: 30
// }

//Using TypeAlias as UserDetails.
type UserDetails = {
    fname: string;
    lname: string; 
    age:number;
}

let users: UserDetails = {
    fname: "Praveen",
    lname: "Vellingiri",
    age: 31
}

//Union with TypeAlias.

type StrOrNum = string | number

let a : StrOrNum = 90
a = "Praveen"
// a = true //Type 'boolean' is not assignable to type 'StrOrNum'.

//Tuple in Named Tuple

//Regular Named Tuple way.
let tuple: [Username: string, Age: number] = ["Praveen", 31];

//Using TypeAlias
type UserValue = [uname:string,uage:number];

let tupleUse: UserValue = ["Sara",31]
