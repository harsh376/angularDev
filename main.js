var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller('AppController', function($scope) {

    $scope.name = 1;

    $scope.getName = function() {
        return $scope.name;
    }

});