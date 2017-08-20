(function () {

    'use strict';

    angular
        .module('jaca.controllers')
        .controller('AuthController', AuthController);

    function AuthController($scope, $http, $location, $state) {
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


        var BASE_URL = "http://94891fc8.ngrok.io";
        vm.MERCHANT_ENDPOINT = vm.BASE_URL + "merchants";
        vm.AUTH_ENDPOINT = vm.BASE_URL + "auth";
        
        vm.ShouldDisplayLoginForm = true;
        vm.ShouldDisplayRecoveryPassword = false;
        vm.ShouldDisplayRegisterUser = false;
        vm.ShoudDisplayFullAddress = false;

        vm.errorLogin = false;

        $scope.DoLogin = function () {
            //TODO -> fazer chamada ajax para o login;
            $http({
                url: BASE_URL + "/auth/" + vm.username + "/" + vm.password,
                method: "GET"
            }).then(function successCallback(response) {
                if(response.data.StatusCode == 404){
                    vm.errorLogin = true;
                }

                if(response.data.StatusCode == 200){
                    $state.go('home', {"Id": response.data.SuccessBody.MerchantId});
                }
            }, function errorCallback(response) {
                $scope.error = response.statusText;
                vm.errorLogin = true;
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
            $http({
                url: BASE_URL + "/merchants/",
                method: "POST",
                data: requestData
            }).then(function successCallback(response) {
                //vm.Back();
                console.log(response.data.SuccessBody.Id);
                $state.go('home', {"Id": response.data.SuccessBody.Id});
            }, function errorCallback(response) {
                $scope.error = response.statusText;
                console.log(response);
            });
        }


        LoginText();
    }

})();