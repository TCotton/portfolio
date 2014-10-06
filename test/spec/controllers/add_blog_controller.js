'use strict';
describe('Controller: AddBlogCtrl as AdminAddBlogCtrl', function () {

  var $controller;
  var $rootScope;
  var MOCK_DATA;
  var $httpBackend;
  var $q;
  var scope;
  var AdminAddBlogCtrl;
  var stopwords = ['a', 'about', 'above', 'across', 'after', 'afterwards', 'again', 'against', 'all', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and', 'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway', 'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became', 'because', 'become', 'becomes', 'becoming', 'been', 'before', 'beforehand', 'behind', 'being', 'below', 'beside', 'besides', 'between', 'beyond', 'bill', 'both', 'bottom', 'but', 'by', 'call', 'can', 'cannot', 'cant', 'co', 'con', 'could', 'couldnt', 'cry', 'de', 'describe', 'detail', 'do', 'done', 'down', 'due', 'during', 'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere', 'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone', 'everything', 'everywhere', 'except', 'few', 'fifteen', 'fify', 'fill', 'find', 'fire', 'first', 'five', 'for', 'former', 'formerly', 'forty', 'found', 'four', 'from', 'front', 'full', 'further', 'get', 'give', 'go', 'had', 'has', 'hasnt', 'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby', 'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his', 'how', 'however', 'hundred', 'ie', 'if', 'in', 'inc', 'indeed', 'interest', 'into', 'is', 'it', 'its', 'itself', 'keep', 'last', 'latter', 'latterly', 'least', 'less', 'ltd', 'made', 'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more', 'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself', 'name', 'namely', 'neither', 'never', 'nevertheless', 'next', 'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing', 'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only', 'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours', 'ourselves', 'out', 'over', 'own', 'part', 'per', 'perhaps', 'please', 'put', 'rather', 're', 'same', 'see', 'seem', 'seemed', 'seeming', 'seems', 'serious', 'several', 'she', 'should', 'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some', 'somehow', 'someone', 'something', 'sometime', 'sometimes', 'somewhere', 'still', 'such', 'system', 'take', 'ten', 'than', 'that', 'the', 'their', 'them', 'themselves', 'then', 'thence', 'there', 'thereafter', 'thereby', 'therefore', 'therein', 'thereupon', 'these', 'they', 'thickv', 'thin', 'third', 'this', 'those', 'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to', 'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty', 'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'very', 'via', 'was', 'we', 'well', 'were', 'what', 'whatever', 'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas', 'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which', 'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose', 'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you', 'your', 'yours', 'yourself', 'yourselves', 'the'];

  beforeEach(module('portfolioApp.blogAdminController', 'testConstants', 'portfolioApp.blogAdminService', 'momentLibrary'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$controller_, _$rootScope_, _MOCK_DATA_, _$httpBackend_, _$q_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    MOCK_DATA = _MOCK_DATA_;
    $httpBackend = _$httpBackend_;
    $q = _$q_;

    scope = $rootScope.$new();

    AdminAddBlogCtrl = $controller('AddBlogCtrl as AdminAddBlogCtrl', {
      $scope: scope
    });

    scope.addBlogFormData = MOCK_DATA.blogArticle;

    $httpBackend.expect('POST', '/api/blog/add').respond(200);

    scope.$apply(function () {
      AdminAddBlogCtrl.addBlog(true);
    });

  }));

  it('Except url not have any spaces, to be all lowercase, contain hypthens and not contain stopwords. Tests the _addSEOFriendlyURL function', function () {

    expect(scope.addBlogFormData.url).toContain('-');
    expect(scope.addBlogFormData.url).not.toContain(' ');

    var slicedArray = scope.addBlogFormData.url;

    Object.keys(slicedArray.split('-')).forEach(function (key) {

      expect(stopwords).not.toContain(slicedArray[key]);

    });

  });

  it('Tests the _addDate function. Must be 13 numbers, less then current time plus one hour, more than current time minus one hour', function () {

    expect(scope.addBlogFormData.publishedDate).toMatch(/[0-9]/g);
    expect(scope.addBlogFormData.publishedDate.length).toBe(Date.now().toString().length);
    expect(scope.addBlogFormData.publishedDate).toBeLessThan((Date.now() + (60 * 60 * 1000)).toString());
    expect(scope.addBlogFormData.publishedDate).toBeGreaterThan((Date.now() - (60 * 60 * 1000)).toString());

  });

  it('Tests the _addUniqueID() function. Must be 6 digit string', function () {

    expect(scope.addBlogFormData.uniqueId.length).toBe(6);
    expect(scope.addBlogFormData.uniqueId).toBe(Date.now().toString().substring(0, 6));

  });

  it('Tests the _createContentSnippet() function. Must be 140 or fewer characters and end with an ellipse', function () {

    expect(scope.addBlogFormData.contentSnippet.length).toBeLessThan(140);
    expect(scope.addBlogFormData.contentSnippet).toContain('...');
    expect(scope.addBlogFormData.contentSnippet).toMatch(/[\.\.\.]$/);

  });

  it('After submission of blog of local scope form fields will be null: AdminAddBlogCtrl.addBlog()', function () {

    expect(scope.addBlogFormData.title).toBe(MOCK_DATA.blogArticle.title);
    expect(scope.addBlogFormData.author).toBe(MOCK_DATA.blogArticle.author);
    expect(scope.addBlogFormData.category).toBe(MOCK_DATA.blogArticle.category);
    expect(scope.addBlogFormData.content).toBe(MOCK_DATA.blogArticle.content);

    $httpBackend.expect('POST', '/api/blog/add').respond(200);

    scope.$apply(function () {
      AdminAddBlogCtrl.addBlog(true);
    });

    $httpBackend.flush();

    expect(scope.addBlogFormData.title).toBe(null);
    expect(scope.addBlogFormData.author).toBe(null);
    expect(scope.addBlogFormData.category).toBe(null);
    expect(scope.addBlogFormData.content).toBe(null);
    expect(scope.addBlogFormSubmit).toBe(false);

  });

});
