class DashboardPage {
  open(path) {
    browser.url(path);
  }

  get createProjectBtn(){
    return $('button>svg.space-right');
  }

  get projectTittleTxt(){
    return $('.form-control');
  }
  
  get createNewProjectBtn(){
    return $('span.mx-auto');
  }
  
  clickCreateProjectBtn(){
    this.createProjectBtn.waitForExist(3000);
    this.createProjectBtn.click();
  }
  
  fillProjectTitle(projectTitle){
    this.projectTittleTxt.setValue(projectTitle);
  }
  
  clickCreateNewProjectBtn(){
    this.createNewProjectBtn.click();
  }
}

module.exports = new DashboardPage();
