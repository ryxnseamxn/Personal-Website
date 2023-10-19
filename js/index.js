mapNumberToRange = (number, fromMin, fromMax, toMin, toMax) => {
	const normalizedNumber = (number - fromMin)/ (fromMax - fromMin); 
	const mappedNumber = toMin + (normalizedNumber * (toMax - toMin)); 
	return mappedNumber;
}
 
var slider = document.getElementById("slider");
var maxIterations = slider.value;
updateSlider = () => {
	var sliderValue = slider.value; 
	maxIterations = sliderValue;
	updateCanvas(); 
}

slider.addEventListener("input", updateSlider); 

var c = document.getElementById("canvas");
var context = c.getContext("2d"); 

context.fillStyle='white'; 
context.fillRect(0,0,c.width,c.height); 

context.fillStyle = "black"; 
updateCanvas = () => {
	for(let x = 0; x < c.width; x++){
		for(let y = 0; y < c.height; y++){
			var a = mapNumberToRange(x, 0, c.width, -2, 2);
			var b = mapNumberToRange(y, 0, c.height, -2, 2);
			
			var ca = a; 
			var cb = b; 

			var n = 0; 
			
			while(n < maxIterations){
				var aa = a * a - b * b;
				var ab = 2 * a * b; 
				a = aa + ca; 
				b = ab + cb;

				if(a * a + b * b > 16){
				 break; 
				}

				n++; 
			}
			var bright = mapNumberToRange(n, 0, maxIterations, 0, 1); 
			bright = mapNumberToRange(Math.sqrt(bright),0,1,0,255);
			if(n == maxIterations){
			 bright = 255; 
			}
			context.fillStyle= "rgb(" + bright + ", " + bright + ", " + bright + ")"; 
			context.fillRect(x,y,1,1); 
		}
	}
}
updateCanvas(); 
