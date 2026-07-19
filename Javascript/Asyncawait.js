/* Async await:
What is async?

async is a keyword that makes a function return a Promise.

What is await?

await waits for a Promise to resolve or reject.

Why use async/await?

It makes asynchronous code easier to read and maintain.

Can await be used without async?

No, except in environments that support top-level await.

Why does Playwright use await?

Because Playwright methods like page.goto(), page.click(), and page.fill() return Promises.

Syntax:
async function functionName() {
    try {

        const result = await promiseFunction();

        console.log(result);

    } catch (error) {

        console.log(error);

    }
}

functionName();
*/

//Ex 1: Achieving synchronous code with Async await.

function login(username, password)
{
    return new Promise((resolve, reject)=>{
    
    if(username === "Admin" && password === "1234")
    {
        resolve("login successful")
    }
    else
    {
        reject("Login failed")
    }
    })
}

//Below is the async-await concept.

async function getLogin()
{
    try
    {
        let result = await login("Admin", "1234")
        console.log(result)
    }
    catch (error)
    {
        console.log(error)
    }
}

getLogin()