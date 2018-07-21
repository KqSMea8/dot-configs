/* global punycode, vAPI, uDom */
(function() {
	'use strict';
	var messager = vAPI.messaging.channel('newtab.js');
	var NewTabConfig = {};

	var monitorLogIn = function() {
		messager.send({ what: 'getLoginStatus' }, function(stats) {
			if(stats.loggedIn == true && stats.inprogress == false) {
				window.location = "newtab.html";
			} 
			else {
				//check every five seconds for login
				window.setTimeout(function() { monitorLogIn() }, 5000);
			}
		})
	};

	var initLogout = function() {
		uDom('#login').attr("href", NewTabConfig.stats.loginUrl);
		uDom('.logoutcontainer').css('display', '');
		monitorLogIn();
	};

	var initOffline = function() {
		uDom('.offlinecontainer').css('display', '');
	};

	uDom.onLoad(function() {
		//if there's no tab id specified in the query string, it will default to current tab.
		var tabId = null;
		messager.send({ what: 'getInitData' }, function(stats) {
			NewTabConfig.stats = stats;
			if(!stats) {
				return;
			}
			if(!navigator.onLine) {
				initOffline();
			}
			else if(stats.loggedIn == false) {
				initLogout();
			} 
			else {
				//Invalid page 
				monitorLogIn();
			}
		});
	});

})();
