import {test,expect } from "@playwright/test";
test("Entering data slowly", async ({page})=>{
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
const emailField = page.locator("input#input-email");
await emailField.type("gmustafa.siddiqi@gmail.com",{delay:500});
// Assertion -verify correct the email text
await expect(page.locator("input#input-email")).toHaveText ("gmustafa.siddiqi@gmail.com")

// Asertion - Verify the text on page 

await(page.locator("[style='test]")).toHaveText("You order has successfully complete")


const passwordField = page.locator("input#input-password");
await passwordField.type("Automation@321",{delay:500})
const loginbutton = page.locator("input.btn-primary");
await loginbutton.click()
})

test("Pop Up validations", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.goto("https://www.google.com/")
    await page.goBack()
await expect(page.locator("displayed-text")).toBeVisible()
await expect(page.locator("displayed-text")).toBeHidden()
await expect(page.locator("displayed-text")).toHaveText("Testis Best")
/*
expect(locator).toBeVisible()
expect(locator).toContainText()
expect(locator).toHaveAttribute()
expect(locator).toHaveClass()
expect(locator).toHaveText()
expect(locator).toHaveValues()

*/










})