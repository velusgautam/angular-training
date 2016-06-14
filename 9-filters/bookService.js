angular
    .module('booksCart')
    .service('bookService', function() {
        var books = [{
            title: 'The Alcheimst',
            author: 'Paulo Cohelo',
            price: 20,
            rating: 1
        }, {
            title: 'The monk who sold his ferrari',
            author: 'Robin Sharma',
            price: 10,
            rating: 4
        }, {
            title: 'THE NIGHTINGALE',
            author: 'Kristin Hannah',
            price: 50,
            rating: 5
        }, {
            title: 'Harry Potter',
            author: 'J K Rowling',
            price: 40,
            rating: 2
        }];

        this.getBooks = function() {
            return books;
        };

        this.addBook = function(book) {
            books.add(angular.copy(book));
        };

        this.rateBookUp = function(book) {
            book.rating < 5 && book.rating++;
        };

        this.rateBookDown = function (book) {
        	book.rating > 1 && book.rating--;
        };

    });
