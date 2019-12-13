import MainPage from './Main.page';

class LoginPage extends MainPage {

    get loginButton() { return $('a.button'); }

    open() {
        super.open();
    }

    clickLogInBtn() {
        this.loginButton.click();
    }

}

export default new LoginPage();