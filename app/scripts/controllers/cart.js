'use strict';

/**
 * @ngdoc function
 * @name skystoreApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the skystoreApp
 */
angular.module('skystoreApp')
  .controller('CartCtrl', function ($scope, cart) {
    $scope.mycart = cart;
    console.log(cart);
  });
