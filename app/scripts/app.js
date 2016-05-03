'use strict';

/**
 * @ngdoc overview
 * @name skystoreApp
 * @description
 * # skystoreApp
 *
 * Main module of the application.
 */
angular
  .module('skystoreApp', [
    'skystoreApp.moltin',
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store',
        resolve: {
          categories: function($q, moltinAuth) {
            var deferred = $q.defer();
            $q.when(moltinAuth).then(function(moltin) {
              moltin.Category.List(null, function(categories) {
                deferred.resolve(categories);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/category/:id', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        controllerAs: 'category',
        resolve: {
          category: function($q, $route, moltinAuth) {
            var deferred = $q.defer();
            $q.when(moltinAuth).then(function(moltin) {
              moltin.Category.Get($route.current.params.id, function(category) {
                deferred.resolve(category);
              });
            });
            return deferred.promise;
          },
          products: function($q, $route, moltinAuth) {
            var deferred = $q.defer();
            $q.when(moltinAuth).then(function(moltin) {
              moltin.Product.List({category: $route.current.params.id}, function(products) {
                deferred.resolve(products);
              });
            });
            return deferred.promise;
          }
        }
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product',
        resolve: {
          product: function($q, $route, moltinAuth) {
            var deferred = $q.defer();
            $q.when(moltinAuth).then(function(moltin) {
              moltin.Product.Get($route.current.params.id, function(product) {
                deferred.resolve(product);
              });
            });
            return deferred.promise;
          },
          moltin: function($q, moltinAuth) {
            return moltinAuth;
          }
        }
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart',
        resolve: {
          cart: function($q, moltinAuth) {
            var deferred = $q.defer();
            $q.when(moltinAuth).then(function(moltin) {
              moltin.Cart.Contents(function(cart) {
                deferred.resolve(cart);
              });
            });
            return deferred.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
