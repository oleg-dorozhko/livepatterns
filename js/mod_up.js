var global_up_counter=1;

function getPartOfImageData(im,x,y,w,h)
{
	var canvas = document.createElement('canvas');
	canvas.width = im.width;
	canvas.height = im.height;
	var context = canvas.getContext("2d");
	context.putImageData(im,0,0);
	return context.getImageData(x, y, w, h);
}



function up(id){

//global_up_counter++;
global_up_counter = Number(document.getElementById('up_step').value);
	var canvas = document.getElementById(id);
	var context = canvas.getContext("2d");
	var w = canvas.width;
	var h = canvas.height;
	var im=null;
	if( ( w%2==1) && (h%2==1) )
	{
		var nw = (w/2|0)+1;
		var nh = (h/2|0)+1;	
		im = context.getImageData(global_up_counter,global_up_counter,nw-global_up_counter,nh-global_up_counter);
	
		//canvas.width = nw;
		//canvas.height = nh;
		
		
	}
	else if( ( w%2==0) && (h%2==0) )
	{
		var nw = w/2;
		var nh = h/2;	
		im = context.getImageData(global_up_counter,global_up_counter,nw-global_up_counter,nh-global_up_counter);
		//canvas.width = nw;
		//canvas.height = nh;
		//canvas.getContext("2d").putImageData(im,0,0);
	}
		
if(global_up_counter>nw)
{
	//alert('too many ups');
	global_up_counter=1;
	up(id);
}

var	im0 = context.getImageData(0,0,global_up_counter,global_up_counter);
	var	im1 = context.getImageData(global_up_counter,0,nw-global_up_counter,global_up_counter);
	var	im2 = context.getImageData(0,global_up_counter,global_up_counter,nh-global_up_counter);
	var canvas2 = document.createElement("canvas");
	canvas2.width=w;
	canvas2.height=h;
	var context2 = canvas2.getContext("2d");
	canvas2.getContext("2d").putImageData(im,0,0);
	canvas2.getContext("2d").putImageData(im0,nw-global_up_counter,nh-global_up_counter);
	
	//im1 = mirror_right(im1);
	//im1 = getPartOfImageData(im1,im1.width/2,0,im1.width/2,im1.height);
	canvas2.getContext("2d").putImageData(im1,0,nh-global_up_counter);
	
	//im2 = mirror_down(im2);
	//im2 = getPartOfImageData(im2,0,im2.height/2,im2.width,im2.height/2);
	canvas2.getContext("2d").putImageData(im2,nw-global_up_counter,0);
	
	im=canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);
	
	/**
	var n=0;
	var y=nh-1;
	for(var i=nw-1;i>=0;i--)
	{
		
		var idx = (w * y + i) << 2;

		im.data[idx+0] = im1.data[n];
		im.data[idx+1] = im1.data[n+1];
		im.data[idx+2] = im1.data[n+2];
		im.data[idx+3] = im1.data[n+3];
					
		n+=4;			

	}
	var x=nw-1;
	var m=0;
	for(var j=nh-1;j>=0;j--)
	{
		var idx = (w * j + x) << 2;

		im.data[idx+0] = im2.data[m];
		im.data[idx+1] = im2.data[m+1];
		im.data[idx+2] = im2.data[m+2];
		im.data[idx+3] = im2.data[m+3];
					
		m+=4;	
	}
	
	canvas2.getContext("2d").putImageData(im,0,0);
		*/
	im = mirror_right(canvas2.getContext("2d").getImageData(0,0,nw,nh));
	
	im = mirror_down(im);
	

	canvas.width=im.width;
	canvas.height=im.height;
	canvas.getContext("2d").putImageData(im,0,0);
	
	return im;

}


function Old_up_image_data( imageData, up_counter ){

	
	var canvas = document.createElement("canvas");
	canvas.width=imageData.width;
	canvas.height=imageData.height;
	var context = canvas.getContext("2d");
	context.putImageData(imageData,0,0);
	var w = canvas.width;
	var h = canvas.height;
	var im=null;
	if( ( w%2==1) && (h%2==1) )
	{
		var nw = (w/2|0)+1;
		var nh = (h/2|0)+1;	
		im = context.getImageData(up_counter,up_counter,nw-up_counter,nh-up_counter);
	
		//canvas.width = nw;
		//canvas.height = nh;
		
		
	}
	else if( ( w%2==0) && (h%2==0) )
	{
		var nw = w/2;
		var nh = h/2;	
		im = context.getImageData(up_counter,up_counter,nw-up_counter,nh-up_counter);
		//canvas.width = nw;
		//canvas.height = nh;
		//canvas.getContext("2d").putImageData(im,0,0);
	}
		
if(up_counter>nw)
{
	//alert('too many ups');
	up_counter=1;
	return up_image_data( imageData, 1 );
}
else
{

var	im0 = context.getImageData(0,0,up_counter,up_counter);
	var	im1 = context.getImageData(up_counter,0,nw-up_counter,up_counter);
	var	im2 = context.getImageData(0,up_counter,up_counter,nh-up_counter);
	var canvas2 = document.createElement("canvas");
	canvas2.width=w;
	canvas2.height=h;
	var context2 = canvas2.getContext("2d");
	canvas2.getContext("2d").putImageData(im,0,0);
	canvas2.getContext("2d").putImageData(im0,nw-up_counter,nh-up_counter);
	
	//im1 = mirror_right(im1);
	//im1 = getPartOfImageData(im1,im1.width/2,0,im1.width/2,im1.height);
	canvas2.getContext("2d").putImageData(im1,0,nh-up_counter);
	
	//im2 = mirror_down(im2);
	//im2 = getPartOfImageData(im2,0,im2.height/2,im2.width,im2.height/2);
	canvas2.getContext("2d").putImageData(im2,nw-up_counter,0);
	
	im=canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);
	
	/**
	var n=0;
	var y=nh-1;
	for(var i=nw-1;i>=0;i--)
	{
		
		var idx = (w * y + i) << 2;

		im.data[idx+0] = im1.data[n];
		im.data[idx+1] = im1.data[n+1];
		im.data[idx+2] = im1.data[n+2];
		im.data[idx+3] = im1.data[n+3];
					
		n+=4;			

	}
	var x=nw-1;
	var m=0;
	for(var j=nh-1;j>=0;j--)
	{
		var idx = (w * j + x) << 2;

		im.data[idx+0] = im2.data[m];
		im.data[idx+1] = im2.data[m+1];
		im.data[idx+2] = im2.data[m+2];
		im.data[idx+3] = im2.data[m+3];
					
		m+=4;	
	}
	
	canvas2.getContext("2d").putImageData(im,0,0);
		*/
	im = mirror_right(canvas2.getContext("2d").getImageData(0,0,nw,nh));
	
	im = mirror_down(im);
	

	//canvas.width=im.width;
	//canvas.height=im.height;
	//canvas.getContext("2d").putImageData(im,0,0);
	
	return im;
	
}

}

function getColorArray(imgData,x,y)
{
	var arr=[];
	var idx = (imgData.width * y + x) << 2;
	arr.push(imgData.data[idx]);
	arr.push(imgData.data[idx+1]);
	arr.push(imgData.data[idx+2]);
	arr.push(imgData.data[idx+3]);
	return arr;
}

function setColorArray(imgData,x,y,color)
{
	
	var idx = (imgData.width * y + x) << 2;
	imgData.data[idx]=color[0];
	imgData.data[idx+1]=color[1];
	imgData.data[idx+2]=color[2];
	imgData.data[idx+3]=color[3];
	return imgData;
}

function compareColors(arr,arr2,lim)
{
	for(var j=0;j<arr.length;j++)
	{
		var df = Math.abs(arr[j]-arr2[j]);
		if(df>lim)return false;
	}
	return true;
}

function mod_up_compareColors_with_diff(arr,arr2,lim)
{
	for(var j=0;j<arr.length;j++)
	{
		var df = Math.abs(arr[j]-arr2[j]);
		if(df>lim)return false;
	}
	return true;
}




function both_axes_plus(im)
{
	var src_png = document.createElement("canvas");
	src_png.width=im.width;
	src_png.height=im.height;
	var ctx0 = src_png.getContext("2d");
	ctx0.putImageData(im,0,0);
	
	var result_png = document.createElement("canvas");
	result_png.width=im.width+1;
	result_png.height=im.height+1;
	var ctx = result_png.getContext("2d");
	
	if ((im.width % 2 == 1) &&(im.height % 2 == 1))
	{
		var n1=(im.width / 2|0);
		//var n2=n1+2;
		var m1=(im.height / 2|0);
		//var m2=m1+2;
		
		
		
		var imgDt =  ctx0.getImageData(0,0,n1+1,m1+1);
		
		ctx.putImageData(imgDt,0,0);
		
		
		
		
		var imgDt2 = ctx0.getImageData(n1,0,n1+1,m1+1);
		
		ctx.putImageData(imgDt2,n1+1,0);
		
		
		imgDt = ctx0.getImageData(0,m1,n1+1,m1+1);
		ctx.putImageData(imgDt,0,m1+1);
		
		
		imgDt = ctx0.getImageData(n1,m1,n1+1,m1+1);
		ctx.putImageData(imgDt,n1+1,m1+1);
		
		
		/**
		*/
		
		
		//imgDt = ctx0.getImageData(0,0,n1,m1);
		//ctx.putImageData(imgDt,0,0);
		
		//
		
	}
	else if ((im.width % 2 == 0) &&(im.height % 2 == 0))
	{
		var n1=(im.width / 2);
		//var n2=n1+2;
		var m1=(im.height / 2);
		//var m2=m1+2;
		
		var imgDt =  ctx0.getImageData(0,0,n1+1,m1+1);
		
		ctx.putImageData(imgDt,0,0);
				
		
		imgDt = ctx0.getImageData(n1,0,n1+1,m1+1);
		ctx.putImageData(imgDt,n1+1,0);
			
	
		imgDt = ctx0.getImageData(0,m1,n1+1,m1+1);
		ctx.putImageData(imgDt,0,m1+1);
		
		
		imgDt = ctx0.getImageData(n1,m1,n1+1,m1+1);
		ctx.putImageData(imgDt,n1+1,m1+1);
		/**/
		
	}
	
	
	
	
	return ctx.getImageData(0,0,result_png.width,result_png.height);
	
	
	
	
}




function both_axes_minus(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w-1;
		canvas2.height = h-1;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	
		
		var dx = w/2|0; 
		var dy = h/2|0;
		
		//7/2 = 3 //012[3]456
		//8/2 = 4 //012[3][4]567
		
			for (var y = 0; y < w; y++) {
				
				if(y == dy) continue;
				
				for (var x = 0; x < h; x++) {
					
					if(x == dx) continue;
					
					var idx = (w * y + x) << 2;
					
					var new_idx1 = 0;
					
					if(x < dx && y < dy)
					{			
						new_idx1 = canvas2.width * y + x << 2;
					}	
					else if(x > dx && y < dy)
					{
						new_idx1 = canvas2.width * y + (x-1) << 2;
					}
					else if(x > dx && y > dy)
					{
						new_idx1 = canvas2.width * (y-1) + (x-1) << 2;
					}
					else if(x < dx && y > dy)
					{
						new_idx1 = canvas2.width * (y-1) + x << 2;
					}
					
						im.data[new_idx1+0] = im0.data[idx+0];
						im.data[new_idx1+1] =  im0.data[idx+1];
						im.data[new_idx1+2] =  im0.data[idx+2];
						im.data[new_idx1+3] =  im0.data[idx+3];
						
					
					
					
				}
				
			}
			
			return im;
			
			//setTimeout( function(){	logg('axes minus'); }, 100 );	
			
			
}
















function up_image_data( imageData, up_counter ){

	
	
	var flag=false;
	if( ( imageData.width%2==1 ) && (  imageData.height%2==1))  {
		imageData=both_axes_plus(imageData);
		flag=true;
	}
	
	
	var canvas = document.createElement("canvas");
	canvas.width=imageData.width;
	canvas.height=imageData.height;
	var context = canvas.getContext("2d");
	context.putImageData(imageData,0,0);
	var w = canvas.width;
	var h = canvas.height;
	
	var nw=0;
	var nh=0;
	
	
	
	var im = context.getImageData(0,0,w/2|0+nw,h/2|0+ nh);
	var yellow=[255,255,0,255];
	var maxcolor = getCountOfColors(im);
	var im0 = context.getImageData(0,0,w/2|0+nw,h/2|0+ nh);
	
	
	
	
	
	
	
	
	//sdvig vlevo
	for(var j=0;j<im.height;j++)
	{
		var t=getColorArray(im,0,j);
		for(var i=1;i<im.width;i++)
		{
			
			im = setColorArray(im,i-1,j,getColorArray(im,i,j));
		}
		if(compareColors(t,yellow,10)) im = setColorArray(im,im.width-1,j,maxcolor);
		else im = setColorArray(im,im.width-1,j,t);
	}
	
	//sdvig vvverh
	for(var i=0;i<im.width;i++)
	{
		var t=getColorArray(im,i,0);
		for(var j=1;j<im.height;j++)
		{
			im = setColorArray(im,i,j-1,getColorArray(im,i,j));
		}
		if(compareColors(t,yellow,10)) im = setColorArray(im,i,im.height-1,maxcolor);
		else im = setColorArray(im,i,im.height-1,t);
	}
	
	// for(var i=0;i<im.width;i++)
	// {
		
		// for(var j=0;j<im.height;j++)
		// {
			// var t=getColorArray(im,i,j);
			// if(compareColors(t,maxcolor,0)) im = setColorArray(im,i,j,getColorArray(im0,i,j));
		// }
	// }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// //sdvig vlevo
	// for(var j=0;j<im.height;j++)
	// {
		// var t=getColorArray(im,0,j);
		// for(var i=1;i<im.width;i++)
		// {
			
			// im = setColorArray(im,i-1,j,getColorArray(im,i,j));
		// }
		// //if(compareColors(t,yellow,10)) im = setColorArray(im,im.width-1,j,maxcolor);
		// //else 
			// im = setColorArray(im,im.width-1,j,t);
	// }
	
	// //sdvig vvverh
	// for(var i=0;i<im.width;i++)
	// {
		// var t=getColorArray(im,i,0);
		// for(var j=1;j<im.height;j++)
		// {
			// im = setColorArray(im,i,j-1,getColorArray(im,i,j));
		// }
		// //if(compareColors(t,yellow,10)) im = setColorArray(im,i,im.height-1,maxcolor);
		// //else 
			// im = setColorArray(im,i,im.height-1,t);
	// }

	// /*
	
	
	// */
	// //return im;
	
	
	
	
	
	// for(var i=0;i<im.width;i++)
	// {
		
		// for(var j=0;j<im.height;j++)
		// {
			// var t=getColorArray(im,i,j);
			// // //if((t[0]==maxcolor[0])&&(t[1]==maxcolor[1])&&(t[2]==maxcolor[2])&&(t[3]==maxcolor[3]))
				
			// // //compareColors
			 // var df2 = Math.abs(t[2]-yellow[2]);
		  // if(df2<=0){
			// if(compareColors(t,yellow,20))  im = setColorArray(im,i,j,maxcolor);
		  // }
			// // //if((t[0]==yellow[0])&&(t[1]==yellow[1])&&(t[2]==yellow[2])&&(t[3]==yellow[3]))
		
			 // // var df2 = Math.abs(t[2]-yellow[2]);
		 // // if(df2<=0){
			// // var df3 = Math.abs(t[1]-yellow[1]);
			// // var df4 = Math.abs(t[0]-yellow[0]);
			// // if( Math.abs(df3-df4)<20)
			// // {
				// // if(Math.abs(df3-255)<160)
				// // {
				// // im = setColorArray(im,i,j,maxcolor);
				// // }
			// // }
		 // //}
		// }
	// }
	
	
	// /* 
	
	// for(var j=0;j<im.height;j++)
		// {
	// for(var i=0;i<im.width;i++)
	// {
		
		
			// var t=getColorArray(im,i,j);
			// if(compareColors(t,yellow,0)) im = setColorArray(im,i,j,getColorArray(im0,i,j));
		// }
	// }
	// im = setColorArray(im,im.width-1,im.height-1,maxcolor);
	
	
	
	 // */
	
	
	
	
	
		// //sdvig vvverh
	
	
	
	
	
	
	
	
	
	
	
							
	im = mirror_right(im);
	
	im = mirror_down(im);
	
	
	
	
	canvas.width=imageData.width;
	canvas.height=imageData.height;
	context.putImageData(im,0,0);
	
	if( flag) 	return both_axes_minus(context.getImageData(0,0,w,h));
	return context.getImageData(0,0,w,h);
	
	// var im=null;
	// if( ( w%2==1) && (h%2==1) )
	// {
		// var nw = (w/2|0)+1;
		// var nh = (h/2|0)+1;	
		// im = context.getImageData(up_counter,up_counter,nw-up_counter,nh-up_counter);
	
		// //canvas.width = nw;
		// //canvas.height = nh;
		
		
	// }
	// else if( ( w%2==0) && (h%2==0) )
	// {
		// var nw = w/2;
		// var nh = h/2;	
		// im = context.getImageData(up_counter,up_counter,nw-up_counter,nh-up_counter);
		// //canvas.width = nw;
		// //canvas.height = nh;
		// //canvas.getContext("2d").putImageData(im,0,0);
	// }
		
// if(up_counter>nw)
// {
	// //alert('too many ups');
	// up_counter=1;
	// return up_image_data( imageData, 1 );
// }
// else
// {

// var	im0 = context.getImageData(0,0,up_counter,up_counter);
	// var	im1 = context.getImageData(up_counter,0,nw-up_counter,up_counter);
	// var	im2 = context.getImageData(0,up_counter,up_counter,nh-up_counter);
	// var canvas2 = document.createElement("canvas");
	// canvas2.width=w;
	// canvas2.height=h;
	// var context2 = canvas2.getContext("2d");
	// canvas2.getContext("2d").putImageData(im,0,0);
	// canvas2.getContext("2d").putImageData(im0,nw-up_counter,nh-up_counter);
	
	// //im1 = mirror_right(im1);
	// //im1 = getPartOfImageData(im1,im1.width/2,0,im1.width/2,im1.height);
	// canvas2.getContext("2d").putImageData(im1,0,nh-up_counter);
	
	// //im2 = mirror_down(im2);
	// //im2 = getPartOfImageData(im2,0,im2.height/2,im2.width,im2.height/2);
	// canvas2.getContext("2d").putImageData(im2,nw-up_counter,0);
	
	// im=canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);
	
	// /**
	// var n=0;
	// var y=nh-1;
	// for(var i=nw-1;i>=0;i--)
	// {
		
		// var idx = (w * y + i) << 2;

		// im.data[idx+0] = im1.data[n];
		// im.data[idx+1] = im1.data[n+1];
		// im.data[idx+2] = im1.data[n+2];
		// im.data[idx+3] = im1.data[n+3];
					
		// n+=4;			

	// }
	// var x=nw-1;
	// var m=0;
	// for(var j=nh-1;j>=0;j--)
	// {
		// var idx = (w * j + x) << 2;

		// im.data[idx+0] = im2.data[m];
		// im.data[idx+1] = im2.data[m+1];
		// im.data[idx+2] = im2.data[m+2];
		// im.data[idx+3] = im2.data[m+3];
					
		// m+=4;	
	// }
	
	// canvas2.getContext("2d").putImageData(im,0,0);
		// */
	// im = mirror_right(canvas2.getContext("2d").getImageData(0,0,nw,nh));
	
	// im = mirror_down(im);
	

	// //canvas.width=im.width;
	// //canvas.height=im.height;
	// //canvas.getContext("2d").putImageData(im,0,0);
	
	// return im;
	
// }
//return im;
}

function up_nova_image_data(im,up_counter)
{
	
	
	var cnv = document.createElement("canvas");
	cnv.width=im.width;
	cnv.height=im.height;
	var ctx = cnv.getContext("2d");
	ctx.putImageData(im,0,0);
	
	
	
	
	
	
	var w1 = 0;
	if(cnv.width%2==1) w1=((cnv.width/2)|0);
	else  w1=((cnv.width/2));
	var h1 = 0;
	if(cnv.height%2==1) h1=((cnv.height/2)|0);
	else  h1=((cnv.height/2));
	
	var imageData1 = cnv.getContext("2d").getImageData(0,0,w1,h1);
	var part1 = up_image_data( imageData1, up_counter );
	
	var imageData2 = cnv.getContext("2d").getImageData(cnv.width-w1,0,w1,h1);
	var part2 = 	mirror_right(part1);			//up_image_data( imageData2, up_counter );
	
	
	var imageData3 = cnv.getContext("2d").getImageData(cnv.width-w1,cnv.height-h1,w1,h1);
	var part3 = mirror_down(part1);					//up_image_data( imageData3, up_counter );
	
	var imageData4 = cnv.getContext("2d").getImageData(0,cnv.height-h1,w1,h1);
	var part4 =	mirror_right(part3);			// up_image_data( imageData4, up_counter );
	
	
	cnv.getContext("2d").putImageData(part1,0,0);
	cnv.getContext("2d").putImageData(part2,cnv.width-w1,0);
	cnv.getContext("2d").putImageData(part3,cnv.width-w1,cnv.height-h1);
	cnv.getContext("2d").putImageData(part4,0,cnv.height-h1);
	
	return cnv.getContext("2d").getImageData(0,0,cnv.width,cnv.height);
	
}






















