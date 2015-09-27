(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(UserService) {
        var vm = this;

        // storing data from from in service
        vm.UserData = UserService.data;
    }
})();
