(function () {

	'use strict';

	angular
	    .module('jaca.controllers')
	  	.controller('PromoListController', PromoListController);

		function PromoListController(servicoPromotion, $stateParams, $scope, $state, ngProgressLite, $timeout, toastr) {
			var vm = this;
			vm.title = "Promoções";
			vm.MerchantId = $stateParams.Id;


            vm.show = 0;
	        ngProgressLite.start();
	        $timeout(function () {
	            ngProgressLite.done();
	            vm.show = 1;
	        }, 350);

			get();

			function get(id) {
	            servicoPromotion.get(vm.MerchantId).then(function (res) {
	                vm.promotions = res.data.SuccessBody;
	            });
	        }

	        $scope.delPromotion = function (id) {
	            servicoPromotion.delPromotion(id).then(function (res) {
	            	toastr.success('Promoção excluída!');
	            	$state.transitionTo($state.current, $stateParams, {
					    reload: true,
					    inherit: false,
					    notify: true
					});
	            });
            }
		}

		

})();
