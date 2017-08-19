(function () {
    'use strict';

    angular
        .module('jaca')
        .service('servicoPromotion', servicoPromotion);


    servicoPromotion.$inject = ['$http'];
    function servicoPromotion($http) {

        var factory = {
            get: get,
            getPromotion: getPromotion,
            setPromotion: setPromotion
        }

        function get(id) {
            return $http.get('http://d8088e2e.ngrok.io/promotions/' + id);
        }


        function getPromotion(id) {
            return $http.get('http://d8088e2e.ngrok.io/promotions/' + id);
        }

        function setPromotion(data) {

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

