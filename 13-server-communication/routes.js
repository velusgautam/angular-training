booksCart.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html',
            controller: 'bookCtrl'
        })
        .when('/about', {
            template: '<h3>About US</h3>This is a good shop cart.'
        })
        .when('/new-book', {
            templateUrl: 'templates/new-book.html',
            controller: 'addBookCtrl'
        })
        .when('/cart', {
            templateUrl: 'templates/cart.html',
            controller: 'cartCtrl'
        })
        ;
})