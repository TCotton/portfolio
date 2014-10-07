/**
 * Created by awalpole on 04/10/2014.
 */

var IndexPage = require('./IndexPage');
var TestingData = require('./TestingData');

// test the main carousel
describe('e2e: carousel', function() {

  var page = new IndexPage();
  var data = new TestingData();

  var link;
  var pageTopText;
  var pageTopTitle;
  var buttonFrontOne;
  var url = 'http://localhost:9000';

  /*
   onPrepare: function() {
   browser.driver.manage().window().maximize();
   }
   */

  beforeEach(function() {
    page.get();
  });


  it('check headline, text and link of each carousel slide after right click', function() {

    page.clickRight();

    pageTopTitle = element(by.css('.slider2 .page-top-title'));
    pageTopText = element(by.css('.slider2 .page-top-text'));
    buttonFrontOne = element(by.css('.slider2 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider2.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider2.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider2.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider3 .page-top-title'));
    pageTopText = element(by.css('.slider3 .page-top-text'));
    buttonFrontOne = element(by.css('.slider3 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider3.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider3.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider3.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider4 .page-top-title'));
    pageTopText = element(by.css('.slider4 .page-top-text'));
    buttonFrontOne = element(by.css('.slider4 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider4.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider4.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider4.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider5 .page-top-title'));
    pageTopText = element(by.css('.slider5 .page-top-text'));
    buttonFrontOne = element(by.css('.slider5 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider5.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider5.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider5.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider6 .page-top-title'));
    pageTopText = element(by.css('.slider6 .page-top-text'));
    buttonFrontOne = element(by.css('.slider6 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider6.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider6.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider6.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider7 .page-top-title'));
    pageTopText = element(by.css('.slider7 .page-top-text'));
    buttonFrontOne = element(by.css('.slider7 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider7.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider7.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider7.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider8 .page-top-title'));
    pageTopText = element(by.css('.slider8 .page-top-text'));
    buttonFrontOne = element(by.css('.slider8 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider8.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider8.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider8.URL);

    page.clickRight();

    pageTopTitle = element(by.css('.slider1 .page-top-title'));
    pageTopText = element(by.css('.slider1 .page-top-text'));
    buttonFrontOne = element(by.css('.slider1 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider1.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider1.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider1.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider8 .page-top-title'));
    pageTopText = element(by.css('.slider8 .page-top-text'));
    buttonFrontOne = element(by.css('.slider8 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider8.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider8.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider8.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider7 .page-top-title'));
    pageTopText = element(by.css('.slider7 .page-top-text'));
    buttonFrontOne = element(by.css('.slider7 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider7.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider7.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider7.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider6 .page-top-title'));
    pageTopText = element(by.css('.slider6 .page-top-text'));
    buttonFrontOne = element(by.css('.slider6 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider6.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider6.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider6.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider5 .page-top-title'));
    pageTopText = element(by.css('.slider5 .page-top-text'));
    buttonFrontOne = element(by.css('.slider5 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider5.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider5.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider5.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider4 .page-top-title'));
    pageTopText = element(by.css('.slider4 .page-top-text'));
    buttonFrontOne = element(by.css('.slider4 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider4.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider4.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider4.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider3 .page-top-title'));
    pageTopText = element(by.css('.slider3 .page-top-text'));
    buttonFrontOne = element(by.css('.slider3 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider3.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider3.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider3.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider2 .page-top-title'));
    pageTopText = element(by.css('.slider2 .page-top-text'));
    buttonFrontOne = element(by.css('.slider2 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider2.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider2.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider2.URL);

    page.clickLeft();

    pageTopTitle = element(by.css('.slider1 .page-top-title'));
    pageTopText = element(by.css('.slider1 .page-top-text'));
    buttonFrontOne = element(by.css('.slider1 a'));

    expect(pageTopTitle.getText()).toBe(data.testData.SLIDER.slider1.title);
    expect(pageTopText.getText()).toBe(data.testData.SLIDER.slider1.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + data.testData.SLIDER.slider1.URL);

  });

});