/* global punycode, vAPI, uDom */
(function() {
    'use strict';

    var messager = vAPI.messaging.channel('newtab.js');

    function getTextWidth(text) {
        var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        var context = canvas.getContext("2d");
        context.font = "bold 3em arial";
        var metrics = context.measureText(text);
        return metrics.width;
    }
	
	var loadBgImage = function(){
		
		
		
		messager.send({ what: 'getNewTabImage' }, function(imgurl) {
            if(imgurl){ 
			
			 uDom('body').attr('style', 'background-position:top right;background-repeat: no-repeat; background-size: cover; background-attachment: fixed;');
			 $('body').css("background-image", "url(" + imgurl + ")")
			
				
			
			}else{
				
				setTimeout(loadBgImage,5000)
			}
        });
		
	}
	
	var fadeOut =function (el){
		  el.style.opacity = 1;

		  (function fade() {
			if ((el.style.opacity -= .1) < 0) {
			  el.style.display = "none";
			} else {
			  requestAnimationFrame(fade);
			}
		  })();
	}

// fade in


				
				
var fadeIn =function(el, display){
	
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

	var loadBgText = function(){
		
		 messager.send({ what: 'getNewTabQuote' }, function(data) {
            if(data) {
                uDom('.quote').html('"' + data.quote + '"');
                uDom('.author').html('- ' + data.author);
            }else{
				
				setTimeout(loadBgText,5000)
			}
			
        });
		
		
		
	}

    uDom.onLoad(function () {
        //if there's no tab id specified in the query string, it will default to current tab.
        var tabId = null;
        
		loadBgImage();
		loadBgText();
       
        messager.send({ what: 'getInitData' }, function(stats) {
            if(stats) uDom('.settinglink').attr('data-href', stats.settingsUrl);
        });
        uDom('.clickable').on('click',function(evt){
            if(this.hasAttribute("data-href") && this.getAttribute("data-href") !== "" ) {
                evt.preventDefault();
                window.location = this.getAttribute("data-href");
            }
        });
    });

})();