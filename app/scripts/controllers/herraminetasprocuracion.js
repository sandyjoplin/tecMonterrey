'use strict';

/**
 * @ngdoc function
 * @name tecMonterreyApp.controller:HerraminetasprocuracionCtrl
 * @description
 * # HerraminetasprocuracionCtrl
 * Controller of the tecMonterreyApp
 */
angular.module('tecMonterreyApp')
  .controller('HerraminetasprocuracionCtrl', function ($scope) {
      /*para las tabs*/
      $scope.setTab = function (newTab) {
        $scope.tab = newTab;
      };
      $scope.isSet = function (tabNum) {
        return $scope.tab === tabNum;
      };
  });
