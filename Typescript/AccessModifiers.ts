/* 
Access Modifiers:
    1. Public
    2. Protected
    3. Private

| Modifier      | Parent Class | Child Class | Outside Class |
| ------------- | :----------: | :---------: | :-----------: |
| **public**    |       ✅      |      ✅      |       ✅     |
| **protected** |       ✅      |      ✅      |       ❌     |
| **private**   |       ✅      |      ❌      |       ❌     |

*/

//Parent Class
class Person
{
    public name:string;
    protected age:number;
    private ssn:number;


    constructor(pname:string,age:number,ssn:number)
    {
        this.name = pname;
        this.age = age;
        this.ssn = ssn;
    }

    displayPersonInfo()
    {
        console.log(`Name is ${this.name} and age is ${this.age} and ssn is ${this.ssn}`);
    }
}

let p1 = new Person("Praveen",31,99005567)
p1.displayPersonInfo()

console.log("--------------------------------------------");


//Child Class
class Employee1 extends Person
{
    private empId:number;

    constructor(pname: string, age: number, ssn: number,eid:number)
    {
        super(pname,age,ssn);
        this.empId = eid;
    }

    displayEmployeeInfo()
    {
        console.log(`Employee name is ${this.name}`); // Accessed from Parent class. Able to access
        console.log(this.age); // Accessd from Parent class. This proves that protected members are accessible inside child classes.
        // console.log(this.ssn); // It is private variable so not able to access
        console.log(`Employee id is ${this.empId}`);
    }
}

let emp = new Employee1("Praveen",31,98899876,337377);
emp.displayPersonInfo();
emp.displayEmployeeInfo();

emp.name = "Sara" // Able to access because it is Public property/variable.
// emp.age = 31 //Property 'age' is protected and only accessible within class 'Person' and its subclasses.
// emp.ssn = 98353453 //Property 'ssn' is private and only accessible within class 'Person'.
// emp.empId //Property 'empId' is private and only accessible within class 'Employee1'.