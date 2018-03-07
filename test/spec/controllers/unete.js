'use strict';

describe('Controller: UneteCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var UneteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UneteCtrl = $controller('UneteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UneteCtrl.awesomeThings.length).toBe(3);
  });
});
