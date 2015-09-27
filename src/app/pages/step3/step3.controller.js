(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('Step3Controller', Step3Controller);

    /** @ngInject */
    function Step3Controller(UserService) {
        var vm = this;
        vm.UserData = UserService.data;
    }
})();
