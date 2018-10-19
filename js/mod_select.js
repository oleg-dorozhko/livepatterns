function getBorderedCanvas()
{
	var ind = null;
	var list = document.getElementsByTagName('canvas');
	for(var i=0;i<list.length;i++)
	{
		
		//if(list[i].id=="canvas0") continue;
		if(!list[i].style.border == '') {ind= i; break;}
	}
	if(ind==null) return null;
	return list[ind];

}

function addEventListenerWhenClick(cnv_id)
{
	var el = document.getElementById(cnv_id);
	if(el==null)
	{
		alert('Not found '+cnv_id);
		return;
	}
	
	el.addEventListener('click', function() { 
	
			if(getBorderedCanvas()==this)
			{
				
				var list = document.getElementsByTagName('canvas');
				for(var i=0;i<list.length;i++)
				{
					 //if(list[i].id=="canvas0") continue;
					
						list[i].style.border = '';
						
				}
				
				
			}
			else{
				
					var list = document.getElementsByTagName('canvas');
					for(var i=0;i<list.length;i++)
					{
						// if(list[i].id=="canvas0") continue;
						
							list[i].style.border = '';
							
					}
					this.style='border:solid blue 2px'; 
			}
	
   
	
	});
}
	
