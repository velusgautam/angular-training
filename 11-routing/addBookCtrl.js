booksCart.controller('addBookCtrl', function ($scope, bookService, $location) {
    $scope.addBook = function () {
        bookService.addBook($scope.newBook);
        $location.path('/');
    };
});