import {Page, Locator} from '@playwright/test'
import { error } from 'node:console'
import { link } from 'node:fs'
import { loadEnvFile } from 'node:process'

export class ProductPage
{
    protected page: Page
    
    readonly swagLabsLogo: Locator
    readonly productPageTitle: Locator
    readonly allItems: Locator
    readonly productName: Locator
    readonly productDescription: Locator
    readonly productPrice: Locator
    readonly addToCart: Locator
    readonly productFilterBtn: Locator
    readonly filterNameAtoZ: Locator
    readonly filterNameZtoA: Locator
    readonly filterNameLtoH: Locator
    readonly filterNameHtoL: Locator
    readonly productPageMenu: Locator
    readonly aboutLink: Locator
    readonly aboutPageText: Locator
    readonly productPageLogout: Locator

    constructor(page: Page)
    {
        this.page = page;
        this.swagLabsLogo = page.locator('.app_logo');
        this.productPageTitle = page.locator('.title');
        this.allItems = page.locator('.inventory_item');
        this.productName = page.locator('.inventory_item_name');
        this.productDescription = page.locator('.inventory_item_desc');
        this.productPrice = page.locator('.inventory_item_price');
        this.addToCart = page.locator('.btn.btn_primary');
        this.productFilterBtn = page.locator('.product_sort_container');
        this.filterNameAtoZ = page.locator('.product_sort_container').filter({hasText: 'Name (A to Z)'});
        this.filterNameZtoA = page.locator('.product_sort_container').filter({hasText: 'Name (Z to A)'});
        this.filterNameLtoH = page.locator('.product_sort_container').filter({hasText: 'Price (low to high)'});
        this.filterNameHtoL = page.locator('.product_sort_container').filter({hasText: 'Price (high to low)'});
        this.productPageMenu = page.locator('#react-burger-menu-btn');
        this.aboutLink = page.getByRole('link',{name: 'About'});
        this.aboutPageText = page.getByText('Verify AI-generated code at the pace');
        this.productPageLogout= page.locator('#logout_sidebar_link');
    }

    async isPageLogoPresent(): Promise<boolean>
    {
        return await this.swagLabsLogo.isVisible();
    }

    async isProductPageTitlePresent(): Promise<boolean>
    {
        return await this.productPageTitle.isVisible();
    }

    async validateAllProducts()
    {
        const productName = await this.productName.allTextContents();
        const desc = await this.productDescription.allTextContents();
        const prices = await this.productPrice.allTextContents();
        const cartBtn = await this.addToCart.count();

        console.log(`Product Name: ${productName}`);
        console.log(`Product Descriptio: ${desc}`);
        console.log(`Product Price: ${prices}`);
        console.log(`AddToCart button Count: ${cartBtn}`);

        if(productName.length === 0)
            throw new Error("No Products available");

        if(productName.length !== desc.length || desc.length !== prices.length || prices.length !== cartBtn)
            throw new Error("Mismatching elements")
        
    }

    async addFirstItemtoCart()
    {
        await this.addToCart.first().click();
    }
    
    async addAllItemtoCart()
    {
       while (await this.addToCart.count() > 0)
        {
            await this.addToCart.first().click();
        }
    }

    async addSpecificItem(itemName: string[]): Promise<void>
    {
        for (const itemNames of itemName) 
            {
             const product = this.allItems.filter({hasText: itemNames});
                if(await product.count() === 0)
                    throw new Error(`Product not found: ${itemName}`)
             await product.getByRole('button',{name: 'Add to cart'}).click();
        }
       
        
    }

    async productFilterAtoZ()
    {
        await this.filterNameAtoZ.selectOption('az');
    }

    async productFilterZtoA()
    {
        await this.filterNameZtoA.selectOption('za');
    }

    async productFilterLowtoHigh()
    {
        await this.filterNameLtoH.selectOption('lohi')
    }

    async productFilterHightoLow()
    {
        await this.filterNameHtoL.selectOption('hilo')
    }

    async getProductNames(): Promise<string[]>
    {
        const productName = await this.productName.allTextContents();
        return productName;
    }

    async getProductPrices(): Promise<number []>
    {
        const prices = await this.productPrice.allTextContents();
        return prices.map(price=>parseFloat(price.replace('$', '')));
    }

    async productMenuClick(): Promise<void>
    {
        await this.productPageMenu.click();
        await this.aboutLink.click();
    }

    async logout(): Promise<void>
    {
        await this.productPageLogout.click();
    }

    
}