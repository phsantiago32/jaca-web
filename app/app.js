(function () {
    'use strict';

    angular.module('jaca', [
        'ui.router',
        'jaca.controllers',
        'ngAnimate',

        /* Modulos Externos */
        'ngProgressLite',
        'toastr'
    ]);
})();