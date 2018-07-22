/***********************************************************************************
// Filter objects representing the given filter text.
**********************************************************************************/
function FilterSet() {
	//map from domain (e.g. 'mail.google.com', 'google.com', or special-case 'global') to list of filters that specify inclusion on that domain
	//e.g. /f/$domain=sub.foo.com,bar.com will appear in items['sub.foo.com'] and items['bar.com']
	this.items = { 'global': [] };
	//map from domain to set of filter ids that specify exclusion on that domain. each filter will also appear in this.items at least once
	//e.g. /f/$domain=~foo.com,~bar.com would appear in items['global'], exclude['foo.com'], exclude['bar.com']
	//e.g. /f/$domain=foo.com,~sub.foo.com would appear in items['foo.com'], exclude['sub.foo.com']
	this.exclude = {};
}

//constructs a FilterSet from the Filters that are the values in the |data| object.  All filters should be the same type (whitelisting PatternFilters, blocking PatternFilters, or SelectorFilters)
FilterSet.fromFilters = function(data) {
	var result = new FilterSet();
	for(var _ in data) {
		var filter = data[_];
	for(var d in filter._domains.has) {
		if(filter._domains.has[d]) {
			var key = (d === DomainSet.ALL ? 'global' : d);
			Utils.setDefault(result.items, key, []).push(filter);
		}
		else if(d !== DomainSet.ALL)
			Utils.setDefault(result.exclude, d, {})[filter.id] = true;
		}
	}
	return result;
};

FilterSet.prototype = {

	//returns a new FilterSet containing the subset of this FilterSet's entries which relate to the given domain or any of its superdomains.
	//e.g. sub.foo.com will get items['global', 'foo.com', 'sub.foo.com'] and exclude['foo.com', 'sub.foo.com']
	_viewFor: function(domain) {
		var result = new FilterSet();
		result.items['global'] = this.items['global'];
		for(var nextDomain in DomainSet.domainAndParents(domain)) {
			if(this.items[nextDomain])
				result.items[nextDomain] = this.items[nextDomain];
			if(this.exclude[nextDomain])
				result.exclude[nextDomain] = this.exclude[nextDomain];
		}
		return result;
	},
	//returns the filter that matches this url+elementType on this frameDomain: the filter in a relevant entry in this.items who is not also in a relevant entry in this.exclude
	//NOTE: isThirdParty is true if url and frameDomain have different origins
	matches: function(url, elementType, frameDomain, isThirdParty) {
	

		var limited = this._viewFor(frameDomain);
		//go through each item
		for(var k in limited.items) {
		
			var entry = limited.items[k];
			//go through each entry
					
			for(var i = 0; i < entry.length; i++) {
				var filter = entry[i];
				if(!filter.matches(url, elementType, isThirdParty))
					//no match
					continue;
				//determine if filter does not match because it is excluded on the domain
				
				
				var excluded = false;
				for (var k2 in limited.exclude) {
					if (limited.exclude[k2][filter.id]) {
						//excluded
						excluded = true;
						break;
					}
				}
				//found a match
				if (!excluded)
					return filter;
			}
		}
		//nothing found
		
		return null;
	}

};


var BlockingFilterSet = function(patternFilterSet, whitelistFilterSet, whitelistDomainSet) {
	this.pattern = patternFilterSet;
	this.whitelist = whitelistFilterSet;
	this.whitelistDomains = whitelistDomainSet;
	//cache results for this.matches() 
	this._matchCache = {};


};

//checks if the two domains have the same origin
BlockingFilterSet.checkThirdParty = function(domain1, domain2) {
	var match1 = Utils.parseUri.secondLevelDomainOnly(domain1, false);
	var match2 = Utils.parseUri.secondLevelDomainOnly(domain2, false);
	return (match1 !== match2);
};

BlockingFilterSet.prototype = {

	//returns true if the url and element type is blocked by this filterset.
	matches: function(url, elementType, frameDomain, returnFilter) {
		var urlDomain = Utils.parseUri(url).hostname;
		var isThirdParty = BlockingFilterSet.checkThirdParty(urlDomain, frameDomain);
		//check the cache
		var key = url + " " + elementType + " " + isThirdParty;
		
		if(key in this._matchCache)
			return this._matchCache[key];
		//check if whitelist match
		
		var match = this.whitelist.matches(url, elementType, frameDomain, isThirdParty);
		if(match) {
			 Utils.log(frameDomain+ ": whitelist rule" + match._rule + "exempts url"+  url);
			//set cache and return appropriate value
			this._matchCache[key] = (returnFilter ? match._text : false);
			return this._matchCache[key];
		}
		//check if pattern match
	
		match = this.pattern.matches(url, elementType, frameDomain, isThirdParty);
		
		if(match) {
			 Utils.log(frameDomain + ": matched" +  match._rule + "to url" + url);
			//set cache and return appropriate value
			this._matchCache[key] = (returnFilter ? match._text: true);
			return this._matchCache[key];
		}
		//no matches, set cache and return
		this._matchCache[key] = false;
		return this._matchCache[key];
	},

	//returns true if the url and element type is whitelisted by this filterset
	isWhitelisted: function (url, type) {
		if(!url)
			return true;
		//remove any anchor
		url = url.replace(/\#.*$/, '');
		if(!type)
			type = Utils.ELEMENT_TYPES.document;
	var hostname = Utils.parseUri(url).hostname;
		//check if domain is whitelisted
		if(this.whitelistDomains.indexOf(hostname) >= 0) {
//console.log('domain whitelist found for ' + hostname + ' on URL: ' + url);
			return true;
		}
		//check if url is whitelisted
		
		return this.whitelist.matches(url, type, hostname, false);
	}

};
