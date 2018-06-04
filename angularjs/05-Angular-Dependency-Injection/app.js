var myApp = angular.module('myApp', [])

myApp.controller('mainController', [
  '$log',
  '$scope',
  function ($log, $scope) {
    console.log($scope)
    console.log($log)
  }
])

// minification ???
// https://jscompress.com/
