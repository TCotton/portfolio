/**
 * Created by awalpole on 07/10/2014.
 */

function BlogPage() {

  this.submit = element(by.css('input[type=submit]'));

  this.get = function() {
    browser.get('http://localhost:9000/#!/blog/141129/css-only-animated-mobile-menu');
  };

  this.clickSubmit = function() {
    this.submit.click();
  };

}

module.exports = BlogPage;
