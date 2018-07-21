function onChange(e)
{
	chrome.storage.local.set({keyModifier: keyModifierSelect.value, key: keySelect.value});
}

var keyModifierSelect = document.querySelector("#keyModifier");
var keySelect = document.querySelector("#key");

for(var i = 65; i < 91; i++)
{
	var option = document.createElement("option");
	option.setAttribute("value", i);
	option.innerHTML = String.fromCharCode(i);
	
	keySelect.appendChild(option);
}

chrome.storage.local.get(null, function(result)
{
	document.querySelector("#status").innerHTML = result.grayscale ? "On" : "Off";
	
	if(result.keyModifier != null && result.keyModifier != undefined)
	{
		document.querySelector("#keyModifier option[value='" + result.keyModifier + "']").setAttribute("selected", "selected");
	}
	else
	{
		document.querySelector("#keyModifier option[value='shift']").setAttribute("selected", "selected");
	}
	
	if(result.key != null && result.key != undefined)
	{
		document.querySelector("#key option[value='" + result.key + "']").setAttribute("selected", "selected");
	}
	else
	{
		document.querySelector("#key option[value='71']").setAttribute("selected", "selected");
	}
});

keyModifierSelect.addEventListener("change", onChange);
keySelect.addEventListener("change", onChange);