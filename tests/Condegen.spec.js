import { test, expect } from '@playwright/test';

// npx playwright codegen https://www.google.com/

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Rahul she');
  await page.getByRole('combobox', { name: 'Search' }).press('ArrowDown');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Rahul Shetty Academy: Selenium, API Testing, Software ... Rahul Shetty Academy https://rahulshettyacademy.com' }).click();
  await page.getByRole('link', { name: 'NEW Learning paths' }).click();
  await page.getByRole('link', { name: 'Part time jobs' }).click();
  await page.goto('https://rahulshettyacademy.com/learning-path');
  await page.getByRole('link', { name: ' Register' }).click();
  await page.locator('[data-test-id="sign-up-with-email"]').click();
  await page.getByLabel('Full Name').click();
  await page.getByLabel('Email').click();
  await page.getByText('Password A password must use at least 6 characters.').click();
  await page.getByTestId('signup-button').click();
  await page.getByText('Please fill in all the fields.').click();
  await page.goto('https://sso.teachable.com/secure/9521/identity/sign_up/email');
  await page.goto('https://sso.teachable.com/secure/9521/identity/sign_up/routing?wizard_id=KNdPcdJ84siqf5UpcBKc5c8zwh3rkznXXrNz2IweHQR0-3naCxoTVgCBM9rKa2raBVD-aFxazN8L-pq4A5owRA');
  await page.goto('https://rahulshettyacademy.com/learning-path');
  await page.getByRole('link', { name: 'Courses' }).click();
  await page.getByText('Category: All All').click();
  await page.getByRole('button', { name: 'All' }).first().click();
  await page.getByRole('button', { name: 'All' }).nth(1).click();
  await page.getByRole('link', { name: 'Rahul Shetty', exact: true }).first().click();
  await page.getByRole('button', { name: 'Rahul Shetty' }).click();
  await page.getByRole('link', { name: 'Rahul Shetty' }).nth(2).click();
});