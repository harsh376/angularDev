'use strict';

/* Controllers */

angular.module('myApp.Controllers', [])

.controller('updateFieldCtrl', function($scope, computeSomething) {
    $scope.name = 15;
    
    $scope.getName = function() {
        return computeSomething.printMyName();
    }
})

.controller('resetCtrl', function($scope) {
	$scope.resetColors = false;

	$scope.result = 0;

	$scope.submit = function() {
		if ($scope.resetColors) {
			$scope.result = 1;
		} else {
			$scope.result = 2;
		}
	};
})

.controller('testDirectiveCtrl', function($scope) {
	$scope.something = 'earth';
})

.controller('testTranscludeCtrl', function($scope, requestService) {
	$scope.val = 'one';

    $scope.response = requestService.addMessage('testing');
});
