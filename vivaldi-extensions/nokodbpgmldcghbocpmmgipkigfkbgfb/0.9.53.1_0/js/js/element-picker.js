'use strict';(function(c){c.CSS||(c.CSS={});c=c.CSS;var q=function(c){this.message=c};q.prototype=Error();q.prototype.name="InvalidCharacterError";c.escape||(c.escape=function(c){c=String(c);for(var t=c.length,h=-1,b,g="",n=c.charCodeAt(0);++h<t;){b=c.charCodeAt(h);if(0===b)throw new q("Invalid character: the input contains U+0000.");g=1<=b&&31>=b||127==b||0===h&&48<=b&&57>=b||1==h&&48<=b&&57>=b&&45==n?g+("\\"+b.toString(16)+" "):128<=b||45==b||95==b||48<=b&&57>=b||65<=b&&90>=b||97<=b&&122>=b?g+c.charAt(h):
g+("\\"+c.charAt(h))}return g})})(self);
(function(){if(window.top===window){var c=document.getElementById(vAPI.sessionId);if(c)c.onload();var q=vAPI.messaging.channel("element-picker.js"),C=null,t=null,h=null,b=null,g=null,n=[],p=[],u=[],F=window.location.host+window.location.pathname,r="",v="",G=":scope > ";try{document.querySelector(":scope *")}catch(a){G=""}var x=function(a,f){if(f||a.length!==u.length||0!==a.length&&a[0]!==u[0]){u=a;for(var d=c.contentWindow.innerWidth,m=c.contentWindow.innerHeight,k=["M0 0","h",d,"v",m,"h-",d,"z"],
H=[],e,b=0;b<a.length;b++)e=a[b],e!==c&&"function"===typeof e.getBoundingClientRect&&(e=e.getBoundingClientRect(),e.left>d||e.top>m||0>e.left+e.width||0>e.top+e.height||(e="M"+e.left+" "+e.top+"h"+e.width+"v"+e.height+"h-"+e.width+"z",k.push(e),H.push(e)));C.setAttribute("d",k.join(""));t.setAttribute("d",H.join("")||"M0 0")}},R=function(){var a=/[^0-9a-z%*]+|[0-9a-z%]+|\*/gi,f=document.createElement("a");return function(d,m){f.href=d;d=f.pathname+f.search;var k=v;if(""===k||""===f.host||f.host!==
r)r=f.host,v=d;else{r=f.host;for(var k=k.match(a),c=d.match(a),e=c.length,b=0,l,g=0;g<k.length;g+=1)if(l=k[g],"*"!==l)if(l=c.indexOf(l,b),-1===l)k[g]="*";else if(l!==b&&(k.splice(g,0,"*"),g+=1),b=l+1,b===e){k=k.slice(0,g+1);break}k=k.join("").replace(/\*\*+/g,"*");"/*"!==k&&k!==d?m.push("||"+r+k):k=d;v=k}q.send({what:"elementPickerEprom",lastNetFilterSession:F,lastNetFilterHostname:r,lastNetFilterUnion:v})}}(),I=function(a,f){var d=a.indexOf("#");-1!==d&&(a=a.slice(0,d));var m=a.replace(/^https?:\/\//,
"||");f.push(m);d=m.indexOf("?");-1!==d&&f.push(m.slice(0,d));R(a,f)},y={},D=function(a){n.length=0;for(p.length=0;a&&a!==document.body;){var f=a,d=n;if(null!==f&&1===f.nodeType){var m=f.tagName.toLowerCase();!1!==y.hasOwnProperty(m)&&(f=f[y[m]],0!==f.length&&I(f,d))}d=a;f=p;if(null!==d&&1===d.nodeType){var m=d.tagName.toLowerCase(),c="",b=[],e=void 0,g=void 0;(e="string"===typeof d.id&&CSS.escape(d.id))&&b.push("#",e);if(0===b.length&&(e=d.classList))for(g=e.length||0;g--;)b.push("."+CSS.escape(e.item(g)));
0===b.length&&(c=m);var g=[],l=void 0;switch(m){case "a":if(e=d.getAttribute("href"))e=e.replace(/\?.*$/,""),e.length&&g.push({k:"href",v:e});break;case "img":(e=d.getAttribute("alt"))&&0!==e.length&&g.push({k:"alt",v:e})}for(;l=g.pop();)0!==l.v.length&&(e=d.getAttribute(l.k),l.v===e?b.push("[",l.k,'="',l.v,'"]'):0===e.indexOf(l.v)?b.push("[",l.k,'^="',l.v,'"]'):b.push("[",l.k,'*="',l.v,'"]'));var c=c+b.join(""),h;b:{b=d.parentNode;if(null!==b)try{h=b.querySelectorAll(G+c);break b}catch(q){}h=[]}if(1<
h.length){for(g=1;null!==d.previousSibling;)d=d.previousSibling,"string"===typeof d.tagName&&d.tagName.toLowerCase()===m&&g++;c+=":nth-of-type("+g+")"}f.push("##"+c)}a=a.parentNode}a=p.length;0!==a&&-1!==p[a-1].indexOf(":nth-of-type(")&&p.push("##body")},J=function(a){var f=[];a=a.trim();if(""===a)return f;if(0===a.lastIndexOf("##",0)){try{f=document.querySelectorAll(a.slice(2))}catch(e){}return f}var d="";if(1<a.length&&"/"===a.charAt(0)&&"/"===a.slice(-1))d=a.slice(1,-1);else{var b=d="";"||"===
a.slice(0,2)?a=a.replace("||",""):"|"===a.charAt(0)&&(d="^",a=a.slice(1));"|"===a.slice(-1)&&(b="$",a=a.slice(0,-1));d=d+a.replace(/[.+?${}()|[\]\\]/g,"\\$&").replace(/[\*^]+/g,".*")+b}a=null;try{a=new RegExp(d)}catch(e){return f}for(var d=document.querySelectorAll(Object.keys(y).join()),b=d.length,c,g;b--;)c=d[b],(g=c[y[c.tagName.toLowerCase()]])&&a.test(g)&&f.push(c);return f},z=function(){var a=J(g.value);b.querySelector("#create").disabled=0===a.length;x(a)},K=function(a){var f=a.slot,d=a.filters,
b=d[f];if(void 0===b)return"";if("net"===a.type||a.modifier)return b;for(a=[];f<d.length&&(b=d[f],a.unshift(b.replace(/^##/,"")),"###"!==b.slice(0,3));f++);return"##"+a.join(" > ")},M=function(a){if(null!==a.target)if("create"===a.target.id){var b;b=g.value;if(b=0===J(b).length?!1:0===b.lastIndexOf("##",0)?window.location.hostname+b:0===b.lastIndexOf("||",0)?b:b+"$domain="+window.location.hostname){var d=new Date,c=g.value,c=0==c.indexOf("##")?c.substr(2):c,k=document.querySelector(c),h={messageType:"response",
response:"lastrightclickadidentified",what:"intently"},e=window.location.href;h.pageURL=e;h.locationURL=e;e=!1;if(null!=k){for(var w=0;w<k.attributes.length;w++)if("intentlyreplacementid"==k.attributes[w].name.toLowerCase()||"intentlyreplacementparentid"==k.attributes[w].name.toLowerCase())e=!0;e?(h.messageType="usernotification",h.title="Ad Not Reported",h.message="That image is part of Intently!"):(e={},e.domain=window.location.hostname.replace("www.",""),e.url=window.location.href,e.outerHTML=
k.outerHTML,e.proposedSelector=c,e.proposedSelectorOuterHTML=k.outerHTML,e.proposedSelectorParentLevel=c.split(" ").length-1,h.lastRightClickAd=e)}else h.messageType="contentscripterror",h.error="ReportAdNotIdentified",h.details="Last right click target is null. Page URL: "+window.location.href;q.send({what:"createUserFilter",filters:"! "+d.toLocaleString()+" "+window.location.href+"\n"+b,intentlyResponse:h});A()}}else if("pick"===a.target.id)L();else if("quit"===a.target.id)A();else if(a.target.parentNode.classList.contains("changeFilter")){b=
g;d=a.target;c="##"!==d.textContent.slice(0,2);for(c={type:c?"net":"cosmetic",filters:c?n:p,slot:0,modifier:a.ctrlKey||a.metaKey};null!==d.previousSibling;)d=d.previousSibling,c.slot+=1;b.value=K(c);z()}a.stopPropagation();a.preventDefault()},N=function(a){b.parentNode.classList.add("paused");B(!1);a=a||{};var c=function(a,c){for(var f=b.querySelector(c),g=f.querySelector("ul");g.firstChild;)g.removeChild(g.firstChild);for(var e,h=0;h<a.length;h++)e=document.createElement("li"),e.textContent=a[h],
g.appendChild(e);f.style.display=0!==a.length?"":"none"};c(n,"#netFilters");c(p,"#cosmeticFilters");b.querySelector("ul").style.display=n.length||p.length?"":"none";b.querySelector("#create").disabled=!0;a={type:"",filters:[],slot:0,modifier:a.modifier||!1};n.length?(a.type="net",a.filters=n):p.length&&(a.type="cosmetic",a.filters=p);g.value="";""!==a.type&&(g.value=K(a),z())},E=function(a,b){c.style.pointerEvents="none";var d=document.elementFromPoint(a,b);if(d===document.body||d===document.documentElement)d=
null;c.style.pointerEvents="";return d},S=function(a){a=E(a.clientX,a.clientY);x(a?[a]:[])},O=function(a){b.parentNode.classList.contains("paused")?L():(a=E(a.clientX,a.clientY),null!==a&&(D(a),N()))},B=function(a){h[(a?"add":"remove")+"EventListener"]("mousemove",S)},P=function(a){27===a.which&&(a.stopPropagation(),a.preventDefault(),A())},Q=function(){x(u,!0)},L=function(){b.parentNode.classList.remove("paused");B(!0)},A=function(){u=[];null!==c&&(window.removeEventListener("scroll",Q,!0),c.contentWindow.removeEventListener("keydown",
P,!0),g.removeEventListener("input",z),b.removeEventListener("click",M),B(!1),h.removeEventListener("click",O),c.parentNode.removeChild(c),c=b=h=C=t=g=c.onload=null,q.close(),window.focus())},T=function(a){c.onload=A;var f=c.contentDocument,d=(new DOMParser).parseFromString(a.frameContent,"text/html");f.replaceChild(f.adoptNode(d.documentElement),f.documentElement);f.body.setAttribute("lang",navigator.language);b=f.body.querySelector("aside");b.addEventListener("click",M);g=b.querySelector("textarea");
g.addEventListener("input",z);h=f.body.querySelector("svg");C=h.firstChild;t=h.lastChild;h.addEventListener("click",O);B(!0);window.addEventListener("scroll",Q,!0);c.contentWindow.addEventListener("keydown",P,!0);c.contentWindow.focus();f=a.eprom||{};f.lastNetFilterSession===F&&(r=f.lastNetFilterHostname||"",v=f.lastNetFilterUnion||"");x([],!0);a.target?"element"===a.target.type?D(document.querySelector(a.target.value)):"url"===a.target.type?(a=a.target.value,n.length=0,p.length=0,I(a,n)):console.error("uBlock> unknown element picker target details type: %s",
a.target.type):-1!==a.clientX&&D(E(a.clientX,a.clientY));(0<n.length||0<p.length)&&N()},c=document.createElement("iframe");c.id=vAPI.sessionId;c.style.cssText="display: block;visibility: visible;opacity: 1;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: transparent;margin: 0;padding: 0;border: 0;border-radius: 0;box-shadow: none;outline: 0;z-index: 2147483647;".split(";").join("!important; ");c.onload=function(){q.send({what:"elementPickerArguments"},T)};document.documentElement.appendChild(c)}})();
