(function(){
	'use strict';
	angular.module("loginModule").controller("loginController",loginController);

	loginController.$inject = ["$scope","$state","AuthenticationService","FlashService"];

	function loginController($scope,$state,AuthenticationService,FlashService){
		var vm = this;		
		console.log("loginController instantiated....");

		vm.login = login;

		(function initController(){
			// reset Login status
			AuthenticationService.ClearCredentials();
		})();

		function login(){
			vm.dataLoading = true;
			AuthenticationService.Login(vm.username,vm.password,function(response){
				if(response.success){
					AuthenticationService.SetCredentials(vm.username,vm.password);	
					$state.go("home");
				}else{
					FlashService.Error(response.message);
					vm.dataLoading = false;
				}
			}); // end of Login service
		} // end of login
	} // end of loginController
})();