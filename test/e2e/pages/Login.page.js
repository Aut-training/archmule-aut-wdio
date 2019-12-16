import mainPage from './Main.page';

class LoginPage extends mainPage {
  get loginBtn() { return $('a.button'); }

  open() {
    super.open();
  }

  clickLoginBtn() {
    this.loginBtn.click();
  }
}

export const loginPage = new LoginPage();
