/**
 * Used to store data from forms
 * Shared between multiple pages
 */
(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .factory('UserService', UserService);

    /** @ngInject */
    function UserService() {
        return {
            data: {} // save data here
        };
    }
})();