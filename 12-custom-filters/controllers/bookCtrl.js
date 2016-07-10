booksCart.controller('bookCtrl', function ($scope, bookService, cartService, $http) {
    $scope.books = bookService.getBooks();

    $scope.today = new Date();

    $scope.rateUp = function (book) {
        bookService.rateUp(book);
    };

    $scope.rateDown = function (book) {
        bookService.rateDown(book);
    };

    $scope.addToCart = function (book) {
        cartService.addToCart(book);
    };
});