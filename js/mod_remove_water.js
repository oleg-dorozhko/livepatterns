function show_kat_remove_water(imgData,im0)
{
	var palette = getArrayOf3Colors(imgData);
	
	
	var w = im0.width;
	var h = im0.height;
	
			for (var y = 0; y < h; y++) {
		

			for (var x = 0; x < w; x++) {
				
					
					var idx = (w * y + x) << 2;
					var color = getColorArrayFromImageDataByIndex(im0,idx);
					
					var col=mapColorToPalette(palette,color[0], color[1], color[2]);
					col.push(255);
					im0 = setPoint(im0,w, x,y,0,0, col);
					
				}
			}
	return im0;
	
}
 // use Euclidian distance to find closest color
        function mapColorToPalette(palette,red, green, blue) {
            var color, diffR, diffG, diffB, diffDistance, mappedColor;
            var distance = 70000;
            for (var i = 0; i < palette.length; i++) {
                color = palette[i];
                diffR = (color[0] - red);
                diffG = (color[1] - green);
                diffB = (color[2] - blue);
                diffDistance = diffR * diffR + diffG * diffG + diffB * diffB;
                if (diffDistance < distance) {
                    distance = diffDistance;
                    mappedColor = palette[i];
                };
            }
            return (mappedColor);
        }
// use Euclidian distance to find closest color
        function mapColorToPalette2(palette,red, green, blue) {
            var color, diffR, diffG, diffB, diffDistance, mappedColor;
            var distance = 70000;
			
			var indr=-1;
			var minr=255;
			var indg=-1;
			var ming=255;
			var indb=-1;
			var minb=255;
           
		   for (var i = 0; i < palette.length; i++) {
                color = palette[i];
                diffR = (color[0] - red); diffG = (color[1] - green); diffB = (color[2] - blue);
				if((Math.abs(diffR)<minr)&&(Math.abs(diffG)<ming)&&(Math.abs(diffB)<minb))
				{
					indr=i;
					indg=i;
					minr=diffR;
					ming=diffG;
					minb=diffB;
				}
               
               
			}
               
                    mappedColor = palette[indr];
               
            return (mappedColor);
        }




