(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, UserService) {
        var vm = this;

        // storing data from from in service
        vm.UserData = UserService.data;


        $scope.$watchCollection('UserService.data', function(newVal, oldVal) {

        });
    }
})();
