booksCart.controller('cartCtrl', function($scope, cartService, orderService, $location) {
    $scope.cart = cartService.getCart();

    $scope.increaseQty = function(item) {
        cartService.increaseQty(item);
    };

    $scope.decreaseQty = function(item) {
        cartService.decreaseQty(item);
    };

    $scope.placeOrder = function() {
        orderService
            .placeOrder($scope.cart)
            .then(function(response) {
                console.log(response);
            }, function(response) {
                if (response.status == 401) {
                    $location.path('/login')
                }
            });
    };
});
