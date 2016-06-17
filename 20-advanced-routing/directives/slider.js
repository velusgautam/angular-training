angular
    .module('booksCart')
    .directive('slider', function() {
        return {
            scope: {
                points: "="
            },
            link: function(scope, element, attributes) {
                //Step1: initial rendering
                element.slider({
                    min: 1,
                    max: 5
                });

                element.slider("value", scope.points);

                //Step2: One way of 2 way data binding
                element.on("slide", function(event, ui) {
                    scope.$apply(function() {
                        scope.points = ui.value;
                    });
                });

                //Step3: 2nd way of 2 way data binding
                scope.$watch('points', function (newVal) {
                	element.slider("value", newVal);
                });
            }
        }
    })
