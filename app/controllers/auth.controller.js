(function () {

    'use strict';

    angular
        .module('jaca.controllers')
        .controller('AuthController', AuthController);

    function AuthController($scope, $http, $location) {
        var vm = this;
        vm.username,
            vm.password,
            vm.useremail,
            vm.footerLeftText,
            vm.footerRightText,
            vm.merchantCep,
            vm.merchantCompanyName,
            vm.complement,
            vm.addressNumber,
            vm.latitute,
            vm.longitude,
            vm.merchantName,
            vm.fullAddress = "";


        vm.BASE_URL = "http://localhost:54621/";
        vm.MERCHANT_ENDPOINT = vm.BASE_URL + "merchants";
        vm.AUTH_ENDPOINT = vm.BASE_URL + "auth";
        
        vm.ShouldDisplayLoginForm = true;
        vm.ShouldDisplayRecoveryPassword = false;
        vm.ShouldDisplayRegisterUser = false;
        vm.ShoudDisplayFullAddress = false;


        $scope.DoLogin = function () {
            //TODO -> fazer chamada ajax para o login;
            $http({
                url: vm.AUTH_ENDPOINT + "/" + vm.username +"/" + vm.password,
                method: "GET",
                data: {}
            }).then(function successCallback(response) {
                if(response.data.StatusCode == 404){
                    alert('usuário não encontrado');
                }

                if(response.data.StatusCode == 200){
                    $location.path = '/home';
                }
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

        vm.RecoverPassword = function () {
            alert('a');
            $http({
                url: vm.AUTH_ENDPOINT + "/recover/" + vm.login,
                method: "GET",
                data: {}
            }).then(function successCallback(response) {
                alert('sucesso');
            }, function errorCallback(response) {
                alert('erro');
            });
        }

        vm.SearchCepWhenHasNineDigits = function () {
            if (vm.merchantCep.length !== 9) { return; }
            cep(vm.merchantCep)
                .then(function (response) {
                    vm.ShoudDisplayFullAddress = true;
                    vm.fullAddress = response.street + " " + response.neighborhood + " " + response.city + " " + response.state;

                    var geocoder = new google.maps.Geocoder();

                    geocoder.geocode({ 'address': vm.fullAddress }, function (results, status) {
                        var location = results[0].geometry.location;
                        vm.latitude = location.lat();
                        vm.longitude = location.lng();
                    });
                })

        }

        vm.SendNewUser = function () {
            var requestData = {
                "Name": vm.merchantName,
                "Latitude": vm.latitude,
                "Longitude": vm.longitude,
                "Email": vm.userEmail,
                "Password": vm.password,
                "Login": vm.login
            };
            console.log(requestData);
            $http({
                url: vm.MERCHANT_ENDPOINT,
                method: "POST",
                data: requestData

            }).then(function successCallback(response) {
                //vm.Back();
                alert('cadastrado com sucesso');
            }, function errorCallback(response) {
                $scope.error = response.statusText;
                console.log(response);
            });
        }


        LoginText();
    }

})();