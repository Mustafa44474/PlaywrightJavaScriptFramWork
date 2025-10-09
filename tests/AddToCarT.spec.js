import { test, expect } from '@playwright/test';
//const {test,expect} = require('@playwright/test')
test("Addting Itenm to the card", async({page})=>{
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
 console.log('Page title is:  ' + await page.title())
const emailField = page.locator("input#input-email");
await emailField.fill("gmustafa.siddiqi@gmail.com");
const passwordField = page.locator("input#input-password");
await passwordField.fill("Automation@321")
const loginbutton = page.locator("input.btn-primary");
await loginbutton.click()
await page.locator("//a[text()='Phones & PDAs']").first().click()
const products = page.locator("div[class='product-thumb']")
await page.waitForLoadState('networkidle')
console.log(await products.allTextContents())
console.log('product count is: ' + await products.count())
const addedProduct = page.locator("div[class='button-group'] i").nth(0)
await addedProduct.click()
const addedProductStatus = page.locator("div.alert-success")
console.log(await addedProductStatus.textContent())
await page.locator("span#cart-total").click()
await page.locator("[href*='checkout/cart']").nth(1).click()
const productConfirmation =await page.locator("div.alert-dismissible".textContent())
console.log('We are sorry wer face lack of this item: ' +productConfirmation)
page.pause(5000)


test.only("Testing My Itenm to the card", async({page})=>{
    await page.goto('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
  await page.getByLabel('Email or phone').fill('gmustafasiddiqi1@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Abdullah@321');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Mustafa Siddiq Me' }).click();
  await page.getByRole('link', { name: 'View Profile' }).click();
  await page.goto('https://www.linkedin.com/dashboard/');

  await page.close();
})

})
test.only("Testing My Itenm to the card", async({page})=>{
    await page.goto('https://www.linkedin.com/login?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin');
  await page.getByLabel('Email or phone').fill('gmustafasiddiqi1@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Abdullah@321');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByRole('button', { name: 'Mustafa Siddiq Me' }).click();
  await page.getByRole('link', { name: 'View Profile' }).click();
  await page.goto('https://www.linkedin.com/dashboard/');

  await page.close();
})
