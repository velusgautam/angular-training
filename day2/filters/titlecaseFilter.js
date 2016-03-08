booksCart.filter('titlecase', function () {
	return function (input) {
		var words = input.split(' ');

		for(var i=0; i<words.length; i++) {

			words[i] = capitalize(words[i].toLowerCase());
		}

		function capitalize(str) {
			return str.charAt(0).toUpperCase() + str.substr(1, str.length - 1);
		}

		return words.join(' ');
	}
})