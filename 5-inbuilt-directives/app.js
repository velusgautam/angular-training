var booksCart = angular.module('booksCart', []);

booksCart.controller('bookCtrl', function ($scope) {
    $scope.cart = {
        items: [],
        totalPrice: 0
    };

    $scope.books = [
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

    $scope.rateUp = function (book) {
        if (book.rating < 5) 
            book.rating++;
    };

    $scope.rateDown = function (book) {
        if (book.rating > 1)
            book.rating--;
    };

    $scope.addToCart = function (book) {
        var item = findInCart(book.title);

        if (item) {
            item.qty++;
        } else {
            var item = {
                name: book.title,
                price: book.price,
                qty: 1  
            };

            $scope.cart.items.push(item);
        }

        $scope.cart.totalPrice += book.price;
    };

    function findInCart(title) {
        for(var i=0; i<$scope.cart.items.length; i++) {
            var item = $scope.cart.items[i];
            if(item.name == title)
                return item;
        }
    }
});

