var booksCart = angular.module('booksCart', []);

booksCart.controller('bookCtrl', function ($scope) {
    $scope.book = {
        title: 'The Alchemist',
        author: 'Paulo Cohelo',
        price: 23,
        rating: 4
    };
});

