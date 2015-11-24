'use strict';

angular
  .module('myApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/planets')

    $stateProvider
      .state('planets', {
        url: '/planets',
        templateUrl: 'templates/planets.html',
        controller: 'homeCtrl'
      })
      .state('resident', {
        url: '/resident/:id',
        templateUrl: 'templates/residents.html',
        controller: 'residentCtrl',
        resolve: {
          resident: function($http, $stateParams, $rootScope){
            return $http.get('http://swapi.co/api/people/' + $stateParams.id + '/').then(function(res){
              $rootScope.residents = $rootScope.residents ? $rootScope.residents : {};
              $rootScope.residents[$stateParams.id] = res.data;
              return res.data;
            });
          }
        }
      })
  })
