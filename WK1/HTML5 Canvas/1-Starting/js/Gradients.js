window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		//create a linear gradient
		//createLinearGradient(x0,y0, x1,y1);

		var lineGrd = ctx.createLinearGradient(20,20,220,200);
		//var lineGrd = ctx.createLinearGradient(20,20,220,20);

		//adding color stops
		lineGrd.addColorStop(0,"#f00");
		lineGrd.addColorStop(.5, "#00f");
		lineGrd.addColorStop(1, "#0f0");

		//create a rectangle
		ctx.fillStyle = lineGrd;
		ctx.fillRect(20,20, 200, 280);

		//create a radial gradient(x0, y0, r0, x1,y1, r1)

		var radGrad = ctx.createRadialGradient(525, 150,20, 525, 150, 100);

		//Add Color Stops
		radGrad.addColorStop(0,"#f00");
		radGrad.addColorStop(.5, "#00f");
		radGrad.addColorStop(1, "#0f0");

		ctx.fillStyle = radGrad;
		ctx.beginPath();
		ctx.arc(525, 150, 100, 0, 2*Math.PI);
		ctx.fill();
						
		}
	}
};