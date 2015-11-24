'use strict';

angular
  .module('myApp')

  .service('planetsService', function($http, $rootScope){
    $rootScope.planets = [];
    this.getPlanets = function(){
      $http.get('http://swapi.co/api/planets/', {cache: true}).then(function(res){
        $rootScope.planets = res.data.results.map(function(planet){
          planet.residents = planet.residents.map(function(resident){
            var resident = { url : resident};
            resident.id = resident.url.match(/\d+/)[0];
            // console.log(resident);
            return resident;
          });
          $rootScope.planets.push(planet);
          return planet;
        });
      }).catch(function(err){
        console.error(err.status);
      });
    };
  })
