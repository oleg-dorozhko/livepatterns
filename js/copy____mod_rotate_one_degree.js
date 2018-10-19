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

var global_frame_counter=0;
var global_frame_lim=0;
var global_folder_name=null;
var global_password=null;
var global_number_of_frames_in_gif = 0;

function __makegif(){
	
	rotateWithSave( function() {	
	
	
		global_frame_counter++;
		
	
		if(global_frame_counter<=lim) setTimeout(__makegif, 2000);
		else document.getElementById("makegif").disable=false;
		
	
	
	
	} );
	
	
	
}

function change_save_mode_for_insane_rotate_off()
{
	document.getElementById('steps_for_save_insane_change').value=0;//Number(global_frames_per_save);
	global_frames_per_save=0;
	global_folder_name=null;
	global_password=null;
	global_number_of_frames_in_gif = 0;
	document.getElementById('number_of_frames_in_gif').value=90;
}

function change_save_mode_for_insane_rotate()
{
	
	var cnv = getBorderedCanvas();
	if(cnv==null)
	{
		alert('need select canvas before');
		return;
	}
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	if(global_insane_delay<3000)
	{
		alert('Need insane delay more then 2999 ms');
		return;
	}
	counter=0;
	counter1=0;
	counter1=  Number(document.getElementById('rotate_counter2').value);
	counter= Number(document.getElementById('rotate_counter1').value);
	
	global_frame_counter=0;
	global_folder_name='noname_'+(new Date()).getTime();
	global_password='1xyz5zyx1';
	global_password=prompt("Please, enter password",""+global_password);
	if(global_password==null) return;
	global_folder_name=prompt("Please, enter folder name",""+global_folder_name);
	if(global_folder_name==null) return;
	
	global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
	
	global_frames_per_save=1;
	global_frames_per_save=prompt("Please, enter frames per save",""+global_frames_per_save);
	if(global_frames_per_save==null) return;
	document.getElementById('steps_for_save_insane_change').value=Number(global_frames_per_save);
	
	
	
	
	
	
	
}

function makegif()
{
	var cnv = getBorderedCanvas();
	if(cnv==null)
	{
		alert('need select canvas before');
		return;
	}
	
	
	counter=0;
	counter1=0;
	counter1=  Number(document.getElementById('rotate_counter2').value);
	counter= Number(document.getElementById('rotate_counter1').value);
	
	global_frame_counter=0;
	global_folder_name='noname_'+(new Date()).getTime();
	global_password='1xyz5zyx1';
	global_password=prompt("Please, enter password",""+global_password);
	if(global_password==null) return;
	global_folder_name=prompt("Please, enter folder name",""+global_folder_name);
	if(global_folder_name==null) return;
	document.getElementById("makegif").disable=true;
		
		var lim = 90/Number(document.getElementById('step').value);
		global_frame_lim=lim;
		
	
	
	
	__makegif();
	
}

function save_image_on_server()
{
	
	var cnv = getBorderedCanvas();
	if(cnv==null)
	{
		alert('need select canvas before');
		return;
	}
	
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	if(global_insane_delay<3000)
	{
		alert('Need insane delay more then 2999 ms');
		return;
	}
	
	global_folder_name='image_for_gif';
	global_password='1xyz5zyx1';
	global_password=prompt("Please, enter password",""+global_password);
	if(global_password==null) return;
	global_folder_name=prompt("Please, enter folder name",""+global_folder_name);
	if(global_folder_name==null) return;
	
	whenSaveImageOnServerButtonClicked(
	
		global_password, 
		global_folder_name, 
		getBorderedCanvas(),
		function(){  }
	
	);
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
	ctx.fillStyle="yellow";//getRandomXYColor(id);
	ctx.fillRect(0,0,canvas.width, canvas.height);
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

var global_next_frame=true;

function rotate_insane() {
	
	
	global_insane_delay = Number(document.getElementById('insane_delay').value);
	global_step = Number(document.getElementById('step').value);
	
	counter1=Number(document.getElementById('rotate_counter2').value);
	counter=Number(document.getElementById('rotate_counter1').value);
	
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
	
	
	
	
	if(global_next_frame==false)
	{
		setTimeout(rotate_insane, global_insane_delay);
		return;
	}
	
	if(global_doing_warp_drive==true)
	{
		setTimeout(rotate_insane, global_insane_delay);
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
									
			
			////////////////////////////////////////////// bortex //////////////////////////////////////////
			
			
			// var canvas45=document.getElementById("myCanvas4");
		// var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		
			// var canvas = document.getElementById("canvas0");
			// var context = canvas.getContext("2d");
			// var im = context.getImageData(0,0,canvas.width,canvas.height);
			
			
			// var im2 =bortex(im,imgData);
			
			// canvas45.getContext("2d").putImageData(im2,0,0);
			
			
			//////////////////////////////////////////////////////////////////////////////////
			
			
			
			
			
			
			
			
			
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
						document.getElementById('rotate_counter1').value=counter;
						document.getElementById('rotate_counter2').value=counter1;
						//counter= -1;
						clearInterval(global_rotate_interval_ID);
						
						
							
						document.getElementById("rotate_auto").value='rotate auto';
						rotate_insane();
						
						//setTimeout(,delay);
	
	
						return;
					}
					counter+=global_step;
					document.getElementById('rotate_counter1').value=counter;
					if(counter1< -360){
						//counter1= 1;
						
						counter1= 0;
						
						clearInterval(global_rotate_interval_ID);
						return;						
					}
						
					counter1-=global_step;
					document.getElementById('rotate_counter2').value=counter1;
					//setInterval(__rotate, 100);

		//document.getElementById('canvas0').width =
					var sfic = Number( document.getElementById('steps_for_insane_change').value);
					if(counter%sfic==0)
					{
						
						// if(getRandomInt(0, 2)==0) rgbpp("canvas0");
						// else up("canvas0");
						img.src = canvas.toDataURL();
					}
		//var imgData=ctx2.getImageData(0,0,canvas2.width,canvas2.height);

		//ctx2.putImageData(random_imgData_cyclic(imgData),0,0);
		
						// var imgData=document.getElementById("myCanvas4").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			// imgData=random_imgData_cyclic(imgData);
			// document.getElementById("myCanvas4").getContext("2d").putImageData(imgData,0,0);
			
			global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
			if(global_number_of_frames_in_gif>0)
			{
				var sfic = Number( document.getElementById('steps_for_save_insane_change').value);
				if(sfic>0)
				{
						if(counter%sfic==0)
						{
							global_next_frame=false;
							whenSaveImageOnServerButtonClicked(global_password, global_folder_name, document.getElementById(document.getElementById("from_canvas_for_gif").value), function(){
											
											document.getElementById('number_of_frames_in_gif').value=global_number_of_frames_in_gif-1;
											global_next_frame=true;
											
											return;
										}
									
									);
				
						}
				}
			}
			else{
				
				var frequence=Number(document.getElementById('frequence_of_gif').value);
				var author=document.getElementById('author_of_gif').value;
				make_gif_php_call(global_password, global_folder_name, frequence, author, function(url_gif)
				{
					change_save_mode_for_insane_rotate_off();
					var gif_wnd = window.open('GIF','This is your gif','width=400,height=400');
					gif_wnd.document.write("<img src='"+global_url_to_images+"/"+url_gif+"/animation.gif'>");
				});
			}
			
			
			// if( document.getElementById('is_warp_drive_on').checked==true)
			// {
				// var canvas45=document.getElementById("myCanvas4");
				// var img45 = new Image();
				// img45.id = "pic54";
				// img45.onload = function(img45){
				
					// var canvas455 = document.getElementById("canvas0");
					// canvas455.width=this.width;
					// canvas455.height=this.height;
					
					// var context455 = canvas.getContext("2d");
					// context455.drawImage(this,0,0);
				
				
				
				// }
				// img45.src = canvas45.toDataURL();
			// }
			
			
		
			
			
			
			
			
			
			
			
			
			
					});
					
				});
			});
			
			
			
			}, global_insane_delay);
	}(img);
	img.src = canvas.toDataURL();
	
	
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
	
	imgData=removeWhiteLines(imgData);
	//imgData=filter_colors_imgData(imgData);
	//if(document.getElementById("filter0").checked) {imgData=nineth(imgData);
	//if(document.getElementById("filter5").checked) imgData=nonineth(imgData);}
	//imgData=random_imgData_cyclic(imgData);
	var canvas4 = document.getElementById("myCanvas4");
	canvas4.width=imgData.width;
	canvas4.height=imgData.height;
	var ctx4 = canvas4.getContext("2d");
	
	ctx4.putImageData(imgData,0,0);
	// var canvas41 = document.getElementById("myCanvas4_1");
	// canvas41.width=canvas4.width;
	// canvas41.height=canvas4.height;
	// var ctx41 = canvas41.getContext("2d");
	
	// ctx41.putImageData(imgData,0,0);
	
	
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
			
			
			
			
			
		
			
			// if(document.getElementById("filter0").checked)
			// {
			// var canvas4 = document.getElementById("myCanvas77");
			// canvas4.width=imgData.width*3;
			// canvas4.height=imgData.height*3;
			// var ctx4 = canvas4.getContext("2d");
	
			// ctx4.putImageData( nineth(imgData),0,0);
			// }
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
	
	callback();
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
