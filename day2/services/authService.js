booksCart.service('authService', function () {
	var authData = {};

	this.setToken = function (token) {
		authData.token = token;
	};

	this.getToken = function (token) {
		return authData.token;
	};

	this.isLoggedIn = function () {
		return authData.token != undefined;
	};

	this.logout = function () {
		authData.token = undefined;
	};
})