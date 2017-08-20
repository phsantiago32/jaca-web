(function () {
    'use strict';

    angular
        .module('jaca')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        function config($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode({
              enabled: true,
              requireBase: false
            });
            $urlRouterProvider.otherwise('/');

            $stateProvider
            
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    params: {
                        Id: null
                    }
                })

                .state('home.resume', {
                    url: '/resume',
                    templateUrl: 'views/resume.html',
                    controller: 'ResumeController',
                    controllerAs: 'vm',
                })

                .state('home.promos', {
                    url: '/promotions',
                    templateUrl: 'views/promo.list.html',
                    controller: 'PromoListController',
                    controllerAs: 'vm',
                    params: {
                        Id: null
                    }
                })

                .state('home.promo', {
                    url: '/form',
                    templateUrl: 'views/promo.form.html',
                    controller: 'PromoFormController',
                    controllerAs: 'vm'
                })

                .state('home.promo.detail', {
                    url: '/promotion/:id',
                    templateUrl: 'views/promo.list.html',
                    controller: 'PromoController',
                    controllerAs: 'vm'
                })

                .state('auth', {
                    url: '/',
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