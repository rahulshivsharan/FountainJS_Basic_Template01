(function(){
	'use strict';
	angular.module("usersModule").config(routesConfig);

	routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function routesConfig($stateProvider, $urlRouterProvider, $locationProvider){
		
	  	$stateProvider.state('users',{
	    	url: '/users',
	      	templateUrl : "app/users/pages/userList.html",
	      	controller : "userController",
	      	controllerAs : "vm"
	    });
	}
})();