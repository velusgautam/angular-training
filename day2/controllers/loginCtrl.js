booksCart.controller('loginCtrl', function($scope, loginService, authService, $location) {
    $scope.login = function() {
        loginService.login($scope.user).then(function(response) {
            authService.setToken(response.data.token);
            $location.path('/');
        }, function(response) {
            console.log(response);
        });
    }

});
