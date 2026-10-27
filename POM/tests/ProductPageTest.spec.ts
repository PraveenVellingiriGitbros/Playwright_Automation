import { test, expect } from "@playwright/test";
import { envConfig } from "../config/envConfig";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { productToCart } from "../test-data/product";

test.describe('Product Page Validation', ()=>{
    
    let loginPage : LoginPage;
    let productPage: ProductPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await page.goto('/');
        await loginPage.login(envConfig.username,envConfig.password)
        await expect(page).toHaveURL(/inventory/);
    })

    test('Test Product Page Title', async({page})=>{
    
        const logo = productPage.isPageLogoPresent;
        expect(logo).toBeTruthy();

        const title = productPage.isProductPageTitlePresent
        expect(title).toBeTruthy();

        await productPage.productMenuClick();
        await productPage.logout();

    })

    test('Test all Products and add first item', async({page})=>{

        await productPage.validateAllProducts();
        await productPage.addFirstItemtoCart();

    })

    test('Test to add all Products to Cart', async({page})=>{

        await productPage.addAllItemtoCart();
        await page.waitForTimeout(3000);
    })

    test('Test to add Specific Item', async({page})=>{
        //To test with multiple test data we can use array - Test Management.
        //Created test data folder and stored test data in array. Imported in this test.
        //File name: product.ts
        await productPage.addSpecificItem(productToCart);
        await page.waitForTimeout(3000);
    })

    test('Test to sort product A to Z', async({page})=>{

        await productPage.productFilterAtoZ();
        const names = await productPage.getProductNames();
        const sorted = [...names].sort();
        expect(names).toEqual(sorted);
        await page.waitForTimeout(3000);

    })

    test('Test to sort product Z to A', async({page})=>{

        await productPage.productFilterZtoA();
        const names = await productPage.getProductNames();
        const sorted = [...names].sort().reverse();
        expect(names).toEqual(sorted);
        await page.waitForTimeout(3000);
    })

    test('Test to sort product price Low to High', async({page})=>{

        await productPage.productFilterLowtoHigh();
        const price = await productPage.getProductPrices();
        const priceSorted = price.sort((a,b)=>a-b); //Ascending: (a, b) => a - b
        expect(price).toEqual(priceSorted);
        console.log(`Sorted Prices Low to High: ${priceSorted}`);
    
        await page.waitForTimeout(3000);
    })

    test('Test to sort product price High to Low', async({page})=>{

        await productPage.productFilterHightoLow();
        const price = await productPage.getProductPrices();
        const priceSorted = price.sort((a,b)=>b-a); // Descending: (a, b) => b - a
        expect(price).toEqual(priceSorted);
        console.log(`Sorted Prices High to Low: ${priceSorted}`);
        await page.waitForTimeout(3000);
    })

    test('validate about and logout from Product page', async({page})=>{

        await productPage.productMenuClick();
        await expect(productPage.aboutPageText).toBeVisible();;
        await page.goBack();
        await productPage.productPageMenu.click();
        await productPage.logout();

    })

})