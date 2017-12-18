(function(){
	'use strict';
	angular.module("headerModule").controller("headerController",headerController);

	headerController.$inject = ["$scope","$rootScope"];

	function headerController($scope,$rootScope){
		var vm = this;
		vm.username = angular.isDefined($rootScope.globals.currentUser) ? $rootScope.globals.currentUser.username : undefined;
	};
})();