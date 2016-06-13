var booksCart = angular.module('booksCart', []);

booksCart.controller('bookCtrl', function($scope) {
    $scope.cart = {
        items: [],
        totalPrice: 0
    };

    $scope.books = [{
        title: 'The Alcheimst',
        author: 'Paulo Cohelo',
        price: 20,
        rating: 2
    }, {
        title: 'The monk who sold his ferrari',
        author: 'Robin Sharma',
        price: 20,
        rating: 2
    }, {
        title: 'THE NIGHTINGALE',
        author: 'Kristin Hannah',
        price: 20,
        rating: 2
    }, {
        title: 'Harry Potter',
        author: 'J K Rowling',
        price: 20,
        rating: 2
    }];

    $scope.rateUp = function(book) {
        book.rating < 5 && book.rating++;
    };

    $scope.rateDown = function(book) {
        book.rating > 1 && book.rating--;
    };

    $scope.addToCart = function(book) {
        var item = findInCart(book.title);
        if (item) {
            item.qty++;
        } else {
            item = {
                name: book.title,
                price: book.price,
                qty: 1
            };
            $scope.cart.items.push(item);
        }
    };

    function findInCart(title) {
        for (var i = 0; i < $scope.cart.items.length; i++) {
            var item = $scope.cart.items[i];
            if (item.name == title)
                return item;
        }
    }
});
