(function(){
	'use strict';
	angular.module("registerModule").controller("registerController",registerController);

	registerController.$inject = ["$scope","$state","UserService","FlashService"];

	function registerController($scope,$state,UserService,FlashService){
		var vm = this;

		vm.register = register;

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
	} // end of registerController
})();