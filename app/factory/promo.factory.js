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
            setPromotion: setPromotion,
            delPromotion: delPromotion
        }

        function get(id) {
            return $http.get('http://94891fc8.ngrok.io/merchants/'+id+'/promotions/');
        }


        function getPromotion(id) {
            return $http.get('http://d8088e2e.ngrok.io/promotions/' + id);
        }

        function setPromotion(data) {
            var jsonData = JSON.stringify(data);
            console.log(jsonData);
            return $http({
                method: 'POST',
                url: 'http://94891fc8.ngrok.io/promotion/',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                data: jsonData
            });
        }

        function delPromotion(id) {
            return $http({
                method: 'DELETE',
                url: 'http://94891fc8.ngrok.io/promotion/' + id,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            });
        }

        return factory;

    }
})();

