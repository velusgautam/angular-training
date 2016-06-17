angular
	.module('booksCart')
	.controller('loginCtrl', function ($scope, $http, authService, $state) {
		$scope.login = function () {
			$http
				.post('http://localhost:3000/login', $scope.user)
				.then(function (response) {
					authService.setToken(response.data.token);
					authService.setRole(response.data.user.role);
					$state.go('products');
				});
		}
	})