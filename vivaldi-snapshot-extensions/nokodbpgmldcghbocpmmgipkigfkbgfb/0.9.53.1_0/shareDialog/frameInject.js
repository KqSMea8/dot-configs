(function() {

'use strict';


if(window == window.top) {
	return;
}
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

console.log("frame injected")
/******************************************************************************/

var localMessager = vAPI.messaging.channel('shareDialog.js');

/******************************************************************************/

var url = window.location.href;
localMessager.send(
    {
        what: 'testapp'
    },
    function(evt){
		console.log(evt)
	}
);

/******************************************************************************/
/******************************************************************************/

})();
