(function () {

    'use strict';

    angular
        .module('jaca.controllers')
        .controller('AuthController', AuthController);
        
        function AuthController($scope, $http) {
            var vm = this;
                vm.username,
                vm.password,
                vm.useremail,
                vm.footerLeftText,
                vm.footerRightText,
                vm.merchantCep,
                vm.merchantCompanyName = "";

            vm.ShouldDisplayLoginForm = true;
            vm.ShouldDisplayRecoveryPassword = false;
            vm.ShouldDisplayRegisterUser = false;


            $scope.DoLogin = function () {
                //TODO -> fazer chamada ajax para o login;
                $http({
                    url: "http://example.appspot.com/rest/app",
                    method: "GET",
                    data: {  }
                }).then(function successCallback(response) {
                    $scope.data = response.data;
                    console.log('sucesso');
                }, function errorCallback(response) {
                    $scope.error = response.statusText;
                    console.log('erro');
                });
            }

            $scope.ForgotPassword = function () {
                vm.ShouldDisplayRecoveryPassword = true;
                vm.ShouldDisplayLoginForm = false;
                vm.ShouldDisplayRegisterUser = false;
                OptionBackText();
            }

            function LoginText() {
                vm.footerLeftText = "Sou novo aqui";
                vm.footerRightText = "Esqueci minha senha";
            };

            function OptionBackText() {
                vm.footerLeftText = "Voltar";
                vm.footerRightText = "";
            }

            function NewLoginText() {
                vm.footerLeftText = "Voltar";
                vm.footerRightText = "";
            }

            $scope.Back = function () {
                vm.ShouldDisplayRecoveryPassword = false;
                vm.ShouldDisplayLoginForm = true;
                vm.ShouldDisplayRegisterUser = false;

                LoginText();
            }

            $scope.RegisterNewUser = function () {
                vm.ShouldDisplayRecoveryPassword = false;
                vm.ShouldDisplayLoginForm = false;
                vm.ShouldDisplayRegisterUser = true;
                OptionBackText();
            }

            vm.RecoverPassword = function(){
                $http({
                    url: "http://example.appspot.com/rest/app",
                    method: "GET",
                    data: {  }
                }).then(function successCallback(response) {
                    $scope.data = response.data;
                    console.log('sucesso');
                }, function errorCallback(response) {
                    $scope.error = response.statusText;
                    console.log('erro');
                });
            }

            vm.CepFocusOut = function(){
                alert('arroz');
            }

            LoginText();
        }

})();