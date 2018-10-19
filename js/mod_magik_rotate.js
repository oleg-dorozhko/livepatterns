
        // use Euclidian distance to find closest color
        function mapColorToPalette(palette,red, green, blue) {
            var color, diffR, diffG, diffB, diffDistance, mappedColor;
            var distance = 70000;
            for (var i = 0; i < palette.length; i++) {
                color = palette[i];
                diffR = (color[0] - red);
                diffG = (color[1] - green);
                diffB = (color[2] - blue);
                diffDistance = diffR * diffR + diffG * diffG + diffB * diffB;
                if (diffDistance < distance) {
                    distance = diffDistance;
                    mappedColor = palette[i];
                };
            }
            return (mappedColor);
        }

function mod_magik_magik_rotate(im, angle)
{//console.log('angle='+angle);
	if(angle==undefined) angle=1;
	return mod_magik_mod_nova_rotate2_cliped_rotate_wrapper(im,angle);

	
	
	
	
}
	
function mmm_setPoint(im0, idx,color)
{
	
	
	im0.data[idx] = color[0];
	im0.data[idx+1] = color[1];
	im0.data[idx+2] = color[2];
	im0.data[idx+3] = color[3];
	
	return im0;
}
	
function ro90(imageData01)
{
	var imageData2 = mmm_cloneImageData(imageData01 );
	
	
	var w = imageData01.width;
	var h = imageData01.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var idx2 = (w * x + y) << 2;
					
					var color = mmm_getColorArrayFromImageDataByIndex(imageData01,idx);
											
					imageData2 = mmm_setPoint(imageData2,idx2,color);
						
				
					
				}
			}
	return imageData2;
	
	
}
function mmm_cloneImageData(imgData)
{
	var tCanvas = document.createElement("canvas");
	tCanvas.width = imgData.width ;
	tCanvas.height = imgData.height;
	var tContext = tCanvas.getContext("2d");
	tContext.putImageData(imgData,0,0);
	return tContext.getImageData(0,0,tCanvas.width,tCanvas.height);			
}

function _createClipData(imageData0)
{
		
	var canvas2 = document.createElement('canvas');
	canvas2.width = imageData0.width*2;
	canvas2.height = imageData0.height*2;
	var context2 = canvas2.getContext("2d");
	//context2.putImageData(imageData0,0,0);
	
	var cx = imageData0.width;
	var cy = imageData0.height;
	var step_angle=Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-180; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(255,0,0,1.0)';
		if(t%2==0)
		{
			context2.fillStyle='rgba(0,0,255,1.0)';
		}
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
	
	}
	
	
		var imgData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	//imgData =imgData);
	//imgData = mirror_right(imgData);
	//imgData = mirror_down(imgData);
	
	// var canvas = document.getElementById('myCanvas77');
	// canvas.width = canvas2.width;
	// canvas.height = canvas2.height;
	// var context = canvas.getContext("2d");
	// context.drawImage(canvas2,0,0);
	
	// var canvas = document.getElementById("canvas0");
	// canvas.width = imgData.width;
	// canvas.height = imgData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(imgData,0,0);	
	
	
	return imgData;
	
	
	
	
	
	
}


	function createClipData(imageData0)
	{
	return _createClipData(imageData0);
	
	var canvas2 = document.createElement('canvas');
	canvas2.width = imageData0.width;
	canvas2.height = imageData0.height;
	var context2 = canvas2.getContext("2d");
	context2.putImageData(imageData0,0,0);
	
	// // context2.fillStyle='rgba(0,0,255,1.0)';
	// // context2.beginPath();
	// // context2.moveTo(0,imageData0.height);
	// // context2.lineTo(0,0);
	// // context2.lineTo(imageData0.width/2,0);
	// // context2.lineTo(0,imageData0.height);
	// // context2.fill();
	// // context2.moveTo(0,imageData0.height);
	// // context2.lineTo(imageData0.width,imageData0.height/2);
	// // context2.lineTo(imageData0.width,imageData0.height);
	// // context2.lineTo(0,imageData0.height);
	// // context2.fill();
	
	var w = imageData0.width/2;
	var h = imageData0.height/2;
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(0,h);
	context2.lineTo(0,h/2);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(0,h/2);
	context2.lineTo(0,0);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(0,0);
	context2.lineTo(w/2,0);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w/2,0);
	context2.lineTo(w,0);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w,0);
	context2.lineTo(w+w/2,0);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w/2,0);
	context2.lineTo(w+w,0);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w,0);
	context2.lineTo(w+w,h/2);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w,h/2);
	context2.lineTo(w+w,h);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w,h);
	context2.lineTo(w+w,h+h/2);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w,h+h/2);
	context2.lineTo(w+w,h+h);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w,h+h);
	context2.lineTo(w+w/2,h+h);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w+w/2,h+h);
	context2.lineTo(w,h+h);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w,h+h);
	context2.lineTo(w/2,h+h);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(w/2,h+h);
	context2.lineTo(0,h+h);
	context2.lineTo(w,h);
	context2.fill();
	
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(0,h+h);
	context2.lineTo(0,h+h/2);
	context2.lineTo(w,h);
	context2.fill();
	
	context2.fillStyle='rgba(0,0,255,1.0)';
	context2.beginPath();
	context2.moveTo(w,h);
	context2.lineTo(0,h+h/2);
	context2.lineTo(0,h);
	context2.lineTo(w,h);
	context2.fill();
	
	
	
	
	
	
	
	return context2.getImageData(0,0,canvas2.width,canvas2.height);
	
	}












function mod_magik_getAverageColor(colors)
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
		i3 += colors[i][3];
	}
	
	return [i0/colors.length,i1/colors.length,i2/colors.length,i3/colors.length];
	
}








function mod_magik_mod_nova_rotate2_cliped_rotate_wrapper(imageData,ang_rn)
{
	if(global_clip_data!=null)
	{
		if((imageData.width != global_clip_data.width)||(imageData.height != global_clip_data.height))
		global_clip_data=createClipData(imageData);
	}
	else global_clip_data=createClipData(imageData);
	
	//var imageData0 = __half_imageData(mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,ang_rn));
	
	var imageData0 = new_mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,ang_rn);
	
	// var canvas = document.getElementById('myCanvas77');
	// canvas.width = imageData0.width;
	// canvas.height = imageData0.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(imageData0,0,0);
	
	
	
//	var imageData00 = mmm_cloneImageData(imageData0);
	
	// var canvas = document.createElement('canvas');
	// canvas.width = imageData0.width;
	// canvas.height = imageData0.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(imageData0,0,0);
	
	var clipData = cloneImageData(global_clip_data);
	
	
	
	// var canvas = document.getElementById('canvas_tr555');
	// canvas.width = clipData.width;
	// canvas.height = clipData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(clipData,0,0);
	
	
	// var canvas = document.getElementById('myCanvas77');
	// canvas.width = clipData.width;
	// canvas.height = clipData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(clipData,0,0);

	// return clipData;
	
	
	var imageData07 = new_mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,-ang_rn);
	// var canvas = document.getElementById('myCanvas77');
	// canvas.width = imageData07.width;
	// canvas.height = imageData07.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(imageData07,0,0);
	
	// var canvas = document.getElementById('myCanvas77');
// canvas.width = clipData.width;
	// canvas.height = clipData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(clipData,0,0);
		for (var n = 0; n < clipData.data.length-4; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==255)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imageData07.data[n];
			clipData.data[n+1]=imageData07.data[n+1];
			clipData.data[n+2]=imageData07.data[n+2];
			clipData.data[n+3]=imageData07.data[n+3];
		}
		else if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imageData0.data[n];
			clipData.data[n+1]=imageData0.data[n+1];
			clipData.data[n+2]=imageData0.data[n+2];
			clipData.data[n+3]=imageData0.data[n+3];
		}
		else
		{ 
	var colors=[[imageData0.data[n],imageData0.data[n+1],imageData0.data[n+2],imageData0.data[n+3]],[imageData07.data[n],imageData07.data[n+1],imageData07.data[n+2],imageData07.data[n+3]]];
			var col = mod_magik_getAverageColor(colors)//mapColorToPalette([[imageData0.data[n],imageData0.data[n+1],imageData0.data[n+2]],[imageData07.data[n],imageData07.data[n+1],imageData07.data[n+2]]],clipData.data[n], clipData.data[n+1], clipData.data[n+2])
			
			clipData.data[n]=col[0];
			clipData.data[n+1]=col[1];
			clipData.data[n+2]=col[2];
			clipData.data[n+3]=col[3];
		}
		
		// var canvas = document.getElementById('myCanvas77');
// canvas.width = clipData.width;
	// canvas.height = clipData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(clipData,0,0);
		
	 }
	
	return clipData;
	
	
	
}



function rig(im)
{
		
	
	
	
	var canvas = document.createElement('canvas');
	canvas.width = im.width;
	canvas.height = im.height;
	var context = canvas.getContext("2d");
	context.putImageData(im,0,0);
	
	var rig=context.getImageData(im.width/2,0,im.width/2,im.height);
	
	
	
	return rig;
	
}









function old_mod_magik_mod_nova_rotate2_cliped_rotate_wrapper(imageData,ang_rn)
{
	
	
	var imageData0 = mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,ang_rn);
	
	var imageData01= mod_magik_mod_nova_rotate2_clip(imageData0);
	
	var imageData1 = mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,-ang_rn);
	
	var imageData11= mod_magik_mod_nova_rotate2_clip2(imageData1);
	
	var imageData2 = mod_magik_mod_nova_rotate2_combo_cliped(imageData01,imageData11);
	
	
	
	 imageData2 = mod_magik_rotate_vortex(__half_imageData(imageData2));
	
	// var x = (imageData2.width-imageData.width)/2;
	// var y = (imageData2.height-imageData.height)/2;
	// var w = imageData.width;
	// var h = imageData.height;
	
	// var crop_settings = {};
	// crop_settings.x= x;
	// crop_settings.y= y;
	// crop_settings.w= imageData2.width;
	// crop_settings.h= imageData2.height;
	
	// return newcroplt( imageData2,  crop_settings );
	
	// crop_settings.x= x2;
	// crop_settings.y= y2;
	
	// imageData2 = newcroprb(imageData2,  crop_settings);
	
	return imageData2;
	
	//return __frame_imageData(imageData2,x,y,w,h);
	
}




function mod_magik_frame_imageData(imageData2,x0,y0,w0,h0)
{
	
	//console.log("half");
	var w = imageData2.width;
	var h = imageData2.height;
	
	var canvas = document.createElement('canvas');
	canvas.width = w0;
	canvas.height = h0;
	var context = canvas.getContext("2d");
	var im2 = context.getImageData(0,0,w0,h0);
	
		
	var n=0;
	var m=0;	
	for (y = 0; y < h; y++) {
				
		
		n=0;	
		for (x = 0; x< w; x++) {
				
				
				if( (x>=x0) && (x<(x0+w0))   &&  (y>=y0) && (y<(y0+h0))  )
				{
				
					var color = mod_magik_getColorArrayFromImageData(imageData2, x, y)
					
					im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, n, m, 1, 1, color );
					
					n++;
				
				}
		}
		
		if(y>=y0) m++;
		
	}
	
	
	return im2;

}


//x' = x cos f - y sin f
//y' = y cos f + x sin f

// 40° = 40·π / 180 = 2π/9 //cos 45 = 0.71 priblisit sqrt(2)/2
function mod_magik_mod_nova_rotate2_rotate_one_xy_obj(point, mcos, msin){
           var rotated_point={};
           rotated_point.x = point.x * mcos - point.y * msin;
           rotated_point.y = point.x * msin + point.y * mcos;
           return rotated_point;
}

function mod_magik_mod_nova_rotate2_fillRectanglePro(imgData2, i0, j0, n, m, col)
{
	
	for(var j=j0;j<j0+m;j++)
	{
		for(var i=i0;i<i0+n;i++)
		{
			var idx2 = (imgData2.width * j + i ) << 2;
			imgData2.data[idx2]=col[0];
			imgData2.data[idx2+1]=col[1];
			imgData2.data[idx2+2]=col[2];
			imgData2.data[idx2+3]=col[3];
			
		}
	}
	
	return imgData2;
}


function mod_magik_mod_nova_rotate2_rotate_nova_auto(imageData,ang_rn)
{
	
	var angle = ang_rn * Math.PI / 180;
	
	var w = imageData.width;
	var h = imageData.height;
	
	
	var canvas = document.createElement('canvas');
	canvas.width =  w*3/2;
	canvas.height = h*3/2;
	var context = canvas.getContext("2d");
	var im2 = context.getImageData(0,0,canvas.width,canvas.height);
	
	
	
						
	
	for (var y = 0; y < im2.height; y++) {
				
		
				
		for (var x = 0; x < im2.width; x++) {
			
			im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [0,0,0,255]);
			
					
	}}
	
	var w2 = 0;
	if(im2.width%2==1)w2=im2.width+1;else w2=im2.width;
	var h2 =0;
	if(im2.height%2==1)h2=im2.height+1;else h2=im2.height;
	
	
	var cx = w/2|0;
	var cy = h/2|0;
	var cx2=cx*3/2;
	var cy2=cy*3/2;
	
	var mcos = Math.cos(angle);
	var msin = Math.sin(angle);
	
	//if(w%2==0) cx2=cx+1;
	//if(h%2==0) cy2=cy+1;
	var one_third=1/3;
	var two_third=2/3;
	for(var y=-cy;y<cy;y++)
	{   


		for(var x=-cx;x<cx;x++)
		{


			
			var ind = imageData.width * (y+cy) + (x+cx) << 2;
			var col = [imageData.data[ind],imageData.data[ind+1],imageData.data[ind+2],imageData.data[ind+3]];
			
			var obj = {};
			obj.x=x;
			obj.y=y;
			obj = mod_magik_mod_nova_rotate2_rotate_one_xy_obj(obj, mcos,msin);
			
			obj.x=cx2+obj.x;
			obj.y=cy2+obj.y;
			
			var clx = obj.x|0;
			var dx = obj.x - clx;
			var cly = obj.y|0;
			var dy = obj.y - cly;
			
			obj.x=clx;
			obj.y=cly;
			
			var x2=0;
			var y2=0;
			//console.log('x='+x+',  obj.x='+obj.x+' obj.x|0='+(obj.x|0));
			//console.log('y='+y+',  obj.y='+obj.y+' obj.y|0='+(obj.y|0));
			//dx=Math.abs(dx);
			//dy=Math.abs(dy);
			obj.x=obj.x;
			/**
			if(dx<one_third)
			{
				obj.x=obj.x-1;
				
			}
			else if (dx>=two_third)
			{
				obj.x=obj.x+1;
			}
			
			obj.y=obj.y;
			if(dy<one_third)
			{
				obj.y=obj.y-1;
			}
			else if (dy>=two_third)
			{
				obj.y=obj.y+1;
			}
			**/
			var dr=2;
			im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, obj.x, obj.y, dr, dr, col);
			//ctx2.fillStyle = 'rgba('+col[0]+','+col[1]+','+col[2]+','+(col[3]/255)+')';
			//ctx2.fillRect(obj.x, obj.y,1,1);
		}
	}
	return im2;
	
	
}





function new_mod_magik_mod_nova_rotate2_rotate_nova_auto(im0,angle)
{
	var w = im0.width;
	var h = im0.height;
	var canvas0 = document.createElement("canvas");
	canvas0.width=w;
	canvas0.height=h;
	var context0 = canvas0.getContext("2d");
	context0.putImageData(im0,0,0);
	
	var canvas = document.createElement("canvas");
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Move registration point to the center of the canvas
	context.translate(canvas.width/2, canvas.height/2);

	// Rotate 1 degree
	context.rotate(angle*Math.PI / 180);

	// Move registration point back to the top left corner of canvas
	context.translate(-canvas.width/2, -canvas.height/2);

	
	context.drawImage(canvas0,0,0);
	
	return context.getImageData(0,0,w,h);//,0,0)
	
	
}



























function mod_magik_mod_nova_rotate2_get_color(imgData0, x, y)
{
	
		var idx = ( imgData0.width * y + x) << 2;	
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}



// function mod_nova_rotate2_clip_wrapper(n)
// {
	// var cnv = document.getElementById('canvas0');
	// var ctx = cnv.getContext("2d");
	// var imageData = ctx.getImageData(0,0,cnv.width,cnv.height);  
	// if(n==1)	imageData=mod_nova_rotate2_clip(imageData);
	// else if(n==2)	imageData=mod_nova_rotate2_clip2(imageData);
	// ctx.putImageData(imageData,0,0);
// }



function mod_magik_mod_nova_rotate2_clip(imageData)
{
	
	
	
	var w =imageData.width;
	var h=imageData.height;
	
	
	var canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	var im2 = context.getImageData(0,0,w,h);
	
	
						
	var n=0;
	for (var y = 0; y < im2.height; y++) {
				
		
				
		for (var x = 0; x < im2.width; x++) {
			
			if(x>=n)
			{
				if(x<im2.width/2 )  im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
				else im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
			}
			else im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
					
		}
		n++;
		if(n==im2.width/2) n=im2.width;
	}
	var step= -1;
	var n=im2.width-1;
	for (var y = 0; y < im2.height; y++) {
				
		
				
		for (var x = im2.width/2; x < im2.width; x++) {
			
			if(x>=n)
			{ im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
				//if(x<im2.width/2 ) 
				//else im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
			}
			else im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
					
		}
		n+=step;
		if(n<=im2.width/2-1) {n=im2.width;step=0;}
	}
	
	var step= -1;
	var n=im2.width/2-1;
	for (var y = im2.height/2; y < im2.height; y++) {
				
		
				
		for (var x = 0; x < im2.width; x++) {
			
			if(x<=n)
			{  im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
				
				//if(x<im2.width/2 ) 
				//else im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
			}
			else
					im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
		}
		n+=step;
		if(n<0) {n=im2.width/2;step=0;}
	}
	
	
	
	
	var n=im2.width/2;
	for (var y = im2.height/2; y < im2.height; y++) {
				
		
				
		for (var x = im2.width/2; x < im2.width; x++) {
			
			// if(x>=n)
			// { 
		// im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
				
			// }
			// else
				if(x<=n) im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
				//else 
				else	im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
		}
		n++;
		if(n==im2.width/2) n=im2.width;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	return im2;
	
	
}






function mod_magik_mod_nova_rotate2_clip2(imageData)
{
	
	
	
	var w =imageData.width;
	var h=imageData.height;
	
	var canvas = document.createElement('canvas');
	canvas.width = w;
	canvas.height = h;
	var context = canvas.getContext("2d");
	var im2 = context.getImageData(0,0,w,h);
	
						
	var n=0;
	for (var y = 0; y < im2.height; y++) {
				
		
				
		for (var x = 0; x < im2.width; x++) {
			
			if(x>=n)
			{
				im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
				
			}
			else 
			{
				if(x<im2.width/2 )  im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
				else im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y)); 
			}
					
		}
		n++;
		if(n==im2.width/2) n=im2.width;
	}
	var step= -1;
	var n=im2.width-1;
	for (var y = 0; y < im2.height; y++) {
				
		
				
		for (var x = im2.width/2; x < im2.width; x++) {
			
			if(x>=n)
			{  im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
				//if(x<im2.width/2 ) 
				//else im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
			}
			else
					im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
		}
		n+=step;
		if(n<=im2.width/2-1) {n=im2.width;step=0;}
	}
	
	var step= -1;
	var n=im2.width/2-1;
	for (var y = im2.height/2; y < im2.height; y++) {
				
		
				
		for (var x = 0; x < im2.width; x++) {
			
			if(x<=n)
			{ 
				im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
				//if(x<im2.width/2 ) 
				//else im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
			}
			else im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
					
		} 
		n+=step;
		if(n<0) {n=im2.width/2;step=0;}
	}
	
	
	
	
	var n=im2.width/2;
	for (var y = im2.height/2; y < im2.height; y++) {
				
		
				
		for (var x = im2.width/2; x < im2.width; x++) {
			
			// if(x>=n)
			// { 
		// im2 = mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_nova_rotate2_get_color(imageData, x, y));
				
			// }
			// else
				if(x<=n) im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1,mod_magik_mod_nova_rotate2_get_color(imageData, x, y));
				//else 
				else	im2 = mod_magik_mod_nova_rotate2_fillRectanglePro(im2, x, y, 1, 1, [255,0,0,127]);
		} 
		n++;
		if(n==im2.width/2) n=im2.width;
	}
	
	
	
	
	return im2;
	
	
}

function mod_magik_getColorArrayFromImageData(imgData0, x, y)
{
	
		var idx = ( imgData0.width * y + x) << 2;	
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}



function mmm_getColorArrayFromImageDataByIndex(imgData0, idx)
{
	
	
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}





	
	
	function mod_magik_newcroplt(ish_png,  crop_settings)
	{
		
			var xw = crop_settings.x;
			var yh = crop_settings.y;
			var w = crop_settings.w;
		    var h = crop_settings.h;
			
			
			
			var canvas = document.createElement('canvas');
	canvas.width = w-xw;
	canvas.height = h-yh;
	var context = canvas.getContext("2d");
	var newpng = context.getImageData(0,0,w-xw,h-yh);
	
			
			

			
			var m=0;
			for (var y = 0; y < ish_png.height; y++) {
				
				var n=0;
				for (var x = 0; x < ish_png.width; x++) {
					
					/***
					console.log("x="+x);
					console.log("y="+y);
					console.log("n="+n);
					console.log("m="+m);
					***/
					if( x>=xw  && y>=yh )
					{
						var idx = (ish_png.width * y + x) << 2;
						
						var newidx = (newpng.width * m + n) << 2;

						newpng.data[newidx+0] = ish_png.data[idx+0];
						newpng.data[newidx+1] = ish_png.data[idx+1];
						newpng.data[newidx+2] = ish_png.data[idx+2];
						newpng.data[newidx+3] = ish_png.data[idx+3];
						
						n++;
					}
				}
				
				if(y>=yh) m++;
			}


			
			return newpng;
			


											
	}
	
	function mod_magik_newcroprb(ish_png, crop_settings)
	{
		
			
			var xw = crop_settings.x;
			var yh = crop_settings.y;
			
			
			var canvas = document.createElement('canvas');
	canvas.width = xw+1;
	canvas.height = yh+1;
	var context = canvas.getContext("2d");
	var newpng = context.getImageData(0,0,xw+1,yh+1);
	
			
			
			
			

			for (var y = 0; y < newpng.height; y++) {
				
				for (var x = 0; x < newpng.width; x++) {
					
					var idx = (ish_png.width * y + x) << 2;
					var newidx = (newpng.width * y + x) << 2;

					newpng.data[newidx+0] = ish_png.data[idx+0];
					newpng.data[newidx+1] = ish_png.data[idx+1];
					newpng.data[newidx+2] = ish_png.data[idx+2];
					newpng.data[newidx+3] = ish_png.data[idx+3];
				}
			}

			return newpng;
			

		
											
	}
	

















function mod_magik_mod_nova_rotate2_combo_cliped(imageData01,imageData11)
{
	for (var n = 0; n < imageData01.data.length-4; n+=4) {
		
		if((imageData01.data[n]==255)&&(imageData01.data[n+3]==127))
		{
			imageData01.data[n]=imageData11.data[n];
			imageData01.data[n+1]=imageData11.data[n+1];
			imageData01.data[n+2]=imageData11.data[n+2];
			imageData01.data[n+3]=imageData11.data[n+3];
		}
		
		
	}
	return imageData01;
}

 function mod_magik_rotate_vortex(imgDataResult)
{
	imgDataResult = mirror_right(imgDataResult);
				
	return mirror_down(imgDataResult);
}


