'use strict';

/* Services */

var myAppServices = angular.module('myAppServices', []);

myAppServices.factory('computeSomething', function() {
	var printMyName = function() {
		return 'harsh';
	};

	return {
	    printMyName: printMyName
	};
});