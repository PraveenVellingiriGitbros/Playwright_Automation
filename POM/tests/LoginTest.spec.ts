import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { envConfig } from '../config/envConfig'

test('Test Valid Login', async({page})=>{

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(envConfig.username,envConfig.password)
    await expect(page).toHaveURL(/inventory/)

})

test('Test Invalid Login', async({page})=>{

    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(envConfig.username,envConfig.invalidPwd);
    await expect(loginPage.errorMsg).toContainText('do not match');
    await page.waitForTimeout(3000);
})