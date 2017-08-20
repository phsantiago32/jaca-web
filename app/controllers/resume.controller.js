(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('ResumeController', ResumeController);

		function ResumeController(servicoResume, $stateParams, ngProgressLite, $timeout) {
			var vm = this;
			vm.title = "Dashboard"
			vm.MerchantId = $stateParams.Id;
			get();

			vm.show = 0;
	        ngProgressLite.start();
	        $timeout(function () {
	            ngProgressLite.done();
	            vm.show = 1;
	        }, 350);

			function get() {
	            servicoResume.get($stateParams.Id).then(function (res) {
	               	vm.list = res.data.SuccessBody;
	            });
	        }	        
		}
})();
