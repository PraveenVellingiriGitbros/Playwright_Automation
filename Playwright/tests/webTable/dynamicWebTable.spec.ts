import {test, expect, type Locator} from '@playwright/test'

test.describe('Dynamic Web Table', async()=>{

    test('Verify Table is visible', async({page})=>{

        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const table = page.locator('.table-striped'); //Table Locator.
        await expect(table).toBeVisible();
    })

    test('Find rows and count', async({page})=>{

        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const rows = page.locator('.table-striped tbody tr');
        const rowCount = await rows.count();
        console.log(`Number of rows ${rowCount}`);
        expect(rowCount).toBe(4); //Assertion row count is matching.

        //Assertion to verify the rows is visible.
        const tablerows = await rows.all();
        for (const row of tablerows) {
            await expect(row).toBeVisible();
        }
    })

    test('Find columns count', async({page})=>{

        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const rows = page.locator('.table-striped tbody tr').first();
        const cols = await rows.locator('td').count();
        console.log(`Number of columns: ${cols}`);
    })

    test('Print complete Table data', async({page})=>{

        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const allrows:Locator [] = await page.locator('.table-striped tbody tr').all();
        
        for(const row of allrows)
        {
            const cells = row.locator('td');
            const allCells: Locator[] = await cells.all();

            let rowData: string[] = [];
            for(const cell of allCells)
            {
                const value = await cell.innerText();
                rowData.push(value.trim());
            }
            console.log(rowData);


        }
    })

    test('Find total TableDataCount', async({page})=>{

        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const table = page.locator('.table-striped tbody');
        const row = table.locator('tr');
        const tableData = row.locator('td');
        const totalTableDataCount = await tableData.count();
        console.log(`Total value in table: ${totalTableDataCount}`);

    })

    test('Find Chrome and print value of CPU', async({page})=>{

        //Find chrome from table and get the corresponding CPU data avialable in table.
        await page.goto('https://practice.expandtesting.com/dynamic-table');
        const table = page.locator('.table-striped tbody');
        const allrows:Locator [] = await table.locator('tr').all();
        
        for(const row of allrows)
        {
            const processName = await row.locator('td').nth(0).innerText();
            if(processName === "Chrome")
            {
               const cpuValue = await row.locator('td',{hasText: '%'}).innerText();
               console.log(`CPU Percentage = ${cpuValue}`);
               break;
            }
        }
    })

})