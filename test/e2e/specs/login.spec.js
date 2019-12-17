const loginPage = require('../pages/Login.page.js');
// eslint-disable-next-line no-unused-vars
const contex = require('../../data/context');
// eslint-disable-next-line no-unused-vars
const assert = require('assert');
// eslint-disable-next-line no-unused-vars
let should = require('chai').should();


describe('Login and logout of the archmule page', () => {
  it('should succesfully login with right user and password credentials', () => {

    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser(context.logins.valid_user.name);
    loginPage.fillPasswUser(context.logins.valid_user.password);
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
    loginPage.fillMailUser(context.logins.valid_user.name);
    loginPage.fillPasswUser(context.logins.valid_user.password);
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
    loginPage.fillMailUser(context.logins.valid_user.name);
    loginPage.clickLoginBtn();

    const alertText = loginPage.getPasswordMsg();
    alertText.should.be.equal('The password field is required.');
  });


});
