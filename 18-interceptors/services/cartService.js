angular
    .module('booksCart')
    .factory('cartService', function() {
        var cart = {
            items: [],
            totalPrice: 0
        };

        var cartApi = {};

        cartApi.getCart = function() {
            return cart;
        };

        cartApi.addToCart = function(book) {
            var item = findInCart(book.title);
            if (item) {
                item.qty++;
            } else {
                var item = {
                    name: book.title,
                    price: book.price,
                    qty: 1
                };
                cart.items.push(item);
            }
            cart.totalPrice += book.price;
            cart.lastUpdatedAt = new Date();
        };

        function findInCart(title) {
            for (var i = 0; i < cart.items.length; i++) {
                var item = cart.items[i];
                if (item.name == title)
                    return item;
            }
        }

        return cartApi;
    });
