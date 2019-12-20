const loginPage = require('../pages/Login.page');
const assertMessages = require('../constants/SystemMessages.constants');
let should = require('chai').should();  

class LoginAsserts {
  verifyIfUserAvatarIsDisplayed() {
    (loginPage.userAvatarDisplayed()).should.be.true;
  }

  verifyWrongPasswordMessage() {
    (loginPage.getTextWrongCredentials())
      .should.be.equal(assertMessages.SYSTEM_INVALID_CREDENTIALS);
  }

  verifyEmptyUsernameMessage() {
    (loginPage.getIdentifierMsg())
      .should.be.equal(assertMessages.SYSTEM_REQUIRED_USER);
  }

  verifyEmptyPasswordMessage() {
    (loginPage.getPasswordMsg())
      .should.be.equal(assertMessages.SYSTEM_REQUIRED_PASSWORD);
  }
}

module.exports = new LoginAsserts();