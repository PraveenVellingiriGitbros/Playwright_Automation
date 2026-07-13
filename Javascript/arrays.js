/* Topic will cover - 
Array declaration
Access elements
push(), pop()
shift(), unshift()
slice(), splice()
includes(), indexOf()
find()
filter()
map()
for...of
every()
some()
array destructuring
spread operator


Whats is Array?
| JavaScript                                                 | Java                                                                      |
| ---------------------------------------------------------- | ------------------------------------------------------------------------- |
| Collection of multiple values stored in a single variable. | Collection of elements of the same data type stored in a single variable. |
| Can store different data types.                            | Can store only one data type.                                             |
| Dynamic (can grow or shrink).                              | Fixed size after creation.                                                |

*/

//Array declaration:
let fruits = ["Apple", "Banana", "Orange", "Mango"] //Literal way

let cars = new Array("Fronx", "Balano", "Swift") // Array with constructor

let a1 = [] // Empty Array

let type = ["Praveen", 337377, null, undefined, true] // elements stored in different datatypes.

//Access Array elements:

//Type 1: To access all elements. Use array name so it will print all the elements present in array.
console.log(fruits)
console.log(cars)
console.log(a1)
console.log(type)

console.log("---------")

//Type 2: To access specific elements:  We can use index value. so it will print specific array
console.log(fruits[1])
console.log(cars[2])
console.log(type[4])

console.log("---------")

//Modify the array elements.
console.log("Before Modify: " + fruits)
fruits[1] = "Dragon Fruit"
console.log("After Modify: " + fruits)

console.log("---------")

//To find the length of the array.
// Lenght is an Array Property. How to find whether it a property or method.
// If () is there then it is method , if no () then it is property.
console.log(fruits.length)  
console.log(cars.length)
console.log(a1.length)
console.log(type.length)

console.log("---------")

//Array Methods
//1. push() - To add element at end
//2. pop() -  To remove element at end.

console.log("Before Adding: " + fruits)
console.log(fruits.push("Watermelon","jackfruit")) // Print only count of the array.
console.log(fruits) // Print all the elements in array.
console.log("---------")
console.log(fruits.pop()) // Print last removed element
console.log(fruits) // Print all the elements in array.
console.log("---------")

//3. unshift() - To add element in begining
//4. shift() - To remove element in begining

console.log(cars.unshift("BMW")) // Print the count of array
console.log(cars) // Print all elements in array
console.log("---------")
console.log(cars.shift()) // Print removed element
console.log(cars) // Print all elements in array.
console.log("---------")

//5. slice() -
//6. splice() -
/*
| `slice()`                              | `splice()`                          |
| -------------------------------------- | ----------------------------------- |
| Returns a portion of an array          | Adds, removes, or replaces elements |
| Does **not** modify the original array | **Modifies** the original array     |
| Returns a new array                    | Returns the removed elements        |

Syntax:                                    Syntax:
array.slice(startIndex, endIndex);         splice(startIndex, deleteCount, newElement)

Explanation:
slice() is an array method that returns a shallow copy of a selected portion 
of an array without modifying the original array. 
The starting index is included, while the ending index is excluded.
----------------------------------------------------------------------------
splice() is an array method used to add, remove, or replace elements 
at a specified index. 
It modifies the original array and returns the removed elements.

*/

//splice() - Below are the examples,
//Ex 1: 
console.log("---------")
console.log("Before Splice: " + fruits)
fruits.splice(1,2,"banana","Guva") 
/* 
(1- (startindex),  - 1 
2 (How many need to delete), - 2
("new elements to be added into Array")  - Add "banana & Guva addded to Fruits Array"
*/
console.log("After Splice: "+fruits)
console.log("---------")

//Ex 2: splice()
console.log("---------")
console.log("Before Splice: " + fruits)
fruits.splice(1,0,"jackfruit","papaya") 
/* 
(1- (startindex), - 1
2 (How many need to delete),  - 0 (so elements will delete)
("new elements to be added into Array")  - Add "jackfruit & Guva papaya to Fruits Array"
*/
console.log("After Splice: "+fruits)
console.log("---------")

//Ex 3: splice()
console.log("---------")
console.log("Before Splice: " + fruits)
fruits.splice(1,3) 
/* 
(1- (startindex), - 1
2 (How many need to delete), - 3 - So three elements will delete after 1
("new elements to be added into Array") - NA
*/
console.log("After Splice: "+fruits)
console.log("---------")

//Ex 4: splice()
console.log("---------")
console.log("Before Splice: " + fruits)
let removed = fruits.splice(0) //All elements in fruit array will be get deleted and stored removed elements in variable. 
/* 
(1- (startindex), 
2 (How many need to delete), 
("new elements to be added into Array") 
*/
console.log("After Splice: "+fruits)
console.log("Removed elements from Array: " + removed)
console.log("---------")

//Slice()- Syntax: array.slice(startIndex, endIndex);
/* 
| Parameter    | Meaning                     |
| ------------ | --------------------------- |
| `startIndex` | Where to start (Included ✅) |
| `endIndex`   | Where to stop (Excluded ❌)  |

*/
//Ex 1:
console.log("---------")
let name = ["Praveen", "Sara", "Adhvik", "Prasath", "Ashwin"]
let storename1 = name.slice(0,4); 
console.log(name)
console.log(storename1)
console.log("---------")

// slice(0, 4)
// Starts copying from index 0 ("Praveen").
// Copies all elements until before index 4.
// Since the end index is excluded, "Ashwin" is not included.
// The original array remains unchanged.

//Ex: 2
console.log("---------")
let storename2 = name.slice(2) // From index 2 print all elements.
console.log(storename2)
console.log("---------")

// 7. includes() - Checks whether an element exists in an array.
// Returns true if found, otherwise false.

// 8. indexOf() - Returns the index (position) of the first occurrence of an element.
// Returns -1 if the element is not found.
let arr1 = ["Robo","AI","ML","GEN_AI"]

let checkelement = arr1.includes("GEN_AI")
console.log(checkelement)
console.log("---------")
let findindex = arr1.indexOf("GEN_AI")
console.log(findindex)
console.log("---------")

//9. find()
/* 
find() is used to find the first element in an array that satisfies a given condition.

✅ Returns the first matching element.
✅ Returns undefined if no element matches.
✅ Uses a callback function.
*/
console.log("---------")

let arr2 = [10,20,30,40,50]
let gtr = arr2.find(num=>num>20)
console.log(gtr)
console.log("---------")


//Above example explanation - number 20 will check which is greater in arr2.
//Verify each element in array once find the highest value greater than 20
//immediately stops and print the result. In find() method used arrow function.

//10. filter()
/* 
filter() is used to return all elements from an array that satisfy a given condition.
✅ Returns a new array
✅ Does not modify the original array
✅ Uses a callback function
*/

console.log("---------")

let arr3 = [10,20,30,40,50]
let fil = arr3.filter(a=>a>20)
console.log(fil)
console.log("---------")


//Above code explaination: verify the condition number greater than 20 and return all other satisfied elements.

//11. map()
/* 
map() creates a new array by applying a function to every element of the original array.
✅ Returns a new array
✅ Does not modify the original array
✅ Processes every element

| `map()`                                   | `filter()`                                |
| ----------------------------------------- | ----------------------------------------- |
| Returns a transformed array               | Returns elements that satisfy a condition |
| Number of elements usually stays the same | Number of elements may decrease           |
| Used to change values                     | Used to select values                     |

*/

//Ex: 1
console.log("---------")
let arr4 = ["praveen", "sara", "adhvik"]

let str = arr4.map(str=>str.toUpperCase()) // Arrow function style.

console.log(str)
console.log("---------")


//Ex: 2
console.log("---------")

let arr5 = [2,4,6,8]

let x1 = arr5.map(num=>num*2)

console.log(x1) // arr5 elements is multiplied with 2 anf gave the result. Transform each elements.
console.log("---------")

//12. for..of : It is used to loop through the values of an iterable (such as an array, string, or Map).

//Ex 1: Using regular for loop:

//for loop - if occurrence is known
console.log("---------")
let arr6 = ["laptop", "mobile", "watch", "airpods"]

for (i=0; i<arr6.length; i++)
{
    console.log(arr6[i])
}
console.log("---------")

//Ex 2: Using for..of loop
/* 
Syntax:
for (let variable of array) {
    // code
}
*/
console.log("---------")
let arr7 = ["laptop", "mobile", "watch", "airpods"]

for(let a of arr7) // let variable of arrayname
{
    console.log(a)
}
console.log("---------")

//13. every()
/* 
every() checks whether all elements in an array satisfy a given condition.

✅ Returns true if every element satisfies the condition.
❌ Returns false if even one element fails the condition.
✅ Does not modify the original array.
*/
console.log("---------")
let arr8 = [10, 20, 30, 40, 50]
let x2 = arr8.every(num => num > 20) 
console.log(x2)

console.log("---------")

/* 
Checks each element in the array.

If all elements satisfy the condition, every() returns true.
If any one element does not satisfy the condition, every() immediately returns false.

Above example:
10 > 20 → false

Since the first element does not satisfy the condition, every() returns false without checking the remaining elements.
*/

//14. some()
/* 
| `every()`                               | `some()`                                        |
| --------------------------------------- | ----------------------------------------------- |
| All elements must satisfy the condition | At least one element must satisfy the condition |
| Returns `true` only if all pass         | Returns `true` if any one passes                |

*/
console.log("---------")
let arr9 = [10, 20, 30, 40, 50]
let x4 = arr9.some((num=> num>20))
console.log(x4)

console.log("---------")

/* 
Above example - Result will be true.

The some() method checks each element in the array.

10 > 20 → false
20 > 20 → false
30 > 20 → true

Since one element (30) satisfies the condition, some() immediately returns true.
The remaining elements (40 and 50) are not checked.
*/ 

//15. Array Destructuring is a JavaScript feature that allows you to extract values from an array and assign them to variables in a single statement.
console.log("---------")

let colors = ["White", "Black", "Blue" ,"Yellow"]

let [a,b,c,d] = colors

console.log(a)
console.log(b)
console.log(c)
console.log(d)

console.log("---------")
//We extracted values from array list and assigned to variables.
//We can also re-assign the values.

a = "Orange" // re-assigned a value.
console.log(a)

console.log("---------")

//16. spread operator

//Ex 1: Expand Values
console.log("----Expand-----")
let arr10 = ["Iphone", "OPPO", "VIVO" ] 
console.log(...arr10)
console.log("---------")


//Ex 2: Spread Operator - Merge
console.log("----Merge-----")
let arr11 = ["MOTO", "Google", "MI", "NOKIA"]
console.log(...arr10 , ...arr11) //separated by , - Here merged 2 array.
console.log("---------")

//Ex 3: Spread Operator - Copy
console.log("----Copy-----")
let copy = [...arr11]
console.log(copy)
console.log("---------")

/*  Topics to learn later...
findIndex()
join()
sort()
reverse()
*/

