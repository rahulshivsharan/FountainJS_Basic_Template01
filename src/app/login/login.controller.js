(function(){
	'use strict';
	angular.module("loginModule").controller("loginController",loginController);

	loginController.$inject = ["$scope"];

	function loginController($scope){
		var vm = this;		
		console.log("loginController instantiated....");
	} // end of loginController
})();