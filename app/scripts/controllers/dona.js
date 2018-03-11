'use strict';

/**
 * @ngdoc function
 * @name tecMonterreyApp.controller:DonaCtrl
 * @description
 * # DonaCtrl
 * Controller of the tecMonterreyApp
 */
angular.module('tecMonterreyApp')
  .controller('DonaCtrl', function ($scope, $location) {
    $scope.toHome = function () {
      $location.url("/")
    }
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
    $scope.tabUnofn = function () {
      $scope.tabU = true;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = false;
    }
    $scope.tabDosfn = function () {
      $scope.tabU = false;
      $scope.tabD = true;
      $scope.tabT = false;
      $scope.tabCu = false;
    }
    $scope.tabTresfn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = true;
      $scope.tabCu = false;
    }
    $scope.tabCuatrofn = function () {
      $scope.tabU = false;
      $scope.tabD = false;
      $scope.tabT = false;
      $scope.tabCu = true;
    }
    /***/
    $scope.count = 0;
    $scope.tabU = true;
    $scope.tabD = false;
    $scope.tabT = false;
    $scope.tabCu = false;
    $scope.imgUrl = 'images/dona/barras-01.png';
    var arrayIMG = ["images/dona/barras-01.png", "images/dona/barras-02.png", "images/dona/barras-03.png", "images/dona/barras-04.png"];


    $scope.atras = function() {
        if ($scope.count == 0) {
            console.log($scope.count);
        } else {
            $scope.count--;
            $scope.imgUrl = arrayIMG[$scope.count];
            $scope.cargavista($scope.count+1);
            console.log($scope.count);
        }

    }
    $scope.siguiente = function() {
        if ($scope.count >= 0 && $scope.count < 4) {
            $scope.count++;
            $scope.imgUrl = arrayIMG[$scope.count];
            $scope.cargavista($scope.count +1);

            console.log($scope.count);
        } else {
            console.log($scope.count);
        }

    }
    $scope.cargavista = function(tab) {
        switch (tab) {
            case 1:
                $scope.tabU = true;
                $scope.tabD = false;
                $scope.tabT = false;
                $scope.tabCu = false;
                break;
            case 2:
                $scope.tabU = false;
                $scope.tabD = true;
                $scope.tabT = false;
                $scope.tabCu = false;
                break;
            case 3:
                $scope.tabU = false;
                $scope.tabD = false;
                $scope.tabT = true;
                $scope.tabCu = false;
                break;
            case 4:
                $scope.tabU = false;
                $scope.tabD = false;
                $scope.tabT = false;
                $scope.tabCu = true;
                break;
            default:
                break;
        }
    }
    $scope.cargavista(1);
    /** */
  });

