(function(){
	'use strict';

	angular.module("app").factory("UserService",UserService);

	UserService.$inject = ['$timeout', '$filter', '$q'];

	function UserService($timeout, $filter, $q){
		var service = {};

		// public functions
		service.Create = Create;
		service.GetByUsername = GetByUsername;
		service.GetById = GetById;
		service.GetAll = GetAll;
		service.Update = Update;
        service.Delete = Delete;

		// private functions
		var getUsers = getUsers;
		var setUsers = setUsers;

		return service;

		function Update(user){
			var deferred = $q.defer();
			var users = getUsers();
			for(var x = 0; x < users.length; x++){
				if(users[x].id === user.id){
					users[x] = user;
					break;
				}
			}// end of for

			setUsers(users);
			deferred.resolve();
			return deferred.promise;
		} // end of Update

		function Delete(id){
			var deferred = $q.defer();
			var users = getUsers();
			for(var x = 0; x < users.length; x++){
				if(users[x].id === id){
					users.splice(x,1);
					break;
				}
			}// end of for

			setUsers(users);
			deferred.resolve();
			return deferred.promise;

		} // end of Delete	 

		function GetAll() {
			var deferred = $q.defer();
			deferred.resolve(getUsers());

			return deferred.promise;
		} // end of GetAll

		function GetById(id){
			var deferred = $q.defer();
			var filtered = $filter("filter")(getUsers(),{
				id : id
			});
			var users = filtered.length ? filtered[0] : null;
			deferred.resolve(users);
			return deferred.promise;
		} // end of GetById

		function Create(user){
			var deferred = $q.defer();

			// simulate api Call with $timeout
			$timeout(function() {
				GetByUsername(user.username)
					.then(function(duplicateUser){
						if(duplicateUser !== null){
							deferred.resolve({ 
								success: false, 
								message: 'Username "' + user.username + '" is already taken' 
							});
						}else{
							var users = getUsers();

							var lastUser = users[users.length - 1] || { "id" : 0 };

							user.id = lastUser.id + 1;

							users.push(user);

							setUsers(users);

							deferred.resolve({
								success : true
							});
						}
					});
			}, 1000);

			return deferred.promise;
		} // end of Create

		function GetByUsername(username){
			var deferred = $q.defer();
			var filtered = $filter('filter')(getUsers(),{
				'username' : username
			});			
			var user = filtered.length ? filtered[0] : null;
			deferred.resolve(user);

			return deferred.promise;
		} // end of GetByUsername

		function getUsers(){
			if(!localStorage.users){
				localStorage.users = JSON.stringify([]);
			}

			return JSON.parse(localStorage.users);
		} // end of getUsers

		function setUsers(users){
			localStorage.users = JSON.stringify(users);
		} // end of Users

	} // end of UserService
})();