(function(){
	'use strict';
	
	// This is the main application js file.	
	
	angular.module('app', [
		'ui.router', // pluggin modules
		'ui.router.state.events',
		'ngCookies',
		'headerModule',// user defined modules
		'loginModule',
		'registerModule',
		'homeModule',
		'smartSetup',
		'usersModule' 
	]);	

	angular.module('app').run(runFunc);

	runFunc.$inject = ['$rootScope', '$state', '$stateParams', '$cookies', '$http'];

	function runFunc($rootScope, $state, $stateParams, $cookies, $http){
		// keep user logged in after page refresh
        $rootScope.globals = $cookies.getObject('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on('$stateChangeStart', function (event, next, current) {
        	//console.log("State is changes ");
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($state.$current, ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });
        
	} // end of runFunc
})();

