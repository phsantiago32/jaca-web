(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('HomeController', HomeController);

		function HomeController() {
			var vm = this;
			vm.test = "hugo";

			vm.merchant = 'JacaMarket';
			vm.description = 'A Stone está pronta para levar o mercado de pagamento para lugares nunca antes vistos.'
		}

})();
