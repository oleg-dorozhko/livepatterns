function prepare_security()
{
	if(window.obvod7_credentials != undefined)
	{
		document.getElementById('insane_delay').value=window.obvod7_credentials.main_object_of_credentials[0].insane_delay;
		document.getElementById('from_canvas_for_gif').value=window.obvod7_credentials.main_object_of_credentials[0].from_canvas_for_gif;
		document.getElementById('frequence_of_gif').value=window.obvod7_credentials.main_object_of_credentials[0].frequence_of_gif;
		document.getElementById('author_of_gif').value=window.obvod7_credentials.main_object_of_credentials[0].author_of_gif;
	}
	//global_insane_delay = Number();
	//global_password=prompt("Please, enter password",""+global_password);
	//global_frames_per_save=prompt("Please, enter frames per save",""+global_frames_per_save);
}