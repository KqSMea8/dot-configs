/* global punycode, vAPI, uDom */
(function() {
	'use strict';
	var messager = vAPI.messaging.channel('newtab.js');
	var NewTabConfig = {};
	var curbgimg = null;
	var quoteLoaded = false;
	var bgimgurl = "";
	var imgLoaded = false;

	var getTextWidth = function(text) {
		var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
		var context = canvas.getContext("2d");
		context.font = "bold 3em arial";
		var metrics = context.measureText(text);
		return metrics.width;
	};

	var logNewTabData = function() {
		var logdata = {}
		//Image and quote should be loaded
		if(NewTabConfig.imagecheck == true) {
			logdata.timestamp = NewTabConfig.date;
			if(NewTabConfig.imageconfig) {
				logdata.channelResourceID = NewTabConfig.imageconfig.id;
			} 
			else {
				return;
			}
			if(NewTabConfig.quote) {
				logdata.quoteID = NewTabConfig.quote.id;
			} 
			else {
				return;
			}
		}
		if(NewTabConfig.adcheck == true) {
			if(NewTabConfig.ad) {
				logdata.newTabAdID = NewTabConfig.ad.id;
			} 
			else {
				return;
			}
		}
		messager.send({ what: 'logNewTabData', "logdata": logdata }, function(response) {});
	};

	var loadBgImage = function() {
		messager.send({ what: 'getNewTabImage' }, function(response) {
			if(response && response.imgurl) {
				var imgurl = response.imgurl;
				NewTabConfig.imageconfig = response.imageconfig;
				logNewTabData();
				uDom('.backgroundimage').attr('style', 'background-position:top right;background-repeat: no-repeat; background-size: cover; background-attachment: fixed;');
				uDom('.backgroundimage').css("background-image", "url(" + imgurl + ")");
				bgimgurl = imgurl;
				imgLoaded = true;
			} 
			else {
				setTimeout(loadBgImage, 5000);
			}
		});
	};

	var fadeOut = function(el) {
		el.style.opacity = 1;
		(function fade() {
			if((el.style.opacity -= .1) < 0) {
				el.style.display = "none";
			} 
			else {
				requestAnimationFrame(fade);
			}
		})();
	};

	//NOTE: this is disabled for now...
	var ShowHideAdOptinContainer = function(flgshow) {
/*
		if(flgshow) {
			uDom('.adoptincontainer').css("display", "");
		} 
		else {
			uDom('.adoptincontainer').css("display", "none");
		}
*/
	};

	var ShowHidetabOptinContainer = function(flgshow) {
		if(flgshow) {
			uDom('.taboptincontainer').css("display", "");
		} 
		else {
			uDom('.taboptincontainer').css("display", "none");
		}
	};

	var ShowHideAdContainer = function(flgshow) {
		if(flgshow) {
			uDom('.addisplaycontainer').css("display", "");
		} 
		else {
			uDom('.addisplaycontainer').css("display", "none");
		}
	};

	var showChangestatus = function(data) {
		if(data.status != 0) {
			console.log("Unable to update status");
		}
	};

	var changeTopSiteDisplayStatus = function(flgshow) {
		messager.send({ what: 'setTopSites', display: flgshow }, function(data) {
			showChangestatus(data);
		});
	};

	var changeAdOptinStatus = function(flgOptIn) {
		messager.send({ what: 'setAdOptin', optin: flgOptIn }, function(data) {
			showChangestatus(data);
		});
	};

	var changeNewTabOptinStatus = function(flgOptIn) {
		messager.send({ what: 'setNewTabOptin', optin: flgOptIn }, function(data) {
			showChangestatus(data);
		});
	};

	var changeQuoteLikeStatus = function(flglike) {
		messager.send({ what: 'setQuoteLike', quotelike: flglike, quoteid: NewTabConfig.quote.id }, function(data) {
			showChangestatus(data);
		});
	};

	var getNewTabAd = function() {
		messager.send({ what: 'getNewTabAd' }, function(response) {
			if(response && response.success) {
				var data = response.data[0];
				NewTabConfig.ad = response.data[0];
				logNewTabData();
				//ensure ad was retrieved
				if(data.id) {
					uDom('.adcontent').html(data.adHTML);
					uDom('.adurl').html(data.destination);
					uDom('.adbox').attr('data-href', NewTabConfig.stats.apiUrl + "newtab/adclick/" + NewTabConfig.ad.id);
					uDom('.addisplaycontainer').css("display", "");
				}
			}
		});
	};

	var fadeIn = function(el, display) {
		el.style.opacity = 0;
		el.style.display = display || "block";
		(function fade() {
			var val = parseFloat(el.style.opacity);
			if(!((val += .1) > 1)) {
				el.style.opacity = val;
				requestAnimationFrame(fade);
			}
		})();
	};

	var loadBgText = function() {
		messager.send({ what: 'getNewTabQuote' }, function(data) {
			if(data) {
				if(data.quote) {
					var quote = data.quote;
					NewTabConfig.quote = data;
					logNewTabData();
					var textsize = "80px";
					if(quote.length >= 80) {
						textsize = "60px";
					}
					if(quote.length >= 120) {
						textsize = "50px";
					}
					uDom('.quote').css("font-size", textsize);
				}
				uDom('.quote').html('"' + data.quote + '"');
				uDom('.author').html('- ' + data.author);
				uDom('.quote-social').css('display', '');
				quoteLoaded = true;
			} 
			else {
				setTimeout(loadBgText, 5000);
			}
		});
	};

	var loadfreqsites = function() {
		messager.send({ what: 'getTopSites' }, function(sites) {
			if(sites) {
				var html = "";
				sites.forEach(function(site) {
					//thumbnail
					var trimtitle = site.title || site.url;
					if(trimtitle.length > 25) trimtitle = trimtitle.substring(0, 22) + "...";
					html = html + '<br/><br/><div style="background-color:#ffffff;" class="sitecontentcontainer clickable  " data-href="' + site.url + '" alt="' + site.title + '"><div class="sitetitle"><span class="sitefavicon">		<img class="imgfavicon" src="https://s2.googleusercontent.com/s2/favicons?domain_url=' + encodeURIComponent(site.url) + '" title=""  />		</span> <span class="sitetitlecontent">' + trimtitle + '</span></div><div class="siteurl"><img class="imgsitethumbnail" src="' + site.imgURL + '" title="' + site.title + '"   />	</div></div>';
				})
				if(html == "") {
					uDom(".divleft").css("visibility", "hidden");
				} 
				else {
					uDom(".sidesites").html(html);
					uDom('.imgfavicon').on('error', function(evt) {
						this.src = 'images/default-favicon.png';
					});
					uDom('.imgsitethumbnail').on('error', function(evt) {
						//this.src='images/blank.png';
						this.parentNode.className += " failed-img";
						this.parentNode.removeChild(this);
					});
					updateclickable();
				}
			}
		});
	};

	var updateclickable = function() {
		$(".clickable").off("click");
		uDom('.clickable').on('click', function(evt) {
			if(this.hasAttribute("data-href") && this.getAttribute("data-href") !== "") {
				evt.preventDefault();
				window.location = this.getAttribute("data-href");
			}
			if(this.hasAttribute("data-click") && this.getAttribute("data-click") !== "") {
				evt.preventDefault();
				var operation = this.getAttribute("data-click")
				if(operation == "sidemenu-show") {
					loadsidemenu();
				} 
				else if(operation == "sidemenu-close") {
					closesidemenu();
				}
			}
		});
	};

	var loadsidemenu = function() {
		changeTopSiteDisplayStatus(true);
		document.getElementById("mySidenav").style.width = "250px";
		document.getElementById("main").style.paddingLeft = "250px";
		document.getElementById("addisplaycontainer").style.left = "125px";
		document.getElementById("adoptincontainer").style.left = "125px";
		document.getElementById("linksButton").style.display = "none";
	};

	var closesidemenu = function() {
		changeTopSiteDisplayStatus(false);
		document.getElementById("mySidenav").style.width = "0px";
		document.getElementById("main").style.paddingLeft = "0px";
		document.getElementById("addisplaycontainer").style.left = "0px";
		document.getElementById("adoptincontainer").style.left = "0px";
		document.getElementById("linksButton").style.display = "block";
	};

	var monitorLogOut = function() {
		messager.send({ what: 'getLoginStatus' }, function(stats) {
			if(stats.loggedIn == false && stats.inprogress == false) {
				window.location = "newtab-logout.html";
			} 
			else {
				window.setTimeout(function() { monitorLogOut() }, 10000);
			}
		});
	};

	var initLogout = function() {
		//Set Loginurl
		uDom('#login').attr("href", NewTabConfig.stats.loginUrl);
		monitorLogIn();
	};

	uDom.onLoad(function() {
		//if there's no tab id specified in the query string, it will default to current tab.
		var tabId = null;
		messager.send({ what: 'getInitData' }, function(stats) {
			NewTabConfig.date = new Date().getTime();
			NewTabConfig.stats = stats;
			NewTabConfig.imagecheck = false;
			NewTabConfig.adcheck = false;
			if(!stats || stats.tabOptIn == -1) {
				return;
			}
			uDom('.settinglink').attr('data-href', stats.settingsUrl);
			uDom('.footerlink').attr('data-href', stats.appUrl);
			NewTabConfig.imagecheck = true;
			loadfreqsites();
			loadBgImage();
			loadBgText();
			if(stats.showfrequentpages == true) {
				loadsidemenu();
			}
			if(stats.tabOptIn == 0) {
				uDom('.taboptincontainer').css("display", "");
				uDom('.btntabreplaceoptin').on('click', function(evt) {
					changeNewTabOptinStatus(true);
					uDom('.taboptincontainer').css("display", "none");
				});
				uDom('.btntabreplaceoptout').on('click', function(evt) {
					changeNewTabOptinStatus(false);
					uDom('.taboptincontainer').css("display", "none");
					uDom('.taboptoutcontainer').css("display", "");
				});
			}
			if(stats.adOptIn == 0) {
				//this is disabled for now
/*
				uDom('.adoptincontainer').css("display", "");
				uDom('.btnadoptin').on('click', function(evt) {
					changeAdOptinStatus(true);
					uDom('.adoptincontainer').css("display", "none");
					//uDom('.addisplaycontainer').css("display","");
					getNewTabAd();
				});
*/
			} else if(stats.adOptIn == 1) {
				NewTabConfig.adcheck = true;
				getNewTabAd();
			}
			logNewTabData();
			monitorLogOut();
		});
		updateclickable();
		uDom('.thumbsup-container').on('click', function(evt) {
			//check class has active ,
			var isActive = uDom('.thumbsup-container').hasClass('thumbactive');
			if(isActive) {
				uDom('.thumbsup-container').removeClass('thumbactive');
			} 
			else {
				uDom('.thumbsdown-container').removeClass('thumbactive');
				uDom('.thumbsup-container').addClass('thumbactive');
				changeQuoteLikeStatus(true);
			}
		});
		uDom('.thumbsdown-container').on('click', function(evt) {
			var isActive = uDom('.thumbsdown-container').hasClass('thumbactive');
			if(isActive) {
				uDom('.thumbsdown-container').removeClass('thumbactive');
			} 
			else {
				uDom('.thumbsdown-container').addClass('thumbactive');
				uDom('.thumbsup-container').removeClass('thumbactive');
				changeQuoteLikeStatus(false);
			}
		});
		uDom('.fb').on('click', function(evt) {
			if(NewTabConfig.stats.apiUrl && NewTabConfig.quote.id) window.location = NewTabConfig.stats.apiUrl + "quotes/sharetofb/" + NewTabConfig.quote.id;
		});
		/*
		uDom('.share').on('click',function(evt){
			
			
		});
		*/
	});
	
})();
