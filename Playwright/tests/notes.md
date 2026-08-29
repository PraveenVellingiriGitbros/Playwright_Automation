/* 
Why Playwright over Selenium?

Playwright is a modern end-to-end automation framework developed by Microsoft. It provides faster execution, built-in auto-waiting, better stability, and many features that require additional libraries in Selenium.

Selenium has been an industry-standard tool for many years, but Playwright addresses many of Selenium's common challenges, especially for modern web applications.

| Selenium                                 | Playwright                         |
| ---------------------------------------- | ---------------------------------- |
| Requires WebDriver                       | No WebDriver required              |
| Manual waits often needed                | Auto-waiting built in              |
| Slower execution                         | Faster execution                   |
| Limited network interception             | Powerful network mocking           |
| API testing requires separate tools      | Built-in API testing               |
| Reporting needs extra setup              | HTML Report, Trace, Video built in |
| Shadow DOM support is limited            | Native support                     |
| Mobile emulation requires external setup | Built-in                           |

-----------------------------------------------------------------------------------

Why Companies Prefer Playwright
    * Faster execution
    * Less flaky tests
    * Auto-waiting
    * Modern locators
    * Cross-browser testing
    * Parallel execution
    * Built-in debugging tools
    * Easy API testing
    * Easy network mocking


Quick Recap:
    Playwright is a modern automation framework developed by Microsoft. 
    Compared to Selenium, it provides faster execution, built-in auto-waiting, powerful locators, network interception, API testing, parallel execution, and excellent debugging features like Trace Viewer. 
    
    These capabilities reduce flaky tests and improve productivity, making Playwright a preferred choice for many new automation projects."

-------------------------------------------------------------------------------------

| Command                                   | Purpose                    |
| ----------------------------------------- | -------------------------- |
| `npx playwright test`                     | Run all tests              |
| `npx playwright test --headed`            | Open browser while running |
| `npx playwright test --debug`             | Debug tests                |
| `npx playwright test --ui`                | Interactive UI Mode        |
| `npx playwright test --project=chromium`  | Run in Chrome/Chromium     |
| `npx playwright test tests/login.spec.ts` | Run one test file          |
| `npx playwright test -g "Test Name"`      | Run a specific test        |
| `npx playwright show-report`              | View HTML report           |
| `npx playwright codegen`                  | Generate test code         |
| `npx playwright test --trace=on`          | Record execution trace     |
*/

<!-- 
npm install
npm list @playwright/test
npx playwright install
Command + shift + p = Developer: Reload Window - enter
npx playwright test --list
 -->