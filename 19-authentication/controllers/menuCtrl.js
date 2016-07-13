booksCart.controller('menuCtrl', function ($scope, $location, authService) {
    $scope.isCurrent = function (path) {
        return $location.path() == path;
    };

    $scope.logout = function () {
        authService.removeToken();
        $location.path('/login');
    };
})