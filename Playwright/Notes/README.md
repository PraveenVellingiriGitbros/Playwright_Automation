# Playwright Automation with TypeScript

My practical notes for learning and building a real-time Playwright automation framework using **TypeScript**.

---

# 📚 Table of Contents

1. [Why Playwright?](#1-why-playwright)
2. [Playwright Installation & Setup](#2-playwright-installation--setup)
3. [Important Playwright Commands](#3-important-playwright-commands)
4. [Playwright Architecture](#4-playwright-architecture)

   * [Browser](#41-browser)
   * [BrowserContext](#42-browsercontext)
   * [Page](#43-page)
5. [Locators](#5-locators)

   * [GetBy Locators](#51-getby-locators)
   * [XPath Locators](#52-xpath-locators)
   * [Locator Priority](#53-locator-priority)
6. [Browser Interactions](#6-browser-interactions)

   * [Fill](#61-fill)
   * [Clear](#62-clear)
   * [Click](#63-click)
   * [Check & Uncheck](#64-check--uncheck)
   * [Double Click](#65-double-click)
   * [Right Click](#66-right-click)
   * [Keyboard Actions](#67-keyboard-actions)
   * [Focus](#68-focus)
   * [Drag and Drop](#69-drag-and-drop)
   * [File Upload](#610-file-upload)
   * [Hover](#611-hover)
   * [Scrolling](#612-scrolling)
7. [Waits & Synchronization](#7-waits--synchronization)

   * [Auto Waiting](#71-auto-waiting)
   * [Explicit Waits](#72-explicit-waits)
   * [Page Load States](#73-page-load-states)
   * [Wait for URL](#74-wait-for-url)
   * [Wait for Events](#75-wait-for-events)
8. [Reading Text, Values & Attributes](#8-reading-text-values--attributes)
9. [Browser Tabs, Popups & Windows](#9-browser-tabs-popups--windows)

   * [New Tab](#91-new-tab)
   * [Popup](#92-popup)
10. [Dialogs / Alerts](#10-dialogs--alerts)
11. [iFrames](#11-iframes)
12. [Hooks](#12-hooks)

* [beforeAll](#121-beforeall)
* [beforeEach](#122-beforeeach)
* [afterEach](#123-aftereach)
* [afterAll](#124-afterall)

13. [Fixtures](#13-fixtures)

* [Built-in Fixtures](#131-built-in-fixtures)
* [Custom Fixtures](#132-custom-fixtures)

14. [File Upload](#14-file-upload)
15. [Screenshots](#15-screenshots)
16. [Trace](#16-trace)
17. [Video Recording](#17-video-recording)
18. [Web Tables](#18-web-tables)

* [Static Tables](#181-static-tables)
* [Dynamic Tables](#182-dynamic-tables)
* [Finding Data in Tables](#183-finding-data-in-tables)
* [Calculating Table Values](#184-calculating-table-values)

19. [Test Tagging](#19-test-tagging)
20. [Playwright Reports & Debugging](#20-playwright-reports--debugging)
21. [Real-Time Project Best Practices](#21-real-time-project-best-practices)
22. [Current Learning Progress](#22-current-learning-progress)
23. [Next Topics to Learn](#23-next-topics-to-learn)
24. [Quick Recap](#24-quick-recap)

---

# 1. Why Playwright?

Playwright is a modern end-to-end automation framework developed by **Microsoft**.

It supports:

* Chromium
* Firefox
* WebKit
* API testing
* Network interception
* Screenshots
* Trace Viewer
* Video recording
* Parallel execution
* Device/browser emulation
* Auto-waiting
* Modern locators
* Shadow DOM handling

## Playwright vs Selenium

| Selenium                                        | Playwright                    |
| ----------------------------------------------- | ----------------------------- |
| WebDriver required                              | No WebDriver required         |
| More manual synchronization                     | Built-in auto-waiting         |
| Can be slower depending on setup                | Generally fast                |
| Network mocking requires additional setup       | Built-in network interception |
| API testing usually separate                    | API testing supported         |
| Reporting requires additional setup             | HTML report built in          |
| Shadow DOM handling requires more explicit work | Direct support                |
| Device/browser emulation needs additional setup | Built-in emulation            |

### Why companies prefer Playwright

* Faster execution
* Less flaky tests
* Auto-waiting
* Better locator strategy
* Cross-browser support
* Parallel execution
* Easy debugging
* API testing
* Network mocking
* Screenshots, traces and videos

### Quick Recap

> Playwright = Modern + Fast + Stable + Easy Debugging + Cross Browser

---

# 2. Playwright Installation & Setup

Install project dependencies:

```bash
npm install
```

Check Playwright version:

```bash
npm list @playwright/test
```

Install browsers:

```bash
npx playwright install
```

If VS Code behaves unexpectedly:

```text
Command + Shift + P
→ Developer: Reload Window
```

Check available tests:

```bash
npx playwright test --list
```

## First Playwright Test

```ts
import { test } from '@playwright/test';

test('Open Google', async ({ page }) => {

    await page.goto('https://www.google.com/');

    await page.locator('[name="q"]').fill('Selenium');

});
```

---

# 3. Important Playwright Commands

| Command                                   | Purpose                   |
| ----------------------------------------- | ------------------------- |
| `npx playwright test`                     | Run all tests             |
| `npx playwright test --headed`            | Run with browser visible  |
| `npx playwright test --debug`             | Debug test                |
| `npx playwright test --ui`                | Open UI mode              |
| `npx playwright test --project=chromium`  | Run Chromium project      |
| `npx playwright test tests/login.spec.ts` | Run specific file         |
| `npx playwright test -g "Test Name"`      | Run test by name          |
| `npx playwright show-report`              | Open HTML report          |
| `npx playwright codegen`                  | Generate locators/actions |
| `npx playwright test --trace=on`          | Run with trace            |

### Recommended during learning

```bash
npx playwright test --headed
```

```bash
npx playwright test --debug
```

```bash
npx playwright test --ui
```

---

# 4. Playwright Architecture

The basic Playwright hierarchy is:

```text
Browser
   ↓
BrowserContext
   ↓
Page
```

## 4.1 Browser

The browser represents the browser instance.

Example:

```ts
const browser = await chromium.launch({
    headless: false
});
```

---

## 4.2 BrowserContext

A `BrowserContext` represents an isolated browser session.

It manages things like:

* Cookies
* Local storage
* Session storage
* Permissions
* Authentication state

Example:

```ts
const context = await browser.newContext();
```

---

## 4.3 Page

A `Page` represents a browser tab.

```ts
const page = await context.newPage();
```

### Complete example

```ts
const browser = await chromium.launch({
    headless: false
});

const context = await browser.newContext();

const page = await context.newPage();

await page.goto('https://example.com');
```

### Real-Time Project Note

In normal Playwright tests, prefer the built-in `page`, `context`, and `browser` fixtures instead of manually creating everything unless you need special control.

---

# 5. Locators

Locators are used to identify elements on a web page.

Playwright supports modern user-facing locators such as:

* `getByRole`
* `getByLabel`
* `getByPlaceholder`
* `getByText`
* `getByAltText`
* `getByTitle`
* `getByTestId`

---

# 5.1 GetBy Locators

## getByText

```ts
await page.getByText('important', {
    exact: true
}).isVisible();
```

## getByRole

```ts
await page.getByRole('button', {
    name: 'Primary Action'
}).click();
```

Textbox:

```ts
await page.getByRole('textbox', {
    name: 'username'
}).fill('Praveen');
```

Checkbox:

```ts
await page.getByRole('checkbox', {
    name: 'Accept terms'
}).check();
```

## getByLabel

```ts
await page.getByLabel('Email Address:')
    .fill('test@example.com');
```

## getByPlaceholder

```ts
await page.getByPlaceholder('Enter your full name')
    .fill('Praveen Vellingiri');
```

## getByAltText

```ts
await page.getByAltText('logo image', {
    exact: true
}).isVisible();
```

## getByTitle

```ts
await page.getByTitle('Home page link').click();
```

## getByTestId

```ts
await page.getByTestId('edit-profile-btn').click();
```

---

# 5.2 XPath Locators

XPath is useful when a stable user-facing locator is not available.

### ID

```xpath
//*[@id='username']
```

### Class

```xpath
//*[@class='value']
```

### Attribute

```xpath
//*[@attribute='value']
```

### Tag + Attribute

```xpath
//input[@id='username']
```

### Text

```xpath
//button[text()='Login']
```

### Contains

```xpath
//input[contains(@name,'user')]
```

### Starts With

```xpath
//input[starts-with(@id,'user')]
```

### AND

```xpath
//input[@class='input_error form_input' and @id='user-name']
```

### OR

```xpath
//input[@placeholder='Password' or @name='password']
```

### Example

```ts
await page.locator(
    "xpath=//input[@class='input_error form_input' and @id='user-name']"
).fill('standard_user');
```

### Important

XPath is powerful, but don't make XPath your first choice.

---

# 5.3 Locator Priority

My preferred order:

```text
1. getByRole()
2. getByLabel()
3. getByPlaceholder()
4. getByText()
5. getByTestId()
6. CSS
7. XPath
```

### Real-Time Project Rule

> Prefer locators that describe how a user sees or interacts with the application.

Avoid very long XPath expressions that break whenever the DOM structure changes.

---

# 6. Browser Interactions

---

# 6.1 Fill

Used to enter text.

```ts
await page.getByPlaceholder('Enter Name')
    .fill('Praveen');
```

---

# 6.2 Clear

```ts
await page.locator('#name').clear();
```

---

# 6.3 Click

```ts
await page.getByRole('button', {
    name: 'Login'
}).click();
```

---

# 6.4 Check & Uncheck

Checkbox:

```ts
await page.getByRole('checkbox', {
    name: 'Accept terms'
}).check();
```

```ts
await page.getByRole('checkbox', {
    name: 'Accept terms'
}).uncheck();
```

Radio button:

```ts
await page.getByRole('radio', {
    name: 'Standard'
}).check();
```

> `uncheck()` is for checkboxes. Radio buttons can be checked, but normally cannot be unchecked independently.

---

# 6.5 Double Click

```ts
await page.getByText('Copy Text').dblclick();
```

---

# 6.6 Right Click

```ts
await page.getByRole('button', {
    name: 'Start'
}).click({
    button: 'right'
});
```

---

# 6.7 Keyboard Actions

Press Enter:

```ts
await page.locator('#search').press('Enter');
```

Mac shortcuts:

```ts
await page.keyboard.press('Meta+A');

await page.keyboard.press('Meta+C');

await page.keyboard.press('Meta+V');
```

Windows/Linux:

```ts
await page.keyboard.press('Control+A');
```

---

# 6.8 Focus

```ts
await page.getByPlaceholder('Enter Phone').focus();
```

---

# 6.9 Drag and Drop

```ts
await page.dragAndDrop(
    '#draggable',
    '#droppable'
);
```

---

# 6.10 File Upload

Single file:

```ts
await page.locator('#singleFileInput')
    .setInputFiles('./test-data/file.pdf');
```

Multiple files:

```ts
await page.locator('#multipleFilesInput')
    .setInputFiles([
        './test-data/file1.pdf',
        './test-data/file2.pdf'
    ]);
```

---

# 6.11 Hover

```ts
await page.locator('.dropdown').hover();
```

Useful for:

* Dropdown menus
* Tooltips
* Hover menus

---

# 6.12 Scrolling

Scroll element into view:

```ts
await page.getByText('Point Me')
    .scrollIntoViewIfNeeded();
```

Mouse scroll:

```ts
await page.mouse.wheel(0, 1300);
```

---

# 7. Waits & Synchronization

One of the biggest advantages of Playwright is **auto-waiting**.

Playwright automatically waits for an element to become actionable before many interactions.

### Important

Don't assume every Playwright step simply waits 30 seconds.

Typical defaults include:

* Test timeout: 30 seconds
* Expect timeout: 5 seconds
* Locator action timeout: configurable; default is generally no separate action timeout unless configured

Your project can override these values in `playwright.config.ts`.

---

# 7.1 Auto Waiting

Instead of:

```ts
await page.waitForTimeout(5000);
await page.getByRole('button', {
    name: 'Login'
}).click();
```

Prefer:

```ts
await page.getByRole('button', {
    name: 'Login'
}).click();
```

Playwright waits for the required actionability conditions.

---

# 7.2 Explicit Waits

Wait for visible:

```ts
await emailTextbox.waitFor({
    state: 'visible'
});
```

Wait for attached:

```ts
await deleteButton.waitFor({
    state: 'attached'
});
```

Wait for detached:

```ts
await deleteButton.waitFor({
    state: 'detached'
});
```

Wait for hidden:

```ts
await button.waitFor({
    state: 'hidden'
});
```

---

# 7.3 Page Load States

```ts
await page.waitForLoadState('load');
```

```ts
await page.waitForLoadState('domcontentloaded');
```

```ts
await page.waitForLoadState('networkidle');
```

### Real-Time Project Note

Don't use `networkidle` blindly. Modern applications can keep network connections open.

Prefer waiting for the actual application state you need.

---

# 7.4 Wait for URL

```ts
await page.waitForURL(/login/);
```

---

# 7.5 Wait for Events

Common events:

| Event         | Usage                   |
| ------------- | ----------------------- |
| `page`        | New tab/page            |
| `popup`       | Popup opened from page  |
| `dialog`      | Alert/confirm/prompt    |
| `download`    | File download           |
| `filechooser` | File selection          |
| `request`     | Network request         |
| `response`    | Network response        |
| `console`     | Browser console message |

Example:

```ts
const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('#PopUp').click()
]);
```

### Avoid

```ts
await page.waitForTimeout(5000);
```

Use it only when there is a genuine reason. It should not be the normal synchronization strategy.

---

# 8. Reading Text, Values & Attributes

Important Playwright methods:

| Method              | Returns          | Usage                 |
| ------------------- | ---------------- | --------------------- |
| `innerText()`       | `string`         | Visible/rendered text |
| `textContent()`     | `string \| null` | Text content          |
| `allInnerTexts()`   | `string[]`       | All visible texts     |
| `allTextContents()` | `string[]`       | All text contents     |
| `all()`             | `Locator[]`      | Matching locators     |
| `count()`           | `number`         | Number of elements    |
| `nth()`             | `Locator`        | Specific element      |
| `inputValue()`      | `string`         | Input value           |
| `getAttribute()`    | `string \| null` | Attribute value       |

Example:

```ts
const products = page.locator('.product-title');

console.log(
    await products.nth(0).innerText()
);
```

Count:

```ts
const count = await products.count();

console.log(count);
```

Loop:

```ts
for (let i = 0; i < count; i++) {

    const productText =
        await products.nth(i).innerText();

    console.log(productText);
}
```

Get all text:

```ts
const productText =
    await products.allInnerTexts();

console.log(productText);
```

Input value:

```ts
const name =
    await page.locator('#name').inputValue();
```

Attribute:

```ts
const placeholder =
    await page.getByPlaceholder('Enter Name')
        .getAttribute('placeholder');
```

---

# 9. Browser Tabs, Popups & Windows

## 9.1 New Tab

```ts
const [newTab] = await Promise.all([

    context.waitForEvent('page'),

    page.locator('#tabButton').click()

]);

await newTab.waitForLoadState();
```

---

# 9.2 Popup

```ts
const [popup] = await Promise.all([

    page.waitForEvent('popup'),

    page.locator('#PopUp').click()

]);

await popup.waitForLoadState();
```

### Difference

```text
context.waitForEvent('page')
        ↓
New page/tab in the browser context

page.waitForEvent('popup')
        ↓
Popup opened by the current page
```

---

# 10. Dialogs / Alerts

Playwright can handle:

* Alert
* Confirm
* Prompt

Example:

```ts
page.on('dialog', async dialog => {

    console.log(dialog.message());

    await dialog.accept();

});
```

With assertion:

```ts
page.on('dialog', async dialog => {

    expect(dialog.message())
        .toBe('Product added.');

    await dialog.accept();

});
```

### Important

If a dialog appears and your handler does not accept or dismiss it, the page action can remain blocked.

---

# 11. iFrames

Use `frameLocator()` to interact with elements inside an iframe.

```ts
const frame1 =
    page.frameLocator('#firstFr');

await frame1
    .locator('[name="fname"]')
    .fill('Praveen');

await frame1
    .locator('[name="lname"]')
    .fill('V');
```

Nested iframe:

```ts
const frame2 =
    frame1.frameLocator(
        '[title="Inner Frame"]'
    );

await frame2
    .locator('[name="email"]')
    .fill('test@example.com');
```

### Quick Recap

```text
Page
 ↓
Iframe
 ↓
frameLocator()
 ↓
Element
```

---

# 12. Hooks

Playwright provides four important hooks:

| Hook         | When it runs          |
| ------------ | --------------------- |
| `beforeAll`  | Once before all tests |
| `beforeEach` | Before every test     |
| `afterEach`  | After every test      |
| `afterAll`   | Once after all tests  |

---

# 12.1 beforeAll

Use for true one-time setup.

```ts
test.beforeAll(async () => {

    console.log('Run once before tests');

});
```

Examples:

* Environment setup
* Database preparation
* One-time initialization

---

# 12.2 beforeEach

Runs before every test.

```ts
test.beforeEach(async ({ page }) => {

    await page.goto('/login');

});
```

Common use:

* Login
* Navigate to application
* Reset test state

---

# 12.3 afterEach

```ts
test.afterEach(async ({ page }) => {

    console.log('Cleanup after test');

});
```

---

# 12.4 afterAll

```ts
test.afterAll(async () => {

    console.log('Run once after tests');

});
```

### Real-Time Project Note

Avoid sharing the same `page` between independent tests in a parallel test suite.

Prefer Playwright's test-scoped fixtures for isolation.

---

# 13. Fixtures

Fixtures provide objects required by tests.

## 13.1 Built-in Fixtures

Common Playwright fixtures:

```text
browser
context
page
```

### Using browser

```ts
test('Fixture 1', async ({ browser }) => {

    const context =
        await browser.newContext();

    const page =
        await context.newPage();

    await page.goto('https://example.com');

});
```

### Using context

```ts
test('Fixture 2', async ({ context }) => {

    const page =
        await context.newPage();

});
```

### Using page

```ts
test('Fixture 3', async ({ page }) => {

    await page.goto('https://example.com');

});
```

---

# 13.2 Custom Fixtures

Custom fixtures allow us to centralize reusable setup.

Example:

```ts
import { test, expect }
    from '../tests/customFixture.js';

test('Login Test', async ({ loginPage }) => {

    await expect(
        loginPage.getByText('test@example.com')
    ).toBeVisible();

});
```

### Real-Time Project Usage

Custom fixtures can be used for:

* Login
* Page objects
* Test data
* API setup
* Reusable application state

This becomes very useful as the automation framework grows.

---

# 14. File Upload

Playwright uses `setInputFiles()` for file uploads.

```ts
await page.goto(
    'https://letcode.in/file'
);

await page.locator('[id="resume"]')
    .setInputFiles(
        './test-data/Praveen_Vellingiri_Resume.pdf'
    );

await expect(
    page.getByText('Selected File: ')
).toBeVisible();
```

Read selected filename:

```ts
const filename =
    await page.locator('.mt-3').textContent();

console.log(filename);
```

### Project Note

Don't commit personal/local absolute file paths.

Prefer:

```text
test-data/
    file.pdf
```

or construct paths using `path.resolve()`.

---

# 15. Screenshots

## Full Page

```ts
await page.screenshot({
    path: 'screenshots/fullpage.png',
    fullPage: true
});
```

## Element Screenshot

```ts
await page.getByAltText(
    'Tricentis Demo Web Shop'
).screenshot({
    path: 'screenshots/logo.png'
});
```

## Section Screenshot

```ts
await page.locator('.product-grid')
    .screenshot({
        path: 'screenshots/ProductSection.png'
    });
```

## Screenshot on Failure

In `playwright.config.ts`:

```ts
use: {
    screenshot: 'only-on-failure'
}
```

Common values:

```text
off
on
on-first-failure
only-on-failure
```

### Recommended

```ts
screenshot: 'only-on-failure'
```

---

# 16. Trace

Trace is one of the most useful Playwright debugging features.

Configuration:

```ts
use: {
    trace: 'retain-on-failure'
}
```

Recommended:

```ts
trace: 'retain-on-failure'
```

Trace helps inspect:

* Actions
* Locators
* Screenshots
* Network activity
* Page state
* Timing
* Errors

Open a trace:

```bash
npx playwright show-trace path/to/trace.zip
```

### Real-Time Project Note

When a test fails in CI, trace is often much more useful than simply looking at the error message.

---

# 17. Video Recording

Configuration:

```ts
use: {
    video: 'retain-on-failure'
}
```

Useful options include:

```text
on
off
on-all-retries
on-first-retry
retain-on-failure
retain-on-failure-and-retries
retain-on-first-failure
```

### Recommended

```ts
video: 'retain-on-failure'
```

This avoids generating unnecessary videos for every successful test.

---

# 18. Web Tables

Web tables are common in real applications.

Typical requirements:

1. Verify table is visible
2. Get row count
3. Get column count
4. Read complete table
5. Read specific row
6. Find specific data
7. Calculate values

---

# 18.1 Static Tables

Example:

```ts
const table =
    page.locator('table[name="BookTable"]');

const rows =
    table.locator('tbody tr');

const rowCount =
    await rows.count();

console.log(rowCount);
```

First row:

```ts
const firstRow =
    rows.first();
```

Column count:

```ts
const columnCount =
    await firstRow.locator('th').count();
```

---

# 18.2 Reading Complete Table

```ts
const allRows =
    await rows.all();

for (const row of allRows) {

    const cells =
        await row.locator('th, td').allInnerTexts();

    console.log(
        cells.map(value => value.trim())
    );
}
```

---

# 18.3 Finding Data in Tables

Example: Find Amit.

```ts
for (const row of allRows) {

    const cells =
        await row.locator('th, td').allInnerTexts();

    if (cells[1] === 'Amit') {

        console.log('Amit found');
        console.log(cells);

    }
}
```

---

# 18.4 Calculating Table Values

Example: Calculate total price.

```ts
let totalPrice = 0;

for (const row of allRows.slice(1)) {

    const cells =
        await row.locator('th, td').allInnerTexts();

    const price = Number(cells[3]);

    if (!Number.isNaN(price)) {

        totalPrice += price;

    }
}

console.log(totalPrice);
```

### Important

When calculating values from web tables, always verify that the extracted value is actually numeric.

Otherwise:

```text
Number('500') → 500

Number('') → 0

Number('N/A') → NaN
```

---

# 19. Test Tagging

Tags help run selected groups of tests.

Example:

```ts
test('Check URL', {
    tag: '@sanity'
}, async ({ page }) => {

    await page.goto('https://example.com');

});
```

Multiple tags:

```ts
test('Input laptop', {
    tag: ['@regression']
}, async ({ page }) => {

});
```

---

## Run Sanity Tests

```bash
npx playwright test tests/tagging.spec.ts \
--grep "@sanity"
```

Run everything except sanity:

```bash
npx playwright test tests/tagging.spec.ts \
--grep-invert "@sanity"
```

Configuration:

```ts
grep: /@regression/,
```

### Important

Run commands from the project root where:

```text
package.json
playwright.config.ts
```

are available.

---

# 20. Playwright Reports & Debugging

Useful debugging tools:

```text
HTML Report
Screenshots
Trace
Video
Debug Mode
UI Mode
Codegen
```

Open HTML report:

```bash
npx playwright show-report
```

Debug:

```bash
npx playwright test --debug
```

UI mode:

```bash
npx playwright test --ui
```

Headed mode:

```bash
npx playwright test --headed
```

---

# 21. Real-Time Project Best Practices

These are the rules I want to follow when moving from learning to a real automation framework.

## 1. Prefer stable locators

Good:

```ts
page.getByRole('button', {
    name: 'Login'
})
```

Avoid:

```ts
page.locator(
    'div:nth-child(3) > div:nth-child(2) > button'
)
```

---

## 2. Avoid hard waits

Avoid:

```ts
await page.waitForTimeout(5000);
```

Prefer:

```ts
await expect(
    page.getByText('Dashboard')
).toBeVisible();
```

---

## 3. Keep tests independent

Each test should ideally be able to run independently.

---

## 4. Don't share pages unnecessarily

Avoid using one page globally across multiple parallel tests.

Use:

```ts
async ({ page }) => {
}
```

---

## 5. Keep test data separate

Instead of:

```ts
await page.fill('#username', 'some-user');
```

Eventually move test data into:

```text
test-data/
```

or configuration/data files.

---

## 6. Don't commit credentials

Avoid storing:

```text
username
password
API keys
tokens
```

directly in GitHub.

Use environment variables or secure CI secrets.

---

## 7. Don't commit `test.only`

During development:

```ts
test.only(...)
```

is useful.

But before committing:

```text
Remove test.only
```

Otherwise CI may execute only one test.

---

## 8. Keep debugging artifacts controlled

Recommended:

```ts
screenshot: 'only-on-failure'

trace: 'retain-on-failure'

video: 'retain-on-failure'
```

This gives useful debugging information without generating unnecessary files.

---

# 22. Current Learning Progress

Based on the topics covered so far:

| Topic                    | Status    |
| ------------------------ | --------- |
| Why Playwright           | ✅ Covered |
| Installation             | ✅ Covered |
| Playwright commands      | ✅ Covered |
| Basic test               | ✅ Covered |
| Browser / Context / Page | ✅ Covered |
| GetBy locators           | ✅ Covered |
| XPath                    | ✅ Covered |
| Interactions             | ✅ Covered |
| Keyboard actions         | ✅ Covered |
| Drag & Drop              | ✅ Covered |
| Hover                    | ✅ Covered |
| Scrolling                | ✅ Covered |
| Waits                    | ✅ Covered |
| Tabs / Popups            | ✅ Covered |
| Dialogs                  | ✅ Covered |
| iFrames                  | ✅ Covered |
| Hooks                    | ✅ Covered |
| Fixtures                 | ✅ Covered |
| Custom Fixtures          | ✅ Covered |
| File Upload              | ✅ Covered |
| Screenshots              | ✅ Covered |
| Trace                    | ✅ Covered |
| Video                    | ✅ Covered |
| Text extraction          | ✅ Covered |
| Web Tables               | ✅ Covered |
| Dynamic Tables           | ✅ Covered |
| Test Tagging             | ✅ Covered |
| HTML Report              | ✅ Covered |

---

# 23. Next Topics to Learn

After these fundamentals, the next important framework topics are:

```text
1. Page Object Model (POM)
2. Page Object Manager / POManager
3. Test Data Management
4. JSON Test Data
5. Environment Configuration
6. Authentication / storageState
7. API Testing
8. Network Interception / Mocking
9. Parameterization
10. Reusable Custom Fixtures
11. Assertions Strategy
12. Parallel Execution
13. Retry Strategy
14. CI/CD
15. Jenkins / GitHub Actions
16. Allure Reporting
17. Framework Folder Structure
18. Logging
19. Error Handling
20. End-to-End Real Project Framework
```

---

# 24. Quick Recap

```text
Playwright
   ↓
Browser
   ↓
BrowserContext
   ↓
Page
   ↓
Locators
   ↓
Actions
   ↓
Assertions
   ↓
Waits
   ↓
Fixtures
   ↓
Hooks
   ↓
Test Data
   ↓
Reports
   ↓
CI/CD
```

### My main Playwright rules

```text
1. Prefer getByRole / getByLabel / stable locators
2. Avoid unnecessary XPath
3. Don't use hard waits unnecessarily
4. Use auto-waiting and web-first assertions
5. Keep tests independent
6. Use fixtures for reusable setup
7. Use trace/screenshots/video for failures
8. Keep test data separate
9. Never commit credentials
10. Remove test.only before pushing code
```

---

## Final Learning Goal

The goal is not just to write Playwright scripts.

The goal is to build a **maintainable automation framework** that can support:

```text
Multiple Applications
        ↓
Multiple Test Suites
        ↓
Multiple Environments
        ↓
Parallel Execution
        ↓
CI/CD
        ↓
Reliable Reports
```

> **Learn the Playwright feature → understand where it fits → use it in a real project → convert it into reusable framework code.**

---

## End of Current Playwright Notes

---
