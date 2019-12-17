// import { loginPage } from '../pages/Login.page.js';

const loginPage = require('../pages/Login.page.js');

const assert = require('assert');
let should = require('chai').should();

describe('Login and logout of the archmule page', () => {
  it('should succesfully login with right user and password credentials', () => {

    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser('sirius_779@hotmail.com');
    loginPage.fillPasswUser('bootcamp');
    loginPage.clickLoginBtn();

    const url = browser.getUrl();
    url.should.be.equal('https://archmule.com/');
    
  });

  it('shoul\'d succesfully login with a wrong password', () => {

    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser('sirius_779@hotmail.com');
    loginPage.fillPasswUser('wrongPassword1');
    loginPage.clickLoginBtn();

    const alertText = loginPage.getTextWrongCredentials();
    alertText.should.be.equal('The credentials you provided are invalid.');

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
