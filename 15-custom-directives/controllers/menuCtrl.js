angular
    .module('booksCart')
    .controller('menuCtrl', function($scope, $state, cartService) {
        $scope.cart = cartService.getCart();
        $scope.isCurrent = function(stateName) {
            return $state.current.name == stateName;
        };
    })
