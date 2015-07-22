'use strict';

/* Services */

angular.module('myApp.Services', [])

.factory('computeSomething', function() {
	var printMyName = function() {
		return 'harsh';
	};

	return {
	    printMyName: printMyName
	};
});