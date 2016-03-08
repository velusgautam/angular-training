booksCart.controller('menuCtrl', function($scope, $location) {
    $scope.isCurrent = function(url) {
        return url == $location.path();
    };
});
