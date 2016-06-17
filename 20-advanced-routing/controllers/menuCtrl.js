angular
    .module('booksCart')
    .controller('menuCtrl', function($scope, $state, cartService, authService) {
        $scope.isCurrent = function(stateName) {
        	return $state.current.name == stateName;
        };
        $scope.cart = cartService.getCart();
        $scope.logout = function () {
        	authService.deleteToken();
        	$state.go('login');
        }
    })
