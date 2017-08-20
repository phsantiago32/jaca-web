(function () {
    'use strict';

    angular
        .module('jaca')
        .service('servicoResume', servicoResume);


    servicoResume.$inject = ['$http'];
    function servicoResume($http) {
        var BASE_URL = "http://94891fc8.ngrok.io/"
        var factory = {
            get: get
        }

        function get(id) {
            return $http.get(BASE_URL + '/customerSale/parsed/' + id);
        }
        
        return factory;

    }
})();

