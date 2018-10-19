function plus(im0 )
{
	
	
	var w = im0.width;
	var h = im0.height;
	
	// if( h * 2 > 1200 || w*2 > 1200 )
		// {
			
			// errror("mod_mdown: error: too big size (need result height * 2 <= 1200 || width <= 1200)");
			// return;
			
		// }
	
	
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w*2;
		canvas2.height = h*2;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);

	
			
			

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = canvas2.width * (y*2) + (x*2) << 2;
					var new_idx2 = canvas2.width * (y*2+1) + (x*2) << 2;
					
					im.data[new_idx] = im0.data[idx];
					im.data[new_idx+1] = im0.data[idx+1];
					im.data[new_idx+2] = im0.data[idx+2];
					im.data[new_idx+3] = im0.data[idx+3];
					
					im.data[new_idx+4] = im0.data[idx];
					im.data[new_idx+5] = im0.data[idx+1];
					im.data[new_idx+6] = im0.data[idx+2];
					im.data[new_idx+7] = im0.data[idx+3];
					
					im.data[new_idx2] = im0.data[idx];
					im.data[new_idx2+1] = im0.data[idx+1];
					im.data[new_idx2+2] = im0.data[idx+2];
					im.data[new_idx2+3] = im0.data[idx+3];
					
					im.data[new_idx2+4] = im0.data[idx];
					im.data[new_idx2+5] = im0.data[idx+1];
					im.data[new_idx2+6] = im0.data[idx+2];
					im.data[new_idx2+7] = im0.data[idx+3];
					
					
				}
			}

			
			return im;
			
			
			
}			