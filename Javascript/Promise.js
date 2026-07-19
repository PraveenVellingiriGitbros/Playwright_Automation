//Promise: A Promise is an object that represents the eventual completion 
//(or failure) of an asynchronous operation.

/* 
Pending
   |
   |------> Fulfilled (Success)
   |
   -------> Rejected (Failure)

   Syntax:
   let promise = new Promise((resolve, reject) => {

    });
*/

//We need to create a object for promise.

//Ex 1: Creating a Promise directly using new Promise() 

let promise = new Promise((resolve, reject)=>{

    let age = 21

    if(age>=18)
    {
        resolve("Able to vote")
    }
    else
    {
        reject("Not eligible")
    }
})

promise
    .then(result=>console.log(result)) // If testcondition is pass then will work.  resolve == then
    .catch(error=>console.log(error)) //If testcondition is failed catch will work. reject == catch

//Ex 2: Returning a Promise from a Function

function login(username , password)
{

    //Always use capital letter P for Promise - Otherwise will error promise is not a constructor.
    return new Promise((resolve, reject)=>{

        if(username === "Admin" && password === "1234")
        {
            resolve("Login successful")
        }
        else
        {
            reject("Login Failed")
        }
    })
}

login("Admin","12343")
    .then(result => console.log(result))
    .catch(failure => console.log(failure))

//Ex 3:

function atmWitdrawal(balance , amount)
{
    return new Promise((resolve, reject)=>{
        if(balance>=amount)
        {
            resolve("Witdrawn Successful")
        }
        else
        {
            reject("Witdraw failure")
        }
    })
}

atmWitdrawal(7000, 6000)
    .then(result => console.log(result))
    .catch(fail => console.log(fail))