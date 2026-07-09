/* 
Inheritance: A Child class that acquires properties and method from parent class.
Why Do We Use Inheritance?
1. Reuse code.
2. Avoid duplicate methods.
3. Make maintenance easier.
4. Keep the code organized. 

Types of Inheritance:
1. Single Inheritance - Parent & child
2. Multi-level heritance - One class inherits from another class, which inherits from another class.
Grand Parent - Parent - child
3. Hierarchical Inheritance. - Multiple child classes inherit from the same parent class.

Super Keyword:
super is used to access the parent class's constructor and methods 
from the child class.

*/

//Ex: Single Inheritance:
console.log("------------------------------------------------")
class Animal // Parent Class
{
    eat(){
        console.log("Eating")
    }
    sleep(){
        console.log("Sleeping")
    }
}

class Dog extends Animal // Child Class
{
    bark()
    {
        console.log("Barking")
    }
}

let d1 = new Dog() // Object created for child class. So properties & methods can be accessed from parent class.
d1.bark()
d1.eat()
d1.sleep()

console.log("------------------------------------------------")

//Ex: Multi-Level Inheritance - Grandparent , Parent, child
console.log("------------------------------------------------")
class Vehicle
{
    start()
    {
        console.log("Vechile started")
    }
}

class Car extends Vehicle
{
    drive()
    {
        console.log("Car is driving")
    }
}

class SportsCar extends Car
{
    turboMode()
    {
        console.log("Turbomode activated")
    }
}

let c1 = new SportsCar()
c1.start()
c1.drive()
c1.turboMode()

console.log("------------------------------------------------")

//Ex: Hierarchical Inheritance: Multiple child classes inherit from the same parent class.
console.log("------------------------------------------------")

class Bank
{
    account()
    {
        console.log("Bank Account Created");
    }
}

class SavingsAccount extends Bank
{
    interest()
    {
        console.log("Savings Interest Added");
    }
}

class CurrentAccount extends Bank
{
    overdraft()
    {
        console.log("Overdraft Available");
    }
}

let b1 = new SavingsAccount()
b1.account()
b1.interest()
console.log("----------------")
let b2 = new CurrentAccount()
b2.account()
b2.overdraft()

console.log("------------------------------------------------")

//Ex: Super keyword: 
/* super is used to access the parent class's constructor and methods 
from the child class. */

class Person
{
    constructor(name , age)
    {
        this.name = name
        this.age = age
    }

    displayPersonInfo()
    {
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
    }
}

class Employee extends Person // Extended from Parent class
{
    constructor(name, age, id, department)
    {
        super(name, age) // Super Keyword used to access parent class properties
        this.id = id
        this.department = department
    }

    displayEmployeeInfo(){
        super.displayPersonInfo() // Super Keyword is used to access parent class method
        console.log("Employee Id: " + this.id)
        console.log("Employee Department: " + this.department)
    }
}

class Manager extends Employee // Here parent class is Employee for Manager.
{
    constructor(name, age, id, department, project, teamsize)
    {
        super(name, age,id,department) // Super Keyword used to access parent class properties
        this.project = project
        this.teamsize = teamsize
    }

    displayManagerInfo()
    {
        super.displayEmployeeInfo() // Super Keyword is used to access parent class method
        console.log("Project: " + this.project)
        console.log("TeamSize: " + this.teamsize)
    }
}

let m1 = new Manager("Name",30,337377,"QA Testing","Zurich",5)
m1.displayManagerInfo()







