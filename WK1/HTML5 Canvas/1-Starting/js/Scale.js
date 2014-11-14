window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

		ctx.save();
		ctx.fillStyle = "blue";
		ctx.fillRect(0,0, 100, 50);

		//scale transforms (effects x,y and height and width)
		ctx.scale(1.5, 2);
		ctx.fillRect(0,50, 100, 50);

		ctx.restore();
		//create 3rd rectangle
		ctx.fillStyle = "purple";
		ctx.scale(.5,.5);
		ctx.fillRect(0,100, 100, 50);


						
		}
	}
};