/**
 * Created by awalpole on 07/10/2014.
 */

function ContactPage() {

  this.submit = element(by.css('input[type=submit]'));

  this.get = function () {
    browser.get('http://localhost:9000/#!/contact-me');
  };

  this.clickSubmit = function () {
    this.submit.click();
  };

}

module.exports = ContactPage;