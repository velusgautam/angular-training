booksCart.controller('bookCtrl', function($scope, bookService, cartService) {
    $scope.books = bookService.getAllBooks();
    $scope.cart = cartService.getCart();
    $scope.booksToShow = 3;

    $scope.rateUp = function(book) {
        if (book.rating < 5)
            book.rating++;
    };

    $scope.rateDown = function(book) {
        if (book.rating > 1)
            book.rating--;
    };

    $scope.addToCart = function(book) {
        cartService.addItem(book);
    };
});
