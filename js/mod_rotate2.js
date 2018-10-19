function mod_rotate2_rotate777(im0,degree)
{
	var canvas0 = document.createElement("canvas");
	
	var w = im0.width;
	var h = im0.height;
	
	canvas0.width = w;
	canvas0.height = h;
	
	var context0 = canvas0.getContext("2d");
	context0.putImageData(im0,0,0);
	
	
	
	var canvas = document.createElement("canvas");
	
	var w = im0.width;
	var h = im0.height;
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Move registration point to the center of the canvas
	context.translate(canvas.width/2, canvas.height/2);

	context.rotate(degree*Math.PI / 180);

	// Move registration point back to the top left corner of canvas
	context.translate(-canvas.width/2, -canvas.height/2);

	
	context.drawImage(canvas0,0,0);
	
	
	return canvas.getContext("2d").getImageData(0,0,w,h);
	
}