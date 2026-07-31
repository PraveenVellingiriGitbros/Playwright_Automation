/* 
Primitive types
    * string, number & boolean

Non-Primitive
    * Object (includes Arrays, Functions, Dates, Maps, Sets, etc.)
 */

//string:
//Way of declaration 
let empName = "Praveen"; // Implicit typing (Type Inference)
// empName = 90;   // ❌ Error: Type 'number' is not assignable to type 'string'
empName = "Sara"; // ✅ Allowed
console.log(empName);

let ename: string = "Sara"; // This is explicit typing.
// ename = 66 ;
ename = "Praveen"
console.log(ename);


let pname: string;

pname = "Adhvik";
pname = "Pintoo";
// pnmae = 78;
console.log(pname);


//number
let age: number = 31
// age = "thirty one"
console.log(age);


//boolean
let isActive:boolean = true
isActive = false
// isActive = "true"
console.log(isActive);

//any type or dynamic type.

let add: any = "Ten";
add = 10;
add = true;

//Array using "any"

let count:any [] = [23,"fifty",true,null,undefined] 

count.push("seventy");
count.push(99)
count.push(false)

console.log((count));

//Objects

type Details = { pname: any , age: any , isPresent: any , pincode: any };

let data : Details = {
    pname: "Praveen",
    age: "Thirty one",
    isPresent: "True",
    pincode: 641026
}
data.pincode = 641010;
console.log(data);

//null and undefined.

let x:null = null;
let y:undefined = undefined

console.log(x);
console.log(y);




