(function(){
	'use strict';

	angular.module("app").directive("renderBreadcrumb",renderBreadcrumb);

	function renderBreadcrumb(){
		var obj = {};

		obj.restrict = "EA",
		obj.templateUrl = "app/breadcrumb/pages/breadcrumb.html";

		return obj;
	} // end of renderBreadcrumb
})();