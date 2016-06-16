angular
    .module('booksCart')
    .controller('menuCtrl', function($scope, $state, cartService) {
        $scope.isCurrent = function(stateName) {
        	return $state.current.name == stateName;
        };
        $scope.cart = cartService.getCart();
    })
