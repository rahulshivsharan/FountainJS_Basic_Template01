(function(){
	'use strict';
	angular.module("loginModule").config(routesConfig);

	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider.state('login',{
	    	url: '/login',
	      	templateUrl : "app/login/pages/login.html",
	      	controller : "loginController",
	      	controllerAs : "vm"
	    });
	} // end of routesConfig
})();