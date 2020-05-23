var webdriver = require('selenium-webdriver');
var { Given, When, Then } = require('cucumber');
var assert = require('assert');

Given('I go to my ToDo app', function() {
    return this.driver.get('http://demo.guru99.com/V4/');
});

When('I add a new ToDo', function() {
    this.driver.findElement(webdriver.By.id("todotext")).sendKeys("Run your first Selenium Test");
    return this.driver.findElement(webdriver.By.id("addbutton")).click();
});

Then('I should have 6 ToDos', function() {
    return this.driver.findElements(webdriver.By.className('ng-pristine ng-untouched ng-valid'))
        .then(function(elems) {
            assert.equal(elems.length, 6);
        });

});