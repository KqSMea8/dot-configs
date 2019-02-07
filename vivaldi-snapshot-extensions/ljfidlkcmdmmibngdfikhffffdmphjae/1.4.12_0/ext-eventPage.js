var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-73397006-2']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request && request.match(/^Page out-of-sync/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{deleted\:\d+\}$/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{hidden\:\d+\}$/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{unhidden\:\d+\}$/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{unliked\:\d+\}$/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{set\w+\:\d+\}$/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{.*\bprescanned:true\b/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{running\:/ig)) {
      //ignore
    }
    else if (request && request.match(/^\{event\:/ig)){
      var m = request.match(/^\{event\:([^,]+),action\:([^\}]+)\}$/i);
      if (m && m.length >= 3) {
        var eventCategory = m[1];
        var eventAction = m[2];
        _gaq.push(['_trackEvent', eventCategory, eventAction]);
      }
    }
    else if (request && request.indexOf("Success!") == 0){
      var m = request.match(/^Success\!\s+(\w+)\s+(\d+)\s+posts.$/i);
      if (m && m.length >= 3) {
        var detail = m[1];
        var value = m[2];
        _gaq.push(['_trackEvent', 'operation', 'success']);
      }
      else {
        _gaq.push(['_trackEvent', 'operation', 'success']);
      }
    }
    else if (request && request.indexOf("Activity log scanned.") == 0){
      _gaq.push(['_trackEvent', 'prescan', 'success']);
    }
  }
);
