booksCart.service('cartService', function() {
    var cart = { items: [], totalPrice: 0, lastUpdated: '' };

    this.getCart = function() {
        return cart;
    };

    this.addItem = function(item) {
        //update total price
        cart.totalPrice += item.price;
        cart.lastUpdated = new Date();

        //if already there, just increase the quantity
        var existingItem = findInCart(item.title);
        if (existingItem) {
            existingItem.quantity++;
            return;
        }

        var newItem = {
            name: item.title,
            price: item.price,
            quantity: 1
        };

        cart.items.push(newItem);
    };

    this.increaseQty = function(item) {
        cart.lastUpdated = new Date();
        cart.totalPrice += item.price;
        item.quantity++;
    };

    this.decreaseQty = function(item) {
        cart.lastUpdated = new Date();
        if (item.quantity > 0) {
            item.quantity--;
            cart.totalPrice -= item.price;
        }
    }

    function findInCart(name) {
        for (var i = 0; i < cart.items.length; i++) {
            if (cart.items[i].name == name) {
                return cart.items[i];
            }
        }
    }
});
