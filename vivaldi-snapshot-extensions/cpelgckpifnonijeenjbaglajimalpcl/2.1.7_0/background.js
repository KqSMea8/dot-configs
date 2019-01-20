var tab = chrome.extension.getURL("new-tab.html");
var blockedUrls;
var listItems;
var thisurl;
var pause;


//Get blocked urls from storage
chrome.storage.sync.get({blockedUrls:[],listItems:[],pause:{active:false, pauseMoment:"", dayOff:"", duration:0}}, function (data) {
  blockedUrls = data.blockedUrls;
  listItems = data.listItems;
  pause = data.pause;
  });

// RESET PAUSE
function resetPause(){
  var pauseObj = {active:false, pauseMoment:0, dayOff:"", duration:0}
  chrome.storage.sync.set({
    pause: pauseObj,

  }, function(){

  });
}



// UPDATE PAUSE FUNCTION
function updatePause(){
  //check if active : true
  if(pause.active === true){
    // Check if duration is more than 0;
    var now = moment();
    var pauseMoment = moment.unix(pause.pauseMoment);

    if(pause.duration > 0){

        // if duration is more than 0 get moment of pause + duration and find out if that time has passed
        pauseMoment.add(pause.duration, 'minutes');

        if(now.isAfter(pauseMoment)){
          resetPause();
        }

      // ELSE Check if day off is True
    } else if(pause.dayOff === "true") {
      // get beginng of next day from moment of pause, add 4 hours.
      pauseMoment.endOf("day").add(4,'hours');

      if(now.isAfter(pauseMoment)){

        resetPause();
      }
      // check if that time has elapsed, if true then reset pause


    }
  }
  // end of update pause
}


// Function that checks and blocks if url is a match
function checkBlock(details){

    updatePause();
    //if is paused
    if(pause.active === true){

        return {cancel:false}

    }else{

    //get url of onBeforeRequest
    thisurl = details.url;
      // Splits the url into parts
      var urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[/\w\.-]*)*/;

      // Checks to see if it is a url
      var domainPattern = thisurl.match(urlPattern);

      if (domainPattern == null){
        return {cancel:false}
    } else {

      //check if domain has a subdomain
      if(domainPattern[1].indexOf('.') > -1){

        //check if domain and subdomain into parts
        var getStrAfterDot = domainPattern[1].split(".");
        var extractDomain = getStrAfterDot[1];
        var extractDomain2 = getStrAfterDot[0];

      } else {
        var extractDomain = domainPattern[1];
        var extractDomain2 = '!';
      }



    }


    // Add the below code to if statement once exact match domain is made
    if ((blockedUrls.some(function(v) { return extractDomain === v; }) || blockedUrls.some(function(v) { return extractDomain2 === v; })) && listItems !== "") {

      /* Save Blocked URL for display on next page */
      //check if string has more that one
      if((thisurl.match(/\./g) || []).length == 1){
        var blockedurl = thisurl.split("/")[2];
      }else{
        var blockedurl = thisurl.split(".")[1] + "." + thisurl.split(".")[2].split("/")[0];
      }

      chrome.storage.sync.set( {'blockedurl': blockedurl}, function(){
      });

      return {redirectUrl : tab};

      // check if advanced urls are a match
        }else{

          // Remove protocol and final slash from url
          var specificURL = details.url.replace(/(^\w+:|^)\/\//, '').split("?")[0];

                for (var il = 0; il < blockedUrls.length; il++) {

                  if (specificURL.startsWith(blockedUrls[il]) && listItems !== "" ){

                    var blockedurl = specificURL.replace(/\/$/, "");
                    chrome.storage.sync.set( {'blockedurl': blockedurl}, function(){

                    });
                    return {redirectUrl : tab};
                  } else if(il === blockedUrls.length){

                    return {cancel:false}

                }
              }
            }


          }

        }

//Check if url is on blocked list before requesting url
chrome.webRequest.onBeforeRequest.addListener(
      checkBlock,{urls:["<all_urls>"], types: ["main_frame"]},["blocking"]
);

//Check if list items have been changed
chrome.storage.onChanged.addListener(function(changes, area) {
if (area == "sync" && "listItems" in changes) {
        listItems = changes.listItems.newValue;
}
});

//Check if blockedurls have been changed
chrome.storage.onChanged.addListener(function(changes, area) {
if (area == "sync" && "blockedUrls" in changes) {
        blockedUrls = changes.blockedUrls.newValue;
}
});

//Check if blockedurls have been changed
chrome.storage.onChanged.addListener(function(changes, area) {
if (area == "sync" && "pause" in changes) {
        pause = changes.pause.newValue;
}
});
