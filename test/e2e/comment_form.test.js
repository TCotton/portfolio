/**
 * Created by awalpole on 04/10/2014.
 */

var BlogPage = require('./BlogPage');
var TestingData = require('./TestingData');

// test the main contact form
describe('e2e: blog comment form', function() {

  var page = new BlogPage();
  var data = new TestingData();

  var formMessage;

  beforeEach(function() {
    page.get();
  });

  it('Form should present success message after all form input fields are successfully filled in', function() {

    element(by.model('commentFormData.name')).sendKeys(data.testData.blogPage.name);
    element(by.model('commentFormData.email')).sendKeys(data.testData.blogPage.email);
    element(by.model('commentFormData.message')).sendKeys(data.testData.blogPage.message);

    page.clickSubmit();

    formMessage = element(by.binding('formSuccess'));
    expect(formMessage.getText()).toBe(data.testData.blogPage.success);

  });

  it('Error messages should appear if the submit button is clicked but not form fields are filled in', function() {

    page.clickSubmit();

    expect(element(by.css('.title-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.message-block .error-message')).isPresent()).toBe(true);

    formMessage = element(by.binding('formFailure'));
    expect(formMessage.getText()).toBe(data.testData.blogPage.failure);

  });

  it('Error messages should appear if a non-email address is entered in the email field', function() {

    element(by.model('commentFormData.name')).sendKeys(data.testData.blogPage.name);
    element(by.model('commentFormData.email')).sendKeys(data.testData.blogPage.errorEmail);
    element(by.model('commentFormData.message')).sendKeys(data.testData.blogPage.message);

    page.clickSubmit();

    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);


  });

});