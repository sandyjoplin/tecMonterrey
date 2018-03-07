'use strict';

describe('Controller: DonaCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var DonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonaCtrl = $controller('DonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DonaCtrl.awesomeThings.length).toBe(3);
  });
});
