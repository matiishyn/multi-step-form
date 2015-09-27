(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('Step1Controller', Step1Controller);

    /** @ngInject */
    function Step1Controller($scope, UserService, PermissionsService, $state) {
        var vm = this;

        vm.UserData = UserService.data;

        vm.goToStep2 = function() {
            PermissionsService['home.step2'] = true;
            $state.go('home.step2');
        };
    }
})();
