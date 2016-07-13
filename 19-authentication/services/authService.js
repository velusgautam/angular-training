booksCart.service('authService', function () {
    this.getToken = function () {
        return localStorage.getItem('token');
    };

    this.setToken = function (token) {
        localStorage.setItem('token', token);
    };

    this.removeToken = function () {
        localStorage.removeItem('token');
    }
})