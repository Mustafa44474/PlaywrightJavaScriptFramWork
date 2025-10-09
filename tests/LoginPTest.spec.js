const { test, expect } = require('@playwright/test');
const {LoginPage}= require('../PageObject/LoginPage')

test("LoginPage Validation", async ({page})=>{
    page.goto

    const userName = "gmustafa.siddiqi@gmail.com "
    const password = "Automation@321"

    const loginPage = new LoginPage(page)
    await loginPage.goTo();
    await loginPage.validLogin(userName, password)

   
     
})
