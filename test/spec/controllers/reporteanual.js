'use strict';

describe('Controller: ReporteanualCtrl', function () {

  // load the controller's module
  beforeEach(module('tecMonterreyApp'));

  var ReporteanualCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReporteanualCtrl = $controller('ReporteanualCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReporteanualCtrl.awesomeThings.length).toBe(3);
  });
});
