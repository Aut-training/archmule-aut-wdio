const loginPage = require('../pages/Login.page');
const dashboardPage = require('../pages/Dashboard.page');
const projectPage = require('../pages/Project.page');
const context = require('../../data/context');
const { expect } = require('chai');

describe('In the Archmule main page the user', () => {

  it('should succesfully create a new project', () => {
    loginPage.open();
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();

    dashboardPage.open();
    dashboardPage.clickProjectSidebar();
    dashboardPage.clickcreateProjectSide();
    dashboardPage.fillProjectTitle('Project600');
    dashboardPage.clickCreateNewProjectBtn();

    expect(dashboardPage.getProjectTitleText()).to.equal('Project600');
  });

  it('should create a new task', () => {
    projectPage.fillTaskTextbx('TaskEX');
    projectPage.clickOnAddTaskBtn();
    browser.pause(3000);
    projectPage.clickOnTaskCard();
    expect(projectPage.getTaskCardColumnText()).equal('Next');
  });

  it('should delete a project', () => {
    // dashboardPage.deleteProjectAction();
    dashboardPage.open();
    dashboardPage.clickProjectSidebar();
    dashboardPage.clickOnProjectTitle();
    dashboardPage.clickOnProjectMenu();
    dashboardPage.clickOnProjectMoreOpt();
    dashboardPage.clickOnProjectMoreSettings();
    dashboardPage.clickOnProjectSettingsDelete();
    dashboardPage.clickOnDeleteProjectBtn();
    browser.acceptAlert();

    expect(dashboardPage.getProjectTitleDontExists()).to.be.true;
  });

});
