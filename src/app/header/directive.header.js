(function(){
	'use strict';

	angular.module('headerModule').directive("renderHeader",renderHeader);

	function renderHeader(){
		return {
			"restrict" : "EA",			
			"controller" : "headerController",			
			"controllerAs" : "vm",
			"scope" : {
				"info" : "="
			},
			"templateUrl" : "/app/header/pages/header.html"
		}; // end of return 
	}; // end of renderHeader
})();