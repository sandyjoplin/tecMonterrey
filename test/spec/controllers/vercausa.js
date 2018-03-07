'use strict';

describe('Controller: VercausaCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var VercausaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VercausaCtrl = $controller('VercausaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VercausaCtrl.awesomeThings.length).toBe(3);
  });
});
