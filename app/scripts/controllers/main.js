'use strict';

/**
 * @ngdoc function
 * @name tecMonterreyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tecMonterreyApp
 */
angular.module('tecMonterreyApp')
  .controller('MainCtrl', function ($scope, $location) {
    new WOW().init();
    $scope.toCausa = function () {
      $location.url("/causa")
    }
    $scope.toCampus = function () {
      $location.url("/campus")
    }
  });
