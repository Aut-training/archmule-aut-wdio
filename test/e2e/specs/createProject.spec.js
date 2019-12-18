const loginPage = require('../pages/Login.page');
const dashboardPage = require('../pages/Dashboard.page');
const context = require('../../data/context');
const { expect } = require('chai');

describe('Create a new project ', () => {
  // it('should succesfully create a new project', () => {
  //   //Login
  //   loginPage.open('https://archmule.com/login');
  //   loginPage.fillMailUser(context.logins.user.login);
  //   loginPage.fillPasswUser(context.logins.user.password);
  //   loginPage.clickLoginBtn();

  //   //Create Project
  //   dashboardPage.clickProjectSidebar();
  //   dashboardPage.clickcreateProjectSide();
  //   dashboardPage.fillProjectTitle('Project100');
  //   dashboardPage.clickCreateNewProjectBtn();
  //   browser.pause(2000);

  //   let result = dashboardPage.getProjectTitleText();
  //   expect(result).to.equal('Project100');
  // });
  
  it('should delete a project', () => {
    //Login
    loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();

    //Delete Project
    dashboardPage.clickProjectSidebar();
    browser.pause(1000);
    dashboardPage.clickOnProject();
    browser.pause(1000);
    dashboardPage.clickOnProjectMenu();
    browser.pause(2000);
    dashboardPage.clickOnProjectMoreOpt();
    browser.pause(2000);
    dashboardPage.clickOnProjectMoreSettings();
    browser.pause(2000);
    dashboardPage.clickOnProjectSettingsDelete();
    dashboardPage.clickOnDeleteProjectBtn();
    browser.acceptAlert();
    // dashboardPage.acceptAlertOption();
    
    // dashboardPage.clickcreateProjectSide();
    // dashboardPage.fillProjectTitle('Project100');
    // dashboardPage.clickCreateNewProjectBtn();
    // browser.pause(2000);

    // let result = dashboardPage.getProjectTitleText();
    // expect(result).to.equal('Project100');
  });



  

});
