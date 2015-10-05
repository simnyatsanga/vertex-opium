'use strict';

/**
 * @ngdoc function
 * @name vertexOpiumApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vertexOpiumApp
 */
angular.module('vertexOpiumApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.stuff = "abc";

    $http.get('https://www.googleapis.com/books/v1/volumes?q=game+engine')
      .success(function(data, status) {
          $scope.books = data.items;
          $scope.numberOfBooks = data.totalItems;
          $scope.status = status;
      })
      .error(function(data, status) {
          $scope.status = status;
      });

  });
