function ippbp_imgData(im0, callback)
{
	
	var w = im0.width;
	var h = im0.height;
	var colors=getColors(im0);
	var m=(w/2|0)-1;
	if((w%2==1)&&(h%2==1))
	{
		var cx = w/2|0;
		var cy = h/2|0;
		var levelx=1;
		var levely=1;
		var levelxx=2;
		
		for(var jj=0;jj<m;jj++)
		{
		var rnd_color=colors[getRandomInt(0,colors.length)];
		var x=cx-levelx;
		var y=cy-levely;
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			x=x+1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			y=y+1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			x=x-1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			y=y-1;
		}
		
		levelx+=4;
		levelxx+=4*2;
		levely+=4;
		
		
		
		
		}
	}
	else if((w%2==0)&&(h%2==0))
	{
		
		
		var cx = w/2-1;
		var cy = h/2-1;
		var levelx=1;
		var levely=1;
		var levelxx=3;
		
		for(var jj=0;jj<m;jj++)
		{
		var rnd_color=colors[getRandomInt(0,colors.length)];
		
		var x=cx-levelx;
		var y=cy-levely;;
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			x=x+1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			y=y+1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			x=x-1;
		}
		
		for (var n = 0; n < levelxx; n++)
		{
			
			im0 = fillRectangleFast(im0, x,y,1,1,rnd_color );
			y=y-1;
		}
		
		levelx+=4;
		levelxx+=4*2;
		levely+=4;
		//levelyy+=2;
		}
		
		
		
	}
	
	
	
			// for (var y = 0; y < h; y++) {
		

			// for (var x = 0; x < w; x++) {
				
					
					// var idx = (w * y + x) << 2;
					// var color = getColorArrayFromImageDataByIndex(im0,idx);
					// if( palette[ind1][0]==fromBytesInt32(color) ) 
					// { 
						
						// im0 = setPoint(im0,w, x,y,0,0,fill_color );
						// //global_array_of_removed_points.push([x,y]);
					// }
					
					
					
				// }
			// }
			// var r2canvas = document.getElementById("canvas0");
	// r2canvas.width = im0.width;
	// r2canvas.height = im0.height;
	// var r2ctx = r2canvas.getContext("2d");
	// r2ctx.putImageData(im0,0,0);	
	// }
	// else
	

	callback(im0);
	
	}