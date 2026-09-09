import {test,expect} from '@playwright/test'

test.only('File Upload', async({page})=>{

    await page.goto('https://letcode.in/file');
    await page.locator('[id="resume"]').setInputFiles('/Users/praveen/Documents/Praveen/Learnings/Playwright Recordings/Praveen_Vellingiri_Resume.pdf');
    await expect(page.getByText('Selected File: ')).toBeVisible();
    const filename = await page.locator('.mt-3').textContent();
    console.log((filename));
    await page.waitForTimeout(3000);

})