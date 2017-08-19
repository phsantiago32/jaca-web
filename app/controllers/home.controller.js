(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('HomeController', HomeController);

	  	HomeController.$inject = ['servicoMerchant'];
		function HomeController(servicoMerchant) {
			var vm = this;
			
			getMerchants();

			function getMerchants() {
	            servicoMerchant.getMerchant('d4698ff5-7513-4b24-84e9-2ed629b6e98b').then(function (res) {
	                vm.merchantName = res.data.SuccessBody.Name;
	            });	
	        }
		}
})();
