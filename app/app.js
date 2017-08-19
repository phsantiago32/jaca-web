'use strict';

angular
    .module('app', ['ngRoute'])
    .controller('HomeController', HomeController);

function HomeController() {
	var vm = this;
	vm.test = "hugo";
}