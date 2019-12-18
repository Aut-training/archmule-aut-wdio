class ProjectPage {

  open() {
    browser.url('https://archmule.com/@renemendoza/project600');
  }

  get addTaskTextbox() { return $('.AddTask__input'); }

  get addTaskButton() { return $('.AddTask__submit'); }

  get taskCard() { return $('span=TaskEX'); }

  get taskColumnNow() { return $('//*[@id="root"]/div[2]/div/div/div[3]/div/div/div/div/div[1]'); }
  // get taskColumnNow() { return $('button[title="Quick add task"]'); }

  fillTaskTextbx(taskTitle) {
    this.addTaskTextbox.waitForExist(3000);
    this.addTaskTextbox.setValue(taskTitle);
  }

  clickOnAddTaskBtn() {
    this.addTaskButton.click();
  }

  dragAndDrop() {
    (this.taskCard).dragAndDrop(this.taskColumnNow,5000);
  }

  clickOnTaskCard() {
    this.taskCard.click();
  }

}

module.exports = new ProjectPage();