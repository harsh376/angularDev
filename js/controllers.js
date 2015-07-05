'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('updateFieldCtrl', function($scope, computeSomething) {
    $scope.name = 15;
    
    $scope.getName = function() {
        return computeSomething.printMyName();
    }
});
