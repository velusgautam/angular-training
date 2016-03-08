booksCart.service('bookService', function($http) {
    var url = 'http://localhost:3000/book'

    this.getAllBooks = function() {
        return $http.get(url);
    };

    this.addBook = function(book) {
        return $http.post(url, book);
    };
})
