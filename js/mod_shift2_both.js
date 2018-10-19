var global_shift2_both_i_counter = 0;
var global_shift2_direction = 0;

function shift2_both(imgData,callback)
{
	
	if(global_shift2_direction==0)
	{
		for(var i=0;i<global_shift2_both_i_counter;i++)
		{
			imgData=shift_both_imgData(imgData);
		}
		
		global_shift2_both_i_counter++;
		if(global_shift2_both_i_counter>=(imgData.width/4|0))
		{
			global_shift2_direction = 1; 
		}
	}
	else
	{
		for(var i=0;i<global_shift2_both_i_counter;i++)
		{
			imgData=shift_both_imgData(imgData);
			//imgData=shift_both_reverse_imgData(imgData);
		}
		
		global_shift2_both_i_counter--;
		if(global_shift2_both_i_counter<0)
		{
			global_shift2_direction = 0; 
		}
		
	}

	
	callback(imgData);
	
	
}


