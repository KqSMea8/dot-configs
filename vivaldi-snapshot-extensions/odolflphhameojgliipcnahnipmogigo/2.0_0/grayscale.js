function update(newState)
{
	var value = newState ? 1 : 0;
	
	document.querySelector("body").style.setProperty("-webkit-filter", "grayscale(" + value + ")", "important");
}

var isGrayscale = false;
var customKeyCode = 71; //G
var customKeyModifier = "shift";

chrome.storage.local.get(null, function(result)
{
	if(result.grayscale === true)
	{
		isGrayscale = true;
		update(isGrayscale);
	}
	
	if(result.key != null && result.key != undefined)
	{
		customKeyCode = result.key;
	}
	
	if(result.keyModifier != null && result.keyModifier != undefined)
	{
		customKeyModifier = result.keyModifier;
	}
	
	window.addEventListener("keyup", function(e)
	{
		if ((customKeyModifier == "shift" && e.shiftKey)
			|| (customKeyModifier == "control" && e.ctrlKey)
			|| (customKeyModifier == "alt" && e.altKey))
		{
			if (e.keyCode == customKeyCode)
			{
				isGrayscale = !isGrayscale;
				
				chrome.storage.local.set({grayscale: isGrayscale}, function()
				{
					update(isGrayscale);
				});
			}
		}
	});
});