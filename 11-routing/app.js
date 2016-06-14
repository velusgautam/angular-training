angular.module('booksCart', ['ui.router']);

angular.module('booksCart').config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'bookCtrl'
		})
		.state('about', {
			url: '/about-us',
			templateUrl: 'templates/about.html'
		})
		.state('new-book', {
			url: '/new-book',
			templateUrl: 'templates/new-book.html',
			controller: 'addBookCtrl'
		})
		.state('cart', {
			url: '/cart',
			templateUrl: 'templates/cart.html',
			controller: 'cartCtrl'
		})

		;

	$urlRouterProvider.otherwise('/');
})

