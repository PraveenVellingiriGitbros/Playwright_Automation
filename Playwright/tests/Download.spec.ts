import {test} from '@playwright/test'

test('File downloads', async({page})=>{

    await page.goto('https://letcode.in/file');

    //Before click on downloads we need to wait so using waitForEvent listener.
    const downloadPromise = page.waitForEvent('download');

    //Click download button now.
    await page.getByText('Download Excel').click();

    //Capture the downloadedFile
    const downloadedFile = await downloadPromise;

    //Create Folder to save the downloaded file.
    await downloadedFile.saveAs(`downloads/` + downloadedFile.suggestedFilename());
})