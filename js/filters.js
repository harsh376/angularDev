/* Filters */

angular.module('myApp.Filters', [])

.filter('reverse', function() {
	return function(input) {
		input = input || '';
		out = "";
		for(var i=0; i<input.length; i++) {
			out = input.charAt(i) + out;
		}
		return out;
	};
});