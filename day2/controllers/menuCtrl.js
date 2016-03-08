booksCart.controller('menuCtrl', function($scope, $location, authService) {
    $scope.isCurrent = function(url) {
        return url == $location.path();
    };

    $scope.userLoggedIn = function () {
    	return authService.isLoggedIn();
    };

    $scope.logout = function () {
    	authService.logout();
    	$location.path('/login');
    };
});
