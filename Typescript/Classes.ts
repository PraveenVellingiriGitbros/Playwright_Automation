/* 
1. Class -  Contains properties
            Contains constructor
            Contains methods

2. readonly properties
3. optional properties
4. static properties
5. static methods

| Concept           | Remember                             |
| ----------------- | ------------------------------------ |
| Class             | Blueprint for objects                |
| Property          | Variables inside class               |
| Constructor       | Initializes object                   |
| Method            | Function inside class                |
| Object            | Instance of class                    |
| `this`            | Current object                       |
| `readonly`        | Cannot modify after initialization   |
| `?`               | Optional property                    |
| `static` Property | Shared by all objects                |
| `static` Method   | Called using class name              |
| `new`             | Creates object and calls constructor |

*/

//Class Example: Covered readonly, optional, 

class Student
{
    //Properties
    name:string;
    id:number;
    readonly schoolName:string; //readonly Property. We cannot change value using object.
    email?:string; //Optional Property.

    //constructor
    constructor(sname:string,sid:number,schoolName:string,semail?:string)
    {
        this.name = sname;
        this.id = sid;
        this.schoolName = schoolName;
        this.email = semail; //if email is given it will print else it will pring Email not provided. Refer display method below
    }

    //Method
    display()
    {
        console.log(`Student name: ${this.name}`);
        console.log(`Id: ${this.id}`);
        if(this.email)
        {
            console.log(`Email Id: ${this.email}`);
        }
        else
        {
            console.log("Email Id is not provided..");
            
        }   
        console.log(`School Name is ${this.schoolName}`);
        
    }

}

//Object creation to call the Methods.
let s1 = new Student("Praveen", 101, "DON BOSCO","Praveen123@yopamil.com");
s1.display();

// s1.schoolName = "SBOA" //Cannot assign to 'schoolName' because it is a read-only property.

let s2 = new Student("Sara",102,"DON BOSCO") // Here email id is not given, Because it is optional value. It will print as Email Id is not provided.. (We coded in display method)
s2.display();



//Class Example for Static Properties and Method.

class Employee
{
    //Normal Properties
    empName:string; 
    empid:number;

    //Static Property
    static companyName:string = "Capgemini";

    //Constructor
    constructor(ename:string,eid:number)
    {
        this.empName = ename;
        this.empid = eid;
    }

    //Method
    display()
    {
        console.log(this.empName);
        console.log(this.empid);
        console.log(Employee.companyName);   // This keyword not allowed because it is static property so declared using class name.
    }

    //Static Method
    static changeCompanyName(newCompany:string)
    {
        Employee.companyName = newCompany; // New company will shared to all the objects.
        console.log(`Company changed to ${Employee.companyName}`);
        
    }
}

//Object 1
let e1 = new Employee("Praveen",337377)
e1.display()

//Object 2
let e2 = new Employee("Sara",337378)
e2.display()

//Company Capgemini will assign to both employees.

console.log("------------------------------");

Employee.changeCompanyName("TCS")

e1.display()
e2.display()

