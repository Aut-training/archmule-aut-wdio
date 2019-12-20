class TaskPage {
  open() {
  }

  get taskCardColumn() { return $('span=Next'); }

  getTaskCardColumnText() {
    this.taskCardColumn.waitForExist(5000);
    return this.taskCardColumn.getText();
  }

}

module.exports = new TaskPage();