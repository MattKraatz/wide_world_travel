"use strict";

let app = angular.module('WorldWideTravel',['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/guides',{
      templateUrl: './src/partials/guide-list.html',
      controller: 'BookCtrl'
    })
    .otherwise('/guides')
})
