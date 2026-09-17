import {test, expect} from '../tests/customFixture.js'

test('Login Test', async({loginPage})=>{

    //All login steps kept in customFixture.ts file, Here customFixture.spec.js is showing that is not an issue.
    await expect(loginPage.getByText('praveen9034@gmail.com')).toBeVisible();

})
