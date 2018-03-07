'use strict';

describe('Controller: CausaCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var CausaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CausaCtrl = $controller('CausaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CausaCtrl.awesomeThings.length).toBe(3);
  });
});
