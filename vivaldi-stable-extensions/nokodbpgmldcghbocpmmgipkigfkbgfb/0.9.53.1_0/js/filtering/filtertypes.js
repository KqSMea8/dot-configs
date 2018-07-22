/***********************************************************************************
a base filter rule
***********************************************************************************/
var Filter = function() {
	this.id = ++Filter._lastId;
};
Filter._lastId = 0;

//maps filter text to Filter instances. this is important, as it allows us to throw away and rebuild the FilterSet at will. will be cleared after a fixed time interval
Filter._cache = {};

//returns a Filter instance for the given filter text. throws an exception if the filter is invalid.
Filter.fromText = function(text) {
	var cache = Filter._cache;
	if(!(text in cache)) {
		cache[text] = PatternFilter.fromText(text);
	}
	return cache[text];
};

//returns true for whitelist filter
Filter.isWhitelistFilter = function(text) {
	return /^\@\@/.test(text);
};

//returns true for comment
Filter.isComment = function(text) {
	return text.length === 0 || text[0] === '!' || (/^\[adblock/i.test(text)) || (/^\(adblock/i.test(text));
};

//converts a comma-separated list of domain includes and excludes into a DomainSet
Filter._toDomainSet = function(domainText, divider) {
	var domains = domainText.split(divider);
	var data = {};
	data[DomainSet.ALL] = true;
	if(domains == '')
		return new DomainSet(data);
	for(var i = 0; i < domains.length; i++) {
		var domain = domains[i];
		if(domain[0] == '~') {
			data[domain.substring(1)] = false;
		} 
		else {
			data[domain] = true;
			data[DomainSet.ALL] = false;
		}
	}
	return new DomainSet(data);
};

/***********************************************************************************
filter that blocks by URL regex or substring
***********************************************************************************/
var PatternFilter = function() {
	//call base constructor
	Filter.call(this);
};

//creates pattern filter from data array. data is [rule text, allowed element types, options]
PatternFilter.fromData = function(data) {
	var result = new PatternFilter();
	result._rule = new RegExp(data[0]);
	result._allowedElementTypes = data[1];
	result._options = data[2];
	data = {};
	data[DomainSet.ALL] = true;
	result._domains = new DomainSet(data);
	return result;
};

//creates pattern filter from text. text is the original filter text of a blocking or whitelist filter
PatternFilter.fromText = function(text) {
	var data = PatternFilter._parseRule(text);
	var result = new PatternFilter();
	result._domains = Filter._toDomainSet(data.domainText, '|');
	result._allowedElementTypes = data.allowedElementTypes;
	result._options = data.options;
	result._rule = data.rule;
	result._key = data.key;
	//preserve _text for resourceblock. Don't do so in Safari, where resources aren't recorded
	//if(document.location.pathname === '/pages/resourceblock.html')
	//	result._text = text;
		
		return result;
	}

//returns a { rule, domainText, allowedElementTypes } object for the given filter text
PatternFilter._parseRule = function(text) {
	var result = {
		domainText: '',
		options: Utils.FILTER_OPTIONS.NONE
	};
	var optionsRegex = /\$~?[\w\-]+(?:=[^,\s]+)?(?:,~?[\w\-]+(?:=[^,\s]+)?)*$/;
	var optionsText = text.match(optionsRegex);
	var allowedElementTypes;
	if(!optionsText) {
		var rule = text;
		var options = [];
	} 
	else {
		var options = optionsText[0].substring(1).toLowerCase().split(',');
		var rule = text.replace(optionsText[0], '');
	}
	for(var i = 0; i < options.length; i++) {
		var option = options[i];
		if(/^domain\=/.test(option)) {
			result.domainText = option.substring(7);
			continue;
		}
		var inverted = (option[0] == '~');
		if(inverted)
			option = option.substring(1);
		option = option.replace(/\-/, '_');
		//see crbug.com/93542 - object_subrequest is reported as 'object' so we treat them as synonyms
		if(option == 'object_subrequest')
			option = 'object';
		//'background' is a synonym for 'image'.
		if(option == 'background')
			option = 'image';
		if(option in Utils.ELEMENT_TYPES) {
			//this option is a known element type
			if(inverted) {
				if(allowedElementTypes === undefined)
					allowedElementTypes = Utils.ELEMENT_TYPES.DEFAULTTYPES;
				allowedElementTypes &= ~Utils.ELEMENT_TYPES[option];
			} 
			else {
				if(allowedElementTypes === undefined)
					allowedElementTypes = Utils.ELEMENT_TYPES.NONE;
				allowedElementTypes |= Utils.ELEMENT_TYPES[option];
			}
		}
		else if(option === 'third_party') {
			result.options |= (inverted ? Utils.FILTER_OPTIONS.FIRSTPARTY : Utils.FILTER_OPTIONS.THIRDPARTY);
		}
		else if(option === 'match_case') {
			//doesn't have an inverted function
			result.options |= Utils.FILTER_OPTIONS.MATCHCASE;
		}
		else if(option === 'collapse') {
			//currently do not support this option. for now, simply skip without returning that the filter was invalid
		}
		else {
			throw "Unknown option in filter " + option;
		}
	}
	//if no element types are mentioned, the default set is implied.
	if(allowedElementTypes === undefined)
		result.allowedElementTypes = Utils.ELEMENT_TYPES.DEFAULTTYPES;
	else
		//otherwise, the element types are used, which can be Utils.ELEMENT_TYPES.NONE
		result.allowedElementTypes = allowedElementTypes;
	//at this point we know it is a whitelist rule, so ignore the @@
	if(Filter.isWhitelistFilter(rule))
		rule = rule.substring(2);
	//check if the rule itself is in regex form.  If so, we're done.
	var matchcase = (result.options & Utils.FILTER_OPTIONS.MATCHCASE) ? "" : "i";
	if(/^\/.+\/$/.test(rule)) {
		 //remove slashes
		result.rule = rule.substr(1, rule.length - 2);
		result.rule = new RegExp(result.rule, matchcase);
		return result;
	}
	var key = rule.match(/\w{5,}/);
	if(key)
		result.key = new RegExp(key, matchcase);
	//convert multiple stars to single star
	rule = rule.replace(/\*\*+/g, '*');
	//some chars in regexes mean something special, escape everything except a-z A-Z 0-9 and _ and do not escape | ^ and * because they are handled below
	rule = rule.replace(/([^a-zA-Z0-9_\|\^\*])/g, '\\$1');
	//^ is a separator char
	rule = rule.replace(/\^/g, '[^\\-\\.\\%a-zA-Z0-9_]');
	//replace * by .*
	rule = rule.replace(/\*/g, '.*');
	//starting with || means start at a domain or subdomain name, so match ://<the rule> or ://some.domains.here.and.then.<the rule>
	rule = rule.replace(/^\|\|/, '^[^\\/]+\\:\\/\\/([^\\/]+\\.)?');
	//starting with | means beginning of the URL
	rule = rule.replace(/^\|/, '^');
	//rules ending in | means the URL should end there
	rule = rule.replace(/\|$/, '$');
	//any other '|' within a string should really be a pipe
	rule = rule.replace(/\|/g, '\\|');
	//strip starting or ending *, it's a no-op
	rule = rule.replace(/^\.\*/, '');
	rule = rule.replace(/\.\*$/, '');
	//now we have the regex
	result.rule = new RegExp(rule, matchcase);
	return result;
};



//blocking and whitelist rules are both PatternFilters
PatternFilter.prototype = {
	
	//inhereit base filter
	__proto__: Filter.prototype,

	//returns true if an element of the given type loaded from the given URL would be matched by this filter
	//NOTE: isThirdParty is true if url and frameDomain have different origins
	matches: function(url, elementType, isThirdParty) {
	
		if(!(elementType & this._allowedElementTypes)){
		
		
	
		
			return false;
		}
		
		//if the rule is third party and the resource is being loaded from the same origin as the document, rule is not applicable
		if((this._options & Utils.FILTER_OPTIONS.THIRDPARTY) && !isThirdParty){
		
	
		return false;
		}
			
		//if the rule is first party and the resource is being loaded from a different origin as the document, rule is not applicable
		if((this._options & Utils.FILTER_OPTIONS.FIRSTPARTY) && isThirdParty)
		{
		
	
		return false;
		}
			
		//test the url against the key
		if(this._key && !this._key.test(url)){
	
		return false;
		}
			
		//test the url against the rule
		var res=this._rule.test(url)
	
			
		return res ;
	}

};
