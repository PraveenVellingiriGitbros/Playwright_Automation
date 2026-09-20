import {expect, test} from '@playwright/test'

test('Check the URL is UP',{tag: '@sanity'}, async ({ page }) => {

    await page.goto('https://www.amazon.in/');
});

test('Input laptop',{tag: ['@regression']}, async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('[id="twotabsearchtextbox"]').fill('laptop');
    await page.locator('[id="twotabsearchtextbox"]').press('Enter');
});

test('Verify Logo',{tag: '@sanity'},async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    await expect(page.getByAltText('Tricentis Demo Web Shop')).toBeVisible();

})

/* 
========================== PLAYWRIGHT TAGGING ==========================
1. Run only @sanity tests:
npx playwright test /tests/tagging.spec.ts --grep "@sanity"

2. Run tests that do NOT have @sanity:
npx playwright test /tests/tagging.spec.ts --grep-invert "@sanity" ==> This command will ignore the sanity test tags. invert is opposite of grep.
--grep = Include matching tests 
--grep-invert = Exclude matching tests

========================== CONFIGURATION ==========================
In Playwright.config.ts file
grep: /@regression/, 

========================== IMPORTANT ========================== 
* Run Playwright commands from the main project folder where playwright.config.ts and package.json are located.
* command: npx playwright test tests/tagging.spec.ts
* Since tagging is mentioned in config file only test which has regression will execute.

*/