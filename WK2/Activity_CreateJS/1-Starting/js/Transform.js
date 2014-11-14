window.onload = function() {

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //setup fill

    shape.graphics.beginFill("red");
    shape.graphics.drawRect(50, 50, 100, 100);

    //rotate in degrees rotates around registration point 0,0

    //shape.rotation = 30;

    //change the registration point
    //origin point of the square + width/2 or height/2

    shape.regX = 100;
    shape.regY = 100;

    //move our square back down
    shape.x = 200;
    shape.y = 100;

    //shape.rotation = 30;


    //scaling .5 = half, 2 = twice
    //shape.scaleX = 1.5;
    //shape.scaleY = .5;

    //alpha
    shape.alpha = 1;

    //visible 1 = shows, 0 = hides
    shape.visible = 1;

    //visibility is different than alpha
    //alpha is still clickable and visibility doesn't even draw it, so not clickable

    //skewing
    shape.skewX = 200;
    shape.skewY = 200;


	stage.addChild(shape);
    stage.update();
	
};