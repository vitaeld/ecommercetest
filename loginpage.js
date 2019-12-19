const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
const until = webdriver.until;

//locators
const emailElementLocator = By.name('email');
const passwordElementLocator = By.name('password');
const signInElementLocator = By.id('btnSubmit');

class LoginPage extends BasePage {

      fillEmailField(email){
            const emailElement = driver.wait(until.elementLocated(emailElementLocator));
            emailElement.sendKeys(email);
      }

      fillPasswordField(pass){
          const passwordElement = driver.wait(until.elementLocated(passwordElementLocator));
          passwordElement.sendKeys(pass);
      }

      async clickSignIn(){
            const signInElement = await driver.wait(until.elementLocated(signInElementLocator));
            signInElement.click();
            return require('./myaccountpage');
      }
}

module.exports = new LoginPage();