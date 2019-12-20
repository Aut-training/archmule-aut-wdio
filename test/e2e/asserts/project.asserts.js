const dashboardPage = require('../pages/Dashboard.page');
const projectPage = require('../pages/Project.page');
const taskPage = require('../pages/Task.page');
const context = require('../../data/context');
const { expect } = require('chai');

class ProjectAsserts {
  verifyTheTitleOfProjectCreated() {
    expect(dashboardPage.getProjectTitleText())
      .to.be.equal(context.projects.project.title);
  }

  verifyTitleOfTaskCreated() {
    expect(projectPage.getTaskCardTitle())
      .to.be.equal(context.task.task.title);
  }

  verfiyTaskIsInSecctionNext() {
    expect(taskPage.getTaskCardColumnText())
      .to.be.equal('Next');
  }

  verifyCreatedProjectWasDeleted() {
    expect(dashboardPage.getProjectTitleDontExists()).to.be.true;
  }

}
module.exports = new ProjectAsserts();