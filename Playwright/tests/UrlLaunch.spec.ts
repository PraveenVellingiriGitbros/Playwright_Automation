import {test} from '@playwright/test'

test('Open Google' , async({page}) =>{
    await page.goto('https://www.google.com/')
    await page.locator('[name="q"]').fill("Selenium")
})

