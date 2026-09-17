import { test, expect } from "@playwright/test";

/* 
    * Video will be saved in test-results. This is attach in report.
    * To view the video directly we cannot open - give npx playwright show-report.
    Syntax:
    use{
        Video: 'retain-on-failure' - Take video only if test failed, if pass then video will be deleted.
    }
    Parameters:
        1. on
        2. off
        3. on-all-retries
        4. on-first-retry
        5. retain-on-failure
        6. retain-on-failure-and-retries
        7. retain-on-first-failure  - Take video only once if test failed. 
                                      Second time it will not take video even if test fails.
    
    Recommanded: 'retain-on-failure'

*/

test('Global config - Video - ON', async({page})=>{

   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByRole('link', {name: 'Log in'}).click();
   await page.waitForURL(/login/);
   await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
   await page.getByRole('textbox', {name: 'Password'}).fill('test123');
   await page.getByRole('button', {name: 'Log in'}).press('Enter');
   await expect(page.getByText('praveen9034@gmail.com')).toBeVisible();

})

test('Global config - Video - retain-on-failure', async({page})=>{

   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByRole('link', {name: 'Log in'}).click();
   await page.waitForURL(/login/);
   await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
   await page.getByRole('textbox', {name: 'Password'}).fill('test23');
   await page.getByRole('button', {name: 'Log in'}).press('Enter');
   await expect(page.getByText('praveen9034@gmail.com')).toBeVisible();

})