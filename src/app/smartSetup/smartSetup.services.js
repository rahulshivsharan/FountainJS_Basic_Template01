(function(){
	'use strict';

	angular.module("smartSetup").factory("setupService",setupService);

	setupService.$inject = ["$http","$q"];

	function setupService($http,$q){
		var obj = {};

		// public methods
		obj.getCountries = getCountries;

		return obj;

		// method below is used for fetching countries and languages
		// using an free to use REST endpoint 'https://restcountries.eu' as seen below
		function getCountries(countryName){
			var url = "https://restcountries.eu/rest/v2/name/" + countryName + "/";
			var success = success, 
				error = error;
			var deferred = $q.defer();	
			
			$http.get(url,{ 
				"headers" : { "Authorization" : undefined }
			}).then(success,error);

			return deferred.promise;

			function success(response){
				console.log(response);
				deferred.resolve(response);
			} // end of success

			function error(response){
				console.log(response);
				deferred.reject(response);
			} // end of error

		} // end of getCountries
	} // end of setupService
})();