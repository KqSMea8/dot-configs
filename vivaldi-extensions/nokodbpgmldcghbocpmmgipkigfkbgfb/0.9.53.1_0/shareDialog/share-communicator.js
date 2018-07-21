/*******************************************************************************

    µBlock - a browser extension to block requests.
    Copyright (C) 2014 Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/chrisaljoudi/uBlock
*/

/* jshint multistr: true */
/* global vAPI, HTMLDocument */

/******************************************************************************/

// Injected into content pages

/******************************************************************************/

(function() {

'use strict';

/******************************************************************************/

// https://github.com/chrisaljoudi/uBlock/issues/464
if ( document instanceof HTMLDocument === false ) {
    //console.debug('contentscript-start.js > not a HTLMDocument');
    return false;
}

// Because in case
if ( !vAPI ) {
    //console.debug('contentscript-start.js > vAPI not found');
    return;
}

// https://github.com/chrisaljoudi/uBlock/issues/456
// Already injected?
if ( vAPI.contentscriptStartInjected ) {
    //console.debug('contentscript-start.js > content script already injected');
    return;
}
vAPI.contentscriptStartInjected = true;
vAPI.styles = vAPI.styles || [];

/******************************************************************************/

var localMessager = vAPI.messaging.channel('contentscript-start.js');

/******************************************************************************/

var url = window.location.href;
localMessager.send(
    {
        what: 'test',
       
    },
    function(resp){
		
		console.log("received res",resp)
	}
);

/******************************************************************************/
/******************************************************************************/

})();

/******************************************************************************/
