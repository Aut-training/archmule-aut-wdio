
describe('Drag and Drop command moves Drag Box from its position to Destination i.e., Drop Box', () => {
  it('should make Drag Box to reach out to Drop Box', () => {
    browser.url('https://jqueryui.com/droppable/');
    const frame1 = $('/html/body/div[1]/div[2]/div/div[1]/iframe');
    browser.switchToFrame(frame1);
    const drag = $('#draggable');
    drag.waitForExist(5000);
    console.log(drag);
    const drop = $('#droppable');
    console.log(drop);
    drag.dragAndDrop(drop, 5000);
    browser.pause(8000);
  });
});