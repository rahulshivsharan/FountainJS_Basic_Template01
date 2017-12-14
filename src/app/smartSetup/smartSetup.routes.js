(function(){
	'use strict';
	angular.module("smartSetup").config(routesConfig);

	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider){
		
	  	$stateProvider.state('smartSetup',{
	    	url: '/smartSetup',
	      	templateUrl : "app/smartSetup/pages/smartSetup.html",
	      	controller : "smartSetupController",
	      	controllerAs : "vm"
	    });
	}
})();