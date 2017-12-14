(function(){
	'use strict';
	angular.module("homeModule").controller("homeController",homeController);

	homeController.$inject = ["$scope"];

	function homeController($scope){
		var vm = this;
		vm.message = "RTM Pro";
	} // end of homeController
})();