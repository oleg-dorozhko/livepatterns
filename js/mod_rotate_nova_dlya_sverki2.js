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


