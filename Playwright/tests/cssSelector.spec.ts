import {test} from '@playwright/test';

/* 
CSS Selectors are as follows:
    
    1. id attribute: #id - Selects elements based on their id attribute.
    2. class attribute: .class - Selects elements based on their class attribute.
    3. other attributes: [attribute= "value"] - Selects elements based on other attributes and their values.
    4. Using tag name: tagname - Selects elements based on their tag name.
    5. Using playwright's visible text: text="visible text" - Selects elements based on their visible text content.
    6. Using multiple attributes: [attribute1= "value1"][attribute2= "value2"] - Selects elements based on multiple attributes and their values.
    7. Using multiple attributes with tag name: tagname[attribute1= "value1"][attribute2= "value2"] - Selects elements based on their tag name and multiple attributes.    
    8. Using @contains: tagname[attribute*="value"] or [attribute*="value"] - Selects elements where the attribute contains the specified value.
    9. Using @starts-with: [attribute^="value"] - Selects elements where the attribute starts with the specified value.
    10. Using @ends-with: [attribute$="value"] - Selects elements where the attribute ends with the specified value.
    11. Using descendant combinator: parent child - Selects all elements that are descendants of a specified parent element. Descendant ( )combinator is a space character that separates two selectors. It matches all elements that are descendants of a specified parent element.
    12. Using direct child combinator: parent > child - Selects elements that are direct children of a specified parent element. Using the direct child combinator (>) selects only the immediate children of a specified parent element, rather than all descendants.
    13. Using adjacency combinator: parent + sibling - Selects elements that are immediately preceded by a specified sibling element. The adjacency combinator (+) selects elements that are immediately preceded by a specified sibling element, allowing for precise targeting of elements in relation to their siblings.
    14. Using general sibling combinator: parent ~ sibling - Selects elements that are preceded by a specified sibling element. The general sibling combinator (~) selects elements that are preceded by a specified sibling element, allowing for targeting of elements that share the same parent and come after a specified sibling.
    15. Using :nth-child(n): parent :nth-child(n) - Selects the nth child element of a specified parent element.
    16. Using :not(selector): parent :not(selector) - Selects elements that do not match the specified selector within a specified parent element.
    17. Multiple classes: .class1.class2 - Selects elements that have multiple classes.
    18. Using playwright's first, nth, last: :first-child, :nth-child(n), :last-child - Selects the first, nth, or last child element of a specified parent element.
*/

test('CSS Selector Using ID', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('#name').fill('Praveen');
    await page.locator('#email').fill('Praveen123@yopmail.com');
})

test('CSS Seclector Using Class', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('.form-control').first().fill('Praveen');
    await page.locator('.form-control').nth(1).fill('Praveen321@gmail.com');
})

test('CSS Selector Using Other Attributes', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('[placeholder="Enter Name"]').fill('Praveen');
    await page.locator('[for="textarea"]').fill('Coimbatore, Tamilnadu, India');

})

test('CSS Selector Using Tag Name', async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');

    await page.locator('button').click();
})

test('CSS Selector Using Visible test', async({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');

    await page.locator('text="Submit"').first().click();
})

test('CSS Selector Using Multiple Atrributes', async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('[id="name"][placeholder="Enter Name"]').fill('Sara');
    await page.locator('[id="email"][placeholder="Enter EMail"]').fill('Sara123@yopmail.com');

})

test('CSS Selector Using Multiple Atrributes with tagname', async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('input[id="name"][placeholder="Enter Name"]').fill('Sara');
    await page.locator('[id="email"][placeholder="Enter EMail"]').fill('Sara123@yopmail.com');

})

test('CSS Selector Using Contains', async({page})=>{
    
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('[name*="user"]').fill('student');
    await page.locator('[name*="pass"]').fill('Password123');
    await page.locator('[class*="bt"]').click();

})

test('CSS Selector Using Starts With', async({page})=>{
    
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('[name^="user"]').fill('student');
    await page.locator('[name^="pass"]').fill('Password123');
    await page.locator('[class^="bt"]').click();

})

test('CSS Selector Using Ends With', async({page})=>{
    
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('[name$="rname"]').fill('student');
    await page.locator('[name$="word"]').fill('Password123');
    await page.locator('[class$="tn"]').click();

})

test('CSS Selector Using Descendant Combinator', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('div input').nth(1).fill('Admin');
    await page.locator('div input').last().fill('admin123');

})

test('CSS Selector Using direct child combination', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('div>input').first().fill('Admin');
    await page.locator('div>input').nth(1).fill('admin123');
    await page.locator('div>button').click();
})

test('CSS Selector Using adjacency combinator', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('label+input').first().fill('Adhvik');

})