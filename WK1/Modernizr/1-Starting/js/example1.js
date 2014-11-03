if(Modernizr.canvas){
    //canvas supported

    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    //Text on canvas
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 20, 60);

}else{
    //canvas not supported add pollyfills

}
console.log(Modernizr);

if(Modernizr.draganddrop){
    ctx.font = "25pt Georgio";
    ctx.fillText("Drag and Drop Works !!", 20, 120);

}else{
    //polyfills go here

}