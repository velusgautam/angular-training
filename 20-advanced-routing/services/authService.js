angular
    .module('booksCart')
    .service('authService', function() {
        var authData = {};

        this.getToken = function() {
            return localStorage.getItem('token');
        };

        this.setToken = function(token) {
            localStorage.setItem('token', token);
        };

        this.deleteToken = function() {
            localStorage.removeItem('token');
        };

        this.getRole = function() {
            return localStorage.getItem('role');
        };

        this.setRole = function(role) {
            localStorage.setItem('role', role);
        };

        this.deleteRole = function() {
            localStorage.removeItem('role');
        };
    })
