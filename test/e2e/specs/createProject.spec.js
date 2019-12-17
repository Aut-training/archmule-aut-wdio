const loginPage = require('../pages/Login.page');
const dashboardPage = require('../pages/Dashboard.page');
const context = require('../../data/context');

describe('Create a new project ', () => {
  it('should succesfully create a new project', () => {
    //Login
    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();

    //Create Project
    dashboardPage.clickCreateProjectBtn();
    dashboardPage.fillProjectTitle('Project100');
    dashboardPage.clickCreateNewProjectBtn();

    //Logout
    let locator = '.Avatar>img[alt="user\'s avatar"]';
    let userAvatar = $(locator);
    userAvatar.click();
    let logOutBtn = $('button[type=\'submit\']');
    logOutBtn.click();
  });
});
