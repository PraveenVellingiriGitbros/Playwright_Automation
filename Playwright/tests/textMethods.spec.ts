/* 
    1. innerText()
        * innerText() is used to extract the visible text present in the element identified by the locator.
        * Extract only string, eleminates extra spaces, line brakes.
    2. textContent() 
        * textContent() is used to extract all the text content present inside an element identified by the locator.
        * Including hidden text, spaces, line breaks.
        * Use trim() method to eleminates spaces.
    3. allInnerTexts() - Array Formate means Array of string.
        * is used when one locator matches multiple elements and you want to get the visible text of all those elements at once.
        * Extract only string, eleminates extra spaces, line brakes.
    4. allTextContents() - Array Format.
        * is used when one locator matches multiple elements and you want to extract the text content of all those elements at once.
        * Use map(str=>str.trim()) method to eleminates extra spaces and line brakes.
    5. all() Method: Will use this method while working with tables.
        * is used to get all elements matching a Locator as an array of individual Locator objects.


    | Method              | What it does                                      | Return           |
    | ------------------- | ------------------------------------------------- | ---------------- |
    | `innerText()`       | Gets visible/rendered text from **one element**   | `string`         |
    | `textContent()`     | Gets text content from **one element**            | `string \| null` |
    | `allInnerTexts()`   | Gets visible text from **all matching elements**  | `string[]`       |
    | `allTextContents()` | Gets text content from **all matching elements**  | `string[]`       |
    | `all()`             | Gets all matching elements as individual Locators | `Locator[]`      |
    | `count()`           | Gets number of matching elements                  | `number`         |
    | `nth(i)`            | Gets one matching element by index                | `Locator`        |

*/

import {test, type Locator} from '@playwright/test'

test('innerText', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const products: Locator = page.locator('.product-title'); 
    /* 
       1. locator will have group of web elements.
       2. products: Locator -> here Locator is an interface.
       3. products is a Locator object that represents the elements matching .product-title.
       If .product-title matches 6 elements:
        products
            │
            ├── nth(0) → Product 1
            ├── nth(1) → Product 2
            ├── nth(2) → Product 3
            ├── nth(3) → Product 4
            ├── nth(4) → Product 5
            └── nth(5) → Product 6
    */

    //Extracting the innertext from locator.
    console.log(await products.nth(0).innerText());
    console.log(await products.nth(1).innerText());
    console.log(await products.nth(2).innerText());
    console.log(await products.nth(3).innerText());
    console.log(await products.nth(4).innerText());
    console.log(await products.nth(5).innerText());

    /* 
        We can use a traditional for loop for iteration because
        the Locator is not converted into an Array using all().
        First count the product for iteration. 
    */

    const count = await products.count();
    console.log(`Number of Products: ${count}`);
    
    for (let i = 0; i < count; i++) {
       const productText: string = await products.nth(i).innerText(); // Extract only string, eleminates extra spaces.
       console.log(productText);
    }
    //This is an important pattern for web tables, product lists, menus, search results, etc.
})

test('textContent', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const products:Locator = page.locator('.product-title');

    const count = await products.count();

    for (let i = 0; i < count; i++) {
       const productText: string | null = await products.nth(i).textContent();
       console.log(productText?.trim());
    }
})

test('allInnerTexts', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const products: Locator = page.locator('.product-title');
    const productText: string [] = await products.allInnerTexts();
    console.log(productText);
    console.log(productText[1]);
    
    //Using For of loop:
    for(let ptext of productText)
    {
        console.log(ptext);
    }

})

test('allTextContents', async({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');
    const products: Locator = page.locator('.product-title');
    const productText: string [] = await products.allTextContents();
    console.log(productText.map(str=>str.trim())); // Here while using allTextContents using map we can able to trim the extra spaces and line brakes.
    console.log(productText[1]);
    
    //Using For of loop:
    for(let ptext of productText)
    {
        console.log(ptext.trim());
        
    }

})

test('allMethod innerText', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    const products: Locator = page.locator('.product-title');
    const productLocator:Locator [] = await products.all(); //Array of locators
    console.log(productLocator);
    console.log(await productLocator[1]?.innerText());
    
    //for of Loop to find all the elements present in Locator
    for(let ptext of productLocator){
        console.log(await ptext.innerText());
    }
})

test('allMethod textContent', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com/');
    const products: Locator = page.locator('.product-title');
    const productLocator:Locator [] = await products.all(); //Array of locators
    console.log(productLocator);
    console.log(await productLocator[1]?.textContent());
    
    //for of Loop to find all the elements present in Locator
    for(let ptext of productLocator){
        const producttext: string | null = await ptext.textContent()
        console.log(producttext?.trim());
    }
})

/* 
    Two ways to get all product names:
        1. Method 1 — allInnerTexts()
            const productNames: string[] = await products.allInnerTexts();
            console.log(productNames);
        2. Method 2 — all() + for...of
            const productList: Locator[] = await products.all();
            for (const product of productList) {
                console.log(await product.innerText());
            }

    | Situation                      | Code                                 |
    | ------------------------------ | ------------------------------------ |
    | Get one element's visible text | `await product.innerText()`          |
    | Get one element's text content | `await product.textContent()`        |
    | Get all visible texts directly | `await products.allInnerTexts()`     |
    | Get all text contents directly | `await products.allTextContents()`   |
    | Convert to array of Locators   | `await products.all()`               |
    | Then iterate with `for...of`   | `for (const product of productList)` |

*/