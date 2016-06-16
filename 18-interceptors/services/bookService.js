angular
    .module('booksCart')
    .service('bookService', function($http) {
        var url = 'http://localhost:3000/book/';

        this.getBooks = function() {
            return $http.get(url);
        };

        this.addBook = function(book) {
            return $http.post('http://localhost:3000/book', book);
        };

        this.rateBookUp = function(book) {
            if(book.rating < 5){
                 book.rating++;
                 $http.put(url + book.id, book);
            }
        };

        this.rateBookDown = function (book) {
        	book.rating > 1 && book.rating--;
        };

    });
