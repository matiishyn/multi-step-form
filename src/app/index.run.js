(function() {
  'use strict';

  angular
    .module('multiStepForm')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
