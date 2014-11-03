/*
     Name:Miranda Johnosn
     Date:10-30-2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
            //Draw a rectangle
            ctx.beginPath();
            ctx.rect(0, 0, 50, 100);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "black";
            ctx.stroke();

        }
    }

    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/

//Draw Circle here
    var theCanvas2 = document.getElementById('Canvas2');
    if (theCanvas2 && theCanvas2.getContext) {
        var ctx2 = theCanvas2.getContext("2d");
        var centerX = theCanvas2.width / 2;
        var centerY = theCanvas2.height / 2;
        var radius = 20;
        if (ctx2) {

            // Draw a circle
            ctx2.beginPath();
            ctx2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx2.fillStyle = "rgba(255, 0, 0, 0.5)";
            ctx2.fill();
            ctx2.strokeStyle = "black";
            ctx2.stroke();

        }

    }

    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


//Draw Star here
    var theCanvas3 = document.getElementById("Canvas3");
    if (theCanvas3 && theCanvas3.getContext) {
        var ctx3 = theCanvas3.getContext("2d");
        if (ctx3) {
            ctx3.beginPath();
            ctx3.moveTo(100, 100);
            ctx3.lineTo(75, 150);
            ctx3.lineTo(100, 200);
            ctx3.lineTo(125, 150);
            ctx3.lineTo(155, 200);
            ctx3.lineTo(200, 150);
            ctx3.lineTo(150, 100);
            ctx3.stroke();

        }

        /*******************************************
         PART 4

         Practice drawing with Bezier curves.
         Try drawing the top to an umbrella.
         This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

         Position, height, width and color are your choice.
         Do not overlap any other object.

         ********************************************/


        //Draw Umbrella top here

        /*******************************************
         PART 5

         Practice using text.
         Draw text into your canvas.  It can said whatever you would like in any color.

         ********************************************/

        //Draw text here
        var theCanvas5 = document.getElementById("Canvas5");
        if (theCanvas5 && theCanvas5.getContext) {
            var ctx5 = theCanvas5.getContext("2d");
            if (ctx5) {

                ctx5.font = "40pt Georgia";
                ctx5.fillText("MIRAJO", 150, 100);
                ctx5.stroke();

            }
        }
    }

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here
    var theCanvas6 = document.getElementById("Canvas6");
    if (theCanvas6 && theCanvas6.getContext) {
        var ctx6 = theCanvas6.getContext("2d");
        if (ctx6) {
            var srcImg = document.getElementById("logo");

            //draw image on canvas
            ctx6.drawImage(srcImg, 0, 0);

            //draw a scaled down image(srcImg, dx, dy, dw,dh)
            ctx6.drawImage(srcImg, 50, 50, 240, 250);

            //draw a slice image(srcImg, sx, sy, sw,sh dx, dy, dw, dh)
            ctx6.drawImage(srcImg, 250, 50, 140, 100, 50, 100, 180, 270);
        }
    }
    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here
    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext) {
        var ctx7 = theCanvas7.getContext("2d");
        if (ctx7) {
            //Draw a rectangle
            ctx7.beginPath();
            ctx7.rect(0, 200, 50, 100);
            ctx7.fillStyle = "blue";
            ctx7.fill();
            ctx7.lineWidth = 2;
            ctx7.strokeStyle = "black";
            ctx7.stroke();

            //Draw a rectangle
            ctx7.beginPath();
            ctx7.rect(600, 200, 50, 100);
            ctx7.fillStyle = "blue";
            ctx7.fill();
            ctx7.lineWidth = 2;
            ctx7.strokeStyle = "black";
            ctx7.stroke();

        }
    }

    var theCanvas7 = document.getElementById('Canvas7');
    if (theCanvas7 && theCanvas7.getContext) {
        var ctx7 = theCanvas7.getContext("2d");
        var centerX = theCanvas7.width / 2;
        var centerY = theCanvas7.height / 2;
        var radius = 90;
        if (ctx7) {

            // Draw a circle
            ctx7.beginPath();
            ctx7.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx7.fillStyle = "yellow";
            ctx7.fill();
            ctx7.strokeStyle = "red";
            ctx7.stroke();


            var theCanvas7 = document.getElementById("Canvas7");
            if (theCanvas7 && theCanvas7.getContext) {
                var ctx7 = theCanvas7.getContext("2d");
                if (ctx7) {

                    ctx7.font = "40pt Georgia";
                    ctx7.fillText("MIRAJO", 10, 100);
                    //ctx7.strokeStyle = "blue";
                    ctx7.stroke();

                }


            }
        }
    }
};

