//from: http://jsfiddle.net/m1erickson/GWQQH/

function filter_colors_imgData_mapped(imageData,filter)
{   // create an array of palette colors
        var palette = global_ish_colors; //[[64,0,0],[192,0,0],[0,64,0],[0,192,0],[0,0,64],[0,0,192]];  // or filter = 2,2,2
           
       
        var data = imageData.data;

        // rewrite all pixels using only the mapped colors
        var mappedColor;
        for (var i = 0; i < data.length-4; i += 4) {
            mappedColor = mapColorToPalette(palette,data[i], data[i + 1], data[i + 2]);
            if(mappedColor==undefined) [0,0,0,255];
			try
			{
			//if(i>180000)console.log(i);
			if (data[i + 3] > 10) {
                data[i] = mappedColor[0];
                data[i + 1] = mappedColor[1];
                data[i + 2] = mappedColor[2];
            }
			}
			catch(e)
			{
			}
        }
        return imageData;
}

        // use Euclidian distance to find closest color
        function mapColorToPalette(palette,red, green, blue) {
            var color, diffR, diffG, diffB, diffDistance, mappedColor;
            var distance = 70000;
            for (var i = 0; i < palette.length; i++) {
                color = palette[i];
                diffR = (color[0] - red);
                diffG = (color[1] - green);
                diffB = (color[2] - blue);
                diffDistance = diffR * diffR + diffG * diffG + diffB * diffB;
                if (diffDistance < distance) {
                    distance = diffDistance;
                    mappedColor = palette[i];
                };
            }
            return (mappedColor);
        }
// function filter_colors_imgData(im0,num)
// {
	
		// return im0;
// }



 
 var global_rem_color=null;
var global_array_of_removed_points=[];
 
function destroy_colors_imgData(im0,im2,oncolormin)
{
	
	var palette = getArrayOfSortedColors(im0);
	if(palette.length<4)
	{
		return oncolormin(im0);
		// im0=pereplet2_imgData(im0,cloneImageData(im0),null);
		// im0=nonineth(nineth(im0));
		// do_server_command2(im0,'paint over',function()
		// {
		
		//});
		
	}
	
	var w = im0.width;
	var h = im0.height;
	
	if(global_array_of_removed_points.length==0)
	{
		
		var ind1 =getRandomInt(0,(palette.length/2|0));
		var ind2 =getRandomInt(0,(palette.length/2|0));
		//	global_rem_color=toBytesInt32(palette[ind1][0]);
				var fill_color=toBytesInt32(palette[ind2][0]);//[0,0,0,0]; //
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					if( palette[ind1][0]==fromBytesInt32(color) ) 
					{ 
						
						im0 = setPoint(im0,w, x,y,0,0,fill_color );
						//global_array_of_removed_points.push([x,y]);
					}
					
					
					
				}
			}
			var r2canvas = document.getElementById("canvas0");
	r2canvas.width = im0.width;
	r2canvas.height = im0.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(im0,0,0);	
	}
	else
	{
		// if(getRandomInt(0,2)==1) return destroy_colors_imgData(im0,im2,oncolormin);
		// else{
		// //var rndcolor=palette[getRandomInt(0,palette.length/2|0)];
		// //global_rem_color=toBytesInt32(rndcolor);;
		// //global_rem_color[3]=255;
		// for (var n = 0; n < global_array_of_removed_points.length; n++) {
				
					// var x=global_array_of_removed_points[n][0];
					// var y=global_array_of_removed_points[n][1];
				// //	var idx = (w * y + x) << 2;
					// //var color = getColorArrayFromImageDataByIndex(im0,idx);
					
					// //	im0 = setPoint(im0,w, x,y,0,0, toBytesInt32(rndcolor));
					
				// im0 = setPoint(im0,w, x,y,0,0,	global_rem_color);
					
					
					
					
				// }
		
		// global_array_of_removed_points=[];
		//}
		
	}




	
			return im0;
			
		// var r2canvas = document.getElementById("canvas0");
	// r2canvas.width = im0.width;
	// r2canvas.height = im0.height;
	// var r2ctx = r2canvas.getContext("2d");
	// r2ctx.putImageData(im0,0,0);	
		// return [im0,im2];
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

function old_destroy_colors_imgData(im0,im2)
{
	var diff=Number(document.getElementById("difference_of_filter").value);
	var colors = getColors(im0);
	var color2 =	null;
	while(true)
	{
	 color2 =	colors[getRandomInt(0,colors.length)];
	 if(color2[3]==0) continue;
	 break;
	}
	//var color4 = colors[1];//getRandomInt(0,colors.length)];
	var w = im0.width;
	var h = im0.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					if(mod_up_compareColors_with_diff(color,color2,diff) == true) 
					{ 
						//im2 = setPoint(im2,w, x,y,0,0,color);
						color[3]=0;
						im0 = setPoint(im0,w, x,y,0,0,color);
						
					}
					// var col =mapColorToPalette(colors,color[0], color[1], color[2])
					// if(col==undefined) col=[0,0,0,255];
					// else col.push(255);
					
					// if( compareColors(color,color2,diff) == true)
					// {
						// im0 = setPoint(im0,w, x,y,0,0,[0,0,0,0]);
					// }
					// else if( compareColors(color,[0,0,0,0],diff) == true)
					// {
						// im0 = setPoint(im0,w, x,y,0,0,color4);
					// }
					
					
					
					
				}
			}
		var r2canvas = document.getElementById("canvas0");
	r2canvas.width = im0.width;
	r2canvas.height = im0.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(im0,0,0);	
		return [im0,im2];
}

function getIndexOfIntegerColor(arr, v)
{
	for (var i = 0; i < arr.length; i ++)  if(arr[i][0]==v) return i; return -1;
}

function mod_filter_getMask()
{
	var s=document.getElementById("filter_imgData_settings").value;
	var mask=(s.trim()).split(',');
	if(mask.length!=4)return;
	for(var n=0;n<4;n++)
	{
		mask[n]=Number(mask[n]);
	}
	return mask;
}

function fltr(a,n)
{
	return (a/n|0)*n;
}
function filter_imgData(im, callback)
{
	
	
	var mask=mod_filter_getMask();
	
	
	
	 for (var i = 0; i < im.data.length; i += 4) {
		 
		im.data[i]=fltr(im.data[i],mask[0]);
		im.data[i+1]=fltr(im.data[i+1],mask[1]);
		im.data[i+2]=fltr(im.data[i+2],mask[2]);
		im.data[i+3]=fltr(im.data[i+3],mask[3]);
		 
		 
		 
	 }
	 
	 callback(im);
}

function filter_colors_imgData(im,filter)
{
        var palette = getArrayOfSortedColors(im);
        palette.splice(filter);       

        for (var i = 0; i < im.data.length-4; i += 4) {

			if(getIndexOfIntegerColor(palette,fromBytesInt32([im.data[i],im.data[i+1],im.data[i+2],im.data[i+3]]))==-1)
			{
				im.data[i]=0;
				im.data[i+1]=0;
				im.data[i+2]=0;
				im.data[i+3]=255;
			}
        }
		
        return im;
}




 // use Euclidian distance to find closest color
    function rt_mapColorToPalette(palette,red,green,blue){
        var color,diffR,diffG,diffB,diffDistance,mappedColor;
        var distance=25000;
        for(var i=0;i<palette.length;i++){
            color=palette[i];
            diffR=( color.r - red );
            diffG=( color.g - green );
            diffB=( color.b - blue );
            diffDistance = diffR*diffR + diffG*diffG + diffB*diffB;
            if( diffDistance < distance  ){ 
                distance=diffDistance; 
                mappedColor=palette[i]; 
            };
        }
        return(mappedColor);
    }
	
function rt_compareColors(arr,arr2,lim)
{
	for(var j=0;j<arr.length;j++)
	{
		var df = Math.abs(arr[j]-arr2[j]);
		if(df>lim)return false;
	}
	return true;
}

function removeTuman(im0,im)
{
	var colors = getColors(im0);
	// var r=0;
	// var g=0;
	// var b=0;
	// for (var i = 0; i < colors.length; i ++) {
		
		// r += colors[i][0];
		// g += colors[i][1];
		// b += colors[i][2];
	// }
	
	
	
	var rn = (colors.length/3|0)+1;
	// if(rn>255) rn=255;
	// var rg = g/colors.length|0;
	// if(rg>255) rg=255;
	// var rb = b/colors.length|0;
	// if(rb>255) rb=255;
	
	for (var i = 0; i < im.data.length; i += 4) {
		
		
		var color=getColorArrayFromImageDataByIndex(im,i);
		//var color1 = rt_mapColorToPalette(colors,color[0],color[1],color[2]);
		//if(color1==undefined) color1=color;
		
		// for (var t = 0; t < colors.length; t ++) {
		
		// if(rt_compareColors(colors[t],color,30)) {color=colors[t];break;}
	// }
		
		
		
		im.data[i]=(color[0]/rn|0)*rn;
				im.data[i+1]=(color[1]/rn|0)*rn;
				im.data[i+2]=(color[2]/rn|0)*rn;
				im.data[i+3]=255;
		
	}
	return im;
}















