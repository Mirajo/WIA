window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
		ctx.strokeStyle ="blue";
		ctx.lineWidth =5;

		//stroke a bezier curve
		ctx.beginPath();
		ctx.moveTo(50,200);

		//beziercurveTo(cx, cy, cx2, cy2, x, y)

		ctx.bezierCurveTo(50, 100, 200, 100, 200, 150);
		ctx.stroke();

		//quadratic curve
		ctx.beginPath();
		ctx.moveTo(400, 200);

		//quadraticCurveTo(cx, cy, x, y)
		ctx.quadraticCurveTo(400, 100,600, 150);
		ctx.stroke();
				
						
						
		}
	}
}