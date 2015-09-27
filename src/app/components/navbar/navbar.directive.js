(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .directive('appNavbar', appNavbar);

    /** @ngInject */
    function appNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(moment) {
            var vm = this;

        }
    }

})();
