booksCart.controller('loginCtrl', function ($scope, $http, authService, $location) {
    $scope.login = function () {
        $http
            .post('http://localhost:3000/login', $scope.user)
            .then(function (response) {
                authService.setToken(response.data.token);
                $location.path('/products');
            }, function (response) {
                console.log(response);
            })
    }
})