booksCart.controller('productCtrl', function ($scope, $http, $location) {
    $http
        .get('http://localhost:3000/api/v1/products')
        .then(function (response) {
            console.log(response);
            $scope.products = response.data;
        }, function (response) {
            console.log(response);
            $scope.error = response.data;
            $location.path('/login');
        });
})