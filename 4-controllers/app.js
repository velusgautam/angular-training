var booksCart = angular.module('booksCart', []);

booksCart.controller('bookCtrl', function () {
    this.book = {
        title: 'The Alchemist',
        author: 'Paulo Cohelo',
        price: 23,
        rating: 4
    };
});

