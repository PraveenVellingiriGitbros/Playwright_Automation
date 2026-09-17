import {test as base, chromium, expect, type Page} from '@playwright/test'

//I am creating a new fixture called loginPage, and it will contain a Playwright Page.
type MyFixture = {
    loginPage : Page
}

export const test = base.extend<MyFixture>({

    //The {page} here is Playwright's built-in page fixture.
    //Playwright automatically gives it to our custom fixture
    loginPage: async({page}, use)=>{
        
        //Login steps:  
        await page.goto('https://demowebshop.tricentis.com/');
        await page.getByRole('link', {name: 'Log in'}).click();
        await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
        await page.getByRole('textbox', {name: 'Password'}).fill('test123');
        await page.getByRole('button', {name: 'Log in'}).press('Enter');


        await use(page); //hand over the prepared fixture to the test we are creating.
    
        //TEARDOWN 
        console.log("Test Completed.");
    }
})

export {expect}

/* 
Syntax:
import { test as base, expect, type Page } from '@playwright/test';

type MyFixture = {
    loginPage: Page;
};

export const test = base.extend<MyFixture>({

    loginPage: async ({ page }, use) => {

        // SETUP
        // Prepare the page

        await use(page); // Hand over the prepared fixture to the test

        // TEARDOWN
        // Optional cleanup
    }
});

export { expect };

*/