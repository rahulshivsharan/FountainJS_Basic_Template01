(function(){
	'use strict';

	angular.module("usersModule").controller("userController",userController);

	userController.$inject = ["$scope","UserService"];

	function userController($scope, UserService){
		var vm = this;

		// public variables
		vm.userList = [];

		// public methods
		vm.init = init;

		// private methods
		var getAllUsers = getAllUsers; 


		function init(){
			vm.userList = [];
			
			getAllUsers();
		}

		function getAllUsers(){
			UserService.GetAll().then(function(users){
				console.log("List ",users);
				vm.userList = users;
			},function(error){
				console.log("Error ",error);
			});
		}
	} // userController
})();