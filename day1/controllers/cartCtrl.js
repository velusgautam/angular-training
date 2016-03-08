booksCart.controller('cartCtrl', function($scope, cartService) {
    $scope.cart = cartService.getCart();

    $scope.increaseQty = function(item) {
        cartService.increaseQty(item);
    };

    $scope.decreaseQty = function(item) {
        cartService.decreaseQty(item);
    };
});
