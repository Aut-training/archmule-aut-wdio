const loginPage = require('../pages/Login.page');
const context = require('../../data/context');
class LoginPage {
  open(path) {
    browser.url(path);
  }

  get mailUserTxt() {
    return $('#identifier');
  }
  get passwrdTxt() {
    return $('#password');
  }
  get loginButton() {
    return $('button[type=\'submit\']');
  }

  get alertWrongCredentials() {
    return $('div.alert-box');
  }

  get identifierRequiredMsg() {
    return $('div.error>input#identifier+small');
  }  

  get passwordRequiredMsg() {
    return $('div.error>input#password+small');
  }
  
  get userAvatar() {
    return $('.Avatar>img[alt="user\'s avatar"]');
  }

  get googleLoginBtn() {
    return $('.google-btn');
  }
  
  getloginUrl() {
    return browser.getUrl();
  }

  fillMailUser(mailUser) {
    this.mailUserTxt.waitForExist(10000);
    this.mailUserTxt.setValue(mailUser);
  }

  fillPasswUser(passwUser) {
    this.passwrdTxt.setValue(passwUser);
  }

  getTextWrongCredentials() {
    return this.alertWrongCredentials.getText();
  }

  clickLoginBtn() {
    this.loginButton.click();
  }

  getIdentifierMsg(){
    return this.identifierRequiredMsg.getText();
  }

  getPasswordMsg(){
    return this.passwordRequiredMsg.getText();
  }
 
  userAvatarDisplayed(){
    this.userAvatar.waitForExist(3000);
    let value = this.userAvatar.isDisplayed();
    return value;
  }

  getTextGoogleLoginBtn(){
    return this.googleLoginBtn.getText();
  }


  loginAction(){
    browser.url('https://archmule.com/login');
    // loginPage.open('https://archmule.com/login');
    loginPage.fillMailUser(context.logins.user.login);
    loginPage.fillPasswUser(context.logins.user.password);
    loginPage.clickLoginBtn();
  }

}

module.exports = new LoginPage();
