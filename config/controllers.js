'use strict';

angular
  .module('myApp')
  .controller('homeCtrl', function($scope, $rootScope, planetsService){
    $scope.title = "Planets"
    $scope.residents = $rootScope.residents
    $scope.page = 1;

    $scope.getNextPage = function(){
      $scope.page++;
      planetsService.getPlanets($scope.page);
      $scope.planets = $rootScope.planets[$scope.page];
    }

    $scope.getPreviousPage = function(){
      $scope.page--;
      $scope.planets = $rootScope.planets[$scope.page];
    }

    planetsService.getPlanets($scope.page);
    $scope.planets = $rootScope.planets[$scope.page];
  })
  .controller('residentCtrl', function($scope, resident){
    $scope.title = "Resident";
    $scope.resident = resident;
  })
