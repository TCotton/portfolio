/**
 * Created by awalpole on 04/10/2014.
 */

// test the main carousel
describe('e2e: carousel', function() {

  var SLIDER = {
    slider1: {
      title: 'Thompson Reuters Japan',
      text: 'A key website for Thomson Reuters expanding Far East market.',
      URL: '/#!/work-projects/thomson-reuters-japan'
    },
    slider2: {
      title: 'Blinkboxbooks',
      text: 'Tesco\'s new flagship eCommerce site built with AngularJS by a world-class in-house team.',
      URL: '/#!/work-projects/blinkbox'
    },
    slider3: {
      title: 'lightning.gs',
      text: 'Optimizes and coverts PNG images to Data URIs using the latest HTML5 APIs.',
      URL: '/#!/side-projects/lightning'
    },
    slider4: {
      title: 'UK Law Student',
      text: 'A clean, easy-to-navigate site to help Thomson Reuters engage with law undergraduates.',
      URL: '/#!/work-projects/uk-lawstudent'
    },
    slider5: {
      title: 'Kaplan International',
      text: 'Owned by the Washington Post Group, Kaplan International is the worlds leading education provider for those seeking to speak English.',
      URL: '/#!/work-projects/kaplan'
    },
    slider6: {
      title: 'Dr Newmans Clinic',
      text: 'One of Harley Street\'s leading specialist private clinics.',
      URL: '/#!/work-projects/drnewmans'
    },
    slider7: {
      title: 'Penny Books',
      text: 'Uses the Amazon API to search for books on sale for only one penny.',
      URL: '/#!/side-projects/pennybooks'
    },
    slider8: {
      title: 'Twt Twt',
      text: 'Send Tweets with UTF-8 character symbols to make a simple message fun → ♘ ❤ ♬ ♡ ❄ ♘',
      URL: '/#!/side-projects/twttwt'
    }
  };

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
    browser.get(url);
  });


  it('check headline, text and link of each carousel slide after right click', function() {

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider2 .page-top-title'));
    pageTopText = element(by.css('.slider2 .page-top-text'));
    buttonFrontOne = element(by.css('.slider2 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider2.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider2.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider2.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider3 .page-top-title'));
    pageTopText = element(by.css('.slider3 .page-top-text'));
    buttonFrontOne = element(by.css('.slider3 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider3.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider3.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider3.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider4 .page-top-title'));
    pageTopText = element(by.css('.slider4 .page-top-text'));
    buttonFrontOne = element(by.css('.slider4 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider4.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider4.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider4.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider5 .page-top-title'));
    pageTopText = element(by.css('.slider5 .page-top-text'));
    buttonFrontOne = element(by.css('.slider5 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider5.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider5.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider5.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider6 .page-top-title'));
    pageTopText = element(by.css('.slider6 .page-top-text'));
    buttonFrontOne = element(by.css('.slider6 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider6.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider6.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider6.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider7 .page-top-title'));
    pageTopText = element(by.css('.slider7 .page-top-text'));
    buttonFrontOne = element(by.css('.slider7 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider7.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider7.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider7.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider8 .page-top-title'));
    pageTopText = element(by.css('.slider8 .page-top-text'));
    buttonFrontOne = element(by.css('.slider8 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider8.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider8.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider8.URL);

    link = element(by.css('.right-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider1 .page-top-title'));
    pageTopText = element(by.css('.slider1 .page-top-text'));
    buttonFrontOne = element(by.css('.slider1 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider1.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider1.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider1.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider8 .page-top-title'));
    pageTopText = element(by.css('.slider8 .page-top-text'));
    buttonFrontOne = element(by.css('.slider8 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider8.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider8.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider8.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider7 .page-top-title'));
    pageTopText = element(by.css('.slider7 .page-top-text'));
    buttonFrontOne = element(by.css('.slider7 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider7.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider7.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider7.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider6 .page-top-title'));
    pageTopText = element(by.css('.slider6 .page-top-text'));
    buttonFrontOne = element(by.css('.slider6 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider6.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider6.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider6.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider5 .page-top-title'));
    pageTopText = element(by.css('.slider5 .page-top-text'));
    buttonFrontOne = element(by.css('.slider5 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider5.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider5.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider5.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider4 .page-top-title'));
    pageTopText = element(by.css('.slider4 .page-top-text'));
    buttonFrontOne = element(by.css('.slider4 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider4.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider4.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider4.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider3 .page-top-title'));
    pageTopText = element(by.css('.slider3 .page-top-text'));
    buttonFrontOne = element(by.css('.slider3 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider3.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider3.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider3.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider2 .page-top-title'));
    pageTopText = element(by.css('.slider2 .page-top-text'));
    buttonFrontOne = element(by.css('.slider2 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider2.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider2.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider2.URL);

    link = element(by.css('.left-arrow'));
    link.click();

    pageTopTitle = element(by.css('.slider1 .page-top-title'));
    pageTopText = element(by.css('.slider1 .page-top-text'));
    buttonFrontOne = element(by.css('.slider1 a'));

    expect(pageTopTitle.getText()).toBe(SLIDER.slider1.title);
    expect(pageTopText.getText()).toBe(SLIDER.slider1.text);
    expect(buttonFrontOne.getAttribute('href')).toBe(url + SLIDER.slider1.URL);

  });

});