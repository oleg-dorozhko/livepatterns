CanvasRenderingContext2D.prototype.drawArchimedeanSpiral =
    CanvasRenderingContext2D.prototype.drawArchimedeanSpiral ||
        function(centerX, centerY, stepCount, loopCount,
                 innerDistance, loopSpacing, rotation, color )
        {
			
            this.beginPath();
			this.strokeStyle = color;
			
            var stepSize = 2 * Math.PI / stepCount,
                endAngle = 2 * Math.PI * loopCount,
                finished = false;

            for (var angle = 0; !finished; angle += stepSize) {
                // Ensure that the spiral finishes at the correct place,
                // avoiding any drift introduced by cumulative errors from
                // repeatedly adding floating point numbers.
                if (angle > endAngle) {
                    angle = endAngle;
                    finished = true;
                }

                var scalar = innerDistance + loopSpacing * angle,
                    rotatedAngle = angle + rotation,
                    x = centerX + scalar * Math.cos(rotatedAngle),
                    y = centerY + scalar * Math.sin(rotatedAngle);

                this.lineTo(x, y);
            }

            this.stroke();
        }
		
		
		
		function spiral_imgData(imgData,callback)
		{
			
			var result_canvas = document.createElement('canvas');
			result_canvas.width = imgData.width;
			result_canvas.height = imgData.height;
			var result_context = result_canvas.getContext("2d");
			result_context.putImageData(imgData,0,0);
			result_context.imageSmoothingEnabled = false;
			var centerX = result_canvas.width / 2;
			var centerY = result_canvas.height / 2;
			var stepCount = 10;
			var loopCount = 10;
			var innerDistance=10;
			var loopSpacing=10;
			var rotation=10;
			var color='rgba(0,0,0,255)';
			result_context.lineWidth=5;
			result_context.drawArchimedeanSpiral( centerX, centerY, stepCount, loopCount, innerDistance, loopSpacing, rotation, color );
			
			var color='rgba(0,0,0,255)';
			var stepCount = 15;
			var loopCount = 15;
			var innerDistance=15;
			var loopSpacing=15;
			var rotation=15;
			result_context.lineWidth=5;
			result_context.drawArchimedeanSpiral( centerX-5, centerY, stepCount, loopCount, innerDistance, loopSpacing, rotation, color  );
			var color='rgba(0,0,0,255)';
			var stepCount = 20;
			var loopCount = 20;
			var innerDistance=20;
			var loopSpacing=20;
			var rotation=20;
			result_context.lineWidth=5;
			result_context.drawArchimedeanSpiral( centerX+5, centerY, stepCount, loopCount, innerDistance, loopSpacing, rotation, color  );
			
			var result_image_data =result_context.getImageData(0,0,result_canvas.width,result_canvas.height);
			callback(result_image_data);
			
		}