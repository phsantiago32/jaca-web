(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoController', PromoController);

		function PromoController() {
			var vm = this;
			vm.title = "Lista de Promoções";
		}

})();
