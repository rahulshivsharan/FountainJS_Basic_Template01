(function(){
	'use strict';

	angular.module('headerModule').directive("renderHeader",renderHeader);

	function renderHeader(){
		return {
			"restrict" : "EA",
			"templateUrl" : "/app/header/pages/header.html"
		}; // end of return 
	}; // end of renderHeader
})();