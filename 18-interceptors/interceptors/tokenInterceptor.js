angular
    .module('booksCart')
    .factory('tokenInterceptor', function($q) {
        return {
            request: function(request) {
            	request.headers['X-Access-Token'] = 'dummy-token';
                console.log('Request made with ', request);
                return request;
                // If an error, not allowed, or my custom condition, // return .reject('Not allowed');
            },
            requestError: function(rejection) {
                console.log('Request error due to ', rejection); // Continue to ensure that the next promise chain // sees an error
                return $q.reject(rejection);
                // Or handled successfully?
                // return someValue
            },
            response: function(response) {
                console.log('Response from server', response); // Return a promise
                if(response.data.length && response.data.push) {
                	response.data.push({
                		title: 'My dummy book',
                		author: 'dummy author',
                		price: 0,
                		rating: 3
                	})
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                console.log('Error in response ', rejection);
                // Continue to ensure that the next promise chain // sees an error
                // Can check auth status code here if need to
                // if (rejection.status === 403) {
                //   Show a login dialog
                //   return a value to tell controllers it has
                //   been handled
                // }
                // Or return a rejection to continue the
                // promise failure chain
                return $q.reject(rejection);
            }
        };
    });
