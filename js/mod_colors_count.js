function mod_colors_count(cnv_id)
{
	var cnv = document.getElementById(cnv_id);
	if(cnv == null) return;
	
	
	var ctx = cnv.getContext("2d");
	var imageData = ctx.getImageData(0,0,cnv.width,cnv.height);  
	alert(getCountOfColors(imageData));
}

function getColors(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			var obj = {};
			var colors = [];

			for (var y = 0; y < im0.data.length; y+=4) {
		
				
					
					var idx = y;
					
					var key = ""+im0.data[idx]+"-"+im0.data[idx+1]+"-"+im0.data[idx+2]+"-"+im0.data[idx+3];
					
					if (obj[key]==undefined) { 
					
						
						var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2],im0.data[idx+3]]; 
						colors.push(col); 
						obj[key]= true;
					
					}
					
					
				}
			
			
		//console.log ( "count="+colors.length);
			
			return colors;
}



function getColorsCountPro(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			var obj = {};
			var colors = [];

			for (var y = 0; y < im0.data.length; y+=4) {
		
				
					
					var idx = y;
					
					var key = ""+im0.data[idx]+"-"+im0.data[idx+1]+"-"+im0.data[idx+2]+"-"+im0.data[idx+3];
					
					if (obj[key]==undefined) { 
					
						
						var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2],im0.data[idx+3]]; 
						colors.push(col); 
						obj[key]= {count:1};
					
					}
					else{
						obj[key].count++;
					}
					
					
				}
			
			
	//	console.log ( "count="+colors.length);
			
			return [colors,obj];
}

function getCountOfColors(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			var obj = {};
			//var colors = [];

			for (var y = 0; y < h; y++) {
		

				for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var key = ""+im0.data[idx]+"-"+im0.data[idx+1]+"-"+im0.data[idx+2]+"-"+im0.data[idx+3];
					if (obj[key]==undefined)obj[key]=0;
					obj[key]++;
					// if (obj[key]==undefined) { 
					
						
						// var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2],im0.data[idx+3]]; 
						// colors.push(col); 
						// obj[key]= {cnt:1,arr:col};
					
					// }
					// else
					// {
						// var obj4 = {cnt:obj[key].cnt+1,arr:obj[key].arr};
						// obj[key] = obj4;
					// }
					
					
					
					
					
				}
			}
			var arr2=[];
			var n=0;
			for(var p in obj){
				
				if(p=='255-255-0-255')continue;
				n++;
				arr2.push(p);
			}
			
			var m =swap_colors_getRandomInt(0, n);
			
			
			
			// var max=0;var mk='';
			// for(var p in obj){
				
				// if(p=='255-255-0-255')continue;
				// n++;
				// if(max<obj[p])
				// {
					// max=obj[p];mk=p;obj[p]=0;
				// }
			
			// }
			// //..
			var arr = arr2[m].split("-");
			
			
			
			return [Number(arr[0]),Number(arr[1]),Number(arr[2]),Number(arr[3])];
}



function getArrayOfSortedColors(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			var obj = {};
			//var colors = [];

			for (var idx = 0; idx < w*h-4; idx += 4) {
		
					var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2],im0.data[idx+3]]; 
					
					var key = fromBytesInt32(col);
					
					if (obj[key]==undefined)obj[key]=0;
					obj[key]++;
					
				}
		
			
			
				var arr=[];
				
				for(var key in obj)
				{
					var flag=false;
					for(var i=0;i<arr.length;i++)
					{
						
						if(arr[i][1]<obj[key]) { arr.splice(i, 0, [Number(key),obj[key]]); flag=true; break;}
					}
					if(flag==false) arr.push([Number(key),obj[key]]);
				}
							
			return arr;
}

function toBytesInt32 (num) {
    arr = new Uint8Array([
         (num & 0xff000000) >> 24,
         (num & 0x00ff0000) >> 16,
         (num & 0x0000ff00) >> 8,
         (num & 0x000000ff)
    ]);
    return arr.reverse();//.buffer;
}

var fromBytesInt32=function(arr) {
    var result=0;
    for (var i=3;i>=0;i--) {
        result+=arr[i]<<(8*i);
    }
    return result;
};


function includes3Color(colors, color)
{
	for(var i=0;i<colors.length;i++)
	{
		
		if(
					(colors[i][0] == color[0]) &&
					(colors[i][1] == color[1]) &&
					(colors[i][2] == color[2]) 
					// &&	(colors[i][3]== color[3])
					
		) 
			{
				return true;
			}
	}
	return false;
}

function getArrayOf3Colors(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
		
			//var obj = {};
			var colors = [];

			for (var idx = 0; idx < w*h-4; idx += 4) {
		
					var col = [im0.data[idx], im0.data[idx+1],im0.data[idx+2]]; 
					
					if(includes3Color(colors,col)==false)
					{
						colors.push(col);
					
					}
					
				}
		
							
			return colors;
}






