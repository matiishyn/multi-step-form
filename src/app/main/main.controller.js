(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, UserService, PermissionsService) {
        var vm = this;

        // storing data from from in service
        vm.UserData = UserService.data;
        $scope.UserService = UserService;


        /**
         * Based on current requirements (Activate Next button and next step only when current page data is valid)
         * I had to watch all changes
         */
        $scope.$watchCollection('UserService.data', function(newVal) {
            // step2 is available only when email and passwords are valid
            PermissionsService['home.step2'] = !!(newVal.email && newVal.password && newVal.repeatPassword === newVal.password);
            // step3 is available only when birthday and name are valid
            PermissionsService['home.step3'] = !!(newVal.birthday && newVal.name && PermissionsService['home.step2']);
        });
    }
})();
