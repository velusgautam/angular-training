angular.module('booksCart').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html',
            controller: 'bookCtrl',
        })
        .state('about', {
            url: '/about-us',
            templateUrl: 'templates/about.html',
            allow: ['admin']
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
        .state('products', {
            url: '/products',
            templateUrl: 'templates/products.html',
            controller: 'productCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl'
        })

    ;

    $urlRouterProvider.otherwise('/');
})
