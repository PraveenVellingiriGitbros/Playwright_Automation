import {Locator, Page} from '@playwright/test'

export class LoginPage
{
    protected page: Page 
    //page - Variable/PropertyName
    //Page: Typescript type
    readonly usernameInput: Locator
    readonly userpasswordInput: Locator
    loginbtn: Locator

    //Locators are placed under constructor
    constructor(page: Page)
    {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.userpasswordInput = page.locator('#password');
        this.loginbtn = page.locator('#login-button');
    }

    //actions are created in methods.

    async login(username : string , password : string)
    {
        await this.usernameInput.fill(username);
        await this.userpasswordInput.fill(password);
        await this.loginbtn.click();
    }

}