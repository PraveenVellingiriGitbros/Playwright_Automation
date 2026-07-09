/* 
Polymorphism: 
poly - Many & Morphism - forms

Think of it like a remote control:
The same Power button works for a TV, AC, or Fan.
The button is the same, but the behavior is different.

Two types of Polymorphism:
1. Compile time Polymorphism - It is also known as Method overloading
2. Runtime Polymorphism - It is also known as Method overriding

In Javascript - Method Overloading is not directly support.

Method Overriding:
Method overriding is an OOP concept where a child class provides its own
implementation of a method that is already defined in the parent class,
using the same method name and parameters.
*/

//Ex: 1
console.log("------------------------------------------------")
class Payment
{
    pay() // Pay method
    {
        console.log("Payment Successful")
    }
}

class CreditCardPayment extends Payment
{
    pay() // Pay method
    {
        console.log("Credit Card Payment Successful") // Same Method name but redefined parent class method.
    }
}

class DebitCardPayment extends Payment
{
    pay() // Pay method
    {
        console.log("Debit Card Payment Successful") // Same Method name but redefined parent class method.
    }
}

class UPIPayment extends Payment
{
    pay() // Pay method
    {
        console.log("UPI Payment Successful") // Same Method name but redefined parent class method.
    }
}

let p = new Payment()
p.pay()

p = new CreditCardPayment()
p.pay()

p = new DebitCardPayment()
p.pay()

p = new UPIPayment()
p.pay()
console.log("------------------------------------------------")

//Ex: 2
console.log("------------------------------------------------")
class BasePage
{
    launch()
    {
        console.log("Application Launched")
    }
}

class LoginPage extends BasePage
{
    launch()
    {
        console.log("login Successful")
    }
}

class Dashboard extends BasePage
{
    launch()
    {
        console.log("Dashboard Page Launched")
    }
}

let b = new BasePage()
b.launch()

b = new LoginPage()
b.launch()

b = new Dashboard()
b.launch()

console.log("------------------------------------------------")

//Method Overloading: In JS Method overloading is not directly supported.
//Ex:
console.log("------------------------------------------------")

class Addition
{
    add(a, b)
    {
        console.log(a + b)
    }

    add(a, b, c)
    {
        console.log(a + b + c)
    }

    add(a, b, c, d)
    {
        console.log(a + b + d + c)
    }
}

let sum = new Addition()
sum.add(2,3)
sum.add(2,2,2)
sum.add(2,3,4,5)
console.log("------------------------------------------------")

/* Here in The above example third add() replaces the first and second because 
JavaScript keeps only the last method definition with the same name. */

