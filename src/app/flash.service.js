(function(){
	'use strict';

	angular.module("app").factory("FlashService",FlashService);

	FlashService.$inject = ["$rootScope","$state"];

	function FlashService($rootScope,$state){
		var service = {};

		service.Success = Success;
		service.Error = Error;

		var initService = initService;

		initService();

		return service;


		function Error(message, keepAfterLocationChange){
			$rootScope.flash = {
				message : message,
				type : 'error',
				keepAfterLocationChange : keepAfterLocationChange
			};
		} // end of Error

		function Success(message, keepAfterLocationChange){
			$rootScope.flash = {
				message : message,
				type : 'sucess',
				keepAfterLocationChange : keepAfterLocationChange
			};			
		} // end of Success

		function initService(){
			var clearFlashMessage = clearFlashMessage;
			$rootScope.$on("$stateChangeStart",function(event, toState, toParams, fromState, fromParams){								
				clearFlashMessage();
			});

			function clearFlashMessage(){				
				var flash = $rootScope.flash;
				if(flash){
					if(!flash.keepAfterLocationChange){
						delete $rootScope.flash;
					}else{
						// only keep for single location change
						flash.keepAfterLocationChange = false;
					}
				} // end of if
			} // end of clearFlashMessage
		} // end of initService
		
	} // end of FlashService
})();