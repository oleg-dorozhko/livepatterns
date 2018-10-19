function shift_both_wrapper()
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	
	//we can also cansel half and vortex if we want
	var im = context.getImageData(0,0,canvas.width,canvas.height)
	
	//im = __half_imageData(im);

	// var dx = Number(document.getElementById("pixel_w_size").value);
	// var dy = Number(document.getElementById("pixel_h_size").value);
	
	// var counter = Number(document.getElementById("shift_hor_counter").value);
	// counter++;
	// document.getElementById("shift_hor_counter").value=counter;
	
	// var im2 = __shift(im,dx,dy);
	// //we can also cansel half and vortex if we want
	// var counter2 = Number(document.getElementById("shift_vert_counter").value);
	// counter2++;
	// document.getElementById("shift_vert_counter").value=counter2;
	
	// var im3 = __shift2(im,dx,dy);
	
	// //
	
	// im2=fill_all(im2,im3)
	
	// im2 = vortex(im2);
	
	
	im2 = shift_both_imgData(im);
	
	
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
}




function shift_both_imgData(im0,s)
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	// var counter = Number(document.getElementById("shift_hor_counter").value);
	// if(counter>=im0.width/4)
	// {
		// document.getElementById("shift_reverse_switch").checked=true;
		// return im0;
	// }
	
	
	// counter++;
	// document.getElementById("shift_hor_counter").value=counter;
	
	//var canvas = document.getElementById(canvas_ish_id);
	//var context = canvas.getContext("2d");
	var im = __half_imageData(im0);
	//im = __half_imageData(im);
	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	
		
	
	var im2 = __shift(im,dx,dy);
	//im2 = vortex(im2);
	//im2 = vortex(fill_all(im,im2));
	
	//var counter = Number(document.getElementById("shift_vert_counter").value);
	//counter++;
	//document.getElementById("shift_vert_counter").value=counter;
	
	// var im = __half_imageData(im2);

	var im3 = __shift2(im,dx,dy);
	
	//im3 = vortex(im3);
	
	im2=fill_all(im2,im3)
	
	// var canvas = document.getElementById(canvas_res_id);
	// var w = im0.width;
	// var h = im0.height;
	// canvas.width = w;
	// canvas.height = h;
	// var context = canvas.getContext("2d");
	// context.putImageData(im2,0,0);
	// var canvas = document.getElementById(canvas_ish_id);
	// var context = canvas.getContext("2d");context.putImageData(im2,0,0);
	
	return vortex(im2);
}





function shift_both_reverse_wrapper()
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	
	//we can also cansel half and vortex if we want
	var im = context.getImageData(0,0,canvas.width,canvas.height);
	
	// im = __half_imageData(im);

	// var dx = Number(document.getElementById("pixel_w_size").value);
	// var dy = Number(document.getElementById("pixel_h_size").value);
	
	// var counter = Number(document.getElementById("shift_hor_counter").value);
	// counter--;
	// document.getElementById("shift_hor_counter").value=counter;
	
	// var im2 = __shift_reverse(im,dx,dy);
	// //we can also cansel half and vortex if we want
	
	// var counter2 = Number(document.getElementById("shift_vert_counter").value);
	// counter2--;
	// document.getElementById("shift_vert_counter").value=counter2;
	// var im3 = __shift_reverse2(im,dx,dy);
	
	im2=shift_both_reverse_imgData(im);
	
	// im2=fill_all(im2,im3)
	
	
	// im2 = vortex(im2);
	
	var canvas = document.getElementById(canvas_res_id);
	var w = im2.width;
	var h = im2.height;
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
	var canvas = document.getElementById(canvas_ish_id);
	var context = canvas.getContext("2d");
	context.putImageData(im2,0,0);
}



function shift_both_reverse_imgData(im0,s)
{
	var canvas_ish_id = 'canvas0';
	var canvas_res_id = 'canvas0';
	
	// var counter = Number(document.getElementById("shift_hor_counter").value);
	// if(counter<= -im0.width/4)
	// {
		// document.getElementById("shift_reverse_switch").checked=false;
		// return im0;
	// }
	
	
	// counter--;
	// document.getElementById("shift_hor_counter").value=counter;
	
	// var canvas = document.getElementById(canvas_ish_id);
	// var context = canvas.getContext("2d");
	var im = __half_imageData(im0);
	//im = __half_imageData(im);
	var dx = Number(document.getElementById("pixel_w_size").value);
	var dy = Number(document.getElementById("pixel_h_size").value);
	
	
		
	
	var im2 = __shift_reverse(im,dx,dy);
	//im2 = vortex(im2);
	//im2 = vortex(fill_all(im,im2));
	
	//var counter = Number(document.getElementById("shift_vert_counter").value);
	//counter--;
	//document.getElementById("shift_vert_counter").value=counter;
	
	// var im = __half_imageData(im2);

	var im3 = __shift_reverse2(im,dx,dy);
	
	//im3 = vortex(im3);
	
	im2=fill_all(im2,im3)
	
	// var canvas = document.getElementById(canvas_res_id);
	// var w = im0.width;
	// var h = im0.height;
	// canvas.width = w;
	// canvas.height = h;
	// var context = canvas.getContext("2d");
	// context.putImageData(im2,0,0);
	// var canvas = document.getElementById(canvas_ish_id);
	// var context = canvas.getContext("2d");context.putImageData(im2,0,0);
	
	return vortex(im2);
}


























