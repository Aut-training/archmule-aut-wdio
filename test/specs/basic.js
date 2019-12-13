// // import { expect } from 'chai';
// import loginPage from '../pages/Login.page';
// import LoginPage from '../../pages/Login.page';
// const mainPage = requires( '../pages/Login.page');

const assert = require('assert');
let should = require('chai').should();


describe('Navigate to archmule page', () => {
  it('should have the right title', () => {
    browser.url('https://archmule.com/login');

    // let loginButton = $("a[class='button login']");
    // loginButton.click();
        
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
    
    let logOutBtn = $("button[type='submit']")
    logOutBtn.click();
    const url = browser.getUrl();
    url.should.be.equal('https://archmule.com/');

  });

});