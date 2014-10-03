/**
 * Created by awalpole on 03/10/2014.
 */

// test the main contact form
describe('e2e: contact form', function() {

  var formMessage;
  var link;

  beforeEach(function() {
    browser.get('http://localhost:9000/#!/contact-me');
  });

  it('Form should present success message after all form input fields are successfully filled in', function() {

    element(by.model('contact.name')).sendKeys('Andy Walpole');
    element(by.model('contact.email')).sendKeys('me@andywalpole.me');
    element(by.model('contact.message')).sendKeys('This is a message');

    link = element(by.css('input[type=submit]'));
    link.click();

    formMessage = element(by.binding('contact.successMessage'));
    expect(formMessage.getText()).toBe('Thank you for taking the time to fill out the form. I will contact you as soon as I can!');

  });

  it('Error messages should appear if the submit button is clicked but not form fields are filled in', function() {

    link = element(by.css('input[type=submit]'));
    link.click();

    expect(element(by.css('.name-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);
    expect(element(by.css('.message-block .error-message')).isPresent()).toBe(true);

  });

  it('Error messages should appear if a non-email address is entered in the email field', function() {

    element(by.model('contact.name')).sendKeys('Andy Walpole');
    element(by.model('contact.email')).sendKeys('me AT andywalpole.me');
    element(by.model('contact.message')).sendKeys('This is a message');

    link = element(by.css('input[type=submit]'));
    link.click();

    expect(element(by.css('.email-block .error-message')).isPresent()).toBe(true);

  });

});