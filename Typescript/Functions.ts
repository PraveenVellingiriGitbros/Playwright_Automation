//Normal function. type function is declared.

let msg: Function = () =>
{
    console.log("Hello");
}

msg();
console.log("---------------------------------");

//Function with parameter. Type number is declared.

let sum = (a: number,b: number) =>
{
    return a+b
}

let result = sum(10,20);
console.log(result);
console.log("---------------------------------");

//Function with return type - Means what is expected as output, Either in number or string or boolean.

let addition = (x:number ,y: number) : number =>  // (): number is the return type.
{
    return x+y;
}

let total = addition(10,40);
console.log(total);
console.log("---------------------------------");

//Function with Union type.

let demoTest = (a: number, b: number, c:(number | string) ) =>
{
    if(typeof c === 'number')
    {
        return a+b+c
    }
    console.log(c);
    return a+b;

}

console.log(demoTest(5,5,"test"));
console.log("---------------------------------");

//Function with optional type.

let demo = (a: number, b: number, e?:number) => //Optional parameters must come after required parameters. (At the end like e)
{
    if(typeof e === 'number')
    {
        return a+b+e;
    }
    return a+b;
}

let a1 = demo(6,6); // e variable is not used since it is optional.
console.log(a1);
let a2 = demo(6,6,6); // e variable is used.
console.log(a2);

console.log("---------------------------------");

//Function with Default value.

let multiply = (m1:number , m2:number = 5) =>
{
    return m1*m2;
}

console.log(multiply(5));
console.log("---------------------------------");

//Function with type alias params

type strNum = (string | number) //type alias as strNum.

let add = (a:number , b: strNum) => {
 
    if(typeof b === 'number')
    {
        return a+b
    }
    return a+b;
}

console.log(add(2,2));

console.log("---------------------------------");

//Functions with Object

// let printObject = (user: {name: string, age: number}) => {
//     console.log(`name is ${user.name} and age is ${user.age}`);
    
// }

type Users = {
    name: string, age: number
}

let printObject = (user: Users) => {
    console.log(`name is ${user.name} and age is ${user.age}`);
    
}

printObject({name:"praveen",age: 31})

// Need to learn rest parameter 

// Function signature. - Need to

let sums : (x:number, y:number,...z:number[]) => number;

// sums = (a: number, b:number , ...c:number[]):number =>
// {
//     return;
// }





