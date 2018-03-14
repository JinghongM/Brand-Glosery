'use strict'
var organicCount = 0;
var USACount = 0;
var PriceCount = 0;
var temp=[1,1,1,1,1,1,1,1,1]; //Organic Button, USA Button, Jazz, Pop, Techno, Indie, Hiphop, Lullaby, Jock Jams.
function setColorNormal(btn,id,count) {
	let property = document.getElementById(btn);
	if (temp[count] == 0) {
		property.style.backgroundColor = "transparent";
		property.style.color = "#5bc0de";
		property.style.border = "1px solid #46b8da";		

		document.getElementById(id).value="True";
		temp[count] = 1;        
	}
	else {
		property.style.backgroundColor = "#5bc0de";
		property.style.color = "#FFFFFF";
		property.style.border = "3px solid #0568e1";		
		document.getElementById(id).value="False";
		temp[count] = 0;
	}
}


var lastClickPrice = -1;
function setColorPrice(btn,val) {
	if(val == lastClickPrice)
	{
		document.getElementById("PriceLevel").value=0;
		for(var i = 1; i<=5;i++)
		{
			var temp = "PriceLevel" + i;
			document.getElementById(temp).style.backgroundColor = "transparent";
			document.getElementById(temp).style.color = "#5bc0de";
			document.getElementById(temp).style.border = "1px solid #46b8da";		
			lastClickPrice = -1;
		}
		return;
	}
	else
	{
		lastClickPrice = val;
		document.getElementById("PriceLevel").value=val;
		for(var i = 1; i<=val;i++)
		{
			var temp = 'PriceLevel' + i;
			document.getElementById(temp).style.backgroundColor = "#5bc0de";
			document.getElementById(temp).style.color = "#FFFFFF";
			document.getElementById(temp).style.border = "3px solid #0568e1";		

		}
		for(var i = val+1; i<=5;i++)
		{
			var temp = "PriceLevel" + i;
			document.getElementById(temp).style.backgroundColor = "transparent";
			document.getElementById(temp).style.color = "#5bc0de";
			document.getElementById(temp).style.border = "1px solid #46b8da";		
		}
	}

}


var lastClickRating = -1;
function setColorRating(btn,val) {
	if(val == lastClickRating)
	{
		document.getElementById("RatingLevel").value=0;
		for(var i = 1; i<=5;i++)
		{
			var temp = "RatingLevel" + i;
			document.getElementById(temp).style.backgroundColor = "transparent";
			document.getElementById(temp).style.color = "#5bc0de";
			document.getElementById(temp).style.border = "1px solid #46b8da";		
			lastClickRating = -1;
		}
		return;
	}
	else
	{
		lastClickRating = val;
		document.getElementById("RatingLevel").value=val;
		for(var i = 1; i<=val;i++)
		{
			var temp = 'RatingLevel' + i;
			document.getElementById(temp).style.backgroundColor = "#5bc0de";
			document.getElementById(temp).style.color = "#FFFFFF";
			document.getElementById(temp).style.border = "3px solid #0568e1";
		}
		for(var i = val+1; i<=5;i++)
		{
			var temp = "RatingLevel" + i;
			document.getElementById(temp).style.backgroundColor = "#tansparent";
			document.getElementById(temp).style.color = "#5bc0de";
			document.getElementById(temp).style.border = "1px solid #46b8da";		
		}
	}

}
