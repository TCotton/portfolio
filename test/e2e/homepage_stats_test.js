/**
 * Created by awalpole on 04/10/2014.
 */


// test the homepage stats
describe('e2e: home page stats', function() {

  var url = 'http://localhost:9000';
  var spanOne;
  var spanTwo;
  var spanThree;
  var spanFour;
  var spanFive;
  var calculateDate;

  beforeEach(function() {
    browser.get(url);
  });

  it('All digits on the front page stats should be correct', function() {

    // work out the number of day I have been a full time web developer since April 1 2008
    // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure

    /**
     * TODO: change to using the moment library so as to have equal parity with the directive script
     */

    var start = Date.parse('April 1, 2009');
    var now = Date.now();
    var totalDays = (now - start) / (1000 * 60 * 60 * 24);

    // now add the days to the scope
    calculateDate =  Math.round(totalDays).toString();

    spanOne = element(by.css('#homepage-stats span:nth-child(1) header'));
    spanTwo = element(by.css('#homepage-stats span:nth-child(2) header'));
    spanThree = element(by.css('#homepage-stats span:nth-child(3) header'));
    spanFour = element(by.css('#homepage-stats span:nth-child(4) header'));
    spanFive = element(by.css('#homepage-stats span:nth-child(5) header'));

    expect(spanOne.getText()).toBe(calculateDate);
    expect(spanTwo.getText()).toBe('3');
    expect(spanThree.getText()).toBe('90');
    expect(spanFour.getText()).toBe('3');
    expect(spanFive.getText()).toBe('78%');

  });

});
