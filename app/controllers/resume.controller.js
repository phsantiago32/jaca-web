(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('ResumeController', ResumeController);

	  	//ResumeController.$inject = ['servicoMerchant'];
		function ResumeController() {
			var vm = this;

			vm.title = 'Dashboard';
			
		}
})();
