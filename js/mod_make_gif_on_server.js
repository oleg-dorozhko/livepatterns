var global_next_frame=false;
var global_make_gif_big_size_array=[];
var global_frame_counter=0;
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
	global_make_gif_big_size_array=[];
    global_frame_counter=0;
	global_next_frame=false;
	document.getElementById('steps_for_save_insane_change').value=0;//Number(global_frames_per_save);
	global_frames_per_save=0;
	global_folder_name=null;
	global_password=null;
	global_number_of_frames_in_gif = 0;
	document.getElementById('number_of_frames_in_gif').value=90;
}
var global_show_frames_delay=500;
function show_fast_video_from_memory(onsuccess, onfail)
{
	if(document.getElementById("image_button777").classList.contains('image_button_selected'))
	{
		alert('off magik thread before');
		onfail();
		return;
	}
	
	
	if(image_button22.classList.contains('image_button_mode_gif'))
	{
		if(document.getElementById("image_button44").classList.contains('image_button_unselected'))
		{
			var n=prompt("Please, enter delay between frames",n);
			if(n==null) {onfail();return;}
			n=Number(''+n);
			if((n>=50)||(n<(5000*12*5)))
			{
				
				global_show_frames_delay=n;
				
			}
			
			global_show_frames_counter=0;
			onsuccess();
			show_frames_from_memory();
			
		}
		else {
			//alert('Sorry, no frames in memory');
			onfail();
		}
	}
	else{
		alert('Sorry, no frames in memory');
		onfail();
	}
	
}

function setCredentialsForMakingGIF( callback )
{
	if(document.getElementById("image_button777").classList.contains('image_button_selected'))
	{
		alert('off magik thread before');
		return;
	}	

	if(image_button22.classList.contains('image_button_mode_gif'))
	{
		if (document.getElementById("modal_window_setCredentialsForMakingGIF")==null)
		{
			var actions = [];
			actions.push(['action_modal_window_setCredentialsForMakingGIF',on_action_setCredentialsForMakingGIF]);
			actions.push(['clean_modal_window_setCredentialsForMakingGIF',on_clean_setCredentialsForMakingGIF]);
			modal_window( 'setCredentialsForMakingGIF',  on_open_setCredentialsForMakingGIF, actions, null, null );
		}
	}
	else
	{
		var n = Number(	document.getElementById('number_of_frames_in_gif').value);
		n=prompt("Please, enter frames for write in memory",n);
		if(n==null) return;
		document.getElementById('number_of_frames_in_gif').value=Number(n);
		
		image_button22.classList.toggle('image_button_unselected');
		image_button22.classList.toggle('image_button_selected');
		global_next_frame=true;
	}
}

function on_clean_setCredentialsForMakingGIF()
{
	var r=prompt('Are you sure? You want to clean this gif in memory?','yes');
	if(r=='yes')
	{
		change_save_mode_for_insane_rotate_off();
		
		//document.getElementById('image_button22').classList.toggle('image_button_selected');
		document.getElementById('image_button22').classList.toggle('image_button_mode_gif');
		document.getElementById('image_button22').classList.toggle('image_button_unselected');
		
		//document.getElementById('image_button44').classList.toggle('image_button_selected');
		if(document.getElementById('image_button44').classList.contains('image_button_mode0'))
		{
		document.getElementById('image_button44').classList.toggle('image_button_mode0');
		document.getElementById('image_button44').classList.toggle('image_button_unselected');
		}
		
		
		
		
		alert('done');
	}
	else alert('Operation canceled');
}

function on_action_setCredentialsForMakingGIF()
{
	change_save_mode_for_insane_rotate();
	save_global_make_gif_big_size_array();
}

function on_open_setCredentialsForMakingGIF()
{
	prepare_security();
	//document.getElementById("fire_saving_gif").onclick = save_global_make_gif_big_size_array;
	//document.getElementById("change_save_mode_for_insane_rotate").onclick = change_save_mode_for_insane_rotate;
	//document.getElementById("change_save_mode_for_insane_rotate_off").onclick = change_save_mode_for_insane_rotate_off;
	document.getElementById('copy_number_of_frames_in_gif').value=global_make_gif_big_size_array.length;
	document.getElementById('number_of_frames_in_gif').value=global_make_gif_big_size_array.length;
	global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
	
	
	
}

function change_save_mode_for_insane_rotate()
{
	
	// var cnv = getBorderedCanvas();
	// if(cnv==null)
	// {
		// alert('need select canvas before');
		// return;
	// }
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
	global_password='1xyz5zyx1';global_password='z5';
	global_password=prompt("Please, enter password",""+global_password);
	if(global_password==null) return;
	global_folder_name=prompt("Please, enter folder name",""+global_folder_name);
	if(global_folder_name==null) return;
	
	global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
	
	global_frames_per_save=1;
	global_frames_per_save=prompt("Please, enter frames per save",""+global_frames_per_save);
	if(global_frames_per_save==null) return;
	document.getElementById('steps_for_save_insane_change').value=Number(global_frames_per_save);
	
	//global_next_frame=true;
	
	
	
	
	
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

function save_global_make_gif_big_size_array()
{
	if(global_make_gif_big_size_array.length==0) return;
	
	
	var tCanvas = document.createElement("canvas");
	tCanvas.width = global_make_gif_big_size_array[0].width ;
	tCanvas.height = global_make_gif_big_size_array[0].height;
	var tContext = tCanvas.getContext("2d");
	tContext.putImageData(global_make_gif_big_size_array[0],0,0);
	
	
	whenSaveImageOnServerButtonClicked(global_password, global_folder_name, tCanvas, function(){
											
																						
			global_make_gif_big_size_array.splice(0,1);
											
					if(global_make_gif_big_size_array.length==0)
					{
						
						var frequence=Number(document.getElementById('frequence_of_gif').value);
						var author=document.getElementById('author_of_gif').value;
						make_gif_php_call(global_password, global_folder_name, frequence, author, function(url_gif)
						{
							change_save_mode_for_insane_rotate_off();
							var gif_wnd = window.open('GIF','This is your gif','width=400,height=400');
							gif_wnd.document.write("<img src='"+global_url_to_images+"/"+url_gif+"/animation.gif'>");
							
							document.getElementById('image_button22').classList.toggle('image_button_selected');
							document.getElementById('image_button22').classList.toggle('image_button_mode_gif');
							document.getElementById('image_button22').classList.toggle('image_button_unselected');
							
						});
						
					}
					else
					{
						setTimeout(save_global_make_gif_big_size_array,
						Number(document.getElementById('delay_between_sending_frames_to_server').value));
					}
				
		
		});
				
}
	
	
	
	
	
	
	


function make_gif_imgData(imgData,callback)
{
	if(global_next_frame==true) 
	{		
		global_next_frame=false;
		global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
		if(global_number_of_frames_in_gif>0)
		{
			
			imgData=cloneImageData(imgData);
			global_make_gif_big_size_array.push(imgData);
			document.getElementById('number_of_frames_in_gif').value=global_number_of_frames_in_gif-1;
			document.getElementById("image_button22").title=global_number_of_frames_in_gif-1;
			global_next_frame=true;
			
		}
		else{
			global_next_frame=false;
			document.getElementById('image_button22').classList.toggle('image_button_selected');
			document.getElementById('image_button22').classList.toggle('image_button_mode_gif');
			document.getElementById('number_of_frames_in_gif').value=global_make_gif_big_size_array.length;
		}
		
	}
	callback(imgData);
	
}



var global_next_frame=true;

function saveFrameOnServer()
{
			
			
			global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
			if(global_number_of_frames_in_gif>0)
			{
				//var sfic = Number( document.getElementById('steps_for_save_insane_change').value);
				//if(sfic>0)
				//{
						//if(counter%sfic==0)
						//{
							global_next_frame=false;
							whenSaveImageOnServerButtonClicked(global_password, global_folder_name, document.getElementById(document.getElementById("from_canvas_for_gif").value), function(){
											
											document.getElementById('number_of_frames_in_gif').value=global_number_of_frames_in_gif-1;
											global_next_frame=true;
											
											return;
										}
									
									);
				
						//}
				//}
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
			
		
			
			
			
}

function old_not_work_make_gif_imgData(imgData,callback)
{
	
	
	
	if(global_next_frame==false)
	{
		callback(imgData);
		
	}
	else
	{

		global_next_frame=false;

			
			global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
			if(global_number_of_frames_in_gif>0)
			{
				// var sfic = Number( document.getElementById('steps_for_save_insane_change').value);
				// if(sfic>0)
				// {
						// if(counter%sfic==0)
						// {
							
							whenSaveImageOnServerButtonClicked(global_password, global_folder_name, document.getElementById(document.getElementById("from_canvas_for_gif").value), function(){
											
											document.getElementById('number_of_frames_in_gif').value=global_number_of_frames_in_gif-1;
											
											global_next_frame=true;
											
											callback(imgData);
										}
									
									);
				
						//}
				//}
			}
			else{
				
				var frequence=Number(document.getElementById('frequence_of_gif').value);
				var author=document.getElementById('author_of_gif').value;
				make_gif_php_call(global_password, global_folder_name, frequence, author, function(url_gif)
				{
					change_save_mode_for_insane_rotate_off();
					var gif_wnd = window.open('GIF','This is your gif','width=400,height=400');
					gif_wnd.document.write("<img src='"+global_url_to_images+"/"+url_gif+"/animation.gif'>");
					
					callback(imgData);
					
				});
			}
			
			callback(imgData);
			
	}

	
}

var global_show_frames_counter=0;

function show_frames_from_memory()
{
	if(document.getElementById("image_button44").classList.contains('image_button_unselected'))
	{
		global_show_frames_counter=0;
		return;
	}
	
	if(global_show_frames_counter < global_make_gif_big_size_array.length)
	{
		
		show_frame_on('myCanvas77',global_make_gif_big_size_array[global_show_frames_counter]);
		global_show_frames_counter++;
		
		setTimeout(show_frames_from_memory, global_show_frames_delay);
	}
	else{
		
		if(document.getElementById('image_button44').classList.contains('image_button_mode0')) 
		{
			global_show_frames_counter=0;
			show_frames_from_memory();
		}
	}
}

function show_frame_on(cnv_id,imgData)
{
	
	var recanvas = document.getElementById(cnv_id);
	recanvas.width=imgData.width;
	recanvas.height=imgData.height;
	var rectx = recanvas.getContext("2d");
	rectx.putImageData(imgData,0,0);
	
	
}


function old_not_work_make_gif_imgData(imgData,callback)
{
	
	//var not_exit=true;
	
	if(global_next_frame==false)
	{
		//callback(imgData);
		make_gif_imgData(imgData,callback);
	}
	else
	{

		global_next_frame=false;

			
			global_number_of_frames_in_gif =  Number( document.getElementById('number_of_frames_in_gif').value);
			if(global_number_of_frames_in_gif>0)
			{
				// var sfic = Number( document.getElementById('steps_for_save_insane_change').value);
				// if(sfic>0)
				// {
						// if(counter%sfic==0)
						// {
							
							whenSaveImageOnServerButtonClicked(global_password, global_folder_name, document.getElementById(document.getElementById("from_canvas_for_gif").value), function(){
											
											document.getElementById('number_of_frames_in_gif').value=global_number_of_frames_in_gif-1;
											
											global_next_frame=true;
											
											callback(imgData);
											
										//	not_exit=false;
										}
									
									);
									
								//	if(not_exit==true)   
				
						//}
				//}
			}
			else{
				
				var frequence=Number(document.getElementById('frequence_of_gif').value);
				var author=document.getElementById('author_of_gif').value;
				make_gif_php_call(global_password, global_folder_name, frequence, author, function(url_gif)
				{
					change_save_mode_for_insane_rotate_off();
					var gif_wnd = window.open('GIF','This is your gif','width=400,height=400');
					gif_wnd.document.write("<img src='"+global_url_to_images+"/"+url_gif+"/animation.gif'>");
					
					var sw = document.getElementById('image_button22');
					sw.classList.toggle('image_button_unselected');
					sw.classList.toggle('image_button_selected');
					global_next_frame=true;
					callback(imgData);
					
				});
			}
			
		//	callback(imgData);
			
	}

	
}


