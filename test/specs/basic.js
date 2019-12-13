const assert = require('assert');
let should = require('chai').should()
import loginPage from '../pages/Login.page';

describe('Navigate to archmule page', () => {
  it('should have the right title', () => {
    browser.url('https://archmule.com/');
    const title = browser.getTitle();
    title.should.be.equal('Archmule');
  });
});