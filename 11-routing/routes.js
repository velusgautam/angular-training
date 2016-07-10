booksCart.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'bookCtrl'
        })
        .when('/about', {
            template: '<h3>About US</h3>This is a good shop cart.'
        })
        .when('/new-book', {
            templateUrl: 'new-book.html',
            controller: 'addBookCtrl'
        })
        .when('/cart', {
            templateUrl: 'cart.html',
            controller: 'cartCtrl'
        })
        ;
})