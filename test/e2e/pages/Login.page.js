import mainPage from './Main.page';

class LoginPage extends mainPage {
  // get loginBtn() { return $('a.button'); }

  get mailUserTxt() {
    return $('#identifier');
  }
  get passwrdTxt() {
    return $('#password');
  }
  get loginButton() {
    return $('button[type=\'submit\']');
  }

  open() {
    super.open('https://archmule.com/login');
  }

  getloginUrl() {
    return this.browser.getUrl();
  }

  fillMailUser(mailUser) {
    this.mailUserTxt.sendKeys(mailUser);
  }

  fillPasswUser(passwUser) {
    this.passwrdTxt.sendKeys(passwUser);
  }

  clickLoginBtn() {
    this.loginButton.click();
  }


}

export const loginPage = new LoginPage();
