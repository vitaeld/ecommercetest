const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
until = webdriver.until;

//locators
const firstNameElementLocator = By.id('v65-onepage-billfirstname');
const lastNameElementLocator = By.id('v65-onepage-billlastname');
const adressElementLocator = By.id('v65-onepage-billaddr1');
const cityElementLocator = By.id('v65-onepage-billcity');
const totalSumElementLocator = By.id('TotalsTotalTD');


class CeckOutPage extends BasePage {

    fillInFirstName(firstName){
        const firstNameElement = driver.wait(until.elementLocated(firstNameElementLocator));
        firstNameElement.sendKeys(firstName);
    }

    fillInLastName(lastName){
        const lastNameElement = driver.wait(until.elementLocated(lastNameElementLocator));
        lastNameElement.sendKeys(lastName);
    }

    fillInAdress(adress){
        const adressElement = driver.wait(until.elementLocated(adressElementLocator));
        adressElement.sendKeys(adress);
    }

    fillInCity(city){
        const cityElement = driver.wait(until.elementLocated(cityElementLocator));
        cityElement.sendKeys(city);
    }
        
    async getOrderTotal(){
        const totalSumElement = await driver.wait(until.elementLocated(totalSumElementLocator));
        const totalSum = await totalSumElement.getText();
        return totalSum;
    }
}

module.exports = new CeckOutPage();