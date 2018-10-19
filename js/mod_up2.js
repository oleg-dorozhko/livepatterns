var global_up2_counter_i = 0;
var global_up2_direction = 0;

function up2_thread(imgData,callback)
{
	if(global_up2_direction==0)
	{
		
		for(var i=0;i<global_up2_counter_i;i++)
		{
			imgData = mod_cli_up_up_image_data( imgData );
		}
		
		global_up2_counter_i++;
		if(global_up2_counter_i>=(imgData.width/2|0))
		{
			global_up2_direction = 1; 
		}
		
	}
	else
	{
		for(var i=0;i<global_up2_counter_i;i++)
		{
			imgData = mod_cli_up_reverse_up_image_data( imgData );
		}
		
		global_up2_counter_i--;
		if(global_up2_counter_i<0)
		{
			global_up2_direction = 0; 
		}
	}
	
	callback(imgData);
	
}
