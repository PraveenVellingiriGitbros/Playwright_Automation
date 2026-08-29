import {expect, test} from '@playwright/test'

/* 
Waits in playwright: 
Playwright has Auto-Waiting by default, so in many cases you don't need to add manual waits.
    1. Autowaiting: bydefault playwright waits have 30 secs wait time to check the elements in DOM.
        await - for each step we need to give before performing any actions in DOM.
    2. Expilict waits:
        waitFor() - It is conidition based wait. We have 4 state they are as follows,
            * attached - Element is present in the DOM
            * detached - Element is removed from the DOM
            * visible - Element is visible
            * hidden - Element is hidden or removed
    3. waitForLoadState()
            * load - Page and its dependent resources are loaded
            * domcontentloaded - HTML/DOM is loaded
            * networkidle - Network has no active connections for a short period


*/

//Here we used playwright Autowaiting - await. Time allocation will be 30 sec for each step.
test('Autowaiting', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();

})

test('waitFor', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/login');

    const emailtxtbox = page.getByRole('textbox', {name: 'Email'})
    await emailtxtbox.waitFor({state: 'visible'});
    await emailtxtbox.fill('praveen9034@gmail.com')

    const pwd = page.getByRole('textbox', {name: 'Password'});
    await pwd.waitFor({state: 'visible'});
    await pwd.fill('test123');

    const btn = page.getByRole('button', {name: 'Log in'});
    await btn.waitFor({state: 'visible'});
    await btn.click();
})

test('attached', async({page})=>{

    //The product has been added to your 

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();
    await page.locator('a[href="/books"]').first().click();
    await page.locator('div.product-item')
            .filter({has: page.locator('a[href="/computing-and-internet"]')})
            .locator('input[value="Add to cart"]').click();

    await page.waitForLoadState('domcontentloaded');
    const msg = page.locator('#bar-notification');
    await msg.waitFor({state: 'attached'});
    await expect(msg).toContainText('The product has been added to your ');
})

test('dettached', async({page})=>{

    //The product has been added to your 

    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

    await page.getByRole('button', {name:'Add Element' }).click();

    const deletebtn = page.locator('//button[@class="added-manually"]');

    //Wait until delete button is attached to the DOM.
    await deletebtn.waitFor({state: 'attached'});

    await deletebtn.click();

    //Wait until Delete button removed from DOM after click.
    await deletebtn.waitFor({state: 'detached'});

    await page.waitForTimeout(3000);
})