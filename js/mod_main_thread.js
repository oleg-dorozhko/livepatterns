var global_main_thread_do_some_work=false;

function getCommand(btn)
{
	return btn.getAttribute('fn');
}

function fill_array_of_task()
{
	global_array_of_task=[];
	var list = document.querySelectorAll('#controls > div');
	for(var i=0;i<list.length;i++)
	{
		var btn = list[i].childNodes[0];
		if(btn.classList.contains('image_button_selected')) { 
			var cmd=getCommand(btn);
			if(cmd!='')	global_array_of_task.push(cmd);
		}
	}
}

var global_array_of_task=[];
var global_main_thread_delay=5000;
var global_imgData=null;
var global_last_from='canvas0';
var global_last_to='myCanvas77';
function main_thread() 
{
	
	if(global_main_thread_auto==false) return;
	if(global_main_thread_do_some_work==true) return;
	
	if(global_array_of_task.length==0)
	{
		if(global_imgData!=null)
		{
			
			
		
	// var recanvas = document.getElementById(global_last_to);
			// recanvas.width=global_imgData.width;
			// recanvas.height=global_imgData.height;
			// var rectx = recanvas.getContext("2d");
			// rectx.putImageData(global_imgData,0,0);
	
		
			
			
		}	
		
		
		
		fill_array_of_task();
	
		global_last_from='canvas0';
		
	
		
	}
	  
	//if(global_array_of_task.length==1)  global_last_from='canvas0';
	
	if(global_array_of_task.length>0)
	{
		var function_name = global_array_of_task[0];
		
		if(function_name=='_main_thread')
		{
			
			global_array_of_task.splice(0,1); 
		
			//return;			
			
		}
		//if we want some of this --->   insane_rotate( function() {  otherButtonsProcessing() });
		//we need do such as describe below
		else
		{
			if((function_name=='rnd_imgData')||(function_name=='swap_colors_thread'))
				{	
			
					global_last_from='canvas0';
			
				}
				
				
			var rcanvas = document.getElementById(global_last_from);
			var rctx = rcanvas.getContext("2d");
			var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
		
			global_last_from=function_name+'_canvas';
			
			global_main_thread_do_some_work=true;
			try{
			window[function_name]( imgData, function(imgData) {	
			
			if((global_last_from=='rnd_imgData_canvas')||(global_last_from=='swap_colors_thread_canvas'))
			{


				global_last_from='canvas0';
				
			}
				var recanvas = document.getElementById(global_last_from);
				recanvas.width=imgData.width;
				recanvas.height=imgData.height;
				var rectx = recanvas.getContext("2d");
				rectx.putImageData(imgData,0,0);
				
				
		if((global_last_from=='rnd_imgData_canvas')||(function_name=='swap_colors_imgData_canvas')) {}
			
		else{

		
		}
				
				global_array_of_task.splice(0,1); 
				
				
	if(global_array_of_task.length==0)
	{
		
		
		
		
		var canvas4 = document.getElementById("myCanvas77");
			
			if(	(imgData.width != canvas4.width)||(imgData.height != canvas4.height))
			{
				canvas4.width=imgData.width;
				canvas4.height=imgData.height;
			}
			
			
			
			
				var ctx4 = canvas4.getContext("2d");
					
				// var im1 = ctx4.getImageData( 0,0,w,h);
				
				
				// for (var idx = 0; idx < lim; idx+=4) {
				
					// im1.data[idx]=im0.data[idx];
					// im1.data[idx+1]=im0.data[idx+1];
					// im1.data[idx+2]=im0.data[idx+2];
					// im1.data[idx+3]=255;
					
				
			// }
				
				ctx4.putImageData(imgData, 0,0);
				
				
				
				
				
		
		
		
		
		
		
		
		
		
		
		//writeToMyCanvas77(imgData);
		
	}		
				
				 // global_imgData=null;
				
				// else global_imgData=imgData;
				
				global_main_thread_do_some_work=false;
				
				});
				
			}
			catch(e)
			{
				console.log(e);global_array_of_task.splice(0,1); global_main_thread_do_some_work=false;
			}
				
		}
			
		
	}
	
	
}

function writeToMyCanvas77(im0)
		{
			
			var w = im0.width;
			var h = im0.height;
			
		
			var lim=w*h<<2;

			// for (var idx = 0; idx < lim; idx+=4) {
				
					
					// im0.data[idx+3]=51;
					
					
				
			// }
			
			var canvas4 = document.getElementById("myCanvas77");
			
			if(	(im0.width != canvas4.width)||(im0.height != canvas4.height))
			{
				canvas4.width=im0.width;
				canvas4.height=im0.height;
			}
			
			
			
			
				var ctx4 = canvas4.getContext("2d");
					
				var im1 = ctx4.getImageData( 0,0,w,h);
				
				
				for (var idx = 0; idx < lim; idx+=4) {
				
					var sum0=(im1.data[idx]+im0.data[idx]);
					if(sum0>255)  im1.data[idx]=sum0-256;
					else im1.data[idx]=sum0;
					
					var sum1=(im1.data[idx+1]+im0.data[idx+1]);
					if(sum1>255)  im1.data[idx+1]=sum1-256;
					else im1.data[idx+1]=sum1;
					
					var sum2=(im1.data[idx+2]+im0.data[idx+2]);
					if(sum2>255)  im1.data[idx+2]=sum2-256;
					else im1.data[idx+2]=sum2;
					
					var sum3=(im1.data[idx+3]+im0.data[idx+3]);
					//if(sum3>255)  im1.data[idx+3]=sum3-256;
					//else 
						
						im1.data[idx+3]=255;
					
				
			}
				
				ctx4.putImageData(im1, 0,0);
				
				
				
				
				
				
				
				
				
				
				
				
				
				
				
		}