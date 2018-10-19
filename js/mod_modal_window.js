function modal_window( wnd_id, on_open, actions, on_close, on_error )
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'app/windows/modal_window_'+wnd_id+'.html');
	xhr.onload = function ()
	{
		if (xhr.status != 200) 
		{
			alert('modal_window(): unknown error ' + xhr.status + ': ' + xhr.statusText);
			if(on_error) on_error();
		}
		else
		{
			var div = document.createElement("div");
			div.id="modal_window_"+wnd_id;
			div.innerHTML = xhr.responseText;
			
			document.body.appendChild(div);
			
			document.getElementById("close_modal_window_"+wnd_id).onclick = function() 	{
				document.body.removeChild(document.getElementById("modal_window_"+wnd_id));
				if(on_close) on_close();
			}
			for(var i=0;i<actions.length;i++)
			{
				var control_id=actions[i][0];
				var function_id=actions[i][1];
				document.getElementById(control_id).onclick = function_id;
			}
			
			if(on_open) on_open();
			
		}
	}
	xhr.send();
	
}