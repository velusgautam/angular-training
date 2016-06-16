angular
    .module('booksCart')
    .controller('addBookCtrl', function($scope, bookService, $state, $http) {
        $scope.addBook = function() {
            bookService
                .addBook($scope.newBook)
                .then(function(response) {
                    console.log(response);
                    $state.go('home');
                });

            // bookService.addBook($scope.newBook);
            // $scope.newBook = {};
            // 
        };
    });
