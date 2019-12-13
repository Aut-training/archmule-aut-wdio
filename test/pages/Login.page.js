import mainPage from './Main.page';
import { createPublicKey } from 'crypto';

class LoginPage extends mainPage {
    get loginBtn() { return $('a.button'); }


    open() {
        super.open()
    }

    clickLoginBtn() {
        this.loginBtn.click();
    }
}

export default new LoginPage();
// module.exports.LoginPage;
// module.exports.clickLoginBtn();
