class MainPage {
  constructor() {
    this.title = 'My Page';
  }

  open(path) {
    browser.url(path);
  }
}

module.exports = new MainPage();
