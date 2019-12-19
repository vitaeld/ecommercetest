const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
until = webdriver.until;

//locators
const productElementLocator = By.css('.search_results_section table:nth-of-type(2) table:nth-of-type(1) table:nth-of-type(1) tr:nth-of-type(2) td:nth-of-type(1) a');
const searchResultsListLocator = By.css('.search_results_section table:nth-of-type(2) table:nth-of-type(1) table:nth-of-type(1) tr:nth-of-type(2) td');

class SearchResultPage extends BasePage {
        
     async getSearchResults(){
         var elementsNumber;
         await driver.wait(until.elementsLocated(searchResultsListLocator)).then((elements_arr)=>{ 
                elementsNumber = elements_arr.length;
            });

        return elementsNumber;
     }

     async selectingProduct(){
         const productElement = await driver.wait(until.elementLocated(productElementLocator));
         productElement.click();
         return require('./productdetailspage');
     }      
}

module.exports = new SearchResultPage();