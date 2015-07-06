'use strict';

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('updateFieldCtrl', function($scope, computeSomething) {
    $scope.name = 15;
    
    $scope.getName = function() {
        return computeSomething.printMyName();
    }
});

myAppControllers.controller('resetCtrl', function($scope) {
	$scope.resetColors = false;

	$scope.result = 0;

	$scope.submit = function() {
		if ($scope.resetColors) {
			$scope.result = 1;
		} else {
			$scope.result = 2;
		}
	};
});