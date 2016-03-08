booksCart.controller('bookCtrl', function($scope, bookService, cartService, $http) {
    $scope.cart = cartService.getCart();
    $scope.booksToShow = 10;

    bookService
        .getAllBooks()
        .then(function(response) {
            $scope.books = response.data;
        });

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

    $scope.topRated = function(book) {
        return book.rating > 3;
    };

    $scope.cheap = function(book) {
        return book.price <= 20;
    };

    $scope.all = function(book) {
        return true;
    };
});
