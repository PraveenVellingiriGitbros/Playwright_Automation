/* 
Union Types.

More than one Type if required we can use Union type.
Ex: Error codes in API. Means we get 404 or "Not Found". Either a number or string..

*/

//Implicit or Type inference - Only able to create Array and objects. Regular variables is not allowed since type we will declare.

//Array:
let errCode = ["Internal Server error", 500, true]

errCode.push(404, "Not found", false)
console.log(errCode);

// Regular variable using Union type is not possible.
// let ename = "Praveen" , 30; //Syntax error.

//Explicit way:

// Regular variable using Union type is possible.
let code: (string | number) = 200 ;
code = "Success"; // Re-assigned value
// code = false; // Re-assing only in string or number. Type 'boolean' is not assignable to type 'string | number'.

//Array:

let errMessage: (string | number | boolean) [] = [];

errMessage.push("Success");
errMessage.push("201")
errMessage.push(true)

console.log(errMessage);
