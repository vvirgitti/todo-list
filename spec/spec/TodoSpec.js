describe('todo list', function() {

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  describe('Setting up', function(){
    it('should have a title', function(){
      expect(browser.getTitle()).toEqual('Todo List App');
    });
  });

  describe('Adding a task', function(){
    it('should display the existing tasks on the page', function(){
      element(by.model('newTask')).sendKeys('Read the manual');
      element(by.id('create-task')).submit;
      expect(element.all(by.repeater('list in lists')).getText()).toContain('Read the manual');
    });
  });



});
