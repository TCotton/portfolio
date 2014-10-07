/**
 * Created by awalpole on 07/10/2014.
 */

function TestingData() {

  this.testData = {};

  this.testData.contagePage = {
    name: 'AndyTesting',
    email: 'me@andywalpole.me',
    errorEmail: 'me AT andywalpole.me',
    message: 'This is a message',
    success: 'Thank you for taking the time to fill out the form. I will contact you as soon as I can!'
  };

  this.testData.blogPage = {
    name: 'AndyTesting',
    email: 'me@andywalpole.me',
    errorEmail: 'me AT andywalpole.me',
    message: 'This is a comment message',
    success: 'You have successfully submitted a blog comment',
    failure: 'The form has not been submitted because of errors. Please review the form error messages and click submit again'
  };

  this.testData.SLIDER = {
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
  }

}

module.exports = TestingData;
