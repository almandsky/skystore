/*global Moltin*/
'use strict';
angular.module('skystoreApp.moltin', [])
  .factory('moltinAuth', function($q){
    var deferred = $q.defer();
    var moltin = new Moltin({publicId: 'xvlsIAfakHIUyE2vb5I8WGjMg13zyVpSgKNokfJv'});
    moltin.Authenticate(function() {
      deferred.resolve(moltin);
    });

    return deferred.promise;

  });
