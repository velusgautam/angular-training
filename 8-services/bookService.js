booksCart.service('bookService', function () {
    var books = [
        {
            title: 'The Alchemist',
            author: 'Paulo Cohelo',
            price: 23,
            rating: 4
        },
        {
            title: 'The Monk who sold his ferrari',
            author: 'Robin Sharma',
            price: 21,
            rating: 2
        },
        {
            title: 'Harry Potter',
            author: 'J K Rowling',
            price: 12,
            rating: 5
        },
        {
            title: 'The Lean Startup',
            author: 'Eric Ries',
            price: 10,
            rating: 1
        }
    ];

    this.getBooks = function () {
        return books;
    };

    this.addBook = function (book) {
        book = angular.copy(book);
        book.price = parseInt(book.price);
        books.unshift(book);
    };

    this.rateUp = function (book) {
        if (book.rating < 5)
            book.rating++;
    }

    this.rateDown = function (book) {
        if (book.rating > 1)
            book.rating--;
    }
}); 