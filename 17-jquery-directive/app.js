var booksCart = angular.module('booksCart', ['ngRoute']);

booksCart.run(function ($http) {
    $http.defaults.headers.common['X-Access-Token'] = 'YmVlcDpib29w';
});





