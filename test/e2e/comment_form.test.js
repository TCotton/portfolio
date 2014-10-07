/**
 * Created by awalpole on 04/10/2014.
 */

var BlogPage = require('./BlogPage');

// test the main contact form
describe('e2e: blog comment form', function() {

  var page = new BlogPage();

  var formMessage;

  beforeEach(function() {
    page.get();
  });

  it('Form should present success message after all form input fields are successfully filled in', function() {

    element(by.model('commentFormData.name')).sendKeys('Andy Walpole');
    element(by.model('commentFormData.email')).sendKeys('me@andywalpole.me');
    element(by.model('commentFormData.message')).sendKeys('This is a comment message');

    page.clickSubmit();

    formMessage = element(by.binding('formSuccess'));
    expect(formMessage.getText()).toBe('You have successfully submitted a blog comment');

  });

  it('Error messages should appear if the submit button is clicked but not form fields are filled in', function() {

    page.clickSubmit();

    expect(element(by.css('.title-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.message-block .error-message')).isPresent()).toBe(true);

    formMessage = element(by.binding('formFailure'));
    expect(formMessage.getText()).toBe('The form has not been submitted because of errors. Please review the form error messages and click submit again');

  });

  it('Error messages should appear if a non-email address is entered in the email field', function() {

    element(by.model('commentFormData.name')).sendKeys('Andy Walpole');
    element(by.model('commentFormData.email')).sendKeys('me AT andywalpole.me');
    element(by.model('commentFormData.message')).sendKeys('This is a comment message');

    page.clickSubmit();

    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);


  });

});