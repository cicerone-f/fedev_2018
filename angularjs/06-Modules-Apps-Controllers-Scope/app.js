// MODULE
// una sola variabile nel global namespace
var angularApp = angular.module('angularApp', [])

// CONTROLLERS
// inject $scope service

angularApp.controller('mainController', function ($scope) {
  $scope.myVar = 'Hello from mainController'
})
