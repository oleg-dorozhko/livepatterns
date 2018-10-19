function getArrayOfColors(im0,m)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			var obj = {};
			var colors = [];

			for (var y = 0; y < h; y++) {
		

				for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var key = ""+im0.data[idx]+"-"+im0.data[idx+1]+"-"+im0.data[idx+2]+"-"+im0.data[idx+3];
					
					if (obj[key]==undefined) { 
					
						
						var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2],im0.data[idx+3]]; 
						colors.push(col); 
						obj[key]= {cnt:1,arr:col};
					
					}
					else
					{
						var obj4 = {cnt:obj[key].cnt+1,arr:obj[key].arr};
						obj[key] = obj4;
					}
					
					
					
					
					
				}
			}
			var arr2=[];
			
			while(true)
			{
				var max=0;
				var color=null;
				var key=null;
				for(var ob in obj)
				{
					if(obj[ob]==null) continue;
					if(max<obj[ob].cnt)
					{
						max=obj[ob].cnt;
						color=obj[ob].arr;
						key=ob;
					}
					// console.log ( "count="+obj[ob].cnt+" color: "+obj[ob].arr);
					// obj2[ob] = {cnt:obj[ob].cnt,arr:obj[ob].arr};
				}
				obj[key]=null;
				arr2.push(color);
				
				
				if(arr2.length>m) break;
			}
			
		//	for(var i=0;i<arr2.length;i++)
			{
	//			console.log ( "color="+arr2[i]);
			}
			
		//	console.log ( "count="+colors.length);
				arr2 = clean_null(arr2);
		
		
			return arr2;
}


function  clean_null(colors)
{
		
		for(var i=colors.length-1;i>=0;i--)
		{
			if(colors[i]==null)
									colors.splice(i,1);
		}
		
		if(colors[colors.length-1]==null)  	colors.splice(colors.length-1,1);
		return colors;
}

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!

function swap_colors_getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function swap_colors_imgData(imgData)
{
	var colors = getArrayOfColors(imgData,global_number_of_colors);
	
	// var n =  swap_colors_getRandomInt(0, colors.length);
	// var m = 0;
	// while(true)
	// {
		// m =  swap_colors_getRandomInt(0, colors.length);
		// if(m!=n) break;
	// }
	n=0;m=1;
	var w = imgData.width;
	var h = imgData.height;
	
	var rcanvas = document.createElement("canvas");
	rcanvas.width=w;
	rcanvas.height=h;
	var rctx = rcanvas.getContext("2d");
	var imgData2=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	
	for (var y = 0; y < h; y++) {
		

				for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					if(
						(imgData.data[idx]==colors[n][0])&&
						(imgData.data[idx+1]==colors[n][1])&&
						(imgData.data[idx+2]==colors[n][2])&&
						(imgData.data[idx+3]==colors[n][3]) )
						{
							
							imgData2.data[idx]=colors[m][0];
							imgData2.data[idx+1]=colors[m][1];
							imgData2.data[idx+2]=colors[m][2];
							imgData2.data[idx+3]=colors[m][3];
							
							
							
							
						}
						else if(
						(imgData.data[idx]==colors[m][0])&&
						(imgData.data[idx+1]==colors[m][1])&&
						(imgData.data[idx+2]==colors[m][2])&&
						(imgData.data[idx+3]==colors[m][3]) 
						)
						{
							imgData2.data[idx]=colors[n][0];
							imgData2.data[idx+1]=colors[n][1];
							imgData2.data[idx+2]=colors[n][2];
							imgData2.data[idx+3]=colors[n][3];
							
						}
						else{
							imgData2.data[idx]=imgData.data[idx];
							imgData2.data[idx+1]=imgData.data[idx+1];
							imgData2.data[idx+2]=imgData.data[idx+2];
							imgData2.data[idx+3]=imgData.data[idx+3];
						}
					
					
				}
	}
	
	return imgData2;
	
}