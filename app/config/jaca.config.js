(function () {
    'use strict';

    angular
        .module('jaca')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];
        function config($stateProvider, $urlRouterProvider) {
            
            $urlRouterProvider.otherwise('/');

            $stateProvider
            
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })

                .state('home.promos', {
                    url: '/promotions',
                    templateUrl: 'views/promo.list.html',
                    controller: 'PromoController',
                    controllerAs: 'vm'
                })

                .state('home.promo.detail', {
                    url: '/promotion/:id',
                    templateUrl: 'views/promo.list.html',
                    controller: 'PromoListController',
                    controllerAs: 'vm'
                })

                .state('auth', {
                    url: '/auth',
                    templateUrl: 'views/auth.html',
                    controller: 'AuthController',
                    controllerAs: 'vm'
                })

                /**
                .state('home.divida', {
                    url: 'divida/:id',
                    templateUrl: 'Views/pessoa.html',
                    controller: "PessoaController",
                    controllerAs: "vm"
                })
                */
        }
})();