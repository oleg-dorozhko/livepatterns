function getFirstSector(imgData, degree)
{
	
	
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	//context2.clearRect(0,0,canvas2.width,canvas2.height);
	
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=90+-degree/2; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
		break;
	}
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=0;
			clipData.data[n+1]=0;
			clipData.data[n+2]=0;
			clipData.data[n+3]=0;
		}
		else
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
	return mod_rotate2_rotate777((clipData),90+degree*1.5);;
	}
	
	

	
function getSixSector1(imgData)
{
	
//	var halfOfSectorOne =
//	return halfOfSectorOne;
	
	var fullOfSectorOne = getFullOfSectorOne(imgData);
	//return fullOfSectorOne;
	var writeFirst= mod_rotate2_rotate777(mirror_down2(fullOfSectorOne),-30);
	//	return writeFirst;
	
		for (var n = 0; n < writeFirst.data.length; n+=4) {
		
		if((halfOfSectorOne.data[n]==0)&&(halfOfSectorOne.data[n+1]==0)&&(halfOfSectorOne.data[n+2]==0)&&(halfOfSectorOne.data[n+3]==0))
		{
			
			// if((writeFirst.data[n]==255)&&(writeFirst.data[n+1]==0)&&(writeFirst.data[n+2]==0)&&(writeFirst.data[n+3]==255))
			// {
			// writeFirst.data[n]=0;
			// writeFirst.data[n+1]=0;
			// writeFirst.data[n+2]=0;
			// writeFirst.data[n+3]=0;
			// }
			
		}
		else
		{
			writeFirst.data[n]=halfOfSectorOne.data[n];
			writeFirst.data[n+1]=halfOfSectorOne.data[n+1];
			writeFirst.data[n+2]=halfOfSectorOne.data[n+2];
			writeFirst.data[n+3]=halfOfSectorOne.data[n+3];
		}
		}	
		
		
		
		
		
		
		
		
		
		
		
		return writeFirst;

}


function nvenctor_imgData(imgData, callback)
{
	var nnnnn=Number(document.getElementById('image_button43').getAttribute('nnnnn'));
	var degree=	(360/nnnnn);
	var sector2 =  getFirstSector(imgData,degree);
	
	//callback(sector2);
	//return;
	
	var recanvas = document.createElement('canvas');
	recanvas.width=imgData.width;
	recanvas.height=imgData.height;
	var rectx = recanvas.getContext("2d");
	rectx.clearRect(0,0,imgData.width,imgData.height);
	var sector1 = rectx.getImageData(0,0,imgData.width,imgData.height);
	//-102.85714
	
	
	//var tsector = sector2;//mirror_right2(mod_rotate2_rotate777(sector2,180));
	// var sector1 = mod_rotate2_rotate777(tsector,-51.42857);
	
	
	for (var n = 0; n < sector2.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector2.data[n+3]=255;
		}
		else
		{
			sector2.data[n]=sector2.data[n];
			sector2.data[n+1]=sector2.data[n+1];
			sector2.data[n+2]=sector2.data[n+2];
			sector2.data[n+3]=sector2.data[n+3];
		}
	}


	
	for(var nin=0;nin<nnnnn+1;nin++)
	{
	
		//var sector1 = mod_rotate2_rotate777(sector1,-degree);
		
		for (var n = 0; n < sector1.data.length; n+=4) {
			
			// if(sector2.data[n+3]<255)
			// {
				// sector2.data[n+3]=255;
			// }
			
			if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
			{
			}
			else if(sector2.data[n+3]<255)
			{
				sector1.data[n]=sector2.data[n];
				sector1.data[n+1]=sector2.data[n+1];
				sector1.data[n+2]=sector2.data[n+2];
				sector1.data[n+3]=255;
			}
			
			else
			{
				sector1.data[n]=sector2.data[n];
				sector1.data[n+1]=sector2.data[n+1];
				sector1.data[n+2]=sector2.data[n+2];
				sector1.data[n+3]=sector2.data[n+3];
			}
			
			if(sector1.data[n+3]<255)
			{
				sector1.data[n+3]=255;
			}
		}
		
		//showOnCanvas77(sector1)
		//sector1 = mod_nova_rotate3_rotate777(sector1,-degree);
		sector1 = mod_rotate2_rotate777(sector1,-degree);
		//showOnCanvas77(sector1)
		//break;
	}
	//sector1 = mod_rotate2_rotate777(sector1,-degree);
	//sector1= removeTuman(imgData,sector1 );
	
	callback(sector1);
	
}
	
	


function mod_sevenctor_sevenctor_imgData(imgData, callback)
{
		
	var sector2 =  getFirstSector(imgData,51.42857);
	
	var recanvas = document.createElement('canvas');
	recanvas.width=imgData.width;
	recanvas.height=imgData.height;
	var rectx = recanvas.getContext("2d");
	rectx.clearRect(0,0,imgData.width,imgData.height);
	var sector1 = rectx.getImageData(0,0,imgData.width,imgData.height);
	//-102.85714
	
	
	//var tsector = sector2;//mirror_right2(mod_rotate2_rotate777(sector2,180));
	// var sector1 = mod_rotate2_rotate777(tsector,-51.42857);
	
	
	for (var n = 0; n < sector2.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector2.data[n+3]=255;
		}
		else
		{
			sector2.data[n]=sector2.data[n];
			sector2.data[n+1]=sector2.data[n+1];
			sector2.data[n+2]=sector2.data[n+2];
			sector2.data[n+3]=sector2.data[n+3];
		}
	}


	
	for(var nin=0;nin<7;nin++)
	{
	
		var sector1 = mod_rotate2_rotate777(sector1,-51.42857);
		for (var n = 0; n < sector1.data.length; n+=4) {
			
			if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
			{
			}
			else if(sector2.data[n+3]<255)
			{
				sector1.data[n+3]=255;
			}
			else
			{
				sector1.data[n]=sector2.data[n];
				sector1.data[n+1]=sector2.data[n+1];
				sector1.data[n+2]=sector2.data[n+2];
				sector1.data[n+3]=sector2.data[n+3];
			}
		}
		//showOnCanvas77(sector1)
	}
	
	callback(sector1);
	return;
	
	
	
	var sector2 = mod_rotate2_rotate777(tsector,102.85714);
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		else
		{
			sector1.data[n]=sector2.data[n];
			sector1.data[n+1]=sector2.data[n+1];
			sector1.data[n+2]=sector2.data[n+2];
			sector1.data[n+3]=sector2.data[n+3];
		}
	}
	
	callback(sector1);
	return;
	
	
		
	var sector2 = mod_rotate2_rotate777(tsector,102.85714);
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		else
		{
			sector1.data[n]=sector2.data[n];
			sector1.data[n+1]=sector2.data[n+1];
			sector1.data[n+2]=sector2.data[n+2];
			sector1.data[n+3]=sector2.data[n+3];
		}
	}
	
	
		
	var sector2 = mod_rotate2_rotate777(tsector,205.71428);
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		else
		{
			sector1.data[n]=sector2.data[n];
			sector1.data[n+1]=sector2.data[n+1];
			sector1.data[n+2]=sector2.data[n+2];
			sector1.data[n+3]=sector2.data[n+3];
		}
	}
	
		
	var sector2 = mod_rotate2_rotate777(tsector,154,28571);
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		{
		}
		else if(sector2.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		else
		{
			sector1.data[n]=sector2.data[n];
			sector1.data[n+1]=sector2.data[n+1];
			sector1.data[n+2]=sector2.data[n+2];
			sector1.data[n+3]=sector2.data[n+3];
		}
	}
	
	callback(sector1);
	return;
	
	
	
	
	
	
	
	
	
	
	
}

		