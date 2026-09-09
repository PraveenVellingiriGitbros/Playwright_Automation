/* 
    Alert in Playwright:
        * Handled using waitForEvent('dialog')
        * Handled using page.on() is an event listener.
    | Situation                     | Use                             |
    | ----------------------------- | ------------------------------- |
    | One particular alert          | `page.waitForEvent('dialog')` ✅ |
    | Multiple alerts in same test  | `page.on('dialog')`             |
    | Need to verify alert message  | `waitForEvent()` + assertion    |
    | Common global dialog behavior | `page.on()` can be useful       |

    1. simpleAlert
    2. confirmAlert
    3. promptAlert
*/

import  {test, expect} from '@playwright/test'
import type { Page } from '@playwright/test';

test('Simple Alert - waitForEvent', async({page})=>{

    await page.goto('https://letcode.in/alert/');

    //Here page.once Handles the event only once - One specific dialog expected.
    page.once('dialog', async(dailog)=>{ 
        await dailog.accept();
    })
    await page.getByText('Simple Alert').click();
})

test('simpleAlert - page.on()', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    
    //Here below code specifies - Page is waiting for dialog event
    //Once alert came then dialog.accept will do the operation.
    
    page.on('dialog', async(dialog)=>{
        console.log(dialog.message());
        expect(dialog.message()).toBe('I am an alert box!')
        await page.waitForTimeout(3000);
        await dialog.accept();  
    })
    await page.locator('[id="alertBtn"]').click();
})

test('confirmAlert - page.on()', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    
    page.on('dialog', async(dialog)=>{
        console.log(dialog.message());
        expect(dialog.message()).toBe('Press a button!');
        await page.waitForTimeout(3000);
        await dialog.dismiss();
    })

    await page.locator('[id="confirmBtn"]').click();

})

test('promptAlert - page.on()', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

    page.on('dialog', async(dialog)=>{
        console.log(dialog.message());
        await page.waitForTimeout(3000);
        await dialog.accept('Praveen');
    })

    await page.locator('[id="promptBtn"]').click();
})