(function(){
	'use strict';

	angular.module("smartSetup").controller("smartSetupController",smartSetupController);

	smartSetupController.$inject = ["$scope","setupService"];

	function smartSetupController($scope,setupService){
		var vm = this;

		// public variables
		vm.applicationName = "";
		vm.templateSelection = "template";
		vm.selectedCountry = "";
		vm.languageChoosen = "";
		vm.selectedLanguage = ["English"];

		// public methods
		vm.createApplication = createApplication;
		vm.init = init;

		function init(){
			setupService.getCountries("United States");
		}// end of init

		function createApplication(){
			console.log("applicationName ",vm.applicationName);
			console.log("Template-Selection ",vm.templateSelection);			
		} // createApplication
	} // end of smartSetupController
})();