(function () {
    'use strict';

    angular
        .module('jaca')
        .service('servicoMerchant', servicoMerchant);


    servicoMerchant.$inject = ['$http'];
    function servicoMerchant($http) {

        var factory = {
            getMerchant: getMerchant,
            setMerchant: setMerchant
        }

        function getMerchant(id) {
            return $http.get('http://d8088e2e.ngrok.io/merchants/' + id);
        }

        function setMerchant(data) {

            var jsonData = JSON.stringify(data);
            return $http({
                method: 'POST',
                url: 'http://d8088e2e.ngrok.io/merchant',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                data: jsonData
            });
        }

        return factory;

    }
})();

