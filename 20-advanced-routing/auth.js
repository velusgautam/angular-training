angular.module('booksCart').run(function($rootScope, $state, authService) {
    $rootScope.$on('$stateChangeStart', function(e, nextState) {
        console.log(nextState, authService.getToken());
        if (nextState.name == 'products' && !authService.getToken()) {
            console.log('going to login');
            e.preventDefault();
            $state.go('login');
        }
        console.log(nextState.allow, authService.getRole());
        if (nextState.allow) {
            var found = false;
            for (var i = 0; i < nextState.allow.length; i++) {
                if (authService.getRole() == nextState.allow[i])
                    found = true;
            }
            if(!found){
                e.preventDefault();
                $state.go('login');
            }
        }
    })
})