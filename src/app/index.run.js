(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $state, PermissionsService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//            console.log(toState.name);
//            console.log(fromState.name);
            if (!PermissionsService[toState.name]) {
                event.preventDefault();
                $state.go(fromState.name || 'home.step1');
            }
        });
    }

})();
