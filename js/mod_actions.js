

function whenSevenAchieved()
{
	if(document.getElementById('gipro_qwe')) document.getElementById(("gipro_cube"+(global_counter))).removeChild(document.getElementById('gipro_qwe'));
	
	var arr=[];
	var el = document.getElementById("gipro_cubes");
	for (var i = 0; i < el.childNodes.length; i++) 
	{
		var elem = el.childNodes[i];
		var el2 = document.getElementById(elem.id);
		if(el2.childNodes.length>0)
		arr.push(Number(el2.childNodes.length/4|0));
	}
	console.log(arr.join(" "));
	
	useKey(arr);
	
	
}

function double_control(el)
{
	return dubl_r(el.childNodes[0]);
		
}

function el2last(el)
{
	document.getElementById('controls').appendChild(el);
}

function switcher(el)
{
	var s = el.childNodes[0].getAttribute('type');
	if(s=='switcher') return true;
	return false;
}

function useKey(arr)
{
	arr.push(2);
	if(arr.length<2) return;
	//arr.splice(arr.length-1,1);
	var list = document.getElementById('controls').querySelectorAll('div');
	for(var i=0;i<list.length;i++)
	{
		var s = list[i].childNodes[0].getAttribute('key');
		if(s)
		{
			if(arr.join('')==(s+'2'))
			{
				if(switcher(list[i])==false)
				{
					el=double_control(list[i]);
					el2last(el);
					el.childNodes[0].click();
				}
				else list[i].childNodes[0].click();
				break;
			}
		}
		// var arr2 = s.split(",");
		// for(var i=0;i<list.length;i++)
		// {
			// arr2[j]=Number(arr2[j]);
		// }
	}
	
	
	// for (var i = 0; i < el.childNodes.length; i++) 
	// {
		// var elem = el.childNodes[i];
	// }
}