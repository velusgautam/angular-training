booksCart.controller('orderCtrl', function($scope, orderService, $location) {
    orderService.getAllOrders().then(function(response) {
        $scope.orders = response.data;
    }, function(response) {
        if (response.status == 401) {
            $location.path('/login');
        }
    });
});
