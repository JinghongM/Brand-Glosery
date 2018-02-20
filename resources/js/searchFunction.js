    	'use strict'
	    var organicCount = 0;
	    var USACount = 0;
	    var PriceCount = 0;
	    var temp=[1,1,1,1,1,1,1,1,1]; //Organic Button, USA Button, Jazz, Pop, Techno, Indie, Hiphop, Lullaby, Jock Jams.
	    function setColorNormal(btn,id,count) {
	        let property = document.getElementById(btn);
	        if (temp[count] == 0) {
	            property.style.backgroundColor = "#e7e7e7";
	            property.style.color = "#008000";
	            document.getElementById(id).value="True";
	            temp[count] = 1;        
	        }
	        else {
	            property.style.backgroundColor = "#006400";
	            property.style.color = "#FFFFFF";
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
	            document.getElementById(temp).style.backgroundColor = "#e7e7e7";
	            document.getElementById(temp).style.color = "#008000";
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
	              document.getElementById(temp).style.backgroundColor = "#006400";
	              document.getElementById(temp).style.color = "#FFFFFF";
	        }
	        for(var i = val+1; i<=5;i++)
	        {
	              var temp = "PriceLevel" + i;
	              document.getElementById(temp).style.backgroundColor = "#e7e7e7";
	              document.getElementById(temp).style.color = "#008000";
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
	            document.getElementById(temp).style.backgroundColor = "#e7e7e7";
	            document.getElementById(temp).style.color = "#008000";
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
	              document.getElementById(temp).style.backgroundColor = "#006400";
	              document.getElementById(temp).style.color = "#FFFFFF";
	        }
	        for(var i = val+1; i<=5;i++)
	        {
	              var temp = "RatingLevel" + i;
	              document.getElementById(temp).style.backgroundColor = "#e7e7e7";
	              document.getElementById(temp).style.color = "#008000";
	        }
	      }
	      
	    }
