var booksCart = angular.module('booksCart', ['ngRoute']);

booksCart.config(function($httpProvider){
    $httpProvider.interceptors.push('tokenInterceptor');
});





