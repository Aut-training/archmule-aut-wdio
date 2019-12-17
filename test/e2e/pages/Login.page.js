// import mainPage from './Main.page';
// const mainPage = require('./Main.page');

class LoginPage {
  // get loginBtn() { return $('a.button'); }
  
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

  getloginUrl() {
    return this.browser.getUrl();
  }

  fillMailUser(mailUser) {
    this.mailUserTxt.setValue(mailUser);
  }

  fillPasswUser(passwUser) {
    this.passwrdTxt.setValue(passwUser);
  }

  getTextWrongCredentials(){
    return this.alertWrongCredentials.getText();
  }

  clickLoginBtn() {
    this.loginButton.click();
  }

}

module.exports = new LoginPage();
