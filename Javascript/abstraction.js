/* 
Abstraction: Hiding the implementation details 
and show only the necessary functionality 
*/

//Ex: 1
console.log("------------------------------------------------")
class Car 
{
    start() 
    {
        console.log("Car Started");
        this.#engine();
    }

    #engine()  // # denotes a private method. It cannot be accessed outside the class.
    {
        console.log("Engine Running...");
        console.log("Turbo Mode starting");
    }
}

let c = new Car();
c.start();
console.log("------------------------------------------------")

//Ex: 2
console.log("------------------------------------------------")
class LoginPage
 {

    login(username, password) 
    {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    enterUsername(username)
    {
        console.log("Entered Username");
    }

    enterPassword(password) 
    {
        console.log("Entered Password");
    }

    clickLogin() 
    {
        console.log("Clicked Login Button");
    }
}

let lp = new LoginPage();
lp.login("admin", "admin123");
console.log("------------------------------------------------")