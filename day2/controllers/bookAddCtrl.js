booksCart.controller('bookAddCtrl', function($scope, bookService, $location) {

    $scope.addToCatalogue = function() {
        bookService
            .addBook(angular.copy($scope.newBook))
            .then(function(response) {
                $location.path('/');
            });
    };
});
