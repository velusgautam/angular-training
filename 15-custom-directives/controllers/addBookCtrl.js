booksCart.controller('addBookCtrl', function ($scope, bookService, $location) {
    $scope.addBook = function () {
        bookService
            .addBook($scope.newBook)
            .then(function (response) {
                console.log(response);
                $location.path('/');
            });
    };
});