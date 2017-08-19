(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoFormController', PromoFormController);

		function PromoFormController() {
			var vm = this;
			vm.title = "Cadastrar Promoção";
		}

})();
