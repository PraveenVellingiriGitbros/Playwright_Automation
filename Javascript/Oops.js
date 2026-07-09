/* shift + option + A
Oops Concepts: Object Oriented Programming language. In Javascript came after 2015.
1. Class
2. Object
3. Inheritance
4. Polymorphism
5. Abstraction
6. Encapsulation

Main 4 Pillars - They are Inheritance, Polymorphism, Abstraction, Encapsulation
------------------
*/

/* 
1. Class: What is Class?
-Class is templete, it is a blueprint, it consist of properties and methods. 
-If we need to call the class we need to create a object.
 */

//Ex: Class with default constructor
console.log("------------------------------------------------")
class Hotel 
{
    tea = 10
    coffee = 20

    constructor(){

    }

    displayRate()
    {
        console.log(this.tea)
        console.log(this.coffee)
    }
}

//displayRate() --> Directly we can't call the class create a object

let h = new Hotel() //Object Syntax
h.displayRate() //Here Class is called using object.
console.log("------------------------------------------------")

/* Constructor:
Constructor name and Class name both are same.
Constructor is a special method, which is inside the class, Whenever we create the object constructor will first call.
Constructor is used to inialize value for the variables.
Constructor 2 types - Default Constructor and Parameterized Constructor. 
A class may only have one constructor
*/

//Ex: Class with Constructor
console.log("------------------------------------------------")
class Student
{
    constructor(name,id)
    {
        this.name = name
        this.id = id
    }

    displayStudentdetails()
    {
        console.log(this.name)
        console.log(this.id)
    }
}

let s1 = new Student("Praveen" , 337377)
s1.displayStudentdetails()
console.log("------------------------------------------------")

//Task 1: Bank Account
/* Constructor:

accountHolder
accountNumber
balance

Method:
showBalance() 

Expected output:
Account Holder: Praveen
Account Number: 123456789
Balance: ₹50000
*/

console.log("------------------------------------------------")
class BankAccount
{
    constructor(accountHolder, accountNumber, balance)
    {
        this.accountHolder = accountHolder
        this.accountNumber = accountNumber
        this.balance = balance
    }

    showBalance()
    {
        console.log("Account Holder Name: " +this.accountHolder)
        console.log("Account Number: " +this.accountNumber)
        console.log("Balance" +this.balance)
    }
}

let b1 = new BankAccount("Praveen", 123456789, "₹50000")
b1.showBalance()
console.log("------------------------------------------------")

//Task 2: Employee Class - IncreaseSalary(amount)
console.log("------------------------------------------------")
class Employee
{
    constructor(name, salary)
    {
        this.name = name
        this.salary = salary
    }

    increaseSalary(amount)
    {
        this.salary += amount
        return this.salary
    }
}

let emp = new Employee("Praveen", 45000)
let payslip = emp.increaseSalary(10000) // return value stored in payslip
console.log("Employee name: " + emp.name)
console.log("Payslip: " + payslip)
console.log("------------------------------------------------")

//Object: An object is an instance of a class 
//that stores its own data and provides access to the class's methods.

