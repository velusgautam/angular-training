angular
	.module('booksCart')
	.controller('productCtrl', function ($scope, $http, $state) {
		$http
			.get('http://localhost:3000/api/v1/products')
			.then(function (response) {
				$scope.products = response.data;
			}, function (response) {
				console.log(response);
				//$state.go('login');
			});
	})