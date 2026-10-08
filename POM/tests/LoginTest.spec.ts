import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { envConfig } from '../config/envConfig'

test('Test Valid Login', async({page})=>{

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.login(envConfig.username,envConfig.password)

    await expect(page).toHaveURL(/inventory/)

})