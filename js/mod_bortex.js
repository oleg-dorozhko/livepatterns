// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRndColor()
{
	var r = getRandomInt(0, 256);
	var g = getRandomInt(0, 256);
	var b = getRandomInt(0, 256);
	var a = 255;
	
	return [r,g,b,a];
	
}

function compareColors(color,color2)
{
	if(
			(color2[0]==color[0]) && 
			(color2[1]==color[1]) && 
			(color2[2]==color[2]) 
			// && (color2[3]==color[3]) 
							
						
		)
		{
			return true;
			
		}	
		
		return false;
}

function getColorArrayFromImageData(imgData0, x, y)
{
	
		var idx = ( imgData0.width * y + x) << 2;	
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}

function getColorArrayFromImageDataByIndex(imgData0, idx)
{
	
		
		var arr0 = [];
		arr0[0] = imgData0.data[idx];	
		arr0[1] = imgData0.data[idx+1];	
		arr0[2] = imgData0.data[idx+2];
		arr0[3] = imgData0.data[idx+3];	
		
		return arr0;
}




function includesColor(colors, color)
{
	for(var i=0;i<colors.length;i++)
	{
		
		if(
					(colors[i][0] == color[0]) &&
					(colors[i][1] == color[1]) &&
					(colors[i][2] == color[2]) 
					// &&	(colors[i][3]== color[3])
					
		) 
			{
				return true;
			}
	}
	return false;
}


function setPoint(im0, w, i,j,x,y,color)
{
	var idx = w * (j+y) + (i+x) << 2;
	
	im0.data[idx] = color[0];
	im0.data[idx+1] = color[1];
	im0.data[idx+2] = color[2];
	im0.data[idx+3] = color[3];
	
	return im0;
}


function bortex(im0,im)
{
	var color2 = getRndColor();
	
	var colors = getArrayOfColors(im0,global_number_of_colors);

	var w = im.width;
	var h = im.height;
	
		for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var color = getColorArrayFromImageDataByIndex(im,idx);
					try
					{
						if( includesColor(colors,color) == false)
						{
							im = setPoint(im,im.width, x,y,0,0,color2);
						}
					}
					catch (e)
					{
					}
					
					
			}
		}

		return im;
}
