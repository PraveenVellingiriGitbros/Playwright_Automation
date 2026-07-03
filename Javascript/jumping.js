//Jumping Statement: break, continue, return
//Jumping statements are used to change the normal flow of program execution. 
//They allow you to stop, skip, or exit from loops or functions.

//break: Means Stops the loop immediately
console.log("------------------------------------------------")

for(let i=1;1<=5;i++)
{
    if(i==3)
    {
        break
    }
    console.log(i)
}

console.log("------------------------------------------------")

//continue: Means Skips the current iteration and continues with the next
console.log("------------------------------------------------")

for(let j=1;j<=5;j++)
{
    if(j==3)
    {
        continue
    }
    console.log(j)
}
console.log("------------------------------------------------")