var global_state=0;
var global_canvas_for_bortex=null;
var global_url_to_server='http://patterns-editor.herokuapp.com/';
var global_url_to_images='images';
var global_ish_colors=null;
var global_json_settings=null;

function setGlobalState(state)
{
	console.log("was global_state="+global_state);
	global_state=state;
	console.log("now global_state="+global_state);
}

window.onload = function()
{
	var CLIPBOARD = new CLIPBOARD_CLASS("canvas0", true);
	
	global_json_settings = localStorage.getItem('json_obvod7_settings');
	if(global_json_settings==null)
	{
		var obj={}
		obj.voicecontrol="on";
		localStorage.setItem('json_obvod7_settings',JSON.stringify(obj));
		global_json_settings = JSON.parse(localStorage.getItem('json_obvod7_settings'));
	}
	
	document.getElementById("canvas0").onclick = whenUserClickOnCanvas;
	document.getElementById("analyze").onclick = function() { global_state=1; whenUserClickOnAnalyze(); }
	document.getElementById("add").onclick = whenUserClickOnAdd;
	document.getElementById("combine").onclick = whenUserClickOnCombine;
	
	document.getElementById("set_global_number_of_colors").onclick = whenUserClickOnSetGlobalNumberOfColors;
	
	document.getElementById("magik_rotate_step").onclick = magik_rotate_wrapper;
	document.getElementById("rotate").onclick = rotate;
	document.getElementById("paint_over").onclick = paint_over;
	document.getElementById("pereplet").onclick = pereplet;
	document.getElementById("pereplet2").onclick = pereplet2;
	//document.getElementById("makegif").onclick = makegif;
	document.getElementById("rotate_auto").onclick = rotate_auto;
	document.getElementById("rotate_insane").onclick = rotate_insane;
	
	
	document.getElementById("do_warp_drive0").onclick = do_warp_drive0;
	document.getElementById("do_warp_drive").onclick = do_warp_drive;
	document.getElementById("do_warp_drive2").onclick = do_warp_drive2;
	document.getElementById("do_warp_drive3").onclick = do_warp_drive3;
	document.getElementById("do_warp_drive4").onclick = do_warp_drive4;
	document.getElementById("do_warp_drive5").onclick = do_warp_drive5;
	document.getElementById("do_warp_drive6").onclick = do_warp_drive6;
	
	document.getElementById("do_server_query").onclick = do_server_query;
	
	document.getElementById("round_colors").onclick = whenUserClickRoundColorsButton;
	document.getElementById("round_auto_start").onclick = whenUserClickRoundColorsAutoStartButton;
	document.getElementById("round_auto_stop").onclick = whenUserClickRoundColorsAutoStopButton;
	
	//main_thread_auto_start
	document.getElementById("main_thread").onclick = whenUserClickMainThreadButton;
	document.getElementById("main_thread_auto_start").onclick = whenUserClickMainThreadAutoStartButton;
	document.getElementById("main_thread_auto_stop").onclick = whenUserClickMainThreadAutoStopButton;
	
	document.getElementById("random_round_colors").onclick = whenUserClickRandomRoundColorsButton;
	document.getElementById("random_round_auto_start").onclick = whenUserClickRandomRoundColorsAutoStartButton;
	document.getElementById("random_round_auto_stop").onclick = whenUserClickRandomRoundColorsAutoStopButton;
	
	document.getElementById("rotate_result").onclick = whenUserClickRotateResultButton;//function() { rgbpp("canvas0"); }
	document.getElementById("rotate_result_auto_start").onclick = whenUserClickRotateResultAutoStartButton;
	document.getElementById("rotate_result_auto_stop").onclick = whenUserClickRotateResultAutoStopButton;
	
	document.getElementById("filter_colors").onclick = whenUserClickFilterColorsButton;//function() { rgbpp("canvas0"); }
	document.getElementById("filter_colors_auto_start").onclick = whenUserClickFilterColorsAutoStartButton;
	document.getElementById("filter_colors_auto_stop").onclick = whenUserClickFilterColorsAutoStopButton;
	
	
	document.getElementById("destroyer").onclick = whenUserClickDestroyerButton;//function() { rgbpp("canvas0"); }
	document.getElementById("destroyer_auto_start").onclick = whenUserClickDestroyerAutoStartButton;
	document.getElementById("destroyer_auto_stop").onclick = whenUserClickDestroyerAutoStopButton;
	
	document.getElementById("undestroyer_add_new").onclick = whenUserClickUnDestroyerAddNewButton;
	document.getElementById("undestroyer_auto_start").onclick = whenUserClickUnDestroyerAutoStartButton;
	document.getElementById("undestroyer_auto_stop").onclick = whenUserClickUnDestroyerAutoStopButton;
	
	document.getElementById("rgbpp").onclick = whenUserClickRGBPPButton;//function() { rgbpp("canvas0"); }
	document.getElementById("rgbpp_auto_start").onclick = whenUserClickRGBPPAutoStartButton;
	document.getElementById("rgbpp_auto_stop").onclick = whenUserClickRGBPPAutoStopButton;
	
	document.getElementById("shift_both_btn").onclick = whenUserClickShiftButton;//function() { rgbpp("canvas0"); }
	document.getElementById("shift_both_auto_start").onclick = whenUserClickShiftAutoStartButton;
	document.getElementById("shift_both_auto_stop").onclick = whenUserClickShiftAutoStopButton;
	
	
	document.getElementById("makerazn").onclick = whenUserClickMakeRaznButton;
	document.getElementById("makergbpm").onclick = whenUserClickMakeRGBPlusMinusButton;
	
	document.getElementById("makered2").onclick = whenUserClickMakeRed2Button;
	document.getElementById("makegreen2").onclick = whenUserClickMakeGreen2Button;
	document.getElementById("makeblue2").onclick = whenUserClickMakeBlue2Button;
	
	document.getElementById("random_colors").onclick = whenUserClickRandomColorsButton;//function() { rgbpp("canvas0"); }
	document.getElementById("random_colors_auto_start").onclick = whenUserClickRandomColorsAutoStartButton;
	document.getElementById("random_colors_auto_stop").onclick = whenUserClickRandomColorsAutoStopButton;
	
	document.getElementById("up_nova").onclick = whenUserClickUpNovaButton;
	document.getElementById("up").onclick = whenUserClickUpButton;
	document.getElementById("upastart").onclick = whenUserClickUpAutoStartButton;
	document.getElementById("upastop").onclick = whenUserClickUpAutoStopButton;
	
	document.getElementById("swap_colors").onclick = whenUserClickSwapColorsButton;
	document.getElementById("swap_colors_auto_start").onclick = whenUserClickSwapColorsAutoStartButton;
	document.getElementById("swap_colors_auto_stop").onclick = whenUserClickSwapColorsAutoStopButton;
	
	document.getElementById("image_button777").onclick = whenClickThisElement;
	document.getElementById("image_button777").oncontextmenu = whenRightClickThisElement;
	
	document.getElementById("image_button1").onclick = whenClickThisElement;
	document.getElementById("image_button2").onclick = whenClickThisElement;
	document.getElementById("image_button3").onclick = whenClickThisElement;
	document.getElementById("image_button4").onclick = whenClickThisElement;
	document.getElementById("image_button5").onclick = whenClickThisElement;
	document.getElementById("image_button6").onclick = whenClickThisElement;
	document.getElementById("image_button7").onclick = whenClickThisElement;
	document.getElementById("image_button8").onclick = whenClickThisElement;
	document.getElementById("image_button9").onclick = whenClickThisElement;
	document.getElementById("image_button10").onclick = whenClickThisElement;
	document.getElementById("image_button11").onclick = whenClickThisElement;
	document.getElementById("image_button12").onclick = whenClickThisElement;
	document.getElementById("image_button13").onclick = whenClickThisElement;
	document.getElementById("image_button14").onclick = whenClickThisElement;
	document.getElementById("image_button15").onclick = whenClickThisElement;
	document.getElementById("image_button16").onclick = whenClickThisElement;
	document.getElementById("image_button17").onclick = whenClickThisElement;
	document.getElementById("image_button18").onclick = whenClickThisElement;
	document.getElementById("image_button19").onclick = whenClickThisElement;
	document.getElementById("image_button20").onclick = whenClickThisElement;
	document.getElementById("image_button20").oncontextmenu = whenRightClickThisElement;
	document.getElementById("image_button21").onclick = whenClickThisElement;
	document.getElementById("image_button22").onclick = whenClickThisElement;
	document.getElementById("image_button23").onclick = whenClickThisElement;
	document.getElementById("image_button24").onclick = whenClickThisElement;
	document.getElementById("image_button25").onclick = whenClickThisElement;
	document.getElementById("image_button26").onclick = whenClickThisElement;
	document.getElementById("image_button27").onclick = whenClickThisElement;
	document.getElementById("image_button28").onclick = whenClickThisElement;
	document.getElementById("image_button29").onclick = whenClickThisElement;
	document.getElementById("image_button31").onclick = whenClickThisElement;
	document.getElementById("image_button32").onclick = whenClickThisElement;
	document.getElementById("image_button33").onclick = whenClickThisElement;
	document.getElementById("image_button34").onclick = whenClickThisElement;
	document.getElementById("image_button35").onclick = whenClickThisElement;
	document.getElementById("image_button36").onclick = whenClickThisElement;
	document.getElementById("image_button37").onclick = whenClickThisElement;
	document.getElementById("image_button38").onclick = whenClickThisElement;
	document.getElementById("image_button39").onclick = whenClickThisElement;
	document.getElementById("image_button40").onclick = whenClickThisElement;
	document.getElementById("image_button41").onclick = whenClickThisElement;
	document.getElementById("image_button42").onclick = whenClickThisElement;
	document.getElementById("image_button43").onclick = whenClickThisElement;
	document.getElementById("image_button44").onclick = whenClickThisElement;
	document.getElementById("image_button45").onclick = whenClickThisElement;
	document.getElementById("image_button46").onclick = whenClickThisElement;
	document.getElementById("image_button47").onclick = whenClickThisElement;
	
	addEventListenerWhenClick("canvas0");
	addEventListenerWhenClick("myCanvas4");
	addEventListenerWhenClick("myCanvas4_1");
	addEventListenerWhenClick("myCanvas7");
	image_button3_click(document.getElementById("image_button3"));
	prepare_yellow();
	
	initVoiceControl();
	
}

function prepangle(num)
{
	document.getElementById("rotate_counter1").value=''+(num);
	document.getElementById("rotate_counter2").value='-'+''+(num);
}

function magik_rotate_wrapper()
{
	var rcanvas = getBorderedCanvas();
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var imgData2 = __magik_rotate(imgData,1);
	
	rcanvas.width = imgData2.width;
	rcanvas.height=imgData2.height;
	rctx= rcanvas.getContext("2d");
	
	rctx.putImageData(imgData2,0,0);
}

function __magik_rotate(imgData,angle)
{
	var w1=imgData.width;
	var h1=imgData.height;
	//im= mirror_down(mirror_right( __half_imageData(mod_magik_magik_rotate(imgData, angle))));;
	im=mod_magik_magik_rotate(imgData, angle);
	if(document.getElementById("magik_rotate_cut").checked)
	{
		var pr=Number(document.getElementById("magik_rotate_procent").value)/100;
		var minw =im.width*pr;
		var minh = im.height*pr;
		
		var nw = im.width-minw;
		var nh = im.height-minh;
		
		var canvas = document.createElement('canvas');
		canvas.width = im.width;
		canvas.height = im.height;
		var context = canvas.getContext("2d");
		context.putImageData(im,0,0);
		
		im=context.getImageData(minw/2,minh/2,nw,nh);
		if(document.getElementById("magik_rotate_cutted_vortex").checked)
		{
			im=median(mirror_down(mirror_right(im)));
		}
	}
	
	
	
	////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	
	// var canvas2 = document.createElement("canvas");
	
				// canvas2.width = imgData.width;
				// canvas2.height = imgData.height;
				// var ctx2 = canvas2.getContext("2d");
				// ctx2.putImageData(imgData,0,0);
				
				// var imageData=ctx2.getImageData(0,0,imgData.width,imgData.height);

				
				// var x = (imageData.width-w1)/2;
				// var y = (imageData.height-h1)/2;
				// var x2= x+w1;
				// var y2 = y+h1;

				
				// var im = ctx2.getImageData(x,y,x2-x,y2-y);
				
				
				
				return im;
	
	
	
}

var global_swap_colors_auto=false;
function swap_colors(id)
{
	var rcanvas = document.getElementById(id);
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	rctx.putImageData(swap_colors_imgData(imgData),0,0);
}

function swap_colors_thread(imgData,callback)
{
	
		var n = Number(document.getElementById("swap_colors_semaphor_value").value);
		if(n==0) 
		{
			imgData=swap_colors_imgData(imgData);
			
			n=Number(document.getElementById("swap_colors_delay").value);
		}
		else
		{
			n--;
			
		}
		
		document.getElementById("swap_colors_semaphor_value").value=n;
		
		callback(imgData);
	
	
}

function swap_colorsAuto()
{
	setTimeout( function(){
	 whenUserClickSwapColorsButton();
	if(global_swap_colors_auto==true)swap_colorsAuto()
	},Number(document.getElementById("swap_colors_delay").value));
}

function seed_to_canvas()
{

var query = ('generate random seed 7 20, mirror right, mirror down, axes minus,  plus');
	//var txt = "commands=generate random seed 9 5, mirror right, mirror down, axes minus,  mirror right, mirror down, axes minus, plus, plus";
	var txt = "commands="+query;
	var url = global_url_to_server+'execute_script';
	
	 textToServerAndReturnBlob(txt, url, 
	
	function( blob_from_server ) {
			getImageFromBlob( blob_from_server, function(img) {
				
				var rcanvas = document.getElementById('canvas0');
				var rctx = rcanvas.getContext("2d");
				var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
				var w = imgData.width;
				var h = imgData.height;
				
				var canvas2 = document.createElement("canvas");
				canvas2.width = img.width;
				canvas2.height=img.height;
				var context2 = canvas2.getContext("2d");
				context2.drawImage(img,0,0);
				var imgData2=context2.getImageData(0,0,canvas2.width,canvas2.height);
				
				//imgData2=rotate_angle_imgData(imgData2,getRandomInt(0,91));
				
				
				var canvas = document.createElement("canvas");
				canvas.width = w;
				canvas.height= h;
				var context = canvas.getContext("2d");
				context.putImageData(imgData2,0,0);//w/2-imgData2.width/2,h/2-imgData2.height/2);
				//context.putImageData(imgData2,getRandomInt(0,w/2),getRandomInt(0,h/2));
				var imgData2=context.getImageData(0,0,canvas.width,canvas.height);
				
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var color = getColorArrayFromImageDataByIndex(imgData2,idx);
					if( random_compareColors(color,[0,0,0,0]) == false)
					{
						imgData = setPoint(imgData,w, x,y,0,0,getColorArrayFromImageDataByIndex(imgData2,idx));
					}
					
					
					
					
				}
			}
			
			
			
			rctx.putImageData(	imgData,0,0);
				
			});	
		}, function(msg) {
			
			
			console.log("transform(): Was error: "+msg);
			throw new Error(msg);
			
		}); 
	
	
	
	}
function whenUserClickSwapColorsAutoStartButton()
{
	
	global_swap_colors_auto=true;
	swap_colorsAuto();
}

function whenUserClickSwapColorsAutoStopButton()
{
	global_swap_colors_auto=false;
}
function whenUserClickSwapColorsButton()
{
	swap_colors("canvas0");
}

function nanonites()
{
	var rcanvas = document.getElementById(getBorderedCanvas().id);
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	imgData=nonineth(nineth(imgData));
	
	var rcanvas = document.getElementById(getBorderedCanvas().id);
	var rctx = rcanvas.getContext("2d");
	rctx.putImageData(imgData,0,0);
	
	
}



function pereplet()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	imgData=pereplet_imgData(imgData,filter);
	
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	rctx.putImageData(imgData,0,0);
	
	
}

function pereplet2()
{
	
	
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	
	
	var isn_canvas = document.getElementById("myCanvas77");
	var isn_ctx = isn_canvas.getContext("2d");
	var sx = (isn_canvas.width/2|0 )-(rcanvas.width/2|0);
	var sy = (isn_canvas.height/2|0 )-(rcanvas.height/2|0);
	var isn_imgData=isn_ctx.getImageData(sx,sy,rcanvas.width,rcanvas.height);
	
	//var rcanvas = document.getElementById(getBorderedCanvas().id);
	// var rcanvas = document.getElementById("myCanvas4");
	// var rctx = rcanvas.getContext("2d");
	// var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	imgData=pereplet2_imgData(isn_imgData,cloneImageData(isn_imgData),filter);
	
	rctx.putImageData(imgData,0,0);
	
	
}


function paint_over(callback)
{
	var rcanvas = document.getElementById("myCanvas77");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	 do_server_command2(imgData,'paint over',callback);
	
	
}








function rnd_imgData(imgData,callback)
{
		var n = Number(document.getElementById("random_colors_semaphor_value").value);
		if(n==0) 
		{
			imgData=random_imgData_one_color(imgData);
			n=Number(document.getElementById("random_delay").value);
		}
		else
		{
			n--;
			
		}
		document.getElementById("random_colors_semaphor_value").value=n;
		callback(imgData);
}

function random_colors(id)
{
	var rcanvas = document.getElementById(id);
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var im=null;
	if(document.getElementById("random3").checked==true)
	{
		var rcanvas = document.getElementById('canvas0');
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
		im = random_alpha_imgData(imgData);
			rctx.putImageData( im,0,0);
			return;
		
	}
	
	
	
	if(document.getElementById("filter").checked==true)
	{
		var s = document.getElementById("filter_rgb").value.trim();
		if(s.length>0) {
			var filter = s.split(",");
			if(filter.length==3)
				
		im =filter_random_imgData_cyclic(imgData,filter);
		}
	}
	else if(document.getElementById("filter2").checked==true)
	{
		//var s = document.getElementById("filter_rgb").value.trim();
		//if(s.length>0)
			{
			//var filter = s.split(",");
			//if(filter.length==3)
				
		im =random_all_equal_imgData_cyclic(imgData);
		
		
		do_server_command2(im,'nineth,nonineth', function(){
		
		rctx.putImageData( im,0,0);
		
	});
		
		
		return;
		
		
		
		
		
		
		}
	}
	else {
		im= random_imgData_one_color(imgData);
	
	
	}
	// do_server_command2(im,'nineth,nonineth', function(){
		
		//
		
	// });;
	
	 rctx.putImageData( im,0,0);
	
}

var global_random_colors_auto=false;

function random_colorsAuto()
{
	setTimeout( function(){
	 whenUserClickRandomColorsButton();
	if(global_random_colors_auto==true) random_colorsAuto()
	},Number(document.getElementById("random_delay").value));
}


function whenUserClickRandomColorsAutoStartButton()
{
	
	global_random_colors_auto=true;
	random_colorsAuto();
}

function whenUserClickRandomColorsAutoStopButton()
{
	global_random_colors_auto=false;
}
















function round_random_colors(id)
{
	var rcanvas = document.getElementById(id);
	var rctx = rcanvas.getContext("2d");

	var im = rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	im = part_inv(im);
	rctx.putImageData( im,0,0);
	//do_server_command2(im,'nineth,nonineth', function(){});
}

function whenUserClickRandomRoundColorsButton()
{
	round_random_colors("canvas0");
}





var global_round_random_colors_auto=false;


function round_random_colorsAuto()
{
	setTimeout( function(){
	 whenUserClickRandomRoundColorsButton();
	if(global_round_random_colors_auto==true) round_random_colorsAuto()
	},Number(document.getElementById("round_random_delay").value));
}



function whenUserClickRandomRoundColorsAutoStartButton()
{
	
	global_round_random_colors_auto=true;
	round_random_colorsAuto();
}

function whenUserClickRandomRoundColorsAutoStopButton()
{
	global_round_random_colors_auto=false;
}



function whenUserClickRandomColorsButton()
{
	random_colors("canvas0");
}





var global_main_thread_auto=false;



function main_threadAuto()
{
	setTimeout( function(){
	 whenUserClickMainThreadButton();
	if(global_main_thread_auto==true) main_threadAuto()
	},Number(document.getElementById("main_thread_delay").value));
}



function whenUserClickMainThreadAutoStartButton()
{
	
	global_main_thread_auto=true;
	main_threadAuto()

}

function whenUserClickMainThreadAutoStopButton()
{
	global_main_thread_auto=false;
}



function whenUserClickMainThreadButton()
{
	main_thread();
}








var global_round_colors_auto=false;


function whenUserClickRoundColorsButton()
{
	var rcanvas = document.getElementById(getBorderedCanvas().id);
	var rctx = rcanvas.getContext("2d");

	var im=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	
	

	//var im=lctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	do_server_command4(im,'median,plus', function(img){
		
		var lcanvas = document.getElementById("myCanvas4_1");
		lcanvas.width = img.width;
		lcanvas.height = img.height;
		var lctx = lcanvas.getContext("2d");
		lctx.drawImage(img, 0, 0,lcanvas.width,lcanvas.height);
		
	});;
}



function round_colorsAuto()
{
	setTimeout( function(){
	 whenUserClickRoundColorsButton();
	if(global_round_colors_auto==true) round_colorsAuto()
	},Number(document.getElementById("round_delay").value));
}



function whenUserClickRoundColorsAutoStartButton()
{
	
	global_round_colors_auto=true;
	round_colorsAuto();
}

function whenUserClickRoundColorsAutoStopButton()
{
	global_round_colors_auto=false;
}



function whenUserClickMakeRedButton()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var im= makegreen(imgData);
	//var im=makegreen(im);
	//var im=makeblue(im);
	rctx.putImageData( im,0,0);
}



function whenUserClickMakeRaznButton()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var im= makerazn(imgData);
	rctx.putImageData( im,0,0);
}

function getMask()
{
	var s=document.getElementById("makergbplusminus_filter").value;
	var mask=(s.trim()).split(',');
	if(mask.length!=4)return;
	for(var n=0;n<4;n++)
	{
		mask[n]=Number(mask[n]);
	}
	return mask;
}


function whenUserClickMakeRGBPlusMinusButton()
{
	//var s=prompt('Enter mask for changle all colors','-10,-10,-10,0');
	var s=document.getElementById("makergbplusminus_filter").value;
	var mask=(s.trim()).split(',');
	if(mask.length!=4)return;
	for(var n=0;n<4;n++)
	{
		mask[n]=Number(mask[n]);
	}
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height); 
	var im=null;
	if(document.getElementById("rgbpm_var2").checked) im= makergbplusminus2(imgData,mask);
	else im= makergbplusminus0(imgData,mask);
	rctx.putImageData( im,0,0);
}

function rgbpm_inv_mask()
{
	var s=document.getElementById("makergbplusminus_filter").value;
	var mask=(s.trim()).split(',');
	if(mask.length!=4)return;
	for(var n=0;n<4;n++)
	{
		mask[n]=Number(mask[n])*-1;
	}
	document.getElementById("makergbplusminus_filter").value=mask.join(',');
}


function whenUserClickMakeRed2Button()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var n = Number(document.getElementById("make_red_step").value);
	var im= make_color(imgData,0,n);
	//var im=makegreen(im);
	//var im=makeblue(im);
	rctx.putImageData( im,0,0);
}
function whenUserClickMakeGreen2Button()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var n = Number(document.getElementById("make_green_step").value);
	
	var im= makegreen(imgData,n);
	rctx.putImageData( im,0,0);
}


function whenUserClickMakeBlue2Button()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	var n = Number(document.getElementById("make_blue_step").value);
	var im= make_color(imgData,2,n);
	rctx.putImageData( im,0,0);
}







var global_shift_auto=false;
var global_shift_both_im=null;

function shift_both_klik(callback)
{
	//
	{
		if(global_shift_both_i<=0) { 

		callback(); 
		return; 

		}
		
		
		if(document.getElementById("shift_reverse_switch").checked==false)  global_shift_both_im=shift_both_imgData(global_shift_both_im,1);
		else global_shift_both_im=shift_both_reverse_imgData(global_shift_both_im,1);
		
		
			
			
		
	//	else 	
		
		global_shift_both_i--;
		
	}
	
	

	
	
	setTimeout(function(){shift_both_klik(callback)},1);
	//console.log('global_shift_both_i='+global_shift_both_i);
	
}






var global_inv_shift_both_step=1;
var global_inv_shift_both_i=0;

function inv_shift_both(imgData,callback)
{
	

			
	if(document.getElementById("shift_reverse_switch").checked==true)
	{
		//global_shift_both_im=shift_both_imgData(global_shift_both_im,1); 
		 imgData=shift_both_imgData(imgData);
		
	}
	else{
		//global_shift_both_im=shift_both_reverse_imgData(global_shift_both_im,1)
		
		imgData=shift_both_reverse_imgData(imgData);
	}
			
			
			
			
	
	 var rcanvas = document.getElementById("canvas0");
			var rctx = rcanvas.getContext("2d");
		rctx.putImageData(imgData,0,0);

	 global_inv_shift_both_i++;
	if(global_inv_shift_both_i>=imgData.width/2)
	{
		global_inv_shift_both_i=0; 
		if(document.getElementById("shift_reverse_switch").checked == false)
		document.getElementById("shift_reverse_switch").checked=true;
	else
		document.getElementById("shift_reverse_switch").checked=false;
	}

	callback(imgData);

	
	
	
	
	
	
}


















var global_shift_both_step=1;
var global_shift_both_i=0;

function shift_both(imgData,callback)
{
	
	// if(document.getElementById("shift_reverse_switch").checked==false)
	// {
		// var counter = Number(document.getElementById("shift_hor_counter").value);
		// if(counter>=imgData.width/16)
		// {
			// document.getElementById("shift_reverse_switch").checked=true;document.getElementById("shift_steps").value=0;
			// callback(imgData);return ;
		// }
		
		
		// counter++;
		// document.getElementById("shift_hor_counter").value=counter;
	// }
	// else
	// {
		// var counter = Number(document.getElementById("shift_hor_counter").value);
		// if(counter<= -imgData.width/16)
		// {
			// document.getElementById("shift_reverse_switch").checked=false;document.getElementById("shift_steps").value=0;
			// callback(imgData);return ;
		// }
		
		
		// counter--;
		// document.getElementById("shift_hor_counter").value=counter;
	// }
	
	
	
	// console.log('global_shift_both_i='+Number(document.getElementById("shift_steps").value));
	
	// global_shift_both_i=Number(document.getElementById("shift_steps").value);
	
	// // if(document.getElementById("shift_reverse_switch").checked==true)
	// // {
		// // global_shift_both_i=0;
	// //	document.getElementById("shift_reverse_switch").checked=true;
	// // }
	// // else if(global_shift_both_i<=-(imgData.width/4))
	// // {
		// // global_shift_both_step=1;
		// // document.getElementById("shift_reverse_switch").checked=false;
	// // }
	
	
	//if(global_shift_both_i<8)
	// {
	// for(var n=0;n<=global_shift_both_i;n++){
	// imgData=shift_both_imgData(imgData);
			
	// var rcanvas = document.getElementById("myCanvas77");
			// var rctx = rcanvas.getContext("2d");
			// rctx.putImageData(imgData,0,0);
	// }
	
	// }
	  // if(global_shift_both_i>=global_shift_both_step)
	 // {
	//	  for(var n=0;n<=global_shift_both_i;n++)
		{
			
			
	if(document.getElementById("shift_reverse_switch").checked==false)
	{
		//global_shift_both_im=shift_both_imgData(global_shift_both_im,1); 
		 imgData=shift_both_imgData(imgData);
		
	}
	else{
		//global_shift_both_im=shift_both_reverse_imgData(global_shift_both_im,1)
		
		imgData=shift_both_reverse_imgData(imgData);
	}
			
			
			
			
		
		 // }
	 }
	 
	 var rcanvas = document.getElementById("canvas0");
			var rctx = rcanvas.getContext("2d");
		rctx.putImageData(imgData,0,0);

	 global_shift_both_i++;
	if(global_shift_both_i>=imgData.width/2)
	{
		global_shift_both_i=0; 
		if(document.getElementById("shift_reverse_switch").checked == false)
		document.getElementById("shift_reverse_switch").checked=true;
	else
		document.getElementById("shift_reverse_switch").checked=false;
	}
	
	// global_shift_both_step+=2;
	 // if(global_shift_both_step>=32) global_shift_both_step=2; 
	callback(imgData);
	
	// document.getElementById("shift_steps").value=i;
	
	// global_shift_both_im = imgData;
	
	// // shift_both_klik(callback)
	// // if(document.getElementById("shift_reverse_switch").checked==false)
	// // {
		// // global_shift_both_im=shift_both_imgData(global_shift_both_im,1);
	// // }
	// // else{
		// // global_shift_both_im=shift_both_reverse_imgData(global_shift_both_im,1)
	// // }
	
	// //callback(global_shift_both_im);
	
	
	
	
	
	
	
	
	
	
	// shift_both_klik(
	
	// function()
	// {
		// callback(global_shift_both_im);
	// }
	
	
	// );
	// // 
	
	// //}
	// // var recanvas = document.getElementById('shift_canvas');
	// // recanvas.width=im.width;
	// // recanvas.height=im.height;
	// // var rectx = recanvas.getContext("2d");
	// // rectx.putImageData(im,0,0);
	
	
	
}

function ShiftAuto()
{
	setTimeout( function(){
	 whenUserClickShiftButton();
	if(global_shift_auto==true)ShiftAuto()
	},Number(document.getElementById("shift_both_delay").value));
}
function whenUserClickShiftAutoStartButton()
{
	
	global_shift_auto=true;
	ShiftAuto();
}

function whenUserClickShiftAutoStopButton()
{
	global_shift_auto=false;
}
function whenUserClickShiftButton()
{
	shift_both("canvas0");
}














































var global_rgbpp_auto=false;
function rgbpp(id)
{
	
	var s=document.getElementById("rgbpp_steps").value;
	var steps=(s.trim()).split(',');
	if(steps.length!=4)return;
	for(var n=0;n<4;n++)
	{
		steps[n]=Number(steps[n]);
	}
	var rcanvas = document.getElementById(id);
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	var s=document.getElementById("makergbplusminus_filter").value;
	
	var mask=(s.trim()).split(',');
	if(mask.length!=4)return;
	for(var n=0;n<4;n++)
	{
		mask[n]=Number(mask[n]);
	}
	
	mask[2]+=steps[2];
	if(mask[2]>255)
	{
		mask[2]=0;
		mask[1]+=steps[1];
		if(mask[1]>255)
		{
			mask[1]=0;
			mask[0]+=steps[0];
			if(mask[0]>255)
			{
				mask[0]=0;
				mask[1]=0;
				mask[2]=0;
				pereplet();
			}
		}
	}
	//mask[3]+=steps[3];
	if(mask[3]>255)
	{
		mask[3]=0;
	}
	document.getElementById("makergbplusminus_filter").value=mask.join(',');
	rctx.putImageData(rgb_pm_pro_imgData(imgData,mask),0,0);
	
	
	//rctx.drawImage(rgbpp_random_imgData_cyclic(imgData),0,0);
}
function RGBPPAuto()
{
	setTimeout( function(){
	 whenUserClickRGBPPButton();
	if(global_rgbpp_auto==true)RGBPPAuto()
	},Number(document.getElementById("rgbpp_delay").value));
}
function whenUserClickRGBPPAutoStartButton()
{
	
	global_rgbpp_auto=true;
	RGBPPAuto();
}

function whenUserClickRGBPPAutoStopButton()
{
	global_rgbpp_auto=false;
}
function whenUserClickRGBPPButton()
{
	rgbpp("canvas0");
}






var global_filter_colors_auto=false;
function filter_colors(id0,id1,filtr)
{
	var rcanvas = document.getElementById(id0);
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	
	var r2canvas = document.getElementById(id1);
	r2canvas.width = rcanvas.width;
		r2canvas.height = rcanvas.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(filter_colors_imgData(imgData,filtr),0,0);
	
}
function filter_colorsAuto()
{
	setTimeout( function(){
	 whenUserClickFilterColorsButton();
	if(global_filter_colors_auto==true)filter_colorsAuto()
	},Number(document.getElementById("filter_colors_delay").value));
}
function whenUserClickFilterColorsAutoStartButton()
{
	
	global_filter_colors_auto=true;
	filter_colorsAuto();
}

function whenUserClickFilterColorsAutoStopButton()
{
	global_filter_colors_auto=false;
}
function whenUserClickFilterColorsButton()
{
	var from_canvas = document.getElementById("from_canvas_for_filter_colors").value;
	var to_canvas =  document.getElementById("to_canvas_for_filter_colors").value;
	var filter =  Number(document.getElementById("filter_colors_str_rgb").value); 
	filter_colors(from_canvas,to_canvas,filter);
}


function incr(id, iv)//"main_thread_delay",1000)
{
	var n = Number(document.getElementById(id).value);
	n+=Number(iv);
	document.getElementById(id).value=n;
}

//destroyer

var global_destroyer_auto=false;

function destroyer_thread(im,callback)
{
	
	
	var n = Number(document.getElementById("destroyer_semaphor_value").value);
		if(n==0) 
		{
			
	
	
	
	var r2canvas = document.getElementById("canvas0");
	
	var r2ctx = r2canvas.getContext("2d");
	im=r2ctx.getImageData(0,0,r2canvas.width,r2canvas.height);
	
	// var dcanvas = document.getElementById("myCanvas79");
	// var dctx = dcanvas.getContext("2d");
	// var dmgData=dctx.getImageData(0,0,dcanvas.width,dcanvas.height);
	
	var imgData = destroy_colors_imgData(im,im, function(im)
	{
		
		callback(im);
		
		//for(var i=0;i<10;i++) whenUserClickRio(true);
		do_server_query(0,function(){ 
		//document.getElementById("destroyer_reverse").checked=true;
		
		
		
		});
		
	});
	if(imgData!=null)
	{
	var r2canvas = document.getElementById("canvas0");
	r2canvas.width = imgData.width;
	r2canvas.height = imgData.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(imgData,0,0);
	callback(imgData);
	}
	else callback(im);
			
			
			
			
			n=Number(document.getElementById("destroyer_semaphor_delay").value);
		}
		else
		{
			n--;
			
		}
		document.getElementById("destroyer_semaphor_value").value=n;
		callback(im);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// var r2canvas = document.getElementById("myCanvas77");
	// r2canvas.width = rcanvas.width;
	// r2canvas.height = rcanvas.height;
	// var r2ctx = r2canvas.getContext("2d");
	// r2ctx.putImageData(imgData,0,0);
	
	
	
}




















function destroyer()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	var dcanvas = document.getElementById("myCanvas79");
	var dctx = dcanvas.getContext("2d");
	var dmgData=dctx.getImageData(0,0,dcanvas.width,dcanvas.height);
	
	imgData = destroy_colors_imgData(imgData,dmgData, function(im)
	{
		//for(var i=0;i<10;i++) whenUserClickRio(true);
		do_server_query(0,function(){ 
		//document.getElementById("destroyer_reverse").checked=true;
		});
		return im;
	});
	if(imgData!=null)
	{
	var r2canvas = document.getElementById("canvas0");
	r2canvas.width = rcanvas.width;
	r2canvas.height = rcanvas.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(imgData,0,0);
	}
	
	// var r2canvas = document.getElementById("myCanvas77");
	// r2canvas.width = rcanvas.width;
	// r2canvas.height = rcanvas.height;
	// var r2ctx = r2canvas.getContext("2d");
	// r2ctx.putImageData(imgData,0,0);
	
	
	
}

function destroyerAuto()
{
	setTimeout( function(){
	 whenUserClickDestroyerButton();
	if(global_destroyer_auto==true)destroyerAuto()
	},Number(document.getElementById("destroyer_delay").value));
}
function whenUserClickDestroyerAutoStartButton()
{
	
	global_destroyer_auto=true;
	destroyerAuto();
}

function whenUserClickDestroyerAutoStopButton()
{
	global_destroyer_auto=false;
}
function whenUserClickDestroyerButton()
{
	// var from_canvas = document.getElementById("from_canvas_for_filter_colors").value;
	// var to_canvas =  document.getElementById("to_canvas_for_filter_colors").value;
	// var filter =  Number(document.getElementById("filter_colors_str_rgb").value); 
	 destroyer();
}



var global_undestroyer_auto=false;
function undestroyer()
{
	var n = Number(document.getElementById("undestroy_counter").value);
	if(n>30)
	{
		n=0;
		//document.getElementById("destroyer_reverse").checked=false;
		document.getElementById("undestroy_counter").value=0;
		return;
	}
	var rcanvas = document.getElementById("myCanvas79");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	
	var dcanvas = document.getElementById("canvas0");
	var dctx = dcanvas.getContext("2d");
	var dmgData=dctx.getImageData(0,0,dcanvas.width,dcanvas.height);
	
	var imgData = rio_random_cluster_imgData(dmgData);
	
	//var arr2 = destroy_colors_imgData(arr[1],arr[0]);
	
	// var r2canvas = document.getElementById("canvas0");
	// r2canvas.width = rcanvas.width;
	// r2canvas.height = rcanvas.height;
	// var r2ctx = r2canvas.getContext("2d");
	// r2ctx.putImageData(imgData,0,0);
	
	document.getElementById("undestroy_counter").value=(n+1);
	
}



function undestroyerAuto()
{
	setTimeout( function(){
	 whenUserClickUnDestroyerAddNewButton();
	if(global_undestroyer_auto==true)undestroyerAuto()
	},Number(document.getElementById("undestroyer_delay").value));
}
function whenUserClickUnDestroyerAutoStartButton()
{
	
	global_undestroyer_auto=true;
	undestroyerAuto();
}

function whenUserClickUnDestroyerAutoStopButton()
{
	global_undestroyer_auto=false;
}



function whenUserClickUnDestroyerAddNewButton()
{
		// var dcanvas = document.getElementById("canvas0");
	// var dctx = dcanvas.getContext("2d");
	// var dmgData=dctx.getImageData(0,0,dcanvas.width,dcanvas.height);
	 undestroyer();
	// rio_random_cluster_imgData(dmgData,dcanvas.width/2,dcanvas.height/2);
}
function rotate_result_imgData(im0,callback)
{
	// var rcanvas = document.getElementById(id);
	// var rctx = rcanvas.getContext("2d");
	// var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	// rctx.drawImage(rgbpp_random_imgData_cyclic(imgData),0,0);
	var degree = Number(document.getElementById("rotate_result_degree").value);
	var step = Number(document.getElementById("rotate_result_step").value);
	
	// var from_id = document.getElementById("from_rotate_result_canvas").value;
	// if(global_rotate_stop==true)
	// {
		// from_id='canvas0';
	// }
	// else{
		// from_id='myCanvas4';
	// }
	
	// var canvas0 = document.getElementById(from_id);
	// var context0 = canvas0.getContext("2d");
	// var im0 = context0.getImageData(0,0,canvas0.width,canvas0.height);
	
	im0=cloneImageData(im0);
	
	
	
	im0 = mod_rotate2_rotate777(im0,degree);
	// var w = im0.width;
	// var h = im0.height;
	
	// var canvas01 = document.getElementById(document.getElementById("to_rotate_result_canvas").value);
	// canvas01.width = w;
	// canvas01.height = h;
	// var context01 = canvas01.getContext("2d");
	// context01.putImageData(im0,0,0);
	
	
	
	
	
	
	if(document.getElementById("rotate_only_one_side").checked==true) 
	{
		//if(degree<0){step=1;degree*=-1;}
		
		degree+=1;
		if((degree<0)||(degree>=360)){
			degree=0;document.getElementById("rotate_result_degree").value=degree;
			step =1; document.getElementById("rotate_result_step").value=step;
			}
		
	}
	else{
		
		
		if(document.getElementById("rotate_result_reverse").checked)
	{
		degree-=step;
		if(degree< -90) { //degree=90; 
			step = step * -1;
			document.getElementById("rotate_result_step").value= step;
		}
		else if(degree>=90)
		{// degree=0;
				step = step * -1;
				document.getElementById("rotate_result_step").value= step;
		}
	}
	else
	{
		degree+=step;
		if(degree>=90){// degree=0;
		step = step * -1;
		document.getElementById("rotate_result_step").value= step;
		}
		else if(degree < -90) { //degree=90; 
		step = step * -1;
		document.getElementById("rotate_result_step").value= step;
		}
		
		
	}
	
	}
	document.getElementById("rotate_result_degree").value=degree;
	
	callback(im0);
	
}


var global_rotate_result_auto=false;
function rotate_result(id)
{
	// var rcanvas = document.getElementById(id);
	// var rctx = rcanvas.getContext("2d");
	// var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	// rctx.drawImage(rgbpp_random_imgData_cyclic(imgData),0,0);
	var degree = Number(document.getElementById("rotate_result_degree").value);
	var step = Number(document.getElementById("rotate_result_step").value);
	
	var from_id = document.getElementById("from_rotate_result_canvas").value;
	if(global_rotate_stop==true)
	{
		from_id='canvas0';
	}
	else{
		from_id='myCanvas4';
	}
	
	var canvas0 = document.getElementById(from_id);
	var context0 = canvas0.getContext("2d");
	var im0 = context0.getImageData(0,0,canvas0.width,canvas0.height);
	
	im0=cloneImageData(im0);
	
	
	
	im0 = mod_rotate2_rotate777(im0,degree);
	var w = im0.width;
	var h = im0.height;
	
	var canvas01 = document.getElementById(document.getElementById("to_rotate_result_canvas").value);
	canvas01.width = w;
	canvas01.height = h;
	var context01 = canvas01.getContext("2d");
	context01.putImageData(im0,0,0);
	
	
	
	if(document.getElementById("rotate_result_reverse").checked)
	{
		degree-=step;
		if(degree< -90) { //degree=90; 
			step = step * -1;
			document.getElementById("rotate_result_step").value= step;
		}
		else if(degree>=90)
		{// degree=0;
				step = step * -1;
				document.getElementById("rotate_result_step").value= step;
		}
	}
	else
	{
		degree+=step;
		if(degree>=90){// degree=0;
		step = step * -1;
		document.getElementById("rotate_result_step").value= step;
		}
		else if(degree < -90) { //degree=90; 
		step = step * -1;
		document.getElementById("rotate_result_step").value= step;
		}
		
	}
	document.getElementById("rotate_result_degree").value=degree;
	
}

function rotate_resultAuto()
{
	setTimeout( function(){
	 whenUserClickRotateResultButton();
	if(global_rotate_result_auto==true)rotate_resultAuto()
	},Number(document.getElementById("rotate_result_delay").value));
}

function whenUserClickRotateResultAutoStartButton()
{
	
	global_rotate_result_auto=true;
	rotate_resultAuto();
}

function whenUserClickRotateResultAutoStopButton()
{
	global_rotate_result_auto=false;
}


function whenUserClickRotateResultButton()
{
	rotate_result();
}



























var global_up_auto=false;
function upAuto()
{
	setTimeout( function(){
	whenUserClickUpButton();
	if(global_up_auto==true)upAuto()
	},Number(document.getElementById("up_delay").value));
}
function whenUserClickUpNovaButton()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	rctx.putImageData(up_nova_image_data(rcanvas,Number(document.getElementById('up_step').value)),0,0);
	//up("canvas0");
}

// function cli_up(im,  callback)
// {
	// if(document.getElementById('up_reverse').checked)
	// {
		// imgData =  mod_cli_up_reverse_up_image_data( im );
	// }
	// else{
		// imgData = mod_cli_up_up_image_data( im );
	// }
	// callback(imgData);
	
// }
var global_up_im=null;
var global_up_counter_i=0;
function __up_thread(callback)
{
	if(global_up_counter_i<=0) { callback(); return;}
	
	if(document.getElementById('up_reverse_switch').checked)
	{
		global_up_im =  mod_cli_up_reverse_up_image_data( global_up_im );
	}
	else{
		global_up_im = mod_cli_up_up_image_data( global_up_im );
	}
	
	
	global_up_counter_i--;
	
	setTimeout(
	
	function()
	{
		
		__up_thread( callback );
		
	}, 1
	
	
	
	);
	
}

function old_up_thread(im,callback)
{
	global_up_im=im;
	global_up_counter_i = Number(document.getElementById('up_counter').value);
	
	document.getElementById('up_counter').value=global_up_counter_i+1;
	if(global_up_counter_i+1>=(im.width/4))
	{ 
		document.getElementById('up_counter').value=0;
		document.getElementById('up_reverse_switch').checked=!document.getElementById('up_reverse_switch').checked;
	}
	
	__up_thread(function(){
			
			
			callback(global_up_im);
			
			
		});
			
	
}


function up_thread(imgData,callback)
{
	// global_up_im=im;
	// global_up_counter_i = Number(document.getElementById('up_counter').value);
	
	// for(var i=0;i<global_up_counter_i;i++)
	// {
		// im = mod_cli_up_up_image_data( im );
	// }
	
	// document.getElementById('up_counter').value=(global_up_counter_i+1);
		
	// if(global_up_counter_i>=(im.width/2))
	// { 
		// document.getElementById('up_counter').value=0;
		// //document.getElementById('up_reverse_switch').checked=!document.getElementById('up_reverse_switch').checked;
	// }
	
	// callback(im);
	
		{
			
			
	if(document.getElementById("up_reverse_switch").checked==false)
	{
		//global_shift_both_im=shift_both_imgData(global_shift_both_im,1); 
		 imgData=mod_cli_up_up_image_data(imgData);
		
	}
	else{
		//global_shift_both_im=shift_both_reverse_imgData(global_shift_both_im,1)
		
		imgData=mod_cli_up_reverse_up_image_data(imgData);
	}
			
			
			
			
		
		 // }
	 }
	 
	 var rcanvas = document.getElementById("canvas0");
			var rctx = rcanvas.getContext("2d");
		rctx.putImageData(imgData,0,0);

	 global_up_counter_i++;
	if(global_up_counter_i>=imgData.width/2)
	{
		global_up_counter_i=0; 
		if(document.getElementById("up_reverse_switch").checked == false)
		document.getElementById("up_reverse_switch").checked=true;
	else
		document.getElementById("up_reverse_switch").checked=false;
	}
	
	// global_shift_both_step+=2;
	 // if(global_shift_both_step>=32) global_shift_both_step=2; 
	callback(imgData);
	
}



function whenUserClickUpButton()
{
	var rcanvas = document.getElementById("canvas0");
	var rctx = rcanvas.getContext("2d");
	var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
	if(document.getElementById("up_nova_f").checked==true)
		rctx.putImageData(up_nova_image_data(rcanvas,Number(document.getElementById('up_step').value)),0,0);
		else rctx.putImageData(up_image_data(imgData,Number(document.getElementById('up_step').value)),0,0);
	//up("canvas0");
}
function whenUserClickUpAutoStartButton()
{
	
	global_up_auto=true;
	upAuto();
}

function whenUserClickUpAutoStopButton()
{
	global_up_auto=false;
}
function inc(a,b)
{
	if(b==0) return a;
	
	if(document.getElementById("cyclic").checked)
	{
		if(a == 255) return b;
		if(a+b < 255) return a+b;
		return (a+b)-255;
	}
	else
	{
		if(a+b >  255) return 255;
		return a+b;
	}
	
}
/******
function getStrColorFromRGBAArray(data)
{
	return "rgba("+data[0]+','+data[1]+','+data[2]+','+data[3]+')';
}
******/

function getStrColorFromRGBAArray_PRO( imageData, index )
{
	return "rgba("+imageData.data[index]+','+imageData.data[index+1]+','+imageData.data[index+2]+','+imageData.data[index+3]+')';
}

function update_colors()
{
	
	var dRed = Number(document.getElementById("red").value);
	var dGreen = Number(document.getElementById("green").value);
	var dBlue = Number(document.getElementById("blue").value);
	var dAlpha = Number(document.getElementById("alpha").value);
	
	var canvas = document.getElementById("canvas0");
    var context = canvas.getContext("2d");
	var imageData = context.getImageData(0,0,canvas.width,canvas.height);
	
	var canvasTemp = document.createElement("canvas");
    canvasTemp.width = canvas.width;
	canvasTemp.height = canvas.height;
	var contextTemp = canvasTemp.getContext("2d");
	var imageDataTemp = contextTemp.getImageData(0,0,canvas.width,canvas.height);
	
	
	
	for(var j=0;j<canvas.height;j++)
	{
		for(var i=0;i<canvas.width;i++)
		{
			
			var ind = canvas.width*j+i << 2;
			
			imageDataTemp.data[ind] = inc(imageData.data[ind],dRed);
			imageDataTemp.data[ind+1] = inc(imageData.data[ind+1],dGreen);
			imageDataTemp.data[ind+2] = inc(imageData.data[ind+2],dBlue);
			imageDataTemp.data[ind+3] = inc(imageData.data[ind+3],dAlpha);
						
		}

	
	}
		
	context.putImageData(contextTemp.getImageData(0,0,canvas.width,canvas.height),0,0);
}

function user_change_r_color()
{
	document.getElementById("red").value = Number(document.getElementById("range_red").value);
}

function user_change_g_color()
{
	document.getElementById("green").value = Number(document.getElementById("range_green").value);
}

function user_change_b_color()
{
	document.getElementById("blue").value = Number(document.getElementById("range_blue").value);
}

function user_change_a_color()
{
	document.getElementById("alpha").value = Number(document.getElementById("range_alpha").value);
}
var global_number_of_colors=20;
function whenUserClickOnSetGlobalNumberOfColors()
{
	global_number_of_colors=Number((''+document.getElementById("global_number_of_colors").value).trim());
}
function upd()
{
	document.getElementById("global_number_of_colors").value=global_number_of_colors;
}

function prepare_yellow()
{
		
	var rcanvas = document.getElementById("canvas0");
			var rctx = rcanvas.getContext("2d");
			var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
		

global_for_filter_yellow_imgData=imgData;
}

var global_clip_data = null;
function whenPastingFinished(img)
{
	var canvas = document.getElementById("canvas0");
	canvas.width = img.width;
	canvas.height = img.height;
	var context = canvas.getContext("2d");
	context.drawImage(img,0,0);	
	
	// var canvas = document.getElementById("myCanvas77");
	// canvas.width = img.width;
	// canvas.height = img.height;
	// var context = canvas.getContext("2d");
	// context.drawImage(img,0,0);	
	
	
	var rcanvas = document.getElementById("canvas0");
			var rctx = rcanvas.getContext("2d");
			var imgData=rctx.getImageData(0,0,rcanvas.width,rcanvas.height);
		
global_imgData=imgData;
global_for_filter_yellow_imgData=imgData;
	// var angle = 45 * Math.PI / 180;
	// var cnv = document.getElementById('canvas0');
	
	// var w =cnv.width;
	// var h = cnv.height;

	// var cnv2=null;
	
	// if(document.getElementById('animation_auto_rotate')==null)
	// {
	
		// cnv2=document.createElement("canvas");
		// cnv2.id='animation_auto_rotate';
		// document.getElementById('canvas0').parentNode.appendChild(cnv2);
	
	// }
	
	// else 
	// {
		// cnv2=document.getElementById('animation_auto_rotate');
	// }
	
	// cnv2.width = w*3/2;   //Math.sqrt(w*w+h*h)|0+1;
	// cnv2.height = h*3/2;   //Math.sqrt(w*w+h*h)|0+1;
	
	global_clip_data = createClipData(context.getImageData(0,0,canvas.width,canvas.height));
	
	clip_prepare();
	
	
	//nova_clip_prepare(cnv2.width,cnv2.height);								
}

function cmpIndexes( imgDt, imgDt_ind,  imgDt0, imgDt0_ind )
{
	
	var ind = imgDt_ind;
	
				// var rgba = context.getImageData(n,m,1,1);
				var arr_rgb = [];
				arr_rgb[0] = imgDt.data[ind];
				arr_rgb[1] = imgDt.data[ind+1];
				arr_rgb[2] = imgDt.data[ind+2];
				arr_rgb[3] = imgDt.data[ind+3];
				
				
				var ind2 = imgDt0_ind;
				// var rgba = context.getImageData(n,m,1,1);
				var arr_rgb2 = [];
				arr_rgb2[0] = imgDt0.data[ind];
				arr_rgb2[1] = imgDt0.data[ind+1];
				arr_rgb2[2] = imgDt0.data[ind+2];
				arr_rgb2[3] = imgDt0.data[ind+3];
	
	for(var j=0;j<4;j++)
	{
		if(arr_rgb2[j] != arr_rgb[j]) return false; 
	}
	
	
	return true;
	
}

function arr_equals(data1, data2)
{
	if(data1.length != data2.length) return false;
			
	for(var j=0;j<data1.length;j++)
	{
		if(data1[j] != data2[j]) return false; 
	}
	
	return true;
}

/*******
function cmp(im1, im2)
{
	return arr_equals(im1.data, im2.data);
}
********/


function whenUserClickOnCanvas(e)
{
	return; 
	
	e = (e) ? e : event;   
	if(e.button == 0 || e.button==2) 
	{
		
		var x = e.offsetX==undefined?e.layerX:e.offsetX;
		var y = e.offsetY==undefined?e.layerY:e.offsetY;
		
		
		// var n = (x/global_seed_size|0);//-tw;
		// var m = (y/global_seed_size|0);//-th;
		
		//console.log("x="+x+" y="+y);
		//console.log("n="+n+" m="+m);
		
		//return [x,y,n,m];
		
		var canvas = document.getElementById("canvas0");
		var context = canvas.getContext("2d");
		
		//vlevo idem poka cvet  inche propusk poka ne cvet ili ne konec
		var n = x;
		var m = y;
		
		
		var tcnv = document.createElement("canvas");
		tcnv.width=4;
		tcnv.height=4;
		var tctx = tcnv.getContext("2d");
		tctx.fillStyle = document.getElementById("color").value.trim();
		tctx.fillRect(0,0,tcnv.width,tcnv.height);
		
		
		var tcnv2 = document.createElement("canvas");
		tcnv2.width=canvas.width;
		tcnv2.height=canvas.height;
		var tctx2 = tcnv2.getContext("2d");
		tctx2.fillStyle = "black";
		tctx2.fillRect(0,0,tcnv2.width,tcnv2.height);
		
		var tctx2ImageData = tctx2.getImageData(0,0,tcnv2.width,tcnv2.height);
		
		var for_change_rgba = tctx.getImageData(1,1,1,1);
		var current_rgba = context.getImageData(n,m,1,1);
		
		var rgba = context.getImageData(0,0,canvas.width,canvas.height);
		
		var switcher=false;
		
		n=0;
		m=0;
		
		while(true)
		{
			while(true)
			{
				
				var ind = canvas.width * m + n  << 2;
				// var rgba = context.getImageData(n,m,1,1);
				var arr_rgb = [];
				arr_rgb[0] = rgba.data[ind];
				arr_rgb[1] = rgba.data[ind+1];
				arr_rgb[2] = rgba.data[ind+2];
				arr_rgb[3] = 255;
				
				
				
				if(arr_equals(arr_rgb, current_rgba.data)) // || cmp(rgba, for_change_rgba))
				{
					//switcher=false;
					//tctx2.putImageData(rgba,n,m);
					
					tctx2ImageData.data[ind] = arr_rgb[0];
					tctx2ImageData.data[ind+1] = arr_rgb[1];
					tctx2ImageData.data[ind+2] = arr_rgb[2];
					tctx2ImageData.data[ind+3] = arr_rgb[3];
					
					
				}
				else
				{
					//if(switcher==false)
				//	{
				//	context.putImageData(for_change_rgba,n-1,m);
				//	break;
					//switcher=true;
				//	}
				}
				
				arr_rgb = null;
				
				n++;
				if(n==canvas.width) break;
			}
			n=0;
			m++;
			if(m==canvas.height) break;
		}
		
		//potom vniz na odnu 
		
		/*******************
		n=0;
		m=0;
			
		while(true)
		{
			while(true)
			{
				
				
				//var rgba = context.getImageData(n,m,1,1);
				if(cmp(rgba, current_rgba))// || cmp(rgba, for_change_rgba))
				{
					//switcher=false;
					tctx2.putImageData(rgba,n,m);
				}
				else
				{
					//if(switcher==false)
					{
					//context.putImageData(for_change_rgba,n,m-1);
					//switcher=true;
					//break;
					}
				}
				m++;
				if(m==canvas.height) break;
			}
			m=0;
			n++;
			if(n==canvas.width) break;
		}
		
		**********/
		
		
		
		document.body.appendChild(tcnv2);
		
		
	}

}

function whenUserClickOnAnalyze0()
{
	/*******
	var tcnv = document.createElement("canvas");
		tcnv.width=4;
		tcnv.height=4;
		
		var tctx = tcnv.getContext("2d");
		tctx.fillStyle = document.getElementById("color").value.trim();
		tctx.fillRect(0,0,tcnv.width,tcnv.height);
		var for_change_rgba = tctx.getImageData(1,1,1,1);
	********/	
	
	var canvas = document.getElementById("canvas0");
	var context = canvas.getContext("2d");
	
	
	var w = canvas.width;
	var h = canvas.height;
	
	var all_rgba = context.getImageData(0,0,w,h);
	
	for(var j=0;j<h;j++)
	{
		for(var i=0;i<w;i++)
		{
			
			var ind = w*j+i  << 2;
			var current_rgba = [];
			
			current_rgba[0] = all_rgba.data[ind];
			current_rgba[1] = all_rgba.data[ind+1];
			current_rgba[2] = all_rgba.data[ind+2];
			current_rgba[3] = 255;		
			
			var canvas_id =  "acanvas_"+current_rgba[0]+"_"+current_rgba[1]+"_"+current_rgba[2]+"_255";
						
			var tcnv2 = document.getElementById(canvas_id);
			var tctx2 = null;
			var tctx2ImageData = null;
			if(tcnv2==null)
			{
				tcnv2 = document.createElement("canvas");
				tcnv2.width=canvas.width;
				tcnv2.height=canvas.height;
				tctx2 = tcnv2.getContext("2d");
				
				tctx2.fillStyle = "white";
				tctx2.fillRect(0,0,tcnv2.width,tcnv2.height);
				tctx2ImageData = tctx2.getImageData(0,0,tcnv2.width,tcnv2.height);
				tcnv2.id = canvas_id;
				tcnv2.onclick = function()
				{
					if(this.classList.contains("selected")==false) this.classList.toggle("selected");
					else this.classList.remove("selected");
				}
				
				document.getElementById("analyze_results").appendChild(tcnv2);
				
			}
			else
			{
				tctx2 = tcnv2.getContext("2d");
				tctx2ImageData = tctx2.getImageData(0,0,tcnv2.width,tcnv2.height);
				
			}
			
			tctx2ImageData.data[ind] = current_rgba[0];
			tctx2ImageData.data[ind+1] = current_rgba[1];
			tctx2ImageData.data[ind+2] = current_rgba[2];
			tctx2ImageData.data[ind+3] = 255;
			// tctx2.putImageData(current_rgba, i,j);
			
		}
	
    }
}
/*****
function div(imageData1, imageData2)
{
	var red = (imageData1.data[0]+imageData2.data[0])/2|0 ;
	var green = (imageData1.data[1]+imageData2.data[1])/2|0 ;
	var blue = (imageData1.data[2]+imageData2.data[2])/2|0 ;
	var alpha = (imageData1.data[3]+imageData2.data[3])/2|0 ;
	
	return "rgba("+red+","+green+","+blue+","+(alpha/255|0)+")";
}
******/
function div(a, b)
{
	return (a+b)/2|0;
	
	
}

function whenUserClickOnCombine() //combine can be in a few modes, few variants of crossing
{
	var list = document.getElementById("analyze_results").childNodes;
	var arr = [];
	for(var i=0;i<list.length;i++)
	{	
		if(list[i].classList.contains("selected")==true)
		{
			arr.push(list[i].id);
		}
	}
	
	
	
	var canvas = document.getElementById("canvas0");
	//var context = canvas.getContext("2d");
	
	var w = canvas.width;
	var h = canvas.height;
	
	var counter=0;
	
	
	
	var tcnv2 = document.createElement("canvas");
	tcnv2.width=canvas.width;
	tcnv2.height=canvas.height;
	var tctx2 = tcnv2.getContext("2d");
	
	if(arr.length>0)
	{
	
	//var cnv = document.getElementById(arr[0]);
	//var ctx = cnv.getContext("2d");
	
	tctx2.fillStyle = "white";
	tctx2.fillRect(0,0,tcnv2.width,tcnv2.height);
	
	//tctx2.putImageData( ctx.getImageData(0,0,cnv.width,cnv.height),0,0);
	
	var imgDt0 = tctx2.getImageData(0,0,tcnv2.width,tcnv2.height);
	
	for(var i=0;i<arr.length;i++)
	{
		cnv = document.getElementById(arr[i]);
		ctx = cnv.getContext("2d");
		var imgDt = ctx.getImageData(0,0,cnv.width,cnv.height);
		
		for(var y=0;y<h;y++)
		{
			for(var x=0;x<w;x++)
			{
				
				//var imgDt = ctx.getImageData(x,y,1,1);
				var imgDt_ind = cnv.width*y+x<<2;
				
				//var imgDt0 = tctx2.getImageData(x,y,1,1);
				var imgDt0_ind = tcnv2.width*y+x<<2;
				
				var colorDt = getStrColorFromRGBAArray_PRO(imgDt, imgDt_ind);
				var colorDt0 = getStrColorFromRGBAArray_PRO(imgDt0, imgDt0_ind);
				
				//console.log("colorDt:" + getStrColorFromRGBAArray(imgDt.data));
				//console.log("colorDt0:" + getStrColorFromRGBAArray(imgDt0.data));
				if (( colorDt == "rgba(255,255,255,255)" ) && ( colorDt0 == "rgba(255,255,255,255)" ))  //&& (imgDt.data)(imgDt.data) 
				{
					//setPoint( imgDt, imgDt_ind, imgDt0, imgDt0_ind );
					//tctx2.fillStyle = getStrColorFromRGBAArray(imgDt0.data);
					//tctx2.fillRect(x,y,1,1);
					
					imgDt0.data[imgDt0_ind] = imgDt0.data[imgDt0_ind];
					imgDt0.data[imgDt0_ind+1] = imgDt0.data[imgDt0_ind+1];
					imgDt0.data[imgDt0_ind+2] = imgDt0.data[imgDt0_ind+2];
					imgDt0.data[imgDt0_ind+3] = imgDt0.data[imgDt0_ind+3];
					
				}
				else if ( colorDt == "rgba(255,255,255,255)" )
				{
					imgDt0.data[imgDt0_ind] = imgDt0.data[imgDt0_ind];
					imgDt0.data[imgDt0_ind+1] = imgDt0.data[imgDt0_ind+1];
					imgDt0.data[imgDt0_ind+2] = imgDt0.data[imgDt0_ind+2];
					imgDt0.data[imgDt0_ind+3] = imgDt0.data[imgDt0_ind+3];
				}
				else if (( colorDt0 == "rgba(255,255,255,255)" ))  //&& (imgDt.data)(imgDt.data) 
				{
					//tctx2.fillStyle = getStrColorFromRGBAArray(imgDt.data);
					//tctx2.fillRect(x,y,1,1);
					
					imgDt0.data[imgDt0_ind] = imgDt.data[imgDt_ind];
					imgDt0.data[imgDt0_ind+1] = imgDt.data[imgDt_ind+1];
					imgDt0.data[imgDt0_ind+2] = imgDt.data[imgDt_ind+2];
					imgDt0.data[imgDt0_ind+3] = imgDt.data[imgDt_ind+3];
					
				}
				else if( cmpIndexes( imgDt,  imgDt_ind,  imgDt0, imgDt0_ind ) ) 
				{
					/********
					//setPoint( imgDt, imgDt_ind, imgDt0, imgDt0_ind );
					//tctx2.fillStyle = getStrColorFromRGBAArray(imgDt.data);
					//tctx2.fillRect(x,y,1,1);
					
					imgDt0.data[imgDt0_ind] = imgDt.data[imgDt_ind];
					imgDt0.data[imgDt0_ind+1] = imgDt.data[imgDt_ind+1];
					imgDt0.data[imgDt0_ind+2] = imgDt.data[imgDt_ind+2];
					imgDt0.data[imgDt0_ind+3] = imgDt.data[imgDt_ind+3];
					
					
					
				}
				
				else
				{
					******/
					//tctx2.fillStyle = div( imgDt, imgDt0 );
					//tctx2.fillRect(x,y,1,1);
					
					imgDt0.data[imgDt0_ind] = div( imgDt.data[imgDt_ind],imgDt0.data[imgDt0_ind] );
					imgDt0.data[imgDt0_ind+1] = div( imgDt.data[imgDt_ind+1],imgDt0.data[imgDt0_ind+1] );
					imgDt0.data[imgDt0_ind+2] = div( imgDt.data[imgDt_ind+2],imgDt0.data[imgDt0_ind+2] );
					imgDt0.data[imgDt0_ind+3] = div(  imgDt.data[imgDt_ind+3],imgDt0.data[imgDt0_ind+3] );
					
					
				}
				
				// if( imgDt0.data[0]!=0 && imgDt0.data[1]!=0 && imgDt0.data[2]!=0 ) continue;
				
				
				//if( imgDt.data[0]==0 && imgDt.data[1]==0 && imgDt.data[2]==0 ) continue;
				//tctx2.putImageData(imgDt,x,y);
				
				
			}
		}
		
		tcnv2.getContext("2d").putImageData(imgDt0, 0,0);
	}
	
	

	tcnv2.id = "result_" + ( new Date() ).getTime();
				tcnv2.onclick = function()
				{
					if(this.classList.contains("selected")==false) this.classList.toggle("selected");
					else this.classList.remove("selected");
				}
				
				document.getElementById("analyze_results").appendChild(tcnv2);
				var canvas = document.getElementById("canvas0");
				canvas.width = tcnv2.width;
				canvas.height = tcnv2.height;
				var context = canvas.getContext("2d");
				context.drawImage(tcnv2,0,0);
				document.getElementById("analyze_results").removeChild(tcnv2);
	}
	 
	
}

function whenUserClickOnAnalyze()
{
		
	
	var canvas = document.getElementById("canvas0");
	var context = canvas.getContext("2d");
	
	var w = canvas.width;
	var h = canvas.height;
	
	var imgData = context.getImageData(0,0,w,h);
	
	
	
	
	var tcnv = document.createElement("canvas");
	tcnv.width=w;
	tcnv.height=h;
	var tctx = tcnv.getContext("2d");
	
	tctx.fillStyle = "black";
	tctx.fillRect(0,0,tcnv.width,tcnv.height);
	
	var tctxImageData = tctx.getImageData(0,0,tcnv.width,tcnv.height);
	
	var tcnv2 = document.createElement("canvas");
	tcnv2.width=w;
	tcnv2.height=h;
	var tctx2 = tcnv2.getContext("2d");
	tctx2.fillStyle = "black";
	tctx2.fillRect(0,0,tcnv2.width,tcnv2.height);
	var tctx2ImageData = tctx2.getImageData(0,0,tcnv2.width,tcnv2.height);
	
	var obj = {};
	
	for(var j=0;j<h;j++)
	{
		for(var i=0;i<w;i++)
		{
			
			var ind = w*j+i  << 2;
			
			var col_id =  "col_"+imgData.data[ind]+"_"+imgData.data[ind+1]+"_"+imgData.data[ind+2]+"_"+255;
			
			if(col_id == "col_255_255_255_255") continue;
			
			if(obj[col_id]==undefined) obj[col_id]=1;
			
			else obj[col_id]++;
			
			
			
		}
	
    }
	
	var arr = [];
	
	for (var key in obj) {
		
		// console.log(""+key+"="+obj[key]);
		arr.push(key);
	}
	
	
	
		
		
		var max = 0;
		var max_col_id=0;
		var max_ind= -1;
		
		for(var i=0;i<arr.length;i++)
		{
			var key = arr[i];
			if(key==null) continue;
			if(max < obj[key])
			{
				max=obj[key];
				max_col_id = key;
				max_ind=i;
				
			}
		}
		
	//	var imgData = context.getImageData(0,0,w,h);
		
	for(var j=0;j<h;j++)
	{
		for(var i=0;i<w;i++)
		{
			
			var ind = w*j+i  << 2;
			var current_rgba = [];
				
			current_rgba[0] = imgData.data[ind];
			current_rgba[1] = imgData.data[ind+1];
			current_rgba[2] = imgData.data[ind+2];
			current_rgba[3] = 255;		
				
				
			var col_id =  "col_"+current_rgba[0]+"_"+current_rgba[1]+"_"+current_rgba[2]+"_"+255;
			
			if ( max_col_id == col_id)
			{
				//tctx.fillStyle = getStrColorFromRGBAArray(imgData.data);
				//tctx.fillRect(i,j,1,1);
				
				tctxImageData.data[ind] = current_rgba[0];
				tctxImageData.data[ind+1] = current_rgba[1];
				tctxImageData.data[ind+2] = current_rgba[2];
				tctxImageData.data[ind+3] = 255;
				
				//tctx2.fillStyle = "rgba(255,255,255,1)";
				//tctx2.fillRect(i,j,1,1);
				
				tctx2ImageData.data[ind] = 255;
				tctx2ImageData.data[ind+1] = 255;
				tctx2ImageData.data[ind+2] = 255;
				tctx2ImageData.data[ind+3] = 255;
			}
			else
			{
				//tctx.fillStyle = "rgba(255,255,255,1)";//getStrColorFromRGBAArray(imgData.data);
				//tctx.fillRect(i,j,1,1);
				
				tctxImageData.data[ind] = 255;
				tctxImageData.data[ind+1] = 255;
				tctxImageData.data[ind+2] = 255;
				tctxImageData.data[ind+3] = 255;
				
				//tctx2.fillStyle =  getStrColorFromRGBAArray(imgData.data);
				//tctx2.fillRect(i,j,1,1);
				
				tctx2ImageData.data[ind] = current_rgba[0];
				tctx2ImageData.data[ind+1] = current_rgba[1];
				tctx2ImageData.data[ind+2] = current_rgba[2];
				tctx2ImageData.data[ind+3] = 255;
				
				
				//context.fillStyle = "black";
				//context.fillRect(0,0,tcnv.width,tcnv.height);
			}
			
		}
	}
	
	tcnv.getContext("2d").putImageData(tctxImageData,0,0);
	tcnv2.getContext("2d").putImageData(tctx2ImageData,0,0);
	
	setTimeout( function(){
		
		
		
		
			var canvas_id =  "acanvas_"+max_col_id;
			document.getElementById("analyze_results").appendChild(tcnv);
			tcnv.id = canvas_id;
			tcnv.onclick = function()
			{
				if(this.classList.contains("selected")==false) this.classList.toggle("selected");
				else this.classList.remove("selected");
				
				whenUserClickOnCombine();
			}
						
			document.getElementById("analyze_results").appendChild(tcnv2);
			
		//	if(arr.length==1)
				setGlobalState(0);
			
			//setTimeout( function () {
				
				var canvas = document.getElementById("canvas0");
				//canvas.width = tcnv2.width;
				//canvas.height = tcnv2.height;
				var context = canvas.getContext("2d");
				context.drawImage(tcnv2,0,0);	
				
				document.getElementById("analyze_results").removeChild(tcnv2);
				
				if(global_state==1)
				{
					setTimeout( whenUserClickOnAnalyze, 200 );
				}
		
		
		
		
		
		
		
		
		
	}, 100 );
	

		
	// } , 200 );
	
	
	
}

function whenUserClickOnAdd()
{
	var canvas = document.getElementById("canvas0");
	//canvas.width = tcnv2.width;
	//canvas.height = tcnv2.height;
	var context = canvas.getContext("2d");	
	
	var w = canvas.width;
	var h = canvas.height;
	
	var tcnv = document.createElement("canvas");
	tcnv.width=w;
	tcnv.height=h;
	var tctx = tcnv.getContext("2d");
	
	tctx.putImageData( context.getImageData(0,0,canvas.width,canvas.height),0,0);
	tcnv.id = "added_" + ( new Date() ).getTime();
	document.getElementById("analyze_results").appendChild(tcnv);
	
}


/////////////////////////////////////////////////////////////////
function increment_insane_delay(n)
{
	var t = Number(document.getElementById("insane_delay").value);
	t += n;
	if(t<n) t=1;
	if(t>10000) t=10000;
	document.getElementById("insane_delay").value=t;
}

function decrement_insane_delay(n)
{
	var t = Number(document.getElementById("insane_delay").value);
	t -= n;
	if(t<n) t=1;
	if(t>10000) t=10000;
	document.getElementById("insane_delay").value=t;
}

function increment_up_delay(n)
{
	var t = Number(document.getElementById("up_delay").value);
	t += n;
	if(t<n) t=1;
	if(t>10000) t=10000;
	document.getElementById("up_delay").value=t;
}

function decrement_up_delay(n)
{
	var t = Number(document.getElementById("up_delay").value);
	t -= n;
	if(t<n) t=1;
	if(t>10000) t=10000;
	document.getElementById("up_delay").value=t;
}