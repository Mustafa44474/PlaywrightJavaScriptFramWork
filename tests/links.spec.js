const { test, expect } = require('@playwright/test');
test.only('I am seeking to get the text for each link', async ({ page }) => {

    await page.goto("https://naveenautomationlabs.com/opencart/")
    /*
    const PageLinktext = await page.$$('a')
    for(const linktexs of PageLinktext){
        const allLinkText = await linktexs.textContent();
        console.log(allLinkText)
    }
    */

    const productName = await page.$$("div.caption h4")
    for (const product of productName) {
        const prodectHeader = await product.textContent()
        console.log(prodectHeader)
    }


})