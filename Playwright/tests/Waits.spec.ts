import {expect, test} from '@playwright/test'
import { TIMEOUT } from 'node:dns';

/* 
Waits in playwright: 
Playwright has Auto-Waiting by default, so in many cases you don't need to add manual waits.
    1. Autowaiting: bydefault playwright waits have 30 secs wait time to check the elements in DOM.
        await - for each step we need to give before performing any actions in DOM.
    2. Expilict waits:
        waitFor() - It is conidition based wait. We have 4 state they are as follows,
            * attached - Element is present in the DOM.
            * detached - Element is removed from the DOM.
            * visible - Element is visible.
            * hidden - Element is hidden or removed.
            * page.waitForSelector - This is used in existing frameworks, Better to waitFor() for new frameworks.
    3. waitForLoadState()
            * load - Page and its dependent resources are loaded. Like stylesheets, scripts, and images have loaded.
            * domcontentloaded - HTML/DOM is loaded. Focus only on DOM Elements
            * networkidle - Network has no active connections for a short period
    4. waitForURL()
            * wait for page to load until expected URL specified by User.
    5. waitForEvent()
                | Event         | Meaning                        |
                | ------------- | ------------------------------ |
                | `popup`       | A new tab/window opens         |
                | `dialog`      | Alert/confirm/prompt appears   |
                | `download`    | File download starts           |
                | `filechooser` | File upload chooser opens      |
                | `request`     | Network request is made        |
                | `response`    | Network response is received   |
                | `console`     | Browser console message occurs |
    6. waitForTimeout() - Not recommaned in prod code. This is used during script devlopment for testing purpose.
    */

//Here we used playwright Autowaiting - await. Time allocation will be 30 sec for each step.
test('Autowaiting', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/login');
    await page.getByRole('textbox', {name: 'Email'}).fill('praveen9034@gmail.com');
    await page.getByRole('textbox', {name: 'Password'}).fill('test123');
    await page.getByRole('button', {name: 'Log in'}).click();

})

test('waitFor visible', async({page})=>{

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

test('waitFor attached', async({page})=>{

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

test('waitFor dettached', async({page})=>{

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

test('waitFor hidden', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');
    const btn = page.locator('#input2').first();
    await btn.waitFor({state: 'hidden'});
    await page.locator('#toggleInput').click();
    await btn.fill('Praveen');
    await btn.waitFor({state: 'visible'});
    await page.waitForTimeout(3000);
    await page.locator('').waitFor

})

test('waitForLoadState - load', async({page})=>{

    await page.goto('https://www.amazon.in/');
    await page.waitForLoadState('load');
    await page.getByLabel('Search Amazon.in').first().fill('laptop');
    await page.getByLabel('Search Amazon.in').press('Enter');
})

test('waitForLoadState - domcontentloaded', async({page})=>{

    await page.goto('https://www.amazon.in/');
    await page.waitForLoadState('domcontentloaded');
    await page.getByLabel('Search Amazon.in').first().fill('laptop');
    await page.getByLabel('Search Amazon.in').press('Enter');
})

test('waitForLoadState - networkidle', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');
    await page.waitForLoadState('networkidle'); //The page's network activity has become idle. wait until API response is success then move to next step.
    await page.locator('#toggleInput').click();
    await page.locator('#input2').first().fill('Praveen');
})

test('waitForUrl', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    await page.locator('a[href="/login"]').click();
    // await page.waitForURL('https://demowebshop.tricentis.com/login'); - Full Url
    await page.waitForURL(/login/); //regex url pattern.
    await page.locator('input[id="Email"]').fill('praveen9034@gmail.com');
    await page.locator('input[type="password"]').fill('test123');
    await page.locator('input[value="Log in"]').press('Enter');
    await page.locator('a[class="account"]').first().click();
    await page.waitForURL('https://demowebshop.tricentis.com/customer/info');
    await expect(page).toHaveURL('https://demowebshop.tricentis.com/customer/info');   
})

  