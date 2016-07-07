'use strict';

describe('my app', function () {


  it('should automatically redirect to /about when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/about");
  });


  describe('home', function () {

    beforeEach(function () {
      browser.get('index.html#/about');
    });
  });


  describe('show', function () {

    beforeEach(function () {
      browser.get('index.html#/show');
    });

  });
});
