import {test,expect,chromium} from '@playwright/test'
import type { Page } from '@playwright/test'

/*

Below 3 are the hierarchy we follow in playwright

1. browser -- Browser instance/process
2. context -- 
            Maintains Cookies
            Local storage
            Session storage
            Permissions
            Authentication/session state
3. page -- A tab/page inside the context

Syntax:

To Open new Tab in same browser:
const[newTab] = await Promise.all([
    context.waitForEvent('page');
    page.locator();
])

Ex:
Browser
   ↓
BrowserContext
   ↓
Page
-----------------------------------------
To Open Multiple popup window:
    await Promise.all([
    page.waitForEvent('popup');
    page.locator();
])

Ex:
Browser
   ↓
BrowserContext
   ├── Original Page
   ├── Popup Page 1
   ├── Popup Page 2
   └── Popup Page 3


*/
test('Handle Tabs - "SwitchTab in Same browserContext"', async()=>{
 
    // No Playwright fixtures are passed to this test.
    // Therefore, browser/context/page are created manually.
    
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://demoqa.com/browser-windows');
    
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("#tabButton").click()
    ])

    await newTab.waitForLoadState('load');
    await newTab.waitForURL(/sample/);
    console.log(`No of tabs in context: ${context.pages().length}`);
    
    await expect(newTab.locator("#sampleHeading")).toContainText('This is a sample page');
    await page.waitForTimeout(3000);
    await newTab.close();
})

test('Handle Multiple Windows - "Opens another window"', async({browser})=>{
 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://testautomationpractice.blogspot.com/');


    await Promise.all([
        page.waitForEvent('popup'),
        page.locator("#PopUp").click()
    ])

    const allPopWindows =context.pages();

    console.log(`No of windows opened: ${allPopWindows.length}`);

    for(const p of allPopWindows)
    {
        const title = await p.title();
        console.log(await p.title());
        
        if(title.includes('Selenium'))
        {
            await p.locator('[href="/documentation/webdriver/"]').click();
            await p.waitForURL(/webdriver/);
            await expect(p.getByText('Thank you for joining the Selenium and Appium 2026 Conference.')).toBeVisible();
            await p.waitForTimeout(3000);
            await p.close();
        }
    }

    //Only Multiple windows are opening but using same context.
})