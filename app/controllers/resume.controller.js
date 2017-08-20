(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('ResumeController', ResumeController);

	  	ResumeController.$inject = ['servicoResume', '$stateParams'];
		function ResumeController(servicoResume, $stateParams) {
			var vm = this;
			vm.title = "Dashboard"
			vm.MerchantId = $stateParams.Id;
			get();

			function get() {
	            servicoResume.get($stateParams.Id).then(function (res) {
	               	vm.list = res.data.SuccessBody;
	            });
	        }	        
		}
})();
