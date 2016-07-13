booksCart.directive('slider', function () {
    return {
        scope: {
            points: "="
        },
        link: function (scope, element, attributes) {
            //Step1: Initial rendering
            element.slider({
                min: 1,
                max: 5
            });

            element.slider("value", scope.points);

            //Step2: One way of 2 way data binding
            element.on("slide", function (event, ui) {
                scope.points = ui.value;
                scope.$apply();
            });

            //Step3: 2nd way of data binding
            // happening by itself

        }
    };
})