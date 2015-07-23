'use strict';

/* Directives */

angular.module('myApp.Directives', [])

// directive that manipulates a DOM
.directive('displaySomething', function() {

	function link(scope, element, attrs) {

		scope.$watch(attrs.val, function(value) {
			element.text('Hello ' + value);
		});
	};

	return {
		link: link
	}
})

.directive('testTransclude', function() {

	return {
		transclude: true,
		templateUrl: '../partials/my-dialog.html',
		link: function(scope, element, attrs) {
			scope.val = 'two';
		}
	};
});


