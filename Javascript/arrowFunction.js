//Arrow Functions are a feature introduced in ECMAScript 6 (ES6). 
//They provide a shorter and cleaner way to write functions.

//Funtion without return type. (void function)
const greet = ()=>console.log("Welcome!")

//Function with parameter but no return type(void Function)
let sum=(a,b)=>console.log(a+b)
sum(3,5)

//Function with returntype
let sub=(a,b)=>{return a-b}
console.log(sub(4,2))

//Ex: Employee Salary with one time bonus with Arrow Function
console.log("------------------------------------------------")
let Salary = (basic,hra,allowance)=>{return(basic+hra+allowance)}
let netsalary = Salary(10000,3000,500)
let bonus = 15000
//Additionaly bonus added
let empsalary = netsalary + bonus
console.log("Employee Salary: " + empsalary)
console.log("------------------------------------------------")