import { test, expect, chromium } from '@playwright/test';

/* 
Annotation in playwright:
    1. only (Mostly we use)
    2. skip (Mostly we use)
    3. fail
    4. fixme
    5. slow
*/

//Run only this test
test('Test 1', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

});

//Don't run this test
test.skip('Test 2', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

});

//Condition based skip, browserName is global config file is chromium.
//chromium !== webkit -> true so this test is skipped.
test('WebKit specific test', async ({ page, browserName }) => {

    test.skip(
        browserName !== 'webkit',
        'This test runs only on WebKit'
    );

    // test steps
});

//Test has a known issue and needs fixing. Ex: Coding is not completed fully.
test('Test 3', async ({ page }) => {

    test.fixme(true, 'Yet to start code');
    await page.goto('https://www.amazon.in/');

    // test code

});

//Test is expected to fail. Intentionally failing.
test('Test 4', async ({ page }) => {

    test.fail(true, 'Known defect: DE12345');
    await page.goto('https://www.amazon.in/');

    // test code

});


//Give the test more time - 3 time slower, Normal wait time 30 secs. This test will take 90 secs time.
test('Test 5', async ({ page }) => {

    test.slow(true, 'Amazon website is slow');
    await page.goto('https://www.amazon.in/');

    // test

});
