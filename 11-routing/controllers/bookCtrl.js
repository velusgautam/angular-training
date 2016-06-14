angular
    .module('booksCart')
    .controller('bookCtrl', function($scope, bookService, cartService) {
        
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




    });
