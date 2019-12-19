const webdriver = require('./node_modules/selenium-webdriver');
const BasePage = require('./basepage');
const By = webdriver.By;
const until = webdriver.until;

//locators
const  productNameElementLocator = By.className('carttext colors_productname cart-item-name');
const removeIconLocator = By.className('v65-cart-item-remove-link');
const cartMessageLocator = By.css('#content_area table:nth-of-type(2) b');

class CartPage extends BasePage {
        
    async getProductsInCart(){
        const productNameElement = await driver.wait(until.elementLocated(productNameElementLocator));
        const productName = await productNameElement.getAttribute('title')
        return productName;
    }

    async removeFromCart(){
        await driver.wait(() => {
            return driver.executeScript('return jQuery.active == 0')});
        let removeIconElement = await driver.wait(until.elementLocated(removeIconLocator), 10000);
        let removeIcon = await driver.wait(until.elementIsVisible(removeIconElement));
        driver.executeScript("arguments[0].scrollIntoView(true);", removeIcon);
        removeIcon.click();
    }

    async getEmptyCartMessage(){

        await driver.wait(() => {
            return driver.executeScript('return jQuery.active == 0')});
        const cartMessageElementLocator = await driver.wait(until.elementLocated(cartMessageLocator));
        const cartMessageElement = await driver.wait(until.elementIsVisible(cartMessageElementLocator));
        const cartMessage = await cartMessageElement.getText();

       return cartMessage;
    }

    selectTypeOfAdress(){
        const residentialAdressElement = driver.wait(until.elementLocated(By.css('#v65-cart-shipping-addresstype input:nth-of-type(1)')));
        residentialAdressElement.click();
    }

    async fillInEmail(email){
        const emailFieldElement = await driver.wait(until.elementLocated(By.id('email')));
        emailFieldElement.sendKeys(email);
    }
        
    async fillInPassword(pass){
        const passFieldElement = await driver.wait(until.elementLocated(By.id('password')));
        passFieldElement.sendKeys(pass);
    }

    async clickLogInAndCheckout(){
        await driver.wait(()=> {
            return driver.executeScript('return jQuery.active == 0')});
        const LogInAndCheckoutElement = await driver.wait(until.elementLocated(By.name('btn_checkout_login')));
        LogInAndCheckoutElement.click();
        return require('./checkoutpage');
     }
 }

module.exports = new CartPage();