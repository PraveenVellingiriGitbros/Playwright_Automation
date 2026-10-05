import { test, expect, type Locator } from '@playwright/test'
import type { SrvRecord } from 'node:dns';

/* Static Web table:
        * table
        * tbody
        * tr - table row
        * td - table data
    1. Identify table and Verify table is visible
    2. Verify rows count and exists.
    3. Count columns
    4. Get complete table data
    5. Read data from 2nd Row
    6. Find the text and print that row.
    7. Calculate price in web Table.
*/

test.describe('Static Web Table', async () => {

    test('toVerify table is visible', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
        const table = page.locator('[name="BookTable"]');
        expect(table).toBeVisible;
    })

    test('toVerify No of rows Count and it exists', async ({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');

        //directly located table rows.
        const tablerows = page.locator('table[name="BookTable"] tbody tr');

        //find row count.
        const rowCount = await tablerows.count();
        console.log(`Number of rows present in Static Book Table: ${rowCount}`);
        expect(rowCount).toBe(7);

        //Verify table rows are visible
        //Approach 1
        for (let i = 0; i < rowCount; i++) {
            await expect(tablerows.nth(i)).toBeVisible();
        }

        //Approach 2
        const rows = await tablerows.all();
        for (const row of rows) {
            await expect(row).toBeVisible();
        }
        console.log("Number of rows: ", rows.length);
        const rowcount = rows.length;
        expect(rowcount).toBe(7);

    })

    test('Find columns Count', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');

        //located table rows.
        const table = page.locator('table[name="BookTable"]')
        const fistrow = table.locator('tbody tr').first();
        const tablecols = await fistrow.locator('th').count();
        console.log(`Table columns count ${tablecols}`);

    })

    test('Get complete table data', async ({ page }) => {
        /* 
        To Get Complete Table Data: 
            Locate the table → locate all rows → 
            loop through each row → locate all cells → 
            loop through each cell → retrieve cell text → 
            store/print row data.
         */

        await page.goto('https://testautomationpractice.blogspot.com/');

        //located table.
        const table = page.locator('table[name="BookTable"]');

        //located rows
        const rows = table.locator('tbody tr');
        const allrows:Locator [] = await rows.all();

        //Loop through each rows
        for (const row of allrows.slice(1)) // slice(1) is used to remove header.
        {

            //located cells
            const cells = row.locator('th, td');
            const allCells: Locator[] = await cells.all();

            let rowData: string[] = [];

            for (const cell of allCells) {

                const value = await cell.innerText();
                rowData.push(value.trim());
            }
            console.log(rowData);// print in array format.
            // console.log(rowData.join('\t')); // Print giving space.

        }

    })

    test('Read data from 2nd Row', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');
        const secondRow = page.locator('table[name="BookTable"] tbody tr'); //Find until row.

        //Use nth method to locate the specific row. So nth(2).locator('td') means tableData.
        //allInnerTexts retrieve 2nd secondRow text.
        const value: string[] = await secondRow.nth(2).locator('td').allInnerTexts();
        console.log(value); //Approach 1
        expect(value).toEqual(['Learn Java', 'Mukesh', 'Java', '500']);

        //Approach 2
        for (const secondRowText of value) {
            console.log(secondRowText);
        }
    })

    test('Find the text and print that row', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');
        const rows: Locator = page.locator('table[name="BookTable"] tbody tr');
        const allrows: Locator[] = await rows.all();

        let count = 0;
        //Loop through each rows
        for (const row of allrows) {
            //located cells
            const cells: string[] = await row.locator('th, td').allInnerTexts();
            const bookName = cells[0];
            const author = cells[1];
            const subject = cells[2];
            const price = cells[3];

            if (cells[1] === "Amit") {
                count++;
                console.log(`${bookName}, ${author}, ${subject}, ${price}`);
            }

        }
        console.log(`Amit found in ${count} rows`);
        expect(count).toBe(2);

    })

    test('Calculate price in web Table', async ({ page }) => {

        await page.goto('https://testautomationpractice.blogspot.com/');
        const rows: Locator = page.locator('table[name="BookTable"] tbody tr');
        const allrows: Locator[] = await rows.all();

        let totalPrice: number = 0;
        //Loop through each rows
        for (const row of allrows.slice(1)) {
            //located cells
            const cells: string[] = await row.locator('th, td').allInnerTexts();
            const price = cells[3];

            if (cells[3] !== undefined) {
                console.log("Price:", price);
                totalPrice += parseInt(price!);
            }

        }
        console.log(`Total Price is ${totalPrice}`);
    })

})