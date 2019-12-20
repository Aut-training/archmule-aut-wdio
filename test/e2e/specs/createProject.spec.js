const loginPage = require('../pages/Login.page');
const dashboardPage = require('../pages/Dashboard.page');
const projectPage = require('../pages/Project.page');
const projectAsserts= require('../asserts/project.asserts');
const context = require('../../data/context');

describe('In the Archmule main page the user', () => {

  it('should succesfully create a new project', () => {
    loginPage.open();
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();

    dashboardPage.open();
    dashboardPage.clickProjectSidebar();
    dashboardPage.clickcreateProjectSide();
    dashboardPage.fillProjectTitle(context.projects.project.title);
    dashboardPage.clickCreateNewProjectBtn();
    projectAsserts.verifyTheTitleOfProjectCreated();    
  });

  it('should create a new task', () => {
    projectPage.fillTaskTextbx(context.task.task.title);
    projectPage.clickOnAddTaskBtn();
    projectAsserts.verifyTitleOfTaskCreated();
  });

  it('the task should be in the section "Next"', () => {
    projectPage.clickOnTaskCard();
    projectAsserts.verfiyTaskIsInSecctionNext();
    
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

    projectAsserts.verifyCreatedProjectWasDeleted();
  });

});
