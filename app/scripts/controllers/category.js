'use strict';

/**
 * @ngdoc function
 * @name skystoreApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the skystoreApp
 */
angular.module('skystoreApp')
  .controller('CategoryCtrl', function ($scope, category, products) {
    $scope.category = category;
    $scope.products = products;
  });
