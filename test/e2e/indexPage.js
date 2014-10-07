/**
 * Created by awalpole on 07/10/2014.
 */

function IndexPage() {

  this.right = element(by.css('.right-arrow'));
  this.left = element(by.css('.left-arrow'));

  this.get = function () {
    browser.get('http://localhost:9000');
  };

  this.clickRight = function () {
    this.right.click();
  };

  this.clickLeft = function () {
    this.left.click();
  };

}

module.exports = IndexPage;