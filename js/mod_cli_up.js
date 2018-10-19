var global_up_counter=1;

function mod_cli_up_getPartOfImageData(im,x,y,w,h)
{
	var canvas = document.createElement('canvas');
	canvas.width = im.width;
	canvas.height = im.height;
	var context = canvas.getContext("2d");
	context.putImageData(im,0,0);
	return context.getImageData(x, y, w, h);
}



function mod_cli_up_up_image_data( imageData ){

	
	
	var imageDataHalf =  mod_cli_up_getPartOfImageData(imageData,0,0,imageData.width/2,imageData.height/2);
	
	
	var imageDataHalfPart = mod_cli_up_getPartOfImageData(imageDataHalf,0,0,imageDataHalf.width-1,imageDataHalf.height-1);
	
	
	var imageDataW1 =  mod_cli_up_getPartOfImageData(imageDataHalf,0,imageDataHalf.height-1,imageDataHalf.width,1);
	
	var imageDataH1 =  mod_cli_up_getPartOfImageData(imageDataHalf,imageDataHalf.width-1,0,1,imageDataHalf.height);
	
	
	
	
	
	var canvas2 = document.createElement("canvas");
	canvas2.width=imageDataHalf.width;
	canvas2.height=imageDataHalf.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(imageDataW1,0,0);
	context2.putImageData(imageDataH1,0,0);
	context2.putImageData(imageDataHalfPart,1,1);
	
	
	
	
	var im = context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	return vortex(im);
	
	
}




function mod_cli_up_reverse_up_image_data( imageData ){

	
	
	var imageDataHalf =  mod_cli_up_getPartOfImageData(imageData,0,0,imageData.width/2,imageData.height/2);
	
	
	var imageDataHalfPart = mod_cli_up_getPartOfImageData(imageDataHalf,1,1,imageDataHalf.width-1,imageDataHalf.height-1);
	
	
	var imageDataW1 =  mod_cli_up_getPartOfImageData(imageDataHalf,0,0,imageDataHalf.width,1);
	
	var imageDataH1 =  mod_cli_up_getPartOfImageData(imageDataHalf,0,0,1,imageDataHalf.height);
	
	
	
	
	
	var canvas2 = document.createElement("canvas");
	canvas2.width=imageDataHalf.width;
	canvas2.height=imageDataHalf.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(imageDataW1,0,imageDataHalf.height-1);
	context2.putImageData(imageDataH1,imageDataHalf.width-1,0);
	context2.putImageData(imageDataHalfPart,0,0);
	
	
	
	
	var im = context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	return vortex(im);
	
	
}


