import {expect, test} from '@playwright/test'

/*
Screenshot Syntax in playwright code level: This will not capture in Report level.
   await page.locator('')
             .screenshot({path:'folder location' + timeStamp + '.extension'});

   const timeStamp = Date.now() --> This is used to avoid replace the screenshot.
                   Each time timeStamp include then it become unique name.

Global level: Using playwright.config.ts file, it is applicable for all the test.
              Here all the screenshot store in test-results folder.
              This will capture in Report level.
use
{
   screenshot: 'only-on-failure'
}
   4 Parameters:
   off -> Screenshot will not capture for any test.
   on -> Even failure or pass everytime it will capture the screenshot.
         If pass - capture the last page.
         if faile - capture filed page.
   on-first-failure -> First time whenever the test fail it will capture the screenshot.
                       Helps during flaky test.
                       Once test pass old snap will be removed.
   only-on-failure -> Everytime capture screenshot if test fails. If same test pass then failure snapshot will be autodeleted.

   Recommand: only-on-failure
*/

//Current Page screenshot.
test('Screenshot 1: Current screen', async({page})=>{

   const timestamp = Date.now()
   await page.goto('https://demowebshop.tricentis.com/');
   await page.screenshot({path:'screenshots/' + 'homepage' + timestamp + '.png'})

})

//Fullpage Screenshot
test('Screenshot 2: Full page', async({page})=>{

   const timestamp = Date.now();
   await page.goto('https://demowebshop.tricentis.com/');
   await page.screenshot({path:'screenshots/' + 'fullpage' + timestamp + '.png', fullPage: true});
})

//Element Screenshot
test('Screenshot 3: Element', async({page})=>{

   const timestamp = Date.now();
   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByAltText('Tricentis Demo Web Shop')
             .screenshot({path:'screenshots/' + 'logo' + timestamp + '.png'});

})

//Section screenshot
test('Section Screenshot', async({page})=>{
   
   await page.goto('https://demowebshop.tricentis.com/');
   const timeStamp = Date.now();
   await page.locator('.product-grid')
                     .screenshot({path:'screenshots/' + 'ProductSection'+timeStamp +'.png'});

})

//Global Setting in playwright.config.ts file.
test('Global config - only-on-failure', async({page})=>{

   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByRole('link', {name: 'Log in'}).click();
   await page.waitForURL(/login/);
   await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
   await page.getByRole('textbox', {name: 'Password'}).fill('test12');
   await page.getByRole('button', {name: 'Log in'}).press('Enter');
   await expect(page.getByText('praveen9034@gmail.com')).toBeVisible();

})

test('Global config - on-first-failure', async({page})=>{

   await page.goto('https://demowebshop.tricentis.com/');
   await page.getByRole('link', {name: 'Log in'}).click();
   await page.waitForURL(/login/);
   await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
   await page.getByRole('textbox', {name: 'Password'}).fill('test123');
   await page.getByRole('button', {name: 'Log in'}).press('Enter');
   await expect(page.getByText('praveen9034@gmail.com')).toBeVisible();

})