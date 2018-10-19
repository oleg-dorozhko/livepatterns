// 40° = 40·π / 180 = 2π/9 //cos 45 = 0.71 priblisit sqrt(2)/2
function rotate_one_xy_obj(point, angle){
           var rotated_point={};
           rotated_point.x = point.x * Math.cos(angle) - point.y * Math.sin(angle);
           rotated_point.y = point.x * Math.sin(angle) + point.y * Math.cos(angle);
           return rotated_point;
}

function fillRectanglePro(imgData2, i0, j0, n, m, col)
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

/**
function __rotate_one_xy_obj(point, angle){
           var rotated_point={};
           rotated_point.x = point.x * Math.cos(angle) + point.y * Math.sin(angle);
           rotated_point.y = point.x * Math.sin(angle) - point.y * Math.cos(angle);
           return rotated_point;
}
*/
function rotate_nova()
{
	//alert('rotate nova');
	rotate_nova_auto();
	return;
	
	
}





var global_rotate_nova_auto_angle=0;
var global_rotate_nova_auto_step=0;
var global_rotate_nova_auto=false;
// function swap_colors(id)
// {
	// var rcanvas = document.getElementById(id);
	// var rctx = rcanvas.getContext("2d");
	// var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	// rctx.putImageData(swap_colors_imgData(imgData),0,0);
// }

function old_rotate_novaAuto()
{
	setTimeout( function(){
	////////////////////
	rotate_nova_auto();
	rotate_nova_auto_reverse();
	hlyup('myCanvas2','myCanvas3',function(){});
	//////////////////////
	if(global_rotate_nova_auto==true)
	{
		var n = Number(document.getElementById("rotate_nova_angle").value) + Number(document.getElementById("rotate_nova_step").value);
		if(n>3600) n=0;
		document.getElementById("rotate_nova_angle").value= n;
		rotate_novaAuto();
	}
	},Number(document.getElementById("rotate_nova_auto_delay").value));
    //},200);
}

function rotate_novaAuto()
{
	setTimeout( function(){
		var n = Number(document.getElementById("rotate_nova_angle").value);
	mod_nova_rotate2_cliped_rotate_wrapper(n);
	if(global_rotate_nova_auto==true)
	{
		if(document.getElementById("reverse_nova_f").checked)
		{
			var n = Number(document.getElementById("rotate_nova_angle").value) - Number(document.getElementById("rotate_nova_step").value);
			if(n>360) n=1;
		}
		else{
			var n = Number(document.getElementById("rotate_nova_angle").value) + Number(document.getElementById("rotate_nova_step").value);
			if(n<0) n=359;
		}
		
		document.getElementById("rotate_nova_angle").value= n;
		rotate_novaAuto();
	}
	},Number(document.getElementById("rotate_nova_auto_delay").value));
    //},200);
}


function rotate_nova_auto_start()
{
	
	global_rotate_nova_auto=true;
	
//	global_rotate_nova_auto_step0=Number(document.getElementById("rotate_nova_step").value);
//	global_rotate_nova_auto_angle0=Number(document.getElementById("rotate_nova_angle").value);
	
	//document.getElementById("rotate_nova_step").value=45;
	//document.getElementById("rotate_nova_angle").value=45;
	
	
	
	
	global_rotate_nova_auto_step=Number(document.getElementById("rotate_nova_step").value);
	global_rotate_nova_auto_angle=Number(document.getElementById("rotate_nova_angle").value);
	
//	global_rotate_nova_auto_step=global_rotate_nova_auto_step0
//	global_rotate_nova_auto_angle=global_rotate_nova_auto_angle0;
//	document.getElementById("rotate_nova_step").value=global_rotate_nova_auto_step;
//	document.getElementById("rotate_nova_angle").value=global_rotate_nova_auto_angle;

	rotate_novaAuto();
}

function rotate_nova_auto_stop()
{
	global_rotate_nova_auto=false;
	global_rotate_nova_auto_angle=0;
}



function rotate_nova_auto()
{
	//alert('rotate nova');
	
	var ang_rn = Number(document.getElementById("rotate_nova_angle").value);
	
	var angle = ang_rn * Math.PI / 180;
	
	var cnv = document.getElementById('canvas0');
	if(cnv == null) 
	{
		alert('canvas not found');
		global_rotate_nova_auto=false;
		return;
	}
	
	if(cnv.width != cnv.height) 
	{
		alert("works only for square (w==h) only");
		global_rotate_nova_auto=false;
		return;
	}
	
	var ctx = cnv.getContext("2d");
	var imageData = ctx.getImageData(0,0,cnv.width,cnv.height);  
	var w =cnv.width;
	var h=cnv.height;
	var cnv2 = null;
	var ctx2 = null;
	if(document.getElementById('animation_auto_rotate')==null)
	{
	
	cnv2=document.createElement("canvas");
	cnv2.width = w*3/2;//Math.sqrt(w*w+h*h)|0+1;
	cnv2.height = h*3/2;//Math.sqrt(w*w+h*h)|0+1;
	
	var w2 = 0;
	if(cnv2.width%2==1)w2=cnv2.width+1;else w2=cnv2.width;
	var h2 =0;
	if(cnv2.height%2==1)h2=cnv2.height+1;else h2=cnv2.height;
	//cnv2.width = w2*3;
	//cnv2.height = h2*3;
	
	
	
	cnv2.id='animation_auto_rotate';
	
	
	
	document.getElementById('canvas0').parentNode.appendChild(cnv2);;
	
	}
	
	else 
	{
		cnv2=document.getElementById('animation_auto_rotate');
	}
	
	ctx2 = cnv2.getContext("2d");
	ctx2.fillStyle='rgba(255,255,0,255)';
	ctx2.fillRect(0,0,cnv2.width,cnv2.height);
	var imageData2 = ctx2.getImageData(0,0,cnv2.width,cnv2.height); 
	
	
	var cx = w/2|0;
	var cy = h/2|0;
	var cx2=cx*3/2;
	var cy2=cy*3/2;
	//if(w%2==0) cx2=cx+1;
	//if(h%2==0) cy2=cy+1;
	var one_third=1/3;
	var two_third=2/3;
	for(var y=-cy;y<cy;y++)
	{   


		for(var x=-cx;x<cx;x++)
		{


			
			var ind = cnv.width * (y+cy) + (x+cx) << 2;
			var col = [imageData.data[ind],imageData.data[ind+1],imageData.data[ind+2],imageData.data[ind+3]];
			
			var obj = {};
			obj.x=x;
			obj.y=y;
			obj = rotate_one_xy_obj(obj, angle);
			
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
			imageData2 = fillRectanglePro(imageData2, obj.x, obj.y, dr, dr, col);
			//ctx2.fillStyle = 'rgba('+col[0]+','+col[1]+','+col[2]+','+(col[3]/255)+')';
			//ctx2.fillRect(obj.x, obj.y,1,1);
		}
	}
	//median(cnv2);
	//cnv.width = cnv2.width;
	//cnv.height = cnv2.height;
	//cnv2.getContext("2d").putImageData(fillTransparent(imageData2),0,0);
	//cnv2.getContext("2d").putImageData(fillTransparent(imageData2),0,0);
	//imageData2=mod_nova_rotate2_clip(imageData2);
	cnv2.getContext("2d").putImageData(imageData2,0,0);
//	document.getElementById('myCanvas3').width=cnv2.width;
//	document.getElementById('myCanvas3').height=cnv2.width;
	document.getElementById('myCanvas3').getContext("2d").drawImage(cnv2,0,0);
	
	
}


function rotate_nova_auto_reverse()
{
	//alert('rotate nova');
	
	var ang_rn = Number(document.getElementById("rotate_nova_angle").value);
	
	var angle = ang_rn * Math.PI / 180;
	
	var cnv = document.getElementById('canvas0');
	if(cnv == null) 
	{
		alert('canvas not found');
		global_rotate_nova_auto=false;
		return;
	}
	
	if(cnv.width != cnv.height) 
	{
		alert("works only for square (w==h) only");
		global_rotate_nova_auto=false;
		return;
	}
	
	var ctx = cnv.getContext("2d");
	var imageData = ctx.getImageData(0,0,cnv.width,cnv.height);  
	var w =cnv.width;
	var h=cnv.height;
	var cnv2 = null;
	var ctx2 = null;
	if(document.getElementById('animation_auto_rotate')==null)
	{
	
	cnv2=document.createElement("canvas");
	cnv2.width = w*3/2;//Math.sqrt(w*w+h*h)|0+1;
	cnv2.height = h*3/2;//Math.sqrt(w*w+h*h)|0+1;
	
	var w2 = 0;
	if(cnv2.width%2==1)w2=cnv2.width+1;else w2=cnv2.width;
	var h2 =0;
	if(cnv2.height%2==1)h2=cnv2.height+1;else h2=cnv2.height;
	//cnv2.width = w2*3;
	//cnv2.height = h2*3;
	
	
	
	cnv2.id='animation_auto_rotate';
	
	
	
	document.getElementById('canvas0').parentNode.appendChild(cnv2);;
	
	}
	
	else 
	{
		cnv2=document.getElementById('animation_auto_rotate');
	}
	
	ctx2 = cnv2.getContext("2d");
	ctx2.fillStyle='rgba(255,255,0,255)';
	ctx2.fillRect(0,0,cnv2.width,cnv2.height);
	var imageData2 = ctx2.getImageData(0,0,cnv2.width,cnv2.height); 
	
	
	var cx = w/2|0;
	var cy = h/2|0;
	var cx2=cx*3/2;
	var cy2=cy*3/2;
	//if(w%2==0) cx2=cx+1;
	//if(h%2==0) cy2=cy+1;
	var one_third=1/3;
	var two_third=2/3;
	for(var y=-cy;y<cy;y++)
	{   


		for(var x=-cx;x<cx;x++)
		{


			
			var ind = cnv.width * (y+cy) + (x+cx) << 2;
			var col = [imageData.data[ind],imageData.data[ind+1],imageData.data[ind+2],imageData.data[ind+3]];
			
			var obj = {};
			obj.x=x;
			obj.y=y;
			obj = rotate_one_xy_obj(obj, -angle);
			
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
			*/
			var dr=2;
			imageData2 = fillRectanglePro(imageData2, obj.x, obj.y, dr, dr, col);
			//ctx2.fillStyle = 'rgba('+col[0]+','+col[1]+','+col[2]+','+(col[3]/255)+')';
			//ctx2.fillRect(obj.x, obj.y,1,1);
		}
	}
	//median(cnv2);
	//cnv.width = cnv2.width;
	//cnv.height = cnv2.height;
	//cnv2.getContext("2d").putImageData(fillTransparent(imageData2),0,0);
	//cnv2.getContext("2d").putImageData(fillTransparent(imageData2),0,0);
	
	cnv2.getContext("2d").putImageData(imageData2,0,0);
//	document.getElementById('myCanvas2').width=cnv2.width;
//	document.getElementById('myCanvas2').height=cnv2.width;
	document.getElementById('myCanvas2').getContext("2d").drawImage(cnv2,0,0);
	
		
	
}

//////////////////////////////////////////////////////////////////////////////
////////////////// CLIP  PREPARE   //////////////////////////////////////////



function nova_clip_prepare(w,h){
	
		//document.getElementById('myCanvas').width = document.getElementById("canvas0").width;
		//document.getElementById('myCanvas').height = document.getElementById("canvas0").height;
		//document.getElementById('myCanvas1').width = document.getElementById("canvas0").width;
		//document.getElementById('myCanvas1').height = document.getElementById("canvas0").height;
		document.getElementById('myCanvas2').width = w;
		document.getElementById('myCanvas2').height = h;
		document.getElementById('myCanvas3').width = w;
		document.getElementById('myCanvas3').height = h;			
		document.getElementById('myCanvas5').width = document.getElementById('myCanvas2').width;
		document.getElementById('myCanvas5').height = document.getElementById('myCanvas2').height;
		document.getElementById('myCanvas6').width = document.getElementById('myCanvas2').width;
		document.getElementById('myCanvas6').height = document.getElementById('myCanvas2').height;	
		document.getElementById('myCanvas4').width = document.getElementById('myCanvas2').width;
		document.getElementById('myCanvas4').height = document.getElementById('myCanvas2').height;
		
	//var border_color = 'rgba(127,127,127,1.0)';
	//var border_color = 'rgba(255,0,0,0.1)';
	var border_color = 'rgba(255,255,255,1.0)';
	var clip_color = 'rgba(255,255,255,1.0)';
	//and clip
	// Clip a rectangular area
	var canvas = document.getElementById("myCanvas2");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle=border_color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	
	
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/2,0);
	ctx.lineTo(0,0);
	
	
	
	ctx.moveTo(canvas.width,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width,canvas.height/2);
	ctx.lineTo(canvas.width,0);
	
	
	ctx.moveTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/2,canvas.height);
	ctx.lineTo(canvas.width,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	
	
	ctx.moveTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height/2);
	ctx.lineTo(0,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	/*
	ctx.moveTo(canvas.width/2+3,canvas.height/2+6);
	ctx.lineTo(canvas.width/2+3,canvas.height);
	ctx.lineTo(canvas.width-4,canvas.height);
	ctx.lineTo(canvas.width/2+3,canvas.height/2+6);
	
	ctx.moveTo(canvas.width/2,canvas.height/2+3);
	ctx.lineTo(0,canvas.height/2+3);
	ctx.lineTo(0,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height/2+3);	
	/**/
	ctx.strokeStyle = clip_color;
	ctx.stroke();
	ctx.clip();
	
	var border_color2 = 'rgba(255,255,255,1.0)';
	var clip_color2 = 'rgba(255,255,255,1.0)';

	
	var canvas = document.getElementById("myCanvas3");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle=border_color2;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	
	ctx.moveTo(canvas.width/2,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width,0);
	ctx.lineTo(canvas.width/2,0);
	
	
	ctx.moveTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width,canvas.height/2);
	ctx.lineTo(canvas.width,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	
	ctx.moveTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	
	
	ctx.moveTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height/2);
	ctx.lineTo(0,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	
	ctx.strokeStyle=clip_color2;
	ctx.stroke();
	ctx.clip();
	
	var canvas = document.getElementById("myCanvas5");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle=border_color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/4,0);
	ctx.lineTo(0,0);
	
	// ctx.moveTo(canvas.width/4,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width/2,0);
	// ctx.lineTo(canvas.width/4,0);
	
	ctx.moveTo(canvas.width/2,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(3*canvas.width/4,0);
	ctx.lineTo(canvas.width/2,0);
	
	// ctx.moveTo(3*canvas.width/4,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width-1,0);
	// ctx.lineTo(3*canvas.width/4,0);
	
	ctx.moveTo(canvas.width-1,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width-1,canvas.height/4);
	ctx.lineTo(canvas.width-1,0);
	
	// ctx.moveTo(canvas.width-1,canvas.height/4);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width-1,canvas.height/2);
	// ctx.lineTo(canvas.width-1,canvas.height/4);
	
	
	ctx.moveTo(canvas.width-1,canvas.height/2);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width-1,3*canvas.height/4);
	ctx.lineTo(canvas.width-1,canvas.height/2);
	
	// ctx.moveTo(canvas.width-1,3*canvas.height/4);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width-1,canvas.height-1);
	// ctx.lineTo(canvas.width-1,3*canvas.height/4);
	
	ctx.moveTo(canvas.width-1,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(3*canvas.width/4,canvas.height-1);
	ctx.lineTo(canvas.width-1,canvas.height-1);
	
	// ctx.moveTo(3*canvas.width/4,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width/2,canvas.height-1);
	// ctx.lineTo(3*canvas.width/4,canvas.height-1);
	
	ctx.moveTo(canvas.width/2,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/4,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height-1);
	
	// ctx.moveTo(canvas.width/4,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(0,canvas.height-1);
	// ctx.lineTo(canvas.width/4,canvas.height-1);
	
	ctx.moveTo(canvas.width/4,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height-1);
	ctx.lineTo(0,3*canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	
	// ctx.moveTo(0,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(0,3*canvas.height/4);
	// ctx.lineTo(0,canvas.height-1);
	/*
	ctx.moveTo(0,3*canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height/2);
	ctx.lineTo(0,3*canvas.height/4);
	*/
	ctx.moveTo(0,canvas.height/2);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height/4);
	ctx.lineTo(0,canvas.height/2);
	/*
	ctx.moveTo(0,canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,0);
	ctx.lineTo(0,canvas.height/4);
	
	/**/
	
	ctx.strokeStyle=border_color;
	ctx.stroke();
	ctx.clip();
	
	
	var canvas = document.getElementById("myCanvas6");
	var ctx = canvas.getContext("2d");
	ctx.fillStyle=border_color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	
	// ctx.moveTo(0,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width/4,0);
	// ctx.lineTo(0,0);
	
	ctx.moveTo(canvas.width/4,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/2,0);
	ctx.lineTo(canvas.width/4,0);
	
	// ctx.moveTo(canvas.width/4,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(3*canvas.width/4,0);
	// ctx.lineTo(canvas.width/4,0);
	
	ctx.moveTo(3*canvas.width/4,0);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width-1,0);
	ctx.lineTo(3*canvas.width/4,0);
	
	// ctx.moveTo(canvas.width-1,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width-1,canvas.height/4);
	// ctx.lineTo(canvas.width-1,0);
	
	ctx.moveTo(canvas.width-1,canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width-1,canvas.height/2);
	ctx.lineTo(canvas.width-1,canvas.height/4);
	
	
	// ctx.moveTo(canvas.width-1,canvas.height/2);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width-1,3*canvas.height/4);
	// ctx.lineTo(canvas.width-1,canvas.height/2);
	
	ctx.moveTo(canvas.width-1,3*canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width-1,canvas.height-1);
	ctx.lineTo(canvas.width-1,3*canvas.height/4);
	
	// ctx.moveTo(canvas.width-1,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(3*canvas.width/4,canvas.height-1);
	// ctx.lineTo(canvas.width-1,canvas.height-1);
	
	ctx.moveTo(3*canvas.width/4,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(canvas.width/2,canvas.height-1);
	ctx.lineTo(3*canvas.width/4,canvas.height-1);
	
	// ctx.moveTo(canvas.width/2,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width/4,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height-1);
	
	ctx.moveTo(canvas.width/4,canvas.height-1);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height-1);
	ctx.lineTo(canvas.width/4,canvas.height-1);
	
	// ctx.moveTo(canvas.width/4,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(0,canvas.height-1);
	// ctx.lineTo(canvas.width/4,canvas.height-1);
	
	// ctx.moveTo(0,canvas.height-1);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(0,3*canvas.height/4);
	// ctx.lineTo(0,canvas.height-1);
	
	ctx.moveTo(0,3*canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,canvas.height/2);
	ctx.lineTo(0,3*canvas.height/4);
	
	// ctx.moveTo(0,canvas.height/2);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(0,canvas.height/4);
	// ctx.lineTo(0,canvas.height/2);
	
	ctx.moveTo(0,canvas.height/4);
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.lineTo(0,0);
	ctx.lineTo(0,canvas.height/4);
	
	/**/
	
	ctx.strokeStyle=border_color;
	ctx.stroke();
	ctx.clip();
	/*
	var mw = (canvas.width/2)/4;
	var mh = (canvas.height/2)/4;
	
	var canvas = document.getElementById("myCanvas7");
	canvas.width=mw*6;
	canvas.heihgt=mh*6;
	var ctx = canvas.getContext("2d");
	ctx.fillStyle=border_color;
	ctx.fillRect(0,0,canvas.width, canvas.height);
	*/
	// ctx.moveTo(0,0);
	// ctx.lineTo(canvas.width/2,canvas.height/2);
	// ctx.lineTo(canvas.width/4,0);
	// ctx.lineTo(0,0);
	/*
	ctx.moveTo(mw,mh);
	ctx.lineTo(canvas.width-mw,mh);
	ctx.lineTo(canvas.width-mw,canvas.height-mh);
	ctx.lineTo(mw,canvas.height-mh);
	ctx.lineTo(mw,mh);
	ctx.strokeStyle=border_color;
	ctx.stroke();
	ctx.clip();
	*/
}




function hlyup(id2,id3,callback){
	
	var canvas2 = document.getElementById(id2);
	var ctx2 = canvas2.getContext("2d");
	var imgData2 = ctx2.getImageData(0,0,canvas2.width, canvas2.height);
	
	var canvas3 = document.getElementById(id3);
	var ctx3 = canvas3.getContext("2d");
	var imgData3 = ctx3.getImageData(0,0,canvas3.width, canvas3.height);
	
	var canvas = document.createElement("canvas");
	canvas.width = canvas2.width;
	canvas.height=canvas2.height;
	var context = canvas.getContext("2d");
	
	
	var imgData = context.getImageData(0,0,canvas.width, canvas.height);
	
	for(var j=0;j<canvas.height;j++)
	{
		for(var i=0;i<canvas.width;i++)
		{
			var index = canvas.width*j +i << 2;
			imgData.data[index]=imgData2.data[index];
			imgData.data[index+1]=imgData2.data[index+1];
			imgData.data[index+2]=imgData2.data[index+2];
			imgData.data[index+3]=imgData2.data[index+3];
		}
	}
	
	for(var j=0;j<canvas.height;j++)
	{
		for(var i=0;i<canvas.width;i++)
		{
			var index = canvas.width*j +i << 2;
			if((imgData.data[index]==255)&&(imgData.data[index+1]==255)&&(imgData.data[index+2]==255)&&(imgData.data[index+3]==255))
			{
				imgData.data[index]=imgData3.data[index];
				imgData.data[index+1]=imgData3.data[index+1];
				imgData.data[index+2]=imgData3.data[index+2];
				imgData.data[index+3]=imgData3.data[index+3];
			}
			else
			{
				imgData.data[index]=imgData2.data[index];
				imgData.data[index+1]=imgData2.data[index+1];
				imgData.data[index+2]=imgData2.data[index+2];
				imgData.data[index+3]=imgData2.data[index+3];
			}
		}
	}
	
	//imgData=removeWhiteLines(imgData);
	
	//imgData=random_imgData_cyclic(imgData);
	
	var canvas4 = document.getElementById("myCanvas4");
	var ctx4 = canvas4.getContext("2d");
	
	ctx4.putImageData(imgData,0,0);
	
	var canvas = document.getElementById("myCanvas7");
	var mw = (canvas4.width/2)/4;
	var mh = (canvas4.height/2)/4;
	
	
	canvas.width=mw*6;
	canvas.height=mh*6;
	var ctx = canvas.getContext("2d");
	ctx.putImageData(ctx4.getImageData(mw,mh,mw*6, mh*6),0,0);
	

	
	
}

