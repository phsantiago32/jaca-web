(function () {
    'use strict';

    angular
        .module('jaca')
        .config(config);

        config.$inject = ['$stateProvider', '$urlRouterProvider'];
        function config($stateProvider, $urlRouterProvider) {
            
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('auth', {
                    url: '/',
                    templateUrl: 'views/auth.html',
                    controller: "AuthController",
                    controllerAs: "vm"
                })

                
                .state('home', {
                    url: '/home',
                    templateUrl: 'views/home.html',
                    controller: "HomeController",
                    controllerAs: "vm"
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