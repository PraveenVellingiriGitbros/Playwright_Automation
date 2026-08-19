import{test} from '@playwright/test';

/* 
xpath Locators used in real time scenarios most frequently are :
1. Using ID: //*[@id='value']
2. Using Class: //*[@class='value']
3. Using Other Attributes: //*[@attribute='value']
4. Using Tag Name: //tagname[@attribute='value']
5. Using Text: //tagname[text()='value']
6. Using Contains: //tagname[contains(@attribute,'value')]
7. Using Starts-with: //tagname[starts-with(@attribute,'value')]
8. ❌ Using Ends-with: //tagname[ends-with(@attribute,'value')] - is not supported in xpath 1.0, so we can use contains() function to achieve the same functionality.
9. Using AND / OR: //tagname[@attribute1='value1' and @attribute2='value2'] or //tagname[@attribute1='value1' or @attribute2='value2']
10. Using Parent-Child Relationship: //parenttag/childtag[@attribute='value']
*/

test('Xpath Locator using ID', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    //We need specify xpath in double quotes and its value in single quotes. If we use double quotes for both, it will throw an error.
    await page.locator("//*[@id='username']").fill('student');
    await page.locator("//*[@id='password']").fill('Password123');
})

test('Xpath Locator using class & multiple attributes & tagname', async({page})=>{

    // Covered below in the same test case.
    // @class
    // multiple attribute --> //*[][]
    // tagname --> //input.
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    await page.locator("//input[@class='input_error form_input'][@id='user-name']").fill('standard_user');
    await page.locator("//input[@class='input_error form_input'][@id='password']").fill('secret_sauce');
    await page.locator("//*[@id='login-button']").click();
})

test('Xpath Locators using text', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("//*[@id='username']").fill('student');
    await page.locator("//*[@id='password']").fill('Password123');
    await page.locator("//*[@id='submit']").click();

    await page.locator("//*[text()='Log out']").click();
})

test('Xpath Locator using Contains', async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("//input[contains(@name,'user')]").fill('student');
    await page.locator("//input[contains(@name,'passw')]").fill('Password123');

    await page.locator("//button[contains(@class,'bt')]").click();
})

test('Xpath Locator using Starts-with', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator("//input[starts-with(@id,'user')]").fill('student');
    await page.locator("//input[starts-with(@id,'pass')]").fill('Password123');

    await page.locator("//button[starts-with(@id,'submit')]").click

})

test('Xpath Locator using AND / OR', async({page})=>{

    // Covered below in the same test case.
    // @class
    // multiple attribute --> //*[][]
    // tagname --> //input.
    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    await page.locator("xpath=//input[@class='input_error form_input' and @id='user-name']").fill('standard_user');
    await page.locator("xpath=//input[@placeholder='Password' or @name='password']").fill('secret_sauce');
    await page.locator("xpath=//*[@id='login-button']").click();
})

/* 
    Need to cover below scenarios in future:
    following-sibling: Syntax for selecting all siblings after the current node. Example: //tagname[@attribute='value']/following-sibling::tagname
    preceding-sibling: Used to select all siblings before the current node.
    ancestor: Used to select all ancestors (parent, grandparent, etc.) of the current node.
    descendant: Used to select all descendants (children, grandchildren, etc.) of the current node.
    normalize-space() : Removes leading and trailing whitespace from a string and replaces sequences of whitespace characters with a single space.
    Index ([1], [last()]):  Used to select a specific element from a set of elements. [1] selects the first element, while [last()] selects the last element.
    not(): Used to select elements that do not match a specified condition.
*/