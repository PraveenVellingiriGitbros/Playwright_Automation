/* 
Type Casting- Means converting one type to another type
Ex: Unknown to string.
Ex: number to string.

Syntax:
as - It is a keyword
*/

//Ex:

let x:unknown = 'Hello'

// Unknown type to convert to string then perform string opertations.

// x.toUpperCase(); //'x' is of type 'unknown'.

let str = x as string;
console.log(str.toUpperCase());


