angular
    .module('booksCart')
    .service('bookService', function($http) {
        var url = 'http://localhost:3000/book/'

        this.getBooks = function() {
            return $http.get(url);
        };

        this.addBook = function(book) {
            return $http.post(url, book);
        };

        this.rateBookUp = function(book) {
            book.rating < 5 && book.rating++;
        };

        this.rateBookDown = function(book) {
            book.rating > 1 && book.rating--;
        };

    });
