(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('HomeController', HomeController);

	  	HomeController.$inject = ['servicoMerchant', '$stateParams'];
		function HomeController(servicoMerchant, $stateParams) {
			var vm = this;
			vm.MerchantId = $stateParams.Id;
			getMerchants();

			function getMerchants() {
	            servicoMerchant.getMerchant($stateParams.Id).then(function (res) {
	                vm.merchantName = res.data.SuccessBody.Name;
	            });
	        }	        
		}
})();
