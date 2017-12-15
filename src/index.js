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
		'smartSetup' 
	]);	
})();

