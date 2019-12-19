const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
const until = webdriver.until;

//locators
const welcomeToYourAccountElementLocator = By.css('form[name="form2"] b');
const signOutElementLocator = By.css('form[name="form2"] tr:nth-child(6) a');

class MyAccountPage extends BasePage {

    async extractGreatings (){
        const welcomeToYourAccountElement = await driver.wait(until.elementLocated(welcomeToYourAccountElementLocator));
        const greatingMessage =await welcomeToYourAccountElement.getText();
        return greatingMessage;
    }

   async signOut(){
        const signOutElement = await driver.wait(until.elementLocated(signOutElementLocator));
        signOutElement.click();
    }
}

module.exports = new MyAccountPage();