/**
 * Created by awalpole on 02/10/2014.
 */
/**
 * Created by awalpole on 25/09/2014.
 */

describe('test homepage', function() {

  it('should have a title', function() {

    browser.get('http://localhost:9000');

    expect(browser.getTitle()).toEqual('The portfolio and blog of web developer Andy Walpole');

  });

/*
  it('Click the first button - this should be the digit 0', function() {

    browser.get('http://localhost:9000/#/');

    var clickonElement = element(by.css('.controls span:first-of-type'));

    clickonElement.click();

    var input = element(by.id('number'));

    expect(input.getAttribute('value')).toEqual('0');

  });

  it('Click the kast button - this should leave the model ', function() {

    browser.get('http://localhost:9000/#/');

    var clickonElement = element(by.css('.controls span:last-of-type'));

    clickonElement.click();

    var input = element(by.id('number'));

    expect(input.getAttribute('value')).toEqual('');

  });*/

});
