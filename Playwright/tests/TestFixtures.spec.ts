import {chromium, test} from '@playwright/test'

/* 
Playwright provide browser,context,page objects as built in fixtures.
    Browser ==> Represents browser application
    context ==> Represents to Create context session in browser
    page ==> Represents tab/page in browser.

We can also create our custom fixtures.
*/

test('Cucumber Style Without Fixture', async()=>{

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/');
    await browser.close();
})

//built in browser fixture
test('Fixture 1', async({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/');

})

//built in context fixture
test('Fixture 2', async({context})=>{

    const page = await context.newPage();
    await page.goto('https://demowebshop.tricentis.com/');

})

//built in page fixture
test('Fixture 3', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

})