
import {test,expect } from "@playwright/test";
test ("Locatore", async ({page})=>{
page.locator("Css")
page.locator("Xpath")
page.locator("h3:has-text('checkout')")
page.locator("text =Checkout")
framPage = page.frameLocator("#courses-ifram")
// When there is two or more element one is visible and other are hiden we are going to
// click on visible only we use the method to define that for playwright  
framPage.locator("li a[href*='lifetime-access']:visible").click()

// Go for Partial text for CSS
page.locator([style*='fixt'])

// How to move to Element 
page.locator([style*='fixt']).hover()



 

})