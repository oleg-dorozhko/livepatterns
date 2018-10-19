	function getPentaSector0(imgData)
	{
		
	var degree = 36;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-126; n<180;n+=step_angle*2)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		// if((t==4)||(t==5)||(t==8)||(t==9)||(t==12)||(t==13))//break;
		// {
			// context2.fillStyle='rgba(255,0,0,1.0)';
		// }
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
	
	//	callback(clipData);return;
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
		}
		else
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
		
	
		// for (var n = 0; n < clipData.data.length; n+=4) {
		
		// if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		// {
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
		// }
		// else if((clipData.data[n]==imgData.data[n])&&(clipData.data[n+1]==imgData.data[n+1])&&(clipData.data[n+2]==imgData.data[n+2])&&(clipData.data[n+3]==imgData.data[n+3]))
		// {
		// }
		// else{
			
			
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
			
			
			
			
		// }
		// }
			
		
	//
		
		
		var clipData0 = __half_imageData(clipData);
		var clipData2=	vortex(clipData0);
		
		return clipData2;
}
	function getHalfOfSectorOne(imgData)
		{
	var degree = 36;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-54; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		if((t==3)||(t==5)||(t==8)||(t==9)||(t==12)||(t==13))//break;
		{
			context2.fillStyle='rgba(0,255,0,1.0)';
		}
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
		//if(t==4)
			break;
	}
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	//return (clipData);
	
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
	return	 cloneImageData( clipData);
	}
	
	
	
function getFullOfSectorOne(imgData)
		{
	var degree = 36;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-54; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		if((t==3)||(t==5)||(t==8)||(t==9)||(t==12)||(t==13))//break;
		{
			context2.fillStyle='rgba(0,255,0,1.0)';
		}
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
		if(t==4) break;
	}
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	//return (clipData);
	
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
	return	 cloneImageData( clipData);
	}
	
	
function getPentaSector1(imgData)
	{
	
	var halfOfSectorOne = getHalfOfSectorOne(imgData);
	//	return halfOfSectorOne;
	var fullOfSectorOne = getFullOfSectorOne(imgData);
	//return fullOfSectorOne;
	var writeFirst= mod_rotate2_rotate777(mirror_down2(fullOfSectorOne),-36);
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
		
//	var clipData=mod_rotate2_rotate777(halfOfSectorOne,180);
	
//	return comboSectorData( halfOfSectorOne, clipData);
	
		
//		var clipData0 = __half_imageData(clipData);
//		var clipData2=	vortex(clipData0);
		
//		return clipData2;
}



















	function getHalfOfSectorTwo(imgData)
		{
	var degree = 36;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=18; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		if((t==3)||(t==5)||(t==8)||(t==9)||(t==12)||(t==13))//break;
		{
			context2.fillStyle='rgba(0,255,0,1.0)';
		}
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
		//if(t==4)
			break;
	}
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	//return (clipData);
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
		}
		else
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
	return	 cloneImageData( clipData);
	}
	
	
	
function getFullOfSectorTwo(imgData)
		{
	var degree = 36;//Number(document.getElementById('image_button31').getAttribute('angle'));
	
	///
	
		var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width*2;
	canvas2.height = imgData.height*2;
	var context2 = canvas2.getContext("2d");
	context2.fillStyle='rgba(255,0,0,1.0)';
	context2.fillRect(0,0,canvas2.width,canvas2.height);
	//context2.putImageData(imageData0,0,0);
	
	var cx = imgData.width;
	var cy = imgData.height;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=18; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(0,0,255,1.0)';
		
		if((t==3)||(t==5)||(t==8)||(t==9)||(t==12)||(t==13))//break;
		{
			context2.fillStyle='rgba(0,255,0,1.0)';
		}
		context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		
		t++;
	
		if(t==4) break;
	}
	
	
	var clipData =   median(context2.getImageData(0,0,canvas2.width,canvas2.height));
	
	//return (clipData);
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
		}
		else
		{
			clipData.data[n]=imgData.data[n];
			clipData.data[n+1]=imgData.data[n+1];
			clipData.data[n+2]=imgData.data[n+2];
			clipData.data[n+3]=imgData.data[n+3];
		}
		}
	return	 cloneImageData( clipData);
	}
	












	
function getPentaSector2(imgData)
	{
	
	var halfOfSectorOne = getHalfOfSectorTwo(imgData);
		
	var fullOfSectorOne = getFullOfSectorTwo(imgData);
	
	var writeFirst= mod_rotate2_rotate777(mirror_down2(fullOfSectorOne),-36);
		
	
		for (var n = 0; n < writeFirst.data.length; n+=4) {
		
		if((halfOfSectorOne.data[n]==255)&&(halfOfSectorOne.data[n+1]==0)&&(halfOfSectorOne.data[n+2]==0)&&(halfOfSectorOne.data[n+3]==255))
		{
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
		
//	var clipData=mod_rotate2_rotate777(halfOfSectorOne,180);
	
//	return comboSectorData( halfOfSectorOne, clipData);
	
		
//		var clipData0 = __half_imageData(clipData);
//		var clipData2=	vortex(clipData0);
		
//		return clipData2;
}










//with error -> no normal spin rotation
function mod_penta_pentalist_imgData(imgData, callback)
{
	//var arr = getColorsCountPro(__half_imageData(imgData));
	
	
	
	var sector2 = getPentaSector1(imgData);
	var sector0 = mod_rotate2_rotate777(sector2,-72);
	// for (var n = 0; n < sector2.data.length; n+=4) {
		
		// var key = ""+sector2.data[n]+"-"+sector2.data[n+1]+"-"+sector2.data[n+2]+"-"+sector2.data[n+3];
		// if(arr[1][key]==undefined)
		// {
			// if((sector2.data[n]==255)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==255))
			// {
			// }
			// else
			// {
				// sector2.data[n]=sector2.data[n-4];
				// sector2.data[n+1]=sector2.data[n-4+1];;
				// sector2.data[n+2]=sector2.data[n-4+2];;
				// sector2.data[n+3]=sector2.data[n-4+3];;
			// }
		// }
		
	// }	
	
	
	
	
	
	
	
	//context2.clearRect(0,0,canvas2.width,canvas2.height);
	
	
	
	var sector1 = mod_rotate2_rotate777(sector2,72);
	
	
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
	
	var sector3 = mirror_right2(sector1);	
	
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if((sector3.data[n]==0)&&(sector3.data[n+1]==0)&&(sector3.data[n+2]==0)&&(sector3.data[n+3]==0))
		{
		}
		else if(sector3.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		else
		{
			sector1.data[n]=sector3.data[n];
			sector1.data[n+1]=sector3.data[n+1];
			sector1.data[n+2]=sector3.data[n+2];
			sector1.data[n+3]=sector3.data[n+3];
		}
		}	
	//callback(sector1);
	//return;
	//var sector2 = mod_rotate2_rotate777(sector1,72);
	
	
	// var sector2=sector0;
	// var sector1=sector1;
	
	for (var n = 0; n < sector1.data.length; n+=4) {
		
		if(sector1.data[n+3]<255)
		{
			sector1.data[n+3]=255;
		}
		
	}
		
		
		// if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==0))
		// {
		// }
		// else if((sector2.data[n]==0)&&(sector2.data[n+1]==0)&&(sector2.data[n+2]==0)&&(sector2.data[n+3]==255))
		// {
		// }
		// if(sector2.data[n+3]<255)
		// {
			// sector1.data[n+3]=255;
		// }
		// else
		// {
			// sector1.data[n]=sector2.data[n];
			// sector1.data[n+1]=sector2.data[n+1];
			// sector1.data[n+2]=sector2.data[n+2];
			// sector1.data[n+3]=sector2.data[n+3];
		// }
		// }	
	
	
	
	var clipData2=mod_rotate2_rotate777(sector1,144);
	
	
	
	
	for (var n = 0; n < clipData2.data.length; n+=4) {
		
		if((sector1.data[n]==0)&&(sector1.data[n+1]==0)&&(sector1.data[n+2]==0)&&(sector1.data[n+3]==255))
		{
		}
		
		else
		{
			clipData2.data[n]=sector1.data[n];
			clipData2.data[n+1]=sector1.data[n+1];
			clipData2.data[n+2]=sector1.data[n+2];
			clipData2.data[n+3]=sector1.data[n+3];
		}
		}	
	
	
	
	
	callback(clipData2);
	return;
	
	
	
	
	var imgData4 = mod_rotate2_rotate777(clipData,144);	
	var clipData3 = mod_cli_up_getPartOfImageData(imgData4,0,imgData4.height/2,imgData4.width,imgData4.height/2);
	
	
	var canvas2 = document.createElement('canvas');
	canvas2.width = imgData.width;
	canvas2.height = imgData.height;
	var context2 = canvas2.getContext("2d");
	
	context2.putImageData(clipData2,0,0);
	context2.putImageData(clipData0,0,0);
	context2.putImageData(clipData3,0,clipData0.height);
	
	
	var imgDataBeforeRed=cloneImageData(canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height));
	
	callback(imgDataBeforeRed);
	
	return;
	
	
	
	cx=cx/2;
	cy=cy/2;
	var step_angle=degree;//Number(document.getElementById('magik_rotate_step_angle').value);
	var t=2;
	for(var n=-180; n<180;n+=step_angle)
	{
		context2.fillStyle='rgba(255,0,0,1.0)';
		if(t%2==1)
		{
			context2.fillStyle='rgba(255,0,0,1.0)';context2.beginPath();
		context2.moveTo(cx,cy);
		var nn=n*Math.PI / 180;
		var nns=(n+step_angle)*Math.PI / 180;
		context2.arc(cx,cy,cx,nn,nns);
		context2.lineTo(cx,cy);
		context2.fill();
		}
		
		
		t++;
	
	
	}
	clipData= canvas2.getContext("2d").getImageData(0,0,canvas2.width,canvas2.height);
	
	
	
	
	for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			// imgData8.data[n]=imgData4.data[n];
			// imgData8.data[n+1]=imgData4.data[n+1];
			// imgData8.data[n+2]=imgData4.data[n+2];
			// imgData8.data[n+3]=imgData4.data[n+3];
		}
		else
		{
			clipData.data[n]=imgDataBeforeRed.data[n];
			clipData.data[n+1]=imgDataBeforeRed.data[n+1];
			clipData.data[n+2]=imgDataBeforeRed.data[n+2];
			clipData.data[n+3]=imgDataBeforeRed.data[n+3];
	
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//callback(clipData);return;
	
	 var imgData4=	mirror_right2(clipData);
	
	
	 var imgData8 =  mod_rotate2_rotate777(imgData4,60);
	
	//imgData4=clipData;
	
	
		for (var n = 0; n < clipData.data.length; n+=4) {
		
		if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		{
			clipData.data[n]=imgData8.data[n];
			clipData.data[n+1]=imgData8.data[n+1];
			clipData.data[n+2]=imgData8.data[n+2];
			clipData.data[n+3]=imgData8.data[n+3];
		}
		else
		{
			
			// if((imgData8.data[n]==imgDataBeforeRed.data[n])&&(imgData8.data[n+1]==imgDataBeforeRed.data[n+1])&&(imgData8.data[n+2]==imgDataBeforeRed.data[n+2])&&(imgData8.data[n+3]==imgDataBeforeRed.data[n+3]))
			// {
				
				
				
				
			// }
			// else	
			// {
				
				
				// imgData8.data[n]=imgDataBeforeRed.data[n];
				// imgData8.data[n+1]=imgDataBeforeRed.data[n+1];
				// imgData8.data[n+2]=imgDataBeforeRed.data[n+2];
				// imgData8.data[n+3]=imgDataBeforeRed.data[n+3];
				
				
			// }				
			
			
			
			
			
			
			
			
			
		}
		
		
	 }
	//clipData= imgData8;
	// imgData=imgData4;
//	  clipData= mod_rotate2_rotate777(imgData8,30);
	
	//	clipData=removeTwoVerticalWhiteLine(clipData);	  

	//	clipData= mod_rotate2_rotate777(clipData,60);
			
	//	clipData=removeTwoVerticalWhiteLine(clipData);
		
		// for (var n = 0; n < clipData.data.length; n+=4) {
		
		// if((clipData.data[n]==255)&&(clipData.data[n+1]==0)&&(clipData.data[n+2]==0)&&(clipData.data[n+3]==255))
		// {
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
		// }
		// else if((clipData.data[n]==imgData.data[n])&&(clipData.data[n+1]==imgData.data[n+1])&&(clipData.data[n+2]==imgData.data[n+2])&&(clipData.data[n+3]==imgData.data[n+3]))
		// {
		// }
		// else{
			
			
			// clipData.data[n]=imgData.data[n];
			// clipData.data[n+1]=imgData.data[n+1];
			// clipData.data[n+2]=imgData.data[n+2];
			// clipData.data[n+3]=imgData.data[n+3];
			
			
			
			
		// }
		// }
			
	//	clipData=circle_median(clipData);
		
	
	
	
	callback(clipData);
}
