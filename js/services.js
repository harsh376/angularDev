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
})

.service('requestService', function($http, $q) {

    this.addMessage = function(message) {

        var request = $http({
            method: 'post',
            url: "http://127.0.0.1:5000/",
            data: {
                message: message
            }
        })

        return(request.then(handleSuccess, handleError));

        // return 'hello';
    };

    function handleError( response ) {
        console.log('failure');
        return( $q.reject( "An unknown error occurred." ) );
    }
    

    function handleSuccess( response ) {
        console.log(response);

        return(response);
    }

});
