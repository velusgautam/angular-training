booksCart.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'bookCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html'
		})
		.when('/cart', {
			template: 'cart gonna come here'
		})
		.when('/book/new', {
			controller: 'bookAddCtrl',
			templateUrl: 'templates/book-add.html'
		})
		.when('/cart', {
			controller: 'cartCtrl',
			templateUrl: 'templates/cart.html'
		})
		.when('/login', {
			controller: 'loginCtrl',
			templateUrl: 'templates/login.html'
		})
		.when('/my-orders', {
			controller: 'orderCtrl',
			templateUrl: 'templates/my-orders.html'
		})		
		.otherwise({
			redirectTo: '/'
		})
		;
});