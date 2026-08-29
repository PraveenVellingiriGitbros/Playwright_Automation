import {test , expect} from '@playwright/test'

/* 
Locator Assertion:
    1. toBeVisible - Check the locator is present or not.
    2. toHavetext - Check the exact text.
    3. toHaveValue - Input has expected value
    4. toContainText - Element contains even has partial text.
    5. toBeEnabled - To check Element is enabled. 
    6. toBeDisabled - To check Element is disabled.
    7. toBeChecked - To check radio box is checked or not.

Page Assertion:
    1. toHaveURL - Check the webpage URL fully also partially.
    2. toHaveTitle - Check the title text.

Generic Assertion:
    1. toBe()
    2. toEqual()
    3. toContain()
    4. toMatch()
    5. .not
    6. toBeTruthy()
    7. toBeFalsy()
    8. toBeNull()
    9. toBeDefined()
    
*/

//toBeVisible - Check the locator is present or not.
test('Assertion toBeVisible', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', {name: 'username'}).fill('Admin');
    await page.getByRole('textbox', {name: 'password'}).fill('admin123');
    await page.getByRole('button', {name:'Login'}).click();

    await page.waitForTimeout(3000);

    /*  
    Way 1:
        const banner = page.getByAltText('client brand banner');
        await expect(banner).toBeVisible();
    */
    
    //Way 2
    await expect(page.getByAltText('client brand banner')).toBeVisible();
})

//toHavetext - Check the exact text.
test('toHaveText', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name: 'Log in'}).click();
    await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();
    const account = page.getByText('praveen9034@gmail.com');

    await expect(account).toHaveText('praveen9034@gmail.com');

    await page.waitForTimeout(3000);

})

//toHaveValue - Input has expected value
//npx playwright test tests/Assertions.spec.ts -g "toHaveValue" --headed
test('toHaveValue', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name: 'Log in'}).click();
    
    let email = page.getByRole('textbox', {name: 'Email'});
    await email.fill('praveen9034@gmail.com');
    await expect(email).toHaveValue('praveen9034@gmail.com');

    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();

    await page.waitForTimeout(3000);

})

//toContainText - Element contains even has partial text.
test('toContainText', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link',{name: 'Log in'}).click();
    await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();
    const account = page.getByText('praveen9034@gmail.com');

    await expect(account).toContainText('pra');

    await page.waitForTimeout(3000);

})

//toBeEnabled - To check Element is enabled.
test('toBeEnabled',async({page})=>{

    await page.goto('https://letcode.in/button');
    const button = page.getByText('Goto Home').nth(1); //nth(1) means second element in DOM.
    await expect(button).toBeEnabled();

})

//toBeDisabled - To check Element is disabled.
test('toBeDisabled',async({page})=>{

    await page.goto('https://letcode.in/button');
    const button = page.getByText('Disabled').nth(1); //nth(1) means second element in DOM.
    await expect(button).toBeDisabled();

})

//toBeChecked - To check radio box is checked or not.
test('toBeChecked', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    const Accept = page.getByRole('checkbox', {name: 'Accept terms'})
    await Accept.check();
    await expect(Accept).toBeChecked();

})

//toHaveURL - Check the webpage URL fully also partially.
test('toHaveURL', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name: 'Log in'}).click();
    //Full url check.
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
    //partial url check.
    await expect(page).toHaveURL(/login/); // regex pattern. - Regular Expression.
})

//toHaveTitle - Check the title text.
test('toHaveTitle', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await page.getByRole('link', {name: 'Log in'}).click();
    await expect(page).toHaveTitle('Demo Web Shop. Login');

})


/* 
Cover this after learning below reterive UI values concepts.
inputValue() → form field value
textContent() → text inside element
innerText() → visible text
getAttribute() → HTML attribute value

Generic Assertions
1. toBe()
2. toEqual()
3. toContain()
4. toMatch()
5. .not
6. toBeTruthy()
7. toBeFalsy()
8. toBeNull()
9. toBeDefined()

Learn with regex - Regular Expression 
*/


