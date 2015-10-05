'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vertexOpiumApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });

  it('should have a string in the scope', function() {
    expect(scope.stuff).toEqual('abc');
  });

  it('should demostrate an HTTP 200 response', inject(function($httpBackend) {
    $httpBackend
      .when('GET', 'https://www.googleapis.com/books/v1/volumes?q=game+engine')
      .respond(200, {'items': {foo : 'bar'}});

      $httpBackend.flush();

      expect(scope.status).toEqual(200);
      expect(scope.books).toEqual({foo : 'bar'});
  }));
});
