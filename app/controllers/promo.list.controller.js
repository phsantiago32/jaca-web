(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoListController', PromoListController);

	  	PromoListController.$inject = ['servicoPromotion', '$stateParams', '$scope', '$state'];	

		function PromoListController(servicoPromotion, $stateParams, $scope, $state) {
			var vm = this;
			vm.title = "Promoções";
			vm.MerchantId = $stateParams.Id;

			get();

			function get(id) {
	            servicoPromotion.get(vm.MerchantId).then(function (res) {
	                vm.promotions = res.data.SuccessBody;
	            });
	        }

	        $scope.delPromotion = function (id) {
	            servicoPromotion.delPromotion(id).then(function (res) {
	            	$state.transitionTo($state.current, $stateParams, {
					    reload: true,
					    inherit: false,
					    notify: true
					});
	            });
            }
		}

		

})();
