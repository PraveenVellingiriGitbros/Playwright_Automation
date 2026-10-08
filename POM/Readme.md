# POM – Page Object Model

## 1. What is POM?

**Page Object Model (POM)** is a design pattern used in test automation to separate **test scenarios and assertions** from **page locators and reusable page actions**.

The main objective of POM is to make the automation framework:

* Maintainable
* Reusable
* Readable
* Scalable
* Easier to handle when the application's UI changes

### Core Principle

> **Pages define HOW to interact with the application.**
> **Tests define WHAT to validate.**

---

# 2. Real-Time Project Folder Structure

```text
Playwright_Automation/
│
├── pages/                         # Page Objects: locators + reusable actions
│   ├── LoginPage.ts
│   ├── HomePage.ts
│   └── PolicyPage.ts
│
├── tests/                         # Test scenarios + assertions
│   ├── login.spec.ts
│   └── policy.spec.ts
│
├── fixtures/                      # Custom fixtures / reusable setup
│   └── testFixtures.ts
│
├── config/                        # Framework configuration
│   └── envConfig.ts
│
├── environment/                   # Environment configuration
│   └── .env
│
├── utils/                         # Reusable utility functions
│   └── excelUtils.ts
│
├── test-data/                     # External test data
│   └── LoginData.xlsx
│
└── playwright.config.ts            # Central Playwright configuration
```

---

# 3. Purpose of Each Folder

### pages/

Maintains **locators and reusable actions** using class properties and methods.

Example:

```text
LoginPage.ts
    ↓
Locators
    ↓
Username
Password
Login Button

Methods
    ↓
login()
```

The Page Object handles **how the application is interacted with**.

---

### tests/

Contains the **actual test scenarios, test steps and assertions**.

Example:

```text
login.spec.ts
    ↓
Navigate to application
    ↓
Login
    ↓
Verify successful login
```

The test should focus on the **business scenario**, rather than locator implementation details.

---

### fixtures/

Used to create **custom Playwright fixtures** for reusable setup, authentication, Page Objects and dependencies.

For example, instead of creating:

```ts
const loginPage = new LoginPage(page);
```

in every test, a custom fixture can provide `loginPage` directly to the test.

---

### config/

Contains framework-level configuration files.

For example:

```text
config/
└── envConfig.ts
```

`envConfig.ts` reads and organizes environment values from the `.env` file.

---

### environment/

Maintains environment-specific configuration such as:

* Application URL
* Username
* Password
* Other environment variables

Example:

```env
BASE_URL=https://www.saucedemo.com/
APP_USERNAME=standard_user
APP_PASSWORD=secret_sauce
```

> In a real project, sensitive credentials should not be committed to GitHub. They should preferably come from CI/CD variables or a secret-management solution.

---

### utils/

Contains **generic reusable utility functions**.

Examples:

```text
Excel utility
Date utility
File utility
API utility
String utility
```

For example:

```text
excelUtils.ts
```

can be used to read test data from Excel instead of hard-coding test data inside test scripts.

---

### test-data/

Contains external test data required by the automation tests.

Examples:

```text
LoginData.xlsx
PolicyData.xlsx
TestData.json
```

Keeping test data separately helps support **data-driven testing**.

---

### playwright.config.ts

This is the **central configuration file for the Playwright project**.

It can contain:

* `testDir`
* `baseURL`
* Timeout
* Browser/project configuration
* Headless/headed execution
* Screenshot
* Video
* Trace
* Retries
* Workers
* Reporters

Example:

```ts
use: {
    baseURL: envConfig.baseURL
}
```

---

# 4. Advantages of POM

The main advantages of POM are:

1. **Maintainability** – Locators and page actions are maintained in a centralized location.
2. **Reusability** – Page methods can be reused across multiple test cases.
3. **Readability** – Tests become easier to understand because business actions are represented by meaningful methods.
4. **Reduced Code Duplication** – Common actions are implemented once and reused.
5. **Easy UI Change Handling** – If a locator changes, it can usually be updated in the corresponding Page Object instead of multiple tests.
6. **Scalability** – The framework can grow as more pages and test scenarios are added.

### Interview Answer

> "The main advantages of POM are maintainability, reusability, readability, reduced code duplication, easier handling of UI changes, and scalability. We keep locators and reusable page actions inside Page Objects, while keeping test scenarios and assertions in the test layer. This makes the automation framework easier to maintain as the application and test suite grow."

### Easy Way to Remember

**POM = MRRSS**

* **M** → Maintainability
* **R** → Reusability
* **R** → Readability
* **S** → Single place for locators and actions
* **S** → Scalability

---

# 5. POM Implementation Flow

## Step 1 – Create `.env`

Create one `.env` file under the `environment` folder.

```text
environment/
└── .env
```

Provide environment configuration values:

```env
BASE_URL=https://www.saucedemo.com/
APP_USERNAME=standard_user
APP_PASSWORD=secret_sauce
```

---

## Step 2 – Create `envConfig.ts`

Create:

```text
config/
└── envConfig.ts
```

Its purpose is to **read and organize the values defined in `.env`**.

Example:

```ts
import dotenv from 'dotenv';

dotenv.config({
    path: 'environment/.env'
});

export const envConfig = {
    baseURL: process.env.BASE_URL!,
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!
};
```

### Flow

```text
.env
 ↓
dotenv
 ↓
envConfig.ts
 ↓
envConfig.baseURL
envConfig.username
envConfig.password
```

---

# 6. Configure Base URL

Go to:

```text
playwright.config.ts
```

Import `envConfig` and configure the `baseURL`.

```ts
import { defineConfig } from '@playwright/test';
import { envConfig } from './config/envConfig';

export default defineConfig({

    use: {
        baseURL: envConfig.baseURL
    }

});
```

Now the test does not need to hard-code the complete URL.

Instead of:

```ts
await page.goto('https://www.saucedemo.com/');
```

we can use:

```ts
await page.goto('/');
```

Playwright uses the configured `baseURL`.

---

# 7. Create Page Object

Create:

```text
pages/
└── LoginPage.ts
```

The Page Object contains:

* Locators as properties
* Reusable actions as methods

Example:

```ts
import { Locator, Page } from '@playwright/test';

export class LoginPage {

    protected page: Page;

    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {

        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async login(username: string, password: string) {

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}
```

### Page Object responsibility

```text
LoginPage
│
├── Properties
│   ├── usernameInput
│   ├── passwordInput
│   └── loginButton
│
└── Methods
    └── login()
```

---

# 8. Create Test

Create:

```text
tests/
└── login.spec.ts
```

Import:

* `test` and `expect` from Playwright
* `LoginPage` from the `pages` folder
* `envConfig` from the `config` folder

Example:

```ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { envConfig } from '../config/envConfig';

test('Valid Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('/');

    await loginPage.login(
        envConfig.username,
        envConfig.password
    );

    await expect(page).toHaveURL(/inventory/);

});
```

---

# 9. Creating an Object of Page Object Class

This line:

```ts
const loginPage = new LoginPage(page);
```

creates an **object of the `LoginPage` class**.

The object can then be used to access the methods and properties defined in `LoginPage`.

For example:

```ts
await loginPage.login(
    envConfig.username,
    envConfig.password
);
```

### Simple understanding

```text
LoginPage class
      ↓
new LoginPage(page)
      ↓
loginPage object
      ↓
loginPage.login()
```

The `page` fixture provided by Playwright is passed into the `LoginPage` constructor.

---

# 10. Overall Framework Flow

```text
                    .env
                     │
                     ▼
                envConfig.ts
                     │
                     ▼
             playwright.config.ts
                     │
                     ▼
                   Test
                     │
                     ▼
             LoginPage object
                     │
                     ▼
              Page Object Class
                     │
             ┌───────┴────────┐
             ▼                ▼
          Locators          Methods
             │                │
             └───────┬────────┘
                     ▼
                Application
```

### One-Line Summary

> **`.env` manages environment values → `envConfig` reads them → `playwright.config` configures Playwright → Page Objects manage locators/actions → Tests execute scenarios and assertions.**
