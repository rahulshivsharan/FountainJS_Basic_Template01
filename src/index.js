(function(){
	'use strict';
	
	// This is the main application js file.	
	
	angular.module('app', [
		'ui.router', // pluggin modules
		'ngCookies',
		'headerModule',// user defined modules
		'loginModule',
		'registerModule',
		'homeModule',
		'smartSetup',
		'usersModule' 
	]);	

	angular.module('app').run(runFunc);

	runFunc.$inject = ['$rootScope', '$location', '$cookies', '$http'];

	function runFunc($rootScope, $location, $cookies, $http){
		// keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });
        
	} // end of runFunc
})();

