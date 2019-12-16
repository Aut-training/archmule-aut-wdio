const assert = require('assert');
let should = require('chai').should();


describe('Login and logout of the archmule page', () => {
  it('should have the right user and password credentials', () => {
    browser.url('https://archmule.com/login');

    let mailUserTxt = $('#identifier');
    mailUserTxt.setValue("sirius_779@hotmail.com");

    let passwrdTxt = $('#password');
    passwrdTxt.setValue('bootcamp');

    let loginButton = $("button[type='submit']");
    loginButton.click();
    browser.pause(2000);

    let locator = "img[alt=\"user's avatar\"]";
    let userAvatar = $(locator);
    userAvatar.click();
    browser.pause(2000);

    let logOutBtn = $("button[type='submit']");
    logOutBtn.click();
    const url = browser.getUrl();
    url.should.be.equal('https://archmule.com/');

  });

});