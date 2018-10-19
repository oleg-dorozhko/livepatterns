// window.addEventListener('load', function(){
	
// });

// function triple()
// {
	
	// var isn_canvas = document.getElementById("result_canvas");
	// isn_canvas.width = Number(document.getElementById("w_result_canvas").value);
	// isn_canvas.height = Number(document.getElementById("h_result_canvas").value);
	// var isn_ctx = isn_canvas.getContext("2d");
	// isn_ctx.clearRect(0,0,isn_canvas.width,isn_canvas.height);
	// var isn_imgData=isn_ctx.getImageData(0,0,isn_canvas.width,isn_canvas.height);
	
////	var rcanvas = document.getElementById(getBorderedCanvas().id);
	
	// for(var i=0;i<3;i++)
	// {
	
		// var rcanvas = document.getElementById("canvas_"+i);
		// var rctx = rcanvas.getContext("2d");
		// var im0=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);

		// var y0 = Number(document.getElementById("y_pos_for_"+i).value);
		// var x0 = Number(document.getElementById("x_pos_for_"+i).value);
		
		// isn_imgData = setImageData2ResultCanvas(isn_imgData,im0,x0,y0 );
	// }
	
	// isn_ctx.putImageData(isn_imgData,0,0);
	
	
// }


function mod_triple_compareColors(color,color2)
{
	if(
			(color2[0]==color[0]) && 
			(color2[1]==color[1]) && 
			(color2[2]==color[2]) 
			// && (color2[3]==color[3]) 
							
						
		)
		{
			return true;
			
		}	
		
		return false;
}

function mod_triple_getColorArrayFromImageDataByIndex(imgData0, idx)
{
	
		
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}
	
	
	
function mod_triple_getAverageColor(colors)
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
	
	
	
	
	
	
	
	
	
	
	function setImageData2ResultCanvas(isn_imgData,im0, x0,y0 )
	{
	var w = isn_imgData.width;
	var h = isn_imgData.height;
	
	var n=0;
	var m=0;
	var h0 = im0.height;
	var w0 = im0.width;
	
	
			for (var y = y0; y < (h0+y0); y++) {
		
			n=0;
			for (var x = x0; x < (w0+x0); x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var idx2 = (w0*m +n)<<2;
					
					var color = mod_triple_getColorArrayFromImageDataByIndex(isn_imgData,idx);
					
					if(mod_triple_compareColors(color,[0,0,0,0]))
					{
						isn_imgData.data[idx] = im0.data[idx2];
						isn_imgData.data[idx+1] = im0.data[idx2+1]; 
						isn_imgData.data[idx+2] = im0.data[idx2+2];
						isn_imgData.data[idx+3] = 255;//im0.data[idx+3] =  ;
					}
					else
					{
						var color2 = mod_triple_getColorArrayFromImageDataByIndex(im0,idx2);
						var avc = mod_triple_getAverageColor([color,color2]);
						
						isn_imgData.data[idx] = avc[0];
						isn_imgData.data[idx+1] = avc[1]; 
						isn_imgData.data[idx+2] = avc[2];
						isn_imgData.data[idx+3] = 255;//im0.data[idx+3] =  ;
					
					
					
					
					
					
					
					
					// var new_idx = idx;
					// var t = im0.data[idx];
					// im0.data[new_idx] =  im0.data[idx+1];
					// im0.data[new_idx+1] = im0.data[idx+2]; 
					// im0.data[new_idx+2] =  t;
					// im0.data[new_idx+3] =  im0.data[idx+3];
					
					
					}
					
					n++;
					
				}
				
				m++;
			}
			
			return isn_imgData;
		
	}