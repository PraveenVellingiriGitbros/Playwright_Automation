/*
Encapsulation: Hide the complicated work and give only a simple button to use it.
Real Life Example: TV Remote

Imagine you have a TV.

You press one button:

Power ON

Does the remote tell you:

Send infrared signal
Connect to TV
Start motherboard
Start display
Turn on speakers

❌ No.

You only do:

Power Button

Everything else is hidden.

That is Encapsulation. 
 */


// Example: Where Encapsulation is used in Playwright

/*
1. Create a LoginPage.js file inside the pages (POM) folder.
2. Store all the login locators and login actions in the LoginPage class.
3. Create a LoginTest.spec.js file inside the tests folder.
4. In the test file, create an object of the LoginPage class.
5. Instead of writing the login steps (enter username, enter password, click Login)
   in every test, simply call the login() method.
6. The test does not know how the login is performed; it only knows to call
   loginPage.login(). The implementation details are hidden inside the LoginPage class.

This is called Encapsulation.
*/

