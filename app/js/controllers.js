'use strict';

var myControllers = angular.module('myControllers', []);

myControllers.controller('AboutController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/me.json').success(function(data) {
      $scope.me = data;
    });
    $http.get('data/teams.json').success(function(respone) {
      $scope.team = respone;
    });
  }
]);


myControllers.controller('ShowCaseController', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/foods.json').success(function(data) {
      $scope.foods= data;
    });
  }
]);