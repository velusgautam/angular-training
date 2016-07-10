booksCart.controller('cartCtrl', function ($scope, cartService) {
    $scope.cart = cartService.getCart();
});