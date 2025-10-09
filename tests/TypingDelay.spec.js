import {test,expect } from "@playwright/test";
test.only("Entering data slowly", async ({page})=>{
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
 console.log('Page title is:  ' + await page.title())
const emailField = page.locator("input#input-email");
await emailField.type("gmustafa.siddiqi@gmail.com",{delay:500});
const passwordField = page.locator("input#input-password");
await passwordField.type("Automation@321",{delay:500})
const loginbutton = page.locator("input.btn-primary");
await loginbutton.click()

// When you want to entering data and you want delying the staff you are going to enter data as 

await emailField.type("gmustafa.siddiqi@gmail.com",{delay:500});


})
