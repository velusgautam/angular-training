booksCart.service('bookService', function ($http) {
    var url = 'http://localhost:3000/book';
    this.getBooks = function () {
        return $http
            .get(url, {
                headers: {
                    'X-Access-Token': 'my-dummy-token'
                }
            });
    };

    this.addBook = function (book) {
        return $http
            .post(url, book);
    };

    this.rateUp = function (book) {
        if (book.rating < 5)
            book.rating++;
        return $http
            .put(url + '/' + book.id, book);
    }

    this.rateDown = function (book) {
        if (book.rating > 1)
            book.rating--;
        return $http
            .put(url + '/' + book.id, book);

    }
}); 