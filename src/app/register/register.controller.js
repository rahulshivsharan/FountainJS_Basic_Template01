(function(){
	'use strict';
	angular.module("registerModule").controller("registerController",registerController);

	registerController.$inject = ["$scope","$state","UserService","FlashService"];

	function registerController($scope,$state,UserService,FlashService){
		var vm = this;

		// public variables
		vm.popupdate = {};
		vm.popupdate.open = false;

		// public methods
		vm.register = register;
		vm.openDate = openDate;

		function register(){
			vm.dataLoading = true;
			var responseFn = responseFn;
			UserService.Create(vm.user).then(responseFn);

			function responseFn(response){
				if(response.success){
					FlashService.Success("Registration successfull",true);
					$state.go("login");
				}else{
					FlashService.Success(response.message);
					vm.dataLoading = false;
				}
			} // end of responseFn
		} // end of register

		function openDate(){
			vm.popupdate.open = true;
		}
	} // end of registerController
})();