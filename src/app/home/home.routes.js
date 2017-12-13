(function(){
	'use strict';
	angular.module("homeModule").config(routesConfig);

	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider){
		
	  	$stateProvider.state('home',{
	    	url: '/home',
	      	templateUrl : "app/home/pages/home.html",
	      	controller : "homeController",
	      	controllerAs : "vm"
	    });
	}
})();