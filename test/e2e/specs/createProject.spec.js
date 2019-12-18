// const loginPage = require('../pages/Login.page');
// const dashboardPage = require('../pages/Dashboard.page');
// const context = require('../../data/context');
// const { expect } = require('chai');

// describe('Project feature ', () => {
  
//   beforeEach(() => {
//     loginPage.loginAction();
//   });

//   // it('should succesfully create a new project', () => {
//   //   //Create Project
//   //   dashboardPage.clickProjectSidebar();
//   //   dashboardPage.clickcreateProjectSide();
//   //   dashboardPage.fillProjectTitle('Project100');
//   //   dashboardPage.clickCreateNewProjectBtn();
    
//   //   let result = dashboardPage.getProjectTitleText();
//   //   expect(result).to.equal('Project100');
    
//   //   browser.pause(4000);

//   // });
  
//   it('should delete a project', () => {
//     //Login
//     // browser.pause(4000);
//     // // loginPage.open('https://archmule.com/login');
//     // loginPage.fillMailUser(context.logins.user.login);
//     // loginPage.fillPasswUser(context.logins.user.password);
//     // loginPage.clickLoginBtn();
    
    
//     //Delete Project
//     dashboardPage.clickProjectSidebar();
//     browser.pause(1000);
//     dashboardPage.clickOnProject();
//     browser.pause(1000);
//     dashboardPage.clickOnProjectMenu();
//     browser.pause(2000);
//     dashboardPage.clickOnProjectMoreOpt();
//     browser.pause(2000);
//     dashboardPage.clickOnProjectMoreSettings();
//     browser.pause(2000);
//     dashboardPage.clickOnProjectSettingsDelete();
//     dashboardPage.clickOnDeleteProjectBtn();
//     browser.acceptAlert();
//     browser.pause(3000);

//     // dashboardPage.acceptAlertOption();   
    

//   });  

// });
