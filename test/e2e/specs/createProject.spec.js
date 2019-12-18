// const loginPage = require('../pages/Login.page');
// const dashboardPage = require('../pages/Dashboard.page');
// const projectPage = require('../pages/Project.page');
// const context = require('../../data/context');
// const { expect } = require('chai');

// describe('In the Archmule main page the user', () => {

//   // beforeEach(() => {
//   //   loginPage.open();
//   //   loginPage.fillMailUser(context.logins.user.login);
//   //   loginPage.fillPasswUser(context.logins.user.password);
//   //   loginPage.clickLoginBtn();
//   // });

//   it('should succesfully create a new project', () => {
//     loginPage.open();
//     loginPage.fillMailUser(context.logins.user.login);
//     loginPage.fillPasswUser(context.logins.user.password);
//     loginPage.clickLoginBtn();

//     dashboardPage.open();
//     dashboardPage.clickProjectSidebar();
//     dashboardPage.clickcreateProjectSide();
//     dashboardPage.fillProjectTitle('Project600');
//     dashboardPage.clickCreateNewProjectBtn();

//     expect(dashboardPage.getProjectTitleText()).to.equal('Project600');
//   });

//   it('should create a new task', () => {
//     //create Task
//     // projectPage.open();
//     projectPage.fillTaskTextbx('TaskEX');
//     projectPage.clickOnAddTaskBtn();
//     browser.pause(3000);
//     //drag and drop task    
//     projectPage.dragAndDrop();
//     projectPage.clickOnTaskCard();
//     browser.pause(3000);
    
//   });

//   it('should delete a project', () => {
//     // dashboardPage.deleteProjectAction();
//     dashboardPage.open();
//     dashboardPage.clickProjectSidebar();
//     dashboardPage.clickOnProjectTitle();
//     dashboardPage.clickOnProjectMenu();
//     dashboardPage.clickOnProjectMoreOpt();
//     dashboardPage.clickOnProjectMoreSettings();
//     dashboardPage.clickOnProjectSettingsDelete();
//     dashboardPage.clickOnDeleteProjectBtn();
//     browser.acceptAlert();
//     // dashboardPage.acceptAlertOption();   
//     expect;
//   });

//   // afterEach(() => {
//   //   browser.url('https://archmule.com/login');
//   //   // loginPage.open();    
//   // });

// });
