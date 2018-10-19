function half()
{
	
	//console.log("half");
	
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	var w = canvas.width;
	var h = canvas.height;
	
	if( ( w%2==1) && (h%2==1) )
	{
		var nw = (w/2|0)+1;
		var nh = (h/2|0)+1;	
		var im = context.getImageData(0,0,nw,nh);
		canvas.width = nw;
		canvas.height = nh;
		canvas.getContext("2d").putImageData(im,0,0);
		
	}
	else if( ( w%2==0) && (h%2==0) )
	{
		var nw = w/2;
		var nh = h/2;	
		var im = context.getImageData(0,0,nw,nh);
		canvas.width = nw;
		canvas.height = nh;
		canvas.getContext("2d").putImageData(im,0,0);
	}
	else if( ( w%2==1) && (h%2==0) )
	{
		
	}
	else if( ( w%2==0) && (h%2==1) )
	{
		
	}
		
	
}

function __half(id)
{
	
	//console.log("half");
	
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	var w = canvas.width;
	var h = canvas.height;
	
	if( ( w%2==1) && (h%2==1) )
	{
		var nw = (w/2|0)+1;
		var nh = (h/2|0)+1;	
		var im = context.getImageData(0,0,nw,nh);
		canvas.width = nw;
		canvas.height = nh;
		return im;
		
	}
	else if( ( w%2==0) && (h%2==0) )
	{
		var nw = w/2;
		var nh = h/2;	
		var im = context.getImageData(0,0,nw,nh);
		canvas.width = nw;
		canvas.height = nh;
		return im;
	}
	else if( ( w%2==1) && (h%2==0) )
	{
		
	}
	else if( ( w%2==0) && (h%2==1) )
	{
		
	}
	
}

function __frame_imageData(imageData,x,y,x2,y2)
{
	
	//console.log("half");
	var w = imageData.width;
	var h = imageData.height;
	
	var canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(imageData,0,0);


		var im = context.getImageData(x,y,x2-x,y2-y);
		
		return im;

}

function __half_imageData(imageData)
{
	
	//console.log("half");
	var w = imageData.width;
	var h = imageData.height;
	
	var canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	context.putImageData(imageData,0,0);

	if( ( w%2==1) && (h%2==1) )
	{
		var nw = (w/2|0)+1;
		var nh = (h/2|0)+1;	
		var im = context.getImageData(0,0,nw,nh);
		
		return im;
		
	}
	else if( ( w%2==0) && (h%2==0) )
	{
		var nw = w/2;
		var nh = h/2;	
		
		
		
	}
	else if( ( w%2==1) && (h%2==0) )
	{
		var nw = (w/2|0)+1;var nh = h/2;	
	}
	else if( ( w%2==0) && (h%2==1) )
	{
		var nh = (h/2|0)+1;	var nw = w/2;
	}
	var im = context.getImageData(0,0,nw,nh);return im;
}