angular.module('booksCart', ['ui.router']);

angular.module('booksCart').config(function($httpProvider) {
    $httpProvider.interceptors.push('tokenInterceptor');
})
