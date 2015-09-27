(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                abstract: true,
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('home.step1', {
                url: 'step1',
                templateUrl: 'app/pages/step1/step1.html',
                controller: 'Step1Controller',
                controllerAs: 'step1'
            })
            .state('home.step2', {
                url: 'step2',
                templateUrl: 'app/pages/step2/step2.html',
                controller: 'Step2Controller',
                controllerAs: 'step2'
            })
            .state('home.step3', {
                url: 'step3',
                templateUrl: 'app/pages/step3/step3.html',
                controller: 'Step3Controller',
                controllerAs: 'step3'
            });

        $urlRouterProvider.otherwise('step1');
    }

})();
