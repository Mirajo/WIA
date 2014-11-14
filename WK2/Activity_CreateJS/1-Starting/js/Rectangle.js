window.onload = function() {
	
var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();


    //set up stroje
    shape.graphics.beginStroke("purple");
    shape.graphics.setStrokeStyle(10, "but", "round");

    //draw a rectangle
    shape.graphics.rect(50,50,300,300);

    //Rounded Rectangle drawRoundRect(x,y,w,h,radius)
    shape.graphics.beginStroke("blue");
    shape.graphics.drawRoundRect(75,75, 250, 250, 50);

    //complex rounded rectangle drawRoundRectComplex(x,y,h,TL, BR BL)
    shape.graphics.beginStroke("red");
    shape.graphics.drawRoundRectComplex(100, 100, 200, 200, 50, 0, 50, 0);


    stage.addChild(shape);

    stage.update();
	
	
};