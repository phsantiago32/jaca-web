(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('HomeController', HomeController);

	  	HomeController.$inject = ['servicoMerchant'];
		function HomeController(servicoMerchant) {
			var vm = this;
			vm.test = "hugo";
			vm.description = 'A Stone está pronta para levar o mercado de pagamento para lugares nunca antes vistos.'
		
			getMerchants();

			function getMerchants() {
	            servicoMerchant.getMerchant('d4698ff5-7513-4b24-84e9-2ed629b6e98b').then(function (res) {
	                vm.merchantName = res.data.SuccessBody.Name;
	            });
	        }
		}
})();
