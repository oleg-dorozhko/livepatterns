var global_cell_size=1;
function rio_random_cluster_imgData(imgData,x,y)
{
	
	imgData = __half_imageData(imgData);
//var arr = dummy_fast(x,y);
var palette = getArrayOf3Colors(imgData);

if(x==undefined)
	{
x=getRandomInt(0,imgData.width);
 y=getRandomInt(0,imgData.height);
	}
var color =getColorArrayFromImageData(imgData, x, y);
var __fill_color= getRndColor();//palette[getRandomInt(0,palette.length)];
var arr = obvod(imgData,x,y,1,1,5,5,5,0,color,__fill_color);
		__fill_color.push(255);
		
		var tod = Number(document.getElementById("thikness_of_undestroy").value);
			var kodf = Number(document.getElementById("kind_of_undestroy").value);
		
		global_cell_size=tod;
			post_bubabu(arr[kodf],__fill_color);
		global_cell_size=1;
		
	
		
		var dcanvas = document.getElementById("canvas0");
	var dctx = dcanvas.getContext("2d");
	var dmgData=dctx.getImageData(0,0,dcanvas.width/2,dcanvas.height/2);
	
		//imgData = __half_imageData(dmgData);
	imgData = mirror_right(dmgData);
		imgData = mirror_down(imgData);
		
			
		dcanvas.width = imgData.width;
	dcanvas.height = imgData.height;
	
		
		dctx.putImageData(imgData,0,0);
		
		
		
		// var canvas = document.getElementById('canvas0');
			
			
			// canvas.width=imgData.width/2;
			// canvas.height=imgData.height/2;
			// var ctx = canvas.getContext("2d");
			// ctx.putImageData(imgData,0,0);
			
				
		
		
		
		
		
		
		
		
		
		
		
		
		
		
}
