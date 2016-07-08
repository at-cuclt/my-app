'use strict';
// App module
var myApp = angular.module('myApp', [
  'ngRoute', // All routing, navigating in the app goes here
  'myControllers', // Our beloved controller module collection
]);

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController',
    })
    .when('/show', {
      templateUrl: 'view/show.html',
      controller: 'ShowCaseController',
    })
    // any link goes beyond defined routes will be redirected to /people route.
    .otherwise({
      redirectTo: '/about'
    });
}]);