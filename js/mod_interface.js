document.oncontextmenu=function(e)
{
	
	if(e.target.parentNode.classList.contains('draggable'))	
	{	
		e.preventDefault();
		if(e.target.classList.contains('image_button_unselected')) {
			
			if(e.target.id=='image_button777')
			{
				var n=Number(prompt('Enter delay value',document.getElementById('main_thread_delay').value));
				document.getElementById('main_thread_delay').value=1;
				if((n>=1)&&(n<=10000))document.getElementById('main_thread_delay').value=n;
			}
			
			
		}
		
		
		var el=dubl_r(e.target);
		document.getElementById('controls').insertBefore(el,e.target.parentNode.nextSibling);
		
	}
}

function countFnFn(fn)
	{
	var counter=0;
	 var list = document.getElementById('controls').querySelectorAll('div.draggable');
		for(var i=0;i<list.length;i++)
		 {
	if(list[i].childNodes[0].getAttribute('fn') == fn)  {counter++;}
		
		 }
		 return counter;
	}
  
var global_dubl_r_working=false;
function dubl_r(el)
{
	
	if(global_dubl_r_working==true) return;
	
	//if(el.parentNode.classList.contains('draggable'))
	{
		
	
		
		//alert('rc');
		
		//e.preventDefault();
		
		//if(e.target.classList.contains('image_button_selected')) return;
		if(el.classList.contains('image_button_mode0')) return;
		if(el.classList.contains('image_button_mode1')) return;
		if(el.classList.contains('image_button_mode2')) return;
		
		global_dubl_r_working=true;
		
		var div=document.createElement('div');
		div.innerHTML=el.parentNode.innerHTML;
		
		//document.getElementById('controls').insertBefore(div,el.parentNode);
		div.childNodes[0].id=div.childNodes[0].id+'_copy_'+countFnFn(div.childNodes[0].getAttribute('fn'));
		div.childNodes[0].setAttribute('key',el.getAttribute('key'));
		div.childNodes[0].onclick=el.onclick;
		div.childNodes[0].oncontextmenu=el.oncontextmenu;
		div.childNodes[0].classList=el.classList;
		div.classList=el.parentNode.classList;
		
		// div.childNodes[0].classList.remove('image_button_mode0');
		// div.childNodes[0].classList.remove('image_button_mode1');
		// div.childNodes[0].classList.remove('image_button_mode2');
		div.childNodes[0].classList.remove('image_button_selected');
		div.childNodes[0].classList.add('image_button_unselected');
		setTimeout(function(){global_dubl_r_working=false;},200);
		return div;
		
		
	}
}



function whenRightClickThisElement(e)
{
	
	e.preventDefault();
	if(e.target.classList.contains('image_button_unselected')) {
			
			if(e.target.id=='image_button777')
			{document.getElementById('main_thread_delay').value=1;
				var n=Number(prompt('Enter delay value',document.getElementById('main_thread_delay').value));
				if((n>=1)&&(n<=10000))document.getElementById('main_thread_delay').value=n;
			}
			
			
		}
		else{
		}
	
	
	// if(e.target.classList.contains('image_button_unselected')) return; 
	
	// if(e.target.classList.contains('image_button_selected')) 
	// {
		// e.target.classList.toggle('image_button_selected');
		// e.target.classList.toggle('image_button_mode0');
	// }
	// else if(e.target.classList.contains('image_button_mode0')) 
	// {
		// e.target.classList.toggle('image_button_mode0');
		// e.target.classList.toggle('image_button_mode1');
	// }
	// else if(e.target.classList.contains('image_button_mode1')) 
	// {
		// e.target.classList.toggle('image_button_mode1');
		// e.target.classList.toggle('image_button_mode2');
	// }
	// else if(e.target.classList.contains('image_button_mode2')) 
	// {
		// e.target.classList.toggle('image_button_mode2');
		// e.target.classList.toggle('image_button_selected');
	// }
}

function whenClickThisElement(e)
{
	if(e.target.id == 'image_button3') return image_button3_click(e.target);
	if(e.target.id == 'image_button8') return image_button8_click(e.target);
	if(e.target.id == 'image_button18') return image_button18_click(e.target);
	if(e.target.id == 'image_button19') return image_button19_click(e.target);
	if(e.target.id == 'image_button28') return image_button28_click(e.target);
	if(e.target.id == 'image_button22')return image_button22_click(e.target);
	if(e.target.id == 'image_button44')return image_button44_click(e.target);
	e.target.classList.toggle('image_button_unselected');
	e.target.classList.toggle('image_button_selected');
	
	if(e.target.id == 'image_button1') return image_button1_click(e.target);
	if(e.target.id == 'image_button777') return image_button777_click(e.target);
	if(e.target.id == 'image_button2') return image_button2_click(e.target);
	
	if(e.target.id == 'image_button4') return image_button4_click(e.target);
	if(e.target.id == 'image_button5') return image_button5_click(e.target);
	if(e.target.id == 'image_button6') return image_button6_click(e.target);
	if(e.target.id == 'image_button7') return image_button7_click(e.target);
	//if(e.target.id == 'image_button8') return image_button8_click(e.target);
	if(e.target.id == 'image_button9') return image_button9_click(e.target);
	if(e.target.id == 'image_button10') return image_button10_click(e.target);
	if(e.target.id == 'image_button11') return image_button11_click(e.target);
	if(e.target.id == 'image_button12') return image_button12_click(e.target);
	if(e.target.id == 'image_button13') return image_button13_click(e.target);
	if(e.target.id == 'image_button14') return image_button14_click(e.target);
	if(e.target.id == 'image_button15') return image_button15_click(e.target);
	if(e.target.id == 'image_button16') return image_button16_click(e.target);
	if(e.target.id == 'image_button17') return image_button17_click(e.target);
	if(e.target.id == 'image_button20') return image_button20_click(e.target);
	if(e.target.id == 'image_button21') return image_button21_click(e.target);
	if(e.target.id == 'image_button25') return image_button25_click(e.target);
	if(e.target.id == 'image_button29') return image_button29_click(e.target);
	if(e.target.id == 'image_button31') return image_button31_click(e.target);
	if(e.target.id == 'image_button32') return image_button32_click(e.target);
	if(e.target.id == 'image_button33') return image_button33_click(e.target);
	if(e.target.id == 'image_button34') return image_button34_click(e.target);
	if(e.target.id == 'image_button43') return image_button43_click(e.target);
	//console.log(e);
	
	
	
	
	
	
}

function image_button1_click(el)
{
	//insane_rotate();
}

function image_button2_click(el)
{
	//if(el.classList.contains('image_button_selected')) {whenUserClickShiftAutoStartButton();}
	//else {whenUserClickShiftAutoStopButton();}
	
}

function image_button777_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	
	//var n=Number(prompt('Enter delay value',document.getElementById('main_thread_delay').value));
	//if((n>=1)&&(n<=10000))document.getElementById('main_thread_delay').value=n;
	
	whenUserClickMainThreadAutoStartButton();}
	//else if(el.classList.contains('image_button_mode0')) { 
	
	
	
	else {whenUserClickMainThreadAutoStopButton();}
	
}

function image_button4_click(el)
{
	//if(el.classList.contains('image_button_selected')) { whenUserClickRandomColorsAutoStartButton();}
	//else {whenUserClickRandomColorsAutoStopButton();}
	
}

function image_button5_click(el)
{
	//if(el.classList.contains('image_button_selected')) { whenUserClickSwapColorsAutoStartButton();}
	//else {whenUserClickSwapColorsAutoStopButton();}
	
}

function image_button6_click(el)
 {
//	// if(el.classList.contains('image_button_selected')) { 
	// document.getElementById("up_nova_f").checked=false;
	// whenUserClickUpAutoStartButton();
	
	// }
	// else {
		
		
		// whenUserClickUpAutoStopButton();
	// }
	
}
function image_button7_click(el)
{
	// if(el.classList.contains('image_button_selected')) { 
	// document.getElementById("up_nova_f").checked=true;
	// whenUserClickUpAutoStartButton();
	
	// }
	// else {
		
		
		// whenUserClickUpAutoStopButton();
	// }
	
}

function image_button31_click(el)
{
		if(el.classList.contains('image_button_selected')) { 
	//document.getElementById("nonitos_when_ir").checked=true;
	el.setAttribute('angle',120);
	var ang= Number(prompt('Enter angle',120));
	if(ang==null)return;
	if(ang<-180)return;
	if(ang>180)return;
	el.setAttribute('angle',ang);
	
	}
	
}

function image_button32_click(el)
{
		// if(el.classList.contains('image_button_selected')) { 
	// //document.getElementById("nonitos_when_ir").checked=true;
	
	// var ang= Number(prompt('Enter angle',120));
	// if(ang==null)return;
	// if(ang<-180)return;
	// if(ang>180)return;
	// el.setAttribute('angle',ang);
	
	// }
	
}




function image_button33_click(el)
{
		if(el.classList.contains('image_button_selected')) { 
	
	el.setAttribute('angle',60);
	var ang= Number(prompt('Enter angle',Number(el.getAttribute('angle'))));
	if(ang==null)return;
	if(ang<-360)return;
	if(ang>360)return;
	el.setAttribute('angle',ang);
	
	}
	
}



function image_button34_click(el)
{
		// if(el.classList.contains('image_button_selected')) { 
	
	
	// var ang= Number(prompt('Enter angle',Number(el.getAttribute('angle'))));
	// if(ang==null)return;
	// if(ang<-360)return;
	// if(ang>360)return;
	// el.setAttribute('angle',ang);
	
	// }
	
}






function image_button8_click(el)
{
	// if(el.classList.contains('image_button_selected')) { 
	
	// whenUserClickDestroyerAutoStartButton();
	
	// }
	// else {
		
		
		// whenUserClickDestroyerAutoStopButton();
	// }
	
}
function image_button9_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	
	whenUserClickUnDestroyerAutoStartButton();
	
	}
	else {
		
		
		whenUserClickUnDestroyerAutoStopButton();
	}
	
}



function image_button10_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("filter7").checked=true;
	
	}
	else {
		
		document.getElementById("filter7").checked=false;
		
	}
	
}

function image_button11_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("filter0").checked=true;
	
	}
	else {
		
		document.getElementById("filter0").checked=false;
		
	}
	
}


function image_button12_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("nanitos_when_ir").checked=true;
	
	}
	else {
		
		document.getElementById("nanitos_when_ir").checked=false;
		
	}
	
}

function image_button13_click(el)
{
	// if(el.classList.contains('image_button_selected')) { 
	// document.getElementById("_vortex").checked=true;
	
	// }
	// else {
		
		// document.getElementById("_vortex").checked=false;
		
	// }
	
}


function image_button14_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("show_kat").checked=true;
	
	}
	else {
		
		document.getElementById("show_kat").checked=false;
		
	}
	
}

function image_button15_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("magik_rotate_on").checked=true;
	
	}
	else {
		
		document.getElementById("magik_rotate_on").checked=false;
		
	}
	
}

function image_button21_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("nonitos_when_ir").checked=true;
	
	}
	else {
		
		document.getElementById("nonitos_when_ir").checked=false;
		
	}
	
}

function image_button25_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	//document.getElementById("nonitos_when_ir").checked=true;
	el.setAttribute('angle',45);
	var ang= Number(prompt('Enter angle',45));
	if(ang==null)return;
	if(ang<-90)return;
	if(ang>90)return;
	el.setAttribute('angle',ang);
	
	}
	// else {
		
		// document.getElementById("nonitos_when_ir").checked=false;
		
	// }
	
}


function image_button43_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
		//document.getElementById("nonitos_when_ir").checked=true;
		var nnnnn=Number(el.getAttribute('nnnnn'));
		if(nnnnn<2)return;
		if(nnnnn>120)return;
		if((nnnnn>=2)&&(nnnnn<=120))
		{
			el.setAttribute('nnnnn',nnnnn);
			var ang= Number(prompt('Enter q-ty sectors',nnnnn));
			if(ang==null)return;
			if(ang<2)return;
			if(ang>120)return;
			if((ang>=2)&&(ang<=120))
			{
			el.setAttribute('nnnnn',ang);
			
			}
		
		}
	}
}



function image_button29_click(el)
{
	
	
}








function image_button16_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	whenUserClickRotateResultAutoStartButton();
	}
	else {
		
	whenUserClickRotateResultAutoStopButton();
		
	}
	
}



function image_button17_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("minusos_when_ir").checked=true;
	
	}
	else {
		
		document.getElementById("minusos_when_ir").checked=false;
		
	}
	
}
function image_button18_click(el)
{
	if(el.classList.contains('image_button_selected')) return;
	
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	
	pereplet2();
	
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
}

function image_button44_click(el)
{
	//return 
	
	//if(el.classList.contains('image_button_mode_gif')) return;
	
	
	
	
	show_fast_video_from_memory( function () {
		el.classList.remove('image_button_unselected');
		el.classList.add('image_button_mode0');
	}, function () {
		el.classList.remove('image_button_selected');
		el.classList.remove('image_button_mode0');
		el.classList.add('image_button_unselected');
		
	});
}

function image_button22_click(el)
{
	return setCredentialsForMakingGIF();
	
	if(el.classList.contains('image_button_mode_gif')) return;
	
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	
}

function image_button28_click(el)
{
	if(el.classList.contains('image_button_selected')) return;
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	
	round_random_colors('canvas0');

		el.classList.toggle('image_button_unselected');
		el.classList.toggle('image_button_selected');
	
	
}

function image_button19_click(el)
{
	if(el.classList.contains('image_button_selected')) return;
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	paint_over(function(el7){ return function(){
		el7.classList.toggle('image_button_unselected');
		el7.classList.toggle('image_button_selected');
	}}(el));
	
}

function image_button20_click(el)
{
	if(el.classList.contains('image_button_selected')) { 
	document.getElementById("plusos_when_ir").checked=true;
	
	}
	else {
		
		document.getElementById("plusos_when_ir").checked=false;
		
	}
	
}

function image_button8_click(el)
{
	if(el.classList.contains('image_button_selected')) return;
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	
		
	
	var r2canvas = document.getElementById("canvas0");
	var r2ctx = r2canvas.getContext("2d");
	im=r2ctx.getImageData(0,0,r2canvas.width,r2canvas.height);
	
	// var dcanvas = document.getElementById("myCanvas79");
	// var dctx = dcanvas.getContext("2d");
	// var dmgData=dctx.getImageData(0,0,dcanvas.width,dcanvas.height);
	
	var imgData = destroy_colors_imgData(im,im, function(im)
	{
		
		
		do_server_query(0,function(){ 	});
		
	});
	
	if(imgData!=null)
	{
		
	var r2canvas = document.getElementById("canvas0");
	r2canvas.width = imgData.width;
	r2canvas.height = imgData.height;
	var r2ctx = r2canvas.getContext("2d");
	r2ctx.putImageData(imgData,0,0);
	
	}
	
	
	
	
	
		el.classList.toggle('image_button_unselected');
		el.classList.toggle('image_button_selected');
	
	
}

function image_button3_click(el)
{
	if(el.classList.contains('image_button_selected')) return;
	el.classList.toggle('image_button_unselected');
	el.classList.toggle('image_button_selected');
	do_server_query(0,function(el7){ return function(){
		el7.classList.toggle('image_button_unselected');
		el7.classList.toggle('image_button_selected');
	}}(el));
	
}



function runMyScript() {
    var el = document.getElementById('cnsl');
    var scriptText = el.value;
    var oldScript = document.getElementById('scriptContainer');
    var newScript;

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }

    newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = el.value;
    document.body.appendChild(newScript);
} 	