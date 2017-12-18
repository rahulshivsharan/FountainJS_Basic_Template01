(function(){
	'use strict';
	angular.module("app").directive("flashMessage",flashMessage);

	function flashMessage(){

		var obj = {};
		obj.restrict = "EA",
		obj.templateUrl = "/app/pages/flashMessage.html";

		return obj;
	}
})();