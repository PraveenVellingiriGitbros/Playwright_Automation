//1. Objects

//Implicit way or Type inference:  Means without giving type

let employees = {
    emName : "Praveen",
    age : 31,
    isPermanent: true
}

//re-assign - Strict type and use all properties

employees = {
    emName : "Sara",
    age : 31,
    isPermanent: true
}

console.log(employees)

//Add new properties. We will get below error

// employees.department = "HR" //Property 'department' does not exist on type '{ emName: string; age: number; isPermanent: boolean; }'.

console.log("-----------------------------------------------------------------");

//Explicit way - Giving type

type Employees = {
    fname: string,
    age: number,
    department: string
}

let emp: Employees = {
    fname: "Sara",
    age: 31,
    department: "Payroll"
}

// emp.location = "Chennai"; //Property 'location' does not exist on type 'Employees'.

console.log(emp);


//Optional: Quick note: Use Question Mark to make it optional (?)

type StudentDetails = { sname: string, age: number, club?: string }

let student: StudentDetails = { //
    sname: "Adhvik",
    age: 10
}

/* In above code, Property 'club' is missing in type '{ sname: string; age: number; }' but required in type 'StudentDetails'.
Datatypes.ts(131, 53): 'club' is declared here. 

We need to use question mark.. See above code club?: string --> Means it is optional property in StudentDetails object.
*/

//Nested objects:

//Explicit way - Giving type as below.

type Employee = {
    name: string;
    age?: number // Optional is used here.
    address: {
        city: string;
        state: string;
    }
}

let empl: Employee = {
    name: "Praveen",
    address: {
        city: "Coimbatore",
        state: "Tamil Nadu"
    }
}

console.log(empl);
console.log(empl.address.state);
