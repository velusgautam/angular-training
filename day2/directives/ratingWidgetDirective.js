booksCart.directive('ratingWidget', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/rating-widget.html',
        link: function(scope, element, attributes) {
            scope.starsArray = [];
            scope.color = attributes.color;

            for (var i = 0; i < 5; i++) {
                var star = i < scope.item.rating ? 1 : 0;
                scope.starsArray.push(star);
            }

            scope.updateStars = function(index) {
                scope.starsArray = [];
                for (var i = 0; i < 5; i++) {
                    var star = i <= index ? 1 : 0;
                    scope.starsArray.push(star);
                }
                scope.item.rating = index + 1;
            }

            //watch on item
            scope.$watch('item.rating', function(newVal, oldVal) {
                scope.starsArray = [];
                for (var i = 0; i < 5; i++) {
                    var star = i < newVal ? 1 : 0;
                    scope.starsArray.push(star);
                }
            });
        },
        scope: {
            item: "=",
            color: "@"
        }
    }
})
