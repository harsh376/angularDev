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

// directive that wraps other elements
.directive('testTransclude', function() {

	return {
		transclude: true,
		templateUrl: '../partials/my-dialog.html',
		link: function(scope, element, attrs) {
			scope.val = 'two';
		}
	};
})

// directive that binds the enter key
.directive('testEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.testEnter);
                });

                event.preventDefault();
            }
        });
    };
})

// directive that evaluates exp in the context of the original scope
.directive('testIsolateScope', function() {
    return {
        templateUrl: 'partials/test-isolate-scope.html',
        scope: {
            'pass': '&passSomething'
        }
    }
});

