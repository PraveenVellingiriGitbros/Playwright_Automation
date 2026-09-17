import { test, expect } from "@playwright/test";

/*  
    use{
        trace: 'retain-on-failure'
    }

    Recommanded - 'retain-on-failure'
*/

test('Global config - Tracing - ON', async({page})=>{

   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByRole('link', {name: 'Log in'}).click();
   await page.waitForURL(/login/);
   await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
   await page.getByRole('textbox', {name: 'Password'}).fill('test123');
   await page.getByRole('button', {name: 'Log in'}).press('Enter');
   await expect(page.getByText('praveen9034@gmail.com')).toBeVisible();

})