var myApp = angular.module('myApp', [])

myApp.controller('mainController', function ($scope) {
  $scope.name = 'Mario Rossi'
  $scope.occupation = 'Coder'
  $scope.getname = function () {
    return 'Paolo'
  }

  console.log($scope)
})
