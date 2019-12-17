class DashboardPage {
  open(path) {
    browser.url(path);
  }

  get projectListSidebar() {
    return $('.ProjectListSidebar__trigger');
  }
  
  get createProjectSide() {
    return $('.CreateProject');
  }

  get createProjectBtn() {
    return $('button>svg.space-right');
  }

  get projectTittleTxt() {
    return $('.form-control');
  }

  get createNewProjectBtn() {
    return $('span.mx-auto');
  }
  
  get projectTileLabel() {
    return $('.ProjectInfo__title');
  }
  
  clickProjectSidebar() {    
    this.projectListSidebar.waitForExist(3000);
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

  getProjectTitleText(){
    this.projectTileLabel.waitForExist(3000);
    return this.projectTileLabel.getText();
  }

}

module.exports = new DashboardPage();
