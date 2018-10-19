function drawPoint(x,y)
{
	var canvas2 = document.getElementById("canvas0");
	var context2 = canvas2.getContext("2d");
	context2.fillStyle=getStrColorFromRGBAArray(getGlobalFillColor()); 
	context2.fillRect(x,y,global_cell_size, global_cell_size);
}

function fillRectangleFast(imgData2, x, y, n, m, col )
{
	
	for(var j=y;j<y+m;j++)
	{
		for(var i=x;i<x+n;i++)
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


function getStrColorFromRGBAArray(data)
{
	return "rgba("+data[0]+','+data[1]+','+data[2]+','+data[3]/255+')';
}

function getWHDNeighbors(x, y, dx, dy,w,h)
{
	var arr=[];
	if(((x-dx)>=0)&&((y-dy)>=0)) arr.push([x-dx,y-dy]);
	if((x-dx)>=0) arr.push([x-dx,y]);
	if(((x-dx)>=0)&&((y+dy)<h)) arr.push([x-dx,y+dy]);
	if((y-dy)>=0)arr.push([x,y-dy]);
	
	if((y+dy)<h)arr.push([x,y+dy]);
	if(((x+dx)<w)&&((y-dy)>=0))arr.push([x+dx,y-dy]);
	if(((x+dx)<w))arr.push([x+dx,y]);
	if(((x+dx)<w)&&((y+dy)<h))arr.push([x+dx,y+dy]);
	return arr;
	
}

function includesColor(colors, color)
{
	for(var i=0;i<colors.length;i++)
	{
		if(
					(colors[i][0] == color[0]) &&
					(colors[i][1] == color[1]) &&
					(colors[i][2] == color[2]) &&
					(colors[i][3]== color[3])
					
		) 
			{
				return true;
			}
	}
	return false;
}


function getMaxBackgroundFillColor(arr0)
{
	var canvas2 = document.getElementById("canvas0");
	var context2 = canvas2.getContext("2d");
	var imgData2 = context2.getImageData(0,0,canvas2.width, canvas2.height);
	
	var colors = [];
	var obj={};
	var arr = arr0[1];
	for(var j=0;j<arr.length;j++)
	{
		var x=arr[j][0];
		var y=arr[j][1];
		
		var color = getColorArrayFromImageData(imgData2, x, y);
		
		var arr2 = getWHDNeighbors(x, y, global_cell_size, global_cell_size,canvas2.width, canvas2.height);
	
		for(var i=0;i<arr2.length;i++)
		{
			var x1=arr2[i][0];
			var y1=arr2[i][1];
			
			var color2 = getColorArrayFromImageData(imgData2, x1, y1);
			
			
			if( (color2[0]==color[0]) && (color2[1]==color[1]) && (color2[2]==color[2]) && (color2[3]==color[3])  )
							
			{
			
			
			
			
			
			
			}
			else
			{
				
				if( includesColor(colors, color2)==false) 
				{
					colors.push(color2);
					obj[''+color2.join('_')] = 1;
				}
				else
				{
					obj[''+color2.join('_')] ++;
				}
				
				
			}
			
		}
		
	
	}	
	
	var max=0;
	var ind= -1;
		for(var i=0;i<colors.length;i++)
		{
			if(max<obj[''+colors[i].join('_')])
			{
				ind=i;
				max=obj[''+colors[i].join('_')];
			}
		}
		
		return colors[ind];
	
	
}

function post_bubabu(aaa_arr,color)
{
	
	var canvas2 = document.getElementById("canvas0");
	var context2 = canvas2.getContext("2d");	
	
	//var n=0;
	for(var j=0;j<aaa_arr.length;j++)
	{
		var x=aaa_arr[j][0];
		var y=aaa_arr[j][1];
			
		context2.fillStyle='rgba('+color[0]+','+color[1]+','+color[2]+','+color[3]/255+')'; 
		context2.fillRect(x,y,global_cell_size, global_cell_size);
				
		//n++;
		//if(n>200) break;getMaxBackgroundFillColor(arr);
	}
	

}
