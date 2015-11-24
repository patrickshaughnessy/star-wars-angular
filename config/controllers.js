'use strict';

angular
  .module('myApp')
  .controller('homeCtrl', function($scope, $rootScope, planetsService){
    $scope.title = "Planets"
    $scope.residents = $rootScope.residents
    planetsService.getPlanets();
    $scope.planets = $rootScope.planets;
  })
  .controller('residentCtrl', function($scope, resident){
    $scope.title = "Resident";
    $scope.resident = resident;
  })
