(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('BaseController', BaseController);

	  	BaseController.$inject = ['$state'];
		function BaseController($state) {
			var vm = this;
			vm.title = "FideliStone"
			vm.description = 'A Stone está pronta para levar o mercado de pagamento para lugares nunca antes vistos.'
		}
})();
