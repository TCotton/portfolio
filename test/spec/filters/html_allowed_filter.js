/**
 * Created by awalpole on 01/04/2014.
 */

'use strict';

describe('Unit: HTML allowed filter', function () {
  var $filter, MOCK_DATA, htmlAllowed;

  // Mock our module in our tests
  beforeEach(module('portfolioApp', 'testConstants'));

  beforeEach(inject(function (_$filter_, _MOCK_DATA_) {
    $filter = _$filter_;
    MOCK_DATA = _MOCK_DATA_;
    htmlAllowed = $filter('htmlAllowed');
  }));

  it('should limit the decimal points', function () {
//    console.log(MOCK_DATA.htmlFiler.textToFilter);
//    var result = htmlAllowed(MOCK_DATA.htmlFiler.textToFilter);
//    console.log(result);
//    expect(result).toContain('a');
  });

//  it('should capitalize the first letter', function() {
//    expect(filter('capitalize')('hello world'))
//      .toEqual('Hello world');
//  })

});
