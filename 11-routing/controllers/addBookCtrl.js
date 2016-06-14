angular
    .module('booksCart')
    .controller('addBookCtrl', function($scope, bookService, $state) {
        $scope.addBook = function() {
            bookService.addBook($scope.newBook);
            $scope.newBook = {};
            $state.go('home');
        };
    });
