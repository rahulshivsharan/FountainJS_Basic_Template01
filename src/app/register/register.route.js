(function(){
	'use strict';
	angular.module("loginModule").config(routesConfig);

	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider){
		$stateProvider.state('register',{
	    	url: '/register',
	      	templateUrl : "app/register/pages/register.html",
	      	controller : "registerController",
	      	controllerAs : "vm"
	    });
	} // end of routesConfig
})();