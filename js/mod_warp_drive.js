
var global_doing_warp_drive=false;

function do_warp_drive()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive, 500);
	}
	else
	{
		
			global_canvas_for_bortex=document.createElement("canvas");
				global_canvas_for_bortex.width=document.getElementById("canvas0").width;
				global_canvas_for_bortex.height=document.getElementById("canvas0").height;
				var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
		
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		transform("myCanvas4", global_url_to_server+'median', function() {
			
			var canvas45=document.getElementById("myCanvas4");
			var imgDataResult=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
			
			//transform("myCanvas4", global_url_to_server+'plus', function() {	

		
			//var canvas45=document.getElementById("myCanvas4");
		//	var imgDataResult=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
				
			
			
			imgDataResult = mirror_right(imgDataResult);
				
			imgDataResult = mirror_down(imgDataResult);
			
			var tim = global_canvas_for_bortex.getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			
			//imgDataResult = bortex ( JSON.parse(JSON.stringify(tim)), imgDataResult );	
	imgDataResult = bortex ( tim, imgDataResult );	
	
	 do_server_command2(imgDataResult,'median,plus', function(img) {
		
			var canvas = document.getElementById("canvas0");
	canvas.width = img.width;
	canvas.height = img.height;
	var context = canvas.getContext("2d");
	context.drawImage(img,0,0);	
	
	global_canvas_for_bortex=document.createElement("canvas");
				global_canvas_for_bortex.width=img.width;
				global_canvas_for_bortex.height=img.height;
				var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
			var canvas455=document.getElementById("myCanvas4");
			canvas455.width=imgData.width;
			canvas455.height=imgData.height;
			var context455 = canvas455.getContext("2d");
			context455.putImageData(imgData,0,0);
			
			
			
			// canvas45.width=imgData.width;
			// canvas45.height=imgData.height;
			// canvas45.getContext("2d").putImageData(imgData,0,0);
			
			
			
			
			// transform("canvas0", global_url_to_server+'plus', function() {
			
				// global_do_warp_drive=false;
			
			
			// });
			
			global_doing_warp_drive=false;
			 
	
			//});
	});		
			
		}); 

		
		// var img45 = new Image();
		// img45.id = "pic54";
		// img45.onload = function(img45){
		
			
			////context455.drawImage(this,0,0);
		
			// global_do_warp_drive=false;
		
		// }
		// img45.src = canvas45.toDataURL();
	}
}




function do_warp_drive3()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive3, 500);
	}
	else
	{
			
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		
			var canvas = document.getElementById("canvas0");
			var context = canvas.getContext("2d");
			var im = context.getImageData(0,0,canvas.width,canvas.height);
			
			
			var im2 =bortex(im,imgData);
			
			 do_server_command4(im2,'rotate plus 45,median',function(img) {
				 
				 
				var canvas = document.getElementById("canvas0");
				canvas.width = img.width;
				canvas.height = img.height;
				var context = canvas.getContext("2d");
				context.drawImage(img,0,0);
			
				global_imgDataBefore=null;
				global_doing_warp_drive=false;
			 
				
			});
	
		
	}
}


function do_warp_drive5()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive5, 500);
	}
	else
	{
			
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		
			var canvas = document.getElementById("canvas0");
			var context = canvas.getContext("2d");
			var im = context.getImageData(0,0,canvas.width,canvas.height);
			
			
			var im2 =bortex(im,imgData);
			
			 do_server_command4(im2,'median,plus',function(img) {
				 
				 
				var canvas = document.getElementById("canvas0");
				canvas.width = img.width;
				canvas.height = img.height;
				var context = canvas.getContext("2d");
				context.drawImage(img,0,0);
			
				global_imgDataBefore=null;
				global_doing_warp_drive=false;
			 
				
			});
	
		
	}
}








function do_warp_drive0()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive0, 500);
	}
	else
	{
		
		
		var canvas = document.getElementById("canvas0");
		var context = canvas.getContext("2d");
		var im = context.getImageData(0,0,canvas.width,canvas.height);
		
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		global_imgDataBefore = cloneImageData(imgData);
		imgData=bortex(im,imgData);
		
		 do_server_command2(imgData,'median,mirror down,mirror right', function(img) { 
			
		
			var canvas = document.getElementById("canvas0");
			canvas.width = img.width;
			canvas.height = img.height;
			var context = canvas.getContext("2d");
			context.drawImage(img,0,0);	
		
		
			var canvas455=document.getElementById("myCanvas4");
			canvas455.width=imgData.width;
			canvas455.height=imgData.height;
			var context455 = canvas455.getContext("2d");
			context455.putImageData(global_imgDataBefore,0,0);
			
			
			global_imgDataBefore=null;
			global_doing_warp_drive=false;
			 
	
			});

	}
}






function do_warp_drive6()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive6, 500);
	}
	else
	{
		
		
		// var canvas = document.getElementById("canvas0");
		// var context = canvas.getContext("2d");
		// var im = context.getImageData(0,0,canvas.width,canvas.height);
		
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		//global_imgDataBefore = cloneImageData(imgData);
		//imgData=bortex(im,imgData);
		
		 do_server_command2(imgData,'median,mirror down,mirror right', function(img) { 
			
		
			var canvas = document.getElementById(document.getElementById("from_canvas_for_warpdrive").value);
			canvas.width = img.width;
			canvas.height = img.height;
			var context = canvas.getContext("2d");
			context.drawImage(img,0,0);	
		
		
			// var canvas455=document.getElementById("myCanvas4");
			// canvas455.width=imgData.width;
			// canvas455.height=imgData.height;
			// var context455 = canvas455.getContext("2d");
			// context455.putImageData(global_imgDataBefore,0,0);
			
			
			global_imgDataBefore=null;
			global_doing_warp_drive=false;
			 
	
			});

	}
}
























var global_imgDataBefore = null;

function cloneImageData(imgData)
{
	var tCanvas = document.createElement("canvas");
	tCanvas.width = imgData.width ;
	tCanvas.height = imgData.height;
	var tContext = tCanvas.getContext("2d");
	tContext.putImageData(imgData,0,0);
	return tContext.getImageData(0,0,tCanvas.width,tCanvas.height);			
}

function do_warp_drive2()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive2, 500);
	}
	else
	{
		
			global_canvas_for_bortex=document.createElement("canvas");
				global_canvas_for_bortex.width=document.getElementById("canvas0").width;
				global_canvas_for_bortex.height=document.getElementById("canvas0").height;
				var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
		
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		global_imgDataBefore = cloneImageData(imgData);
		
		
		//transform("myCanvas4", global_url_to_server+'median', function() {
			
			// var canvas45=document.getElementById("myCanvas4");
			// var imgDataResult=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
			
		//	transform("myCanvas4", global_url_to_server+'plus', function() {	

		
			var canvas45=document.getElementById("myCanvas4");
			var imgDataResult=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
				
			
			
			// imgDataResult = mirror_right(imgDataResult);
				
			// imgDataResult = mirror_down(imgDataResult);
			
			var tim = global_canvas_for_bortex.getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
			
			//imgDataResult = bortex ( JSON.parse(JSON.stringify(tim)), imgDataResult );	
	imgDataResult = bortex ( tim, imgData );	
	
	do_server_command2(imgDataResult,'rotate plus 45, median', function(img) {
		
			var canvas = document.getElementById("canvas0");
	canvas.width = imgDataResult.width;
	canvas.height = imgDataResult.height;
	var context = canvas.getContext("2d");
	context.putImageData(imgDataResult,0,0);
	
	global_canvas_for_bortex=document.createElement("canvas");
				global_canvas_for_bortex.width=imgDataResult.width;
				global_canvas_for_bortex.height=imgDataResult.height;
				var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
			var canvas455=document.getElementById("myCanvas4");
			canvas455.width=imgDataResult.width;
			canvas455.height=imgDataResult.height;
			var context455 = canvas455.getContext("2d");
			context455.putImageData(global_imgDataBefore,0,0);
			
			
			
			// canvas45.width=imgData.width;
			// canvas45.height=imgData.height;
			// canvas45.getContext("2d").putImageData(imgData,0,0);
			
			
			
			
			// transform("canvas0", global_url_to_server+'plus', function() {
			
				// global_do_warp_drive=false;
			
			
			// });
			global_imgDataBefore = null;
			global_doing_warp_drive=false;
			 
	
			//});
	//});		
			
		}); 

		
		// var img45 = new Image();
		// img45.id = "pic54";
		// img45.onload = function(img45){
		
			
			////context455.drawImage(this,0,0);
		
			// global_do_warp_drive=false;
		
		// }
		// img45.src = canvas45.toDataURL();
	}
}








function do_warp_drive4()
{
	if(global_doing_warp_drive==true)
	{
		setTimeout(do_warp_drive4, 500);
	}
	else
	{
		
			// global_canvas_for_bortex=document.createElement("canvas");
				// global_canvas_for_bortex.width=document.getElementById("canvas0").width;
				// global_canvas_for_bortex.height=document.getElementById("canvas0").height;
				// var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				// global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
		
		var canvas45=document.getElementById("myCanvas4");
		var imgData=canvas45.getContext("2d").getImageData(0,0,canvas45.width,canvas45.height);
		
		
		
	//	global_imgDataBefore = cloneImageData(imgData);
		
	//	 do_server_command2(imgData,'median,mirror down,mirror right', function(img) { 
			
		
			var canvas = document.getElementById("canvas0");
	//		canvas.width = img.width;
	//		canvas.height = img.height;
			var context = canvas.getContext("2d");
	//		context.drawImage(img,0,0);	
			
			var im = context.getImageData(0,0,canvas.width,canvas.height);
			
			
			var im2 =bortex(im,imgData);
			
			 do_server_command4(im2,'paint over',function(img){
				var canvas = document.getElementById("canvas0");
			canvas.width = img.width;
			canvas.height = img.height;
			var context = canvas.getContext("2d");
			context.drawImage(img,0,0);
			
				global_imgDataBefore=null;
			global_doing_warp_drive=false;
			 
				
			});
	// global_canvas_for_bortex=document.createElement("canvas");
				// global_canvas_for_bortex.width=img.width;
				// global_canvas_for_bortex.height=img.height;
				// var tim = document.getElementById("canvas0").getContext("2d").getImageData(0,0,document.getElementById("canvas0").width,document.getElementById("canvas0").height);
				// global_canvas_for_bortex.getContext("2d").putImageData(tim,0,0);
		
			// var canvas455=document.getElementById("myCanvas4");
			// canvas455.width=imgData.width;
			// canvas455.height=imgData.height;
			// var context455 = canvas455.getContext("2d");
			// context455.putImageData(global_imgDataBefore,0,0);
			
			
			
			// canvas45.width=imgData.width;
			// canvas45.height=imgData.height;
			// canvas45.getContext("2d").putImageData(imgData,0,0);
			
			
			
			
			// transform("canvas0", global_url_to_server+'plus', function() {
			
				// global_do_warp_drive=false;
			
			
			// });
			
	
			//});

	}
}
