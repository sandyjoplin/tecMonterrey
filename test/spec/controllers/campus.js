'use strict';

describe('Controller: CampusCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var CampusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CampusCtrl = $controller('CampusCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CampusCtrl.awesomeThings.length).toBe(3);
  });
});
