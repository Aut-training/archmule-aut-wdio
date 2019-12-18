// const loginPage = require('../pages/Login.page');
// const context = require('../../data/context');
// const assert = require('assert');
// let should = require('chai').should();

// describe('In Archmule login page the user', () => {
//   beforeEach(() => {
//     loginPage.open();
//   });

//   it('should succesfully login with right user and password credentials', () => {
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.fillPasswUser(context.logins.user.password);
//     loginPage.clickLoginBtn();

//     (loginPage.userAvatarDisplayed()).should.be.true;

//     //logout
//     let locator = '.Avatar>img[alt="user\'s avatar"]';
//     let userAvatar = $(locator);
//     userAvatar.click();

//     let logOutBtn = $('button[type=\'submit\']');
//     logOutBtn.click();
//   });

//   it('shouln\'t login with a wrong password', () => {
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.fillPasswUser(context.logins.user2.password);
//     loginPage.clickLoginBtn();

//     (loginPage.getTextWrongCredentials()).should.be.equal('The credentials you provided are invalid.');
//   });

//   it('shouln\'t login with a empty Username', () => {
//     loginPage.clickLoginBtn();

//     (loginPage.getIdentifierMsg()).should.be.equal('The identifier field is required.');
//   });

//   it('shouln\'t login with a empty Password', () => {
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.clickLoginBtn();

//     (loginPage.getPasswordMsg()).should.be.equal('The password field is required.');
//   });
// });
