angular
	.module('booksCart')
	.filter('titlecase', function () {
		return function (input) {
			var words = input.split(' ');
			for(var i=0; i<words.length; i++) {
				var word = words[i];
				words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
			}
			return words.join(' ');
		}
	});