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

function eql(a,b,dc)
{
	return (Math.abs(a-b)<=dc);
}


function _inv ( a )
{
	return (255 - a);
}

function inv(color)
{
	color[0]= _inv(color[0]);
	color[1]= _inv(color[1]);
	color[2]= _inv(color[2]);
	color[0]= _inv(color[0]);
	return color;
}

function getCloneOneColorCanvas(im0,dr,dg,db,da,color)
{
	
	

	var w = im0.width;
	var h = im0.height;
	
	
	var cnv = document.createElement("canvas");
	cnv.width=w;
	cnv.height=h;
	ctx = cnv.getContext("2d");
	ctx.putImageData(im0,0,0);
	var im=ctx.getImageData(0,0,w,h);
		
				
	
			

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					
					
			if( eql( im.data[idx],color[0],dr) && eql(im.data[idx+1],color[1],dg) && eql(im.data[idx+2],color[2],db) && eql(im.data[idx+3],color[3],da)  )
			{
			
					
					
				
					
					
				
			}
			else
			{
				im.data[new_idx] =   0;//inv ( im.data[idx] );
				im.data[new_idx+1] =  0;//inv ( im.data[idx+1] );
				im.data[new_idx+2] =  0;//inv ( im.data[idx+2] );
				im.data[new_idx+3] =  0;
					
			}

			
			
			}			

	}
	
	return im;
}
function getPointIndex(points, point)
{
	for(var i=0;i<points.length;i++)
	{
		if((points[i][0]==point[0])&&(points[i][1]==point[1])) {
				return i;
			}
	}
	return null;
}

function obvod(im0,x0,y0,dx,dy,dr,dg,db,da,color,fill_color)
{
	var im = getCloneOneColorCanvas(im0,dr,dg,db,da,color);
	
	// if(document.getElementById("obvod_nova_mode_leave_color").checked)
	// {
		// var canvas2 = document.getElementById("canvas0");
		// var context2 = canvas2.getContext("2d");
		// context2.putImageData(im,0,0);	
		// //return [[],[],[]];
	// }
	
	var result_array0 = []; //array where all points with color
	var result_array1 = [];
	var result_array2 = [];
	var result_array3 = [];
	var process_array = [[x0,y0]];
	
		
	//var n=0;	
	while( process_array.length > 0 )
	{
		//n++;
		var x=process_array[0][0];
		var y=process_array[0][1];
		
		im = fillRectangleFast(im, x, y, dx, dy, fill_color);
		
		result_array0.push([x,y]);
		
		process_array.splice(0,1);
		
	// if(document.getElementById("obvod_nova_mode_leave_color").checked)
	// {
		// setTimeout(function(im){
			// return function(){
		// var canvas2 = document.getElementById("canvas0");
		// var context2 = canvas2.getContext("2d");
			// context2.putImageData(im,0,0);	}
		// }(im),300*n);
	// }
		
		
		var arr = getWHDNeighbors(x, y, dx, dy,im.width,im.height);
					
		var counter = 0;
		// var counter1 = 0;
		// var counter2 = 0;
		for(var i=0;i<arr.length;i++)
		{
			var x1=arr[i][0];
			var y1=arr[i][1];
			
			var color2 = getColorArrayFromImageData(im, x1, y1);
			
			
			if( eql(color2[0],color[0],dr) && eql(color2[1],color[1],dg) && eql(color2[2],color[2],db) && eql(color2[3],color[3],da)  )
			{
				counter++;
				var point=[x1,y1];
				if(getPointIndex(process_array, point)==null) {
					process_array.push(point);
			//	
				}
				
			 }
			 else if( eql(color2[0],fill_color[0],dr) && eql(color2[1],fill_color[1],dg) && eql(color2[2],fill_color[2],db) && eql(color2[3],fill_color[3],da) )
			 {
				 counter++;
			 }
			 else{
				 
				 if(getPointIndex(result_array3, [x1,y1])==null) result_array3.push([x1,y1]);
			 }
			//else{	counter1++;		}
			
		}
		
		if(counter==arr.length)
		{
			if(getPointIndex(result_array1, [x,y])==null) result_array1.push([x,y]);
		}
		else{
			if(getPointIndex(result_array2, [x,y])==null) result_array2.push([x,y]);
		}
		
		// if(counter1>0)
		// {
			
		// }
		// else if(counter==arr.length)
		// {
			// if(getPointIndex(result_array1, [x,y])==null) result_array1.push([x,y]);
		// }
		
		// im = fillRectangleFast(im, x, y, dx, dy, inv(color));
		
		/**
		else
		{
			if(getPointIndex(result_array2, [x,y])==null) result_array2.push([x,y]);
		}
		**/
			
	}
	return [result_array0,result_array1,result_array2,result_array3]; 
}

// 0.0. Делаем клона канваса только с цветом искомым
// 0.1 Берем точку x,y
// 0.2 Если она искомого цвета на клоне канваса то запишем ее в результирующий массив и после этого тушим эту точку инверсией на клоне канваса
// 0.25 А еще эту точку в массив обработки точек окружения
// запишем
// 0.3 Если точка не искомого цвета не записываем в результирующий массив и не тушим инверсией

// цикл обработки точек окружения
// 1.0 Берем и удаляем из  массива обработки точек окружения первую точку

// 0.4 Если вокруг этой точки есть точки искомого цвета на клоне канваса все эти точки прячем в результирующий массив и после этого тушим все эти точки инверсией на клоне канваса
// и после этого все эти точки в массив обработки точек окружения запишем

// 0.3 Если точка не искомого цвета не записываем в результирующий массив и не тушим инверсией
// но записываем в бордер результирующий массив

// 04. а третий массив даст нам точки где количество окружающих меьше 8 то есть окантовку
// 0.5 Вход в цикл
// а при сравнении нечетком это будет просто бомба!!!

//вызов Integer.compare (х, у) возвращает ноль, если х и у равны, отрицательное число, если х < у, и положительное число, если х > у. 
/********
class LengthStringComparator implements Comparator<String> {
    public int compare(String firstStr, String secondStr) {
        return Integer.compare(firstStr.length(),secondStr.length());
    }
}
   
Arrays.sort(strings, new LengthStringComparator ());
***/