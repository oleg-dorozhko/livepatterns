       
               
              
                  
function initSoundsOfMM()
{
	var arr=[];
	for(var i=0;i<50;i++)
	{
		var bm=parseInt(i, 10).toString(2);
		console.log(bm);
		arr.push(bm);
	}
	
	var n=0;
	var list = document.getElementById('controls').querySelectorAll('img');
	for(var i=0;i<list.length;i++)
	{
		if(list[i].tagName=='IMG')
		{
			var s = list[i].getAttribute('key');
			if(s)
			{
				list[i].setAttribute('key',arr[n]);
			}
			else {
				
				var att = document.createAttribute("key");       // Create a "class" attribute
				att.value = arr[n];                           // Set the value of the class attribute
				list[i].setAttributeNode(att);   
			}
			
			list[i].title+=' '+arr[n];
			n++;
			
			
		}
	
	}
	
}


 function   initVoiceControl()
{
	var ngs = localStorage.getItem('json_obvod7_settings');
	if(ngs!=null)
	{
		var obj=JSON.parse(ngs);
		if(obj.voicecontrol=="on")
		{
						var settings = {
			
							'rec_width': '300',
							'rec_height': '200',
							'rec_top': '0px',
							'rec_left': '0px',
							'recorderlayout_id' : 'flashrecarea',
							'recorder_id' : 'audiorecorder',
							'recorder_name': 'audiorecorder',
							'wmode' : 'transparent',
							'bgcolor': '#ff0000',
							'swf_path': 'swf/sound_test.swf',
							// 'host': 'acceptfile.php?filename=hello.wav',
							
							'callback_activityLevel' : function(level){}
							
							
		
		
						};
	
	
						
							
							var createParam = function(el, n, v) {
								var p = document.createElement("param");
								p.setAttribute("name", n);	
								p.setAttribute("value", v);
								el.appendChild(p);
							};

							htmlObj = document.createElement("object");
							htmlObj.setAttribute("id", settings['recorder_id'] );
							htmlObj.setAttribute("name", settings['recorder_name'] );
							htmlObj.setAttribute("data",  settings['swf_path'] + '?host=' + settings['host'] );
							htmlObj.setAttribute("type", "application/x-shockwave-flash");
							htmlObj.setAttribute("width", settings['rec_width']); // Non-zero
							htmlObj.setAttribute("height", settings['rec_height']); // Non-zero
							
							createParam(htmlObj, "allowscriptaccess", "always");
							createParam(htmlObj, "bgcolor", settings['bgcolor']);
							createParam(htmlObj, "wmode", settings['wmode'] );
							
							
							
							
						


						var divObj = document.createElement("div");
						
						divObj.setAttribute("id", settings['recorderlayout_id']);
						divObj.setAttribute("style", "position:absolute;top:"+ settings['rec_top'] +";left:"+ settings['rec_left'] +";z-index:-1");
						
						divObj.appendChild(htmlObj);
						
						
						document.body.append(divObj);
						
						initGiproCubes();
						
						initSoundsOfMM();
		}
		
	}
		
	}
	

	
					
	
	//function to return flash object from name
	function getFlashMovie(movieName) {
       var isIE = navigator.appName.indexOf("Microsoft") != -1;
       return (isIE) ? window[movieName] : document[movieName];
     }


	


  function callback_activityLevel(level)
		  {
			
				document.getElementById('levelValue').innerHTML=(level);
				
				if(level == -1)
				{
				  document.getElementById('levelbar').style.width="2px";
				}
				else
				{
				  document.getElementById('levelbar').style.width=""+ (level * 2)+ "px";
				}
				
				controllerOflevel(level);
			
		  }
	   























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


function mod(arr)
{
	arr[0]=(arr[0]/global_tiks|0)*global_tiks;
	arr[1]=global_tiks;
	arr[2]=0;
	//arr[1]=(arr[1]/global_tiks|0)*global_tiks;
	//arr[2]=(arr[2]/global_tiks|0)*global_tiks;
	return arr;
}

function initGiproCubes()
{
	var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");
			canvas.id='gipro_qwe';
			canvas.width = 20;
			canvas.height = 20;
			canvas.style.margin="5px";
			ctx.fillStyle='rgba(0,0,255,255)';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle='rgba('+(255-0)+','+(255-0)+','+(255-255)+',1.0)';
			ctx.font = "12px serif";
			ctx.fillText("?", 9, 14);
			
			
			if(document.getElementById(("gipro_cube"+(global_counter))))
						document.getElementById(("gipro_cube"+(global_counter))).appendChild(canvas);
			else {
				
				var div = document.createElement("div");
				div.id=("gipro_cube"+(global_counter));
				document.getElementById("gipro_cubes").appendChild(div);
				document.getElementById(("gipro_cube"+(global_counter))).appendChild(canvas);
				
			}			
}


var global_counter=0;
var global_tiks=0;
var global_kiks=0;
function controllerOflevel(level)
{
	
	document.getElementById('levelValue').innerHTML=level;
	
	//m7();
	m5();
	m3();
	
	
	//if(global_tiks%2==1){ global_tiks+=.5;return;}
	if(level>35)
	{
		//console.log(global_kiks);
		
		if(global_kiks>=4)
		{
			global_kiks=0;
			
			if(global_tid1)	{clearTimeout(global_tid1);global_tid1=null;}	
			if(global_tid2)	{clearTimeout(global_tid2);global_tid2=null;}	
			
			document.getElementById(("gipro_cube"+(global_counter))).removeChild(document.getElementById('gipro_qwe'));
			
						
			
			var arr = getRndColor();
			//arr= mod(arr);
			var canvas = document.createElement("canvas");
			var ctx = canvas.getContext("2d");
			canvas.id='pcolor';
			canvas.width = 20;
			canvas.height = 20;
			canvas.style.margin="5px";
			ctx.fillStyle='rgba('+arr[0]+','+arr[1]+','+arr[2]+','+arr[3]/255+')';
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle='rgba('+(255-arr[0])+','+(255-arr[1])+','+(255-arr[2])+','+arr[3]/255+')';
			ctx.font = "12px serif";
			ctx.fillText(""+level, 2, 14);
			
			document.getElementById(("gipro_cube"+(global_counter))).appendChild(canvas);
			
			
			initGiproCubes();
					
			
			get_last_combination();
			
			
			global_tid2 = setTimeout(check_need_new_cube_add,3000);
			
		}
		global_kiks++;
	}
	else
	{	
		
		
		global_kiks=0;
		

	}
	global_tiks+=.5;
	if(global_tiks>600) global_tiks=0;
	
}




var global_last_combination='';
function get_last_combination()
{
	global_last_combination=getCurrentCombination();
}

function check_need_action_call()
{
		
	if(global_last_combination==getCurrentCombination()) 
	{
		window['whenSevenAchieved']();
		clear_gipro_cubes();
	}
	
}

function getCurrentCombination()
{
	if(document.getElementById('gipro_qwe')) document.getElementById(("gipro_cube"+(global_counter))).removeChild(document.getElementById('gipro_qwe'));
	var arr=[];
	var el = document.getElementById("gipro_cubes");
	for (var i = 0; i < el.childNodes.length; i++) 
	{
		var elem = el.childNodes[i];
		var el2 = document.getElementById(elem.id);
		if((el2.childNodes.length>0))
		arr.push(Number((el2.childNodes.length)/4|0));
	}
	initGiproCubes();
	return arr.join(',');
}


function check_need_new_cube_add()
{

	if(global_last_combination==getCurrentCombination()) 
	{
		if(document.getElementById('gipro_qwe'))document.getElementById(("gipro_cube"+(global_counter))).removeChild(document.getElementById('gipro_qwe'));
		global_counter++;
		initGiproCubes();
		 if(global_tid1)	{clearTimeout(global_tid1);global_tid1=null;}
		global_tid1 = setTimeout(check_need_action_call,3000);
	}
	else  if(global_tid1)	{clearTimeout(global_tid1);global_tid1=null;}
}

var global_tid2 = null;
var global_tid1 = null;





function m5()
{
}

function m3()
{
}

function m7()
{
	if((document.getElementById("gipro_cube"+global_counter)==null)&&(document.getElementById("gipro_cube"+(global_counter-1))!=null))
	{
		if(document.getElementById("gipro_cube"+(global_counter-1)).childNodes.length>8)
		{
			if(window['whenSevenAchieved']) window['whenSevenAchieved']();
			//else 
			{
				clear_gipro_cubes();
			}
		}
	}
}

function clear_gipro_cubes()
{
	global_last_combination='';
			global_counter=0;
			global_tiks=0;
			global_kiks=0;
			 if(global_tid1) {clearTimeout(global_tid1);global_tid1=null;}
			  if(global_tid2)	{clearTimeout(global_tid2);global_tid2=null;}
			global_tid1 = null;
			var myNode = document.getElementById("gipro_cubes");
			while (myNode.firstChild) {
				
						var myNode2 = document.getElementById(myNode.firstChild.id);
					while (myNode2.firstChild) {
						myNode2.removeChild(myNode2.firstChild);
					}	
				
				
				
				myNode.removeChild(myNode.firstChild);
			}	
			initGiproCubes();
}