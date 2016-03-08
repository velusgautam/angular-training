booksCart.controller('bookAddCtrl', function($scope, bookService, $location) {

	$scope.books = bookService.getAllBooks();

    $scope.addToCatalogue = function() {
        bookService.addBook(angular.copy($scope.newBook));
        $location.path('/');
    };
});
