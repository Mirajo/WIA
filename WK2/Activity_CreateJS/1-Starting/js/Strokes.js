window.onload = function() {

    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);

    //setup Shape
    var shape = new createjs.Shape();

    //setup stroke
    shape.graphics.beginStroke("purple");

    //setup properties (width,caps, joint, miter);
    shape.graphics.setStrokeStyle(10, "round", "miter", 5);

    //draw a line

    shape.graphics.moveTo(25,25);
    shape.graphics.lineTo(250, 25);


    shape.graphics.moveTo(50,50);

    //add new line .graphics.quadraticCurveTo(cpy, x, y)
    //shape.graphics.quadraticCurveTo(50,175, 250, 250);

    //arcTo(x1, y1, x2, y2, radius)
    //shape.graphics.arcTo(100, 50, 100, 500, 60);


    //Bezier Curves bezierCurveTo(cp1y, cp2x,cp2y, x, y)
    shape.graphics.bezierCurveTo(100, 50, 250, 50, 250, 250);


    shape.graphics.lineTo(50, 250);


    stage.addChild(shape);
    stage.update();
};