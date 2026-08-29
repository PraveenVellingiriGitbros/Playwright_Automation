/* 
 Drop Down - 
            1. Simple standard dropdown - <select> <option>
            2. custom dropdown
            3. searchable dropdown 
1) Standard dropdown:
        1. Selectby visibletext - We should use label property.
        2. Selectby value
        3. Selectby index
        4. MultipleSelect

2) Custom dropdown: Mostly it will be in span and div tag. 
        We will not be able to inspect the elements immediatly it will disappear.
        Use setTimeout(()=>{debugger},5000)

3) Handle Auto Suggestion | Searchable Drop Down in Playwright:
        
*/
import {expect, test} from '@playwright/test'

test.describe('Interaction using selectoption' , ()=>{

    test('selectoption using visibletext', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#country').selectOption({label: 'Germany'});
        await page.waitForTimeout(3000);

        //assertion:
        const value = await page.locator('#country').inputValue();
        expect(value).toBe('germany'); // Here we have to give DOM value not visible text.
        await page.waitForTimeout(5000);
    })
    
    test('selectoption using value', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#country').selectOption('france');
        await page.waitForTimeout(3000);

        //assertion:
        const value = await page.locator('#country option:checked').textContent();
        expect(value?.trim()).toBe('France');

    })

    test('selectoption using index', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Country:').selectOption({index : 5});
        await page.waitForTimeout(3000);

        //assertion to check count of values in dropdown.
        const dropdownvalues = await page.locator('#country option').count();
        expect(dropdownvalues).toBe(10);
        
    })

    test('MultipleSelect', async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.getByLabel('Colors:').selectOption([{label: 'Green'}, {index:3}, {value:'blue'}]);
        
        // If only values use it like below.
        // await page.getByLabel('Colors:').selectOption(['red','blue']);
        await page.waitForTimeout(3000);
    })

})

test('customDropDown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', {name: 'username'}).fill('Admin');
    await page.getByRole('textbox', {name: 'password'}).fill('admin123');
    await page.getByRole('button',{name:' Login '}).click();

    //assertion:
    // const Dashboard = page.locator('//h6[text()="Dashboard"]');
    // await expect(Dashboard).toBeVisible();
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('//h6[text()="Dashboard"]')).toBeVisible();

    await page.locator('.oxd-userdropdown-name').click();
    await page.getByRole('menuitem', {name: 'Support'}).click();
    await expect(page.getByText('Customer Support')).toHaveText('Customer Support');
    await page.getByText('Leave').click();

    await page.locator('.oxd-select-text-input').first().waitFor({state:'visible'});
    await page.locator('.oxd-select-text-input').first().click();

    //Use setTimeout(()=>{debugger},5000) in console to capture dropdown values.
    await page.getByRole('option',{name: 'Cancelled'}).waitFor({state:'visible'});
    await page.getByRole('option',{name: 'Cancelled'}).click();
    await expect(page.getByText('Cancelled')).toBeVisible();
    await page.waitForTimeout(5000);
})

