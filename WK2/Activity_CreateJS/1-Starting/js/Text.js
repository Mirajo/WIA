window.onload = function() {
    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);
	
    //text class is working text

    var sentence = new createjs.Text();

    //modify the text
    sentence.text = "This is a sentence .. ";

    //font property
    sentence.font = "bold 30px Times";

    //add color
    sentence.color = "blue";

    //text is a display object. inherts all normal properties

    sentence.x = 150;
    sentence.y = 50;

    // rotate
    //sentence.rotation = 45;

    //text has more properties
    //TextAlign "left", "right", "center"
    sentence.textAlign = "left";

    //lineWidth raps text

    sentence.lineWidth = 200;

    //space in between the lines

    sentence.lineHeight = 40;

    //stroke the text

    sentence.outline = false;

    //combine all code into one line
    var sentence2 = new createjs.Text("This is our second line of text !!", "bold 30px Times", "blue");

    stage.addChild(sentence2);



    stage.addChild(sentence);
    stage.update();
};