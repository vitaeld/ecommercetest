# ecommercetest

Description

The project for testing e-commerce site selling toys available at "https://www.zerotoys.com/". Consists of the framework and several tests checking main functions. The list of tests:

* Login
* Searching products by three criteria
* Adding products from the cart
* Removing products to the cart
* Checkout process

Project requires Windows OS and NodeJS + NPM(Node Package Manager), Firefox browser to be installed.

Download project zip file to the desired directory. Run "npm install" in command promt to install node moduls.

Running tests: from the project folder open command promt and type "npm test".


To Do list:

For the real projects I would do the list of following improvements:

make a separate class for driver and operations with it;

make a separate class for waiters;

all given data from the tests should be in separate place (fox example we have Data Providers in C# and Java);

configuration data (such as the name of the site under test) should also be stored in Json files (the same as config files);

From the point of testing flows I would add:

when searching by criteria check not only the number of results got, but also retrieving names and comparing that they include searching words;

when checking ckeckout process the hole circle should be tested along with pavement options (test account with pavement details should be used )


