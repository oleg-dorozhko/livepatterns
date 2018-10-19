function shift_wrapper()
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	
	//we can also cansel half and vortex if we want
	var im = __half_imageData(context.getImageData(0,0,canvas.width,canvas.height));

	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	var counter = Number(document.getElementById("shift_hor_counter").value);
	counter++;
	document.getElementById("shift_hor_counter").value=counter;
	
	var im2 = __shift(im,dx,dy);
	//we can also cansel half and vortex if we want
	im2 = vortex(fill_all(im,im2));
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");context.putImageData(im2,0,0);
}



















function shift()
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	var im = context.getImageData(0,0,canvas.width,canvas.height);

	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	var im2 = __shift(im,dx,dy);
	
	im2 = fill_all(im,im2);
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");context.putImageData(im2,0,0);
}

function __shift(im,dx,dy)
{
	
	var w = im.width;
	var h = im.height;
	
	var canvas2 = document.createElement("canvas");
	canvas2.width = w;
	canvas2.height = h;
	var context2 = canvas2.getContext("2d");
		
	var im2 = context2.getImageData(0,0,canvas2.width,canvas2.height);

	var n=0;
	var x = 0;
	
	for (var y = 0; y < h; y+=dy)
	{
			
	
			x=n;
					
			var idx = (w * y + x) << 2;
			var im4 = get_im_line(im,x,y,im.width-x,dy);
			var im5 = shift_hline_left(im4);
			context2.putImageData(im5,x,y);
					
				
			n+=dx;
	}

	return  context2.getImageData(0,0,canvas2.width,canvas2.height);
	
}

function get_im_line(im0,x,y,w2,h2)
{
	var w = im0.width;
	var h = im0.height;
	
	var canvas2 = document.createElement("canvas");
	canvas2.width = w;
	canvas2.height = h;
	var context2 = canvas2.getContext("2d");
	context2.putImageData(im0,0,0);	
	
	return context2.getImageData(x,y,w2,h2);
	
}

function shift_hline_left(im0)
{
	var w = im0.width;
	var h = im0.height;
	
	var canvas2 = document.createElement("canvas");
	canvas2.width = w;
	canvas2.height = h;
	var context2 = canvas2.getContext("2d");
		
	var im2 = context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	for (var y = 0; y < h; y++)
	{
		var idx = (w * y + 0) << 2;
		var new_idx = (w * y + (w-1)) << 2;
		
		im2.data[new_idx] = im0.data[idx];
		im2.data[new_idx+1] = im0.data[idx+1];
		im2.data[new_idx+2] = im0.data[idx+2];
		im2.data[new_idx+3] = im0.data[idx+3];
	}
	
	for (var y = 0; y < h; y++)
	{
		for (var x = 1; x < w; x++)
		{
				
			var idx = (w * y + x) << 2;
			var new_idx = (w * y + (x-1)) << 2;
			
			im2.data[new_idx] = im0.data[idx];
			im2.data[new_idx+1] = im0.data[idx+1];
			im2.data[new_idx+2] = im0.data[idx+2];
			im2.data[new_idx+3] = im0.data[idx+3];
		
		}
	}
	
	return im2;
	
}


function getColorArrayFromImageDataByIndex(imgData0, idx)
{
	
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}

	

function compareColors(color,color2)
{
	if(
			(color2[0]==color[0]) && 
			(color2[1]==color[1]) && 
			(color2[2]==color[2]) && 
			(color2[3]==color[3]) 
							
						
		)
		{
			return true;
			
		}	
		
		return false;
}

function fill_all(im0,im2)
{
	var w = im0.width;
	var h = im0.height;
	
	
	for (var y = 0; y < h; y++)
	{
		for (var x = 0; x < w; x++)
		{
				
			var idx = (w * y + x) << 2;
			var new_idx=idx;
			var color =  getColorArrayFromImageDataByIndex(im2,idx);
			if(compareColors(color,[0,0,0,0])==true)
			{
				im2.data[new_idx] = im0.data[idx];
				im2.data[new_idx+1] = im0.data[idx+1];
				im2.data[new_idx+2] = im0.data[idx+2];
				im2.data[new_idx+3] = im0.data[idx+3];
			}
		
		}
	}
	
	return im2;
}

function shift2_wrapper()
{
	
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	var im = __half_imageData(context.getImageData(0,0,canvas.width,canvas.height));

	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	var counter = Number(document.getElementById("shift_vert_counter").value);
	counter++;
	document.getElementById("shift_vert_counter").value=counter;
	
	var im2 = __shift2(im,dx,dy);
	
	im2 = vortex(fill_all(im,im2));
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");context.putImageData(im2,0,0);
	
	
	
	
	
	
	
	
	
	
	
}

function shift2()
{
	
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	var im = context.getImageData(0,0,canvas.width,canvas.height);

	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	var im2 = __shift2(im,dx,dy);
	
	im2 = fill_all(im,im2);
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");context.putImageData(im2,0,0);
}



function __shift2(im,dx,dy)
{
	
	var w = im.width;
	var h = im.height;
	
	var canvas2 = document.createElement("canvas");
	canvas2.width = w;
	canvas2.height = h;
	var context2 = canvas2.getContext("2d");
		
	var im2 = context2.getImageData(0,0,canvas2.width,canvas2.height);

	var n=0;
	var y = 0;
	
	for (var x = 0; x < w; x+=dx)
	{
			
	
			y=n;
					
			var idx = (w * y + x) << 2;
			var im4 = get_im_line(im,x,y,dx,im.height-y);
			var im5 = shift_vline_down(im4);
			context2.putImageData(im5,x,y);
					
				
			n+=dy;
	}

	return  context2.getImageData(0,0,canvas2.width,canvas2.height);
	
}


function shift_vline_down(im0)
{
	var w = im0.width;
	var h = im0.height;
	
	var canvas2 = document.createElement("canvas");
	canvas2.width = w;
	canvas2.height = h;
	var context2 = canvas2.getContext("2d");
		
	var im2 = context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	for (var x = 0; x < w; x++)
	{
		var idx = (w * 0 + x) << 2;
		var new_idx = (w * (h-1) + x) << 2;
		
		im2.data[new_idx] = im0.data[idx];
		im2.data[new_idx+1] = im0.data[idx+1];
		im2.data[new_idx+2] = im0.data[idx+2];
		im2.data[new_idx+3] = im0.data[idx+3];
	}
	
	for (var y = 1; y < h; y++)
	{
		for (var x = 0; x < w; x++)
		{
				
			var idx = (w * y + x) << 2;
			var new_idx = (w * (y-1) + x) << 2;
			
			im2.data[new_idx] = im0.data[idx];
			im2.data[new_idx+1] = im0.data[idx+1];
			im2.data[new_idx+2] = im0.data[idx+2];
			im2.data[new_idx+3] = im0.data[idx+3];
		
		}
	}
	
	return im2;
	
}


















	