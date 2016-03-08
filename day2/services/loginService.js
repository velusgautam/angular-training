booksCart.service('loginService', function ($http) {
	var url = 'http://localhost:3000/login';

	this.login = function (user) {
		return $http.post(url, user);
	};
})