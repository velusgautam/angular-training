booksCart.service('orderService', function($http, authService) {
    var url = 'http://localhost:3000/api/v1/orders';

    this.placeOrder = function(cart) {
        return $http.post(url, cart, {
            headers: {
                'X-Access-Token': authService.getToken()
            }
        });
    };

    this.getAllOrders = function() {
        return $http.get(url, {
            headers: {
                'X-Access-Token': authService.getToken()
            }
        });
    };
});
