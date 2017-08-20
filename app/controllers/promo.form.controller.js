(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoFormController', PromoFormController);

		function PromoFormController($scope, $state, servicoPromotion, $stateParams, ngProgressLite, $timeout, toastr) {
			var vm = this;
			vm.title = "Cadastrar Promoção";

			var merchantId = $stateParams.Id;

			vm.name,
            vm.description = "";


            vm.show = 0;
	        ngProgressLite.start();
	        $timeout(function () {
	            ngProgressLite.done();
	            vm.show = 1;
	        }, 350);
            

            $scope.DoPromotion = function () {
            	var data = {
	            	"Name": vm.name,
	            	"Description": vm.description,
	            	"MerchantId": merchantId
	            }

	            servicoPromotion.setPromotion(data).then(function (res) {
	            	toastr.success('Promoção cadastrada!');
	                $state.go('home.promos', {Id: merchantId});
	            });
            }

            

            
        }

})();
