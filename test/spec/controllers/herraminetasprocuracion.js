'use strict';

describe('Controller: HerraminetasprocuracionCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var HerraminetasprocuracionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HerraminetasprocuracionCtrl = $controller('HerraminetasprocuracionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HerraminetasprocuracionCtrl.awesomeThings.length).toBe(3);
  });
});
