(function () {
    'use strict';

    angular
        .module('multiStepForm')
        .controller('Step2Controller', Step2Controller);

    /** @ngInject */
    function Step2Controller(UserService, TextareaMaxlength, DateFormat) {
        var vm = this;
        vm.UserData = UserService.data;
        vm.TextareaMaxlength = TextareaMaxlength;
        vm.DateFormat = DateFormat;

        vm.openDatepicker = function () {
            vm.datepickerOpened = true;
        };

        /**
         * Max date for datepicker should be today
         * @returns {string} date string in default format
         */
        vm.getToday = function () {
            return moment().format();
        };

        /**
         * Returns number of symbols that are left till field is valid
         * @param el {number}
         */
        vm.getSymbolsLeft = function (el) {
            return el && el.$modelValue ? (TextareaMaxlength - el.$modelValue.length) : TextareaMaxlength;
        };
    }
})();
