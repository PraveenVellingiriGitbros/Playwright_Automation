import{test} from '@playwright/test';

/* 
    GetByMethods:  
    Playwright getBy methods are used to locate elements using user-facing attributes and accessibility information.
    they are as follows
    1. getByText: This method is used to locate an element based on its visible text content. 
    It can be used to find elements like buttons, links, or any other element that contains text.
    Example: getByText('Submit') will locate an element that contains the text "Submit".
    
    2. getByRole: This method is used to locate an element based on its accessible role and accessible name. ARIA Means Accessible Rich Internet Applications. 
    It can be used to find elements like buttons, checkboxes, radio buttons, and other interactive elements.
    Example: getByRole('button', { name: 'Submit' }) will locate a button element with the name "Submit".
    
    3. getByLabel: This method is used to locate an input element based on its associated label text. Ex: Visible text
    It can be used to find form fields like text inputs, checkboxes, and radio buttons.
    Example: getByLabel('Username') will locate an input element that is associated with a label containing the text "Username".
    
    4. getByPlaceholder: This method is used to locate an input element based on its placeholder text. 
    It can be used to find form fields like text inputs and search boxes.
    Example: getByPlaceholder('Enter your name') will locate an input element with the placeholder text "Enter your name".
    
    5. getByAltText: This method is used to locate an image element based on its alt text. 
    It can be used to find images that have descriptive alternative text.
    Example: getByAltText('Profile Picture') will locate an image element with the alt text "Profile Picture".
    
    6. getByTitle: This method is used to locate an element based on its title attribute. 
    It can be used to find elements that have a tooltip or additional information provided through the title attribute. 
    Example: getByTitle('More Info') will locate an element with the title attribute "More Info".

    7. getByTestId: This method is used to locate an element based on its data-testid attribute.
*/

test('GetByText' , async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByText('important', {exact: true}).isVisible();
    await page.getByText('Submit Form').click();
})

test('GetByRole', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('button', { name: 'Primary Action'}).click();
    await page.getByRole('textbox', {name: 'username'}).fill('Praveen');
    await page.getByRole('button' , {name: 'Div with button role'}).isVisible();
    await page.getByRole('link', {name: 'Home', exact: true}).nth(3).click();
    await page.getByRole('link', {name: 'Products'}).first().click();
    await page.getByRole('checkbox', {name: 'Accept terms'}).check();
    await page.getByRole('alert', {name: 'This is an important alert message!'}).isVisible();
})

test('GetByLabel', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
    await page.getByLabel('Email Address:').fill('Praveen123@yopmail.com');
    await page.getByLabel('Password:').fill('1224');
    await page.getByLabel('Your Age:').fill('31');
    await page.getByLabel('Standard').check();
    await page.getByLabel('Express').check();
})

test('GetByPlaceholder', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByPlaceholder('Enter your full name').fill('Praveen Vellingiri');
    await page.getByPlaceholder('Phone number (xxx-xxx-xxxx)').fill('9597766532');
    await page.getByPlaceholder('Type your message here...').fill('Hi, How are you?');
    await page.getByPlaceholder('Search products...').fill('Laptops');
    await page.getByRole('button', {name: 'Search'}).click();

})

test('GetByAltText', async({page})=>{

    //To find the image we can use GetByAltText method in Playwright.
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByAltText('logo image', {exact: true}).isVisible();

})

test('GetByTitle', async({page})=>{

    //Using Title we can able to locate elements in DOM.
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByTitle('Home page link').click(); //Links
    await page.getByTitle('HyperText Markup Language').isVisible(); //text
    await page.getByTitle('Tooltip text').isVisible(); 
    await page.getByTitle('Click to save your changes').click(); //button

})

test('GetByTestId', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html#');
    await page.getByTestId('edit-profile-btn').click();
    await page.getByTestId('product-price').first().isVisible();
    await page.getByTestId('nav-home').click();
})