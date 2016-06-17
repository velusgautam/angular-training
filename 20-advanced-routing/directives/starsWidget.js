angular
    .module('booksCart')
    .directive('starsWidget', function() {
        return {
            templateUrl: 'templates/star-widget.html',
            scope: {
            	items: "="
            },
            link: function(scope, element, attributes) {
                function drawStars(rating) {
                    scope.stars = [];
                    for (var i = 0; i < 5; i++) {
                        var star = (i < rating ? 1 : 0);
                        scope.stars.push(star);
                    }
                }

                drawStars(scope.items);

                scope.updateStars = function(index) {
                    drawStars(index + 1);
                    //step 2: one way of 2 way data binding
                    scope.items = index + 1;
                };

                scope.$watch('items', function (newVal) {
                	drawStars(newVal);
                });
            }
        };
    })
