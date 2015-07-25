'use strict';

/* Controllers */

angular.module('myApp.Controllers', ['doowb.angular-pusher'])

.config(['PusherServiceProvider',
  function(PusherServiceProvider) {
    PusherServiceProvider
    .setToken('f7159e9e2eea1dda351b')
    .setOptions({});
  }
])

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

.controller('testTranscludeCtrl', function($scope) {
	$scope.val = 'one';
})

.controller('testPusherCtrl', function($scope, requestService, Pusher) {

    $scope.conversation = [];

    $scope.send = function() {
        $scope.response = requestService.addMessage($scope.message);

        $scope.message = '';   
    }

    Pusher.subscribe('test-channel', 'voila', function(data) {
        $scope.conversation.push(data.some);
        
        // alert('An event was triggered with message: ' + data.some);
    });
   
});




