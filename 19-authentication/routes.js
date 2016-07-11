booksCart.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'bookCtrl'
        })
        .when('/about', {
            templateUrl: 'templates/about.html',
        })
        .when('/new-book', {
            templateUrl: 'templates/new-book.html',
            controller: 'addBookCtrl'
        })
        .when('/cart', {
            templateUrl: 'templates/cart.html',
            controller: 'cartCtrl'
        })
        .when('/products', {
            templateUrl: 'templates/products.html',
            controller: 'productCtrl',
            requiresLogin: true
        })
        .when('/login', {
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })
        ;
})