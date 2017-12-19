(function(){
	'use strict';

	angular.module("smartSetup").controller("smartSetupController",smartSetupController);

	smartSetupController.$inject = ["$scope"];

	function smartSetupController($scope){
		var vm = this;

		// public variables
		vm.applicationName = "";
		vm.isTemplateSelected = false;

		// public methods
		vm.createApplication = createApplication;

		function createApplication(){
			console.log("applicationName ",vm.applicationName);
		} // createApplication
	} // end of smartSetupController
})();