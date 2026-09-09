import {test} from '@playwright/test';

/* 
    Interaction in Playwright:
    1. fill()
    2. clear()
    3. click()
    4. check()
    5. uncheck()
    6. doubleclick()
    7. rightclick - Not in playwright but we can achive it.
    8. press()
    9. Keyboard Shortcuts. || selecttext()
    10. Drag & Drop
    11. fileupload()
    12. hover() 
    13. scroll()

    | Interaction | Use for                             |
    | ----------- | ----------------------------------- |
    | `click()`   | Buttons, links, radio buttons, etc. |
    | `check()`   | Checkbox & radio button             |
    | `uncheck()` | Checkbox only                       |

*/

test('Interaction using fill', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Enter Name').fill('Praveen');
    //fill() clears the existing value and enters the new value.
})

test('Interaction using clear', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#');
    await page.locator('#name').fill('Sara');
    await page.locator('#email').fill('Sara12@yopmail.com');

    await page.waitForTimeout(5000);

    await page.locator('#name').clear();
    await page.locator('#email').clear();

    await page.waitForTimeout(5000);
})

test('Interaction using click', async({page})=>{

    await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();
    //getByRole take the value from the DOM

})

test('Interaction using check', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByRole('radio', {name: 'standard'}).check();
    await page.getByRole('radio',{name: 'express'}).check();

    await page.waitForTimeout(5000);
})

test('Interaction using uncheck', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByText('Accept terms').check();
    await page.waitForTimeout(5000);
    await page.getByText('Accept terms').uncheck();
})

test('Interaction using doubleclick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.getByText('Copy Text').dblclick();
    
})

//rightclick()

test('Interaction using rightclick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.getByRole('button', {name: "start"}).click({button: 'right'});
    //Here after click we have to use above code for rightclick.

    await page.waitForTimeout(3000);

})

//press function is used to interact with Keyboard keys.
test('Interaction using press', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#Wikipedia1_wikipedia-search-input').fill('laptop');
    await page.locator('#Wikipedia1_wikipedia-search-input').press('Enter');

    await page.waitForTimeout(3000);
})

//Keyboard Shortcuts:
test('Interaction using Keyboard Shortcuts', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.getByLabel('Address:').fill('Chennai');// use visible text from the label in DOM
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Meta+C');

    await page.getByPlaceholder('Enter Phone').focus(); // Used focus to point to that field.
    await page.keyboard.press('Meta+V');

    //Above used Meta for mac || use "Control + V" for Windows/linux.
    await page.waitForTimeout(3000);

})

test('Interaction using dragAndDrop', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    await page.dragAndDrop('#draggable', '#droppable');
    //Use dragAndDrop interaction method - I located source and destination using ID locator.

    await page.waitForTimeout(3000);
})

//.  /Users/daniel/Documents/Playwright Recordings

test.describe('Interaction using fileupload', async()=>{

    test('Single file upload' , async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#singleFileInput').setInputFiles('/Users/praveen/Documents/Praveen/Learnings/Playwright Recordings/Praveen_Vellingiri_Resume.pdf');
        await page.getByText('Upload Single File').click();
        await page.waitForTimeout(3000);
    })
    
    test.only('MultipleFileUpload', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.locator('#multipleFilesInput').setInputFiles(['/Users/praveen/Documents/Praveen/Learnings/Playwright Recordings/Praveen_Vellingiri_Resume.pdf','/Users/praveen/Documents/Praveen/Learnings/Playwright Recordings/Praveen_Vellingiri_Resume.pdf','/Users/praveen/Documents/Praveen/Learnings/Playwright Recordings/Praveen_Vellingiri_Resume.pdf']);
        await page.getByText('Upload Multiple Files').click();
        await page.waitForTimeout(3000);

    })
})


test('Interaction using mouseHover',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('.dropdown').hover();
    await page.waitForTimeout(5000);
    await page.getByRole('link', {name: 'Laptops'}).click();

})

test.describe('Interaction using scroll', async()=>{

    test('Scroll by chossing elements', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.getByText('Point Me').scrollIntoViewIfNeeded();
        await page.locator('.dropdown').hover();
        await page.waitForTimeout(5000);
        await page.getByRole('link', {name: 'Laptops'}).click();

    })

    test('Scroll by Mouse', async({page})=>{

        await page.goto('https://testautomationpractice.blogspot.com/');
        await page.mouse.wheel(0,1300);
        await page.waitForTimeout(5000);
    })
})



