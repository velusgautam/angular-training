booksCart.service('bookService', function () {
	var books = [{
        title: 'The Alcheimst',
        author: 'Paulo Cohelo',
        price: 20,
        rating: 2
    }, {
        title: 'THE NIGHTINGALE',
        author: 'Paulo Cohelo',
        price: 10,
        rating: 1
    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        price: 50,
        rating: 5
    }, {
        title: 'The monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 30,
        rating: 3
    }];

    this.getAllBooks = function () {
    	return books;
    };

    this.addBook = function (book) {
    	book.price = parseInt(book.price);
        book.rating = parseInt(book.rating);
        books.push(book);
    };
})