const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
until = webdriver.until;

//locators
const addToCartButtonElementLocator = By.className('vCSS_input_addtocart');
const checkoutLocator = By.className('check_out');

class ProductDetailsPage extends BasePage {
        
    async moveToCart(){
        await driver.wait(()=> {
               return driver.executeScript('return jQuery.active == 0')});
         const addToCartButtonElement = await driver.wait(until.elementLocated(addToCartButtonElementLocator));
         const addToCartButton = await driver.wait(until.elementIsVisible(addToCartButtonElement),20000);
         
         try{
            await  addToCartButton.click();
        }
        catch (e){
           // console.error("Tried to click elemet: " + e);
            await driver.executeScript("arguments[0].click();", addToCartButton)
           //  console.log ("after Tried to click elemet: " );
        }
     }
    
     async toCartFromAlert(){ 
        //clicking Checkout button in the pop-up window
        const checkout = await driver.wait(until.elementLocated(checkoutLocator));
        driver.executeScript("arguments[0].click();", checkout)
        return require('./cartpage');
     }
}

module.exports = new ProductDetailsPage();