import { loginPage } from '../pages/Login.page';
const assert = require('assert');
let should = require('chai').should();


describe('Login and logout of the archmule page', () => {
  it('should have the right user and password credentials', () => {
    
    loginPage.open();
    loginPage.fillMailUser('sirius_779@hotmail.com');
    loginPage.fillPasswUser('bootcamp');
    loginPage.clickLoginBtn();    

    // let locator = 'img[alt="user\'s avatar"]';
    // let userAvatar = $(locator);
    // userAvatar.click();
    // // browser.pause(2000);

    // let logOutBtn = $('button[type=\'submit\']');
    // logOutBtn.click();
    const url = browser.getUrl();
    url.should.be.equal('https://archmule.com/login');

  });
  // it('should have the right user and password credentials', () => {
  //   browser.url('https://archmule.com/login');

  //   let userEmailTxt = $('#identifier');
  //   userEmailTxt.setValue('sirius_779@hotmail.com');

  //   let userPasswrdTxt = $('#password');
  //   userPasswrdTxt.setValue('bootcamp');

  //   let loginButton = $('button[type=\'submit\']');
  //   loginButton.click();
  //   // browser.pause(2000);

  //   let locator = 'img[alt="user\'s avatar"]';
  //   let userAvatar = $(locator);
  //   userAvatar.click();
  //   // browser.pause(2000);

  //   let logOutBtn = $('button[type=\'submit\']');
  //   logOutBtn.click();
  //   const url = browser.getUrl();
  //   url.should.be.equal('https://archmule.com/');

  // });

});
