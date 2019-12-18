class DashboardPage {
  open(path) {
    browser.url(path);
  }

  get projectListSidebar() { return $('.ProjectListSidebar__trigger'); }

  get createProjectSide() { return $('.CreateProject'); }

  get createProjectBtn() { return $('button>svg.space-right'); }

  get projectTittleTxt() { return $('.form-control'); }

  get createNewProjectBtn() { return $('span.mx-auto'); }

  get projectTileLabel() { return $('.ProjectInfo__title'); }

  get projectTitleInSidebar() { return $('div=Project100'); }

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

  clickOnProject() {
    this.projectTitleInSidebar.click();
  }

  clickOnProjectMenu() {
    this.projectMenu.click();
  }

  clickOnProjectMoreOpt() {
    this.projectMenuBarMore.click();
  }

  clickOnProjectMoreSettings() {
    this.projectMoreSettings.click();
  }

  clickOnProjectSettingsDelete() {
    this.projectSettingsDelete.click();
  }

  clickOnDeleteProjectBtn() {
    this.deleteProjectBtn.click();
  }

  acceptAlertOption(){
    browser.acceptAlert();
  }

}

module.exports = new DashboardPage();
