const webdriver = require('./node_modules/selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

//locators
const searchFieldLocator = By.name('Search');
const submitElementLocator = By.name('Submit');

class BasePage{

    navigateToHomePage(){
         driver.get('http://www.zerotoys.com/');
        }

    async enteringSearchCreterias(searchCriterias){
        const searchFieldElement = await driver.wait(until.elementLocated(searchFieldLocator));
        searchFieldElement.sendKeys(searchCriterias);
    }

    async submitingSearch(){
        const submitElement = await driver.wait(until.elementLocated(submitElementLocator));
        submitElement.click();   
        return require('./searchresultpage'); 
    }

    shotdownFF(){
        driver.close();
    }
}

module.exports = BasePage;