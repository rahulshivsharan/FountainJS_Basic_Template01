(function(){
	'use strict';

	angular.module("smartSetup").controller("smartSetupController",smartSetupController);

	smartSetupController.$inject = ["$scope"];

	function smartSetupController($scope){
		var vm = this;

		// public variables
		vm.applicationName = "";
		vm.templateSelection = "template";

		// public methods
		vm.createApplication = createApplication;

		function createApplication(){
			console.log("applicationName ",vm.applicationName);
			console.log("Template-Selection ",vm.templateSelection)
		} // createApplication
	} // end of smartSetupController
})();