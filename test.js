
const assert = require('chai').assert;
var webdriver = require('./node_modules/selenium-webdriver');

describe('Test', () => {
    //creates webdriver instance before each test
    beforeEach(()=> {
        global.driver = new webdriver.Builder()
            .withCapabilities(webdriver.Capabilities.firefox())
            .build();
        })

     afterEach(function(){
          driver.close();
       })
       
    it('LoginTesting', async () => {
        const expectedGreatingMessage = "Welcome to your account Lidiia Vol.";
        const email = "testvoltest@gmail.com";
        const password = "testvoltestvol";

        const homePage = require('./HomePage.js');
        homePage.navigateToHomePage();
        const loginPage = await homePage.clickMyAccount();
        loginPage.fillEmailField(email);
        loginPage.fillPasswordField(password);
        const myAccountPage = await loginPage.clickSignIn();
        const greatingMessage = await myAccountPage.extractGreatings();
        await myAccountPage.signOut();

        assert.equal(greatingMessage, expectedGreatingMessage);
    })

    it('SearchTesting', async () => {
        const searchCriterias = "3d metal models";
        const expectedResultsNumber = 2;

        const homePage = require('./HomePage.js');
        homePage.navigateToHomePage();
        homePage.enteringSearchCreterias(searchCriterias);
        const searchResultPage = await homePage.submitingSearch();
        const elementsNumber = await searchResultPage.getSearchResults();

        assert.equal(elementsNumber, expectedResultsNumber); 
    })


    it('PuttingToCart', async () => {
        const searchCriterias = "3d metal models";
        const expectedProductName = "View Metal Earth 3D Laser Cut Models -  Empire-State-Building";
         
        const homePage = require('./HomePage.js');
        homePage.navigateToHomePage();
        homePage.enteringSearchCreterias(searchCriterias);
        const searchResultPage = await homePage.submitingSearch();
        const productDetailsPage = await searchResultPage.selectingProduct();
        await productDetailsPage.moveToCart();
        const cartPage = await productDetailsPage.toCartFromAlert();
        const productName = await cartPage.getProductsInCart();

        assert.equal(productName, expectedProductName);
    }) 

    it('RemovingFromCart', async () => {
        const searchCriterias = "3d metal models";
        const expectedCartMessage = "There are no items in your shopping cart.";

        const homePage = require('./HomePage.js');
        homePage.navigateToHomePage();
        await homePage.enteringSearchCreterias(searchCriterias);
        const searchResultPage = await homePage.submitingSearch();
        const productDetailsPage = await searchResultPage.selectingProduct();
        await productDetailsPage.moveToCart();
        const cartPage = await productDetailsPage.toCartFromAlert();
        await cartPage.removeFromCart();
        const cartMessage = await cartPage.getEmptyCartMessage();
        assert.equal(cartMessage, expectedCartMessage);
     })


    it('CheckOutTesting', async () => {
        const searchCriterias = "3d metal models";
        const email = "testvoltest@gmail.com";
        const password = "testvoltestvol";
        const firstName = "Lidiia";
        const lastName = "Vol";
        const adress = "78 MC.Drive";
        const city = "New Castle";
        const expectedTotalToPayMessage = "Total:  $6.95";

        const homePage = require('./HomePage.js');
        homePage.navigateToHomePage();
        homePage.enteringSearchCreterias(searchCriterias);
        const searchResultPage = await homePage.submitingSearch();
        const productDetailsPage = await searchResultPage.selectingProduct();
        await productDetailsPage.moveToCart();
        const cartPage = await productDetailsPage.toCartFromAlert();
        cartPage.selectTypeOfAdress();
        await cartPage.fillInEmail(email);
        await cartPage.fillInPassword(password);
        const checkOutPage = await cartPage.clickLogInAndCheckout();
        checkOutPage.fillInFirstName(firstName);
        checkOutPage.fillInLastName(lastName);
        checkOutPage.fillInAdress(adress);
        checkOutPage.fillInCity(city);
        const totalToPay = await checkOutPage.getOrderTotal();

        assert.equal(totalToPay, expectedTotalToPayMessage);
    })
})