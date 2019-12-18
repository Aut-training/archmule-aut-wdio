class DashboardPage {
  open() {
    browser.url('https://archmule.com/');
  }

  get projectListSidebar() { return $('.ProjectListSidebar__trigger'); }

  get createProjectSide() { return $('.CreateProject'); }

  get createProjectBtn() { return $('button>svg.space-right'); }

  get projectTittleTxt() { return $('.form-control'); }

  get createNewProjectBtn() { return $('span.mx-auto'); }

  get projectTileLabel() { return $('.ProjectInfo__title'); }

  get projectTitleInSidebar() { return $('div=Project600'); }

  get projectMenu() { return $('.Icon--vertical'); }

  get projectMenuBarMore() { return $('.ProjectSettings__links-more>a'); }

  get projectMoreSettings() { return $('div=Settings'); }

  get projectSettingsDelete() { return $('a[href$="delete"]'); }

  get deleteProjectBtn() { return $('.Button--red'); }

  clickProjectSidebar() {
    this.projectListSidebar.waitForExist(5000);
    this.projectListSidebar.click();
  }

  clickcreateProjectSide() {
    this.createProjectSide.waitForExist(3000);
    this.createProjectSide.click();
  }

  clickCreateProjectBtn() {
    this.createProjectBtn.waitForExist(3000);
    this.createProjectBtn.click();
  }

  fillProjectTitle(projectTitle) {
    this.projectTittleTxt.setValue(projectTitle);
  }

  clickCreateNewProjectBtn() {
    this.createNewProjectBtn.click();
  }

  getProjectTitleText() {
    this.projectTileLabel.waitForExist(3000);
    return this.projectTileLabel.getText();
  }

  clickOnProjectTitle() {
    this.projectTitleInSidebar.waitForExist(4000);
    this.projectTitleInSidebar.click();
  }

  clickOnProjectMenu() {
    this.projectMenu.waitForExist(3000);
    this.projectMenu.click();
  }

  clickOnProjectMoreOpt() {
    this.projectMenuBarMore.waitForExist(3000);
    this.projectMenuBarMore.click();
  }

  clickOnProjectMoreSettings() {
    this.projectMoreSettings.waitForExist(3000);
    this.projectMoreSettings.click();
  }

  clickOnProjectSettingsDelete() {
    this.projectSettingsDelete.waitForExist(3000);
    this.projectSettingsDelete.click();
  }

  clickOnDeleteProjectBtn() {
    this.deleteProjectBtn.click();
  }

  acceptAlertOption() {
    browser.acceptAlert();
  }
  
  deleteProjectAction() {
    this.projectListSidebar.waitForExist(3000);
    this.projectListSidebar.click();
    this.projectTitleInSidebar.waitForExist(4000);
    this.projectTitleInSidebar.click();
    this.projectMenu.waitForExist(3000);
    this.projectMenu.click();
    this.projectMenuBarMore.waitForExist(3000);
    this.projectMenuBarMore.click();
    this.projectMoreSettings.waitForExist(3000);
    this.projectMoreSettings.click();
    this.projectSettingsDelete.waitForExist(3000);
    this.projectSettingsDelete.click();
    this.deleteProjectBtn.click();
    browser.acceptAlert();
  }
}

module.exports = new DashboardPage();
