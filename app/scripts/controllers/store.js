'use strict';

/**
 * @ngdoc function
 * @name skystoreApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the skystoreApp
 */
angular.module('skystoreApp')
  .controller('StoreCtrl', function ($scope, categories) {
    $scope.categories = categories;
  });
