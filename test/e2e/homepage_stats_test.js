/**
 * Created by awalpole on 04/10/2014.
 */


// test the homepage stats
/*
describe('e2e: home page stats', function() {

  var url = 'http://localhost:9000';
  var spanOne;
  var spanTwo;
  var spanThree;
  var spanFour;
  var spanFive;

  // work out the number of day I have been a full time web developer since April 1 2008
  // now milliseconds minus milliseconds from April 1, 2009 then calculate the days from this figure

  var start = moment('April 1, 2009').valueOf();
  var now = moment().valueOf();
  var totalDays = (now - start) / (1000 * 60 * 60 * 24);

  // now add the days to the scope
  var calculateDate = Math.round(totalDays).toString();

  beforeEach(function() {

    browser.get(url);

  });

  iit('All digits on the front page stats should be correct', function() {

    spanOne = element(by.css('#homepage-stats span:nth-child(1) header'));

    expect(spanOne.getText()).toBe(calculateDate);


  });



  //homepage-stats



});
*/
