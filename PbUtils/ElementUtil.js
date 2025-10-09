class ElementUtil {
 

constructor()


    async navigateTo(url) {
      return page.goto(url);
     
    }
    async getElement(selector) {
      await this.page.waitForSelector(selector);
      return this.page.$(selector);
    }
    async getElements(selector) {
      return await this.page.$$(selector);
    }
  
    async click(selector) {
      const element = await this.getElement(selector);
      await element.click();
    }
    async type(selector, text) {
      await this.page.type(selector, text);
    }
    async fill(selector, text) {
      const element = await this.getElement(selector);
      await element.fill(text);
    }
    async getText(selector) {
      const element = await this.getElement(selector);
      return element.textContent();
    }
    async getText(selector) {
      const element = await this.page.$(selector);
      return await element.evaluate((el) => el.innerText);
    }
  
    async getAttribute(selector, attributeName) {
      const element = await this.getElement(selector);
      return element.getAttribute(attributeName);
    }
    async getValue(selector) {
      const element = await this.page.$(selector);
      return element.inputValue();
    }
    async waitForVisible(selector) {
      await this.page.waitForSelector(selector, { state: 'visible' });
    }

  }

  

 

module.exports = new ElementUtil();