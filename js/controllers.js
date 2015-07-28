'use strict';

/* Controllers */

angular.module('myApp.Controllers', ['pusher-angular'])

.run(function($rootScope) {
    $rootScope.client = new Pusher('f7159e9e2eea1dda351b', { 
        authEndpoint: 'http://127.0.0.1:5000/auth'
    });
})

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

.controller('testPusherCtrl', function($scope, requestService, $pusher) {

    $scope.conversation = [];

    $scope.send = function() {
        $scope.response = requestService.addMessage($scope.message);
        $scope.message = '';   
    }

    var client = $scope.client;
    var pusher = $pusher(client);
    var channel = pusher.subscribe('private-test-channel');

    channel.bind('voila', function (data) {
        $scope.conversation.push(data.some);
    });

    client.connection.bind('connected', function() {
        console.log('socket id: '+client.socket_id);
        console.log('connection socket id: '+client.connection.socket_id);
    });

});




