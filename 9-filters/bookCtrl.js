angular
    .module('booksCart')
    .controller('bookCtrl', function($scope, bookService, cartService) {
        $scope.cart = cartService.getCart();

        $scope.books = bookService.getBooks();

        $scope.rateUp = function(book) {
            bookService.rateBookUp(book);
        };

        $scope.rateDown = function(book) {
            bookService.rateBookDown(book);
        };

        $scope.addToCart = function(book) {
            cartService.addToCart(book);
        };

        $scope.addBook = function() {
            bookService.addBook($scope.newBook);
            $scope.newBook = {};
        };


    });
