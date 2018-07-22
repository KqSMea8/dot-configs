/***********************************************************************************
converts non-standard filters to a standard format, and removes invalid filters
***********************************************************************************/
var FilterNormalizer = {

	//removes broken filters, useless comments and unsupported things
	normalizeList: function(lines, keepComments) {
		var result = [];
		var ignoredFilterCount = 0;
		for(var i = 0; i < lines.length; i++) {
			try {
				var newfilter = FilterNormalizer.normalizeLine(lines[i]);
				if(newfilter)
					result.push(newfilter);
				else if(newfilter !== false)
					ignoredFilterCount++;
				else if(keepComments)
					result.push(lines[i]);
			} 
			catch (ex) {
				if(Conf.DEBUG) Utils.log("Filter '" + lines[i] + "' could not be parsed: " + ex);
				ignoredFilterCount++;
			}
		}
		if(Conf.DEBUG) Utils.log(ignoredFilterCount + ' rule(s) ignored.');
		return result;
	},

	//normalizes a single filter. will return null, false, or throw an exception for invalid filters
	normalizeLine: function(filter) {
		//some rules are separated by \r\n and some rules may have leading or trailing whitespace for some reason
		filter = filter.replace(/\r$/, '').trim();
		//remove comment / empty filters
		if(Filter.isComment(filter))
			return false;
		//this will throw exception if invalid
		var parsedFilter = PatternFilter.fromText(filter);
		var types = parsedFilter._allowedElementTypes;
		var whitelistOptions = (Utils.ELEMENT_TYPES.document | Utils.ELEMENT_TYPES.elemhide);
		var hasWhitelistOptions = types & whitelistOptions;
		
		
		
		if(!Filter.isWhitelistFilter(filter) && hasWhitelistOptions){
		
	
		throw "$document and $elemhide may only be used on whitelist filters";
		}
			
//		}
		//ignore filters whose domains aren't formatted properly
		FilterNormalizer.verifyDomains(parsedFilter._domains);
		//ensure filter doesn't break extension
		FilterNormalizer._checkForObjectProperty(filter);
		//filter is valid
		return filter;
	},

	// Return |selectorFilterText| modified if necessary so that it applies to no
	// domain in the |excludedDomains| list.
	// Throws if |selectorFilterText| is not a valid filter.
	// Example: ("a.com##div", ["sub.a.com", "b.com"]) -> "a.com,~sub.a.com##div"
	_ensureExcluded: function(selectorFilterText, excludedDomains) {
	var text = selectorFilterText;
	var filter = new SelectorFilter(text);
	var mustExclude = excludedDomains.filter(function(domain) {
	return filter._domains._computedHas(domain);
	});
	if (mustExclude.length > 0) {
	var toPrepend = "~" + mustExclude.join(",~");
	if (text[0] != "#") toPrepend += ",";
	text = toPrepend + text;
	}
	return text;
	},
	// Checks if the filter is an object property, which we should not overwrite.
	// See Issue 7117.
	// Throw an exeption if that's the case
	// Input: text (string): the item to check
	_checkForObjectProperty: function(text) {
		if(text in Object)
			throw "Filter causes problems in the code";
	},

	// Throw an exception if the DomainSet |domainSet| contains invalid domains.
	verifyDomains: function(domainSet) {
		for(var domain in domainSet.has) {
			if(domain === DomainSet.ALL)
				continue;
			if(/^([a-z0-9\-_\u00DF-\u00F6\u00F8-\uFFFFFF]+\.)*[a-z0-9\u00DF-\u00F6\u00F8-\uFFFFFF]+\.?$/i.test(domain) == false)
				throw Error("Invalid domain: " + domain);
			//ensure domain doesn't break extension
			FilterNormalizer._checkForObjectProperty(domain);
		}
	}

}
