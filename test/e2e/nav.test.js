/**
 * Created by awalpole on 03/10/2014.
 */
// test the main navigation
describe('e2e: navigation', function() {

  var ptor;
  var link;
  browser.get('http://localhost:9000');
  ptor = protractor.getInstance();

  it('should navigate to the /work-projects page when clicking', function() {
    link = element(by.css('.navigation li:nth-child(1) a'));
    link.click();
    expect(ptor.getCurrentUrl()).toMatch(/\/work-projects/);
  });

  it('should navigate to the /side-projects page when clicking', function() {
    link = element(by.css('.navigation li:nth-child(2) a'));
    link.click();
    expect(ptor.getCurrentUrl()).toMatch(/\/side-projects/);
  });

  it('should navigate to the /about-me page when clicking', function() {
    link = element(by.css('.navigation li:nth-child(3) a'));
    link.click();
    expect(ptor.getCurrentUrl()).toMatch(/\/about-me/);
  });

  it('should navigate to the /contact-me page when clicking', function() {
    link = element(by.css('.navigation li:nth-child(4) a'));
    link.click();
    expect(ptor.getCurrentUrl()).toMatch(/\/contact-me/);
  });

  it('should navigate to the /blog/ page when clicking', function() {
    link = element(by.css('.navigation li:nth-child(5) a'));
    link.click();
    expect(ptor.getCurrentUrl()).toMatch(/\/blog/);
  });


});
