class LoginPage {
    

    constructor(page) {
        this.page = page;
        this.userName = page.locator("input#input-email");
        this.password = page.locator("input#input-password");
        this.loginbutton = page.locator("input.btn-primary");
    }

    async goTo(page) {
        await this.page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")
        
    }
 
    async validLogin(userName, password) {


        await this.userName.type(userName);
        await this.password.type(password)
        await this.loginbutton.click()

    }


}
module.exports = { LoginPage };