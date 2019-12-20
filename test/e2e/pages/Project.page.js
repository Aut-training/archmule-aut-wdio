class ProjectPage {

  get addTaskTextbox() { return $('.AddTask__input'); }

  get addTaskButton() { return $('.AddTask__submit'); }

  get taskCard() {
    let taskTitle = 'span=Define Project Goals';
    let result = taskTitle.replace('TaskExample', 'Define Project Goals');
    return $(result);
  }

  get taskColumnNow() { return $('h3=Now'); }

  get taskCardTitle() { return $('.Task__text'); }

  open() {
    browser.url('https://archmule.com/@renemendoza/project600');
  }

  fillTaskTextbx(taskTitle) {
    this.addTaskTextbox.waitForExist(3000);
    this.addTaskTextbox.setValue(taskTitle);
  }

  clickOnAddTaskBtn() {
    this.addTaskButton.click();
  }

  clickOnTaskCard() {
    this.taskCard.waitForDisplay(5000);
    this.taskCard.click();
  }

  getTaskCardTitle() {
    return this.taskCardTitle.getText();
  }

}

module.exports = new ProjectPage();
