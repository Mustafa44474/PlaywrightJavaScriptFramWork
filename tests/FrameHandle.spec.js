import {test,expect } from "@playwright/test";
test("FramHandling", async ({page})=>{


page.goto("https://www.rahulshettyacademy.com/")
const framPage = page.frameLocator("#courses-ifram")
await framPage.locator("li a[href*='lifetime-access']:visible").click()
const text = await framPage.locator(".text h2").textContent()
text.split(" ")[1]
console.log(text.split(" ")[1])















})