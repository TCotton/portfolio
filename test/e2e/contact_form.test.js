/**
 * Created by awalpole on 03/10/2014.
 */
var ContactPage = require('./ContactPage');
var TestingData = require('./TestingData');

// test the main contact form
describe('e2e: contact form', function () {

  var page = new ContactPage();
  var data = new TestingData();

  var formMessage;

  beforeEach(function () {
    page.get();
  });

  it('Form should present success message after all form input fields are successfully filled in', function () {

    element(by.model('contact.name')).sendKeys(data.testData.contagePage.name);
    element(by.model('contact.email')).sendKeys(data.testData.contagePage.email);
    element(by.model('contact.message')).sendKeys(data.testData.contagePage.message);

    page.clickSubmit();

    formMessage = element(by.binding('contact.successMessage'));
    expect(formMessage.getText()).toBe(data.testData.contagePage.success);

  });

  it('Error messages should appear if the submit button is clicked but not form fields are filled in', function () {

    page.clickSubmit();

    expect(element(by.css('.name-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.message-block .error-message')).isPresent()).toBe(true);

  });

  it('Error messages should appear if a non-email address is entered in the email field', function () {

    element(by.model('contact.name')).sendKeys(data.testData.contagePage.name);
    element(by.model('contact.email')).sendKeys(data.testData.contagePage.errorEmail);
    element(by.model('contact.message')).sendKeys(data.testData.contagePage.message);

    page.clickSubmit();

    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);

  });

});