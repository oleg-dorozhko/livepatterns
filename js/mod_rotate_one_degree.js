var gl_st=1;
var global_x0=0;
var global_y0=0;
var global_step_x= gl_st;
var global_step_y= gl_st;
var global_step_x1= -gl_st;
var global_step_y1= gl_st;
var global_step_x2= gl_st;
var global_step_y2= -gl_st;
var global_step_x3= -gl_st;
var global_step_y3= -gl_st;
var global_x1=0;
var global_y1=0;
var global_x2=0;
var global_y2=0;
var global_x3=0;
var global_y3=0;






function __rotate() {
	 var imgData = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
  var canvas = document.getElementById("myCanvas");
  var context = canvas.getContext("2d");
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);
	
  // Move registration point to the center of the canvas
  context.translate(canvas.width/2, canvas.width/2);
	
  // Rotate 1 degree
  context.rotate(Math.PI / 180);
    
  // Move registration point back to the top left corner of canvas
  context.translate(-canvas.width/2, -canvas.width/2);
	/*
  context.fillStyle = "red";
  context.fillRect(canvas.width/4, canvas.width/4, canvas.width/2, canvas.height/4);
  context.fillStyle = "blue";
  context.fillRect(canvas.width/4, canvas.width/2, canvas.width/2, canvas.height/4);
  */
 
  context.putImageData(imgData, canvas.width/4, canvas.width/4);
}


function getRandomXYColor()
{
	var canvas = document.getElementById('canvas0');
    var ctx = canvas.getContext("2d");
	var x = getRandomInt(0, canvas.width);
	var y = getRandomInt(0, canvas.height);
	var im = ctx.getImageData(x,y,1,1);
	var color = 'rgba('+im.data[0]+','+im.data[1]+','+im.data[2]+','+(im.data[3]/255)+')';
	console.log("color="+color);
	//return 'gold';
	
	return color;
}

function drawRotated(img,id,id2, degrees, callback ){
	
	
	// var canvas = document.getElementById(id);
    // var ctx = canvas.getContext("2d");
    // ctx.clearRect(0,0,canvas.width,canvas.height);
	// ctx.drawImage(img,0,0);
	// var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
	
	// imgData = mod_nova_rotate2_rotate_nova_auto(imgData,degrees);
	
	// var canvas2 = document.getElementById(id2);
	// var ctx2 = canvas2.getContext("2d");
	// ctx2.putImageData(imgData,-canvas2.width/4,-canvas2.height/4);
	
	/////////////////////////////////////////////////////////////////////////////
	
	
	
	// ctx2.fillStyle="rgba(0,0,0,1)";//getRandomXYColor(id);
	
	// ctx2.beginPath();
    // ctx2.moveTo(75,50);
    // ctx2.lineTo(100,75);
    // ctx2.lineTo(100,25);
    // ctx2.fill();
	
	
	
	
	var canvas = document.getElementById(id);
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.putImageData(global_im_insane_rotate,0,0);
	//ctx.fillStyle="yellow";//getRandomXYColor(id);
	//ctx.fillRect(0,0,canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width/2,canvas.height/2);
    ctx.rotate(degrees*Math.PI/180);
    ctx.drawImage(img,-img.width/2,-img.width/2);
    ctx.restore();
	
	var canvas2 = document.getElementById(id2);
	var ctx2 = canvas2.getContext("2d");
	ctx2.drawImage(canvas,0,0);
	
	callback();
	
	//var canvas3 = document.getElementById("myCanvas3");
	//var ctx3 = canvas3.getContext("2d");
	//ctx3.drawImage(canvas,0,0);
}

var counter1=  0;//Number(document.getElementById('rotate_counter2').value);
var counter= 0;//Number(document.getElementById('rotate_counter1').value);
var global_img = null;
function rotate() {
		
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	global_step = Number(document.getElementById('step').value);
	
	counter1=  Number(document.getElementById('rotate_counter2').value);
	counter= Number(document.getElementById('rotate_counter1').value);
	
	//setInterval(__rotate, 100);
	var canvas = document.getElementById("canvas0");
	//var context = canvas.getContext("2d");
	global_img = new Image();
	global_img.id = "pic";
	global_img.onload = function(){
		//document.getElementById('canvas0').width = img.width;
		//document.getElementById('canvas0').height = img.height;
	
		
		
		

			
			
			drawRotated(global_img,'myCanvas', 'myCanvas2',counter, function(){
				drawRotated(global_img,'myCanvas1', 'myCanvas3',counter1, function(){
					
					
					hlyup('myCanvas2','myCanvas3',function(){
									
			
			
			
			
			// drawRotated(img,'myCanvas', 'myCanvas5',counter, function(){
				// drawRotated(img,'myCanvas1', 'myCanvas6',counter1, function(){
					
					
					// hlyup('myCanvas5','myCanvas6',function(){
						
						// var imgData = __half('myCanvas4');
						 // imgData = mirror_right(imgData);
						 // imgData = mirror_down(imgData);
						// document.getElementById('myCanvas4').getContext("2d").putImageData(imgData,0,0);
						
					if(counter>=360)
					{	
						counter= 0;			
						counter1= 0;		
						//counter= -1;
						
						document.getElementById('rotate_counter1').value=counter;
						document.getElementById('rotate_counter2').value=counter1;
					
						//rotate();
						
						//setTimeout(,delay);
	
	
						return;
					}
					counter+=global_step;
					
					if(counter1< -360){
						//counter1= 1;
						
						counter1= 0;
						
						return;						
					}
						
					counter1-=global_step;
					
					document.getElementById('rotate_counter1').value=counter;
					document.getElementById('rotate_counter2').value=counter1;
					
					
					//whenSaveImageOnServerButtonClicked(1, document.getElementById("myCanvas4"));
					
		//var imgData=ctx2.getImageData(0,0,canvas2.width,canvas2.height);

		//ctx2.putImageData(random_imgData_cyclic(imgData),0,0);
		
						// var imgData=document.getElementById("myCanvas4").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			// imgData=random_imgData_cyclic(imgData);
			// document.getElementById("myCanvas4").getContext("2d").putImageData(imgData,0,0);
					});
					
				});
			});
			
			
			
			
	}
	global_img.src = canvas.toDataURL();
	
	
	
}

function rotateWithSave( callback ) {
		
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	global_step = Number(document.getElementById('step').value);
	
	
	//setInterval(__rotate, 100);
	var canvas = document.getElementById("canvas0");
	//var context = canvas.getContext("2d");
	global_img = new Image();
	global_img.id = "pic";
	global_img.onload = function(){
		//document.getElementById('canvas0').width = img.width;
		//document.getElementById('canvas0').height = img.height;
	
		
		
		

			
			
			drawRotated(global_img,'myCanvas', 'myCanvas2',counter, function(){
				drawRotated(global_img,'myCanvas1', 'myCanvas3',counter1, function(){
					
					
					hlyup('myCanvas2','myCanvas3',function(){
									
			
			
			
			
			// drawRotated(img,'myCanvas', 'myCanvas5',counter, function(){
				// drawRotated(img,'myCanvas1', 'myCanvas6',counter1, function(){
					
					
					// hlyup('myCanvas5','myCanvas6',function(){
						
						// var imgData = __half('myCanvas4');
						 // imgData = mirror_right(imgData);
						 // imgData = mirror_down(imgData);
						// document.getElementById('myCanvas4').getContext("2d").putImageData(imgData,0,0);
						
					if(counter>=360)
					{	
						counter= 0;			
						counter1= 0;		
						document.getElementById('rotate_counter2').value=0;
						document.getElementById('rotate_counter1').value=0;
	
						
					}
					else
					{
						
						counter+=global_step;
						document.getElementById('rotate_counter1').value=counter;
						if(counter1< -360){
							//counter1= 1;
							
							counter1= 0;
							document.getElementById('rotate_counter2').value=0;
												
						}
						else
						{
							counter1-=global_step;
							document.getElementById('rotate_counter2').value=counter1;
							if((global_frame_counter==0)||(global_frame_counter==global_frame_lim)) 
							{
								
							}
							else
							{
								whenSaveImageOnServerButtonClicked(global_password, global_folder_name, getBorderedCanvas(), function(){
										callback();
										return;
									}
								
								);
							}
						}
					
					}
					
				//	callback();
					
		//var imgData=ctx2.getImageData(0,0,canvas2.width,canvas2.height);

		//ctx2.putImageData(random_imgData_cyclic(imgData),0,0);
		
						// var imgData=document.getElementById("myCanvas4").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			// imgData=random_imgData_cyclic(imgData);
			// document.getElementById("myCanvas4").getContext("2d").putImageData(imgData,0,0);
					});
					
				});
			});
			
			
			
			
	}
	global_img.src = canvas.toDataURL();
	
	
	
}

var global_step=3;
var global_insane_delay=100;
var global_rotate_stop=false;
var global_rotate_interval_ID = null;
function rotate_auto() {
	
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	global_step = Number(document.getElementById('step').value);
	
	if(document.getElementById("rotate_auto").value=='rotate auto')
	{
		document.getElementById("rotate_auto").value='rotate auto off';
		global_rotate_stop=false;
	}
	else{
		global_rotate_stop=true;
		document.getElementById("rotate_auto").value='rotate auto';
		clearInterval(global_rotate_interval_ID);
			return;
	}
	//setInterval(__rotate, 100);
	var canvas = document.getElementById("canvas0");
	//var context = canvas.getContext("2d");
	var img = new Image();
	img.id = "pic";
	img.onload = function(img){
		//document.getElementById('canvas0').width = img.width;
		//document.getElementById('canvas0').height = img.height;
	
		
		
		global_rotate_interval_ID =	setInterval( function() {
			
			if(global_rotate_stop==true){
			clearInterval(global_rotate_interval_ID);
			return;
			}

			
			
			drawRotated(img,'myCanvas', 'myCanvas2',counter, function(){
				drawRotated(img,'myCanvas1', 'myCanvas3',counter1, function(){
					
					
					hlyup('myCanvas2','myCanvas3',function(){
									
			
			
			
			
			// drawRotated(img,'myCanvas', 'myCanvas5',counter, function(){
				// drawRotated(img,'myCanvas1', 'myCanvas6',counter1, function(){
					
					
					// hlyup('myCanvas5','myCanvas6',function(){
						
						// var imgData = __half('myCanvas4');
						 // imgData = mirror_right(imgData);
						 // imgData = mirror_down(imgData);
						// document.getElementById('myCanvas4').getContext("2d").putImageData(imgData,0,0);
						
					if(counter>=360)
					{	
						counter= 0;			
						counter1= 0;		
						//counter= -1;
						clearInterval(global_rotate_interval_ID);
						
						//if(getRandomInt(0, 2)==0) rgbpp("canvas0");
						//else up("canvas0");
							
						document.getElementById("rotate_auto").value='rotate auto';
						rotate_auto();
						
						//setTimeout(,delay);
	document.getElementById('rotate_counter2').value=0;
						document.getElementById('rotate_counter1').value=0;
	
						return;
					}
					counter+=global_step;
					document.getElementById('rotate_counter1').value=counter;
					if(counter1< -360){
						//counter1= 1;
						
						counter1= 0;
						document.getElementById('rotate_counter2').value=counter1;
						clearInterval(global_rotate_interval_ID);
						return;						
					}
						
					counter1-=global_step;
					document.getElementById('rotate_counter2').value=counter1;
					
		//var imgData=ctx2.getImageData(0,0,canvas2.width,canvas2.height);

		//ctx2.putImageData(random_imgData_cyclic(imgData),0,0);
		
						// var imgData=document.getElementById("myCanvas4").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			// imgData=random_imgData_cyclic(imgData);
			// document.getElementById("myCanvas4").getContext("2d").putImageData(imgData,0,0);
					});
					
				});
			});
			
			
			
			}, global_insane_delay);
	}(img);
	img.src = canvas.toDataURL();
	
	
}


var global_im_insane_rotate=null;
function insane_rotate(im,callback)
{
	
	global_step = Number(document.getElementById('step').value);
	var rnd = getRandomInt(0,90);
	//counter1=rnd;//Number(document.getElementById('rotate_counter2').value);
	//counter=-rnd;//Number(document.getElementById('rotate_counter1').value);
	counter1=Number(document.getElementById('rotate_counter2').value);
	counter=Number(document.getElementById('rotate_counter1').value);
	
	var sfic = Number( document.getElementById('steps_for_insane_change').value);
	
	global_im_insane_rotate=im;
	
	var canvas = document.createElement("canvas");
	canvas.width=im.width;
	canvas.height=im.height;
	canvas.getContext('2d').putImageData(im,0,0);

	if(counter%sfic==0)
	{
							
		var img = new Image();
		img.id = "pic";
		img.onload = function(){

		
		var img=this;
		
				
				drawRotated(img,'myCanvas', 'myCanvas2',counter, function()    {
					drawRotated(img,'myCanvas1', 'myCanvas3',counter1, function()   {
						
						
						hlyup('myCanvas2','myCanvas3',function(im)   {
										
				
							if(counter>=360)
							{	
								counter= 0;			
								counter1= 0;		
								document.getElementById('rotate_counter1').value=counter;
								document.getElementById('rotate_counter2').value=counter1;
								
								document.getElementById("rotate_auto").value='rotate auto';
								
								
								
							}
							else
							{
								counter+=global_step;
								document.getElementById('rotate_counter1').value=counter;
								
								if(counter1< -360)  {
									
										counter= 0;			
										counter1= 0;		
										document.getElementById('rotate_counter1').value=counter;
										document.getElementById('rotate_counter2').value=counter1;
										
										document.getElementById("rotate_auto").value='rotate auto';
										
										
												
									}
									else
									{	
									
										counter1-=global_step;
										document.getElementById('rotate_counter2').value=counter1;
										
										
									} 
									
									
							 
							}
							
							callback(im);
				
				
						});
						
					});
				});
				
				
				
				
		}
		img.src = canvas.toDataURL();
	
	}
	
	
}

// var rcanvas = document.getElementById('canvas0');
	// var rctx = rcanvas.getContext("2d");
	// var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	





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
	
	//////////////////////////////////////////////////
	//var canvas377 = document.getElementById('');
	//var ctx3 = canvas3.getContext("2d");
	//var imgData3 = ctx3.getImageData(0,0,canvas3.width, canvas3.height);
	
	
	// global_im_insane_rotate
	
	// var imgData = context.getImageData(0,0,canvas.width, canvas.height);
	
	// for(var j=0;j<canvas.height;j++)
	// {
		// for(var i=0;i<canvas.width;i++)
		// {
			// var index = canvas.width*j +i << 2;
			// imgData.data[index]=global_im_insane_rotate.data[index];
			// imgData.data[index+1]=global_im_insane_rotate.data[index+1];
			// imgData.data[index+2]=global_im_insane_rotate.data[index+2];
			// imgData.data[index+3]=global_im_insane_rotate.data[index+3];
		// }
	// }
	
	
	//contex
	
	
	
	
	
	
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
	
	imgData=removeWhiteLines(imgData);
	
	//imgData=filter_yellow_color_imgData(imgData);
	
	//if(document.getElementById("filter0").checked) {imgData=nineth(imgData);
	//if(document.getElementById("filter5").checked) imgData=nonineth(imgData);}
	//imgData=random_imgData_cyclic(imgData);
	// var canvas4 = document.getElementById("myCanvas4");
	// canvas4.width=imgData.width;
	// canvas4.height=imgData.height;
	// var ctx4 = canvas4.getContext("2d");
	
	// ctx4.putImageData(imgData,0,0);
	// var canvas41 = document.getElementById("myCanvas4_1");
	// canvas41.width=canvas4.width;
	// canvas41.height=canvas4.height;
	// var ctx41 = canvas41.getContext("2d");
	
	// ctx41.putImageData(imgData,0,0);
	
	
	callback(imgData);
}

var global_magik_rotate_angle=1;

function average(a,b)
{
	return((a+b)/2)|0;
}

function isWhite(imgData, index)
{
	return (imgData.data[index]==255) && (imgData.data[index+1]==255) && (imgData.data[index+2]==255) && (imgData.data[index+3]==255);
}

function removeWhiteLines(imgData)
{
	var i=0;
	var j=0;
	for(var n=0;n<imgData.height;n++)
	{
		
			var index = imgData.width*j +i << 2;
			
		//	if(isWhite(imgData, index))
			{
				//if((!isWhite(imgData, index-4))&&(!isWhite(imgData, index+4)))
				{
					imgData.data[index]=average(imgData.data[index-4],imgData.data[index+4]);
					imgData.data[index+1]=average(imgData.data[index-4+1],imgData.data[index+4+1]);
					imgData.data[index+2]=average(imgData.data[index-4+2],imgData.data[index+4+2]);
					imgData.data[index+3]=average(imgData.data[index-4+3],imgData.data[index+4+3]);
				}	
				/*
				else if(!isWhite(imgData, index-4))
				{
					imgData.data[index]=imgData.data[index-4];
					imgData.data[index+1]=imgData.data[index-4+1];
					imgData.data[index+2]=imgData.data[index-4+2];
					imgData.data[index+3]=imgData.data[index-4+3];
				}
				else if(!isWhite(imgData, index+4))
				{
					imgData.data[index]=imgData.data[index+4];
					imgData.data[index+1]=imgData.data[index+4+1];
					imgData.data[index+2]=imgData.data[index+4+2];
					imgData.data[index+3]=imgData.data[index+4+3];
				}
				*/
			}
			
			i++;
			j++;
			
			/*
			{
				imgData.data[index]=average(imgData.data[index-4],imgData.data[index+4]);
				imgData.data[index+1]=average(imgData.data[index-4+1],imgData.data[index+4+1]);
				imgData.data[index+2]=average(imgData.data[index-4+2],imgData.data[index+4+2]);
				imgData.data[index+3]=average(imgData.data[index-4+3],imgData.data[index+4+3]);
			}
			*
			// else
			// {
				// imgData.data[index]=imgData2.data[index];
				// imgData.data[index+1]=imgData2.data[index+1];
				// imgData.data[index+2]=imgData2.data[index+2];
				// imgData.data[index+3]=imgData2.data[index+3];
			// }
			*/
		
	}
	
	
	var i=0;
	var j=imgData.height-1;
	for(var n=0;n<imgData.height;n++)
	{
		
			var index = imgData.width*j +i << 2;
			
		//	if(isWhite(imgData, index))
			{
				//if((!isWhite(imgData, index-4))&&(!isWhite(imgData, index+4)))
				{
					imgData.data[index]=average(imgData.data[index-4],imgData.data[index+4]);
					imgData.data[index+1]=average(imgData.data[index-4+1],imgData.data[index+4+1]);
					imgData.data[index+2]=average(imgData.data[index-4+2],imgData.data[index+4+2]);
					imgData.data[index+3]=average(imgData.data[index-4+3],imgData.data[index+4+3]);
				}	
				/*
				else if(!isWhite(imgData, index-4))
				{
					imgData.data[index]=imgData.data[index-4];
					imgData.data[index+1]=imgData.data[index-4+1];
					imgData.data[index+2]=imgData.data[index-4+2];
					imgData.data[index+3]=imgData.data[index-4+3];
				}
				else if(!isWhite(imgData, index+4))
				{
					imgData.data[index]=imgData.data[index+4];
					imgData.data[index+1]=imgData.data[index+4+1];
					imgData.data[index+2]=imgData.data[index+4+2];
					imgData.data[index+3]=imgData.data[index+4+3];
				}
				*/
			}
			
			i++;
			j--;
			
			/*
			{
				imgData.data[index]=average(imgData.data[index-4],imgData.data[index+4]);
				imgData.data[index+1]=average(imgData.data[index-4+1],imgData.data[index+4+1]);
				imgData.data[index+2]=average(imgData.data[index-4+2],imgData.data[index+4+2]);
				imgData.data[index+3]=average(imgData.data[index-4+3],imgData.data[index+4+3]);
			}
			*
			// else
			// {
				// imgData.data[index]=imgData2.data[index];
				// imgData.data[index+1]=imgData2.data[index+1];
				// imgData.data[index+2]=imgData2.data[index+2];
				// imgData.data[index+3]=imgData2.data[index+3];
			// }
			*/
		
	}
	
	var index1 = imgData.width*0 +0 << 2;
	var index11 = imgData.width*1 +0 << 2;
	var index12 = imgData.width*0 +1 << 2;
	
	imgData.data[index1]=average(imgData.data[index11],imgData.data[index12]);
	imgData.data[index1+1]=average(imgData.data[index11+1],imgData.data[index12+1]);
	imgData.data[index1+2]=average(imgData.data[index11+2],imgData.data[index12+2]);
	imgData.data[index1+3]=average(imgData.data[index11+3],imgData.data[index12+3]);
	
	
	var index2 = imgData.width*(imgData.height-1) +(imgData.width-1) << 2;
	var index21 = imgData.width*(imgData.height-1) +(imgData.width-2) << 2;
	var index22 = imgData.width*(imgData.height-2) +(imgData.width-1) << 2;
	
	imgData.data[index2]=average(imgData.data[index21],imgData.data[index22]);
	imgData.data[index2+1]=average(imgData.data[index21+1],imgData.data[index22+1]);
	imgData.data[index2+2]=average(imgData.data[index21+2],imgData.data[index22+2]);
	imgData.data[index2+3]=average(imgData.data[index21+3],imgData.data[index22+3]);
	
	
	
	
	
	
	
	return imgData;
}

function clip_prepare(){
	
		document.getElementById('myCanvas').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas').height = document.getElementById("canvas0").height;
		document.getElementById('myCanvas1').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas1').height = document.getElementById("canvas0").height;
		document.getElementById('myCanvas2').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas2').height = document.getElementById("canvas0").height;
		document.getElementById('myCanvas3').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas3').height = document.getElementById("canvas0").height;			
		document.getElementById('myCanvas5').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas5').height = document.getElementById("canvas0").height;
		document.getElementById('myCanvas6').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas6').height = document.getElementById("canvas0").height;	
		document.getElementById('myCanvas4').width = document.getElementById("canvas0").width;
		document.getElementById('myCanvas4').height = document.getElementById("canvas0").height;
		
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

window.addEventListener('load',function() {
	

	
});





function rotate90() {
		
	var canvas0 = document.getElementById("canvas_ish");
	var context0 = canvas0.getContext("2d");
	var im0 = context0.getImageData(0,0,canvas0.width,canvas0.height);
	
	var canvas = document.getElementById("canvas_res");
	var w = im0.width;
	var h = im0.height;
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Move registration point to the center of the canvas
	context.translate(canvas.width/2, canvas.height/2);

	// Rotate 1 degree
	context.rotate(90*Math.PI / 180);

	// Move registration point back to the top left corner of canvas
	context.translate(-canvas.width/2, -canvas.height/2);

	
	context.drawImage(canvas0,0,0);
	
	
	
}

function rotate_angle_imgData(im0,angle)
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
	
return context.getImageData(0,0,w,h);//,0,0);

}


function otkusRB(imgData,global_step_x,global_step_y)
{
	var w = imgData.width;
	var h = imgData.height;
	var canvas = document.createElement("canvas");
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	context.putImageData(imgData,0,0);
	
	return context.getImageData(0,0,w-global_step_x,h-global_step_y);
	
}

function otkusLB(imgData,global_step_x,global_step_y)
{
	var w = imgData.width;
	var h = imgData.height;
	var canvas = document.createElement("canvas");
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	context.putImageData(imgData,0,0);
	
	return context.getImageData(global_step_x,0,w-global_step_x,h-global_step_y);
	
}


function otkusRT(imgData,global_step_x,global_step_y)
{
	var w = imgData.width;
	var h = imgData.height;
	var canvas = document.createElement("canvas");
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	context.putImageData(imgData,0,0);
	
	return context.getImageData(0,global_step_x,w-global_step_x,h-global_step_y);
	
}

function otkusLT(imgData,global_step_x,global_step_y)
{
	var w = imgData.width;
	var h = imgData.height;
	var canvas = document.createElement("canvas");
	
	canvas.width = w;
	canvas.height = h;
	
	var context = canvas.getContext("2d");
	
	context.putImageData(imgData,0,0);
	
	return context.getImageData(global_step_x,global_step_y,w-global_step_x,h-global_step_y);
	
}






function show_kat_imgData(imgData,callback)
{
		
		 var canvas4 =  document.createElement('canvas');//document.getElementById('show_kat_imgData_canvas');
		canvas4.width=imgData.width;
		canvas4.height=imgData.height;
		 var ctx4 = canvas4.getContext("2d");
			
			ctx4.putImageData(imgData,0,0);
			
			var canvas = document.createElement('canvas');
			
			var otkus = 2*Math.ceil(imgData.width/6.9333333333333333333333333333333);
			var mw = imgData.width-otkus;
			var mh = imgData.height-otkus;
			
			
			
			canvas.width=mw;
			canvas.height=mh;
			var ctx = canvas.getContext("2d");
			ctx.putImageData(ctx4.getImageData(otkus/2,otkus/2,mw, mh),0,0);
			
			var imgData = ctx.getImageData(0,0,mw,mh);
			imgData = mirror_right(imgData);
			imgData = mirror_down(imgData);
			
			canvas.width=imgData.width;
			canvas.height=imgData.height;
			var rim=canvas.getContext("2d").getImageData(0,0,canvas.width,canvas.height);
			
			
			imgData=__half_imageData(imgData);
			
			
			
			global_x0+=global_step_x;
			if(global_x0==global_step_x)
			{
				global_x1=rim.width/2;
				global_y1=0;//rim.height/2;
				
				global_y2=rim.height/2;
				
				global_x3=rim.width/2;
				global_y3=rim.height/2;
				
				
			}
			
			global_y0+=global_step_y;
			global_x1+=(global_step_x1);
			global_y1+=global_step_y1;
			global_x2+=(global_step_x2);
			global_y2+=(global_step_y2);
			global_x3+=(global_step_x3);
			global_y3+=(global_step_y3);
			
			
			rim=setImageData2ResultCanvas(rim,otkusRB(imgData,global_step_x,global_step_y), global_x0,global_y0 );
			//rim=setImageData2ResultCanvas(rim,otkusLB(imgData,global_step_x1,global_step_y1), global_x1, global_y1);
			//rim=setImageData2ResultCanvas(rim,otkusRT(imgData, global_step_x2,global_step_y2), global_x2, global_y2 );
			//rim=setImageData2ResultCanvas(rim,otkusLT(imgData, global_step_x3,global_step_y3), global_x3,global_y3 );
			
			rim=__half_imageData(rim);
			rim = mirror_right(rim);
			rim = mirror_down(rim);
			
			
			canvas.getContext("2d").putImageData(rim,0,0);
			
			
			
			var lim_x0=(rim.width/2-Math.abs(global_step_x))/2;
			if((global_x0>lim_x0)||(global_x0<Math.abs(global_step_x)))
			{
				global_step_x*=-1;
				global_step_y*=-1;
				
			}
			
			var lim_x1=(rim.width/2+Math.abs(global_step_x1))/2;
			
			if(global_x1>rim.width-imgData.width-Math.abs(global_step_x1))
			{
				
				global_step_x1*=-1;
				global_step_y1*=-1;
				
			}
			else if(global_x1<lim_x1)
			{
				
				global_step_x1*=-1;
				global_step_y1*=-1;
				
			}
			
			var lim_x2=(rim.width/2-Math.abs(global_step_x2))/2;
			if((global_x2>lim_x2)||(global_x2<Math.abs(global_step_x2)))
			{
				
				global_step_x2*=-1;
				global_step_y2*=-1;
				
			}
			
			var lim_x3=(rim.width/2+Math.abs(global_step_x3))/2;
			
			if(global_x3>rim.width-imgData.width-Math.abs(global_step_x3))
			{
				
				global_step_x3*=-1;
				global_step_y3*=-1;
				
			}
			else if(global_x3<lim_x3)
			{
				
				global_step_x3*=-1;
				global_step_y3*=-1;
				
			}
			
			// if(document.getElementById("show_kat_remove_water").checked)
			// {
				// imgData = makergbplusminus0(rim,[50,50,50,1]);
			////	imgData = show_kat_remove_water(imgData,rim);
				
			// canvas.width=imgData.width;
			// canvas.height=imgData.height;
			// var ctx = canvas.getContext("2d");
			// ctx.putImageData(imgData,0,0);
			
				
				
				
			// }
			// else{
				imgData=rim;
			//}
			
		callback(imgData);
	
}



function otherButtonsProcessing()
{
	
	
	
	
	if(global_rotate_result_auto==true)
	{
		
		var canvas41 = document.getElementById("myCanvas4_1");
		var ctx41 = canvas41.getContext("2d");
		imgData=canvas41.getContext("2d").getImageData(0,0,canvas41.width,canvas41.height);
	}
	
	if(document.getElementById("show_kat").checked)
	{
		var source_canvas=document.getElementById('myCanvas4');
		if(global_rotate_result_auto==true) source_canvas=document.getElementById('myCanvas4_1');
		
		var canvas4 = source_canvas;
			var ctx4 = canvas4.getContext("2d");
			
			//ctx4.putImageData(imgData,0,0);
			var canvas = document.getElementById('myCanvas7');
			
			var otkus = 2*Math.ceil(canvas4.width/6.9333333333333333333333333333333);
			var mw = canvas4.width-otkus;
			var mh = canvas4.height-otkus;
			
			
			
			canvas.width=mw;
			canvas.height=mh;
			var ctx = canvas.getContext("2d");
			ctx.putImageData(ctx4.getImageData(otkus/2,otkus/2,mw, mh),0,0);
			
			var imgData = ctx.getImageData(0,0,mw,mh);
			imgData = mirror_right(imgData);
			imgData = mirror_down(imgData);
			
			canvas.width=imgData.width;
			canvas.height=imgData.height;
			var rim=canvas.getContext("2d").getImageData(0,0,canvas.width,canvas.height);
			
			
			imgData=__half_imageData(imgData);
			
			
			
			global_x0+=global_step_x;
			if(global_x0==global_step_x)
			{
				global_x1=rim.width/2;
				global_y1=0;//rim.height/2;
				
				global_y2=rim.height/2;
				
				global_x3=rim.width/2;
				global_y3=rim.height/2;
				
				
			}
			
			global_y0+=global_step_y;
			global_x1+=(global_step_x1);
			global_y1+=global_step_y1;
			global_x2+=(global_step_x2);
			global_y2+=(global_step_y2);
			global_x3+=(global_step_x3);
			global_y3+=(global_step_y3);
			
			
			rim=setImageData2ResultCanvas(rim,otkusRB(imgData,global_step_x,global_step_y), global_x0,global_y0 );
			//rim=setImageData2ResultCanvas(rim,otkusLB(imgData,global_step_x1,global_step_y1), global_x1, global_y1);
			//rim=setImageData2ResultCanvas(rim,otkusRT(imgData, global_step_x2,global_step_y2), global_x2, global_y2 );
			//rim=setImageData2ResultCanvas(rim,otkusLT(imgData, global_step_x3,global_step_y3), global_x3,global_y3 );
			
			rim=__half_imageData(rim);
			rim = mirror_right(rim);
			rim = mirror_down(rim);
			
			
			canvas.getContext("2d").putImageData(rim,0,0);
			
			
			
			var lim_x0=(rim.width/2-Math.abs(global_step_x))/2;
			if((global_x0>lim_x0)||(global_x0<Math.abs(global_step_x)))
			{
				global_step_x*=-1;
				global_step_y*=-1;
				
			}
			
			var lim_x1=(rim.width/2+Math.abs(global_step_x1))/2;
			
			if(global_x1>rim.width-imgData.width-Math.abs(global_step_x1))
			{
				
				global_step_x1*=-1;
				global_step_y1*=-1;
				
			}
			else if(global_x1<lim_x1)
			{
				
				global_step_x1*=-1;
				global_step_y1*=-1;
				
			}
			
			var lim_x2=(rim.width/2-Math.abs(global_step_x2))/2;
			if((global_x2>lim_x2)||(global_x2<Math.abs(global_step_x2)))
			{
				
				global_step_x2*=-1;
				global_step_y2*=-1;
				
			}
			
			var lim_x3=(rim.width/2+Math.abs(global_step_x3))/2;
			
			if(global_x3>rim.width-imgData.width-Math.abs(global_step_x3))
			{
				
				global_step_x3*=-1;
				global_step_y3*=-1;
				
			}
			else if(global_x3<lim_x3)
			{
				
				global_step_x3*=-1;
				global_step_y3*=-1;
				
			}
			
			// if(document.getElementById("show_kat_remove_water").checked)
			// {
				// imgData = makergbplusminus0(rim,[50,50,50,1]);
			////	imgData = show_kat_remove_water(imgData,rim);
				
			// canvas.width=imgData.width;
			// canvas.height=imgData.height;
			// var ctx = canvas.getContext("2d");
			// ctx.putImageData(imgData,0,0);
			
				
				
				
			// }
			// else{
				imgData=rim;
			//}
			
		
	}
		

			
					if(document.getElementById("filter7").checked)
					{
					
					
						imgData = plus(median(imgData));
						imgData = mirror_right(imgData);
						imgData = mirror_down(imgData);
						imgData = minus(imgData);
						imgData = median(imgData);
					
						if(document.getElementById("filter0").checked)
						{
							imgData = plus(imgData);
							
						}
					}
			
			
		if(document.getElementById("nanitos_when_ir").checked)
		{
			imgData = nineth(imgData);
		}
		if(document.getElementById("nonitos_when_ir").checked)
		{
			imgData = nonineth(imgData);
		}
	
		if(document.getElementById("plusos_when_ir").checked)
		{
			imgData = plus(imgData);
		}
		
		if(document.getElementById("minusos_when_ir").checked)
		{
			imgData = minus(imgData);
		}
		
		if(document.getElementById("filtering_when_ir").checked)
		{
			imgData = makergbplusminus0(imgData,getMask());
		}
		
		if(document.getElementById("_vortex").checked)
		{
			imgData = mirror_right(imgData);
			imgData = mirror_down(imgData);
								
		}
			
			
				
					
					if(document.getElementById("magik_rotate_on").checked)
			{
					
					
						imgData = __magik_rotate(imgData,global_magik_rotate_angle);
						global_magik_rotate_angle++;
						if(global_magik_rotate_angle>90)global_magik_rotate_angle=0;
						if(global_magik_rotate_angle<-90)global_magik_rotate_angle=0;
					
					
					
					}
				
				
				
				
			
			
			
		var canvas4 = document.getElementById("myCanvas77");
					canvas4.width=imgData.width;
					canvas4.height=imgData.height;
					var ctx4 = canvas4.getContext("2d");
			
					ctx4.putImageData( imgData,0,0);
			
			
			
    
		if(document.getElementById("mk_cyclon").checked)
		{
			setTimeout(function(){
			var canvas0 = document.getElementById('canvas0');
			var context0 = canvas0.getContext("2d");
			//var imgData = context.getImageData(0,0,mw,mh);
			
			var canvas = document.getElementById('myCanvas7');
			var context = canvas.getContext("2d");
			var n = canvas.width/2-canvas0.width/2;
			var m = canvas.height/2-canvas0.height/2;
			var imgData = context.getImageData(n,m,canvas0.width,canvas0.height);
			
			context0.putImageData(imgData,0,0);document.getElementById("mk_cyclon").checked=false;
			},5);
		}
		
	
	
}

function getOnlyOneSectorData(imgData, degree,nn)
{
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	
	context2.clearRect(0,0,canvas2.width,canvas2.height );
	
	context2.fillStyle='rgba(0,0,0,0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height );
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=0;
	var s='rgba(255,0,0,1.0)';
	for(var n=-180; n<180;n+=step_angle)
	{
		if(t==nn)
		{
		context2.fillStyle=s;
		
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		
		break;
		}
	t++;
	}
		var clipData = median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	// var recanvas = document.getElementById('myCanvas77');
				// recanvas.width=imgData.width;
				// recanvas.height=imgData.height;
				// var rectx = recanvas.getContext("2d");
				// rectx.putImageData(clipData,0,0);
		
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		{
		}
			else
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
		
		
		// var recanvas = document.getElementById('myCanvas77');
				// recanvas.width=imgData.width;
				// recanvas.height=imgData.height;
				// var rectx = recanvas.getContext("2d");
				// rectx.putImageData(clipData,0,0);
		
		
		
		
		
		
		
		
		return  clipData;
	
}

function cut_angle_imgData(imgData, callback)
{
	var degree = Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-180; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		if(t>2)
		{
			context2.fillStyle='rgba(255,0,0,1.0)';
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
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	
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
	
	
	//return imgData;
	
	
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==255)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		// else if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		// {
			// clipData.data[n]=imageData0.data[n];
			// clipData.data[n+1]=imageData0.data[n+1];
			// clipData.data[n+2]=imageData0.data[n+2];
			// clipData.data[n+3]=imageData0.data[n+3];
		// }
		// else
		// { 
	// var colors=[[imageData0.data[n],imageData0.data[n+1],imageData0.data[n+2],imageData0.data[n+3]],[imageData07.data[n],imageData07.data[n+1],imageData07.data[n+2],imageData07.data[n+3]]];
			// var col = mod_magik_getAverageColor(colors)//mapColorToPalette([[imageData0.data[n],imageData0.data[n+1],imageData0.data[n+2]],[imageData07.data[n],imageData07.data[n+1],imageData07.data[n+2]]],clipData.data[n], clipData.data[n+1], clipData.data[n+2])
			
			// clipData.data[n]=col[0];
			// clipData.data[n+1]=col[1];
			// clipData.data[n+2]=col[2];
			// clipData.data[n+3]=col[3];
		// }
		
		// var canvas = document.getElementById('myCanvas77');
// canvas.width = clipData.width;
	// canvas.height = clipData.height;
	// var context = canvas.getContext("2d");
	// context.putImageData(clipData,0,0);
		
	 }
	
	
	
	imgData8=clipData;
	
	
	
	
	
	//works fine
	
	
	
	
	
	
	
	
	//var imgData2 = mod_rotate2_rotate777(clipData,-30);
	var w = clipData.width;
	var h = clipData.height;
	imgData8 =  mod_rotate2_rotate777(clipData,-30);
	
	imgData8 = mirror_right( mod_cli_up_getPartOfImageData(imgData8,0,0,imgData8.width/2,imgData8.height));
	
	imgData8 =  mod_rotate2_rotate777(imgData8,60);
	
	var imgData4 = mirror_right2(imgData8);
	
	
	
		for (var n = 0; n < imgData8.data.length; n+=4) {
		
		if((imgData8.data[n]==255)&&(imgData8.data[n+1]==0)&&(imgData8.data[n+2]==0)&&(imgData8.data[n+3]==255))
		{
			imgData8.data[n]=imgData4.data[n];
			imgData8.data[n+1]=imgData4.data[n+1];
			imgData8.data[n+2]=imgData4.data[n+2];
			imgData8.data[n+3]=imgData4.data[n+3];
		}
		
		
	 }
	
	
	
	
	
	
	
	
	
	
	
	
	
	// var imgData4 = mod_rotate2_rotate777(imgData4,-30);
	// var w = imgData4.width;
	// var h = imgData4.height;
	// var imgData8 = mod_cli_up_getPartOfImageData(imgData4,0,0,w,h/2);
	// //var imgData16 = mod_cli_up_getPartOfImageData(mirror_right(imgData8),imgData8.width,0,imgData8.width,imgData8.height);
	// //var imgData16 = mirror_down(imgData16);
	
	
	
	
	////////////////////////////////////////////////////////////////////////////
	
	
	
	
	
	
	
	// var canvas = document.createElement('canvas');
	// canvas.width = w;
	// canvas.height = h/2;
	// var context = canvas.getContext("2d");
	// context.putImageData(imgData8,0,0);
	
	// //context.putImageData(imgData8,0,h/2);
	
	
	// var imgData2=mirror_down(context.getImageData(0, 0, w, h));
	
	
	
	
	
	
	
	callback(imgData8);
}





































//with error -> no normal spin rotation
function trilist_imgData(imgData, callback)
{
	var degree = 60;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-180; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		if(t>2)
		{
			context2.fillStyle='rgba(255,0,0,1.0)';
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
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==255)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
		
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		else if((clipData.data[n]==imgData.data[n])&&(clipData.data[n+1]==imgData.data[n+1])&&(clipData.data[n+2]==imgData.data[n+2])&&(clipData.data[n+3]==imgData.data[n+3]))
		{
		}
		else{
			
			
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
			
			
			
			
		}
		}
			
		
		
		
		
		var clipData0 = __half_imageData(clipData);
	//var clipData2=	mirror_right2(clipData0);
	var clipData2=mod_rotate2_rotate777(clipData,120);
	
	
	var imgData4 = mod_rotate2_rotate777(clipData,240);	
	var clipData3 = mod_cli_up_getPartOfImageData(imgData4,0,imgData4.height/2,imgData4.width,imgData4.height/2);
	//callback(clipData3);return;
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width;
	canvas2.height = imgData.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(clipData2,0,0);
	context2.putImageData(clipData0,0,0);
	context2.putImageData(clipData3,0,clipData0.height);
	
	
	var imgDataBeforeRed=cloneImageData(canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height));
	
	//callback(imgDataBeforeRed);return;
	
	
	
	cx=cx/2;
	cy=cy/2;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-180; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(255,0,0,1.0)';
		if(t%2==1)
		{
			context2.fillStyle='rgba(255,0,0,1.0)';context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		}
		
		
		t++;
	
	
	}
	clipData= canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);
	
	
	
	
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			// imgData8.data[n]=imgData4.data[n];
			// imgData8.data[n+1]=imgData4.data[n+1];
			// imgData8.data[n+2]=imgData4.data[n+2];
			// imgData8.data[n+3]=imgData4.data[n+3];
		}
		else
		{
			clipData.data[n]=imgDataBeforeRed.data[n];
			clipData.data[n+1]=imgDataBeforeRed.data[n+1];
			clipData.data[n+2]=imgDataBeforeRed.data[n+2];
			clipData.data[n+3]=imgDataBeforeRed.data[n+3];
	
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//callback(clipData);return;
	
	 var imgData4=	mirror_right2(clipData);
	
	
	 var imgData8 =  mod_rotate2_rotate777(imgData4,60);
	
	//imgData4=clipData;
	
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imgData8.data[n];
			clipData.data[n+1]=imgData8.data[n+1];
			clipData.data[n+2]=imgData8.data[n+2];
			clipData.data[n+3]=imgData8.data[n+3];
		}
		else
		{
			
			// if((imgData8.data[n]==imgDataBeforeRed.data[n])&&(imgData8.data[n+1]==imgDataBeforeRed.data[n+1])&&(imgData8.data[n+2]==imgDataBeforeRed.data[n+2])&&(imgData8.data[n+3]==imgDataBeforeRed.data[n+3]))
			// {
				
				
				
				
			// }
			// else	
			// {
				
				
				// imgData8.data[n]=imgDataBeforeRed.data[n];
				// imgData8.data[n+1]=imgDataBeforeRed.data[n+1];
				// imgData8.data[n+2]=imgDataBeforeRed.data[n+2];
				// imgData8.data[n+3]=imgDataBeforeRed.data[n+3];
				
				
			// }				
			
			
			
			
			
			
			
			
			
		}
		
		
	 }
	//clipData= imgData8;
	// imgData=imgData4;
//	  clipData= mod_rotate2_rotate777(imgData8,30);
	
	//	clipData=removeTwoVerticalWhiteLine(clipData);	  

	//	clipData= mod_rotate2_rotate777(clipData,60);
			
	//	clipData=removeTwoVerticalWhiteLine(clipData);
		
		// for (var n = 0; n < clipData.data.length; n+=4) {
		
		// if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		// {
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
		// }
		// else if((clipData.data[n]==imgData.data[n])&&(clipData.data[n+1]==imgData.data[n+1])&&(clipData.data[n+2]==imgData.data[n+2])&&(clipData.data[n+3]==imgData.data[n+3]))
		// {
		// }
		// else{
			
			
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
			
			
			
			
		// }
		// }
			
	//	clipData=circle_median(clipData);
		
	
	
	
	callback(clipData);
}

function circle_median(imgData, callback)
{
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width;
	canvas2.height = imgData.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(imgData,0,0);
	
		imgDataBeforeRed= canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);

	
	
	var canvas4 = document.createElement('canvas');
	canvas4.width = imgData.width;
	canvas4.height = imgData.height;
	var context4 = canvas4.getContext("2d");
	context4.clearRect(0,0,canvas4.width,canvas4.height);
			context4.fillStyle='rgba(255,0,0,1.0)';
			context4.beginPath();
			
			var cx=imgData.width/2;
			var cy=imgData.height/2;
			
		context4.moveTo(cx,cy);
		
		
		context4.arc(cx, cx, cx, 0, 2 * Math.PI);
		context4.fill();
		
			clipData= canvas4.getContext("2d").getImageData(0,0,canvas4.width,canvas4.height);
			
			
			
		/*	
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			// imgData8.data[n]=imgData4.data[n];
			// imgData8.data[n+1]=imgData4.data[n+1];
			// imgData8.data[n+2]=imgData4.data[n+2];
			// imgData8.data[n+3]=imgData4.data[n+3];
		}
		else
		{
			clipData.data[n]=imgDataBeforeRed.data[n];
			clipData.data[n+1]=imgDataBeforeRed.data[n+1];
			clipData.data[n+2]=imgDataBeforeRed.data[n+2];
			clipData.data[n+3]=imgDataBeforeRed.data[n+3];
	
		}
	}
	
		*/	
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		
			
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		{
		}
		else
		{
			clipData.data[n]=imgDataBeforeRed.data[n];
			clipData.data[n+1]=imgDataBeforeRed.data[n+1];
			clipData.data[n+2]=imgDataBeforeRed.data[n+2];
			clipData.data[n+3]=imgDataBeforeRed.data[n+3];
			
		}
		
	}
	
	
		
		
	callback(clipData); 
		
	
}




	function removeTwoVerticalWhiteLine(clipData)
	{
	var w = clipData.width;
	var h = clipData.height;
	for(var j=0;j<h;j++)
	{
		for(var i=w/2-1;i<w/2;i++)
		{
			var index0 = w*j +(i-2) << 2;
			var index = w*j +i << 2;
			 clipData.data[index]=clipData.data[index0];
			clipData.data[index+1]=clipData.data[index0+1];
			clipData.data[index+2]=clipData.data[index0+2];
			clipData.data[index+3]=clipData.data[index0+3];
		}
	}
	
	for(var j=0;j<h;j++)
	{
		for(var i=w/2;i<w/2+1;i++)
		{
			var index0 = w*j +(i+2) << 2;
			var index = w*j +i << 2;
			 clipData.data[index]=clipData.data[index0];
			clipData.data[index+1]=clipData.data[index0+1];
			clipData.data[index+2]=clipData.data[index0+2];
			clipData.data[index+3]=clipData.data[index0+3];
		}
	}
	
	return clipData;
	}
	



function fivelist_imgData(imgData, callback)
{
	
	var w = imgData.width;
	var h = imgData.height;
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width;
	result_canvas.height = imgData.height;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,w,h);
	nn=0;
	var degree=Number(document.getElementById('image_button33').getAttribute('angle'));
	for(var n=0;n<360;n+=degree)
	{
		
		var povorotData= mod_rotate2_rotate777(imgData,n);
		var sectorData=getOnlyOneSectorData(povorotData,degree,nn);
		result_image_data = comboSectorData(result_image_data,sectorData);
		
			// var recanvas = document.getElementById('myCanvas77');
				// recanvas.width=imgData.width;
				// recanvas.height=imgData.height;
				// var rectx = recanvas.getContext("2d");
				// rectx.putImageData(result_image_data,0,0);
		
		
		
		
		
		
		
		
		//result_image_data =sectorData;
		//break;
		nn++;
	}
	
	//mirror_result_image_data = mirror_right2( result_image_data);
	
	//var combinedData=comboSectorData(result_image_data,mirror_result_image_data);
	
	//callback(combinedData);
	
	callback(result_image_data);
}

function comboSectorData(result_image_data,clipData)
{
		
	for (var n = 0; n < result_image_data.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		{
		}
		else
		{
			result_image_data.data[n]=clipData.data[n];
			result_image_data.data[n+1]=clipData.data[n+1];
			result_image_data.data[n+2]=clipData.data[n+2];
			result_image_data.data[n+3]=clipData.data[n+3];
			
		}
		
	}
	
	
	return result_image_data;
	
}

function comboSectorData2(result_image_data,clipData)
{
		
	for (var n = 0; n < result_image_data.data.length; n+=4) {
		
		if((result_image_data.data[n]==0)&&(result_image_data.data[n+1]==0)&&(result_image_data.data[n+2]==0)&&(result_image_data.data[n+3]==0))
		{
			result_image_data.data[n]=clipData.data[n];
			result_image_data.data[n+1]=clipData.data[n+1];
			result_image_data.data[n+2]=clipData.data[n+2];
			result_image_data.data[n+3]=clipData.data[n+3];
			
			
			
		}
		
		
	}
	
	
	return result_image_data;
	
}

function showOnCanvas77(imgData)
{
	var recanvas = document.getElementById('myCanvas77');
	recanvas.width=imgData.width;
	recanvas.height=imgData.height;
	var rectx = recanvas.getContext("2d");
	rectx.putImageData(imgData,0,0);
}

function setImgData(arr,result_image_data,imgData,w,h)
{
	//imgData=mod_rotate2_rotate777(vData,60);
	// var result_canvas = document.createElement('canvas');
	// result_canvas.width = w;
	// result_canvas.height = h;
	// var result_context = result_canvas.getContext("2d");
	// result_context.putImageData(result_image_data,0,0);
	
	var n=0;
	var m=0;	
			for (var y = arr[1]; y < arr[1]+imgData.height; y++) {
				
				
				n=0;
				for (var x = arr[0]; x < arr[0]+imgData.width; x++) {
					
								
					var idx = (result_image_data.width * y + x) << 2;
					
					if((result_image_data.data[idx]==0)&&(result_image_data.data[idx+1]==0)
						&&(result_image_data.data[idx+2]==0)&&(result_image_data.data[idx+3]==0))
					{
					
					
					var idn=(imgData.width * m + n) << 2;
					result_image_data.data[idx] = imgData.data[idn];
						result_image_data.data[idx+1] = imgData.data[idn+1];
						result_image_data.data[idx+2] = imgData.data[idn+2];
						result_image_data.data[idx+3] = imgData.data[idn+3];
					}
					n++;
					
				}
				m++;
			}
	
	
	return result_image_data;
	
	
	
	
	// result_context.putImageData(imgData,arr[0],arr[1]);
	// return result_context.getImageData(0,0,result_canvas.width,result_canvas.height );
}	
		
function sixlist_imgData(imgData, callback)
{
	
	var w = imgData.width;
	var h = imgData.height;
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width*3;
	result_canvas.height = imgData.height*3;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,w*3,h*3);
	var m=w;
	var arr=[[m*0.5,0],[m*1.5,0],[0,m],[m,m],[m*2,m],[m*0.5,m*2],[m*1.5,m*2]];
	//var arr=[[m,0],[0,m],[m*2,m],[0,m*2],[m*2,m*2],[m,m*3],[m,m*1.5]];
	//for(var i=0;i<arr.length;i++)
	{
		result_image_data = setImgData(arr[0],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		result_image_data = setImgData(arr[1],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		result_image_data = setImgData(arr[2],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		result_image_data = setImgData(arr[3],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		
		result_image_data = setImgData(arr[4],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		result_image_data = setImgData(arr[5],result_image_data,cloneImageData(imgData),result_canvas.width,result_canvas.height);
		
		
		result_image_data = setImgData(arr[6],result_image_data,mirror_right2(cloneImageData(imgData)),result_canvas.width,result_canvas.height);
		
		
		
		
		
		
		
		
		
		//showOnCanvas77(result_image_data);
	}
	
	
	
	imgData=result_image_data;
	
	
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width;
	canvas2.height = imgData.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(imgData,0,0);
	
		imgDataBeforeRed= canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);

	
	
	var canvas4 = document.createElement('canvas');
	canvas4.width = imgData.width;
	canvas4.height = imgData.height;
	var context4 = canvas4.getContext("2d");
	context4.clearRect(0,0,canvas4.width,canvas4.height);
			context4.fillStyle='rgba(255,0,0,1.0)';
			context4.beginPath();
			
			var cx=imgData.width/2;
			var cy=imgData.height/2;
			
		context4.moveTo(cx,cy);
		
		
		context4.arc(cx, cx, cx*0.75, 0, 2 * Math.PI);
		context4.fill();
		
			clipData= canvas4.getContext("2d").getImageData(0,0,canvas4.width,canvas4.height);
		
			
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		{
		}
		else
		{
			clipData.data[n]=imgDataBeforeRed.data[n];
			clipData.data[n+1]=imgDataBeforeRed.data[n+1];
			clipData.data[n+2]=imgDataBeforeRed.data[n+2];
			clipData.data[n+3]=imgDataBeforeRed.data[n+3];
			
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	clipData=mod_cli_up_getPartOfImageData(clipData,clipData.width/8,clipData.height/8,w*2.25,h*2.25);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//var clipData=getOnlyOneSectorData(clipData,60,0);
	
	
	
	
	
	
	 callback(clipData);
	
	
}

function sector_imgData(imgData, callback)
{
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width;
	result_canvas.height = imgData.height;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,result_canvas.width,result_canvas.height);
	
	//imgData0=vortex(__half_imageData(getOnlyOneSectorData(imgData,60,0)));
	
	imgData=mod_rotate2_rotate777(imgData,60);
	 var clipData=vortex(__half_imageData(getOnlyOneSectorData(imgData,60,1)));
	 var imgData0=cloneImageData(clipData);
	 imgData2=mod_rotate2_rotate777(imgData0,60);
	// var clipData2=vortex(__half_imageData(getOnlyOneSectorData(imgData2,60,1)));
	 
	 clipData=comboSectorData(clipData,imgData2);
	 var imgData0=cloneImageData(clipData);
	 imgData2=mod_rotate2_rotate777(imgData0,60);
	 clipData=comboSectorData(clipData,imgData2);
	 
	 
	 
	 
	 
	 		
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if(clipData.data[n+3]!=255)		{clipData.data[n+3]=255;}
		
		
	}
	
	
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 callback(clipData);
}

function clearBottomPart(clipData)
{
	for (var n = clipData.data.length/2; n < clipData.data.length; n+=4) {
		
			clipData.data[n]=0;
			clipData.data[n+1]=0;
			clipData.data[n+2]=0;
		clipData.data[n+3]=0;
		
		
	}
	return clipData;
}

function penta_imgData(imgData, callback)
{
	
	
	
	// var result_canvas = document.createElement('canvas');
	// result_canvas.width = imgData.width;
	// result_canvas.height = imgData.height;
	// var result_context = result_canvas.getContext("2d");
	// var result_image_data =result_context.getImageData(0,0,result_canvas.width,result_canvas.height);
	// result_context.fillStyle='red';
	// result_context.fillRect(0,0,result_canvas.width,result_canvas.height);
	// //imgData0=vortex(__half_imageData(getOnlyOneSectorData(imgData,60,0)));
	
	
	//imgData=	plus(plus(imgData));
	
	
	
	
	
	imgData=mod_rotate2_rotate777(imgData,18);
	var clipData=getOnlyOneSectorData(imgData,36,2);
	clipData=mod_rotate2_rotate777(clipData,-18);
	
	//clipData=do_alf_black(clipData);
	
	var clipData=vortex(__half_imageData(clipData));
	
	clipData=clearBottomPart(clipData);
	
	var imgData0=cloneImageData(clipData);
	
	
	
	imgData2=mod_rotate2_rotate777(imgData0,72);
	clipData=comboSectorData2(clipData,imgData2);
	//showOnCanvas77(clipData);
	
	
	//callback(clipData);
	//return;
	
	
	imgData2=mod_rotate2_rotate777(imgData0,144);
	clipData=comboSectorData2(clipData,imgData2);
	//showOnCanvas77(clipData);
	imgData2=mod_rotate2_rotate777(imgData0,216);
	clipData=comboSectorData2(clipData,imgData2);
	//showOnCanvas77(clipData);
	imgData2=mod_rotate2_rotate777(imgData0,288);
	clipData=comboSectorData2(clipData,imgData2);
	//showOnCanvas77(clipData);
	
	
	
	 
	 		
	for (var n = 0; n < clipData.data.length; n+=4) {
		 // // if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		 // // {
			 
			 	// // clipData.data[n]=255;//clipData.data[nm];
				// // clipData.data[n+1]=0;//clipData.data[nm+1];
				// // clipData.data[n+2]=0;//clipData.data[nm+2];
				// // clipData.data[n+3]=255;//clipData.data[nm+3];
				
			 
			 
			 
			 
		// // }
		// // else 
		 if(clipData.data[n+3]!=255)		{clipData.data[n+3]=255;}
		
		
	}

	//clipData=minus(minus(clipData));
	
/////////////////////	// // var clipData2=vortex(__half_imageData(getOnlyOneSectorData(imgData2,60,1)));
	 
	
	 // var imgData0=cloneImageData(clipData);
	 // imgData2=mod_rotate2_rotate777(imgData0,72);
	 // clipData=comboSectorData(clipData,imgData2);
	 
	 
	 		
	// for (var n = 0; n < clipData.data.length; n+=4) {
		
		// if((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==0))
		// {
		// }
		// else if(clipData.data[n+3]<255)
		// {
			
				// var nm=n;
				// if(clipData.data[(n-4)+3]>0)
				// {
					// nm=n-4;
				// }
				// else if(clipData.data[(n+4)+3]>0)
				// {
					// nm=n+4;
				// }
				// else if(clipData.data[(n-8)+3]>0)
				// {
					// nm=n-8;
				// }
				// else if(clipData.data[(n+8)+3]>0)
				// {
					// nm=n+8;
				// } 
				// clipData.data[n]=clipData.data[nm];
				// clipData.data[n+1]=clipData.data[nm+1];
				// clipData.data[n+2]=clipData.data[nm+2];
				// clipData.data[n+3]=clipData.data[nm+3];
				// // clipData.data[n+2]=0;//clipData.data[nm+2];
				// // clipData.data[n+3]=255;//clipData.data[nm+3];
				
				// // clipData.data[n]=255;//clipData.data[nm];
				// // clipData.data[n+1]=0;//clipData.data[nm+1];
				// // clipData.data[n+2]=0;//clipData.data[nm+2];
				// // clipData.data[n+3]=255;//clipData.data[nm+3];
				
				
		// }	
				
				
				
	// }
		
		
	
	// showOnCanvas77(clipData);
	
	/* 		
	for (var index = 0; index < clipData.data.length; index+=4) {
	
			//var index = imgData.width*j +i << 2;
			
			if((clipData.data[index-4]!=clipData.data[index])||(clipData.data[index-4+1]!=clipData.data[index+1])
				||(clipData.data[index-4+2]!=clipData.data[index+2]))
			{
					clipData.data[index]=average(clipData.data[index-4],clipData.data[index+4]);
					clipData.data[index+1]=average(clipData.data[index-4+1],clipData.data[index+4+1]);
					clipData.data[index+2]=average(clipData.data[index-4+2],clipData.data[index+4+2]);
					clipData.data[index+3]=average(clipData.data[index-4+3],clipData.data[index+4+3]);
	
	
				}
	
	
	
	
	
	
	}
	
	*/
	
//	showOnCanvas77(clipData);
	
	
	
	
	 callback(clipData);
}

function is_black(clipData,n)
	{ 
		if ((clipData.data[n]==0)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255)) return true;
		return false;
	}
function do_alf_black(clipData)
{
	for (var n = 0; n < clipData.data.length; n+=4) {
		if(clipData.data[n+3]!=255)		{
				
				if(clipData.data[n+3]==0)
		 {
			 
			 	clipData.data[n]=0;//clipData.data[nm];
				clipData.data[n+1]=0;//clipData.data[nm+1];
				clipData.data[n+2]=0;//clipData.data[nm+2];
				clipData.data[n+3]=255;//clipData.data[nm+3];
				
		
			
		 }
		 else{
			 
			 	clipData.data[n]=255;
				clipData.data[n+1]=0;
				clipData.data[n+2]=0;
				clipData.data[n+3]=255;
			 
			 
		 }
				
				
				
			
				
				
				} 
				
		
		
	}
	
	// var w=clipData.width;
	
	// for (var n = 0; n < clipData.data.length; n+=4) {
		 
		
		 
			 // if(is_black(clipData,n)&&(is_black(clipData,n-4)==false)&&(is_black(clipData,n+4)==false))
			  
			  // {
				  // var colors = [];
				  // colors.push(getColorArrayFromImageDataByIndex(clipData, n-4));
				  // colors.push(getColorArrayFromImageDataByIndex(clipData, n+4));

				  // var a_color = getAverageColor(colors);
				  // clipData.data[n]=a_color[0];
				// clipData.data[n+1]=a_color[1];
				// clipData.data[n+2]=a_color[2];
				// clipData.data[n+3]=255;
				// // clipData.data[n+2]=0;//clipData.data[nm+2];
				// // clipData.data[n+3]=255;//clipData.data[nm+3];
				  
			  // }
			  // // else if(is_black(clipData,n)&&(is_black(clipData,n-4)==false)&&(is_black(clipData,n+8)==false))
			  
			  // // {
				  
				  
				   // // var colors = [];
				  // // colors.push(getColorArrayFromImageDataByIndex(clipData, n-4));
				  // // colors.push(getColorArrayFromImageDataByIndex(clipData, n+8));

				  // // var a_color = getAverageColor(colors);
				  // // clipData.data[n]=a_color[0];
				// // clipData.data[n+1]=a_color[1];
				// // clipData.data[n+2]=a_color[2];
				// // clipData.data[n+3]=255;
				
				  
				  
				  
			  // // }
			    // // else if(is_black(clipData,n)&&(is_black(clipData,n-w)==false)&&(is_black(clipData,n-4-w)==false))
			  
			  // // {
				  
				  
				   // // var colors = [];
				  // // colors.push(getColorArrayFromImageDataByIndex(clipData, n-w));
				  // // colors.push(getColorArrayFromImageDataByIndex(clipData, n-w-4));

				  // // var a_color = getAverageColor(colors);
				  // // clipData.data[n]=a_color[0];
				// // clipData.data[n+1]=a_color[1];
				// // clipData.data[n+2]=a_color[2];
				// // clipData.data[n+3]=255;
				
				  
				  
				  
			  // // }
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
			  
 		 // }
			 	// // clipData.data[n]=255;//clipData.data[nm];
				// // clipData.data[n+1]=0;//clipData.data[nm+1];
				// // clipData.data[n+2]=0;//clipData.data[nm+2];
				// // clipData.data[n+3]=255;//clipData.data[nm+3];
				
		
			// // if(clipData.data[n+3]!=255)		{
				// // clipData.data[n]=0;
				// // clipData.data[n+1]=0;
				// // clipData.data[n+2]=0;
				// // clipData.data[n+3]=255;
				
				
				// // }
		
	
	
	return clipData;
}

function getAverageColor(colors)
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
		i3 += 255;//colors[i][3];
	}
	
	return [i0/colors.length|0,i1/colors.length|0,i2/colors.length|0,255];
	
}
function old_sixlist_imgData(imgData, callback)
{
	
	 var degree=Number(document.getElementById('image_button34').getAttribute('angle'));
	 
	 //get one sector 60 degree
	 var sectorData=getOnlyOneSectorData(imgData,degree,0);
	 //half_imgData //vortext
	 var vData = vortex( __half_imageData(sectorData));
	
	var povorotData= mod_rotate2_rotate777(vData,90);
	var sectorData=getOnlyOneSectorData(povorotData,degree,1);
	// showOnCanvas77(sectorData);
	var  sectorData2= mod_cli_up_getPartOfImageData(sectorData,0,0,sectorData.width,sectorData.height/2);
	//showOnCanvas77(sectorData2);
	var sectorData2=mirror_down(sectorData2); 
	//showOnCanvas77(sectorData2);
	//sectorData2= mod_cli_up_getPartOfImageData(sectorData,0,sectorData.height/2,sectorData.width,sectorData.height/2);
	//showOnCanvas77(sectorData2);
	
	// showOnCanvas77(sectorData2);
	var	result_image_data = comboSectorData(vData,sectorData2);
		// var sectorData=getOnlyOneSectorData(povorotData,degree,4);
	// result_image_data = comboSectorData(vData,sectorData);
	 callback(result_image_data);
	 
	 
	 
	 //save
	 //rotate 90
	 //combo
	 
	
	// // // // callback(circle_median(comboSectorData(get_direct_sixlist_imgData(imgData), mod_rotate2_rotate777(get_mirror_sixlist_imgData(imgData),degree))));
	////////////// callback(get_direct_sixlist_imgData(imgData));
	
	
	
	return;
	
	
	
	
	
	
	
	var imgData16=cloneImageData(imgData);
	var w = imgData.width;
	var h = imgData.height;
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width;
	result_canvas.height = imgData.height;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,w,h);
	nn=0;
	
	for(var n=0;n<360;n+=degree)
	{
		
		var povorotData= mod_rotate2_rotate777(imgData,n);
		var sectorData=getOnlyOneSectorData(povorotData,degree,nn);
		result_image_data = comboSectorData(result_image_data,sectorData);
		
		//imgData= mod_rotate2_rotate777(imgData,n);
		
		
			// var recanvas = document.getElementById('myCanvas77');
				// recanvas.width=imgData.width;
				// recanvas.height=imgData.height;
				// var rectx = recanvas.getContext("2d");
				// rectx.putImageData(result_image_data,0,0);
		
		nn++;
	}
	//callback(circle_median(result_image_data));return;
	
	
	
	//var mirror_result_image_data = mirror_right2( result_image_data);
	
	
	
	
	
	var povorot_mirror_result_image_data = mod_rotate2_rotate777(result_image_data,degree);
	var combinedData=comboSectorData(result_image_data,povorot_mirror_result_image_data);
	
	callback(circle_median(combinedData));
	
	//callback(circle_median(result_image_data));
}



function get_direct_sixlist_imgData(imgData)
{
	
	var w = imgData.width;
	var h = imgData.height;
	
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width;
	result_canvas.height = imgData.height;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,w,h);
	
	nn=0;
	var degree=Number(document.getElementById('image_button34').getAttribute('angle'));
	for(var n=0;n<360;n+=degree)
	{
		
		var povorotData= mod_rotate2_rotate777(imgData,n);
		var sectorData=getOnlyOneSectorData(povorotData,degree,nn);
		result_image_data = comboSectorData(result_image_data,sectorData);
		
		
		
		nn++;
	}

	return result_image_data;
}


function get_mirror_sixlist_imgData(imgData)
{
	
	var w = imgData.width;
	var h = imgData.height;
	
	var result_canvas = document.createElement('canvas');
	result_canvas.width = imgData.width;
	result_canvas.height = imgData.height;
	var result_context = result_canvas.getContext("2d");
	var result_image_data =result_context.getImageData(0,0,w,h);
	
	nn=0;
	var degree=Number(document.getElementById('image_button34').getAttribute('angle'));
	for(var n=0;n<360;n+=degree)
	{
		
		var povorotData= mirror_right2(mod_rotate2_rotate777(imgData,n));
		var sectorData=getOnlyOneSectorData(povorotData,degree,nn);
		result_image_data = comboSectorData(result_image_data,sectorData);
		
		
		
		nn++;
	}

	return result_image_data;
}







function runa_imgData(imgData, callback)
{
	var degree = Number(document.getElementById('image_button25').getAttribute('angle'));
	imgData = mod_rotate2_rotate777(imgData,degree);
	
	callback(imgData);
}

function mr_imgData(imgData, callback)
{
	imgData = mirror_right2(imgData);
	
	callback(imgData);
}

function md_imgData(imgData, callback)
{
	imgData = mirror_down2(imgData);
	
	callback(imgData);
}



function median_imgData(imgData, callback)
{
	imgData = median(imgData);
	
	callback(imgData);
}




function vortex_imgData(imgData, callback)
{
	imgData = mirror_right(imgData);
	imgData = mirror_down(imgData);
	callback(imgData);
}

function filter7_imgData(imgData, callback)
{
	imgData = plus(median(imgData));
	imgData = mirror_right(imgData);
	imgData = mirror_down(imgData);
	imgData = minus(imgData);
	imgData = median(imgData);
	
	callback(imgData);
}

function minusos_imgData(imgData, callback)
{
	imgData = minus(imgData);
	callback(imgData);
}
function half_imgData(imgData, callback)
{
	imgData = __half_imageData(imgData);
	callback(imgData);
}
function plusos_imgData(imgData, callback)
{
	imgData = plus(imgData);
	callback(imgData);
}
function nonitos_imgData(imgData, callback)
{
	imgData = nonineth(imgData);
	callback(imgData);
}
function nanitos_imgData(imgData, callback)
{
	imgData = nineth(imgData);
	callback(imgData);
}


function magik_rotate(im, callback)
{ 
	imgData = __magik_rotate(im,global_magik_rotate_angle);
						global_magik_rotate_angle++;
						if(global_magik_rotate_angle>90)global_magik_rotate_angle=0;
						if(global_magik_rotate_angle<-90)global_magik_rotate_angle=0;
					
					
	callback(imgData);
}

function rmedian_imgData(im,callback )
{
	var canvas4 = document.createElement('canvas');
	canvas4.width=im.width;		
	canvas4.height=im.height;
	var ctx4 = canvas4.getContext("2d");
	ctx4.putImageData(im,0,0);
			
			//var otkus = 2*Math.ceil(canvas4.width/6.9333333333333333333333333333333);
			//7,025641025641025641025641025641
			//0,1459854014598540145985401459854
			var otkus = 2*Math.ceil(canvas4.width*0.1459854014598540145985401459854);
			var mw = canvas4.width-otkus;
			var mh = canvas4.height-otkus;
			
			imgData=ctx4.getImageData(otkus/2,otkus/2,mw, mh);
			
			callback(imgData);
			
}
















