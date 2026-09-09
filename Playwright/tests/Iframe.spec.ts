import {test} from '@playwright/test'

test('Iframe', async({page})=>{

    await page.goto('https://letcode.in/frame');
    const frame1 = page.frameLocator('#firstFr');
    
    await frame1.locator('[name="fname"]').fill('Praveen');
    await frame1.locator('[name="lname"]').fill('V');

    const frame2 = frame1.frameLocator('[title="Inner Frame"]');
    await frame2.locator('[name="email"]').fill('Pravee123@gmail.com');

    
    await frame1.locator('[name="fname"]').clear();
    await frame1.locator('[name="lname"]').clear(); 

    await page.getByText('Contact').first().click();
    

    await page.waitForTimeout(3000);
})