'use strict';

/**
 * @ngdoc function
 * @name skystoreApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the skystoreApp
 */
angular.module('skystoreApp')
  .controller('ProductCtrl', function ($scope, product, moltin, $timeout) {
    $scope.myproduct = product;
    $scope.addStatus = null;
    $scope.addCart = function() {
      $scope.addStatus = 'Adding to cart...';
      moltin.Cart.Insert(product.id, 1, null, function() {
        $scope.addStatus = 'Success!';
        $timeout(function() {
          $scope.addStatus = null;
          //$scope.$apply();
        }, 1000);
      });
    };
    console.log(product);
  });
