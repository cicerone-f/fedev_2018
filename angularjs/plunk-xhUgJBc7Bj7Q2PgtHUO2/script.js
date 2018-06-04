// Code goes here

var app = angular.module("myApp", []);


app.controller("myCtrl", function($scope) {
    $scope.data = {
      todo: ['Learn Angularjs','Learn Meteor.js','Learn VueJs'],
      completed: ['Learn JavaScript']
    };
    
    $scope.add = function (){
      $scope.data.todo.unshift($scope.term);
      $scope.term = "";
    }
    
    $scope.remove = function (item, isTodo){
      var list = $scope.data.todo;
      if(!isTodo){
        list = $scope.data.completed;
      }
      list.splice(
        list.indexOf(item),
        1
      );
    }
    
    $scope.switchStateOfItem = function (item, state) {
      if (state === 'todo') {
        $scope.data.todo.splice($scope.data.todo.indexOf(item), 1)
        $scope.data.completed.push(item)
      } else {
        $scope.data.completed.splice($scope.data.completed.indexOf(item), 1)
        $scope.data.todo.push(item)
      }
    }
});
