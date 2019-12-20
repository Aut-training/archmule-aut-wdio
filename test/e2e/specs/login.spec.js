const loginPage = require('../pages/Login.page');
const context = require('../../data/context');
const loginAsserts = require('../../e2e/asserts/login.asserts');

describe('In Archmule login page the user', () => {
  beforeEach(() => {
    loginPage.open();
  });

  it('should succesfully login with right user and password credentials', () => {
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();
    loginAsserts.verifyIfUserAvatarIsDisplayed();    

    //logout
    let locator = '.Avatar>img[alt="user\'s avatar"]';
    let userAvatar = $(locator);
    userAvatar.click();
    let logOutBtn = $('button[type=\'submit\']');
    logOutBtn.click();
  });

  it('shouln\'t login with a wrong password', () => {
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user2.password);
    loginPage.clickLoginBtn();
    loginAsserts.verifyWrongPasswordMessage();
  });

  it('shouln\'t login with a empty Username', () => {
    loginPage.clickLoginBtn();
    loginAsserts.verifyEmptyUsernameMessage();
  });

  it('shouln\'t login with a empty Password', () => {
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.clickLoginBtn();
    loginAsserts.verifyEmptyPasswordMessage();
  });
});
