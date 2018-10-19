

function getColorArrayFromImageDataByIndex(imgData0, idx)
{
	
		
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}



function getAverageColor(colors)
{
	var f=false;
	var i0=0;
	var i1=0;
	var i2=0;
	var i3=0;
	for(var i=0;i<colors.length;i++)
	{
		i0 +=colors[i][0];
		i1 +=colors[i][1];
		i2 +=colors[i][2];
		//i3 += 255;//colors[i][3];
	}
	
	return [i0/colors.length,i1/colors.length,i2/colors.length,255];//i3/colors.length];
	
}
	
function setPointByIndex(im0, idx,color)
{
	
	
	im0.data[idx] = color[0];
	im0.data[idx+1] = color[1];
	im0.data[idx+2] = color[2];
	im0.data[idx+3] = color[3];
	
	return im0;
}

function makered(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	
	
	

	// var col =  getAllEqualRndColor();
	// var r = col[0];
	// var g = col[1];
	// var b = col[2];
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					if( ( im0.data[idx] > im0.data[idx+1] ) && ( im0.data[idx] > im0.data[idx+2] ) )
					{
						var r = (im0.data[idx] + 10) % 256;	
						var g = (im0.data[idx+1] - 10) % 256;
						var b = (im0.data[idx+2] - 10) % 256;	
						im0.data[idx] =  r;
						im0.data[idx+1] =  g;
						im0.data[idx+2] =  b;
						//im0.data[idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
						//im0.data[idx+2] =  cyclic_random_plus ( im0.data[idx+2], b);
						//im0.data[idx+3] =  255;
					
					}
					else if( ( im0.data[idx+1] > im0.data[idx] ) && ( im0.data[idx+1] > im0.data[idx+2] ) )
					{
						var r = (im0.data[idx] - 10) % 256;	
						var g = (im0.data[idx+1] + 10) % 256;
						var b = (im0.data[idx+2] - 10) % 256;	
						im0.data[idx] =  r;
						im0.data[idx+1] =  g;
						im0.data[idx+2] =  b;
						
					}
					else if( ( im0.data[idx+2] > im0.data[idx] ) && ( im0.data[idx+2] > im0.data[idx+1] ) )
					{
						var r = (im0.data[idx] - 10) % 256;	
						var g = (im0.data[idx+1] - 10) % 256;
						var b = (im0.data[idx+2] + 10) % 256;	
						im0.data[idx] =  r;
						im0.data[idx+1] =  g;
						im0.data[idx+2] =  b;
						
					}
					else{
						
						var color = getColorArrayFromImageDataByIndex(im0, idx);
						color = getAverageColor([color]);
						im0= setPointByIndex(im0, idx,color);
						
					}
					
					
				}
			}
			
		return im0;
}
function condition2_random_inv ( a1, a2 )
{
	if(a2==0) return a1;
	return 255;
}






function make_color(im0,numcolor,n)
{
	
	
	var w = im0.width;
	var h = im0.height;

	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var gr = im0.data[idx+numcolor] + n;
					if( gr > 255) gr=im0.data[idx+numcolor];
					else if( gr < 0) gr=im0.data[idx+numcolor];
					else im0.data[idx+numcolor]=gr;
					
					
				}
			}
			

			
		return im0;
}



























function makegreen(im0,n)
{
	
	
	var w = im0.width;
	var h = im0.height;
	var mred=0;
	var mgreen=0;
	var mblue=0;
	var nred=255;
	var ngreen=255;
	var nblue=255;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var gr = im0.data[idx+1] + n;
					if( gr > 255) gr=255;
					if( gr < 0) gr=0;
					im0.data[idx+1]=gr;
					// if( im0.data[idx] > mred ) mred=im0.data[idx];
					// if( im0.data[idx+1] > mgreen) mgreen=im0.data[idx+1] ;
					// if( im0.data[idx+2] > mblue) mblue=im0.data[idx+2] ;
					
					// if( im0.data[idx] < nred ) nred=im0.data[idx];
					// if( im0.data[idx+1] < ngreen) ngreen=im0.data[idx+1] ;
					// if( im0.data[idx+2] < nblue) nblue=im0.data[idx+2] ;
					
					
				}
			}
			
			
		// var hmred=getRandomInt(0, (mred-nred)/2|0)+nred;	
		// var hmgreen=getRandomInt(0, (mgreen-ngreen)/2|0)+ngreen;		
		// var hmblue=getRandomInt(0, (mblue-nblue)/2|0)+nblue;	
		
		
		
			// var col = getAllEqualRndColor();
	// var r = col[0];
	// var g = col[1];
	// var b = col[2];
		
		
		
		
		
		
		
		
		
		
			// for (var y = 0; y < h; y++) {
		

			// for (var x = 0; x < w; x++) {
				
					
					// var idx = (w * y + x) << 2;
					// var new_idx = idx;
					// if( ( im0.data[idx] > im0.data[idx+1] ) && ( im0.data[idx] > im0.data[idx+2] ) ) im0.data[new_idx] =   condition2_random_inv ( im0.data[idx], r );
				




		 // if( ( im0.data[idx+1] > im0.data[idx] ) && ( im0.data[idx+1] > im0.data[idx+2] ) )		im0.data[new_idx+1] =   condition2_random_inv( im0.data[idx+1], g );
		// if( ( im0.data[idx+2] > im0.data[idx] ) && ( im0.data[idx+2] > im0.data[idx+1] ) )			im0.data[new_idx+2] =  condition2_random_inv ( im0.data[idx+2], b );
				// im0.data[new_idx+3] =  255;//cyclic_random_plus ( im0.data[idx+3], a );
					
					
					
					
					// // if( ( im0.data[idx] > im0.data[idx+1] ) && ( im0.data[idx] > im0.data[idx+2] ) )
					// // {
						// // if(im0.data[idx] > hmred) im0.data[idx] = (im0.data[idx] + 10) % 256;	
						// // else  im0.data[idx] = (im0.data[idx] + 10) % 256;	
						
					
					// // }
					// // // else if( ( im0.data[idx+1] > im0.data[idx] ) && ( im0.data[idx+1] > im0.data[idx+2] ) )
					// // {
						// // if(im0.data[idx+1] > hmgreen) im0.data[idx+1] = (im0.data[idx+1] + 10) % 256;	
						// // else  im0.data[idx+1] = (im0.data[idx+1] + 10) % 256;	
						
					// // }
					// // // else if( ( im0.data[idx+2] > im0.data[idx] ) && ( im0.data[idx+2] > im0.data[idx+1] ) )
					// // {
						// // if(im0.data[idx+2] > hmblue) im0.data[idx+2] = (im0.data[idx+2] + 10) % 256;	
						// // else  im0.data[idx+2] = (im0.data[idx+2] + 10) % 256;
						
					// // }
					// // else{
						
						// // var color = getColorArrayFromImageDataByIndex(im0, idx);
						// // color = [0,0,0,255];//getAverageColor([color]);
						// // im0= setPointByIndex(im0, idx,color);
						
					// // }
					
					
				// }
			// }
			
			
		return im0;
}

function makeblue(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					if( ( im0.data[idx+2] > im0.data[idx] ) && ( im0.data[idx+2] > im0.data[idx+1] ) )
					{
						var r = (im0.data[idx] - 10) % 256;	
						var g = (im0.data[idx+1] - 10) % 256;
						var b = (im0.data[idx+2] + 10) % 256;	
						im0.data[idx] =  r;
						im0.data[idx+1] =  g;
						im0.data[idx+2] =  b;
						
					}
					else{
						
						var color = getColorArrayFromImageDataByIndex(im0, idx);
						color = getAverageColor([color]);
							im0= setPointByIndex(im0, idx,color);
						
					}
					
					
					
				}
			}
			
		return im0;
}



function makergbplusminus(im0,mask)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
						for(var n=0;n<4;n++)
						{
							var r = (im0.data[idx+n] + mask[n]);	
							if(r>255) r=r-256;
							else if(r<0) r=256+r;
							im0.data[idx+n] = r;
						}
						
						
						
					}
					
				}
			
			
		return im0;
}


function makergbplusminus0(im0,mask)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
						for(var n=0;n<4;n++)
						{
							var r = im0.data[idx+n] / mask[n]|0;	
							r=r*mask[n]+(mask[n]/2|0);
							if(r>255) r=255;
							
							im0.data[idx+n] = r;
						}
						
						
						
					}
					
				}
			
			
		return im0;
}



function makergbplusminus2(im0,mask)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
						for(var n=0;n<4;n++)
						{
							var r = (im0.data[idx+n] + mask[n]);	
							if(r>255) r=255;
							else if(r<0) r=0;
							im0.data[idx+n] = r;
						}
						
						
						
					}
					
				}
			
			
		return im0;
}


function makegreen2(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
				//	if( ( im0.data[idx+1] > im0.data[idx] ) && ( im0.data[idx+1] > im0.data[idx+2] ) )
					{
						var g = (im0.data[idx+1] - 5);	
						if(g<0) g=255;
						im0.data[idx+1] = g;
					
					}
					
				}
			}
			
		return im0;
}


function makeblue2(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
				//	if( ( im0.data[idx+2] > im0.data[idx+1] ) && ( im0.data[idx+2] > im0.data[idx] ) )
					{
						var b = (im0.data[idx+2] - 5);	
						if(b<0) b=255;
						im0.data[idx+2] = b;
					
					}
					
				}
			}
			
		return im0;
}




function makerazn(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					if( im0.data[idx] > 127 )
					{
						var r = im0.data[idx] + 1 ;
						if(r>255) r=255;
						im0.data[idx] = r;
					}
					else
					{
						var r = im0.data[idx] - 1 ;
						if(r<0) r=0;
						im0.data[idx] = r;
					}
					/***    ***/
					if( im0.data[idx+1] > 127 )
					{
						var r = im0.data[idx+1] + 1 ;
						if(r>255) r=255;
						im0.data[idx+1] = r;
					}
					else
					{
						var r = im0.data[idx+1] - 1 ;
						if(r<0) r=0;
						im0.data[idx+1] = r;
					}

					
					
					if( im0.data[idx+2] > 127 )
					{
						var r = im0.data[idx+2] + 1 ;
						if(r>255) r=255;
						im0.data[idx+2] = r;
					}
					else
					{
						var r = im0.data[idx+2] - 1 ;
						if(r<0) r=0;
						im0.data[idx+2] = r;
					}
					
						// var g = (im0.data[idx+1] + 50) % 256;	
						
						// im0.data[idx+1] =  g;
						
						// var b = (im0.data[idx+2] + 50) % 256;	
						
						// im0.data[idx+2] =  b;
						
						
					}
					
				}
			
			
		return im0;
}





















