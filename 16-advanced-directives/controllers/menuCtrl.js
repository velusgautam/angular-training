booksCart.controller('menuCtrl', function ($scope, $location) {
    $scope.isCurrent = function (path) {
        return $location.path() == path;
    };
})