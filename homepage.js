const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
const until = webdriver.until;

//locators
const myAccountElementLocator = By.className('account');

class HomePage extends BasePage {
        
      async clickMyAccount(){    
            const myAccountElement  = await driver.wait(until.elementLocated(myAccountElementLocator));
            myAccountElement.click();
            return require('./loginpage');
      }
}

module.exports = new HomePage()