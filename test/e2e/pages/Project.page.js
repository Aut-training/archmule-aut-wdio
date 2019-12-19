class ProjectPage {

  open() {
    browser.url('https://archmule.com/@renemendoza/project600');
  }

  get addTaskTextbox() { return $('.AddTask__input'); }

  get addTaskButton() { return $('.AddTask__submit'); }

  get taskCard() { return $('span=TaskEX'); }

  get taskColumnNow() { return $('h3=Now'); }

  get taskCardColumn() { return $('span=Next'); }

  fillTaskTextbx(taskTitle) {
    this.addTaskTextbox.waitForExist(3000);
    this.addTaskTextbox.setValue(taskTitle);
  }

  clickOnAddTaskBtn() {
    this.addTaskButton.click();
  }

  clickOnTaskCard() {
    this.taskCard.click();
  }

  getTaskCardColumnText() {
    return this.taskCardColumn.getText();
  }

}

module.exports = new ProjectPage();
