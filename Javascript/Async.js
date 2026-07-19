/* 
Synchronous Programming:
Code executes one statement at a time, in sequence.
The next statement waits until the current statement finishes executing.
If one operation takes a long time, the remaining code waits (blocks) until it completes.
*/


//EX 1:
console.log("Step 1")
console.log("Step 2")
console.log("Step 3")

console.log("-------------")
/* 
In real-world applications (such as Playwright), operations like
loading a web page, clicking an element, or reading data take time.

To handle these time-consuming operations efficiently without blocking,
JavaScript provides Asynchronous Programming using
Callbacks, Promises, and Async/Await.
*/

//EX:
console.log("Step 1")

setTimeout(() => { 
    console.log("Step 2")
}, 3000); //Intentionly we kept 3 secs for step 2

console.log("Step 3")

/* 
Above code will be in Async. Step 3 is not blocked. due to Step 2 delay.
Step 1 will be printed.
Step 2 will taking time, so Step 3 will execute.
Then, Step 2 will execute.

Anything that involves waiting—API calls, database queries, 
file reading, browser actions, timers—is asynchronous.
*/

/* 
Web APIs:

1. setTimeout
2. setInterval
3. fetch
4. Dom Elements
5. Geo Location
*/

/* 
Asynchronous process achieved in 3 ways.
1. Callback
2. Promise
3. Async-Await
*/

