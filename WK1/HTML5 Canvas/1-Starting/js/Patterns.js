window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

			/*
		//create pattern from an image

		var patImg = new Image();

		//create an onload function, once image loads use it

		patImg.onload = function(){
			ctx.fillStyle = ctx.createPattern(patImg, "repeat");
			ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);

		};
		patImg.src = "images/flowers.jpg";

		//create a pattern using another canvas
		*/
		var patCanvas = document.getElementById("patCan");
		var patCtx = patCanvas.getContext("2d");

		//draw a red line in our pattern canvas

		patCtx.strokeStyle = "red";
		patCtx.lineWidth = 1;
		patCtx.beginPath();
		patCtx.moveTo(0,0);
		patCtx.lineTo(25,25);
		patCtx.stroke();

		//use pattern canvas as an outline for larger canvas

		var strokePat = ctx.createPattern(patCanvas, "repeat");
		ctx.strokeStyle = strokePat;
		ctx.lineWidth = 25;
		ctx.strokeRect(50,50, 200, 200);

		}
	}
};