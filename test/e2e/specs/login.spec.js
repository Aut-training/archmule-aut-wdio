// const loginPage = require('../pages/Login.page');
// const context = require('../../data/context');
// const assert = require('assert');
// let should = require('chai').should();


// describe('Login the archmule page', () => {
//   it('should succesfully login with right user and password credentials', () => {

//     loginPage.open('https://archmule.com/login');
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.fillPasswUser(context.logins.user.password);
//     loginPage.clickLoginBtn();

//     const displayedUserAvatar = loginPage.userAvatarDisplayed();
//     displayedUserAvatar.should.be.true;

//     //logout
//     let locator = '.Avatar>img[alt="user\'s avatar"]';
//     let userAvatar = $(locator);
//     userAvatar.click();

//     let logOutBtn = $('button[type=\'submit\']');
//     logOutBtn.click();
//   });

//   it('shouln\'t login with a wrong password', () => {

//     loginPage.open('https://archmule.com/login');
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.fillPasswUser(context.logins.user2.password);
//     loginPage.clickLoginBtn();

//     const alertText = loginPage.getTextWrongCredentials();
//     alertText.should.be.equal('The credentials you provided are invalid.');
//   });

//   it('shouln\'t login with a empty Username', () => {

//     loginPage.open('https://archmule.com/login');

//     loginPage.clickLoginBtn();

//     const alertText = loginPage.getIdentifierMsg();
//     alertText.should.be.equal('The identifier field is required.');
//   });

//   it('shouln\'t login with a empty Password', () => {

//     loginPage.open('https://archmule.com/login');
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.clickLoginBtn();

//     const alertText = loginPage.getPasswordMsg();
//     alertText.should.be.equal('The password field is required.');
//   });
// });
