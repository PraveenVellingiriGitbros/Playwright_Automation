/* 
Callback() - A callback function is a function that is passed as an argument 
to another function and is executed later.

Syntax:
function display(callback) // display is main Function.
{
    callback();
}
*/

//EX 1: Normal function which is not in order, first bye() executed and then greet(). To overcome callback function is used. 
// function greet(name)
// {
//     console.log("Hello " + name )
// }

// function bye()
// {
//     console.log("Bye")
// }

// bye()
// greet("Praveen")


//Callback function -   
function greet(name, callback)
{
    console.log("Hello " + name )
    callback()
}

function bye()
{
    console.log("Bye")
}

greet("Praveen", bye)

console.log("------------------------------------------------")

//EX 2: Ordering Pizza

// A callback is a function passed as an argument to another function.
// Here, eatPizza() is passed as a callback to orderPizza().
// Once the pizza is prepared, orderPizza() calls the callback.

function orderPizza(callback)
{
    console.log("Ordering Pizza")

    setTimeout(() => {
        console.log("Order recevied .. Preparing Pizza")
        callback()
    }, 3000);
}

function eatPizza()
{
    console.log("Pizza delivered. Eating Pizza")
}

orderPizza(eatPizza)

//Callback is avoided now a days due to Callback Hell problem.
/* 
Callback hell occurs when multiple callbacks are nested inside one another, 
making the code difficult to read, debug, and maintain.

| Callback                    | Promise                               |
| --------------------------- | ------------------------------------- |
| Function passed as argument | Object representing future completion |
| Can lead to callback hell   | Avoids callback hell                  |
| Harder error handling       | Easy with `.catch()`                  |
| Older approach              | Modern approach                       |

*/