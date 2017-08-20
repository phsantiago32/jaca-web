(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoFormController', PromoFormController);

		function PromoFormController($scope, $state, servicoPromotion, $stateParams) {
			var vm = this;
			vm.title = "Cadastrar Promoção";

			var merchantId = $stateParams.Id;

			vm.name,
            vm.description = "";

            

            $scope.DoPromotion = function () {
            	console.log(Object.keys($stateParams))
            	var data = {
	            	"Name": vm.name,
	            	"Description": vm.description,
	            	"MerchantId": merchantId
	            }

	            servicoPromotion.setPromotion(data).then(function (res) {
	                $state.go('home.promos', {Id: merchantId});
	            });
            }

            

            
        }

})();
