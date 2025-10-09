import {test,expect } from "@playwright/test";
test.only ("Entering data slowly", async ({page})=>{
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

page.pause()
page.on('dialog', dialog => dialog.accept())
//page.on('dialog', dialog => dialog.dismiss())
page.locator("#confirmbtn").click()










})