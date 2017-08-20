(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('HomeController', HomeController);

		function HomeController(servicoMerchant, $stateParams, ngProgressLite, $timeout) {
			var vm = this;
			vm.MerchantId = $stateParams.Id;
			getMerchants();

			vm.show = 0;
	        ngProgressLite.start();
	        $timeout(function () {
	            ngProgressLite.done();
	            vm.show = 1;
	        }, 350);

			function getMerchants() {
	            servicoMerchant.getMerchant($stateParams.Id).then(function (res) {
	                vm.merchantName = res.data.SuccessBody.Name;
	            });
	        }	        
		}
})();
