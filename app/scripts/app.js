'use strict';

/**
 * @ngdoc overview
 * @name tecMonterreyApp
 * @description
 * # tecMonterreyApp
 *
 * Main module of the application.
 */
angular
  .module('tecMonterreyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/causa', {
        templateUrl: 'views/causa.html',
        controller: 'CausaCtrl',
        controllerAs: 'causa'
      })
      .when('/campus', {
        templateUrl: 'views/campus.html',
        controller: 'CampusCtrl',
        controllerAs: 'campus'
      })
      .when('/reporteAnual', {
        templateUrl: 'views/reporteanual.html',
        controller: 'ReporteanualCtrl',
        controllerAs: 'reporteAnual'
      })
      .when('/unete', {
        templateUrl: 'views/unete.html',
        controller: 'UneteCtrl',
        controllerAs: 'unete'
      })
      .when('/herraminetasProcuracion', {
        templateUrl: 'views/herraminetasprocuracion.html',
        controller: 'HerraminetasprocuracionCtrl',
        controllerAs: 'herraminetasProcuracion'
      })
      .when('/dona', {
        templateUrl: 'views/dona.html',
        controller: 'DonaCtrl',
        controllerAs: 'dona'
      })
      .when('/verCausa', {
        templateUrl: 'views/vercausa.html',
        controller: 'VercausaCtrl',
        controllerAs: 'verCausa'
      })
      .when('/verCampus', {
        templateUrl: 'views/vercampus.html',
        controller: 'VercampusCtrl',
        controllerAs: 'verCampus'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
