(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('BaseController', BaseController);

		function BaseController() {
			var vm = this;
			vm.description = 'A Stone está pronta para levar o mercado de pagamento para lugares nunca antes vistos.'
		}
})();
