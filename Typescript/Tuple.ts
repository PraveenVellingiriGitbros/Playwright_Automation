//Tuple - It is typed array. Using Tuple we can able to assign type to each index.

//Ex: Normal Array without type.
let items =["Apple",30,true] // string , number, boolean

items[0] = 45 // Modified first array.

console.log(items);
console.log("---------------------------------");

// Tuple - A fixed-length array where each position has its own data type.

let myUsersTuple:[string,number,boolean] = ["Praveen",31,true]

myUsersTuple[0] = "Sara" // re-assgined 1st element using index
console.log(myUsersTuple);

console.log("---------------------------------");

 /* Refer Array.ts file as well.  
 There we created like one array holds only string elements.
 second array holds only number.
 third array holds only boolean.

 Here in above tuple - mixed combination, each index can able to create with type.
 this is called tuple.
 */

//readonly - Normally tuple is fixed length array, To avoid modification use readonly.
//If you are creating tuple you should create with readonly.

let myTuple: readonly [string,number,boolean] = ["Praveen",31,true]

// myTuple[0] = "Sara"  // Cannot assign to '0' because it is a read-only property.

//Named Tuple: Assinged name for each index with meaningful way.

let namedTuple: [username:string,age:number,isPresent:boolean] = ["Adhvik",1.5,true]

//Accessing named tuple.

let [username,age,isPresent] = namedTuple;

console.log(username);
console.log(age);
console.log(isPresent); 



