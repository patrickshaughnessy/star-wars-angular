'use strict';

angular
  .module('myApp')

  .service('planetsService', function($http, $rootScope){
    $rootScope.planets = {};
    this.getPlanets = function(page){
      $rootScope.planets[page] = $rootScope.planets[page] ? $rootScope.planets[page] : [];
      if ($rootScope.planets[page].length){
        return $rootScope.planets[page];
      }
      $http.get('http://swapi.co/api/planets/?page=' + page, {cache: true}).then(function(res){
        console.log(res.data);
        console.log('here', $rootScope.planets[page]);
        $rootScope.planets[page] = res.data.results.map(function(planet){
          planet.residents = planet.residents.map(function(resident){
            var resident = { url : resident};
            resident.id = resident.url.match(/\d+/)[0];
            return resident;
          });
          $rootScope.planets[page].push(planet);
          console.log('there', $rootScope.planets)
          return planet;
        });
      }).catch(function(err){
        console.error(err.status);
      });
    };
  })
