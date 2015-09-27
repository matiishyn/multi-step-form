(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('Step1Controller', Step1Controller);

    /** @ngInject */
    function Step1Controller(UserService) {
        var vm = this;

        vm.UserData = UserService.data;
    }
})();
