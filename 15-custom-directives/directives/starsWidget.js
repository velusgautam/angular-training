angular
    .module('booksCart')
    .directive('starsWidget', function() {
        return {
            templateUrl: 'templates/stars-widget.html',
            scope: {
            	points: "="
            },
            link: function(scope, element, attributes) {
                //Step1. initial rendering
                function drawStars(rating) {
                    scope.stars = [];
                    for (var i = 0; i < 5; i++) {
                        var star = (i < rating ? 1 : 0)
                        scope.stars.push(star);
                    }
                }

                drawStars(scope.points);

                scope.updateStars = function(index) {
                    drawStars(index+1)
                    //Step2. one way of 2 way data binding
                    scope.points = index + 1;
                };

                //Step3. another way of 2-way data binding
                scope.$watch('points', function(newVal) {
                	drawStars(newVal);
                });


            }
        };
    });
