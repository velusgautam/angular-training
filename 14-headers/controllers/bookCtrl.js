booksCart.controller('bookCtrl', function ($scope, bookService, cartService) {
    function loadBooks() {
        bookService
            .getBooks()
            .then(function (response) {
                $scope.books = response.data;
            }); 
    }

    loadBooks();

    $scope.today = new Date();

    $scope.rateUp = function (book) {
        bookService
            .rateUp(book)
            .then(function (response) {
                loadBooks();
            });
    };

    $scope.rateDown = function (book) {
        bookService
            .rateDown(book)
            .then(function (response) {
                loadBooks();
            })
    };

    $scope.addToCart = function (book) {
        cartService.addToCart(book);
    };
});