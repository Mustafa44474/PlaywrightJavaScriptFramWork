const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.linkedin.com/in');
  await page.getByLabel('Email or phone').fill('gmustafasiddiqi1@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Abdullah@321');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Mustafa Siddiq Me' }).click();
  await page.getByRole('link', { name: 'View Profile' }).click();
  await page.goto('https://www.linkedin.com/dashboard/');

  await browser.close();
})