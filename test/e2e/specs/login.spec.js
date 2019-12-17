const loginPage = require('../pages/Login.page.js');
const contex = require('../../data/context');
const assert = require('assert');
let should = require('chai').should();

describe('Login and logout of the archmule page', () => {
  it('should succesfully login with right user and password credentials', () => {

    loginPage.open('https://archmule.com/login');
    // loginPage.fillMailUser('sirius_779@hotmail.com');
    loginPage.fillMailUser(context.logins.user);
    loginPage.fillPasswUser(context.logins.password);
    loginPage.clickLoginBtn();

    const url = loginPage.getloginUrl();
    url.should.be.equal('https://archmule.com/');

    let locator = 'img[alt="user\'s avatar"]';
    let userAvatar = $(locator);
    userAvatar.click();

    let logOutBtn = $('button[type=\'submit\']');
    logOutBtn.click();
  });

  it('shouln\'t succesfully login with a wrong password', () => {

    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser('sirius_779@hotmail.com');
    loginPage.fillPasswUser('wrongPassword1');
    loginPage.clickLoginBtn();

    const alertText = loginPage.getTextWrongCredentials();
    alertText.should.be.equal('The credentials you provided are invalid.');
  });

  it('shouln\'t succesfully login with a empty Username', () => {

    loginPage.open('https://archmule.com/login');

    loginPage.clickLoginBtn();

    const alertText = loginPage.getIdentifierMsg();
    alertText.should.be.equal('The identifier field is required.');
  });

  it('shouln\'t succesfully login with a empty Password', () => {

    loginPage.open('https://archmule.com/login');

    loginPage.clickLoginBtn();

    const alertText = loginPage.getPasswordMsg();
    alertText.should.be.equal('The password field is required.');
  });


});
