angular
    .module('booksCart')
    .controller('bookCtrl', function($scope, bookService, cartService) {

        bookService.getBooks().then(function(response) {
            $scope.books = response.data;
        });

        $scope.rateUp = function(book) {
            bookService.rateBookUp(book);
        };

        $scope.rateDown = function(book) {
            bookService.rateBookDown(book);
        };

        $scope.addToCart = function(book) {
            cartService.addToCart(book);
        };

        $scope.highRatedBooks = function(book) {
            return book.rating > 3;
        };

        $scope.cheapBooks = function(book) {
            return book.price < 30;
        };

        $scope.allBooks = function(book) {
            return true;
        };
    });
