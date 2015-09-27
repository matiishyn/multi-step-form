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
        function NavbarController($scope, $element, $rootScope, $state) {
            var vm = this;

            activateMenuItem($state.current.name);

            var onStateChange = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                activateMenuItem(toState.name);
            });

            function activateMenuItem(menuState) {
                // find menu item based on current state
                var activeEl = $element.find('[ui-sref="' + menuState + '"]');
                // activate current
                activeEl.removeClass('disabledItem').addClass('activeItem');
                // deactivate all siblings
                activeEl.parent('li').siblings().find('a').removeClass('activeItem disabledItem');
                // disable al next siblings
                activeEl.parent('li').nextAll().find('a').addClass('disabledItem');
            }

        }
    }

})();
