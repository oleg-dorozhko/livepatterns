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
function getAllEqualRndColor()
{
	var f = getRandomInt(0, 2);
	var r = getRandomInt(0, 256);
	if(f==0) r=0;
	f = getRandomInt(0, 2);
	var g =  getRandomInt(0, 256);
	if(f==0) g=0;
	// getRandomInt(0, 256);var b = r;
	f = getRandomInt(0, 2);
	var b= getRandomInt(0, 256);
	if(f==0) b=0;
	//getRandomInt(0, 256);
	var a = 255;
	
	return [r,g,b,a];
	
}
function cyclic_random_plus ( a1, a2 )
{
	return (a1+a2) % 256;
}


function random_with_param(n1,n2,n3,n4)
{
	//if()
	/******
	console.log((255+2) % 256 );
	console.log((255+1) % 256 );
	console.log((255+0) % 256 );
	console.log((255+254) % 256 );
	console.log((255+255) % 256 );
	console.log((255+256) % 256 );
	console.log((255+257) % 256 );
	return;
	****/
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	var w = canvas.width;
	var h = canvas.height;
	
	
	var im0 = context.getImageData(0,0,canvas.width,canvas.height);
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w;
		canvas2.height = h;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);

	
	var r = n1;
	var g = n2;
	var b = n3;
	var a = 0;
			
			

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im.data[new_idx] =   cyclic_random_plus ( im0.data[idx], r );
					im.data[new_idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
					im.data[new_idx+2] =  cyclic_random_plus ( im0.data[idx+2], b );
					im.data[new_idx+3] =  cyclic_random_plus ( im0.data[idx+3], a );
					
					
					
					
				}
			}

			
			canvas.width = canvas2.width;
			canvas.height = canvas2.height;
			context = canvas.getContext("2d");
			context.putImageData(im,0,0);
			
			setTimeout( function(){
				logg('random('+r+','+g+','+b+',255)'); //after or before? what question
			}, 100 );	
			
			
			
}
function condition_random_inv ( a1, a2 )
{
	if(a2==0) return a1;
	return 255-a1;
}
function random_includesColor(colors, color, lim)
{
	for(var i=0;i<colors.length;i++)
	{
		if(
					(Math.abs(colors[i][0] - color[0])<=lim) &&
					(Math.abs(colors[i][1] - color[1])<=lim) &&
					(Math.abs(colors[i][2] - color[2])<=lim) 
					
		) 
			{
				return true;
			}
	}
	return false;
}
function part_inv(im0)
{
	
	var w = im0.width;
	var h = im0.height;
	
	var palette = getArrayOfSortedColors(im0);
	var num=0;
	if(palette.length>100) num=30;
	else num = getRandomInt(0,palette.length);
	var colors=[];
	for(var i=0;i<num;i++){ var arr=toBytesInt32(palette[getRandomInt(0,palette.length)][0]);colors.push([arr[0],arr[1],arr[2],255]);}
	
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w;
		canvas2.height = h;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);

	var col = getAllEqualRndColor();
	var r = col[0];
	var g = col[1];
	var b = col[2];
			

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					var new_idx = idx;
					if(random_includesColor(colors, color,10))
					{
					im.data[new_idx] =   condition_random_inv ( im0.data[idx], r );
					im.data[new_idx+1] =   condition_random_inv( im0.data[idx+1], g );
					im.data[new_idx+2] =  condition_random_inv ( im0.data[idx+2], b );
					im.data[new_idx+3] =  255;//cyclic_random_plus ( im0.data[idx+3], a );
					
					}
					else{
					
					im.data[new_idx] =   im0.data[idx];
					im.data[new_idx+1] = im0.data[idx+1];
					im.data[new_idx+2] = im0.data[idx+2];
					im.data[new_idx+3] =  255;//cyclic_random_plus ( im0.data[idx+3], a );
					}
					
					
				}
			}

			return im;
			
}			



function add_cyclic()
{
	/******
	console.log((255+2) % 256 );
	console.log((255+1) % 256 );
	console.log((255+0) % 256 );
	console.log((255+254) % 256 );
	console.log((255+255) % 256 );
	console.log((255+256) % 256 );
	console.log((255+257) % 256 );
	return;
	****/
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	var w = canvas.width;
	var h = canvas.height;
	
	
	var im0 = context.getImageData(0,0,canvas.width,canvas.height);
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w;
		canvas2.height = h;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);

	//var col = getRndColor();
	var r = Number(document.getElementById("red").value);
	var g = Number(document.getElementById("green").value);
	var b = Number(document.getElementById("blue").value);
	var a = 0;
			
			

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im.data[new_idx] =   cyclic_random_plus ( im0.data[idx], r );
					im.data[new_idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
					im.data[new_idx+2] =  cyclic_random_plus ( im0.data[idx+2], b );
					im.data[new_idx+3] =  cyclic_random_plus ( im0.data[idx+3], a );
					
					
					
					
				}
			}

			
			canvas.width = canvas2.width;
			canvas.height = canvas2.height;
			context = canvas.getContext("2d");
			context.putImageData(im,0,0);
			
			setTimeout( function(){
				logg('random('+r+','+g+','+b+',255)'); //after or before? what question
			}, 100 );	
			
			
			
			
}			



function rgbpp_random_imgData_cyclic(imgData)
{
	/******
	console.log((255+2) % 256 );
	console.log((255+1) % 256 );
	console.log((255+0) % 256 );
	console.log((255+254) % 256 );
	console.log((255+255) % 256 );
	console.log((255+256) % 256 );
	console.log((255+257) % 256 );
	return;
	****/
	
	//var canvas = document.getElementById("canvas");
	//var context = canvas.getContext("2d");
	
	var w = imgData.width;
	var h = imgData.height;
	
	
	var im0 = imgData;//context.getImageData(0,0,canvas.width,canvas.height);
			
		var canvas2 = document.createElement("canvas");
		canvas2.width = w;
		canvas2.height = h;
		var context2 = canvas2.getContext("2d");
		
		var im = context2.getImageData(0,0,canvas2.width,canvas2.height);

	//var col = getRndColor();
	// var r = Number(document.getElementById("red").value);
	// var g = Number(document.getElementById("green").value);
	// var b = Number(document.getElementById("blue").value);
	// var a = 0;

	var r=10;		
	var g=10;	
    var b=10;
    var a=0;	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im.data[new_idx] =   cyclic_random_plus ( im0.data[idx], r );
					im.data[new_idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
					im.data[new_idx+2] =  cyclic_random_plus ( im0.data[idx+2], b );
					im.data[new_idx+3] =  cyclic_random_plus ( im0.data[idx+3], a );
					
					
					
					
				}
			}
			context2.putImageData(im,0,0);
			//return context2.getImageData(0,0,w,h);
			
		return canvas2;	
}
function random_compareColors(color,color2)
{
	if(
			(color2[0]==color[0]) && 
			(color2[1]==color[1]) && 
			(color2[2]==color[2]) && (color2[3]==color[3]) 
							
						
		)
		{
			return true;
			
		}	
		
		return false;
}



function random_imgData_one_color(im0)
{
	var w = im0.width;
	var h = im0.height;
	
		var colors = getArrayOfColors(im0,global_number_of_colors);
		
		
		var rnd_ind=getRandomInt(0,colors.length);
		var color2=colors[rnd_ind];
		
		var col = getRndColor();
		
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					var idx = (w * y + x) << 2;
					
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					
					if( random_compareColors(color2,color) == true)
					{
						im0 = setPoint(im0,im0.width, x,y,0,0,col);
					}
					//else
					//{
						// a tut zakraska
					//}
					
				
				}
			}
			
		return im0;
		
		
		
}

global_alpha50_color=null;

function random_alpha_imgData(im0)
{
	var w = im0.width;
	var h = im0.height;
	
		var colors = getArrayOfColors(im0,global_number_of_colors);
		var col = getRndColor();
		
		if(global_alpha50_color!=null)
		{
			
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					var idx = (w * y + x) << 2;
					
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					
					if( random_compareColors(global_alpha50_color,color) == true)
					{
						im0 = setPoint(im0,im0.width, x,y,0,0,col);
					}
					//else
					//{
						// a tut zakraska
					//}
					
				
				}
			}
			
			
			
		}
		
		var rnd_ind=getRandomInt(0,colors.length);
		var color2=colors[rnd_ind];
		
		var col = getRndColor();
		
		global_alpha50_color=[col[0],col[1],col[2],128];
		
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					var idx = (w * y + x) << 2;
					
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					
					if( random_compareColors(color2,color) == true)
					{
						im0 = setPoint(im0,im0.width, x,y,0,0,global_alpha50_color);
					}
					//else
					//{
						// a tut zakraska
					//}
					
				
				}
			}
			
		return im0;
		
		
		
}























function random_imgData_cyclic(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	
	
	

	var col = getRndColor();
	var r = col[0];
	var g = col[1];
	var b = col[2];
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im0.data[new_idx] =   cyclic_random_plus ( im0.data[idx], r );
					im0.data[new_idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
					im0.data[new_idx+2] =  cyclic_random_plus ( im0.data[idx+2], b );
					im0.data[new_idx+3] =  255;
					
					
					
					
				}
			}
			
		return im0;
}		




function filter_cyclic_random_plus ( a1, a2,num )
{
	
	return (((a1+a2) % num)+1) * (255/num|0);
}



function filter_random_imgData_cyclic(im0,filter)
{
	
	
	var w = im0.width;
	var h = im0.height;
	
	
	

	var col = getRndColor();
	var r = col[0];
	var g = col[1];
	var b = col[2];
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im0.data[new_idx] =   filter_cyclic_random_plus ( im0.data[idx], r ,filter[0]);
					im0.data[new_idx+1] =  filter_cyclic_random_plus ( im0.data[idx+1], g ,filter[1]);
					im0.data[new_idx+2] =  filter_cyclic_random_plus ( im0.data[idx+2], b ,filter[2]);
					im0.data[new_idx+3] =  255;
					
					
					
					
				}
			}
			
		return im0;
}


function random_all_equal_imgData_cyclic(im0)
{
	
	
	var w = im0.width;
	var h = im0.height;
	
	
	

	var col =  getAllEqualRndColor();
	var r = col[0];
	var g = col[1];
	var b = col[2];
	

			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					
					im0.data[new_idx] =   cyclic_random_plus ( im0.data[idx], r );
					im0.data[new_idx+1] =  cyclic_random_plus ( im0.data[idx+1], g );
					im0.data[new_idx+2] =  cyclic_random_plus ( im0.data[idx+2], b);
					im0.data[new_idx+3] =  255;
					
					
					
					
				}
			}
			
		return im0;
}

function filter_yellow_color_imgData(im0)
{
			
	var w = im0.width;
	var h = im0.height;
	
			//for (var y = 0; y < h; y++) {
		

			for (var idx = 0; idx < w*h*4; idx++) {
				
					
					//var idx = (w * y + x) << 2;
					//var mappedColor = mapColorToPalette([[]],data[i], data[i + 1], data[i + 2]);
					//if(mappedColor==undefined) [0,0,0,255];
					if((im0.data[idx] == 255)&&(im0.data[idx+1] == 255)&&(im0.data[idx+2] == 0)&&(im0.data[idx+3] == 255))
					{
						im0.data[idx] =  global_for_filter_yellow_imgData.data[idx];
						im0.data[idx+1] = global_for_filter_yellow_imgData.data[idx+1]; 
						im0.data[idx+2] = global_for_filter_yellow_imgData.data[idx+2];
						im0.data[idx+3] =  global_for_filter_yellow_imgData.data[idx+3];
					}
					// else
					// {
					// var new_idx = idx;
					// var t = im0.data[idx];
					// im0.data[new_idx] =  im0.data[idx+1];
					// im0.data[new_idx+1] = im0.data[idx+2]; 
					// im0.data[new_idx+2] =  t;
					////im0.data[new_idx+3] =  im0.data[idx+3];
					// }
					
					
					
				}
			//}
			
		return im0;
}

function pereplet2_imgData(im_ish,im0,filter)
{
		
	var w = im0.width;
	var h = im0.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					//var mappedColor = mapColorToPalette([[]],data[i], data[i + 1], data[i + 2]);
					//if(mappedColor==undefined) [0,0,0,255];
					if((im0.data[idx] == 255)&&(im0.data[idx+1] == 255)&&(im0.data[idx+2] == 0)&&(im0.data[idx+3] == 255))
					{
						//im0.data[idx] =  im_ish.data[idx];
						//im0.data[idx+1] = im_ish.data[idx+1]; 
						//im0.data[idx+2] = im_ish.data[idx+2];
						//im0.data[idx+3] =  im_ish.data[idx+3];
					}
					else
					{
					var new_idx = idx;
					var t = im0.data[idx];
					im0.data[new_idx] =  im0.data[idx+1];
					im0.data[new_idx+1] = im0.data[idx+2]; 
					im0.data[new_idx+2] =  t;
					//im0.data[new_idx+3] =  im0.data[idx+3];
					}
					
					
					
				}
			}
			
		return im0;
}

function pereplet_imgData(im0,filter)
{
		
	var w = im0.width;
	var h = im0.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					
					var new_idx = idx;
					var t = im0.data[idx];
					im0.data[new_idx] =  im0.data[idx+1];
					im0.data[new_idx+1] = im0.data[idx+2]; 
					im0.data[new_idx+2] =  t;
					im0.data[new_idx+3] =  255;
					
					
					
					
				}
			}
			
		return im0;
}

function rgb_pm_pro_imgData(im0,mask)
{
	return makergbplusminus(im0,mask);
}



		