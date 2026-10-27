POM - Page Object Model.

* Page Object Model (POM) is a design pattern used in test automation to separate test logic from page locators and page actions.

Example: Folder structure
Playwright_Automation/
│
├── pages/ - Maintains Locators and actions. (Properties and Methods)
│   ├── LoginPage.ts 
│   ├── HomePage.ts
│   └── PolicyPage.ts
│
├── tests/ - Actual test steps along with assertions.
│   ├── login.spec.ts
│   └── policy.spec.ts
│
├── fixtures/ - We can create custom fixture for login.
│   └── testFixtures.ts
│
├── environment/ - We can maintain login url and credentials.
│   └── .env
|
├── utils/ - Read test data from excel to avoid hard coding.
│   └── excelUtils.ts
│
├── test-data/ - Testdata file.
│   └── LoginData.xlsx
│
└── playwright.config.ts - central configuration file for a Playwright project.

pages - Maintain Locators and actions in methods
tests - Actual test along with assertions.

------------------------------------------------------------
What are the advantages of POM?", you can answer:

"The main advantages of POM are maintainability, reusability, readability, reduced code duplication, easier handling of UI changes, and scalability. We keep locators and reusable page actions inside Page Objects, while keeping test scenarios and assertions in the test layer. This makes the automation framework easier to maintain as the application and test suite grow."

Easy way to remember

POM = MRRSS

M → Maintainability
R → Reusability
R → Readability
S → Single place for locators/actions
S → Scalability

--------------------------------------
1. Create one .env file under environment folder.
    Provide login url, username , password.
2. create one envConfig.ts file under config folder.
    It reads and organizes the values that we have defined in the .env file.
3. Go to playwright.config.ts file define the baseUrl.
    use: {
    baseURL: envConfig.baseURL}
4. Pages - Create a class file (LoginPage) and add locators and actions.
5. tests - Create a test file and import - (test from playwright/test , LoginPage from pages, envConfig from config folders).
6. Create a object to call locators and methods from LoginPage class.

-------------------------------------------------------------------------
Testing https://www.saucedemo.com/ application.

a. Login Page validation.
b. Product Page validation.
    1. validate page title.
    2. validate allproducts, description and price and first item.
    3. validate add all item to cart.
    4. validate specific item to cart.
    5. validate dropdown - Map, replace, filter, sort.
       * map- is used to handle price to replace $(Currency symbol).
       * filter- is used in locator to idenfity dropdown values.
       * sort- is used to sort the products and price is a to z, z to a, low to high, high to low.
    6. validate logout.

