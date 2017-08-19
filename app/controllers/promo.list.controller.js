(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoListController', PromoListController);

	  	PromoListController.$inject = ['servicoPromotion'];

		function PromoListController(servicoPromotion) {
			var vm = this;
			vm.title = "Promoções";

			get();

			function get(id) {
	            servicoPromotion.get(id).then(function (res) {
	                vm.promotions = res.data.SuccessBody;
	            });
	        }
		}

		

})();
