booksCart.directive('starWidget', function () {
    return {
        templateUrl: 'templates/star-widget.html',
        scope: {
            points: "=",
            color: "@"
        },
        link: function (scope, element, attributes) {
            //Step1: Initial rendering
            function drawStars(rating) {
                scope.stars = [];
                for (var i = 0; i < 5; i++) {
                    var star = (i < rating ? 1 : 0)
                    scope.stars.push(star);
                }
            }
            drawStars(scope.points);

            //Step2: One way of 2way data binding
            scope.updateStars = function (index) {
                console.log('clicked')
                drawStars(index + 1);
                scope.points = index + 1;
            }

            //Step3: Other way of 2way data binding
            //happening automatically
        }
    };
})