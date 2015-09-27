/**
 * Used to define permission to open page
 * Shared between multiple pages
 */
(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .factory('PermissionsService', UserService);

    /** @ngInject */
    function UserService() {
        return {
            'home.step1': true,
            'home.step2': false,
            'home.step3': false
        };
    }
})();
