//<script>
// Copyright 2012-2018 : https://www.fbpurity.com
// No unauthorised copying or distribution allowed

//if(typeof(localStorage.fbpoptsjson)=='undefined')
//  localStorage.fbpoptsjson='initial value';
  
/*  
//CONTENT SCRIPT CODE
  chrome.extension.sendRequest({method: "getLocalStorage", key: "fbpoptsjson"}, function(response) {
  console.log(response.data);
});
  chrome.extension.sendRequest({method: "setLocalStorage", key: "fbpoptsjson", value: ""}, function(response) {
  console.log(response.data);
});
*/

// Edge & WebExtensions Suppport
if (typeof msBrowser !== 'undefined') {
  chrome = msBrowser;
}
else if (typeof browser != 'undefined')
{
  chrome = browser;
}

if (!chrome.runtime) {
  // Chrome 20-21
  chrome.runtime = chrome.extension;
} else if(!chrome.runtime.onMessage) {
  // Chrome 22-25
  chrome.runtime.onMessage = chrome.extension.onMessage;
  chrome.runtime.sendMessage = chrome.extension.sendMessage;
  //chrome.runtime.onConnect = chrome.extension.onConnect;
  //chrome.runtime.connect = chrome.extension.connect;
}

// BACKGROUND SCRIPT CODE
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getLocalStorage")
    sendResponse({data: localStorage[request.key]}); // decodeURIComponent
  else if (request.method == "setLocalStorage")
	sendResponse({data: localStorage[request.key]=request.value});
  else if (request.method=="dumpLocalStorage")
	sendResponse({data: localStorage});
  else if (request.method=="clearLocalStorage")
	sendResponse({data: "localStorage was cleared. All that is left is: " + localStorage.clear()});
  else if (request.method=="debug2gist")
	debug2gist(request.value);
  //else
  //  sendResponse({}); // send empty response
});


/*
// BEGIN Create Content Menu when text is selected
// A generic onclick callback function.
function genericOnClick(info, tab) {
  console.log("item " + info.menuItemId + " was clicked");
  console.log("info: " + JSON.stringify(info));
  console.log("tab: " + JSON.stringify(tab));
}

// Create one test item for each context type.

var contexts = ["page","selection","link","editable","image","video",
                "audio"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context]});
  console.log("'" + context + "' item:" + id);
}


function sendSearch (stext){
	//alert(stext);
	console.log(stext);
}
chrome.contextMenus.create({
	id: "FBPSselectTextContentMenu",
    title: "Test %s menu item", 
    contexts:["selection"]
});
chrome.contextMenus.onClicked.addListener(
 genericOnClick
);

function genericClickHandler(info,tab){
 //handle context menu actions
 //sendSearch(info.selectionText);
 console.log('bingo');
}
// END Create Content Menu when text is selected
*/

//  need to add this back to manifest permissions  , "https://api.github.com/"  when ready to launch
function debug2gist(html){
var http = new XMLHttpRequest();
http.onreadystatechange = function() {
    if (http.readyState == 4){
      if(http.status == 201) {
        //document.getElementById("results").innerHTML = http.responseText;
        console.log(http.responseText);
		window.alert('Page Debug Code Created Succesfully');
		var rsp=JSON.parse(http.responseText)
		window.open("http://bl.ocks.org/anonymous/raw/" + rsp.url.split(/gists\//)[1]);
		rsp=http=null;
      }
	  else {
		//document.getElementById("results").innerHTML = "http status=" + http.status + ' ' +  http.responseText;
		window.alert('Page Debug Code Creation Failed: Error Code:' +http.status + ' ' + http.responseText);
        console.log(http.status, http.responseText);
		http=null;
      }
	}
  }; 
var data={};
var files={};
var content={};
content['content']=html;
files['index.html']=content;
data['description']="Created via API";
data['public']="false"
data['files']=files;
var dataJSON=JSON.stringify(data);
//console.log(data);
http.open("POST", "https://api.github.com/gists", true);
http.setRequestHeader("Content-type", "application/json");
http.send(dataJSON);
files=data=content=dataJSON=html=null;
}
//</script>