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
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    $scope.tabCi = false;
    $scope.tabSe = false;
    $scope.tabSi = false;

    $scope.tabUnofn = function () {
      $scope.tabU = true;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
      $scope.tabCi = false;
      $scope.tabSe = false;
      $scope.tabSi = false;
    }
    $scope.tabDosfn = function () {
      $scope.tabU = false;
      $scope.tabD = true;
      $scope.tabT = false;
      $scope.tabCu = false;
      $scope.tabCi = false;
      $scope.tabSe = false;
      $scope.tabSi = false;
    }
    $scope.tabTresfn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = true;
      $scope.tabCu = false;
      $scope.tabCi = false;
      $scope.tabSe = false;
      $scope.tabSi = false;
    }
    $scope.tabCuatrofn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = true;
      $scope.tabCi = false;
      $scope.tabSe = false;
      $scope.tabSi = false;
    }
    $scope.tabCincofn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
      $scope.tabCi = true;
      $scope.tabSe = false;
      $scope.tabSi = false;
    }
    $scope.tabSeisfn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
      $scope.tabCi = false;
      $scope.tabSe = true;
      $scope.tabSi = false;
    }
    $scope.tabSietefn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
      $scope.tabCi = false;
      $scope.tabSe = false;
      $scope.tabSi = true;
    }
  });
