import {test, expect , type Page} from '@playwright/test'

//Here we need to decalre page globally so that one page is shared to complete test. 
//In Hooks concept decalre page globally to achive it.
let page: Page;

//Open broswer and give the url.
test.beforeAll('Open broswer & Application URL', async({browser})=>{
   page = await browser.newPage();
   await page.goto('https://www.demoblaze.com/index.html')
})

//Login code:
test.beforeEach('Login to Application', async()=>{
   await page.waitForLoadState('domcontentloaded');
   await page.locator('#login2').click();
   await page.locator('#loginusername').fill('Praveen123@gmail.com');
   await page.locator('#loginpassword').fill('test123');
   await page.getByRole('button', {name: 'Log in'}).click();
})

//Logout code
test.afterEach('Logout from Application', async()=>{
   await page.waitForLoadState('domcontentloaded');
   await page.locator('#logout2').click();
})

//Close broswer
test.afterAll('Close broswer', async({browser})=>{
   await page.close();
})

test('Find Product count', async()=>{
    await page.waitForLoadState('load');
    const Product = page.locator('#tbodyid .hrefch');
    const count = await Product.count();
    console.log(`Number of products: ${count}`);
    await expect(Product).toHaveCount(9);
})

test('Add to Cart',async()=>{
     const Product = page.locator('[src="imgs/Lumia_1520.jpg"]');
     await expect(Product).toBeVisible();
     await Product.click();

    page.on('dialog', async(dialog)=>{
        expect(dialog.message()).toBe('Product added.')
        await page.waitForTimeout(3000);
        await dialog.accept();  
    })
    await page.waitForLoadState('load');
    await page.getByText('Add to cart').click();
})

/* 

Open Application ==> BeforeAll all test starts.

Test 1:
Login - Before Each test
    Find no of products
logout - After Each test

Test 1:
Login - Before Each test
    Add to Cart
logout - After Each test

Close Application ==> After All test completes

*/