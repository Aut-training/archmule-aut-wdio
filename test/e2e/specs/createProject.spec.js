const loginPage = require('../pages/Login.page');
const dashboardPage = require('../pages/Dashboard.page');
const context = require('../../data/context');
const { expect } = require('chai');

describe('Create a new project ', () => {
  it('should succesfully create a new project', () => {
    //Login
    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();

    //Create Project
    dashboardPage.clickProjectSidebar();
    dashboardPage.clickcreateProjectSide();
    dashboardPage.fillProjectTitle('Project100');
    dashboardPage.clickCreateNewProjectBtn();
    browser.pause(2000);

    let result = dashboardPage.getProjectTitleText();
    expect(result).to.equal('Project100');
  });

});
